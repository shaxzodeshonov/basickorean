import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { Icon } from '../components/Icon';
import { Badge } from '../components/ui';
import { DATA, type Letter } from '../content';
import { sfx } from '../services/sound';
import { speakKorean } from '../services/speech';
import { colors, font, koFont, radius } from '../theme';

type Filter = 'all' | 'vowels' | 'compounds' | 'consonants' | 'doubles';

const FILTERS: { key: Filter; label: string }[] = [
  { key: 'all', label: 'Barchasi (40)' },
  { key: 'vowels', label: '10 ta Oddiy unli' },
  { key: 'compounds', label: '11 ta Diftong' },
  { key: 'consonants', label: '14 ta Oddiy undosh' },
  { key: 'doubles', label: '5 ta Juft undosh' },
];

interface Group {
  key: Exclude<Filter, 'all'>;
  badge: string;
  hint: string;
  letters: Letter[];
  sub: (l: Letter) => string;
  subStyle?: object;
  rom: (l: Letter) => string;
}

const GROUPS: Group[] = [
  {
    key: 'vowels',
    badge: '10 ta oddiy unlilar (기본 모음)',
    hint: '3 falsafiy element: • (Osmon), ㅡ (Yer), ㅣ (Inson)',
    letters: DATA.vowels,
    rom: (l) => l.rom,
    sub: (l) => l.uz,
  },
  {
    key: 'compounds',
    badge: '11 ta diftonglar (복합 모음)',
    hint: "Oddiy unlilarning birlashuvidan hosil bo'lgan murakkab unlilar",
    letters: DATA.compoundVowels,
    rom: (l) => l.sound,
    sub: (l) => l.formula ?? '',
    subStyle: { color: colors.blue, ...font(700) },
  },
  {
    key: 'consonants',
    badge: '14 ta oddiy undoshlar (기본 자음)',
    hint: "Nutq a'zolari (til, lab, tish, tomoq) shakli asosida yaratilgan",
    letters: DATA.consonants,
    rom: (l) => l.sound,
    sub: (l) => l.uz,
  },
  {
    key: 'doubles',
    badge: '5 ta juft undoshlar (쌍자음)',
    hint: "Portlovchi, bo'g'iq va zarbli qattiq undoshlar",
    letters: DATA.doubleConsonants,
    rom: (l) => l.sound,
    sub: (l) => l.name,
    subStyle: { color: '#B91C1C', ...font(700) },
  },
];

export function AlphabetScreen() {
  const [filter, setFilter] = useState<Filter>('all');
  const [selected, setSelected] = useState<Letter | null>(null);
  const { width } = useWindowDimensions();
  const cols = width >= 600 ? 5 : 3;
  // Floor to whole dp: fractional widths can round up and push the last card onto a new row.
  const cardWidth = Math.floor((Math.min(width, 900) - 32 - 10 * (cols - 1)) / cols);

  const onLetter = (l: Letter) => {
    sfx.click();
    setSelected(l);
    speakKorean(l.char);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={[styles.content, selected && { paddingBottom: 150 }]}>
        <Text style={styles.h2}>Koreys Alifbosi (Hangul)</Text>
        <Text style={styles.desc}>
          Harflar ustiga bosing — talaffuzini eshiting va o'zbekcha talaffuz qoidasini o'rganing
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filters}>
          {FILTERS.map((f) => (
            <Pressable
              key={f.key}
              onPress={() => {
                sfx.click();
                setFilter(f.key);
              }}
              style={[styles.filterPill, filter === f.key && styles.filterActive]}
              accessibilityRole="button"
              accessibilityState={{ selected: filter === f.key }}
            >
              <Text style={[styles.filterText, filter === f.key && { color: '#fff' }]}>{f.label}</Text>
            </Pressable>
          ))}
        </ScrollView>

        {GROUPS.filter((g) => filter === 'all' || filter === g.key).map((g) => (
          <View key={g.key} style={styles.group}>
            <Badge>{g.badge}</Badge>
            <Text style={styles.hint}>{g.hint}</Text>
            <View style={styles.grid}>
              {g.letters.map((l) => (
                <Pressable
                  key={l.char}
                  onPress={() => onLetter(l)}
                  accessibilityRole="button"
                  accessibilityLabel={`${l.char}, ${g.rom(l)}`}
                  style={({ pressed }) => [
                    styles.card,
                    { width: cardWidth },
                    selected?.char === l.char && styles.cardSelected,
                    pressed && { transform: [{ scale: 0.96 }] },
                  ]}
                >
                  <Text style={styles.char}>{l.char}</Text>
                  <Text style={styles.rom}>[{g.rom(l)}]</Text>
                  <Text style={[styles.sub, g.subStyle]} numberOfLines={3}>
                    {g.sub(l)}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>

      {selected && (
        <View style={styles.detail}>
          <Text style={styles.detailChar}>{selected.char}</Text>
          <View style={{ flex: 1 }}>
            <Text style={styles.detailName}>{selected.name}</Text>
            <Text style={styles.detailText}>{selected.formula ? `${selected.formula} • ${selected.uz}` : selected.uz}</Text>
            {selected.organ ? <Text style={styles.detailMuted}>{selected.organ}</Text> : null}
            {selected.example ? <Text style={styles.detailExample}>Misol: {selected.example}</Text> : null}
          </View>
          <Pressable onPress={() => setSelected(null)} hitSlop={10} accessibilityLabel="Yopish">
            <Icon name="close" size={18} color={colors.textMuted} />
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  content: { padding: 16, paddingBottom: 40 },
  h2: { fontSize: 22, color: colors.textMain, ...font(900) },
  desc: { fontSize: 13.5, color: colors.textMuted, marginTop: 4, lineHeight: 19, ...font(500) },
  filters: { gap: 8, paddingVertical: 16 },
  filterPill: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: radius.pill,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: colors.border,
  },
  filterActive: { backgroundColor: colors.textMain, borderColor: colors.textMain },
  filterText: { fontSize: 13, color: colors.textMuted, ...font(700) },
  group: { marginBottom: 26, gap: 6 },
  hint: { fontSize: 13, color: colors.textMuted, marginBottom: 6, ...font(600) },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  card: {
    backgroundColor: '#fff',
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: radius.lg,
    paddingVertical: 14,
    paddingHorizontal: 6,
    alignItems: 'center',
    minHeight: 118,
  },
  cardSelected: { borderColor: colors.textMain, backgroundColor: '#F4F4F5' },
  char: { fontSize: 30, color: colors.textMain, lineHeight: 36, ...koFont(900) },
  rom: { fontSize: 13.5, color: colors.blue, marginTop: 4, ...font(800) },
  sub: { fontSize: 11.5, color: colors.textMuted, marginTop: 2, textAlign: 'center', lineHeight: 14, ...font(600) },
  detail: {
    position: 'absolute',
    left: 12,
    right: 12,
    bottom: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 14,
    backgroundColor: '#fff',
    borderRadius: radius.xl,
    borderWidth: 1.5,
    borderColor: colors.border,
    padding: 16,
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 6 },
  },
  detailChar: { fontSize: 44, lineHeight: 52, color: colors.textMain, ...koFont(900) },
  detailName: { fontSize: 16, color: colors.textMain, ...font(800) },
  detailText: { fontSize: 13.5, color: colors.textMain, marginTop: 2, ...font(600) },
  detailMuted: { fontSize: 12.5, color: colors.textMuted, marginTop: 2, ...font(500) },
  detailExample: { fontSize: 13, color: colors.blue, marginTop: 4, ...font(700) },
});
