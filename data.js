// ==========================================
// HANGEULDUO (한글듀오) - MA'RUZALAR MA'LUMOTLAR BAZASI
// Manbalar: "part - 1 Hangeul uz.pptx" va "한국소개.ppt"
// ==========================================

const HANGEUL_DATA = {
  // Kurs va o'qituvchi ma'lumotlari (1-ma'ruzadan)
  courseInfo: {
    name: "Basic Korean 1",
    teacher: "Makhamedova Shirin (Shirin sonsengnim / 선생님)",
    office: "Office – 206B",
    grading: [
      { item: "Midterm exam (Oraliq imtihon)", weight: "30%", detail: "7-haftada. Qayta topshirish (다시 보기) yo'q!" },
      { item: "Final exam (Yakuniy imtihon)", weight: "30%", detail: "15-haftada. Qayta topshirish (다시 보기) yo'q!" },
      { item: "Attendance (Davomat)", weight: "10%", detail: "4 marta dars qoldirilsa avtomatik 'F' baho!" },
      { item: "Assignment (Vazifa)", weight: "10%", detail: "Speaking homework (gapirish bo'yicha uy vazifasi)" },
      { item: "Quiz (Kichik test)", weight: "10%", detail: "9-haftada o'tkaziladi" },
      { item: "Others (Boshqalar)", weight: "10%", detail: "Daftar va konspekt 5% + Darsdagi faollik 5%" }
    ],
    penalties: [
      "Dars vaqtida uxlash (-2 ball)",
      "Ruxsatsiz darsdan chiqib ketish (-2 ball)",
      "Darsda telefondan foydalanish (-2 ball)",
      "Keraksiz / ortiqcha suhbatlar qurish (-2 ball)",
      "Guruh ishlarida faol qatnashmaslik (-2 ball)"
    ],
    gradeScale: [
      { grade: "A+ / A", range: "85 – 100%", quota: "Talabalarning 20% gacha" },
      { grade: "B+ / B", range: "70 – 84%", quota: "Talabalarning 30% gacha" },
      { grade: "C+ / C", range: "50 – 69%", quota: "Talabalarning 30% gacha" },
      { grade: "D+ / D", range: "30 – 49%", quota: "Talabalarning 20% gacha" },
      { grade: "F", range: "0 – 29%", quota: "Yiqilgan (Qoniqarsiz)" }
    ]
  },

  // Alifbo tuzilishi (Hangeul)
  alphabetStructure: {
    totalBasic: 24, // 10 unli + 14 undosh
    vowelsTotal: 21, // 10 oddiy unli + 11 diftong
    consonantsTotal: 19, // 14 oddiy undosh + 5 juft undosh
    creationYear: 1443,
    creator: "Qirol Sejong (세종대왕 / Sejong the Great)",
    originalName: "훈민정음 [Hunminjeongeum]",
    originalMeaning: "Odamlarga to'g'ri talaffuz qilish uchun ko'rsatma (наставление народу о правильном произношении)"
  },

  // 10 ta Oddiy unlilar (모음)
  vowels: [
    { char: "ㅏ", name: "아", sound: "a", rom: "a", uz: "A", strokeCount: 2, order: ["Vertikal chiziq (yuqoridan pastga) ①", "Gorizontal chiziq (o'ngga) ②"], example: "아이 (ai - bola)" },
    { char: "ㅑ", name: "야", sound: "ya", rom: "ya", uz: "Ya", strokeCount: 3, order: ["Vertikal chiziq ①", "Yuqori gorizontal ②", "Pastki gorizontal ③"], example: "야구 (yagu - beysbol)" },
    { char: "ㅓ", name: "어", sound: "ə (o')", rom: "eo", uz: "O' (ochiq o')", strokeCount: 2, order: ["Gorizontal chiziq (o'ngga) ①", "Vertikal chiziq (pastga) ②"], example: "어머니 (omeoni - ona)" },
    { char: "ㅕ", name: "여", sound: "jə (yo')", rom: "yeo", uz: "Yo' (ochiq yo')", strokeCount: 3, order: ["Yuqori gorizontal ①", "Pastki gorizontal ②", "Vertikal chiziq ③"], example: "여우 (yeou - tulki)" },
    { char: "ㅗ", name: "오", sound: "o", rom: "o", uz: "O (dudoqlangan)", strokeCount: 2, order: ["Qisqa vertikal (pastga) ①", "Gorizontal chiziq (chapdan o'ngga) ②"], example: "오이 (oi - bodring)" },
    { char: "ㅛ", name: "요", sound: "yo", rom: "yo", uz: "Yo (dudoqlangan)", strokeCount: 3, order: ["Chap qisqa vertikal ①", "O'ng qisqa vertikal ②", "Gorizontal chiziq ③"], example: "요리 (yori - taom pishirish)" },
    { char: "ㅜ", name: "우", sound: "u", rom: "u", uz: "U", strokeCount: 2, order: ["Gorizontal chiziq (chapdan o'ngga) ①", "Vertikal chiziq (pastga) ②"], example: "우유 (uyu - sut)" },
    { char: "ㅠ", name: "유", sound: "yu", rom: "yu", uz: "Yu", strokeCount: 3, order: ["Gorizontal chiziq ①", "Chap vertikal ②", "O'ng vertikal ③"], example: "유리 (yuri - shisha)" },
    { char: "ㅡ", name: "으", sound: "ɨ (i / qattiq i)", rom: "eu", uz: "I (tishlar jipslashgan i/y)", strokeCount: 1, order: ["Gorizontal chiziq (chapdan o'ngga) ①"], example: "으뜸 (eutteum - birinchi)" },
    { char: "ㅣ", name: "이", sound: "i", rom: "i", uz: "I (oddiy i)", strokeCount: 1, order: ["Vertikal chiziq (yuqoridan pastga) ①"], example: "이 (i - tish / bu)" }
  ],

  // 14 ta Oddiy undoshlar (자음)
  consonants: [
    { char: "ㄱ", name: "기역 (giyeok)", sound: "k / g", rom: "g/k", organ: "Til asosi tomoqni to'sganda (til shakli)", uz: "K / G (so'z boshida K, unlilar orasida G)", strokes: 1, example: "가방 (gabang - sumka)" },
    { char: "ㄴ", name: "니은 (nieun)", sound: "n", rom: "n", organ: "Til uchi yuqori tish/milkka tekkanda", uz: "N", strokes: 1, example: "나무 (namu - daraxt)" },
    { char: "ㄷ", name: "디귿 (digeut)", sound: "t / d", rom: "d/t", organ: "ㄴ ga chiziq qo'shilgan (til va milk)", uz: "T / D (so'z boshida T, unlilar orasida D)", strokes: 2, example: "다리 (dari - oyoq/ko'prik)" },
    { char: "ㄹ", name: "리을 (rieul)", sound: "r / l", rom: "r/l", organ: "Tilning egilishi / sirg'alishi", uz: "R / L (boshida/orasida R, bo'g'in oxirida L)", strokes: 3, example: "라디오 (radio - radio)" },
    { char: "ㅁ", name: "미음 (mieum)", sound: "m", rom: "m", organ: "Og'iz / lab shakli", uz: "M", strokes: 3, example: "모자 (moja - bosh kiyim)" },
    { char: "ㅂ", name: "비읍 (bieup)", sound: "p / b", rom: "b/p", organ: "ㅁ ga ikkita chiziq qo'shilgan (lablar)", uz: "P / B (boshida P, unlilar orasida B)", strokes: 4, example: "바지 (baji - shim)" },
    { char: "ㅅ", name: "시옷 (siot)", sound: "s / sh", rom: "s", organ: "Tish shakli (tishlar orasidan chiqadigan tovush)", uz: "S (i, ya, yeo, yo, yu oldida SH)", strokes: 2, example: "사람 (saram - odam)" },
    { char: "ㅇ", name: "이응 (ieung)", sound: "ng / ovozsiz", rom: "ng/-", organ: "Tomoq / halqum shakli (doira)", uz: "Bo'g'in boshida tovushsiz (dummy), oxirida 'NG'", strokes: 1, example: "아이 (ai - bola)" },
    { char: "ㅈ", name: "지읒 (jieut)", sound: "ch / j", rom: "j", organ: "ㅅ ga chiziq qo'shilgan", uz: "J / Ch (boshida Ch, unlilar orasida J)", strokes: 2, example: "지도 (jido - xarita)" },
    { char: "ㅊ", name: "치읓 (chieut)", sound: "chʰ (kuchli ch)", rom: "ch", organ: "ㅈ ga zarbli chiziq qo'shilgan", uz: "Ch (havo bilan aytiladigan Ch)", strokes: 3, example: "차 (cha - choy/mashina)" },
    { char: "ㅋ", name: "키읔 (kieuk)", sound: "kʰ (kuchli k)", rom: "k", organ: "ㄱ ga zarbli chiziq qo'shilgan", uz: "K (havo bilan aytiladigan K)", strokes: 2, example: "코 (ko - burun)" },
    { char: "ㅌ", name: "티읕 (tieut)", sound: "tʰ (kuchli t)", rom: "t", organ: "ㄷ ga zarbli chiziq qo'shilgan", uz: "T (havo bilan aytiladigan T)", strokes: 3, example: "토마토 (tomato - pomidor)" },
    { char: "ㅍ", name: "피읖 (pieup)", sound: "pʰ (kuchli p)", rom: "p", organ: "ㅂ ga zarbli chiziqlar qo'shilgan", uz: "P (havo bilan aytiladigan P)", strokes: 4, example: "포도 (podo - uzum)" },
    { char: "ㅎ", name: "히읗 (hieut)", sound: "h", rom: "h", organ: "ㅇ ga ikkita chiziq qo'shilgan", uz: "H (yumshoq nafas tovushi)", strokes: 3, example: "하늘 (haneul - osmon)" }
  ],

  // Ma'ruzalardagi barcha so'zlar lug'ati (Wordbook)
  words: [
    {
      korean: "안녕하세요",
      rom: "annyeonghaseyo",
      uzbek: "Assalomu alaykum / Salom",
      trans: "Annyonghaseo",
      category: "Iboralar",
      image: "image2.jpg",
      note: "1-ma'ruza 1-slayddagi birinchi rasmiy salomlashish iborasi."
    },
    {
      korean: "선생님",
      rom: "seonsaengnim",
      uzbek: "Ustoz / O'qituvchi",
      trans: "Sonsengnim",
      category: "Iboralar",
      image: "image3.png",
      note: "Shirin sonsengnim (Office 206B) - kurs o'qituvchisi."
    },
    {
      korean: "수고하셨어요",
      rom: "sugohasyeosseoyo",
      uzbek: "Barakalla / Mehnatingiz uchun tashakkur (Charchamadingizmi)",
      trans: "Sugohasyosseoyo",
      category: "Iboralar",
      image: "image18.png",
      note: "1-ma'ruza so'nggi slaydidagi olqish iborasi: 'Bugun ham ajoyib qildingiz!'"
    },
    {
      korean: "하늘",
      rom: "haneul",
      uzbek: "Osmon",
      trans: "Xanil / Haneul",
      category: "Falsafa",
      image: "image6.png",
      note: "Unlilarning 1-asosi: Dumaloq nuqta (•) osmonni ifodalaydi."
    },
    {
      korean: "땅",
      rom: "ttang",
      uzbek: "Yer",
      trans: "Ttang",
      category: "Falsafa",
      image: "image5.png",
      note: "Unlilarning 2-asosi: Gorizontal to'g'ri chiziq (ㅡ) yerni ifodalaydi."
    },
    {
      korean: "사람",
      rom: "saram",
      uzbek: "Odam / Inson",
      trans: "Saram",
      category: "Falsafa",
      image: "image5.png",
      note: "Unlilarning 3-asosi: Vertikal tik chiziq (ㅣ) insonni ifodalaydi."
    },
    {
      korean: "모음",
      rom: "moeum",
      uzbek: "Unlilar",
      trans: "Moyim",
      category: "Grammatika",
      image: "image8.png",
      note: "Koreys tilida 10 ta oddiy unli va 11 ta diftong mavjud."
    },
    {
      korean: "자음",
      rom: "jaeum",
      uzbek: "Undoshlar",
      trans: "Cha-im / Jaeum",
      category: "Grammatika",
      image: "image13.png",
      note: "Koreys tilida 14 ta oddiy undosh va 5 ta juft undosh mavjud."
    },
    {
      korean: "아이",
      rom: "ai",
      uzbek: "Bola",
      trans: "Ai",
      category: "Oddiy so'zlar",
      image: "image17.png",
      note: "Oddiy unlilar (아 + 이) bilan yoziladigan ilk so'z."
    },
    {
      korean: "오이",
      rom: "oi",
      uzbek: "Bodring",
      trans: "Oi",
      category: "Oddiy so'zlar",
      image: "image17.png",
      note: "Oddiy unlilar (오 + 이) orqali hosil bo'lgan so'z."
    },
    {
      korean: "우유",
      rom: "uyu",
      uzbek: "Sut",
      trans: "Uyu",
      category: "Oddiy so'zlar",
      image: "image17.png",
      note: "Oddiy unlilar (우 + 유) orqali tuzilgan so'z."
    },
    {
      korean: "여우",
      rom: "yeou",
      uzbek: "Tulki",
      trans: "Yeou",
      category: "Oddiy so'zlar",
      image: "image17.png",
      note: "Oddiy unlilar (여 + 우) bilan yoziladi."
    },
    {
      korean: "나무",
      rom: "namu",
      uzbek: "Daraxt",
      trans: "Namu",
      category: "Oddiy so'zlar",
      image: "image13.png",
      note: "ㄴ (n) va ㅁ (m) undoshlari bilan tuzilgan so'z."
    },
    {
      korean: "나비",
      rom: "nabi",
      uzbek: "Kapalak",
      trans: "Nabi",
      category: "Oddiy so'zlar",
      image: "image14.png",
      note: "ㄴ (n) va ㅂ (b) undoshlari bilan tuzilgan so'z."
    },
    {
      korean: "모자",
      rom: "moja",
      uzbek: "Bosh kiyim / Shlyapa",
      trans: "Moja",
      category: "Oddiy so'zlar",
      image: "image14.png",
      note: "ㅁ (m) va ㅈ (j) undoshlari bilan tuzilgan so'z."
    },
    {
      korean: "바지",
      rom: "baji",
      uzbek: "Shim",
      trans: "Baji",
      category: "Oddiy so'zlar",
      image: "image14.png",
      note: "ㅂ (b) va ㅈ (j) undoshlari bilan tuzilgan so'z."
    },
    {
      korean: "한국",
      rom: "hanguk",
      uzbek: "Janubiy Koreya",
      trans: "Xanguk",
      category: "Madaniyat",
      image: "image_1.jpg",
      note: "2-ma'ruza: Koreya Respublikasining rasmiy qisqa nomi."
    },
    {
      korean: "서울",
      rom: "seoul",
      uzbek: "Seul (Koreya poytaxti)",
      trans: "Seoul",
      category: "Madaniyat",
      image: "image_2.jpg",
      note: "Koreya Respublikasining poytaxti va eng yirik megapolisi."
    },
    {
      korean: "태극기",
      rom: "taegeukgi",
      uzbek: "Taegeukgi (Koreya milliy bayrog'i)",
      trans: "Thegikki",
      category: "Madaniyat",
      image: "image_4.jpg",
      note: "Oq fonda qizil-ko'k Taegeuk aylanasi va 4 ta trigramma."
    },
    {
      korean: "무궁화",
      rom: "mugunghwa",
      uzbek: "Mugunghwa (Koreya milliy guli - Xibiskus)",
      trans: "Mugunxva",
      category: "Madaniyat",
      image: "image_5.jpg",
      note: "'Boqiylik guli' deb ataluvchi Suriya atirguli."
    },
    {
      korean: "한글",
      rom: "hangeul",
      uzbek: "Hangul (Koreys alfaviti)",
      trans: "Xangil",
      category: "Madaniyat",
      image: "image_8.jpg",
      note: "1443-yilda Qirol Sejong tomonidan yaratilgan dunyodagi eng mukammal fonetik alifbo."
    },
    {
      korean: "훈민정음",
      rom: "hunminjeongeum",
      uzbek: "Hunminjeongeum (Xalqqa to'g'ri talaffuzni o'rgatish)",
      trans: "Xunminjonim",
      category: "Madaniyat",
      image: "image_9.jpg",
      note: "Hangeulning asl tarixiy nomi va uning e'lon qilingan kitobi."
    },
    {
      korean: "한자",
      rom: "hanja",
      uzbek: "Hanja (Xitoy iyerogliflari)",
      trans: "Xanja",
      category: "Madaniyat",
      image: "image_9.jpg",
      note: "Hangul yaratilishidan oldin Koreyada qo'llanilgan yozuv tizimi."
    },
    {
      korean: "한복",
      rom: "hanbok",
      uzbek: "Hanbok (Milliy koreys libosi)",
      trans: "Xanbok",
      category: "Madaniyat",
      image: "image_10.jpg",
      note: "Rang-barang ipakdan tikilgan an'anaviy koreys kiyimi."
    },
    {
      korean: "한옥",
      rom: "hanok",
      uzbek: "Hanok (An'anaviy koreys uyi)",
      trans: "Xanok",
      category: "Madaniyat",
      image: "image_12.jpg",
      note: "Yog'och va plitkali tomli, ondol (pol isitish) tizimiga ega an'anaviy uy."
    },
    {
      korean: "한식",
      rom: "hansik",
      uzbek: "Hansik (Koreys milliy oshxonasi/taomlari)",
      trans: "Xanshik",
      category: "Madaniyat",
      image: "image_14.jpg",
      note: "Sog'lom, sabzavotlarga va fermentatsiyalangan mahsulotlarga boy oshxona."
    },
    {
      korean: "불고기",
      rom: "bulgogi",
      uzbek: "Bulgogi (Olovda pishirilgan go'sht)",
      trans: "Pulgogi",
      category: "Madaniyat",
      image: "image_14.jpg",
      note: "Shirin soya sousida marinadlangan nozik mol go'shti."
    },
    {
      korean: "비빔밥",
      rom: "bibimbap",
      uzbek: "Bibimbap (Aralashtirilgan guruch taomi)",
      trans: "Pibimbap",
      category: "Madaniyat",
      image: "image_15.jpg",
      note: "Guruch, sabzavotlar, tuxum va gochujang sousini aralashtirib yeyiladigan taom."
    },
    {
      korean: "반찬",
      rom: "banchan",
      uzbek: "Banchan (Yon taomlar / Gazaklar)",
      trans: "Panchan",
      category: "Madaniyat",
      image: "image_23.jpg",
      note: "Guruch va asosiy taom yonida kichik likopchalarda tortiladigan qo'shimcha salat/gazaklar."
    },
    {
      korean: "원",
      rom: "won",
      uzbek: "Won (Koreya pul birligi - ₩)",
      trans: "Von",
      category: "Madaniyat",
      image: "image_20.jpg",
      note: "Janubiy Koreya valyutasi (10,000 vonlik kupyurada Qirol Sejong surati bor)."
    },
    {
      korean: "윷놀이",
      rom: "yutnori",
      uzbek: "Yutnori (Milliy tayoqchalar o'yini)",
      trans: "Yutnori",
      category: "Madaniyat",
      image: "image_21.jpg",
      note: "Yangi yil (Seollal) va bayramlarda 4 ta yog'och tayoq tashlab o'ynaladigan stol o'yini."
    },
    {
      korean: "한국 드라마",
      rom: "hanguk deurama",
      uzbek: "Koreys seriali (K-Drama)",
      trans: "Xanguk dorama",
      category: "Madaniyat",
      image: "image_17.jpg",
      note: "Butun dunyoda mashhur koreys teleseriallari (masalan, Squid Game)."
    },
    {
      korean: "K-POP",
      rom: "k-pop",
      uzbek: "K-POP (Koreys pop musiqasi)",
      trans: "Key-pop",
      category: "Madaniyat",
      image: "image_18.jpg",
      note: "BTS, Blackpink, PSY kabi guruhlar ijrosidagi zamonaviy musiqa to'lqini (Hallyu)."
    }
  ],

  // 12 TA INTERAKTIV DARS
  lessons: [
    // ================= TRACK 1: ALIFBO =================
    {
      id: "lesson_1_1",
      track: "alphabet",
      trackTitle: "1-Bo'lim: Koreys Alifbosi (Hangul)",
      title: "1.1: Alifbo Tarixi & 3 Falsafiy Asos",
      desc: "Qirol Sejong, Hunminjeongeum va Osmon-Yer-Inson falsafasi",
      icon: "👑",
      steps: [
        {
          type: "theory",
          title: "Hunminjeongeum (훈민정음) nima?",
          korean: "훈민정음",
          audio: "훈민정음",
          image: "image4.jpeg",
          explanation: "1443-yilda buyuk <b>Qirol Sejong (세종대왕)</b> koreys xalqi o'z tilida erkin o'qib-yoza olishi uchun Hangul alifbosini yaratdi. Uning asl nomi <b>훈민정음 [Hunminjeongeum]</b> bo'lib, 'Odamlarga to'g'ri talaffuz qilish uchun ko'rsatma' degan ma'noni anglatadi.",
          points: [
            "Koreys alifbosida jami 24 ta asosiy harf bor.",
            "10 ta oddiy unli (모음) va 14 ta oddiy undosh (자음).",
            "Ilgari koreyslar murakkab Xitoy iyerogliflari (한자 - Hanja)dan foydalanishgan."
          ]
        },
        {
          type: "theory",
          title: "Unlilarning 3 Falsafiy Asosi (Samjae)",
          korean: "하늘 • 땅 • 사람",
          audio: "하늘 땅 사람",
          image: "image6.png",
          explanation: "Koreys unlilari Koinotning 3 ta buyuk elementi asosida yaratilgan:",
          points: [
            "• Dumaloq nuqta = <b>하늘 (Haneul)</b> — Osmon (Koinot)",
            "ㅡ Gorizontal chiziq = <b>땅 (Ttang)</b> — Tekis Yer",
            "ㅣ Vertikal chiziq = <b>사람 (Saram)</b> — Yerda tik turgan Inson"
          ]
        },
        {
          type: "choice",
          question: "Hangul alifbosi nechanchi yilda va kim tomonidan yaratilgan?",
          options: [
            "1443-yilda Qirol Sejong tomonidan",
            "1945-yilda Shirin sonsengnim tomonidan",
            "1592-yilda Li Sun Sin tomonidan",
            "1910-yilda Xitoy imperatori tomonidan"
          ],
          correct: 0,
          explanation: "To'g'ri! 1443-yilda Choson sulolasining 4-hukmdori Qirol Sejong buyuk alifboni e'lon qilgan."
        },
        {
          type: "choice",
          question: "Koreys unlilari yaratilishida 'ㅡ' (gorizontal chiziq) nimani anglatadi?",
          options: [
            "Osmon (하늘)",
            "Yer (땅)",
            "Odam (사람)",
            "Daryo (강)"
          ],
          correct: 1,
          explanation: "Barakalla! 'ㅡ' tekis Yerni (땅), 'ㅣ' tik turgan Odamni (사람), '•' esa Osmonni (하늘) bildiradi."
        },
        {
          type: "match",
          question: "Falsafiy elementlarni ularning koreyscha nomiga moslashtiring:",
          pairs: [
            { k: "하늘", v: "Osmon" },
            { k: "땅", v: "Yer" },
            { k: "사람", v: "Odam" },
            { k: "훈민정음", v: "To'g'ri talaffuz ko'rsatmasi" }
          ]
        }
      ]
    },

    {
      id: "lesson_1_2",
      track: "alphabet",
      trackTitle: "1-Bo'lim: Koreys Alifbosi (Hangul)",
      title: "1.2: 10 ta Oddiy Unli (기본 모음)",
      desc: "ㅏ, ㅑ, ㅓ, ㅕ, ㅗ, ㅛ, ㅜ, ㅠ, ㅡ, ㅣ talaffuzi va yozilishi",
      icon: "🅰️",
      steps: [
        {
          type: "theory",
          title: "10 ta Asosiy Unlilar (기본 모음)",
          korean: "ㅏ ㅑ ㅓ ㅕ ㅗ ㅛ ㅜ ㅠ ㅡ ㅣ",
          audio: "아 야 어 여 오 요 우 유 으 이",
          image: "image8.png",
          explanation: "Koreys tilida unlilar doimo chapdan o'ngga yoki yuqoridan pastga yoziladi. Har bir unli yakka o'zi kelganda oldiga ovozsiz 'ㅇ' doirasi qo'yiladi: <b>아, 야, 어, 여, 오, 요, 우, 유, 으, 이</b>.",
          points: [
            "ㅏ [A] | ㅑ [YA] — Quyosh o'ngda (ochiq yorug')",
            "ㅓ [O' (eo)] | ㅕ [YO' (yeo)] — Quyosh chapda",
            "ㅗ [O (dudoqlangan)] | ㅛ [YO] — Quyosh yuqorida",
            "ㅜ [U] | ㅠ [YU] — Quyosh pastda",
            "ㅡ [I / EU (tishlar jipslashgan)] | ㅣ [I (oddiy)]"
          ]
        },
        {
          type: "listening",
          question: "Talaffuzni tinglang va to'g'ri unlini tanlang:",
          audio: "아",
          options: ["ㅏ (A)", "ㅓ (O')", "ㅗ (O)", "ㅜ (U)"],
          correct: 0,
          explanation: "ㅏ harfi o'zbek tilidagi ravshan 'A' tovushidir."
        },
        {
          type: "listening",
          question: "Tinglang va tanlang:",
          audio: "어",
          options: ["ㅏ (A)", "ㅓ (O')", "ㅡ (I/EU)", "ㅣ (I)"],
          correct: 1,
          explanation: "ㅓ harfi o'zbek tilidagi 'O'' (ochiq 'o') tovushiga yaqin."
        },
        {
          type: "choice",
          question: "'ㅜ' [U] harfiga yana bitta chiziq qo'shilsa qaysi harf hosil bo'ladi?",
          options: ["ㅠ (YU)", "ㅛ (YO)", "ㅑ (YA)", "ㅕ (YO')"],
          correct: 0,
          explanation: "ㅜ (U) harfiga bitta vertikal chiziq qo'shilsa ㅠ (YU) bo'ladi!"
        },
        {
          type: "stroke",
          letter: "ㅏ",
          name: "아 (A)",
          strokes: ["① Yuqoridan pastga vertikal chiziq", "② Chapdan o'ngga qisqa gorizontal chiziq"],
          canvasLetter: "ㅏ"
        },
        {
          type: "match",
          question: "Unlilarni o'zbekcha talaffuziga moslang:",
          pairs: [
            { k: "ㅏ", v: "A" },
            { k: "ㅓ", v: "O' (eo)" },
            { k: "ㅗ", v: "O" },
            { k: "ㅜ", v: "U" },
            { k: "ㅣ", v: "I" }
          ]
        }
      ]
    },

    {
      id: "lesson_1_3",
      track: "alphabet",
      trackTitle: "1-Bo'lim: Koreys Alifbosi (Hangul)",
      title: "1.3: Undoshlarning Kelib Chiqishi (Nutq a'zolari)",
      desc: "ㄱ, ㄴ, ㅁ, ㅅ, ㅇ — inson nutq a'zolari shakli",
      icon: "👄",
      steps: [
        {
          type: "theory",
          title: "5 ta Asosiy Undosh va Nutq A'zolari",
          korean: "ㄱ ㄴ ㅁ ㅅ ㅇ",
          audio: "기역 니은 미음 시옷 이응",
          image: "image11.png",
          explanation: "Hangul dunyodagi yagona fonetik alifbo bo'lib, undosh harflar talaffuz paytida inson og'zi, tili va tomog'ining shaklini aks ettiradi!",
          points: [
            "<b>ㄱ [k/g]</b>: Tilning orqa qismi tomoqni to'sish shakli.",
            "<b>ㄴ [n]</b>: Til uchining yuqori milkka tegish shakli.",
            "<b>ㅁ [m]</b>: Yopilgan lablar (og'iz) shakli.",
            "<b>ㅅ [s]</b>: Tish shakli (tishlar orasidan chiqadigan havo).",
            "<b>ㅇ [ng / tovushsiz]</b>: Halqum (tomoq teshigi) doira shakli."
          ]
        },
        {
          type: "theory",
          title: "Chiziq qo'shish qoidasi (획추가 - Stroke Addition)",
          korean: "ㄱ→ㅋ, ㄴ→ㄷ→ㅌ, ㅁ→ㅂ→ㅍ, ㅅ→ㅈ→ㅊ, ㅇ→ㅎ",
          audio: "기역 키읔 니은 디귿 티읕",
          image: "image12.png",
          explanation: "Kuchliroq yoki portlovchi tovush hosil qilish uchun asosiy shaklga chiziq qo'shiladi:",
          points: [
            "ㄱ ga chiziq qo'shilsa: <b>ㅋ [kʰ]</b>",
            "ㄴ ga chiziq qo'shilsa: <b>ㄷ [t/d]</b>, yana qo'shilsa: <b>ㅌ [tʰ]</b>",
            "ㅁ ga chiziq qo'shilsa: <b>ㅂ [p/b]</b>, yana qo'shilsa: <b>ㅍ [pʰ]</b>",
            "ㅅ ga chiziq qo'shilsa: <b>ㅈ [j/ch]</b>, yana qo'shilsa: <b>ㅊ [chʰ]</b>",
            "ㅇ ga chiziq qo'shilsa: <b>ㅎ [h]</b>",
            "Va maxsus burama tovush: <b>ㄹ [r/l]</b>"
          ]
        },
        {
          type: "choice",
          question: "'ㅁ' (to'rtburchak) harfi qaysi nutq a'zosining shaklidan olingan?",
          options: [
            "Yopiq lablar (og'iz) shakli",
            "Tish shakli",
            "Tomoq teshigi",
            "Burun shakli"
          ],
          correct: 0,
          explanation: "To'g'ri! 'ㅁ' yopilgan lablar shakli bo'lib, undan [m] tovushi chiqadi."
        },
        {
          type: "choice",
          question: "Tish shaklidan kelib chiqqan 'ㅅ' harfiga chiziq qo'shilsa qaysi harflar hosil bo'ladi?",
          options: [
            "ㅈ va ㅊ",
            "ㄷ va ㅌ",
            "ㅂ va ㅍ",
            "ㄱ va ㅋ"
          ],
          correct: 0,
          explanation: "Barakalla! ㅅ (s) -> ㅈ (j) -> ㅊ (ch) ketma-ketligi hosil bo'ladi."
        },
        {
          type: "match",
          question: "Harflarni ularning nutq a'zolariga moslang:",
          pairs: [
            { k: "ㄱ", v: "Til orqasi (tomoqni to'sish)" },
            { k: "ㄴ", v: "Til uchi milkka tegishi" },
            { k: "ㅁ", v: "Lablar (og'iz) shakli" },
            { k: "ㅅ", v: "Tish shakli" },
            { k: "ㅇ", v: "Tomoq (halqum) doirasi" }
          ]
        }
      ]
    },

    {
      id: "lesson_1_4",
      track: "alphabet",
      trackTitle: "1-Bo'lim: Koreys Alifbosi (Hangul)",
      title: "1.4: 14 ta Oddiy Undosh (기본 자음)",
      desc: "ㄱ, ㄴ, ㄷ, ㄹ, ㅁ, ㅂ, ㅅ, ㅇ, ㅈ, ㅊ, ㅋ, ㅌ, ㅍ, ㅎ",
      icon: "🔤",
      steps: [
        {
          type: "theory",
          title: "14 ta Oddiy Undoshlar ro'yxati",
          korean: "ㄱ ㄴ ㄷ ㄹ ㅁ ㅂ ㅅ ㅇ ㅈ ㅊ ㅋ ㅌ ㅍ ㅎ",
          audio: "기역 니은 디귿 리을 미음 비읍 시옷 이응 지읒 치읓 키읔 티읕 피읖 히읗",
          image: "image16.png",
          explanation: "Har bir koreys undoshining o'z rasmiy nomi bor (masalan, ㄱ - 기역 giyeok, ㄴ - 니은 nieun):",
          points: [
            "ㄱ (g/k), ㄴ (n), ㄷ (d/t), ㄹ (r/l)",
            "ㅁ (m), ㅂ (b/p), ㅅ (s/sh), ㅇ (ng/ovozsiz)",
            "ㅈ (j/ch), ㅊ (chʰ), ㅋ (kʰ), ㅌ (tʰ), ㅍ (pʰ), ㅎ (h)"
          ]
        },
        {
          type: "listening",
          question: "Tinglang va to'g'ri undoshni tanlang:",
          audio: "니은",
          options: ["ㄴ (N)", "ㄱ (G/K)", "ㄷ (D/T)", "ㄹ (R/L)"],
          correct: 0,
          explanation: "Tinglangan harf: ㄴ (니은 - nieun)."
        },
        {
          type: "listening",
          question: "Tinglang va tanlang:",
          audio: "미음",
          options: ["ㅁ (M)", "ㅂ (B)", "ㅇ (NG)", "ㅎ (H)"],
          correct: 0,
          explanation: "Tinglangan harf: ㅁ (미음 - mieum)."
        },
        {
          type: "choice",
          question: "Qaysi harf so'z boshida kelganda ovoz chiqarmaydi (ovozsiz dummy bo'ladi)?",
          options: ["ㅇ (Ieung)", "ㅁ (Mieum)", "ㅎ (Hieut)", "ㅅ (Siot)"],
          correct: 0,
          explanation: "'ㅇ' unli oldida bo'shliq to'ldiruvchi vazifasini bajaradi va talaffuz qilinmaydi (masalan, 아 = [a]). Bo'g'in oxirida kelsagina [ng] deb o'qiladi."
        },
        {
          type: "stroke",
          letter: "ㄱ",
          name: "기역 (G/K)",
          strokes: ["① Chapdan o'ngga va to'xtamasdan pastga burilib chiziladi"],
          canvasLetter: "ㄱ"
        },
        {
          type: "match",
          question: "Undoshlarni ularning nomiga moslang:",
          pairs: [
            { k: "ㄱ", v: "기역 (giyeok)" },
            { k: "ㄴ", v: "니은 (nieun)" },
            { k: "ㄹ", v: "리을 (rieul)" },
            { k: "ㅁ", v: "미음 (mieum)" },
            { k: "ㅂ", v: "비읍 (bieup)" }
          ]
        }
      ]
    },

    {
      id: "lesson_1_5",
      track: "alphabet",
      trackTitle: "1-Bo'lim: Koreys Alifbosi (Hangul)",
      title: "1.5: Bo'g'in Tuzilishi (Bo'g'in bloklari)",
      desc: "Koreys harflari qanday qilib bo'g'in (blok) bo'lib birlashadi?",
      icon: "🧱",
      steps: [
        {
          type: "theory",
          title: "Hangulda Bo'g'in Bloki Qoidasi",
          korean: "ㅇ + ㅏ = 아 | ㄱ + ㅏ = 가",
          audio: "아 가 나 다",
          image: "image17.png",
          explanation: "Koreys harflari lotin alifbosi kabi bir qatorda yozilmaydi, balki to'rtburchak 'bo'g'in bloklari'ga birlashtiriladi!",
          points: [
            "Har bir bo'g'inda kamida 1 ta undosh va 1 ta unli bo'lishi SHART.",
            "Agar so'z unli bilan boshlansa, undosh o'rniga tovushsiz 'ㅇ' qo'yiladi: ㅇ + ㅏ = <b>아</b>.",
            "Vertikal unlilar (ㅏ, ㅑ, ㅓ, ㅕ, ㅣ) undoshning O'NG tomoniga yoziladi: ㄱ + ㅏ = <b>가</b>.",
            "Gorizontal unlilar (ㅗ, ㅛ, ㅜ, ㅠ, ㅡ) undoshning PASTIGA yoziladi: ㄱ + ㅗ = <b>고</b>, ㄴ + ㅜ = <b>누</b>."
          ]
        },
        {
          type: "choice",
          question: "'ㄴ' va 'ㅏ' harflari birlashsa qanday bo'g'in hosil bo'ladi?",
          options: ["나 (na)", "누 (nu)", "노 (no)", "너 (neo)"],
          correct: 0,
          explanation: "ㄴ + ㅏ = 나 [na] (men degani)."
        },
        {
          type: "choice",
          question: "'ㅁ' va 'ㅗ' birlashsa qanday yoziladi?",
          options: ["모 (mo)", "마 (ma)", "무 (mu)", "미 (mi)"],
          correct: 0,
          explanation: "ㅗ gorizontal unli bo'lgani uchun ㅁ ning tagiga yoziladi: 모 [mo]."
        },
        {
          type: "match",
          question: "Bo'g'inlarni to'g'ri o'qilishiga moslang:",
          pairs: [
            { k: "가", v: "ga / ka" },
            { k: "나", v: "na" },
            { k: "다", v: "da / ta" },
            { k: "마", v: "ma" },
            { k: "바", v: "ba / pa" }
          ]
        }
      ]
    },

    // ================= TRACK 2: SO'ZLAR =================
    {
      id: "lesson_2_1",
      track: "words",
      trackTitle: "2-Bo'lim: Ma'ruzadagi So'zlar (Lug'at)",
      title: "2.1: Salomlashish & Kurs Iboralari",
      desc: "안녕하세요, 선생님, 수고하셨어요",
      icon: "👋",
      steps: [
        {
          type: "theory",
          title: "Darsdagi Muhim Iboralar",
          korean: "안녕하세요 • 선생님 • 수고하셨어요",
          audio: "안녕하세요 선생님 수고하셨어요",
          image: "image18.png",
          explanation: "Ma'ruzalarda o'rgatilgan 3 ta eng muhim ibora:",
          points: [
            "<b>안녕하세요 [annyeonghaseyo]</b> — Assalomu alaykum / Salom (1-slaydda)",
            "<b>선생님 [seonsaengnim]</b> — Ustoz / O'qituvchi (Shirin sonsengnim)",
            "<b>수고하셨어요 [sugohasyeosseoyo]</b> — Rahmat, charchamadingizmi / Barakalla! (Oxirgi slaydda)"
          ]
        },
        {
          type: "listening",
          question: "Qaysi ibora talaffuz qilindi?",
          audio: "안녕하세요",
          options: ["안녕하세요 (Salom)", "수고하셨어요 (Barakalla)", "선생님 (Ustoz)", "감사합니다 (Rahmat)"],
          correct: 0,
          explanation: "안녕하세요 [annyeonghaseyo] — eng mashhur koreyscha salomlashish."
        },
        {
          type: "choice",
          question: "Dars oxirida o'qituvchiga yoki talabalarga mehnati uchun nima deyiladi?",
          options: [
            "수고하셨어요 (Sugohasyeosseoyo)",
            "안녕하세요 (Annyeonghaseyo)",
            "안녕히 가세요 (Xayr)",
            "죄송합니다 (Kechirasiz)"
          ],
          correct: 0,
          explanation: "Dars oxiridagi slaydda yozilganidek: 수고하셨어요 (Mehnatingiz uchun rahmat / Barakalla)!"
        },
        {
          type: "builder",
          question: "'Salom' so'zini bo'g'inlardan yig'ing:",
          targetWord: "안녕하세요",
          syllables: ["안", "녕", "하", "세", "요"],
          distractors: ["선", "생", "수"],
          explanation: "안 + 녕 + 하 + 세 + 요 = 안녕하세요!"
        },
        {
          type: "match",
          question: "Iboralarni o'zbekcha tarjimasiga moslang:",
          pairs: [
            { k: "안녕하세요", v: "Salom / Assalomu alaykum" },
            { k: "선생님", v: "Ustoz / O'qituvchi" },
            { k: "수고하셨어요", v: "Barakalla / Mehnatingizga rahmat" }
          ]
        }
      ]
    },

    {
      id: "lesson_2_2",
      track: "words",
      trackTitle: "2-Bo'lim: Ma'ruzadagi So'zlar (Lug'at)",
      title: "2.2: Koinot & Inson So'zlari",
      desc: "하늘 (Osmon), 땅 (Yer), 사람 (Odam)",
      icon: "🌌",
      steps: [
        {
          type: "theory",
          title: "Alifbo asosidagi 3 ta So'z",
          korean: "하늘 • 땅 • 사람",
          audio: "하늘 땅 사람",
          image: "image5.png",
          explanation: "1-ma'ruza 9-slaydidagi 3 ta so'z:",
          points: [
            "<b>하늘 [haneul / xanil]</b> — Osmon",
            "<b>땅 [ttang]</b> — Yer",
            "<b>사람 [saram]</b> — Odam / Inson"
          ]
        },
        {
          type: "choice",
          question: "'하늘' so'zining o'zbekcha ma'nosi nima?",
          options: ["Osmon", "Yer", "Odam", "Suv"],
          correct: 0,
          explanation: "하늘 [haneul] — Osmon degani."
        },
        {
          type: "choice",
          question: "'땅' so'zi qanday tarjima qilinadi?",
          options: ["Yer", "Osmon", "Tog'", "Daryo"],
          correct: 0,
          explanation: "땅 [ttang] — Yer degani."
        },
        {
          type: "listening",
          question: "Tinglang va so'zni toping:",
          audio: "사람",
          options: ["사람 (Odam)", "하늘 (Osmon)", "땅 (Yer)", "선생님 (Ustoz)"],
          correct: 0,
          explanation: "사람 [saram] — Odam / Inson."
        },
        {
          type: "builder",
          question: "'Odam' so'zini bo'g'inlardan yig'ing:",
          targetWord: "사람",
          syllables: ["사", "람"],
          distractors: ["하", "늘", "땅"],
          explanation: "사 + 람 = 사람 (saram - odam)."
        }
      ]
    },

    {
      id: "lesson_2_3",
      track: "words",
      trackTitle: "2-Bo'lim: Ma'ruzadagi So'zlar (Lug'at)",
      title: "2.3: Oddiy Harflardan Hosil Bo'lgan So'zlar",
      desc: "아이, 오이, 우유, 여우, 나무, 나비, 모자, 바지",
      icon: "🥛",
      steps: [
        {
          type: "theory",
          title: "Dastlabki Oddiy So'zlar",
          korean: "아이, 오이, 우유, 여우, 나무, 나비, 모자, 바지",
          audio: "아이 오이 우유 여우 나무 나비 모자 바지",
          image: "image17.png",
          explanation: "Koreys tilida yangi o'rganilgan harflar bilan tuziladigan eng ommabop so'zlar:",
          points: [
            "<b>아이 [ai]</b> — Bola",
            "<b>오이 [oi]</b> — Bodring",
            "<b>우유 [uyu]</b> — Sut",
            "<b>여우 [yeou]</b> — Tulki",
            "<b>나무 [namu]</b> — Daraxt",
            "<b>나비 [nabi]</b> — Kapalak",
            "<b>모자 [moja]</b> — Bosh kiyim (shlyapa)",
            "<b>바지 [baji]</b> — Shim"
          ]
        },
        {
          type: "choice",
          question: "'우유' so'zining tarjimasi qaysi?",
          options: ["Sut", "Bodring", "Bola", "Daraxt"],
          correct: 0,
          explanation: "우유 [uyu] — Sut degani."
        },
        {
          type: "choice",
          question: "'오이' nimani bildiradi?",
          options: ["Bodring", "Tulki", "Shim", "Kapalak"],
          correct: 0,
          explanation: "오이 [oi] — Bodring."
        },
        {
          type: "listening",
          question: "Tinglang va so'zni tanlang:",
          audio: "나무",
          options: ["나무 (Daraxt)", "나비 (Kapalak)", "모자 (Bosh kiyim)", "바지 (Shim)"],
          correct: 0,
          explanation: "나무 [namu] — Daraxt."
        },
        {
          type: "match",
          question: "Koreyscha so'zlarni ma'nosiga moslang:",
          pairs: [
            { k: "아이", v: "Bola" },
            { k: "우유", v: "Sut" },
            { k: "여우", v: "Tulki" },
            { k: "나비", v: "Kapalak" },
            { k: "모자", v: "Bosh kiyim" }
          ]
        }
      ]
    },

    {
      id: "lesson_2_4",
      track: "words",
      trackTitle: "2-Bo'lim: Ma'ruzadagi So'zlar (Lug'at)",
      title: "2.4: Koreys Madaniyati So'zlari",
      desc: "한복, 한옥, 한식, 불고기, 비빔밥, 반찬, 윷놀이, 원",
      icon: "🎎",
      steps: [
        {
          type: "theory",
          title: "Koreya Madaniyati va Taomlari",
          korean: "한복 • 한옥 • 한식 • 불고기 • 비빔밥 • 반찬",
          audio: "한복 한옥 한식 불고기 비빔밥 반찬",
          image: "image_10.jpg",
          explanation: "2-ma'ruzadagi madaniy terminlar:",
          points: [
            "<b>한복 [Hanbok]</b> — Milliy koreys libosi",
            "<b>한옥 [Hanok]</b> — An'anaviy koreys uyi",
            "<b>한식 [Hansik]</b> — Koreys milliy oshxonasi / taomlari",
            "<b>불고기 [Bulgogi]</b> — Olovda qovurilgan marinadlangan go'sht",
            "<b>비빔밥 [Bibimbap]</b> — Sabzavotlar, guruch va go'shtli aralash taom",
            "<b>반찬 [Banchan]</b> — Yonida tortiladigan gazaklar / salatlar"
          ]
        },
        {
          type: "choice",
          question: "Koreys milliy libosi nima deb ataladi?",
          options: ["한복 (Hanbok)", "한옥 (Hanok)", "한식 (Hansik)", "한자 (Hanja)"],
          correct: 0,
          explanation: "한복 [Hanbok] — koreyslarning rang-barang milliy kiyimi."
        },
        {
          type: "choice",
          question: "An'anaviy yog'ochdan qurilgan koreys uyi nima deb nomlanadi?",
          options: ["한옥 (Hanok)", "한복 (Hanbok)", "불고기 (Bulgogi)", "반찬 (Banchan)"],
          correct: 0,
          explanation: "한옥 [Hanok] — koreys an'anaviy me'morchiligidagi uy."
        },
        {
          type: "listening",
          question: "Tinglang va taomni toping:",
          audio: "비빔밥",
          options: ["비빔밥 (Bibimbap)", "불고기 (Bulgogi)", "반찬 (Banchan)", "한식 (Hansik)"],
          correct: 0,
          explanation: "비빔밥 [Bibimbap] — aralashtirib iste'mol qilinadigan mashhur guruch taomi."
        },
        {
          type: "match",
          question: "Madaniyat so'zlarini to'g'ri moslashtiring:",
          pairs: [
            { k: "한복", v: "Milliy kiyim" },
            { k: "한옥", v: "An'anaviy uy" },
            { k: "불고기", v: "Marinadlangan go'sht" },
            { k: "반찬", v: "Yon taomlar / gazaklar" },
            { k: "원", v: "Koreya pul birligi (₩)" }
          ]
        }
      ]
    },

    // ================= TRACK 3: QUIZ & MA'RUZA BILIMI =================
    {
      id: "lesson_3_1",
      track: "culture",
      trackTitle: "3-Bo'lim: Koreya Haqida Viktorina & Ma'ruza Sinovi",
      title: "3.1: Koreya Davlati va Milliy Ramzlari",
      desc: "Seul, Taegeukgi, Mugunghwa, Von va Janubiy Koreya",
      icon: "🇰🇷",
      steps: [
        {
          type: "theory",
          title: "Koreya Davlati va Ramzlari",
          korean: "한국 • 서울 • 태극기 • 무궁화 • 원",
          audio: "한국 서울 태극기 무궁화 원",
          image: "image_4.jpg",
          explanation: "2-ma'ruzadagi davlatga oid ma'lumotlar:",
          points: [
            "<b>한국 [Hanguk]</b> — Janubiy Koreya (rasmiy nomi: Koreya Respublikasi)",
            "<b>서울 [Seoul]</b> — Janubiy Koreya poytaxti",
            "<b>태극기 [Taegeukgi]</b> — Davlat bayrog'i (qizil-ko'k aylanali)",
            "<b>무궁화 [Mugunghwa]</b> — Milliy gul (Suriya atirguli - boqiylik ramzi)",
            "<b>원 [Won]</b> — Pul birligi (₩)"
          ]
        },
        {
          type: "choice",
          question: "Janubiy Koreyaning poytaxti qaysi shahar?",
          options: ["서울 (Seoul)", "부산 (Busan)", "인천 (Incheon)", "대구 (Daegu)"],
          correct: 0,
          explanation: "Koreya Respublikasining poytaxti — 서울 (Seoul)."
        },
        {
          type: "choice",
          question: "Koreya Respublikasining davlat bayrog'i nima deb ataladi?",
          options: ["태극기 (Taegeukgi)", "무궁화 (Mugunghwa)", "한글 (Hangeul)", "훈민정음 (Hunminjeongeum)"],
          correct: 0,
          explanation: "Koreya bayrog'i — 태극기 (Taegeukgi)."
        },
        {
          type: "choice",
          question: "Koreyaning milliy guli qaysi?",
          options: ["무궁화 (Mugunghwa)", "장미 (Atirgul)", "연꽃 (Lotos)", "벚꽃 (Sakura)"],
          correct: 0,
          explanation: "Koreyaning milliy guli — 무궁화 (Mugunghwa - Rose of Sharon)."
        },
        {
          type: "choice",
          question: "Koreya pul birligi nima?",
          options: ["원 (Won - ₩)", "달러 (Dollar - $)", "엔 (Iena - ¥)", "숨 (So'm)"],
          correct: 0,
          explanation: "Koreya pul birligi — 원 (Won)."
        }
      ]
    },

    {
      id: "lesson_3_2",
      track: "culture",
      trackTitle: "3-Bo'lim: Koreya Haqida Viktorina & Ma'ruza Sinovi",
      title: "3.2: O'yinlar, Seriallar va K-POP",
      desc: "Yutnori, K-Drama, K-POP va an'anaviy o'yinlar",
      icon: "🎲",
      steps: [
        {
          type: "theory",
          title: "Koreys Ko'ngilochar Madaniyati",
          korean: "윷놀이 • K-POP • 한국 드라마",
          audio: "윷놀이 케이팝 한국 드라마",
          image: "image_21.jpg",
          explanation: "2-ma'ruzadagi madaniy ko'ngilochar mavzular:",
          points: [
            "<b>윷놀이 [Yutnori]</b> — 4 ta yog'och tayoqcha bilan o'ynaladigan qadimiy an'anaviy stol o'yini.",
            "<b>한국 드라마 [Hanguk drama]</b> — Butun jahonda mashhur bo'lgan koreys seriallari (dorama).",
            "<b>K-POP</b> — Janubiy Koreya estrada musiqasi va global madaniyat hodisasi."
          ]
        },
        {
          type: "choice",
          question: "To'rtta maxsus yog'och tayoqcha tashlab o'ynaladigan an'anaviy koreys o'yini nima?",
          options: ["윷놀이 (Yutnori)", "바둑 (Baduk)", "태권도 (Taekvondo)", "한복 (Hanbok)"],
          correct: 0,
          explanation: "Bu o'yin — 윷놀이 (Yutnori)!"
        },
        {
          type: "choice",
          question: "Koreys taomlarida guruch va asosiy taom yonida kichik likopchalarda beriladigan salat va gazaklar nima deyiladi?",
          options: ["반찬 (Banchan)", "불고기 (Bulgogi)", "비빔밥 (Bibimbap)", "한식 (Hansik)"],
          correct: 0,
          explanation: "Barcha qo'shimcha gazaklar '반찬' (Banchan) deb ataladi."
        },
        {
          type: "match",
          question: "Ko'ngilochar va madaniy tushunchalarni moslang:",
          pairs: [
            { k: "윷놀이", v: "Tayoqchalar bilan o'ynaladigan o'yin" },
            { k: "한국 드라마", v: "Koreys seriali" },
            { k: "K-POP", v: "Koreys pop musiqasi" },
            { k: "한자", v: "Xitoy iyerogliflari" }
          ]
        }
      ]
    },

    {
      id: "lesson_3_3",
      track: "culture",
      trackTitle: "3-Bo'lim: Koreya Haqida Viktorina & Ma'ruza Sinovi",
      title: "3.3: 'Basic Korean 1' Kursi & Qoidalar Sinovi",
      desc: "Shirin ustoz, baholash tizimi, imtihonlar va dars qoidalari",
      icon: "🎓",
      steps: [
        {
          type: "theory",
          title: "Basic Korean 1 Kurs Qoidalari",
          korean: "Basic Korean 1 • Shirin sonsengnim",
          audio: "베이직 코리안 원",
          image: "image3.png",
          explanation: "1-ma'ruza 2-5 slaydlarda keltirilgan kurs talablari:",
          points: [
            "O'qituvchi: <b>Makhamedova Shirin (Shirin sonsengnim)</b>, Xona: <b>206B</b>.",
            "Midterm (Oraliq) 30% (7-hafta), Final (Yakuniy) 30% (15-hafta) — Qayta topshirish (다시 보기) YO'Q!",
            "Davomat 10% — <b>4 marta</b> dars qoldirilsa avtomatik 'F' baho olinadi!",
            "Jarimalar (-2 ball): Darsda uxlash, ruxsatsiz chiqish, telefon ishlatish, gaplashish, guruh ishida qatnashmaslik."
          ]
        },
        {
          type: "choice",
          question: "Basic Korean 1 fani o'qituvchisi kim va xonasi qaysi?",
          options: [
            "Makhamedova Shirin sonsengnim, Office 206B",
            "Kim sonsengnim, Office 101A",
            "Park sonsengnim, Office 305C",
            "Lee sonsengnim, Office 404"
          ],
          correct: 0,
          explanation: "1-ma'ruza 2-slaydda ko'rsatilgan: Makhamedova Shirin sonsengnim, Office – 206B."
        },
        {
          type: "choice",
          question: "Talaba necha marta dars qoldirsa to'g'ridan-to'g'ri 'F' baho oladi?",
          options: [
            "4 marta (4 absence = F)",
            "2 marta",
            "6 marta",
            "10 marta"
          ],
          correct: 0,
          explanation: "3-slaydda qat'iy ko'rsatilgan: (4 absence = F)!"
        },
        {
          type: "choice",
          question: "Oraliq (Midterm) va Yakuniy (Final) imtihonlar har biri necha foizni tashkil qiladi va qayta topshirish bormi?",
          options: [
            "Har biri 30% dan, qayta topshirish (다시 보기) YO'Q",
            "Har biri 20% dan, qayta topshirish bor",
            "Midterm 50%, Final 50%",
            "Oraliq imtihon umuman yo'q"
          ],
          correct: 0,
          explanation: "Oraliq 30% (7-hafta), Yakuniy 30% (15-hafta) va ikkalasida ham qayta topshirish '다시 보기 x'!"
        },
        {
          type: "choice",
          question: "Quyidagilardan qaysi biri darsda -2 ball jarimaga sabab bo'ladi?",
          options: [
            "Darsda uxlash yoki telefondan foydalanish",
            "Faol savol berish",
            "Daftarni toza tutish",
            "Vazifani vaqtida topshirish"
          ],
          correct: 0,
          explanation: "Darsda uxlash, ruxsatsiz chiqish, telefondan foydalanish yoki guruh ishida qatnashmaslik -2 ball jarima beradi."
        },
        {
          type: "choice",
          question: "Kursda 'A+ / A' baho olish uchun qancha ball to'plash kerak va kvota necha foiz?",
          options: [
            "85 – 100% ball (talabalarning 20% gacha)",
            "70 – 84% ball (talabalarning 50% gacha)",
            "60 – 70% ball",
            "50 – 60% ball"
          ],
          correct: 0,
          explanation: "5-slayddagi 'Grading System': A+/A uchun 85–100% ball kerak va bu 20% kvotaga ega."
        }
      ]
    }
  ]
};
