import { useEffect, useMemo, useState } from 'react';
import { Animated, Image, PanResponder, Pressable, StyleSheet, Text, View, type GestureResponderEvent } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Icon } from '../components/Icon';
import { RichText } from '../components/RichText';
import { AudioButton } from '../components/ui';
import {
  IMAGES,
  type BuilderStep as BuilderStepData,
  type ChoiceStep as ChoiceStepData,
  type ListeningStep as ListeningStepData,
  type MatchStep as MatchStepData,
  type StrokeStep as StrokeStepData,
  type TheoryStep as TheoryStepData,
} from '../content';
import { sfx } from '../services/sound';
import { speakKorean } from '../services/speech';
import { colors, font, koFont, radius } from '../theme';

function shuffle<T>(items: T[]): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function StepBadge({ children }: { children: string }) {
  return (
    <View style={styles.badge}>
      <Text style={styles.badgeText}>{children}</Text>
    </View>
  );
}

// ---------------- THEORY ----------------
export function TheoryStep({ step }: { step: TheoryStepData }) {
  const image = step.image ? IMAGES[step.image] : undefined;
  // Show lesson diagrams whole (not cropped) at their natural aspect ratio.
  const size = image ? Image.resolveAssetSource(image) : undefined;
  const aspectRatio = size?.width && size?.height ? size.width / size.height : 16 / 9;
  const [boxWidth, setBoxWidth] = useState(0);
  const imageHeight = boxWidth ? Math.min(boxWidth / aspectRatio, 300) : 0;
  return (
    <View>
      <StepBadge>Nazariya va talaffuz</StepBadge>
      <Text style={styles.question}>{step.title}</Text>
      <View style={styles.theoryCard}>
        <View style={styles.hero}>
          <Text style={styles.heroWord}>{step.korean}</Text>
          <AudioButton onPress={() => speakKorean(step.audio || step.korean)} label="Ovoz chiqarish" />
        </View>
        {image && (
          <View onLayout={(e) => setBoxWidth(e.nativeEvent.layout.width)}>
            {boxWidth > 0 && (
              <Image source={image} style={[styles.theoryImage, { height: imageHeight }]} resizeMode="contain" />
            )}
          </View>
        )}
        <RichText style={styles.theoryBody}>{step.explanation}</RichText>
        {step.points?.map((p, i) => (
          <View key={i} style={styles.bullet}>
            <Text style={styles.bulletDot}>•</Text>
            <RichText style={styles.bulletText}>{p}</RichText>
          </View>
        ))}
      </View>
    </View>
  );
}

// ---------------- CHOICE & LISTENING ----------------
interface ChoiceProps {
  step: ChoiceStepData | ListeningStepData;
  selected: number | null;
  locked: boolean;
  onSelect: (idx: number) => void;
}

