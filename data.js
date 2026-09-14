// ==========================================
// HANGEUL SAYOHATI (한글 여행) - MA'LUMOTLAR BAZASI
// Manbalar: "part - 1 Hangeul uz.pptx" va "한국소개.ppt"
// O'zbek tilida juda sodda, tushunarli va aniq tushuntirishlar
// ==========================================

const HANGEUL_DATA = {
  courseInfo: {
    name: "Basic Korean 1",
    subName: "Koreys tili 1-kurs ma'ruzalari",
    teacher: "Makhamedova Shirin (Shirin sonsengnim / 선생님)",
    office: "Office – 206B",
    grading: [
      { item: "Midterm (Oraliq imtihon)", weight: "30%", detail: "7-haftada. Qayta topshirish (다시 보기) yo'q!" },
      { item: "Final (Yakuniy imtihon)", weight: "30%", detail: "15-haftada. Qayta topshirish (다시 보기) yo'q!" },
      { item: "Attendance (Davomat)", weight: "10%", detail: "4 marta dars qoldirilsa avtomatik 'F' (yiqiladi)!" },
      { item: "Assignment (Uy vazifasi)", weight: "10%", detail: "Speaking homework (audio yozib topshirish)" },
      { item: "Quiz (Kichik test)", weight: "10%", detail: "9-haftada darsda o'tkaziladi" },
      { item: "Others (Konspekt & Faollik)", weight: "10%", detail: "Daftar 5% + Guruhdagi faollik 5%" }
    ],
    penalties: [
      "Darsda uxlash (-2 ball)",
      "Ruxsatsiz xonadan chiqib ketish (-2 ball)",
      "Darsda telefondan foydalanish (-2 ball)",
      "Befoyda va ortiqcha gaplashish (-2 ball)",
      "Guruh ishlarida qatnashmaslik (-2 ball)"
    ],
    gradeScale: [
      { grade: "A+ / A", range: "85 – 100%", quota: "Talabalarning 20% gacha" },
      { grade: "B+ / B", range: "70 – 84%", quota: "Talabalarning 30% gacha" },
      { grade: "C+ / C", range: "50 – 69%", quota: "Talabalarning 30% gacha" },
      { grade: "D+ / D", range: "30 – 49%", quota: "Talabalarning 20% gacha" },
      { grade: "F", range: "0 – 29%", quota: "Yiqilgan (Qayta o'qish)" }
    ]
  },

  alphabetStructure: {
    totalBasic: 24,
    vowelsTotal: 21,
    consonantsTotal: 19,
    creationYear: 1443,
    creator: "Qirol Sejong (세종대왕)",
    originalName: "훈민정음 [Hunminjeongeum]",
    originalMeaning: "Xalqqa to'g'ri talaffuzni o'rgatish uchun ko'rsatma"
  },

  vowels: [
    { char: "ㅏ", name: "아", sound: "a", rom: "a", uz: "Ochiq 'A' tovushi", strokeCount: 2, order: ["1. Tik chiziq (yuqoridan pastga)", "2. O'ng tomonga qisqa chiziq"], example: "아이 (ai - bola)" },
    { char: "ㅑ", name: "야", sound: "ya", rom: "ya", uz: "'YA' tovushi", strokeCount: 3, order: ["1. Tik chiziq", "2. Yuqori o'ng chiziq", "3. Pastki o'ng chiziq"], example: "야구 (yagu - beysbol)" },
    { char: "ㅓ", name: "어", sound: "eo / o'", rom: "eo", uz: "Ochiq 'O'' tovushi (og'iz 'a' kabi ochiladi)", strokeCount: 2, order: ["1. Chapdan o'ngga qisqa chiziq", "2. Tik chiziq pastga"], example: "어머니 (omeoni - ona)" },
    { char: "ㅕ", name: "여", sound: "yeo / yo'", rom: "yeo", uz: "Ochiq 'YO'' tovushi", strokeCount: 3, order: ["1. Yuqori chap chiziq", "2. Pastki chap chiziq", "3. Tik chiziq"], example: "여우 (yeou - tulki)" },
    { char: "ㅗ", name: "오", sound: "o", rom: "o", uz: "Dudoqlangan 'O' (lablar oldinga cho'chchayadi)", strokeCount: 2, order: ["1. Qisqa tik chiziq", "2. Yotiq gorizontal chiziq"], example: "오이 (oi - bodring)" },
    { char: "ㅛ", name: "요", sound: "yo", rom: "yo", uz: "Dudoqlangan 'YO'", strokeCount: 3, order: ["1. Chap qisqa chiziq", "2. O'ng qisqa chiziq", "3. Yotiq chiziq"], example: "요리 (yori - taom)" },
    { char: "ㅜ", name: "우", sound: "u", rom: "u", uz: "'U' tovushi", strokeCount: 2, order: ["1. Yotiq chiziq", "2. Pastga tik chiziq"], example: "우유 (uyu - sut)" },
    { char: "ㅠ", name: "유", sound: "yu", rom: "yu", uz: "'YU' tovushi", strokeCount: 3, order: ["1. Yotiq chiziq", "2. Chap tik chiziq", "3. O'ng tik chiziq"], example: "유리 (yuri - shisha)" },
    { char: "ㅡ", name: "으", sound: "eu / i", rom: "eu", uz: "Tishlar jipslashgan qattiq 'I'", strokeCount: 1, order: ["1. Chapdan o'ngga yotiq to'g'ri chiziq"], example: "으뜸 (eutteum - birinchi)" },
    { char: "ㅣ", name: "이", sound: "i", rom: "i", uz: "Oddiy 'I' tovushi", strokeCount: 1, order: ["1. Yuqoridan pastga tik chiziq"], example: "이 (i - tish / ikki)" }
  ],

  consonants: [
    { char: "ㄱ", name: "기역 (giyeok)", sound: "k / g", rom: "g/k", organ: "Tilning orqasi tomoqni to'sganda", uz: "So'z boshida K, unlilar orasida G", strokes: 1, example: "가방 (gabang - sumka)" },
    { char: "ㄴ", name: "니은 (nieun)", sound: "n", rom: "n", organ: "Til uchi yuqori milkka tekkanda", uz: "Oddiy 'N' tovushi", strokes: 1, example: "나무 (namu - daraxt)" },
    { char: "ㄷ", name: "디귿 (digeut)", sound: "t / d", rom: "d/t", organ: "ㄴ harfiga bitta chiziq qo'shilgan", uz: "So'z boshida T, unlilar orasida D", strokes: 2, example: "다리 (dari - oyoq/ko'prik)" },
    { char: "ㄹ", name: "리을 (rieul)", sound: "r / l", rom: "r/l", organ: "Til burilib tanglayga tekkanda", uz: "So'z boshida/orasida R, bo'g'in oxirida L", strokes: 3, example: "라디오 (radio)" },
    { char: "ㅁ", name: "미음 (mieum)", sound: "m", rom: "m", organ: "Yopiq lablar (og'iz) to'rtburchak shakli", uz: "Oddiy 'M' tovushi", strokes: 3, example: "모자 (moja - shlyapa)" },
    { char: "ㅂ", name: "비읍 (bieup)", sound: "p / b", rom: "b/p", organ: "ㅁ harfiga ikkita chiziq qo'shilgan", uz: "So'z boshida P, unlilar orasida B", strokes: 4, example: "바지 (baji - shim)" },
    { char: "ㅅ", name: "시옷 (siot)", sound: "s / sh", rom: "s", organ: "Inson tishi shakli", uz: "Oddiy 'S' (i, ya, yeo, yo, yu oldida SH)", strokes: 2, example: "사람 (saram - odam)" },
    { char: "ㅇ", name: "이응 (ieung)", sound: "ng / ovozsiz", rom: "ng/-", organ: "Tomoq (halqum) teshigi doirasi", uz: "Unli oldida tovushsiz (dummy), bo'g'in tagida NG", strokes: 1, example: "아이 (ai - bola)" },
    { char: "ㅈ", name: "지읒 (jieut)", sound: "ch / j", rom: "j", organ: "ㅅ harfiga chiziq qo'shilgan", uz: "So'z boshida Ch, unlilar orasida J", strokes: 2, example: "지도 (jido - xarita)" },
    { char: "ㅊ", name: "치읓 (chieut)", sound: "chʰ (kuchli ch)", rom: "ch", organ: "ㅈ harfiga yana zarbli chiziq qo'shilgan", uz: "Nafas bilan aytiladigan kuchli 'Ch'", strokes: 3, example: "차 (cha - choy/mashina)" },
    { char: "ㅋ", name: "키읔 (kieuk)", sound: "kʰ (kuchli k)", rom: "k", organ: "ㄱ harfiga o'rtasidan chiziq qo'shilgan", uz: "Nafas bilan aytiladigan kuchli 'K'", strokes: 2, example: "코 (ko - burun)" },
    { char: "ㅌ", name: "티읕 (tieut)", sound: "tʰ (kuchli t)", rom: "t", organ: "ㄷ harfiga o'rtasidan chiziq qo'shilgan", uz: "Nafas bilan aytiladigan kuchli 'T'", strokes: 3, example: "토마토 (tomato)" },
    { char: "ㅍ", name: "피읖 (pieup)", sound: "pʰ (kuchli p)", rom: "p", organ: "ㅂ harfining kuchli portlovchi shakli", uz: "Nafas bilan aytiladigan kuchli 'P'", strokes: 4, example: "포도 (podo - uzum)" },
    { char: "ㅎ", name: "히읗 (hieut)", sound: "h", rom: "h", organ: "ㅇ doirasi ustiga ikkita chiziq qo'shilgan", uz: "Yumshoq nafas 'H' tovushi", strokes: 3, example: "하늘 (haneul - osmon)" }
  ],

  words: [
    {
      korean: "안녕하세요",
      rom: "annyeonghaseyo",
      uzbek: "Assalomu alaykum / Salom",
      trans: "Annyonghaseo",
      category: "Iboralar",
      image: "image2.jpg",
      note: "1-ma'ruzaning 1-slaydidagi rasmiy salomlashish."
    },
    {
      korean: "선생님",
      rom: "seonsaengnim",
      uzbek: "Ustoz / O'qituvchi",
      trans: "Sonsengnim",
      category: "Iboralar",
      image: "image3.png",
      note: "Shirin sonsengnim (Office 206B) — fan o'qituvchisi."
    },
    {
      korean: "수고하셨어요",
      rom: "sugohasyeosseoyo",
      uzbek: "Barakalla / Mehnatingizga rahmat",
      trans: "Sugohasyosseoyo",
      category: "Iboralar",
      image: "image18.png",
      note: "1-ma'ruza so'nggi slaydidagi minnatdorchilik olqishi."
    },
    {
      korean: "하늘",
      rom: "haneul",
      uzbek: "Osmon",
      trans: "Xanil",
      category: "Falsafa",
      image: "image6.png",
      note: "Unlilarning 1-asosi: Dumaloq nuqta osmonni ifodalaydi."
    },
    {
      korean: "땅",
      rom: "ttang",
      uzbek: "Yer",
      trans: "Ttang",
      category: "Falsafa",
      image: "image5.png",
      note: "Unlilarning 2-asosi: Yotiq to'g'ri chiziq yerni bildiradi."
    },
    {
      korean: "사람",
      rom: "saram",
      uzbek: "Odam / Inson",
      trans: "Saram",
      category: "Falsafa",
      image: "image5.png",
      note: "Unlilarning 3-asosi: Tik chiziq tik turgan insonni bildiradi."
    },
    {
      korean: "모음",
      rom: "moeum",
      uzbek: "Unli harflar",
      trans: "Moyim",
      category: "Grammatika",
      image: "image8.png",
      note: "Koreys tilida 10 ta oddiy unli bor."
    },
    {
      korean: "자음",
      rom: "jaeum",
      uzbek: "Undosh harflar",
      trans: "Jaeum / Cha-im",
      category: "Grammatika",
      image: "image13.png",
      note: "Koreys tilida 14 ta oddiy undosh bor."
    },
    {
      korean: "아이",
      rom: "ai",
      uzbek: "Bola",
      trans: "Ai",
      category: "Oddiy so'zlar",
      image: "image17.png",
      note: "Oddiy unlilar bilan yoziladigan ilk so'z."
    },
    {
      korean: "오이",
      rom: "oi",
      uzbek: "Bodring",
      trans: "Oi",
      category: "Oddiy so'zlar",
      image: "image17.png",
      note: "Oddiy unlilar (오 + 이) orqali hosil bo'ladi."
    },
    {
      korean: "우유",
      rom: "uyu",
      uzbek: "Sut",
      trans: "Uyu",
      category: "Oddiy so'zlar",
      image: "image17.png",
      note: "Oddiy unlilar (우 + 유) orqali yoziladi."
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
      note: "ㄴ va ㅁ harflaridan tuzilgan so'z."
    },
    {
      korean: "나비",
      rom: "nabi",
      uzbek: "Kapalak",
      trans: "Nabi",
      category: "Oddiy so'zlar",
      image: "image14.png",
      note: "ㄴ va ㅂ harflaridan tuzilgan so'z."
    },
    {
      korean: "모자",
      rom: "moja",
      uzbek: "Bosh kiyim / Shlyapa",
      trans: "Moja",
      category: "Oddiy so'zlar",
      image: "image14.png",
      note: "ㅁ va ㅈ harflaridan tuzilgan so'z."
    },
    {
      korean: "바지",
      rom: "baji",
      uzbek: "Shim",
      trans: "Baji",
      category: "Oddiy so'zlar",
      image: "image14.png",
      note: "ㅂ va ㅈ harflaridan tuzilgan so'z."
    },
    {
      korean: "한국",
      rom: "hanguk",
      uzbek: "Janubiy Koreya",
      trans: "Xanguk",
      category: "Madaniyat",
      image: "image_1.jpg",
      note: "2-ma'ruza: Koreya Respublikasining qisqa nomi."
    },
    {
      korean: "서울",
      rom: "seoul",
      uzbek: "Seul (Koreya poytaxti)",
      trans: "Seoul",
      category: "Madaniyat",
      image: "image_2.jpg",
      note: "Koreyaning poytaxti va eng katta shahri."
    },
    {
      korean: "태극기",
      rom: "taegeukgi",
      uzbek: "Taegeukgi (Koreya bayrog'i)",
      trans: "Thegikki",
      category: "Madaniyat",
      image: "image_4.jpg",
      note: "Qizil-ko'k doirali rasmiy Koreya bayrog'i."
    },
    {
      korean: "무궁화",
      rom: "mugunghwa",
      uzbek: "Mugunghwa (Koreya milliy guli)",
      trans: "Mugunxva",
      category: "Madaniyat",
      image: "image_5.jpg",
      note: "Boqiylik guli hisoblangan Suriya atirguli."
    },
    {
      korean: "한글",
      rom: "hangeul",
      uzbek: "Hangul (Koreys alfaviti)",
      trans: "Xangil",
      category: "Madaniyat",
      image: "image_8.jpg",
      note: "1443-yilda Qirol Sejong yaratgan alifbo."
    },
    {
      korean: "훈민정음",
      rom: "hunminjeongeum",
      uzbek: "Hunminjeongeum (Alifbo kitobi)",
      trans: "Xunminjonim",
      category: "Madaniyat",
      image: "image_9.jpg",
      note: "Hangeulning asl tarixiy nomi."
    },
    {
      korean: "한자",
      rom: "hanja",
      uzbek: "Hanja (Xitoy iyerogliflari)",
      trans: "Xanja",
      category: "Madaniyat",
      image: "image_9.jpg",
      note: "Hanguldan oldin qo'llanilgan yozuv tizimi."
    },
    {
      korean: "한복",
      rom: "hanbok",
      uzbek: "Hanbok (Milliy koreys kiyimi)",
      trans: "Xanbok",
      category: "Madaniyat",
      image: "image_10.jpg",
      note: "Koreyslarning an'anaviy ipak libosi."
    },
    {
      korean: "한옥",
      rom: "hanok",
      uzbek: "Hanok (An'anaviy koreys uyi)",
      trans: "Xanok",
      category: "Madaniyat",
      image: "image_12.jpg",
      note: "Yog'och va plitkali tomli milliy uy."
    },
    {
      korean: "한식",
      rom: "hansik",
      uzbek: "Hansik (Koreys oshxonasi / taomlari)",
      trans: "Xanshik",
      category: "Madaniyat",
      image: "image_14.jpg",
      note: "Koreys milliy taomlari majmui."
    },
    {
      korean: "불고기",
      rom: "bulgogi",
      uzbek: "Bulgogi (Olovda qovurilgan go'sht)",
      trans: "Pulgogi",
      category: "Madaniyat",
      image: "image_14.jpg",
      note: "Marinadlangan mazali mol go'shti."
    },
    {
      korean: "비빔밥",
      rom: "bibimbap",
      uzbek: "Bibimbap (Aralashtirilgan guruch)",
      trans: "Pibimbap",
      category: "Madaniyat",
      image: "image_15.jpg",
      note: "Sabzavot va go'shtli mashhur guruch taomi."
    },
    {
      korean: "반찬",
      rom: "banchan",
      uzbek: "Banchan (Qo'shimcha gazaklar / salatlar)",
      trans: "Panchan",
      category: "Madaniyat",
      image: "image_23.jpg",
      note: "Asosiy taom yonida kichik likopchalarda beriladi."
    },
    {
      korean: "원",
      rom: "won",
      uzbek: "Won (Koreya pul birligi)",
      trans: "Von",
      category: "Madaniyat",
      image: "image_20.jpg",
      note: "Janubiy Koreya rasmiy valyutasi."
    },
    {
      korean: "윷놀이",
      rom: "yutnori",
      uzbek: "Yutnori (Tayoqchalar stoli o'yini)",
      trans: "Yutnori",
      category: "Madaniyat",
      image: "image_21.jpg",
      note: "Bayramlarda 4 ta yog'och tayoqcha tashlab o'ynaladi."
    },
    {
      korean: "한국 드라마",
      rom: "hanguk deurama",
      uzbek: "Koreys seriali (K-Drama)",
      trans: "Xanguk dorama",
      category: "Madaniyat",
      image: "image_17.jpg",
      note: "Butun dunyoda mashhur teleseriallar."
    },
    {
      korean: "K-POP",
      rom: "k-pop",
      uzbek: "K-POP (Koreys pop musiqasi)",
      trans: "Key-pop",
      category: "Madaniyat",
      image: "image_18.jpg",
      note: "BTS, Blackpink kabi guruhlarning zamonaviy musiqasi."
    }
  ],

  sections: [
    {
      id: "sec_vowels",
      title: "Unlilar",
      korean: "모음",
      lessonIds: ["lesson_1_1", "lesson_1_2"]
    },
    {
      id: "sec_consonants",
      title: "Undoshlar",
      korean: "자음",
      lessonIds: ["lesson_1_3", "lesson_1_4", "lesson_1_5"]
    },
    {
      id: "sec_words",
      title: "So'zlar",
      korean: "단어",
      lessonIds: ["lesson_2_1", "lesson_2_2", "lesson_2_3", "lesson_2_4"]
    },
    {
      id: "sec_culture",
      title: "Koreya & Quiz",
      korean: "한국 & 퀴즈",
      lessonIds: ["lesson_3_1", "lesson_3_2", "lesson_3_3"]
    }
  ],

  lessons: [
    {
      id: "lesson_1_1",
      sectionId: "sec_vowels",
      title: "Alifbo tarixi va 3 asos",
      subTitle: "훈민정음과 삼재",
      steps: [
        {
          type: "theory",
          title: "Hunminjeongeum nima?",
          korean: "훈민정음",
          audio: "훈민정음",
          image: "image4.jpeg",
          explanation: "<b>1443-yilda Qirol Sejong (세종대왕)</b> koreys xalqi o'z tilida erkin o'qib-yoza olishi uchun Hangul alifbosini yaratdi. Uning asl nomi <b>훈민정음 [Hunminjeongeum]</b> bo'lib, 'Xalqqa to'g'ri talaffuzni o'rgatish uchun ko'rsatma' degan ma'noni anglatadi.",
          points: [
            "Koreys alifbosida jami 24 ta asosiy harf bor.",
            "10 ta oddiy unli (모음) va 14 ta oddiy undosh (자음).",
            "Ilgari koreyslar qiyin Xitoy iyerogliflari (Hanja)dan foydalangan."
          ]
        },
        {
          type: "theory",
          title: "Unlilarning 3 Falsafiy Asosi",
          korean: "하늘 • 땅 • 사람",
          audio: "하늘 땅 사람",
          image: "image6.png",
          explanation: "Koreys unlilari Koinotdagi 3 ta asosiy element asosida yasalgan:",
          points: [
            "Dumaloq nuqta = <b>하늘 (Haneul)</b> — Koinot / Osmon",
            "Gorizontal chiziq = <b>땅 (Ttang)</b> — Tekis Yer",
            "Vertikal chiziq = <b>사람 (Saram)</b> — Tik turgan Odam"
          ]
        },
        {
          type: "choice",
          question: "Hangul alifbosini 1443-yilda kim yaratgan?",
          options: [
            "Qirol Sejong (세종대왕)",
            "Shirin sonsengnim",
            "Li Sun Sin",
            "Xitoy imperatori"
          ],
          correct: 0,
          explanation: "To'g'ri! Qirol Sejong 1443-yilda koreys alifbosini yaratgan."
        },
        {
          type: "choice",
          question: "Koreys unlilari asosidagi gorizontal to'g'ri chiziq nimani anglatadi?",
          options: [
            "Yer (땅)",
            "Osmon (하늘)",
            "Odam (사람)",
            "Daryo"
          ],
          correct: 0,
          explanation: "Gorizontal to'g'ri chiziq tekis Yerni (땅) bildiradi."
        },
        {
          type: "match",
          question: "Elementlarni o'zbekcha ma'nosiga moslang:",
          pairs: [
            { k: "하늘", v: "Osmon" },
            { k: "땅", v: "Yer" },
            { k: "사람", v: "Odam" },
            { k: "훈민정음", v: "Alifbo kitobi" }
          ]
        }
      ]
    },

    {
      id: "lesson_1_2",
      sectionId: "sec_vowels",
      title: "10 ta oddiy unli",
      subTitle: "기본 모음",
      steps: [
        {
          type: "theory",
          title: "10 ta Oddiy Unlilar (기본 모음)",
          korean: "ㅏ ㅑ ㅓ ㅕ ㅗ ㅛ ㅜ ㅠ ㅡ ㅣ",
          audio: "아 야 어 여 오 요 우 유 으 이",
          image: "image8.png",
          explanation: "Koreys tilida harflar chapdan o'ngga yoki yuqoridan pastga yoziladi. Unli yakka o'zi kelganda oldiga tovushsiz doira qo'yiladi: <b>아, 야, 어, 여, 오, 요, 우, 유, 으, 이</b>.",
          points: [
            "ㅏ [A] va ㅑ [YA] — Vertikal chiziqning o'ng tomonida",
            "ㅓ [O'] va ㅕ [YO'] — Vertikal chiziqning chap tomonida",
            "ㅗ [O] va ㅛ [YO] — Gorizontal chiziqning yuqorisida",
            "ㅜ [U] va ㅠ [YU] — Gorizontal chiziqning pastida",
            "ㅡ [I / tishlar jipslashgan] va ㅣ [I / oddiy]"
          ]
        },
        {
          type: "listening",
          question: "Talaffuzni tinglang va to'g'ri harfni tanlang:",
          audio: "아",
          options: ["ㅏ (A)", "ㅓ (O')", "ㅗ (O)", "ㅜ (U)"],
          correct: 0,
          explanation: "ㅏ — ravshan 'A' tovushi."
        },
        {
          type: "listening",
          question: "Qaysi unli talaffuz qilindi?",
          audio: "어",
          options: ["ㅓ (O')", "ㅏ (A)", "ㅡ (I)", "ㅣ (I)"],
          correct: 0,
          explanation: "ㅓ — ochiq 'O'' tovushi."
        },
        {
          type: "choice",
          question: "'ㅜ' [U] harfiga bitta vertikal chiziq qo'shilsa qaysi harf hosil bo'ladi?",
          options: ["ㅠ (YU)", "ㅛ (YO)", "ㅑ (YA)", "ㅕ (YO')"],
          correct: 0,
          explanation: "ㅜ (U) ga bitta chiziq qo'shilsa ㅠ (YU) bo'ladi."
        },
        {
          type: "stroke",
          letter: "ㅏ",
          name: "아 (A)",
          strokes: ["1. Yuqoridan pastga vertikal chiziq", "2. O'ng tomonga qisqa gorizontal chiziq"],
          canvasLetter: "ㅏ"
        },
        {
          type: "match",
          question: "Unlilarni talaffuziga moslang:",
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
      sectionId: "sec_consonants",
      title: "Undoshlarning kelib chiqishi",
      subTitle: "발음기관과 자음",
      steps: [
        {
          type: "theory",
          title: "Nutq a'zolariga asoslangan 5 ta harf",
          korean: "ㄱ ㄴ ㅁ ㅅ ㅇ",
          audio: "기역 니은 미음 시옷 이응",
          image: "image11.png",
          explanation: "Koreys undoshlari inson gapirayotgan paytda til, og'iz va tomoq shaklini ifodalaydi:",
          points: [
            "<b>ㄱ [k/g]</b>: Til orqasi tomoqni to'sish shakli.",
            "<b>ㄴ [n]</b>: Til uchi yuqori milkka tegish shakli.",
            "<b>ㅁ [m]</b>: Yopiq lablar (og'iz) shakli.",
            "<b>ㅅ [s]</b>: Inson tishi shakli.",
            "<b>ㅇ [ng / tovushsiz]</b>: Tomoq (halqum) doirasi."
          ]
        },
        {
          type: "choice",
          question: "Lablar (og'iz) shaklidan olingan to'rtburchak undosh qaysi?",
          options: ["ㅁ (M)", "ㄴ (N)", "ㄱ (K)", "ㅅ (S)"],
          correct: 0,
          explanation: "ㅁ — yopilgan lablar shaklidir ([m] tovushi)."
        },
        {
          type: "choice",
          question: "Tish shaklidagi 'ㅅ' harfiga chiziq qo'shilsa qaysi harflar hosil bo'ladi?",
          options: ["ㅈ va ㅊ", "ㄷ va ㅌ", "ㅂ va ㅍ", "ㄱ va ㅋ"],
          correct: 0,
          explanation: "ㅅ (s) -> ㅈ (j) -> ㅊ (ch) tartibida hosil bo'ladi."
        },
        {
          type: "match",
          question: "Harflarni nutq a'zolariga moslang:",
          pairs: [
            { k: "ㄱ", v: "Til orqasi (tomoqni to'sishi)" },
            { k: "ㄴ", v: "Til uchi milkka tegishi" },
            { k: "ㅁ", v: "Lablar shakli" },
            { k: "ㅅ", v: "Tish shakli" }
          ]
        }
      ]
    },

    {
      id: "lesson_1_4",
      sectionId: "sec_consonants",
      title: "14 ta oddiy undosh",
      subTitle: "기본 자음",
      steps: [
        {
          type: "theory",
          title: "14 ta Asosiy Undoshlar",
          korean: "ㄱ ㄴ ㄷ ㄹ ㅁ ㅂ ㅅ ㅇ ㅈ ㅊ ㅋ ㅌ ㅍ ㅎ",
          audio: "기역 니은 디귿 리을 미음 비읍 시옷 이응 지읒 치읓 키읔 티읕 피읖 히읗",
          image: "image16.png",
          explanation: "Koreys tilidagi 14 ta oddiy undoshning nomlari:",
          points: [
            "ㄱ (g/k), ㄴ (n), ㄷ (d/t), ㄹ (r/l)",
            "ㅁ (m), ㅂ (b/p), ㅅ (s/sh), ㅇ (ng/ovozsiz)",
            "ㅈ (j/ch), ㅊ (ch), ㅋ (k), ㅌ (t), ㅍ (p), ㅎ (h)"
          ]
        },
        {
          type: "listening",
          question: "Tinglang va harfni tanlang:",
          audio: "니은",
          options: ["ㄴ (N)", "ㄱ (K)", "ㄷ (T)", "ㄹ (R)"],
          correct: 0,
          explanation: "Bu harf — ㄴ (니은 - nieun)."
        },
        {
          type: "listening",
          question: "Tinglang va tanlang:",
          audio: "미음",
          options: ["ㅁ (M)", "ㅂ (B)", "ㅇ (NG)", "ㅎ (H)"],
          correct: 0,
          explanation: "Bu harf — ㅁ (미음 - mieum)."
        },
        {
          type: "choice",
          question: "Qaysi harf so'z boshida unli oldida ovoz chiqarmaydi (tovushsiz bo'ladi)?",
          options: ["ㅇ (Ieung)", "ㅁ (Mieum)", "ㅎ (Hieut)", "ㅅ (Siot)"],
          correct: 0,
          explanation: "'ㅇ' unli oldida tovushsiz bo'ladi (masalan, 아 = a)."
        },
        {
          type: "match",
          question: "Harflarni ularning nomiga moslang:",
          pairs: [
            { k: "ㄱ", v: "기역 (giyeok)" },
            { k: "ㄴ", v: "니은 (nieun)" },
            { k: "ㄹ", v: "리을 (rieul)" },
            { k: "ㅁ", v: "미음 (mieum)" }
          ]
        }
      ]
    },

    {
      id: "lesson_1_5",
      sectionId: "sec_consonants",
      title: "Bo'g'in hosil qilish",
      subTitle: "음절 결합",
      steps: [
        {
          type: "theory",
          title: "Bo'g'in Bloklari Qoidasi",
          korean: "ㅇ + ㅏ = 아 | ㄱ + ㅏ = 가",
          audio: "아 가 나 다",
          image: "image17.png",
          explanation: "Koreys harflari kvadrat shaklidagi bo'g'in qilib yoziladi:",
          points: [
            "Har bir bo'g'inda kamida 1 ta undosh va 1 ta unli bo'lishi shart.",
            "Vertikal unlilar (ㅏ, ㅓ, ㅣ) undoshning O'NG tomoniga yoziladi: ㄱ + ㅏ = <b>가</b>.",
            "Gorizontal unlilar (ㅗ, ㅜ, ㅡ) undoshning TAGIGA yoziladi: ㄱ + ㅗ = <b>고</b>."
          ]
        },
        {
          type: "choice",
          question: "'ㄴ' va 'ㅏ' harflari birlashsa qanday bo'g'in yasaladi?",
          options: ["나 (na)", "누 (nu)", "노 (no)", "너 (neo)"],
          correct: 0,
          explanation: "ㄴ + ㅏ = 나 (na)."
        },
        {
          type: "choice",
          question: "'ㅁ' va 'ㅗ' harflari birlashganda qanday yoziladi?",
          options: ["모 (mo)", "마 (ma)", "무 (mu)", "미 (mi)"],
          correct: 0,
          explanation: "ㅗ gorizontal unli bo'lgani uchun tagiga yoziladi: 모 (mo)."
        },
        {
          type: "match",
          question: "Bo'g'inlarni o'qilishiga moslang:",
          pairs: [
            { k: "가", v: "ga / ka" },
            { k: "나", v: "na" },
            { k: "다", v: "da / ta" },
            { k: "마", v: "ma" }
          ]
        }
      ]
    },

    {
      id: "lesson_2_1",
      sectionId: "sec_words",
      title: "Salomlashish va iboralar",
      subTitle: "인사말",
      steps: [
        {
          type: "theory",
          title: "Ma'ruzadagi Asosiy Iboralar",
          korean: "안녕하세요 • 선생님 • 수고하셨어요",
          audio: "안녕하세요 선생님 수고하셨어요",
          image: "image18.png",
          explanation: "1-ma'ruzadagi eng muhim iboralar:",
          points: [
            "<b>안녕하세요 [annyeonghaseyo]</b> — Assalomu alaykum / Salom (1-slaydda)",
            "<b>선생님 [seonsaengnim]</b> — Ustoz / O'qituvchi (Shirin sonsengnim)",
            "<b>수고하셨어요 [sugohasyeosseoyo]</b> — Rahmat, mehnatingizga tashakkur (Oxirgi slaydda)"
          ]
        },
        {
          type: "listening",
          question: "Qaysi ibora talaffuz qilindi?",
          audio: "안녕하세요",
          options: ["안녕하세요 (Salom)", "수고하셨어요 (Rahmat)", "선생님 (Ustoz)", "감사합니다"],
          correct: 0,
          explanation: "안녕하세요 — rasmiy salomlashish."
        },
        {
          type: "choice",
          question: "Dars yakunida o'qituvchi yoki talabalarga nima deyiladi?",
          options: ["수고하셨어요 (Sugohasyeosseoyo)", "안녕하세요 (Annyeonghaseyo)", "안녕히 가세요", "죄송합니다"],
          correct: 0,
          explanation: "수고하셨어요 — mehnatingiz uchun tashakkur / barakalla."
        },
        {
          type: "builder",
          question: "'Salom' so'zini bo'g'inlardan yig'ing:",
          targetWord: "안녕하세요",
          syllables: ["안", "녕", "하", "세", "요"],
          distractors: ["선", "생"],
          explanation: "안 + 녕 + 하 + 세 + 요 = 안녕하세요!"
        },
        {
          type: "match",
          question: "Iboralarni tarjimasiga moslang:",
          pairs: [
            { k: "안녕하세요", v: "Salom" },
            { k: "선생님", v: "Ustoz" },
            { k: "수고하셨어요", v: "Rahmat / Barakalla" }
          ]
        }
      ]
    },

    {
      id: "lesson_2_2",
      sectionId: "sec_words",
      title: "Koinot va inson so'zlari",
      subTitle: "하늘 • 땅 • 사람",
      steps: [
        {
          type: "theory",
          title: "Tabiat va Inson So'zlari",
          korean: "하늘 • 땅 • 사람",
          audio: "하늘 땅 사람",
          image: "image5.png",
          explanation: "1-ma'ruzaning 9-slaydidagi asosiy so'zlar:",
          points: [
            "<b>하늘 [haneul]</b> — Osmon",
            "<b>땅 [ttang]</b> — Yer",
            "<b>사람 [saram]</b> — Odam / Inson"
          ]
        },
        {
          type: "choice",
          question: "'하늘' so'zining tarjimasi qaysi?",
          options: ["Osmon", "Yer", "Odam", "Suv"],
          correct: 0,
          explanation: "하늘 — Osmon."
        },
        {
          type: "choice",
          question: "'땅' so'zi nimani bildiradi?",
          options: ["Yer", "Osmon", "Tog'", "Daryo"],
          correct: 0,
          explanation: "땅 — Yer."
        },
        {
          type: "listening",
          question: "Tinglang va so'zni toping:",
          audio: "사람",
          options: ["사람 (Odam)", "하늘 (Osmon)", "땅 (Yer)", "선생님 (Ustoz)"],
          correct: 0,
          explanation: "사람 — Odam / Inson."
        },
        {
          type: "builder",
          question: "'Odam' so'zini yig'ing:",
          targetWord: "사람",
          syllables: ["사", "람"],
          distractors: ["하", "늘"],
          explanation: "사 + 람 = 사람 (saram)."
        }
      ]
    },

    {
      id: "lesson_2_3",
      sectionId: "sec_words",
      title: "Ilk oddiy so'zlar",
      subTitle: "기초 단어",
      steps: [
        {
          type: "theory",
          title: "O'rganilgan harflardan ilk so'zlar",
          korean: "아이, 오이, 우유, 여우, 나무, 나비, 모자, 바지",
          audio: "아이 오이 우유 여우 나무 나비 모자 바지",
          image: "image17.png",
          explanation: "Oddiy harflar bilan tuzilgan kundalik so'zlar:",
          points: [
            "<b>아이 [ai]</b> — Bola | <b>오이 [oi]</b> — Bodring",
            "<b>우유 [uyu]</b> — Sut | <b>여우 [yeou]</b> — Tulki",
            "<b>나무 [namu]</b> — Daraxt | <b>나비 [nabi]</b> — Kapalak",
            "<b>모자 [moja]</b> — Bosh kiyim | <b>바지 [baji]</b> — Shim"
          ]
        },
        {
          type: "choice",
          question: "'우유' nimani bildiradi?",
          options: ["Sut", "Bodring", "Bola", "Daraxt"],
          correct: 0,
          explanation: "우유 — Sut."
        },
        {
          type: "choice",
          question: "'오이' nimani bildiradi?",
          options: ["Bodring", "Tulki", "Shim", "Kapalak"],
          correct: 0,
          explanation: "오이 — Bodring."
        },
        {
          type: "listening",
          question: "Tinglang va tanlang:",
          audio: "나무",
          options: ["나무 (Daraxt)", "나비 (Kapalak)", "모자 (Bosh kiyim)", "바지 (Shim)"],
          correct: 0,
          explanation: "나무 — Daraxt."
        },
        {
          type: "match",
          question: "So'zlarni ma'nosiga moslang:",
          pairs: [
            { k: "아이", v: "Bola" },
            { k: "우유", v: "Sut" },
            { k: "여우", v: "Tulki" },
            { k: "나비", v: "Kapalak" }
          ]
        }
      ]
    },

    {
      id: "lesson_2_4",
      sectionId: "sec_words",
      title: "Koreys madaniyati so'zlari",
      subTitle: "전통 문화",
      steps: [
        {
          type: "theory",
          title: "Koreys An'anaviy Terminlari",
          korean: "한복 • 한옥 • 한식 • 불고기 • 비빔밥 • 반찬",
          audio: "한복 한옥 한식 불고기 비빔밥 반찬",
          image: "image_10.jpg",
          explanation: "2-ma'ruzadagi madaniy so'zlar:",
          points: [
            "<b>한복 [Hanbok]</b> — Milliy koreys libosi",
            "<b>한옥 [Hanok]</b> — An'anaviy koreys uyi",
            "<b>한식 [Hansik]</b> — Koreys milliy oshxonasi",
            "<b>불고기 [Bulgogi]</b> — Marinadlangan mol go'shti",
            "<b>비빔밥 [Bibimbap]</b> — Sabzavotli aralash guruch taomi",
            "<b>반찬 [Banchan]</b> — Yonida tortiladigan salat va gazaklar"
          ]
        },
        {
          type: "choice",
          question: "Koreys milliy kiyimi nima deyiladi?",
          options: ["한복 (Hanbok)", "한옥 (Hanok)", "한식 (Hansik)", "한자"],
          correct: 0,
          explanation: "한복 — Koreya milliy libosi."
        },
        {
          type: "choice",
          question: "An'anaviy koreys uyi qanday ataladi?",
          options: ["한옥 (Hanok)", "한복 (Hanbok)", "불고기", "반찬"],
          correct: 0,
          explanation: "한옥 — An'anaviy yog'och uy."
        },
        {
          type: "match",
          question: "Madaniyat so'zlarini moslang:",
          pairs: [
            { k: "한복", v: "Milliy kiyim" },
            { k: "한옥", v: "An'anaviy uy" },
            { k: "불고기", v: "Marinadlangan go'sht" },
            { k: "반찬", v: "Yon gazaklar" }
          ]
        }
      ]
    },

    {
      id: "lesson_3_1",
      sectionId: "sec_culture",
      title: "Davlat va milliy ramzlar",
      subTitle: "국가 상징",
      steps: [
        {
          type: "theory",
          title: "Koreya Davlati va Ramzlari",
          korean: "한국 • 서울 • 태극기 • 무궁화 • 원",
          audio: "한국 서울 태극기 무궁화 원",
          image: "image_4.jpg",
          explanation: "2-ma'ruzadagi asosiy davlat ma'lumotlari:",
          points: [
            "<b>한국 [Hanguk]</b> — Janubiy Koreya",
            "<b>서울 [Seoul]</b> — Janubiy Koreya poytaxti",
            "<b>태극기 [Taegeukgi]</b> — Davlat bayrog'i",
            "<b>무궁화 [Mugunghwa]</b> — Milliy gul (Suriya atirguli)",
            "<b>원 [Won]</b> — Pul birligi (KRW)"
          ]
        },
        {
          type: "choice",
          question: "Janubiy Koreyaning poytaxti qaysi shahar?",
          options: ["서울 (Seoul)", "부산 (Busan)", "인천 (Incheon)", "대구"],
          correct: 0,
          explanation: "Janubiy Koreya poytaxti — 서울 (Seoul)."
        },
        {
          type: "choice",
          question: "Koreya davlat bayrog'i qanday ataladi?",
          options: ["태극기 (Taegeukgi)", "무궁화", "한글", "훈민정음"],
          correct: 0,
          explanation: "Bayroq — 태극기 (Taegeukgi)."
        },
        {
          type: "choice",
          question: "Koreyaning milliy guli qaysi?",
          options: ["무궁화 (Mugunghwa)", "장미 (Atirgul)", "연꽃", "벚꽃"],
          correct: 0,
          explanation: "Milliy gul — 무궁화 (Mugunghwa)."
        },
        {
          type: "choice",
          question: "Koreya pul birligi nima?",
          options: ["원 (Won)", "달러", "엔", "So'm"],
          correct: 0,
          explanation: "Pul birligi — 원 (Won)."
        }
      ]
    },

    {
      id: "lesson_3_2",
      sectionId: "sec_culture",
      title: "O'yinlar va zamonaviy madaniyat",
      subTitle: "놀이와 문화",
      steps: [
        {
          type: "theory",
          title: "Koreys Ko'ngilochar Madaniyati",
          korean: "윷놀이 • K-POP • 한국 드라마",
          audio: "윷놀이 케이팝 한국 드라마",
          image: "image_21.jpg",
          explanation: "2-ma'ruzadagi madaniy ko'ngilochar mavzular:",
          points: [
            "<b>윷놀이 [Yutnori]</b> — 4 ta yog'och tayoqcha bilan o'ynaladigan stol o'yini.",
            "<b>한국 드라마 [Hanguk drama]</b> — Mashhur koreys seriallari (dorama).",
            "<b>K-POP</b> — Janubiy Koreya estrada musiqasi."
          ]
        },
        {
          type: "choice",
          question: "4 ta yog'och tayoqcha tashlab o'ynaladigan an'anaviy koreys o'yini nima?",
          options: ["윷놀이 (Yutnori)", "바둑", "태권도", "한복"],
          correct: 0,
          explanation: "Bu o'yin — 윷놀이 (Yutnori)."
        },
        {
          type: "choice",
          question: "Koreys taomlarida yonida beriladigan gazaklar nima deyiladi?",
          options: ["반찬 (Banchan)", "불고기", "비빔밥", "한식"],
          correct: 0,
          explanation: "Barcha qo'shimcha gazaklar — 반찬 (Banchan)."
        },
        {
          type: "match",
          question: "Tushunchalarni moslang:",
          pairs: [
            { k: "윷놀이", v: "Tayoqchalar o'yini" },
            { k: "한국 드라마", v: "Koreys seriali" },
            { k: "K-POP", v: "Koreys pop musiqasi" },
            { k: "한자", v: "Xitoy iyerogliflari" }
          ]
        }
      ]
    },

    {
      id: "lesson_3_3",
      sectionId: "sec_culture",
      title: "Basic Korean 1 kursi sinovi",
      subTitle: "강의 규정 퀴즈",
      steps: [
        {
          type: "theory",
          title: "Basic Korean 1 Kurs Qoidalari",
          korean: "Basic Korean 1 • Shirin sonsengnim",
          audio: "베이직 코리안 원",
          image: "image3.png",
          explanation: "1-ma'ruzadagi kurs talablari:",
          points: [
            "O'qituvchi: <b>Makhamedova Shirin sonsengnim</b>, Xona: <b>206B</b>.",
            "Oraliq (Midterm) 30% va Yakuniy (Final) 30% — Qayta topshirish (다시 보기) yo'q!",
            "Davomat 10% — <b>4 marta</b> dars qoldirilsa avtomatik 'F' baho olinadi!",
            "Jarimalar (-2 ball): Darsda uxlash, telefondan foydalanish, ruxsatsiz chiqib ketish."
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
          explanation: "3-slaydda ko'rsatilgan: (4 absence = F)!"
        },
        {
          type: "choice",
          question: "Oraliq (Midterm) va Yakuniy (Final) imtihonlar har biri necha foiz?",
          options: [
            "Har biri 30% dan, qayta topshirish yo'q",
            "Har biri 20% dan, qayta topshirish bor",
            "Oraliq 50%, Yakuniy 50%",
            "Oraliq imtihon yo'q"
          ],
          correct: 0,
          explanation: "Oraliq 30% va Yakuniy 30%, qayta topshirish (다시 보기) yo'q!"
        },
        {
          type: "choice",
          question: "Quyidagilardan qaysi biri darsda -2 ball jarimaga sabab bo'ladi?",
          options: [
            "Darsda uxlash yoki telefondan foydalanish",
            "Faol savol berish",
            "Daftarni toza tutish",
            "Vazifani topshirish"
          ],
          correct: 0,
          explanation: "Darsda uxlash, telefondan foydalanish yoki ruxsatsiz chiqish -2 ball jarima beradi."
        },
        {
          type: "choice",
          question: "Kursda 'A+ / A' baho olish uchun qancha ball to'plash kerak?",
          options: [
            "85 – 100% ball (talabalarning 20% gacha)",
            "70 – 84% ball",
            "60 – 70% ball",
            "50 – 60% ball"
          ],
          correct: 0,
          explanation: "A+/A olish uchun 85–100% ball kerak (20% kvota)."
        }
      ]
    }
  ]
};
