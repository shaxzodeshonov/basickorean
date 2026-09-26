import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { BackHandler, StyleSheet, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Header, type TabKey } from './src/components/Header';
import { LessonRunner } from './src/lesson/LessonRunner';
import { AlphabetScreen } from './src/screens/AlphabetScreen';
import { GuideScreen } from './src/screens/GuideScreen';
import { PathScreen } from './src/screens/PathScreen';
import { WordbookScreen } from './src/screens/WordbookScreen';
import { initSound, sfx } from './src/services/sound';
import { warmUpSpeech } from './src/services/speech';
import { ProgressProvider, useProgress } from './src/state/progress';
import { colors } from './src/theme';

SplashScreen.preventAutoHideAsync().catch(() => {});
SplashScreen.setOptions({ fade: true, duration: 250 });
initSound();
warmUpSpeech();

function Main() {
  const insets = useSafeAreaInsets();
  const { loaded } = useProgress();
  const [tab, setTab] = useState<TabKey>('path');
  const [lessonId, setLessonId] = useState<string | null>(null);
  const lessonBack = useRef<(() => boolean) | null>(null);

  useEffect(() => {
    if (loaded) SplashScreen.hideAsync().catch(() => {});
  }, [loaded]);

  // Android back: lesson → close it; other tab → back to "Yo'l"; otherwise exit the app.
  useEffect(() => {
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      if (lessonId) return lessonBack.current?.() ?? (setLessonId(null), true);
      if (tab !== 'path') {
        setTab('path');
        return true;
      }
      return false;
    });
    return () => sub.remove();
  }, [lessonId, tab]);

  const switchTab = (next: TabKey) => {
    sfx.click();
    setTab(next);
  };

  const startLesson = (id: string) => {
    sfx.click();
    setLessonId(id);
  };

  if (!loaded) return null;

  // Screens stay mounted so scroll position and search text survive tab switches.
  const screen = (key: TabKey, node: ReactNode) => (
    <View style={[styles.screen, tab !== key && styles.hidden]}>{node}</View>
  );

  return (
    <View style={styles.root}>
      <StatusBar style="dark" />
      <View style={[styles.main, { paddingTop: insets.top, paddingLeft: insets.left, paddingRight: insets.right }]}>
        <Header tab={tab} onTab={switchTab} />
        <View style={[styles.body, { paddingBottom: insets.bottom }]}>
          {screen('path', <PathScreen onStartLesson={startLesson} />)}
          {screen('soundboard', <AlphabetScreen />)}
          {screen('wordbook', <WordbookScreen />)}
          {screen('syllabus', <GuideScreen />)}
        </View>
      </View>
      {lessonId && <LessonRunner key={lessonId} lessonId={lessonId} onExit={() => setLessonId(null)} backRef={lessonBack} />}
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <ProgressProvider>
        <Main />
      </ProgressProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.bgPage },
  main: { flex: 1 },
  body: { flex: 1 },
  screen: { flex: 1 },
  hidden: { display: 'none' },
});