function Options({ step, selected, locked, onSelect }: ChoiceProps) {
  return (
    <View style={{ gap: 10 }}>
      {step.options.map((opt, idx) => {
        const isSel = selected === idx;
        return (
          <Pressable
            key={idx}
            disabled={locked}
            onPress={() => {
              sfx.click();
              onSelect(idx);
            }}
            accessibilityRole="radio"
            accessibilityState={{ selected: isSel }}
            style={({ pressed }) => [styles.option, isSel && styles.optionSelected, pressed && styles.optionPressed]}
          >
            <View style={[styles.optionKey, isSel && styles.optionKeySelected]}>
              <Text style={[styles.optionKeyText, isSel && { color: '#fff' }]}>{idx + 1}</Text>
            </View>
            <Text style={styles.optionText}>{opt}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

export function ChoiceStep(props: ChoiceProps) {
  return (
    <View>
      <StepBadge>To'g'ri javobni tanlang</StepBadge>
      <Text style={styles.question}>{props.step.question}</Text>
      <Options {...props} />
    </View>
  );
}

export function ListeningStep(props: ChoiceProps & { step: ListeningStepData }) {
  return (
    <View>
      <View style={{ alignItems: 'center' }}>
        <StepBadge>Tinglab mosini toping</StepBadge>
        <Text style={[styles.question, { textAlign: 'center' }]}>{props.step.question}</Text>
        <View style={styles.listenRow}>
          <AudioButton size="large" onPress={() => speakKorean(props.step.audio, 0.9)} label="Oddiy tezlik" />
          <AudioButton size="large" slow onPress={() => speakKorean(props.step.audio, 0.65)} label="Sekin tezlik" />
        </View>
      </View>
      <Options {...props} />
    </View>
  );
}

// ---------------- MATCH ----------------
interface MatchCard {
  val: string;
  id: string;
  isKorean: boolean;
}

export function MatchStep({ step, onComplete }: { step: MatchStepData; onComplete: () => void }) {
  const cards = useMemo<MatchCard[]>(
    () =>
      shuffle([
        ...step.pairs.map((p) => ({ val: p.k, id: p.k, isKorean: true })),
        ...step.pairs.map((p) => ({ val: p.v, id: p.k, isKorean: false })),
      ]),
    [step]
  );
  const [active, setActive] = useState<number | null>(null);
  const [matched, setMatched] = useState<Set<number>>(new Set());
  const [errors, setErrors] = useState<number[]>([]);
  const [shake] = useState(() => new Animated.Value(0));

  const press = (idx: number) => {
    if (matched.has(idx)) return;
    sfx.click();
    const card = cards[idx];
    if (card.isKorean) speakKorean(card.val);

    if (active === null) {
      setActive(idx);
      return;
    }
    if (active === idx) {
      setActive(null);
      return;
    }
    const first = cards[active];
    if (first.id === card.id && first.isKorean !== card.isKorean) {
      const next = new Set(matched);
      next.add(active);
      next.add(idx);
      setMatched(next);
      setActive(null);
      if (next.size === cards.length) setTimeout(onComplete, 300);
    } else {
      sfx.wrong();
      setErrors([active, idx]);
      setActive(null);
      shake.setValue(0);
      Animated.sequence([
        Animated.timing(shake, { toValue: -6, duration: 75, useNativeDriver: true }),
        Animated.timing(shake, { toValue: 6, duration: 75, useNativeDriver: true }),
        Animated.timing(shake, { toValue: -6, duration: 75, useNativeDriver: true }),
        Animated.timing(shake, { toValue: 0, duration: 75, useNativeDriver: true }),
      ]).start();
      setTimeout(() => setErrors([]), 350);
    }
  };

  return (
    <View>
      <StepBadge>Juftliklarni moslang</StepBadge>
      <Text style={styles.question}>{step.question}</Text>
      <Text style={styles.hint}>Mos koreyscha va o'zbekcha so'zlarni birma-bir bosing:</Text>
      <View style={styles.matchGrid}>
        {cards.map((c, idx) => {
          const isMatched = matched.has(idx);
          const isErr = errors.includes(idx);
          const isSel = active === idx;
          return (
            <Animated.View
              key={idx}
              style={[styles.matchCell, isErr && { transform: [{ translateX: shake }] }]}
            >
              <Pressable
                onPress={() => press(idx)}
                disabled={isMatched}
                accessibilityRole="button"
                accessibilityState={{ selected: isSel, disabled: isMatched }}
                style={[
                  styles.matchCard,
                  isSel && styles.matchSelected,
                  isMatched && styles.matchMatched,
                  isErr && styles.matchError,
                ]}
              >
                <Text
                  style={[
                    styles.matchText,
                    c.isKorean && koFont(800),
                    isSel && { color: colors.blue },
                    isMatched && { color: colors.correctText },
                    isErr && { color: colors.wrongTextLight },
                  ]}
                >
                  {c.val}
                </Text>
              </Pressable>
            </Animated.View>
          );
        })}
      </View>
    </View>
  );
}

// ---------------- BUILDER ----------------
interface BuilderProps {
  step: BuilderStepData;
  pool: string[];
  answer: number[];
  locked: boolean;
  onChange: (answer: number[]) => void;
}

export function builderPool(step: BuilderStepData) {
  return shuffle([...step.syllables, ...(step.distractors ?? [])]);
}

export function BuilderStep({ step, pool, answer, locked, onChange }: BuilderProps) {
  return (
    <View>
      <StepBadge>Bo'g'inlardan so'z tuzing</StepBadge>
      <Text style={styles.question}>{step.question}</Text>
      <View style={styles.dropArea}>
        {answer.length === 0 ? (
          <Text style={styles.placeholder}>Bo'g'inlarni bu yerga bosing...</Text>
        ) : (
          answer.map((poolIdx, i) => (
            <Pressable
              key={`${poolIdx}-${i}`}
              disabled={locked}
              onPress={() => {
                sfx.click();
                onChange(answer.filter((a) => a !== poolIdx));
              }}
              style={({ pressed }) => [styles.tile, pressed && styles.tilePressed]}
            >
              <Text style={styles.tileText}>{pool[poolIdx]}</Text>
            </Pressable>
          ))
        )}
      </View>
      <View style={styles.pool}>
        {pool.map((syl, idx) => {
          const used = answer.includes(idx);
          return (
            <Pressable
              key={idx}
              disabled={used || locked}
              onPress={() => {
                sfx.click();
                speakKorean(syl);
                onChange([...answer, idx]);
              }}
              style={({ pressed }) => [styles.tile, used && styles.tileUsed, pressed && styles.tilePressed]}
            >
              <Text style={[styles.tileText, used && { opacity: 0 }]}>{syl}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

// ---------------- STROKE ----------------
const CANVAS = 240;

export function StrokeStep({ step, onDrawing }: { step: StrokeStepData; onDrawing: (drawing: boolean) => void }) {
  // Finished strokes plus the one being drawn, as SVG path data.
  const [ink, setInk] = useState<{ paths: string[]; live: string }>({ paths: [], live: '' });

  const responder = useMemo(() => {
    const pt = (e: GestureResponderEvent) =>
      `${e.nativeEvent.locationX.toFixed(1)} ${e.nativeEvent.locationY.toFixed(1)}`;
    const commit = () => {
      setInk((s) => ({ paths: s.live ? [...s.paths, s.live] : s.paths, live: '' }));
      onDrawing(false);
    };
    return PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderTerminationRequest: () => false,
      onPanResponderGrant: (e) => {
        onDrawing(true);
        const p = pt(e);
        setInk((s) => ({ ...s, live: `M${p} L${p}` }));
      },
      onPanResponderMove: (e) => {
        const p = pt(e);
        setInk((s) => ({ ...s, live: `${s.live} L${p}` }));
      },
      onPanResponderRelease: commit,
      onPanResponderTerminate: commit,
    });
  }, [onDrawing]);

  useEffect(() => () => onDrawing(false), [onDrawing]);

  return (
    <View style={{ alignItems: 'center' }}>
      <StepBadge>Harfni yozish mashqi</StepBadge>
      <Text style={[styles.question, { textAlign: 'center' }]}>{step.name} harfini chizing</Text>

      <View style={styles.canvasBox} {...responder.panHandlers}>
        <View style={styles.watermarkWrap} pointerEvents="none">
          <Text style={styles.watermark}>{step.canvasLetter}</Text>
        </View>
        <Svg width={CANVAS} height={CANVAS} style={StyleSheet.absoluteFill} pointerEvents="none">
          {[...ink.paths, ink.live].filter(Boolean).map((d, i) => (
            <Path
              key={i}
              d={d}
              stroke={colors.textMain}
              strokeWidth={14}
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          ))}
        </Svg>
      </View>

      <View style={styles.strokeBtns}>
        <Pressable
          style={styles.chipBtn}
          onPress={() => {
            sfx.click();
            setInk({ paths: [], live: '' });
          }}
        >
          <Icon name="trash" size={14} />
          <Text style={styles.chipBtnText}>Tozalash</Text>
        </Pressable>
        <Pressable style={styles.chipBtn} onPress={() => speakKorean(step.canvasLetter)}>
          <Icon name="speaker" size={14} />
          <Text style={styles.chipBtnText}>Talaffuz</Text>
        </Pressable>
      </View>

      <View style={styles.orderBox}>
        <Text style={styles.orderTitle}>Yozilish tartibi:</Text>
        {step.strokes.map((s, i) => (
          <Text key={i} style={styles.orderItem}>
            {i + 1}. {s.replace(/^\d+\.\s*/, '')}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: colors.chip,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.pill,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginBottom: 14,
  },
  badgeText: { fontSize: 11.5, letterSpacing: 0.6, color: '#52525B', textTransform: 'uppercase', ...font(800) },
  question: { fontSize: 22, lineHeight: 30, color: colors.textMain, marginBottom: 18, letterSpacing: -0.3, ...font(900) },
  hint: { fontSize: 14, color: colors.textMuted, marginBottom: 14, ...font(600) },

  theoryCard: {
    backgroundColor: '#fff',
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: radius.xl,
    padding: 18,
  },
  hero: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 14,
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: radius.lg,
    paddingHorizontal: 18,
    paddingVertical: 14,
    marginBottom: 16,
  },
  heroWord: { flex: 1, fontSize: 32, lineHeight: 40, color: colors.textMain, ...koFont(900) },
  theoryImage: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: radius.lg,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  theoryBody: { fontSize: 16, lineHeight: 25, color: colors.textMain, marginBottom: 12, ...font(500) },
  bullet: { flexDirection: 'row', gap: 8, marginBottom: 8, paddingLeft: 4 },
  bulletDot: { fontSize: 15, color: colors.textMain, ...font(800) },
  bulletText: { flex: 1, fontSize: 15, lineHeight: 22, color: colors.textMain, ...font(600) },

  listenRow: { flexDirection: 'row', gap: 16, marginVertical: 18 },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    minHeight: 56,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: colors.border,
    borderRadius: radius.lg,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  optionSelected: { borderColor: colors.textMain, backgroundColor: '#F4F4F5' },
  optionPressed: { backgroundColor: '#FAFAFA' },
  optionKey: {
    width: 28,
    height: 28,
    borderRadius: 8,
    backgroundColor: '#F4F4F5',
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionKeySelected: { backgroundColor: colors.textMain, borderColor: colors.textMain },
  optionKeyText: { fontSize: 13, color: colors.textMuted, ...font(800) },
  optionText: { flex: 1, fontSize: 16.5, lineHeight: 22, color: colors.textMain, ...font(700) },

  matchGrid: { flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: -5 },
  matchCell: { width: '50%', padding: 5 },
  matchCard: {
    minHeight: 60,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: colors.border,
    borderRadius: radius.lg,
    paddingHorizontal: 8,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  matchSelected: { borderColor: colors.blue, backgroundColor: '#EFF6FF' },
  matchMatched: { borderColor: colors.correctBorder, backgroundColor: colors.correctBg, opacity: 0.45 },
  matchError: { borderColor: '#FCA5A5', backgroundColor: colors.wrongBg },
  matchText: { fontSize: 17, color: colors.textMain, textAlign: 'center', ...font(800) },

  dropArea: {
    minHeight: 76,
    borderBottomWidth: 2.5,
    borderBottomColor: colors.border,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 12,
    paddingHorizontal: 4,
    marginBottom: 24,
  },
  placeholder: { color: colors.textSub, fontSize: 15, ...font(600) },
  pool: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 10 },
  tile: {
    minWidth: 54,
    minHeight: 54,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: colors.border,
    borderBottomWidth: 5,
    borderRadius: radius.md,
  },
  tilePressed: { borderBottomWidth: 2, marginTop: 3 },
  tileUsed: { backgroundColor: '#F4F4F5', borderColor: '#E4E4E7', borderBottomWidth: 2, marginTop: 3 },
  tileText: { fontSize: 22, color: colors.textMain, ...koFont(900) },

  canvasBox: {
    width: CANVAS,
    height: CANVAS,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: colors.border,
    borderRadius: radius.xl,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  watermarkWrap: { ...StyleSheet.absoluteFill, alignItems: 'center', justifyContent: 'center' },
  watermark: { fontSize: 150, lineHeight: 190, color: '#F1EFE9', ...koFont(900) },
  strokeBtns: { flexDirection: 'row', gap: 10, marginTop: 16 },
  chipBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: radius.pill,
    backgroundColor: colors.chip,
    borderWidth: 1,
    borderColor: colors.border,
  },
  chipBtnText: { fontSize: 13.5, color: colors.textMain, ...font(700) },
  orderBox: {
    alignSelf: 'stretch',
    maxWidth: 360,
    marginTop: 16,
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
  },
  orderTitle: { fontSize: 15, color: colors.textMain, marginBottom: 6, ...font(800) },
  orderItem: { fontSize: 14, lineHeight: 21, color: colors.textMain, marginBottom: 4, ...font(600) },
});
