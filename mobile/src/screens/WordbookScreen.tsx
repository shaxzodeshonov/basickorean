import { useMemo, useState } from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Icon } from '../components/Icon';
import { DATA, IMAGES, type Word } from '../content';
import { sfx } from '../services/sound';
import { speakKorean } from '../services/speech';
import { colors, font, koFont, radius } from '../theme';

const FALLBACK_IMAGE = IMAGES['image14.png'];

function WordRow({ w }: { w: Word }) {
  return (
    <View style={styles.row}>
      <Image source={(w.image && IMAGES[w.image]) || FALLBACK_IMAGE} style={styles.thumb} />
      <View style={styles.texts}>
        <View style={styles.koRow}>
          <Text style={styles.ko}>{w.korean}</Text>
          <Text style={styles.rom}>
            [{w.rom}] • {w.trans}
          </Text>
        </View>
        <Text style={styles.uz}>{w.uzbek}</Text>
        <Text style={styles.note}>{w.note || w.category}</Text>
      </View>
      <Pressable
        onPress={() => {
          sfx.click();
          speakKorean(w.korean);
        }}
        style={({ pressed }) => [styles.audioBtn, pressed && styles.audioBtnPressed]}
        accessibilityRole="button"
        accessibilityLabel={`${w.korean} tinglash`}
        hitSlop={6}
      >
        {({ pressed }) => <Icon name="speaker" size={20} color={pressed ? '#fff' : colors.textMain} />}
      </Pressable>
    </View>
  );
}

export function WordbookScreen() {
  const [query, setQuery] = useState('');

  const words = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return DATA.words;
    return DATA.words.filter(
      (w) =>
        w.korean.toLowerCase().includes(q) ||
        w.uzbek.toLowerCase().includes(q) ||
        w.rom.toLowerCase().includes(q) ||
        w.category.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <FlatList
      data={words}
      keyExtractor={(w, i) => `${w.korean}-${i}`}
      renderItem={({ item }) => <WordRow w={item} />}
      contentContainerStyle={styles.content}
      ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
      keyboardShouldPersistTaps="handled"
      keyboardDismissMode="on-drag"
      ListHeaderComponent={
        <View>
          <Text style={styles.h2}>Ma'ruzalardagi So'zlar Lug'ati</Text>
          <Text style={styles.desc}>«Basic Korean 1» va «한국소개» taqdimotlaridagi barcha so'zlar va iboralar</Text>

          <View style={styles.search}>
            <Icon name="search" size={18} color={colors.textMuted} />
            <TextInput
              value={query}
              onChangeText={setQuery}
              placeholder="Qidirish (annyeong, ota, kitob...)"
              placeholderTextColor={colors.textSub}
              style={styles.input}
              autoCorrect={false}
              autoCapitalize="none"
              returnKeyType="search"
            />
            {query ? (
              <Pressable onPress={() => setQuery('')} hitSlop={10} accessibilityLabel="Tozalash">
                <Icon name="close" size={16} color={colors.textMuted} />
              </Pressable>
            ) : null}
          </View>

          <View style={styles.meta}>
            <Text style={styles.metaCount}>Jami: {words.length} ta so'z</Text>
            <Text style={styles.metaHint}>Karnay — talaffuz</Text>
          </View>
        </View>
      }
      ListEmptyComponent={
        <View style={styles.empty}>
          <Icon name="search" size={36} color={colors.textSub} />
          <Text style={styles.emptyTitle}>So'z topilmadi</Text>
          <Text style={styles.emptyText}>Boshqa so'z yoki iborani qidirib ko'ring</Text>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  content: { padding: 16, paddingBottom: 40 },
  h2: { fontSize: 22, color: colors.textMain, ...font(900) },
  desc: { fontSize: 13.5, color: colors.textMuted, marginTop: 4, lineHeight: 19, ...font(500) },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#fff',
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: radius.pill,
    paddingHorizontal: 16,
    marginTop: 16,
  },
  input: { flex: 1, paddingVertical: 12, fontSize: 15, color: colors.textMain, ...font(600) },
  meta: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 14 },
  metaCount: { fontSize: 13, color: colors.textMain, ...font(800) },
  metaHint: { fontSize: 12, color: colors.textMuted, ...font(500) },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 14,
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: radius.lg,
    backgroundColor: '#fff',
  },
  thumb: { width: 52, height: 52, borderRadius: 12, borderWidth: 1, borderColor: colors.borderLight },
  texts: { flex: 1, minWidth: 0 },
  koRow: { flexDirection: 'row', alignItems: 'baseline', flexWrap: 'wrap', columnGap: 8 },
  ko: { fontSize: 20, color: colors.textMain, ...koFont(900) },
  rom: { fontSize: 13, color: colors.blue, ...font(700) },
  uz: { fontSize: 15, color: colors.textMain, marginTop: 2, ...font(700) },
  note: { fontSize: 12, color: colors.textMuted, marginTop: 2, ...font(500) },
  audioBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.chip,
    alignItems: 'center',
    justifyContent: 'center',
  },
  audioBtnPressed: { backgroundColor: colors.textMain, borderColor: colors.textMain, transform: [{ scale: 0.92 }] },
  empty: {
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
  },
  emptyTitle: { fontSize: 16.5, color: colors.textMuted, marginTop: 10, ...font(700) },
  emptyText: { fontSize: 13.5, color: colors.textMuted, marginTop: 4, textAlign: 'center', ...font(500) },
});
