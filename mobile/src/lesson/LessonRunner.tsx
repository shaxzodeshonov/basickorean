import { useCallback, useEffect, useMemo, useRef, useState, type RefObject } from 'react';
import { Animated, Image, Modal, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Icon } from '../components/Icon';
import { MainButton } from '../components/ui';
import { DATA, IMAGES, type BuilderStep as BuilderStepData, type Lesson } from '../content';
import { sfx } from '../services/sound';
import { speakKorean, stopSpeech } from '../services/speech';
import { MAX_HEARTS, useProgress } from '../state/progress';
import { colors, font, radius } from '../theme';
import { BuilderStep, builderPool, ChoiceStep, ListeningStep, MatchStep, StrokeStep, TheoryStep } from './steps';

interface Evaluation {
  correct: boolean;
  text: string;
}

interface Props {
  lessonId: string;
  onExit: () => void;
  /** Registers the handler for the Android back button while the lesson is open. */
  backRef: RefObject<(() => boolean) | null>;
}

export function LessonRunner({ lessonId, onExit, backRef }: Props) {
  const lesson = useMemo(() => DATA.lessons.find((l) => l.id === lessonId) as Lesson, [lessonId]);
  const progress = useProgress();
  const insets = useSafeAreaInsets();

  const [stepIndex, setStepIndex] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [evaluation, setEvaluation] = useState<Evaluation | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const [builderAnswer, setBuilderAnswer] = useState<number[]>([]);
  const [scrollEnabled, setScrollEnabled] = useState(true);
  const [heartsModal, setHeartsModal] = useState(false);
  const [finished, setFinished] = useState<{ stars: number; accuracy: number } | null>(null);

  const step = lesson.steps[stepIndex];
  const total = lesson.steps.length;
  const scrollRef = useRef<ScrollView>(null);
  const onDrawing = useCallback((drawing: boolean) => setScrollEnabled(!drawing), []);

  const pool = useMemo(
    () => (step.type === 'builder' ? builderPool(step as BuilderStepData) : []),
    // Re-shuffle per step only.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [stepIndex]
  );

  // Progress bar + step fade-in animations
  const [barAnim] = useState(() => new Animated.Value(0));
  const [fadeAnim] = useState(() => new Animated.Value(0));
  useEffect(() => {
    Animated.timing(barAnim, { toValue: stepIndex / total, duration: 300, useNativeDriver: false }).start();
    fadeAnim.setValue(0);
    Animated.timing(fadeAnim, { toValue: 1, duration: 220, useNativeDriver: true }).start();
    scrollRef.current?.scrollTo({ y: 0, animated: false });

    // Auto-play pronunciation, like the website.
    if ((step.type === 'theory' || step.type === 'listening') && step.audio) {
      const audio = step.audio;
      const t = setTimeout(() => speakKorean(audio), 300);
      return () => clearTimeout(t);
    }
  }, [stepIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => () => stopSpeech(), []);

  const exit = useCallback(() => {
    stopSpeech();
    onExit();
  }, [onExit]);

  // Android back: close a modal first, otherwise leave the lesson.
  useEffect(() => {
    backRef.current = () => {
      if (heartsModal) {
        setHeartsModal(false);
        return true;
      }
      exit();
      return true;
    };
    return () => {
      backRef.current = null;
    };
  }, [backRef, heartsModal, exit]);

  const showEvaluation = (correct: boolean, text: string) => {
    setEvaluation({ correct, text });
    if (correct) {
      sfx.correct();
      progress.addStars(1);
    } else {
      sfx.wrong();
      setMistakes((m) => m + 1);
      const left = progress.loseHeart();
      if (left <= 0) setTimeout(() => setHeartsModal(true), 600);
    }
  };

  const nextStep = () => {
    if (stepIndex + 1 < total) {
      setEvaluation(null);
      setSelected(null);
      setBuilderAnswer([]);
      setStepIndex(stepIndex + 1);
    } else {
      finish();
    }
  };

  const finish = () => {
    sfx.fanfare();
    progress.addStars(5);
    progress.completeLesson(lesson.id);
    Animated.timing(barAnim, { toValue: 1, duration: 300, useNativeDriver: false }).start();
    const accuracy = Math.max(50, Math.round(((total - mistakes) / total) * 100));
    setFinished({ stars: 5 + total, accuracy });
  };

  const onAction = () => {
    sfx.click();
    if (step.type === 'theory' || step.type === 'stroke' || evaluation) {
      nextStep();
      return;
    }
    if (step.type === 'choice' || step.type === 'listening') {
      const correct = selected === step.correct;
      showEvaluation(
        correct,
        correct
          ? step.explanation || "To'g'ri tanlov!"
          : `To'g'ri javob: ${step.options[step.correct]}. ${step.explanation || ''}`.trim()
      );
      return;
    }
    if (step.type === 'builder') {
      const formed = builderAnswer.map((i) => pool[i].trim()).join('');
      const targetDisplay = step.targetWord || step.target || '';
      const correct = formed === targetDisplay.replace(/\s+/g, '');
      showEvaluation(
        correct,
        correct
          ? `To'g'ri! «${targetDisplay}» so'zi muvaffaqiyatli tuzildi.`
          : `Noto'g'ri. To'g'ri so'z: «${targetDisplay}». (${step.explanation || ''})`
      );
      return;
    }
    if (step.type === 'match') nextStep();
  };

  let actionLabel = 'Tekshirish';
  let actionDisabled = true;
  if (evaluation) {
    actionLabel = evaluation.correct ? 'Davom etish' : 'Tushunarli';
    actionDisabled = false;
  } else if (step.type === 'theory') {
    actionLabel = 'Tushunarli';
    actionDisabled = false;
  } else if (step.type === 'stroke') {
    actionLabel = 'Keyingisi';
    actionDisabled = false;
  } else if (step.type === 'choice' || step.type === 'listening') {
    actionDisabled = selected === null;
  } else if (step.type === 'builder') {
    actionDisabled = builderAnswer.length === 0;
  }

  const locked = evaluation !== null;
  const celebImage =
    /^lesson_[456]/.test(lesson.id) ? IMAGES['part2/image26.png'] : IMAGES['image18.png'];

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      <View style={styles.topbar}>
        <Pressable onPress={exit} hitSlop={10} style={styles.close} accessibilityLabel="Mashqdan chiqish">
          <Icon name="close" size={22} color={colors.textMuted} />
        </Pressable>
        <View style={styles.track}>
          <Animated.View
            style={[
              styles.fill,
              { width: barAnim.interpolate({ inputRange: [0, 1], outputRange: ['0%', '100%'] }) },
            ]}
          />
        </View>
        <View style={styles.hearts} accessibilityLabel={`${progress.hearts} jon qoldi`}>
          <Icon name="heart" size={20} color={colors.heart} />
          <Text style={styles.heartsText}>{progress.hearts}</Text>
        </View>
      </View>

      <ScrollView
        ref={scrollRef}
        scrollEnabled={scrollEnabled}
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
      >
        <Animated.View
          key={stepIndex}
          style={{
            opacity: fadeAnim,
            transform: [{ translateY: fadeAnim.interpolate({ inputRange: [0, 1], outputRange: [8, 0] }) }],
          }}
        >
          {step.type === 'theory' && <TheoryStep step={step} />}
          {step.type === 'choice' && (
            <ChoiceStep step={step} selected={selected} locked={locked} onSelect={setSelected} />
          )}
          {step.type === 'listening' && (
            <ListeningStep step={step} selected={selected} locked={locked} onSelect={setSelected} />
          )}
          {step.type === 'match' && (
            <MatchStep step={step} onComplete={() => showEvaluation(true, "Barcha juftliklar to'g'ri topildi!")} />
          )}
          {step.type === 'builder' && (
            <BuilderStep step={step} pool={pool} answer={builderAnswer} locked={locked} onChange={setBuilderAnswer} />
          )}
          {step.type === 'stroke' && <StrokeStep step={step} onDrawing={onDrawing} />}
        </Animated.View>
      </ScrollView>

      <View
        style={[
          styles.drawer,
          { paddingBottom: Math.max(16, insets.bottom + 8) },
          evaluation && (evaluation.correct ? styles.drawerCorrect : styles.drawerWrong),
        ]}
      >
        {evaluation && (
          <View style={styles.feedback}>
            <View style={[styles.feedbackIcon, { backgroundColor: evaluation.correct ? colors.emerald : colors.heart }]}>
              <Icon name={evaluation.correct ? 'check' : 'alert'} size={24} color="#fff" />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={[styles.feedbackTitle, { color: evaluation.correct ? colors.correctText : colors.wrongText }]}>
                {evaluation.correct ? 'Ajoyib natija!' : "Noto'g'ri javob"}
              </Text>
              <Text
                style={[styles.feedbackText, { color: evaluation.correct ? colors.correctText : colors.wrongTextLight }]}
              >
                {evaluation.text}
              </Text>
            </View>
          </View>
        )}
        <MainButton
          label={actionLabel}
          onPress={onAction}
          disabled={actionDisabled}
          variant={evaluation && !evaluation.correct ? 'wrong' : 'dark'}
        />
      </View>

      {/* OUT OF HEARTS */}
      <Modal visible={heartsModal} transparent animationType="fade" onRequestClose={() => setHeartsModal(false)}>
        <Pressable style={styles.backdrop} onPress={() => setHeartsModal(false)}>
          <Pressable style={[styles.dialog, { alignItems: 'center', maxWidth: 400 }]}>
            <View style={styles.heartIconWrap}>
              <Icon name="heart" size={32} color={colors.heart} />
            </View>
            <Text style={styles.dialogTitle}>Jonlaringiz tugadi</Text>
            <Text style={styles.dialogText}>
              Koreys tilini o'rganishda xatolar tabiiy hol. Jonlarni darhol tiklab, darsni davom ettirishingiz mumkin.
            </Text>
            <MainButton
              label={`Jonlarni to'ldirish (${MAX_HEARTS}/${MAX_HEARTS})`}
              variant="heart"
              style={{ alignSelf: 'stretch' }}
              onPress={() => {
                sfx.correct();
                progress.refillHearts();
                setHeartsModal(false);
              }}
            />
          </Pressable>
        </Pressable>
      </Modal>

      {/* CELEBRATION */}
      <Modal visible={finished !== null} transparent animationType="fade" onRequestClose={exit}>
        <View style={styles.backdrop}>
          <View style={[styles.dialog, { alignItems: 'center' }]}>
            <Image source={celebImage} style={styles.celebPhoto} resizeMode="cover" />
            <Text style={styles.celebTitle}>{lesson.title} tugallandi!</Text>
            <Text style={styles.dialogText}>
              수고하셨어요! [Sugohasyeosseoyo!] Ma'ruzadagi bilimlar muvaffaqiyatli mustahkamlandi.
            </Text>
            <View style={styles.celebRow}>
              <View style={styles.celebBox}>
                <Text style={styles.celebVal}>+{finished?.stars} ball</Text>
                <Text style={styles.celebLbl}>Yulduzlar</Text>
              </View>
              <View style={styles.celebBox}>
                <Text style={styles.celebVal}>{finished?.accuracy}%</Text>
                <Text style={styles.celebLbl}>Aniqlik darajasi</Text>
              </View>
            </View>
            <MainButton label="Davom etish" onPress={exit} style={{ alignSelf: 'stretch' }} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { ...StyleSheet.absoluteFill, backgroundColor: '#fff', zIndex: 10, elevation: 10 },
  topbar: { flexDirection: 'row', alignItems: 'center', gap: 14, paddingHorizontal: 16, paddingVertical: 12 },
  close: { padding: 6, borderRadius: radius.sm },
  track: { flex: 1, height: 12, backgroundColor: '#F1EFE9', borderRadius: 6, overflow: 'hidden' },
  fill: { height: '100%', backgroundColor: colors.emerald, borderRadius: 6 },
  hearts: { flexDirection: 'row', alignItems: 'center', gap: 5 },
  heartsText: { fontSize: 17, color: colors.heart, ...font(800) },
  scroll: { flexGrow: 1, justifyContent: 'center', paddingHorizontal: 20, paddingTop: 12, paddingBottom: 28 },
  drawer: {
    borderTopWidth: 1,
    borderTopColor: colors.border,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 14,
    gap: 14,
  },
  drawerCorrect: { backgroundColor: colors.correctBg, borderTopColor: colors.correctBorder },
  drawerWrong: { backgroundColor: colors.wrongBg, borderTopColor: colors.wrongBorder },
  feedback: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  feedbackIcon: { width: 44, height: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center' },
  feedbackTitle: { fontSize: 18, ...font(800) },
  feedbackText: { fontSize: 14, lineHeight: 19, marginTop: 2, ...font(600) },

  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(24,24,27,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  dialog: {
    width: '100%',
    maxWidth: 480,
    backgroundColor: '#fff',
    borderRadius: radius.xl,
    padding: 24,
  },
  heartIconWrap: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#FEE2E2',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  dialogTitle: { fontSize: 21, color: colors.textMain, marginBottom: 8, ...font(800) },
  dialogText: {
    fontSize: 14.5,
    lineHeight: 21,
    color: colors.textMuted,
    textAlign: 'center',
    marginBottom: 20,
    ...font(600),
  },
  celebPhoto: { width: '100%', height: 170, borderRadius: radius.lg, marginBottom: 16 },
  celebTitle: { fontSize: 23, color: colors.textMain, textAlign: 'center', marginBottom: 6, ...font(900) },
  celebRow: { flexDirection: 'row', gap: 12, alignSelf: 'stretch', marginBottom: 20 },
  celebBox: { flex: 1, backgroundColor: colors.chip, borderRadius: radius.md, padding: 14, alignItems: 'center' },
  celebVal: { fontSize: 22, color: colors.textMain, ...font(900) },
  celebLbl: { fontSize: 11, color: colors.textMuted, textTransform: 'uppercase', marginTop: 2, ...font(700) },
});
