import type { ReactNode } from 'react';
import { Alert, Linking, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Icon } from '../components/Icon';
import { RichText } from '../components/RichText';
import { Badge, Card } from '../components/ui';
import { DATA } from '../content';
import { useProgress } from '../state/progress';
import { colors, font, koFont, radius } from '../theme';

function Table({ head, rows, flex }: { head: string[]; rows: ReactNode[][]; flex: number[] }) {
  return (
    <View style={styles.table}>
      <View style={[styles.tr, styles.thRow]}>
        {head.map((h, i) => (
          <Text key={h} style={[styles.th, { flex: flex[i] }]}>
            {h}
          </Text>
        ))}
      </View>
      {rows.map((cells, r) => (
        <View key={r} style={[styles.tr, r < rows.length - 1 && styles.trBorder]}>
          {cells.map((c, i) => (
            <View key={i} style={{ flex: flex[i] }}>
              {typeof c === 'string' ? <Text style={styles.td}>{c}</Text> : c}
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

const DIPHTHONGS: [string, string, string, string][] = [
  ['ㅐ', 'ㅏ + ㅣ', '[ae / e]', '배 (bae - nok)'],
  ['ㅒ', 'ㅑ + ㅣ', '[yae]', '얘기 (yaegi - suhbat)'],
  ['ㅔ', 'ㅓ + ㅣ', '[e]', "가게 (gage - do'kon)"],
  ['ㅖ', 'ㅕ + ㅣ', '[ye]', '시계 (sigye - soat)'],
  ['ㅘ', 'ㅗ + ㅏ', '[wa]', '사과 (sagwa - olma)'],
  ['ㅙ', 'ㅗ + ㅐ', '[wae]', "돼지 (dwaeji - cho'chqa)"],
  ['ㅚ', 'ㅗ + ㅣ', '[we]', '회사 (hoesa - firma)'],
  ['ㅝ', 'ㅜ + ㅓ', '[wo]', '더워요 (deowoyo - issiq)'],
  ['ㅞ', 'ㅜ + ㅔ', '[we]', '웨이터 (weiteo)'],
  ['ㅟ', 'ㅜ + ㅣ', '[wi]', '뒤 (dwi - orqa)'],
  ['ㅢ', 'ㅡ + ㅣ', '[ui / i]', '의자 (uija - stul)'],
];

const DOUBLES = [
  ['ㄲ [kk]', '꼬리 (dum)'],
  ['ㄸ [tt]', '떡 (tteok)'],
  ['ㅃ [pp]', '오빠 (aka)'],
  ['ㅆ [ss]', '싸다 (arzon)'],
  ['ㅉ [jj]', "찌개 (sho'rva)"],
];

const SYLLABLES = [
  "<b>V (Faqat unli)</b>: Oldiga ovozsiz 'ㅇ' qo'yiladi: <b>오</b> (5), <b>이</b> (2), <b>아이</b> (bola).",
  '<b>CV (Tik unli)</b>: Undosh chapda, unli o\'ngda: <b>가</b>, <b>나</b>, <b>차</b>, <b>허리</b>.',
  '<b>CV (Yotiq unli)</b>: Undosh tepada, unli ostida: <b>소</b>, <b>무</b>, <b>포도</b>, <b>모자</b>.',
  "<b>VC (Pastki undosh)</b>: Unli ustida, undosh pastda: <b>입</b> (og'iz), <b>열</b> (10), <b>음</b> (tovush).",
  "<b>CVC (Batchim)</b>: Bo'g'in ostida pastki undosh (받침) joylashadi: <b>집</b> (uy), <b>산</b> (tog'), <b>공</b> (koptok), <b>물</b> (suv).",
];

function Bullet({ children }: { children: string }) {
  return (
    <View style={styles.bullet}>
      <Text style={styles.bulletDot}>•</Text>
      <RichText style={styles.bulletText}>{children}</RichText>
    </View>
  );
}

export function GuideScreen() {
  const c = DATA.courseInfo;
  const { resetProgress } = useProgress();

  const confirmReset = () =>
    Alert.alert("Natijalarni o'chirish", "Barcha yulduzlar va bajarilgan darslar o'chiriladi. Davom etasizmi?", [
      { text: 'Bekor qilish', style: 'cancel' },
      { text: "O'chirish", style: 'destructive', onPress: resetProgress },
    ]);

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.h2}>Kurs Qo'llanmasi & Madaniyat</Text>
      <Text style={styles.desc}>Shirin sonsengnim ma'ruza talablari, baholash tizimi va Koreya madaniyati</Text>

      <Card style={{ marginTop: 16 }}>
        <Badge>Ma'ruza asoslari</Badge>
        <Text style={[styles.h3, { marginTop: 8 }]}>
          {c.name} — {c.subName}
        </Text>
        <Text style={styles.muted}>
          O'qituvchi: <Text style={font(800)}>{c.teacher}</Text> • Xona: <Text style={font(800)}>{c.office}</Text>
        </Text>
      </Card>

      <Card>
        <Text style={styles.h3}>Baholash Mezonlari (100% Ball)</Text>
        <Text style={styles.small}>1-ma'ruzaning 7-slaydidagi rasmiy baholash tartibi:</Text>
        <Table
          head={['Imtihon turi', 'Ulushi', 'Tafsilot']}
          flex={[1.3, 0.6, 1.4]}
          rows={c.grading.map((g) => [
            <Text key="0" style={[styles.td, font(800)]}>{g.item}</Text>,
            <Text key="1" style={[styles.td, { color: colors.blue }, font(800)]}>{g.weight}</Text>,
            <Text key="2" style={styles.tdMuted}>{g.detail}</Text>,
          ])}
        />
      </Card>

      <Card>
        <Text style={[styles.h3, { color: colors.wrongText }]}>Darsdagi Jarimalar (-2 Ball)</Text>
        <Text style={styles.small}>Har bir quyidagi qoidabuzarlik uchun umumiy balldan 2 ball chegiriladi:</Text>
        <View style={{ gap: 8, marginTop: 10 }}>
          {c.penalties.map((p) => (
            <View key={p} style={styles.penalty}>
              <Icon name="alert" size={16} color={colors.wrongText} />
              <Text style={styles.penaltyText}>{p}</Text>
            </View>
          ))}
        </View>
      </Card>

      <Card>
        <Text style={styles.h3}>Baholar Shkalasi (Grade Scale)</Text>
        <Table
          head={['Baho', 'Oraliq (%)', 'Cheklov (Quota)']}
          flex={[0.8, 1, 1.3]}
          rows={c.gradeScale.map((s) => [
            <Text key="0" style={[styles.td, font(800)]}>{s.grade}</Text>,
            <Text key="1" style={[styles.td, font(800)]}>{s.range}</Text>,
            <Text key="2" style={styles.tdMuted}>{s.quota}</Text>,
          ])}
        />
      </Card>

      <Card>
        <Badge>Tarix va falsafa</Badge>
        <Text style={[styles.h3, { marginTop: 8 }]}>Hangulning Yaratilishi (1443-yil)</Text>
        <RichText style={styles.body}>
          {
            '1443-yilda Choson sulolasining 4-hukmdori <b>Qirol Sejong (세종대왕)</b> xalq savodxonligini oshirish maqsadida 24 ta asosiy harfdan iborat Hangul alifbosini yaratdi. Alifbo kitobi <b>훈민정음 [Hunminjeongeum]</b> ("Xalqqa to\'g\'ri tovushlarni o\'rgatish") deb atalgan.'
          }
        </RichText>
        <View style={styles.inset}>
          <Text style={styles.h4}>Unlilarning 3 Falsafiy Elementi:</Text>
          <Bullet>{'<b>• (Cheon / 천)</b> — Dumaloq Osmon (Koinot)'}</Bullet>
          <Bullet>{'<b>ㅡ (Ji / 지)</b> — Tekis Yer (Zamin)'}</Bullet>
          <Bullet>{'<b>ㅣ (In / 인)</b> — Tik turgan Inson'}</Bullet>
        </View>
      </Card>

      <Card>
        <Badge>2-ma'ruza asoslari</Badge>
        <Text style={[styles.h3, { marginTop: 8 }]}>Diftonglar (11 ta) va Juft Undoshlar (5 ta)</Text>
        <RichText style={styles.small}>
          {
            "2-ma'ruzada Hangulning qolgan 16 ta harfi o'rganiladi va alifbo to'liq <b>40 ta harf</b>ga yetadi (21 unli + 19 undosh):"
          }
        </RichText>
        <Table
          head={['Diftong', 'Formula', "O'qilishi", 'Misol']}
          flex={[0.7, 1, 0.9, 1.6]}
          rows={DIPHTHONGS.map(([d, f, s, e]) => [
            <Text key="0" style={[styles.td, koFont(900), { fontSize: 17 }]}>{d}</Text>,
            f,
            s,
            <Text key="1" style={styles.tdMuted}>{e}</Text>,
          ])}
        />
        <View style={[styles.inset, { backgroundColor: '#F8FAFC', marginTop: 14 }]}>
          <Text style={[styles.h4, { color: colors.wrongText }]}>5 ta Juft Undosh (쌍자음):</Text>
          <View style={styles.doubles}>
            {DOUBLES.map(([k, v]) => (
              <Text key={k} style={styles.doubleItem}>
                <Text style={font(800)}>{k}</Text>: {v}
              </Text>
            ))}
          </View>
        </View>
      </Card>

      <Card>
        <Badge>2-ma'ruza asoslari</Badge>
        <Text style={[styles.h3, { marginTop: 8 }]}>Bo'g'in (음절) Strukturasi va Xayrlashish</Text>
        <Text style={styles.small}>Koreys tili bo'g'inlarida unli va undoshlar doimo kvadrat shaklida birlashadi:</Text>
        <View style={{ marginVertical: 10 }}>
          {SYLLABLES.map((s) => (
            <Bullet key={s}>{s}</Bullet>
          ))}
        </View>
        <View style={[styles.inset, { backgroundColor: '#FDF8F6', borderColor: '#FECDD3' }]}>
          <Text style={[styles.h4, { color: '#9F1239' }]}>Koreyscha Xayrlashish Odobi (Muhim!):</Text>
          <RichText style={styles.bodySmall}>
            {'• <b>안녕히 가세요 [Annyeonghi gaseyo]</b>: Ketayotgan insonga aytiladi ("Yaxshi boring", fe\'l: 가다).'}
          </RichText>
          <RichText style={[styles.bodySmall, { marginTop: 6 }]}>
            {'• <b>안녕히 계세요 [Annyeonghi gyeseyo]</b>: Joyida qolayotgan insonga aytiladi ("Yaxshi qoling", fe\'l: 계시다).'}
          </RichText>
        </View>
      </Card>

      <Pressable onPress={confirmReset} style={styles.reset} accessibilityRole="button">
        <Icon name="trash" size={16} color={colors.wrongText} />
        <Text style={styles.resetText}>Natijalarni qaytadan boshlash</Text>
      </Pressable>

      <Text style={styles.footer}>
        Thanks to <Text style={font(800)}>Shaxzod</Text> —{' '}
        <Text style={styles.link} onPress={() => Linking.openURL('https://shxzd.dev')}>
          shxzd.dev
        </Text>
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { padding: 16, paddingBottom: 40 },
  h2: { fontSize: 22, color: colors.textMain, ...font(900) },
  h3: { fontSize: 18.5, color: colors.textMain, marginBottom: 8, lineHeight: 24, ...font(900) },
  h4: { fontSize: 14.5, color: colors.textMain, marginBottom: 6, ...font(800) },
  desc: { fontSize: 13.5, color: colors.textMuted, marginTop: 4, lineHeight: 19, ...font(500) },
  muted: { fontSize: 14, color: colors.textMuted, marginTop: 4, lineHeight: 20, ...font(600) },
  small: { fontSize: 13, color: colors.textMuted, marginBottom: 4, lineHeight: 18, ...font(500) },
  body: { fontSize: 15, lineHeight: 24, color: colors.textMain, marginBottom: 12, ...font(500) },
  bodySmall: { fontSize: 14, lineHeight: 21, color: colors.textMain, ...font(500) },
  table: { marginTop: 10, borderRadius: radius.sm, overflow: 'hidden' },
  tr: { flexDirection: 'row', gap: 8, paddingVertical: 9, paddingHorizontal: 8 },
  thRow: { backgroundColor: colors.chip, borderBottomWidth: 1.5, borderBottomColor: colors.border },
  trBorder: { borderBottomWidth: 1, borderBottomColor: colors.borderLight },
  th: { fontSize: 13, color: colors.textMain, ...font(800) },
  td: { fontSize: 13.5, color: colors.textMain, ...font(600) },
  tdMuted: { fontSize: 12.5, color: colors.textMuted, ...font(600) },
  penalty: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: colors.wrongBg,
    borderWidth: 1,
    borderColor: colors.wrongBorder,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: radius.md,
  },
  penaltyText: { flex: 1, fontSize: 14, color: colors.wrongText, ...font(700) },
  inset: {
    backgroundColor: colors.bgPage,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    padding: 14,
  },
  bullet: { flexDirection: 'row', gap: 8, marginBottom: 6 },
  bulletDot: { fontSize: 14, color: colors.textMain, ...font(800) },
  bulletText: { flex: 1, fontSize: 14, lineHeight: 21, color: colors.textMain, ...font(600) },
  doubles: { flexDirection: 'row', flexWrap: 'wrap', rowGap: 6 },
  doubleItem: { width: '50%', fontSize: 13.5, color: colors.textMain, ...font(500) },
  reset: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 12,
    borderRadius: radius.pill,
    borderWidth: 1,
    borderColor: colors.wrongBorder,
    backgroundColor: '#fff',
    marginTop: 4,
  },
  resetText: { fontSize: 14, color: colors.wrongText, ...font(700) },
  footer: { textAlign: 'center', color: colors.textMuted, fontSize: 13, marginTop: 20, ...font(500) },
  link: { color: colors.textMain, textDecorationLine: 'underline', ...font(700) },
});
