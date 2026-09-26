import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { DATA } from '../content';

const STORAGE_KEY = 'hangeul_duo_state_v2';
export const MAX_HEARTS = 5;

export interface Progress {
  stars: number;
  hearts: number;
  completedLessons: string[];
  unlockedLessons: string[];
  freeMode: boolean;
}

const INITIAL: Progress = {
  stars: 0,
  hearts: MAX_HEARTS,
  completedLessons: [],
  unlockedLessons: [DATA.lessons[0]?.id ?? 'lesson_1_1'],
  freeMode: true,
};

interface ProgressApi extends Progress {
  loaded: boolean;
  addStars: (n: number) => void;
  /** Returns the hearts left after losing one. */
  loseHeart: () => number;
  refillHearts: () => void;
  completeLesson: (id: string) => void;
  setFreeMode: (on: boolean) => void;
  resetProgress: () => void;
}

const ProgressContext = createContext<ProgressApi | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<Progress>(INITIAL);
  const [loaded, setLoaded] = useState(false);
  // Mirror for synchronous reads inside callbacks (e.g. loseHeart's return value).
  const ref = useRef(progress);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((saved) => {
        if (!saved) return;
        const obj = JSON.parse(saved) as Partial<Progress>;
        const next: Progress = {
          stars: obj.stars ?? 0,
          hearts: obj.hearts ?? MAX_HEARTS,
          completedLessons: obj.completedLessons ?? [],
          unlockedLessons: obj.unlockedLessons ?? INITIAL.unlockedLessons,
          freeMode: obj.freeMode ?? true,
        };
        ref.current = next;
        setProgress(next);
      })
      .catch(() => {})
      .finally(() => setLoaded(true));
  }, []);

  const update = useCallback((fn: (p: Progress) => Progress) => {
    const next = fn(ref.current);
    ref.current = next;
    setProgress(next);
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(next)).catch(() => {});
    return next;
  }, []);

  const api = useMemo<ProgressApi>(
    () => ({
      ...progress,
      loaded,
      addStars: (n) => update((p) => ({ ...p, stars: p.stars + n })),
      loseHeart: () => update((p) => ({ ...p, hearts: Math.max(0, p.hearts - 1) })).hearts,
      refillHearts: () => update((p) => ({ ...p, hearts: MAX_HEARTS })),
      completeLesson: (id) =>
        update((p) => {
          const completed = p.completedLessons.includes(id) ? p.completedLessons : [...p.completedLessons, id];
          const ids = DATA.lessons.map((l) => l.id);
          const nextId = ids[ids.indexOf(id) + 1];
          const unlocked =
            nextId && !p.unlockedLessons.includes(nextId) ? [...p.unlockedLessons, nextId] : p.unlockedLessons;
          return { ...p, completedLessons: completed, unlockedLessons: unlocked };
        }),
      setFreeMode: (on) => update((p) => ({ ...p, freeMode: on })),
      resetProgress: () => update(() => INITIAL),
    }),
    [progress, loaded, update]
  );

  return <ProgressContext.Provider value={api}>{children}</ProgressContext.Provider>;
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used inside ProgressProvider');
  return ctx;
}
