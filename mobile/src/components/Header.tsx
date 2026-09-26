import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { DATA } from '../content';
import { sfx } from '../services/sound';
import { MAX_HEARTS, useProgress } from '../state/progress';
import { colors, font, radius } from '../theme';
import { Icon } from './Icon';

export type TabKey = 'path' | 'soundboard' | 'wordbook' | 'syllabus';

const TABS: { key: TabKey; label: string }[] = [
  { key: 'path', label: "Yo'l" },
  { key: 'soundboard', label: 'Alifbo' },
  { key: 'wordbook', label: "Lug'at" },
  { key: 'syllabus', label: "Qo'llanma" },
];

interface Props {
  tab: TabKey;
  onTab: (tab: TabKey) => void;
}

export function Header({ tab, onTab }: Props) {
  const { stars, hearts, completedLessons, refillHearts } = useProgress();

  return (
    <View style={styles.wrap}>
      <View style={styles.topBar}>
        <Pressable style={styles.brand} onPress={() => onTab('path')} accessibilityRole="button">
          <View style={styles.badge}>
            <Text style={styles.badgeText}>한</Text>
          </View>
          <View>
            <Text style={styles.brandName}>BasicKorean</Text>
            <Text style={styles.credit}>
              thanks to{' '}
              <Text style={styles.creditLink} onPress={() => Linking.openURL('https://shxzd.dev')}>
                shaxzod
              </Text>
            </Text>
          </View>
        </Pressable>

        <View style={styles.stats}>
          <View style={styles.chip} accessibilityLabel={`${stars} yulduz`}>
            <Icon name="star" size={14} color={colors.star} />
            <Text style={[styles.chipText, { color: colors.star }]}>{stars}</Text>
          </View>
          <View style={styles.chip} accessibilityLabel="Bajarilgan darslar">
            <Icon name="check" size={13} color={colors.textMuted} />
            <Text style={styles.chipText}>
              {completedLessons.length}/{DATA.lessons.length}
            </Text>
          </View>
          <Pressable
            style={styles.chip}
            onPress={() => {
              sfx.correct();
              refillHearts();
            }}
            accessibilityRole="button"
            accessibilityLabel="Jonlarni to'ldirish"
          >
            <Icon name="heart" size={14} color={colors.heart} />
            <Text style={[styles.chipText, { color: colors.heart }]}>
              {hearts}/{MAX_HEARTS}
            </Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.segment} accessibilityRole="tablist">
        {TABS.map((t) => {
          const active = t.key === tab;
          return (
            <Pressable
              key={t.key}
              onPress={() => onTab(t.key)}
              style={[styles.segmentBtn, active && styles.segmentActive]}
              accessibilityRole="tab"
              accessibilityState={{ selected: active }}
            >
              <Text numberOfLines={1} style={[styles.segmentText, active && { color: colors.textMain }]}>
                {t.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { paddingHorizontal: 16, paddingTop: 10, paddingBottom: 8, backgroundColor: colors.bgPage },
  topBar: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 8 },
  brand: { flexDirection: 'row', alignItems: 'center', gap: 10, flexShrink: 1 },
  badge: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: colors.textMain,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: { color: '#fff', fontSize: 19, fontWeight: '900' },
  brandName: { fontSize: 16, color: colors.textMain, ...font(900) },
  credit: { fontSize: 11, color: colors.textMuted, ...font(600) },
  creditLink: { color: colors.textMain, textDecorationLine: 'underline', ...font(700) },
  stats: { flexDirection: 'row', alignItems: 'center', gap: 5 },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: radius.pill,
    backgroundColor: colors.chip,
    borderWidth: 1,
    borderColor: colors.border,
  },
  chipText: { fontSize: 12.5, color: colors.textMain, ...font(700) },
  segment: {
    flexDirection: 'row',
    backgroundColor: colors.segment,
    padding: 4,
    borderRadius: radius.pill,
    gap: 4,
    marginTop: 12,
  },
  segmentBtn: { flex: 1, paddingVertical: 8, borderRadius: radius.pill, alignItems: 'center' },
  segmentActive: {
    backgroundColor: '#fff',
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
  },
  segmentText: { fontSize: 13.5, color: colors.textMuted, ...font(700) },
});
