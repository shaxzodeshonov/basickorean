import { Fragment } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Icon } from '../components/Icon';
import { DATA } from '../content';
import { sfx } from '../services/sound';
import { useProgress } from '../state/progress';
import { colors, font, radius } from '../theme';

interface Props {
  onStartLesson: (id: string) => void;
}

export function PathScreen({ onStartLesson }: Props) {
  const { completedLessons, unlockedLessons, freeMode, setFreeMode, refillHearts } = useProgress();

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <View style={styles.toolbar}>
        <Pressable
          style={styles.toggle}
          onPress={() => {
            sfx.click();
            setFreeMode(!freeMode);
          }}
          accessibilityRole="switch"
          accessibilityState={{ checked: freeMode }}
        >
          <View style={[styles.toggleBox, freeMode && styles.toggleBoxOn]}>
            {freeMode && <Icon name="check" size={13} color="#fff" />}
          </View>
          <Text style={styles.toggleLabel}>{freeMode ? 'Erkin rejim (Hammasi ochiq)' : 'Ketma-ket rejim'}</Text>
        </Pressable>
        <Pressable
          style={styles.pillBtn}
          onPress={() => {
            sfx.correct();
            refillHearts();
          }}
          accessibilityRole="button"
        >
          <Icon name="heart" size={13} color={colors.heart} />
          <Text style={styles.pillText}>Jonlarni tiklash</Text>
        </Pressable>
      </View>

      {DATA.sections.map((sec) => {
        const lessons = DATA.lessons.filter((l) => sec.lessonIds.includes(l.id));
        const done = lessons.filter((l) => completedLessons.includes(l.id)).length;
        return (
          <View key={sec.id} style={styles.section}>
            <View style={styles.sectionHead}>
              <View style={styles.sectionTitleWrap}>
                <Text style={styles.sectionTitle}>{sec.title}</Text>
                <Text style={styles.sectionKo}>{sec.korean}</Text>
              </View>
              <Text style={styles.sectionPill}>
                {done}/{lessons.length} bajarildi
              </Text>
            </View>

            <View style={styles.nodes}>
              {lessons.map((lesson, idx) => {
                const isCompleted = completedLessons.includes(lesson.id);
                const isUnlocked = freeMode || unlockedLessons.includes(lesson.id);
                const prevCompleted = idx > 0 && completedLessons.includes(lessons[idx - 1].id);
                const state = isCompleted ? 'completed' : isUnlocked ? 'unlocked' : 'locked';
                return (
                  <Fragment key={lesson.id}>
                    {idx > 0 && <View style={[styles.connector, prevCompleted && styles.connectorDone]} />}
                    <View style={styles.nodeItem}>
                      <Pressable
                        disabled={!isUnlocked}
                        onPress={() => onStartLesson(lesson.id)}
                        accessibilityRole="button"
                        accessibilityLabel={lesson.title}
                        accessibilityState={{ disabled: !isUnlocked }}
                        style={({ pressed }) => [
                          styles.node,
                          styles[state],
                          { transform: [{ scale: pressed ? 0.95 : 1 }] },
                        ]}
                      >
                        {state === 'completed' && <Icon name="check" size={28} color="#fff" />}
                        {state === 'unlocked' && (
                          <View style={{ marginLeft: 3 }}>
                            <Icon name="play" size={28} color="#fff" />
                          </View>
                        )}
                        {state === 'locked' && <Icon name="lock" size={28} color={colors.nodeLockedIcon} />}
                      </Pressable>
                      <Text style={styles.nodeTitle}>{lesson.title}</Text>
                      <Text style={styles.nodeSub}>{lesson.subTitle}</Text>
                    </View>
                  </Fragment>
                );
              })}
            </View>
          </View>
        );
      })}

      <Text style={styles.footer}>
        <Text style={font(800)}>BasicKorean</Text> • Koreys tili 1-kurs ma'ruzalari
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { padding: 16, paddingBottom: 40 },
  toolbar: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 8, marginBottom: 20 },
  toggle: { flexDirection: 'row', alignItems: 'center', gap: 8, flexShrink: 1 },
  toggleBox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: colors.border,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleBoxOn: { backgroundColor: colors.textMain, borderColor: colors.textMain },
  toggleLabel: { fontSize: 13, color: colors.textMain, flexShrink: 1, ...font(700) },
  pillBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: radius.pill,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: colors.border,
  },
  pillText: { fontSize: 12.5, color: colors.textMain, ...font(700) },
  section: { marginBottom: 36 },
  sectionHead: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    marginBottom: 24,
    gap: 8,
  },
  sectionTitleWrap: { flexDirection: 'row', alignItems: 'baseline', gap: 8, flexShrink: 1, flexWrap: 'wrap' },
  sectionTitle: { fontSize: 17, color: colors.textMain, ...font(800) },
  sectionKo: { fontSize: 14.5, color: colors.textMuted, fontWeight: '700' },
  sectionPill: {
    fontSize: 12,
    color: colors.textMuted,
    backgroundColor: colors.chip,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: radius.pill,
    overflow: 'hidden',
    ...font(700),
  },
  nodes: { alignItems: 'center', paddingVertical: 6 },
  nodeItem: { alignItems: 'center', width: '100%' },
  connector: { width: 6, height: 38, backgroundColor: colors.connector, borderRadius: 3, marginTop: 8, marginBottom: 12 },
  connectorDone: { backgroundColor: colors.textMain },
  node: { width: 72, height: 72, borderRadius: 36, alignItems: 'center', justifyContent: 'center' },
  locked: { backgroundColor: colors.nodeLockedBg },
  unlocked: {
    backgroundColor: colors.textMain,
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  completed: {
    backgroundColor: colors.nodeCompletedBg,
    elevation: 6,
    shadowColor: colors.nodeCompletedBg,
    shadowOpacity: 0.28,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  nodeTitle: { marginTop: 10, fontSize: 15, color: colors.textMain, textAlign: 'center', maxWidth: 240, ...font(800) },
  nodeSub: { marginTop: 2, fontSize: 12.5, color: colors.textMuted, textAlign: 'center', maxWidth: 260, ...font(600) },
  footer: { textAlign: 'center', color: colors.textMuted, fontSize: 12.5, marginTop: 4, ...font(500) },
});
