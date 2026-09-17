// ==========================================
// HANGEUL SAYOHATI (한글 여행) - MA'LUMOTLAR BAZASI
// Manbalar: "part - 1 Hangeul uz.pptx", "한국소개.ppt", "part - 2 Hangeul.uz.pptx"
// O'zbek tilida juda sodda, tushunarli va aniq tushuntirishlar
// To'liq 40 ta harf (21 ta unli, 19 ta undosh), Bo'g'in turlari, Batchim va Lug'at
// ==========================================

const HANGEUL_DATA = {
  "courseInfo": {
    "name": "Basic Korean 1",
    "subName": "Koreys tili 1-kurs ma'ruzalari",
    "teacher": "Makhamedova Shirin (Shirin sonsengnim / 선생님)",
    "office": "Office – 206B",
    "grading": [
      {
        "item": "Midterm (Oraliq imtihon)",
        "weight": "30%",
        "detail": "7-haftada. Qayta topshirish (다시 보기) yo'q!"
      },
      {
        "item": "Final (Yakuniy imtihon)",
        "weight": "30%",
        "detail": "15-haftada. Qayta topshirish (다시 보기) yo'q!"
      },
      {
        "item": "Attendance (Davomat)",
        "weight": "10%",
        "detail": "4 marta dars qoldirilsa avtomatik 'F' (yiqiladi)!"
      },
      {
        "item": "Assignment (Uy vazifasi)",
        "weight": "10%",
        "detail": "Speaking homework (audio yozib topshirish)"
      },
      {
        "item": "Quiz (Kichik test)",
        "weight": "10%",
        "detail": "9-haftada darsda o'tkaziladi"
      },
      {
        "item": "Others (Konspekt & Faollik)",
        "weight": "10%",
        "detail": "Daftar 5% + Guruhdagi faollik 5%"
      }
    ],
    "penalties": [
      "Darsda uxlash (-2 ball)",
      "Ruxsatsiz xonadan chiqib ketish (-2 ball)",
      "Darsda telefondan foydalanish (-2 ball)",
      "Befoyda va ortiqcha gaplashish (-2 ball)",
      "Guruh ishlarida qatnashmaslik (-2 ball)"
    ],
    "gradeScale": [
      {
        "grade": "A+ / A",
        "range": "85 – 100%",
        "quota": "Talabalarning 20% gacha"
      },
      {
        "grade": "B+ / B",
        "range": "70 – 84%",
        "quota": "Talabalarning 30% gacha"
      },
      {
        "grade": "C+ / C",
        "range": "50 – 69%",
        "quota": "Talabalarning 30% gacha"
      },
      {
        "grade": "D+ / D",
        "range": "30 – 49%",
        "quota": "Talabalarning 20% gacha"
      },
      {
        "grade": "F",
        "range": "0 – 29%",
        "quota": "Yiqilgan (Qayta o'qish)"
      }
    ]
  },
  "alphabetStructure": {
    "totalBasic": 24,
    "vowelsTotal": 21,
    "consonantsTotal": 19,
    "totalAlphabet": 40,
    "creationYear": 1443,
    "creator": "Qirol Sejong (세종대왕)",
    "originalName": "훈민정음 [Hunminjeongeum]",
    "originalMeaning": "Xalqqa to'g'ri talaffuzni o'rgatish uchun ko'rsatma"
  },
  "vowels": [
    {
      "char": "ㅏ",
      "name": "아",
      "sound": "a",
      "rom": "a",
      "uz": "Ochiq 'A' tovushi",
      "strokeCount": 2,
      "order": [
        "1. Tik chiziq (yuqoridan pastga)",
        "2. O'ng tomonga qisqa chiziq"
      ],
      "example": "아이 (ai - bola)"
    },
    {
      "char": "ㅑ",
      "name": "야",
      "sound": "ya",
      "rom": "ya",
      "uz": "'YA' tovushi",
      "strokeCount": 3,
      "order": [
        "1. Tik chiziq",
        "2. Yuqori o'ng chiziq",
        "3. Pastki o'ng chiziq"
      ],
      "example": "야구 (yagu - beysbol)"
    },
    {
      "char": "ㅓ",
      "name": "어",
      "sound": "eo / o'",
      "rom": "eo",
      "uz": "Ochiq 'O'' tovushi (og'iz 'a' kabi ochiladi)",
      "strokeCount": 2,
      "order": [
        "1. Chapdan o'ngga qisqa chiziq",
        "2. Tik chiziq pastga"
      ],
      "example": "어머니 (omeoni - ona)"
    },
    {
      "char": "ㅕ",
      "name": "여",
      "sound": "yeo / yo'",
      "rom": "yeo",
      "uz": "Ochiq 'YO'' tovushi",
      "strokeCount": 3,
      "order": [
        "1. Yuqori chap chiziq",
        "2. Pastki chap chiziq",
        "3. Tik chiziq"
      ],
      "example": "여우 (yeou - tulki)"
    },
    {
      "char": "ㅗ",
      "name": "오",
      "sound": "o",
      "rom": "o",
      "uz": "Dudoqlangan 'O' (lablar oldinga cho'chchayadi)",
      "strokeCount": 2,
      "order": [
        "1. Qisqa tik chiziq",
        "2. Yotiq gorizontal chiziq"
      ],
      "example": "오이 (oi - bodring)"
    },
    {
      "char": "ㅛ",
      "name": "요",
      "sound": "yo",
      "rom": "yo",
      "uz": "Dudoqlangan 'YO'",
      "strokeCount": 3,
      "order": [
        "1. Chap qisqa chiziq",
        "2. O'ng qisqa chiziq",
        "3. Yotiq chiziq"
      ],
      "example": "요리 (yori - taom)"
    },
    {
      "char": "ㅜ",
      "name": "우",
      "sound": "u",
      "rom": "u",
      "uz": "'U' tovushi",
      "strokeCount": 2,
      "order": [
        "1. Yotiq chiziq",
        "2. Pastga tik chiziq"
      ],
      "example": "우유 (uyu - sut)"
    },
    {
      "char": "ㅠ",
      "name": "유",
      "sound": "yu",
      "rom": "yu",
      "uz": "'YU' tovushi",
      "strokeCount": 3,
      "order": [
        "1. Yotiq chiziq",
        "2. Chap tik chiziq",
        "3. O'ng tik chiziq"
      ],
      "example": "유리 (yuri - shisha)"
    },
    {
      "char": "ㅡ",
      "name": "으",
      "sound": "eu / i",
      "rom": "eu",
      "uz": "Tishlar jipslashgan qattiq 'I'",
      "strokeCount": 1,
      "order": [
        "1. Chapdan o'ngga yotiq to'g'ri chiziq"
      ],
      "example": "으뜸 (eutteum - birinchi)"
    },
    {
      "char": "ㅣ",
      "name": "이",
      "sound": "i",
      "rom": "i",
      "uz": "Oddiy 'I' tovushi",
      "strokeCount": 1,
      "order": [
        "1. Yuqoridan pastga tik chiziq"
      ],
      "example": "이 (i - tish / ikki)"
    }
  ],
  "consonants": [
    {
      "char": "ㄱ",
      "name": "기역 (giyeok)",
      "sound": "k / g",
      "rom": "g/k",
      "organ": "Tilning orqasi tomoqni to'sganda",
      "uz": "So'z boshida K, unlilar orasida G",
      "strokes": 1,
      "example": "가방 (gabang - sumka)"
    },
    {
      "char": "ㄴ",
      "name": "니은 (nieun)",
      "sound": "n",
      "rom": "n",
      "organ": "Til uchi yuqori milkka tekkanda",
      "uz": "Oddiy 'N' tovushi",
      "strokes": 1,
      "example": "나무 (namu - daraxt)"
    },
    {
      "char": "ㄷ",
      "name": "디귿 (digeut)",
      "sound": "t / d",
      "rom": "d/t",
      "organ": "ㄴ harfiga bitta chiziq qo'shilgan",
      "uz": "So'z boshida T, unlilar orasida D",
      "strokes": 2,
      "example": "다리 (dari - oyoq/ko'prik)"
    },
    {
      "char": "ㄹ",
      "name": "리을 (rieul)",
      "sound": "r / l",
      "rom": "r/l",
      "organ": "Til burilib tanglayga tekkanda",
      "uz": "So'z boshida/orasida R, bo'g'in oxirida L",
      "strokes": 3,
      "example": "라디오 (radio)"
    },
    {
      "char": "ㅁ",
      "name": "미음 (mieum)",
      "sound": "m",
      "rom": "m",
      "organ": "Yopiq lablar (og'iz) to'rtburchak shakli",
      "uz": "Oddiy 'M' tovushi",
      "strokes": 3,
      "example": "모자 (moja - shlyapa)"
    },
    {
      "char": "ㅂ",
      "name": "비읍 (bieup)",
      "sound": "p / b",
      "rom": "b/p",
      "organ": "ㅁ harfiga ikkita chiziq qo'shilgan",
      "uz": "So'z boshida P, unlilar orasida B",
      "strokes": 4,
      "example": "바지 (baji - shim)"
    },
    {
      "char": "ㅅ",
      "name": "시옷 (siot)",
      "sound": "s / sh",
      "rom": "s",
      "organ": "Inson tishi shakli",
      "uz": "Oddiy 'S' (i, ya, yeo, yo, yu oldida SH)",
      "strokes": 2,
      "example": "사람 (saram - odam)"
    },
    {
      "char": "ㅇ",
      "name": "이응 (ieung)",
      "sound": "ng / ovozsiz",
      "rom": "ng/-",
      "organ": "Tomoq (halqum) teshigi doirasi",
      "uz": "Unli oldida tovushsiz (dummy), bo'g'in tagida NG",
      "strokes": 1,
      "example": "아이 (ai - bola)"
    },
    {
      "char": "ㅈ",
      "name": "지읒 (jieut)",
      "sound": "ch / j",
      "rom": "j",
      "organ": "ㅅ harfiga chiziq qo'shilgan",
      "uz": "So'z boshida Ch, unlilar orasida J",
      "strokes": 2,
      "example": "지도 (jido - xarita)"
    },
    {
      "char": "ㅊ",
      "name": "치읓 (chieut)",
      "sound": "chʰ (kuchli ch)",
      "rom": "ch",
      "organ": "ㅈ harfiga yana zarbli chiziq qo'shilgan",
      "uz": "Nafas bilan aytiladigan kuchli 'Ch'",
      "strokes": 3,
      "example": "차 (cha - choy/mashina)"
    },
    {
      "char": "ㅋ",
      "name": "키읔 (kieuk)",
      "sound": "kʰ (kuchli k)",
      "rom": "k",
      "organ": "ㄱ harfiga o'rtasidan chiziq qo'shilgan",
      "uz": "Nafas bilan aytiladigan kuchli 'K'",
      "strokes": 2,
      "example": "코 (ko - burun)"
    },
    {
      "char": "ㅌ",
      "name": "티읕 (tieut)",
      "sound": "tʰ (kuchli t)",
      "rom": "t",
      "organ": "ㄷ harfiga o'rtasidan chiziq qo'shilgan",
      "uz": "Nafas bilan aytiladigan kuchli 'T'",
      "strokes": 3,
      "example": "토마토 (tomato)"
    },
    {
      "char": "ㅍ",
      "name": "피읖 (pieup)",
      "sound": "pʰ (kuchli p)",
      "rom": "p",
      "organ": "ㅂ harfining kuchli portlovchi shakli",
      "uz": "Nafas bilan aytiladigan kuchli 'P'",
      "strokes": 4,
      "example": "포도 (podo - uzum)"
    },
    {
      "char": "ㅎ",
      "name": "히읗 (hieut)",
      "sound": "h",
      "rom": "h",
      "organ": "ㅇ doirasi ustiga ikkita chiziq qo'shilgan",
      "uz": "Yumshoq nafas 'H' tovushi",
      "strokes": 3,
      "example": "하늘 (haneul - osmon)"
    }
  ],
  "words": [
    {
      "korean": "안녕하세요",
      "rom": "annyeonghaseyo",
      "uzbek": "Assalomu alaykum / Salom",
      "trans": "Annyonghaseo",
      "category": "Iboralar",
      "image": "image2.jpg",
      "note": "1-ma'ruzaning 1-slaydidagi rasmiy salomlashish."
    },
    {
      "korean": "선생님",
      "rom": "seonsaengnim",
      "uzbek": "Ustoz / O'qituvchi",
      "trans": "Sonsengnim",
      "category": "Iboralar",
      "image": "image3.png",
      "note": "Shirin sonsengnim (Office 206B) — fan o'qituvchisi."
    },
    {
      "korean": "수고하셨어요",
      "rom": "sugohasyeosseoyo",
      "uzbek": "Barakalla / Mehnatingizga rahmat",
      "trans": "Sugohasyosseoyo",
      "category": "Iboralar",
      "image": "image18.png",
      "note": "1-ma'ruza so'nggi slaydidagi minnatdorchilik olqishi."
    },
    {
      "korean": "하늘",
      "rom": "haneul",
      "uzbek": "Osmon",
      "trans": "Xanil",
      "category": "Falsafa",
      "image": "image6.png",
      "note": "Unlilarning 1-asosi: Dumaloq nuqta osmonni ifodalaydi."
    },
    {
      "korean": "땅",
      "rom": "ttang",
      "uzbek": "Yer",
      "trans": "Ttang",
      "category": "Falsafa",
      "image": "image5.png",
      "note": "Unlilarning 2-asosi: Yotiq to'g'ri chiziq yerni bildiradi."
    },
    {
      "korean": "사람",
      "rom": "saram",
      "uzbek": "Odam / Inson",
      "trans": "Saram",
      "category": "Falsafa",
      "image": "image5.png",
      "note": "Unlilarning 3-asosi: Tik chiziq tik turgan insonni bildiradi."
    },
    {
      "korean": "모음",
      "rom": "moeum",
      "uzbek": "Unli harflar",
      "trans": "Moyim",
      "category": "Grammatika",
      "image": "image8.png",
      "note": "Koreys tilida 10 ta oddiy unli bor."
    },
    {
      "korean": "자음",
      "rom": "jaeum",
      "uzbek": "Undosh harflar",
      "trans": "Jaeum / Cha-im",
      "category": "Grammatika",
      "image": "image13.png",
      "note": "Koreys tilida 14 ta oddiy undosh bor."
    },
    {
      "korean": "아이",
      "rom": "ai",
      "uzbek": "Bola",
      "trans": "Ai",
      "category": "Oddiy so'zlar",
      "image": "image17.png",
      "note": "Oddiy unlilar bilan yoziladigan ilk so'z."
    },
    {
      "korean": "오이",
      "rom": "oi",
      "uzbek": "Bodring",
      "trans": "Oi",
      "category": "Oddiy so'zlar",
      "image": "image17.png",
      "note": "Oddiy unlilar (오 + 이) orqali hosil bo'ladi."
    },
    {
      "korean": "우유",
      "rom": "uyu",
      "uzbek": "Sut",
      "trans": "Uyu",
      "category": "Oddiy so'zlar",
      "image": "image17.png",
      "note": "Oddiy unlilar (우 + 유) orqali yoziladi."
    },
    {
      "korean": "여우",
      "rom": "yeou",
      "uzbek": "Tulki",
      "trans": "Yeou",
      "category": "Oddiy so'zlar",
      "image": "image17.png",
      "note": "Oddiy unlilar (여 + 우) bilan yoziladi."
    },
    {
      "korean": "나무",
      "rom": "namu",
      "uzbek": "Daraxt",
      "trans": "Namu",
      "category": "Oddiy so'zlar",
      "image": "image13.png",
      "note": "ㄴ va ㅁ harflaridan tuzilgan so'z."
    },
    {
      "korean": "나비",
      "rom": "nabi",
      "uzbek": "Kapalak",
      "trans": "Nabi",
      "category": "Oddiy so'zlar",
      "image": "image14.png",
      "note": "ㄴ va ㅂ harflaridan tuzilgan so'z."
    },
    {
      "korean": "모자",
      "rom": "moja",
      "uzbek": "Bosh kiyim / Shlyapa",
      "trans": "Moja",
      "category": "Oddiy so'zlar",
      "image": "image14.png",
      "note": "ㅁ va ㅈ harflaridan tuzilgan so'z."
    },
    {
      "korean": "바지",
      "rom": "baji",
      "uzbek": "Shim",
      "trans": "Baji",
      "category": "Oddiy so'zlar",
      "image": "image14.png",
      "note": "ㅂ va ㅈ harflaridan tuzilgan so'z."
    },
    {
      "korean": "한국",
      "rom": "hanguk",
      "uzbek": "Janubiy Koreya",
      "trans": "Xanguk",
      "category": "Madaniyat",
      "image": "image_1.jpg",
      "note": "2-ma'ruza: Koreya Respublikasining qisqa nomi."
    },
    {
      "korean": "서울",
      "rom": "seoul",
      "uzbek": "Seul (Koreya poytaxti)",
      "trans": "Seoul",
      "category": "Madaniyat",
      "image": "image_2.jpg",
      "note": "Koreyaning poytaxti va eng katta shahri."
    },
    {
      "korean": "태극기",
      "rom": "taegeukgi",
      "uzbek": "Taegeukgi (Koreya bayrog'i)",
      "trans": "Thegikki",
      "category": "Madaniyat",
      "image": "image_4.jpg",
      "note": "Qizil-ko'k doirali rasmiy Koreya bayrog'i."
    },
    {
      "korean": "무궁화",
      "rom": "mugunghwa",
      "uzbek": "Mugunghwa (Koreya milliy guli)",
      "trans": "Mugunxva",
      "category": "Madaniyat",
      "image": "image_5.jpg",
      "note": "Boqiylik guli hisoblangan Suriya atirguli."
    },
    {
      "korean": "한글",
      "rom": "hangeul",
      "uzbek": "Hangul (Koreys alfaviti)",
      "trans": "Xangil",
      "category": "Madaniyat",
      "image": "image_8.jpg",
      "note": "1443-yilda Qirol Sejong yaratgan alifbo."
    },
    {
      "korean": "훈민정음",
      "rom": "hunminjeongeum",
      "uzbek": "Hunminjeongeum (Alifbo kitobi)",
      "trans": "Xunminjonim",
      "category": "Madaniyat",
      "image": "image_9.jpg",
      "note": "Hangeulning asl tarixiy nomi."
    },
    {
      "korean": "한자",
      "rom": "hanja",
      "uzbek": "Hanja (Xitoy iyerogliflari)",
      "trans": "Xanja",
      "category": "Madaniyat",
      "image": "image_9.jpg",
      "note": "Hanguldan oldin qo'llanilgan yozuv tizimi."
    },
    {
      "korean": "한복",
      "rom": "hanbok",
      "uzbek": "Hanbok (Milliy koreys kiyimi)",
      "trans": "Xanbok",
      "category": "Madaniyat",
      "image": "image_10.jpg",
      "note": "Koreyslarning an'anaviy ipak libosi."
    },
    {
      "korean": "한옥",
      "rom": "hanok",
      "uzbek": "Hanok (An'anaviy koreys uyi)",
      "trans": "Xanok",
      "category": "Madaniyat",
      "image": "image_12.jpg",
      "note": "Yog'och va plitkali tomli milliy uy."
    },
    {
      "korean": "한식",
      "rom": "hansik",
      "uzbek": "Hansik (Koreys oshxonasi / taomlari)",
      "trans": "Xanshik",
      "category": "Madaniyat",
      "image": "image_14.jpg",
      "note": "Koreys milliy taomlari majmui."
    },
    {
      "korean": "불고기",
      "rom": "bulgogi",
      "uzbek": "Bulgogi (Olovda qovurilgan go'sht)",
      "trans": "Pulgogi",
      "category": "Madaniyat",
      "image": "image_14.jpg",
      "note": "Marinadlangan mazali mol go'shti."
    },
    {
      "korean": "비빔밥",
      "rom": "bibimbap",
      "uzbek": "Bibimbap (Aralashtirilgan guruch)",
      "trans": "Pibimbap",
      "category": "Madaniyat",
      "image": "image_15.jpg",
      "note": "Sabzavot va go'shtli mashhur guruch taomi."
    },
    {
      "korean": "반찬",
      "rom": "banchan",
      "uzbek": "Banchan (Qo'shimcha gazaklar / salatlar)",
      "trans": "Panchan",
      "category": "Madaniyat",
      "image": "image_23.jpg",
      "note": "Asosiy taom yonida kichik likopchalarda beriladi."
    },
    {
      "korean": "원",
      "rom": "won",
      "uzbek": "Won (Koreya pul birligi)",
      "trans": "Von",
      "category": "Madaniyat",
      "image": "image_20.jpg",
      "note": "Janubiy Koreya rasmiy valyutasi."
    },
    {
      "korean": "윷놀이",
      "rom": "yutnori",
      "uzbek": "Yutnori (Tayoqchalar stoli o'yini)",
      "trans": "Yutnori",
      "category": "Madaniyat",
      "image": "image_21.jpg",
      "note": "Bayramlarda 4 ta yog'och tayoqcha tashlab o'ynaladi."
    },
    {
      "korean": "한국 드라마",
      "rom": "hanguk deurama",
      "uzbek": "Koreys seriali (K-Drama)",
      "trans": "Xanguk dorama",
      "category": "Madaniyat",
      "image": "image_17.jpg",
      "note": "Butun dunyoda mashhur teleseriallar."
    },
    {
      "korean": "K-POP",
      "rom": "k-pop",
      "uzbek": "K-POP (Koreys pop musiqasi)",
      "trans": "Key-pop",
      "category": "Madaniyat",
      "image": "image_18.jpg",
      "note": "BTS, Blackpink kabi guruhlarning zamonaviy musiqasi."
    },
    {
      "korean": "안녕히 가세요",
      "rom": "annyeonghi gaseyo",
      "uzbek": "Xayr / Yaxshi boring (Ketuvchiga)",
      "trans": "Annyonxi kaseyo",
      "category": "Iboralar",
      "image": "part2/image26.png",
      "note": "Ketayotgan mehmonga mezbon tomonidan aytiladi ('가다' - bormoq)."
    },
    {
      "korean": "안녕히 계세요",
      "rom": "annyeonghi gyeseyo",
      "uzbek": "Xayr / Yaxshi qoling (Qoluvchiga)",
      "trans": "Annyonxi kyeseyo",
      "category": "Iboralar",
      "image": "part2/image26.png",
      "note": "Joyida qolayotgan mehmonga ketuvchi tomonidan aytiladi ('계시다' - turmoq/bo'lmoq)."
    },
    {
      "korean": "소",
      "rom": "so",
      "uzbek": "Sigir / Buqa",
      "trans": "So",
      "category": "Oddiy so'zlar",
      "image": "part2/words/so.png",
      "note": "ㅅ va ㅗ yotiq unlisi birikmasidan yasalgan (CV)."
    },
    {
      "korean": "가게",
      "rom": "gage",
      "uzbek": "Do'kon",
      "trans": "Kage",
      "category": "Oddiy so'zlar",
      "image": "part2/words/gage.png",
      "note": "ㅔ diftongi bilan yoziladigan so'z."
    },
    {
      "korean": "허리",
      "rom": "heori",
      "uzbek": "Bel",
      "trans": "Xori",
      "category": "Oddiy so'zlar",
      "image": "part2/words/heori.png",
      "note": "ㅎ va ㅓ tik unlisi birikmasi."
    },
    {
      "korean": "아버지",
      "rom": "abeoji",
      "uzbek": "Ota / Dada",
      "trans": "Aboji",
      "category": "Oddiy so'zlar",
      "image": "part2/words/abeoji.png",
      "note": "Oila a'zosi: hurmatli ota."
    },
    {
      "korean": "차",
      "rom": "cha",
      "uzbek": "Mashina / Choy",
      "trans": "Cha",
      "category": "Oddiy so'zlar",
      "image": "part2/words/cha.png",
      "note": "Portlovchi ㅊ va ㅏ harflari birikmasi."
    },
    {
      "korean": "꼬리",
      "rom": "kkori",
      "uzbek": "Dum",
      "trans": "Kkori",
      "category": "Oddiy so'zlar",
      "image": "part2/words/kkori.png",
      "note": "Juft undosh ㄲ (ssang-giyeok) bilan boshlanadi."
    },
    {
      "korean": "카드",
      "rom": "kadeu",
      "uzbek": "Karta / Otkritka",
      "trans": "Khadu",
      "category": "Oddiy so'zlar",
      "image": "part2/words/kadeu.png",
      "note": "Portlovchi ㅋ va ㄷ harflari birikmasi."
    },
    {
      "korean": "찌개",
      "rom": "jjigae",
      "uzbek": "Jjigae (Qaynatma quyuq sho'rva)",
      "trans": "Jjige",
      "category": "Madaniyat",
      "image": "part2/words/jjigae.png",
      "note": "Juft undosh ㅉ va ㅐ diftongi bilan yoziladigan mashhur milliy taom."
    },
    {
      "korean": "포도",
      "rom": "podo",
      "uzbek": "Uzum",
      "trans": "Podo",
      "category": "Oddiy so'zlar",
      "image": "part2/words/podo.png",
      "note": "ㅍ va ㄷ harflarining ㅗ yotiq unlisi bilan birikmasi."
    },
    {
      "korean": "오빠",
      "rom": "oppa",
      "uzbek": "Aka (qiz bolaga nisbatan)",
      "trans": "Oppa",
      "category": "Oddiy so'zlar",
      "image": "part2/words/oppa.png",
      "note": "Juft undosh ㅃ (ssang-bieup) bilan yoziladi."
    },
    {
      "korean": "왜",
      "rom": "wae",
      "uzbek": "Nega? / Nima uchun?",
      "trans": "We",
      "category": "Iboralar",
      "image": "part2/words/wae.png",
      "note": "ㅙ diftongi bilan yoziladigan so'roq so'z."
    },
    {
      "korean": "회사",
      "rom": "hoesa",
      "uzbek": "Kompaniya / Firma / Ishxona",
      "trans": "Xwesa",
      "category": "Oddiy so'zlar",
      "image": "part2/words/hoesa.png",
      "note": "ㅚ diftongi bilan yoziladi."
    },
    {
      "korean": "과자",
      "rom": "gwaja",
      "uzbek": "Pechene / Qarsildoq shirinlik",
      "trans": "Kwaja",
      "category": "Oddiy so'zlar",
      "image": "part2/words/gwaja.png",
      "note": "ㅘ diftongi bilan yoziladi (ㄱ + ㅘ = 과)."
    },
    {
      "korean": "의자",
      "rom": "uija",
      "uzbek": "Stul / O'rindiq",
      "trans": "Ija / Uija",
      "category": "Oddiy so'zlar",
      "image": "part2/words/uija.png",
      "note": "ㅢ diftongi bilan boshlanadi."
    },
    {
      "korean": "더워요",
      "rom": "deowoyo",
      "uzbek": "Havo issiq / Issiq",
      "trans": "Towoyo",
      "category": "Iboralar",
      "image": "part2/words/deowoyo.png",
      "note": "ㅝ diftongi bilan yoziladi."
    },
    {
      "korean": "치마",
      "rom": "chima",
      "uzbek": "Yubka",
      "trans": "Chima",
      "category": "Oddiy so'zlar",
      "image": "part2/words/chima.png",
      "note": "ㅊ va ㅁ harflaridan tuzilgan so'z."
    },
    {
      "korean": "사과",
      "rom": "sagwa",
      "uzbek": "Olma",
      "trans": "Sagwa",
      "category": "Oddiy so'zlar",
      "image": "part2/words/sagwa.png",
      "note": "ㅘ diftongi bilan yoziladi (ㅅ + ㅏ + ㄱ + ㅘ)."
    },
    {
      "korean": "고기",
      "rom": "gogi",
      "uzbek": "Go'sht",
      "trans": "Kogi",
      "category": "Oddiy so'zlar",
      "image": "part2/words/gogi.png",
      "note": "ㄱ harfi so'z boshida K, o'rtasida G deb o'qiladi."
    },
    {
      "korean": "시계",
      "rom": "sigye",
      "uzbek": "Soat",
      "trans": "Shigye",
      "category": "Oddiy so'zlar",
      "image": "part2/words/sigye.png",
      "note": "ㅖ diftongi bilan yoziladi."
    },
    {
      "korean": "휴지",
      "rom": "hyuji",
      "uzbek": "Salfetka / Tualet qog'ozi",
      "trans": "Xyuji",
      "category": "Oddiy so'zlar",
      "image": "part2/words/hyuji.png",
      "note": "ㅎ va ㅠ unlisi birikmasi."
    },
    {
      "korean": "돼지",
      "rom": "dwaeji",
      "uzbek": "Cho'chqa",
      "trans": "Tweji",
      "category": "Oddiy so'zlar",
      "image": "part2/words/dwaeji.png",
      "note": "ㅙ diftongi bilan yoziladi."
    },
    {
      "korean": "피자",
      "rom": "pija",
      "uzbek": "Pitsa",
      "trans": "Pija",
      "category": "Oddiy so'zlar",
      "image": "part2/words/pija.png",
      "note": "ㅍ va ㅈ harflari birikmasi."
    },
    {
      "korean": "기차",
      "rom": "gicha",
      "uzbek": "Poyezd",
      "trans": "Kicha",
      "category": "Oddiy so'zlar",
      "image": "part2/words/gicha.png",
      "note": "ㄱ va ㅊ harflari birikmasi."
    },
    {
      "korean": "토끼",
      "rom": "tokki",
      "uzbek": "Quyon",
      "trans": "Thokki",
      "category": "Oddiy so'zlar",
      "image": "part2/words/tokki.png",
      "note": "Juft undosh ㄲ bilan yoziladi."
    },
    {
      "korean": "입",
      "rom": "ip",
      "uzbek": "Og'iz / Lab",
      "trans": "Ip",
      "category": "Bo'g'in & Batchim",
      "image": "part2/image22.png",
      "note": "V + C strukturasi: unli ostida ㅂ batchim turibdi."
    },
    {
      "korean": "열",
      "rom": "yeol",
      "uzbek": "O'n (10) / Harorat",
      "trans": "Yol",
      "category": "Bo'g'in & Batchim",
      "image": "part2/image22.png",
      "note": "V + C strukturasi: ㅕ ostida ㄹ batchim kelgan."
    },
    {
      "korean": "음",
      "rom": "eum",
      "uzbek": "Tovush / 'Hm'",
      "trans": "Im",
      "category": "Bo'g'in & Batchim",
      "image": "part2/image22.png",
      "note": "V + C strukturasi: ㅡ ostida ㅁ batchim."
    },
    {
      "korean": "집",
      "rom": "jip",
      "uzbek": "Uy / Xonadon",
      "trans": "Chip",
      "category": "Bo'g'in & Batchim",
      "image": "part2/image23.png",
      "note": "C + V (tik) + C: ㅈ + ㅣ + ㅂ (pastda batchim)."
    },
    {
      "korean": "산",
      "rom": "san",
      "uzbek": "Tog'",
      "trans": "San",
      "category": "Bo'g'in & Batchim",
      "image": "part2/image23.png",
      "note": "C + V (tik) + C: ㅅ + ㅏ + ㄴ (pastda batchim)."
    },
    {
      "korean": "공",
      "rom": "gong",
      "uzbek": "Koptok / Shar / Nol",
      "trans": "Kong",
      "category": "Bo'g'in & Batchim",
      "image": "part2/image24.png",
      "note": "C + V (yotiq) + C: ㄱ + ㅗ + ㅇ (pastda ng batchim)."
    },
    {
      "korean": "물",
      "rom": "mul",
      "uzbek": "Suv",
      "trans": "Mul",
      "category": "Bo'g'in & Batchim",
      "image": "part2/image24.png",
      "note": "C + V (yotiq) + C: ㅁ + ㅜ + ㄹ (pastda batchim)."
    },
    {
      "korean": "오",
      "rom": "o",
      "uzbek": "Besh (5 raqami)",
      "trans": "O",
      "category": "Oddiy so'zlar",
      "image": "part2/image16.png",
      "note": "Faqat unli bilan boshlangani uchun ovozsiz 'ㅇ' qo'yiladi."
    },
    {
      "korean": "이",
      "rom": "i",
      "uzbek": "Ikki (2 raqami) / Tish",
      "trans": "I",
      "category": "Oddiy so'zlar",
      "image": "part2/image16.png",
      "note": "Tik unli: 'ㅇ' chap tomonga yoziladi."
    }
  ],
  "sections": [
    {
      "id": "sec_vowels",
      "title": "Unlilar",
      "korean": "모음",
      "lessonIds": [
        "lesson_1_1",
        "lesson_1_2"
      ]
    },
    {
      "id": "sec_consonants",
      "title": "Undoshlar",
      "korean": "자음",
      "lessonIds": [
        "lesson_1_3",
        "lesson_1_4",
        "lesson_1_5"
      ]
    },
    {
      "id": "sec_words",
      "title": "So'zlar",
      "korean": "단어",
      "lessonIds": [
        "lesson_2_1",
        "lesson_2_2",
        "lesson_2_3",
        "lesson_2_4"
      ]
    },
    {
      "id": "sec_culture",
      "title": "Koreya & Quiz",
      "korean": "한국 & 퀴즈",
      "lessonIds": [
        "lesson_3_1",
        "lesson_3_2",
        "lesson_3_3"
      ]
    },
    {
      "id": "sec_compound_vowels",
      "title": "Diftonglar (Murakkab Unlilar)",
      "korean": "복합 모음",
      "lessonIds": [
        "lesson_4_1",
        "lesson_4_2",
        "lesson_4_3"
      ]
    },
    {
      "id": "sec_double_consonants",
      "title": "Juft Undoshlar",
      "korean": "쌍자음",
      "lessonIds": [
        "lesson_5_1",
        "lesson_5_2"
      ]
    },
    {
      "id": "sec_syllables_batchim",
      "title": "Bo'g'in Tuzilishi & Odob",
      "korean": "음절과 인사말",
      "lessonIds": [
        "lesson_6_1",
        "lesson_6_2",
        "lesson_6_3"
      ]
    }
  ],
  "lessons": [
    {
      "id": "lesson_1_1",
      "sectionId": "sec_vowels",
      "title": "Alifbo tarixi va 3 asos",
      "subTitle": "훈민정음과 삼재",
      "steps": [
        {
          "type": "theory",
          "title": "Hunminjeongeum nima?",
          "korean": "훈민정음",
          "audio": "훈민정음",
          "image": "image4.jpeg",
          "explanation": "<b>1443-yilda Qirol Sejong (세종대왕)</b> koreys xalqi o'z tilida erkin o'qib-yoza olishi uchun Hangul alifbosini yaratdi. Uning asl nomi <b>훈민정음 [Hunminjeongeum]</b> bo'lib, 'Xalqqa to'g'ri talaffuzni o'rgatish uchun ko'rsatma' degan ma'noni anglatadi.",
          "points": [
            "Koreys alifbosida jami 24 ta asosiy harf bor.",
            "10 ta oddiy unli (모음) va 14 ta oddiy undosh (자음).",
            "Ilgari koreyslar qiyin Xitoy iyerogliflari (Hanja)dan foydalangan."
          ]
        },
        {
          "type": "theory",
          "title": "Unlilarning 3 Falsafiy Asosi",
          "korean": "하늘 • 땅 • 사람",
          "audio": "하늘 땅 사람",
          "image": "image6.png",
          "explanation": "Koreys unlilari Koinotdagi 3 ta asosiy element asosida yasalgan:",
          "points": [
            "Dumaloq nuqta = <b>하늘 (Haneul)</b> — Koinot / Osmon",
            "Gorizontal chiziq = <b>땅 (Ttang)</b> — Tekis Yer",
            "Vertikal chiziq = <b>사람 (Saram)</b> — Tik turgan Odam"
          ]
        },
        {
          "type": "choice",
          "question": "Hangul alifbosini 1443-yilda kim yaratgan?",
          "options": [
            "Qirol Sejong (세종대왕)",
            "Shirin sonsengnim",
            "Li Sun Sin",
            "Xitoy imperatori"
          ],
          "correct": 0,
          "explanation": "To'g'ri! Qirol Sejong 1443-yilda koreys alifbosini yaratgan."
        },
        {
          "type": "choice",
          "question": "Koreys unlilari asosidagi gorizontal to'g'ri chiziq nimani anglatadi?",
          "options": [
            "Yer (땅)",
            "Osmon (하늘)",
            "Odam (사람)",
            "Daryo"
          ],
          "correct": 0,
          "explanation": "Gorizontal to'g'ri chiziq tekis Yerni (땅) bildiradi."
        },
        {
          "type": "match",
          "question": "Elementlarni o'zbekcha ma'nosiga moslang:",
          "pairs": [
            {
              "k": "하늘",
              "v": "Osmon"
            },
            {
              "k": "땅",
              "v": "Yer"
            },
            {
              "k": "사람",
              "v": "Odam"
            },
            {
              "k": "훈민정음",
              "v": "Alifbo kitobi"
            }
          ]
        }
      ]
    },
    {
      "id": "lesson_1_2",
      "sectionId": "sec_vowels",
      "title": "10 ta oddiy unli",
      "subTitle": "기본 모음",
      "steps": [
        {
          "type": "theory",
          "title": "10 ta Oddiy Unlilar (기본 모음)",
          "korean": "ㅏ ㅑ ㅓ ㅕ ㅗ ㅛ ㅜ ㅠ ㅡ ㅣ",
          "audio": "아 야 어 여 오 요 우 유 으 이",
          "image": "image8.png",
          "explanation": "Koreys tilida harflar chapdan o'ngga yoki yuqoridan pastga yoziladi. Unli yakka o'zi kelganda oldiga tovushsiz doira qo'yiladi: <b>아, 야, 어, 여, 오, 요, 우, 유, 으, 이</b>.",
          "points": [
            "ㅏ [A] va ㅑ [YA] — Vertikal chiziqning o'ng tomonida",
            "ㅓ [O'] va ㅕ [YO'] — Vertikal chiziqning chap tomonida",
            "ㅗ [O] va ㅛ [YO] — Gorizontal chiziqning yuqorisida",
            "ㅜ [U] va ㅠ [YU] — Gorizontal chiziqning pastida",
            "ㅡ [I / tishlar jipslashgan] va ㅣ [I / oddiy]"
          ]
        },
        {
          "type": "listening",
          "question": "Talaffuzni tinglang va to'g'ri harfni tanlang:",
          "audio": "아",
          "options": [
            "ㅏ (A)",
            "ㅓ (O')",
            "ㅗ (O)",
            "ㅜ (U)"
          ],
          "correct": 0,
          "explanation": "ㅏ — ravshan 'A' tovushi."
        },
        {
          "type": "listening",
          "question": "Qaysi unli talaffuz qilindi?",
          "audio": "어",
          "options": [
            "ㅓ (O')",
            "ㅏ (A)",
            "ㅡ (I)",
            "ㅣ (I)"
          ],
          "correct": 0,
          "explanation": "ㅓ — ochiq 'O'' tovushi."
        },
        {
          "type": "choice",
          "question": "'ㅜ' [U] harfiga bitta vertikal chiziq qo'shilsa qaysi harf hosil bo'ladi?",
          "options": [
            "ㅠ (YU)",
            "ㅛ (YO)",
            "ㅑ (YA)",
            "ㅕ (YO')"
          ],
          "correct": 0,
          "explanation": "ㅜ (U) ga bitta chiziq qo'shilsa ㅠ (YU) bo'ladi."
        },
        {
          "type": "stroke",
          "letter": "ㅏ",
          "name": "아 (A)",
          "strokes": [
            "1. Yuqoridan pastga vertikal chiziq",
            "2. O'ng tomonga qisqa gorizontal chiziq"
          ],
          "canvasLetter": "ㅏ"
        },
        {
          "type": "match",
          "question": "Unlilarni talaffuziga moslang:",
          "pairs": [
            {
              "k": "ㅏ",
              "v": "A"
            },
            {
              "k": "ㅓ",
              "v": "O' (eo)"
            },
            {
              "k": "ㅗ",
              "v": "O"
            },
            {
              "k": "ㅜ",
              "v": "U"
            },
            {
              "k": "ㅣ",
              "v": "I"
            }
          ]
        }
      ]
    },
    {
      "id": "lesson_1_3",
      "sectionId": "sec_consonants",
      "title": "Undoshlarning kelib chiqishi",
      "subTitle": "발음기관과 자음",
      "steps": [
        {
          "type": "theory",
          "title": "Nutq a'zolariga asoslangan 5 ta harf",
          "korean": "ㄱ ㄴ ㅁ ㅅ ㅇ",
          "audio": "기역 니은 미음 시옷 이응",
          "image": "image11.png",
          "explanation": "Koreys undoshlari inson gapirayotgan paytda til, og'iz va tomoq shaklini ifodalaydi:",
          "points": [
            "<b>ㄱ [k/g]</b>: Til orqasi tomoqni to'sish shakli.",
            "<b>ㄴ [n]</b>: Til uchi yuqori milkka tegish shakli.",
            "<b>ㅁ [m]</b>: Yopiq lablar (og'iz) shakli.",
            "<b>ㅅ [s]</b>: Inson tishi shakli.",
            "<b>ㅇ [ng / tovushsiz]</b>: Tomoq (halqum) doirasi."
          ]
        },
        {
          "type": "choice",
          "question": "Lablar (og'iz) shaklidan olingan to'rtburchak undosh qaysi?",
          "options": [
            "ㅁ (M)",
            "ㄴ (N)",
            "ㄱ (K)",
            "ㅅ (S)"
          ],
          "correct": 0,
          "explanation": "ㅁ — yopilgan lablar shaklidir ([m] tovushi)."
        },
        {
          "type": "choice",
          "question": "Tish shaklidagi 'ㅅ' harfiga chiziq qo'shilsa qaysi harflar hosil bo'ladi?",
          "options": [
            "ㅈ va ㅊ",
            "ㄷ va ㅌ",
            "ㅂ va ㅍ",
            "ㄱ va ㅋ"
          ],
          "correct": 0,
          "explanation": "ㅅ (s) -> ㅈ (j) -> ㅊ (ch) tartibida hosil bo'ladi."
        },
        {
          "type": "match",
          "question": "Harflarni nutq a'zolariga moslang:",
          "pairs": [
            {
              "k": "ㄱ",
              "v": "Til orqasi (tomoqni to'sishi)"
            },
            {
              "k": "ㄴ",
              "v": "Til uchi milkka tegishi"
            },
            {
              "k": "ㅁ",
              "v": "Lablar shakli"
            },
            {
              "k": "ㅅ",
              "v": "Tish shakli"
            }
          ]
        }
      ]
    },
    {
      "id": "lesson_1_4",
      "sectionId": "sec_consonants",
      "title": "14 ta oddiy undosh",
      "subTitle": "기본 자음",
      "steps": [
        {
          "type": "theory",
          "title": "14 ta Asosiy Undoshlar",
          "korean": "ㄱ ㄴ ㄷ ㄹ ㅁ ㅂ ㅅ ㅇ ㅈ ㅊ ㅋ ㅌ ㅍ ㅎ",
          "audio": "기역 니은 디귿 리을 미음 비읍 시옷 이응 지읒 치읓 키읔 티읕 피읖 히읗",
          "image": "image16.png",
          "explanation": "Koreys tilidagi 14 ta oddiy undoshning nomlari:",
          "points": [
            "ㄱ (g/k), ㄴ (n), ㄷ (d/t), ㄹ (r/l)",
            "ㅁ (m), ㅂ (b/p), ㅅ (s/sh), ㅇ (ng/ovozsiz)",
            "ㅈ (j/ch), ㅊ (ch), ㅋ (k), ㅌ (t), ㅍ (p), ㅎ (h)"
          ]
        },
        {
          "type": "listening",
          "question": "Tinglang va harfni tanlang:",
          "audio": "니은",
          "options": [
            "ㄴ (N)",
            "ㄱ (K)",
            "ㄷ (T)",
            "ㄹ (R)"
          ],
          "correct": 0,
          "explanation": "Bu harf — ㄴ (니은 - nieun)."
        },
        {
          "type": "listening",
          "question": "Tinglang va tanlang:",
          "audio": "미음",
          "options": [
            "ㅁ (M)",
            "ㅂ (B)",
            "ㅇ (NG)",
            "ㅎ (H)"
          ],
          "correct": 0,
          "explanation": "Bu harf — ㅁ (미음 - mieum)."
        },
        {
          "type": "choice",
          "question": "Qaysi harf so'z boshida unli oldida ovoz chiqarmaydi (tovushsiz bo'ladi)?",
          "options": [
            "ㅇ (Ieung)",
            "ㅁ (Mieum)",
            "ㅎ (Hieut)",
            "ㅅ (Siot)"
          ],
          "correct": 0,
          "explanation": "'ㅇ' unli oldida tovushsiz bo'ladi (masalan, 아 = a)."
        },
        {
          "type": "match",
          "question": "Harflarni ularning nomiga moslang:",
          "pairs": [
            {
              "k": "ㄱ",
              "v": "기역 (giyeok)"
            },
            {
              "k": "ㄴ",
              "v": "니은 (nieun)"
            },
            {
              "k": "ㄹ",
              "v": "리을 (rieul)"
            },
            {
              "k": "ㅁ",
              "v": "미음 (mieum)"
            }
          ]
        }
      ]
    },
    {
      "id": "lesson_1_5",
      "sectionId": "sec_consonants",
      "title": "Bo'g'in hosil qilish",
      "subTitle": "음절 결합",
      "steps": [
        {
          "type": "theory",
          "title": "Bo'g'in Bloklari Qoidasi",
          "korean": "ㅇ + ㅏ = 아 | ㄱ + ㅏ = 가",
          "audio": "아 가 나 다",
          "image": "image17.png",
          "explanation": "Koreys harflari kvadrat shaklidagi bo'g'in qilib yoziladi:",
          "points": [
            "Har bir bo'g'inda kamida 1 ta undosh va 1 ta unli bo'lishi shart.",
            "Vertikal unlilar (ㅏ, ㅓ, ㅣ) undoshning O'NG tomoniga yoziladi: ㄱ + ㅏ = <b>가</b>.",
            "Gorizontal unlilar (ㅗ, ㅜ, ㅡ) undoshning TAGIGA yoziladi: ㄱ + ㅗ = <b>고</b>."
          ]
        },
        {
          "type": "choice",
          "question": "'ㄴ' va 'ㅏ' harflari birlashsa qanday bo'g'in yasaladi?",
          "options": [
            "나 (na)",
            "누 (nu)",
            "노 (no)",
            "너 (neo)"
          ],
          "correct": 0,
          "explanation": "ㄴ + ㅏ = 나 (na)."
        },
        {
          "type": "choice",
          "question": "'ㅁ' va 'ㅗ' harflari birlashganda qanday yoziladi?",
          "options": [
            "모 (mo)",
            "마 (ma)",
            "무 (mu)",
            "미 (mi)"
          ],
          "correct": 0,
          "explanation": "ㅗ gorizontal unli bo'lgani uchun tagiga yoziladi: 모 (mo)."
        },
        {
          "type": "match",
          "question": "Bo'g'inlarni o'qilishiga moslang:",
          "pairs": [
            {
              "k": "가",
              "v": "ga / ka"
            },
            {
              "k": "나",
              "v": "na"
            },
            {
              "k": "다",
              "v": "da / ta"
            },
            {
              "k": "마",
              "v": "ma"
            }
          ]
        }
      ]
    },
    {
      "id": "lesson_2_1",
      "sectionId": "sec_words",
      "title": "Salomlashish va iboralar",
      "subTitle": "인사말",
      "steps": [
        {
          "type": "theory",
          "title": "Ma'ruzadagi Asosiy Iboralar",
          "korean": "안녕하세요 • 선생님 • 수고하셨어요",
          "audio": "안녕하세요 선생님 수고하셨어요",
          "image": "image18.png",
          "explanation": "1-ma'ruzadagi eng muhim iboralar:",
          "points": [
            "<b>안녕하세요 [annyeonghaseyo]</b> — Assalomu alaykum / Salom (1-slaydda)",
            "<b>선생님 [seonsaengnim]</b> — Ustoz / O'qituvchi (Shirin sonsengnim)",
            "<b>수고하셨어요 [sugohasyeosseoyo]</b> — Rahmat, mehnatingizga tashakkur (Oxirgi slaydda)"
          ]
        },
        {
          "type": "listening",
          "question": "Qaysi ibora talaffuz qilindi?",
          "audio": "안녕하세요",
          "options": [
            "안녕하세요 (Salom)",
            "수고하셨어요 (Rahmat)",
            "선생님 (Ustoz)",
            "감사합니다"
          ],
          "correct": 0,
          "explanation": "안녕하세요 — rasmiy salomlashish."
        },
        {
          "type": "choice",
          "question": "Dars yakunida o'qituvchi yoki talabalarga nima deyiladi?",
          "options": [
            "수고하셨어요 (Sugohasyeosseoyo)",
            "안녕하세요 (Annyeonghaseyo)",
            "안녕히 가세요",
            "죄송합니다"
          ],
          "correct": 0,
          "explanation": "수고하셨어요 — mehnatingiz uchun tashakkur / barakalla."
        },
        {
          "type": "builder",
          "question": "'Salom' so'zini bo'g'inlardan yig'ing:",
          "targetWord": "안녕하세요",
          "syllables": [
            "안",
            "녕",
            "하",
            "세",
            "요"
          ],
          "distractors": [
            "선",
            "생"
          ],
          "explanation": "안 + 녕 + 하 + 세 + 요 = 안녕하세요!",
          "target": "안녕하세요"
        },
        {
          "type": "match",
          "question": "Iboralarni tarjimasiga moslang:",
          "pairs": [
            {
              "k": "안녕하세요",
              "v": "Salom"
            },
            {
              "k": "선생님",
              "v": "Ustoz"
            },
            {
              "k": "수고하셨어요",
              "v": "Rahmat / Barakalla"
            }
          ]
        }
      ]
    },
    {
      "id": "lesson_2_2",
      "sectionId": "sec_words",
      "title": "Koinot va inson so'zlari",
      "subTitle": "하늘 • 땅 • 사람",
      "steps": [
        {
          "type": "theory",
          "title": "Tabiat va Inson So'zlari",
          "korean": "하늘 • 땅 • 사람",
          "audio": "하늘 땅 사람",
          "image": "image5.png",
          "explanation": "1-ma'ruzaning 9-slaydidagi asosiy so'zlar:",
          "points": [
            "<b>하늘 [haneul]</b> — Osmon",
            "<b>땅 [ttang]</b> — Yer",
            "<b>사람 [saram]</b> — Odam / Inson"
          ]
        },
        {
          "type": "choice",
          "question": "'하늘' so'zining tarjimasi qaysi?",
          "options": [
            "Osmon",
            "Yer",
            "Odam",
            "Suv"
          ],
          "correct": 0,
          "explanation": "하늘 — Osmon."
        },
        {
          "type": "choice",
          "question": "'땅' so'zi nimani bildiradi?",
          "options": [
            "Yer",
            "Osmon",
            "Tog'",
            "Daryo"
          ],
          "correct": 0,
          "explanation": "땅 — Yer."
        },
        {
          "type": "listening",
          "question": "Tinglang va so'zni toping:",
          "audio": "사람",
          "options": [
            "사람 (Odam)",
            "하늘 (Osmon)",
            "땅 (Yer)",
            "선생님 (Ustoz)"
          ],
          "correct": 0,
          "explanation": "사람 — Odam / Inson."
        },
        {
          "type": "builder",
          "question": "'Odam' so'zini yig'ing:",
          "targetWord": "사람",
          "syllables": [
            "사",
            "람"
          ],
          "distractors": [
            "하",
            "늘"
          ],
          "explanation": "사 + 람 = 사람 (saram).",
          "target": "사람"
        }
      ]
    },
    {
      "id": "lesson_2_3",
      "sectionId": "sec_words",
      "title": "Ilk oddiy so'zlar",
      "subTitle": "기초 단어",
      "steps": [
        {
          "type": "theory",
          "title": "O'rganilgan harflardan ilk so'zlar",
          "korean": "아이, 오이, 우유, 여우, 나무, 나비, 모자, 바지",
          "audio": "아이 오이 우유 여우 나무 나비 모자 바지",
          "image": "image17.png",
          "explanation": "Oddiy harflar bilan tuzilgan kundalik so'zlar:",
          "points": [
            "<b>아이 [ai]</b> — Bola | <b>오이 [oi]</b> — Bodring",
            "<b>우유 [uyu]</b> — Sut | <b>여우 [yeou]</b> — Tulki",
            "<b>나무 [namu]</b> — Daraxt | <b>나비 [nabi]</b> — Kapalak",
            "<b>모자 [moja]</b> — Bosh kiyim | <b>바지 [baji]</b> — Shim"
          ]
        },
        {
          "type": "choice",
          "question": "'우유' nimani bildiradi?",
          "options": [
            "Sut",
            "Bodring",
            "Bola",
            "Daraxt"
          ],
          "correct": 0,
          "explanation": "우유 — Sut."
        },
        {
          "type": "choice",
          "question": "'오이' nimani bildiradi?",
          "options": [
            "Bodring",
            "Tulki",
            "Shim",
            "Kapalak"
          ],
          "correct": 0,
          "explanation": "오이 — Bodring."
        },
        {
          "type": "listening",
          "question": "Tinglang va tanlang:",
          "audio": "나무",
          "options": [
            "나무 (Daraxt)",
            "나비 (Kapalak)",
            "모자 (Bosh kiyim)",
            "바지 (Shim)"
          ],
          "correct": 0,
          "explanation": "나무 — Daraxt."
        },
        {
          "type": "match",
          "question": "So'zlarni ma'nosiga moslang:",
          "pairs": [
            {
              "k": "아이",
              "v": "Bola"
            },
            {
              "k": "우유",
              "v": "Sut"
            },
            {
              "k": "여우",
              "v": "Tulki"
            },
            {
              "k": "나비",
              "v": "Kapalak"
            }
          ]
        }
      ]
    },
    {
      "id": "lesson_2_4",
      "sectionId": "sec_words",
      "title": "Koreys madaniyati so'zlari",
      "subTitle": "전통 문화",
      "steps": [
        {
          "type": "theory",
          "title": "Koreys An'anaviy Terminlari",
          "korean": "한복 • 한옥 • 한식 • 불고기 • 비빔밥 • 반찬",
          "audio": "한복 한옥 한식 불고기 비빔밥 반찬",
          "image": "image_10.jpg",
          "explanation": "2-ma'ruzadagi madaniy so'zlar:",
          "points": [
            "<b>한복 [Hanbok]</b> — Milliy koreys libosi",
            "<b>한옥 [Hanok]</b> — An'anaviy koreys uyi",
            "<b>한식 [Hansik]</b> — Koreys milliy oshxonasi",
            "<b>불고기 [Bulgogi]</b> — Marinadlangan mol go'shti",
            "<b>비빔밥 [Bibimbap]</b> — Sabzavotli aralash guruch taomi",
            "<b>반찬 [Banchan]</b> — Yonida tortiladigan salat va gazaklar"
          ]
        },
        {
          "type": "choice",
          "question": "Koreys milliy kiyimi nima deyiladi?",
          "options": [
            "한복 (Hanbok)",
            "한옥 (Hanok)",
            "한식 (Hansik)",
            "한자"
          ],
          "correct": 0,
          "explanation": "한복 — Koreya milliy libosi."
        },
        {
          "type": "choice",
          "question": "An'anaviy koreys uyi qanday ataladi?",
          "options": [
            "한옥 (Hanok)",
            "한복 (Hanbok)",
            "불고기",
            "반찬"
          ],
          "correct": 0,
          "explanation": "한옥 — An'anaviy yog'och uy."
        },
        {
          "type": "match",
          "question": "Madaniyat so'zlarini moslang:",
          "pairs": [
            {
              "k": "한복",
              "v": "Milliy kiyim"
            },
            {
              "k": "한옥",
              "v": "An'anaviy uy"
            },
            {
              "k": "불고기",
              "v": "Marinadlangan go'sht"
            },
            {
              "k": "반찬",
              "v": "Yon gazaklar"
            }
          ]
        }
      ]
    },
    {
      "id": "lesson_3_1",
      "sectionId": "sec_culture",
      "title": "Davlat va milliy ramzlar",
      "subTitle": "국가 상징",
      "steps": [
        {
          "type": "theory",
          "title": "Koreya Davlati va Ramzlari",
          "korean": "한국 • 서울 • 태극기 • 무궁화 • 원",
          "audio": "한국 서울 태극기 무궁화 원",
          "image": "image_4.jpg",
          "explanation": "2-ma'ruzadagi asosiy davlat ma'lumotlari:",
          "points": [
            "<b>한국 [Hanguk]</b> — Janubiy Koreya",
            "<b>서울 [Seoul]</b> — Janubiy Koreya poytaxti",
            "<b>태극기 [Taegeukgi]</b> — Davlat bayrog'i",
            "<b>무궁화 [Mugunghwa]</b> — Milliy gul (Suriya atirguli)",
            "<b>원 [Won]</b> — Pul birligi (KRW)"
          ]
        },
        {
          "type": "choice",
          "question": "Janubiy Koreyaning poytaxti qaysi shahar?",
          "options": [
            "서울 (Seoul)",
            "부산 (Busan)",
            "인천 (Incheon)",
            "대구"
          ],
          "correct": 0,
          "explanation": "Janubiy Koreya poytaxti — 서울 (Seoul)."
        },
        {
          "type": "choice",
          "question": "Koreya davlat bayrog'i qanday ataladi?",
          "options": [
            "태극기 (Taegeukgi)",
            "무궁화",
            "한글",
            "훈민정음"
          ],
          "correct": 0,
          "explanation": "Bayroq — 태극기 (Taegeukgi)."
        },
        {
          "type": "choice",
          "question": "Koreyaning milliy guli qaysi?",
          "options": [
            "무궁화 (Mugunghwa)",
            "장미 (Atirgul)",
            "연꽃",
            "벚꽃"
          ],
          "correct": 0,
          "explanation": "Milliy gul — 무궁화 (Mugunghwa)."
        },
        {
          "type": "choice",
          "question": "Koreya pul birligi nima?",
          "options": [
            "원 (Won)",
            "달러",
            "엔",
            "So'm"
          ],
          "correct": 0,
          "explanation": "Pul birligi — 원 (Won)."
        }
      ]
    },
    {
      "id": "lesson_3_2",
      "sectionId": "sec_culture",
      "title": "O'yinlar va zamonaviy madaniyat",
      "subTitle": "놀이와 문화",
      "steps": [
        {
          "type": "theory",
          "title": "Koreys Ko'ngilochar Madaniyati",
          "korean": "윷놀이 • K-POP • 한국 드라마",
          "audio": "윷놀이 케이팝 한국 드라마",
          "image": "image_21.jpg",
          "explanation": "2-ma'ruzadagi madaniy ko'ngilochar mavzular:",
          "points": [
            "<b>윷놀이 [Yutnori]</b> — 4 ta yog'och tayoqcha bilan o'ynaladigan stol o'yini.",
            "<b>한국 드라마 [Hanguk drama]</b> — Mashhur koreys seriallari (dorama).",
            "<b>K-POP</b> — Janubiy Koreya estrada musiqasi."
          ]
        },
        {
          "type": "choice",
          "question": "4 ta yog'och tayoqcha tashlab o'ynaladigan an'anaviy koreys o'yini nima?",
          "options": [
            "윷놀이 (Yutnori)",
            "바둑",
            "태권도",
            "한복"
          ],
          "correct": 0,
          "explanation": "Bu o'yin — 윷놀이 (Yutnori)."
        },
        {
          "type": "choice",
          "question": "Koreys taomlarida yonida beriladigan gazaklar nima deyiladi?",
          "options": [
            "반찬 (Banchan)",
            "불고기",
            "비빔밥",
            "한식"
          ],
          "correct": 0,
          "explanation": "Barcha qo'shimcha gazaklar — 반찬 (Banchan)."
        },
        {
          "type": "match",
          "question": "Tushunchalarni moslang:",
          "pairs": [
            {
              "k": "윷놀이",
              "v": "Tayoqchalar o'yini"
            },
            {
              "k": "한국 드라마",
              "v": "Koreys seriali"
            },
            {
              "k": "K-POP",
              "v": "Koreys pop musiqasi"
            },
            {
              "k": "한자",
              "v": "Xitoy iyerogliflari"
            }
          ]
        }
      ]
    },
    {
      "id": "lesson_3_3",
      "sectionId": "sec_culture",
      "title": "Basic Korean 1 kursi sinovi",
      "subTitle": "강의 규정 퀴즈",
      "steps": [
        {
          "type": "theory",
          "title": "Basic Korean 1 Kurs Qoidalari",
          "korean": "Basic Korean 1 • Shirin sonsengnim",
          "audio": "베이직 코리안 원",
          "image": "image3.png",
          "explanation": "1-ma'ruzadagi kurs talablari:",
          "points": [
            "O'qituvchi: <b>Makhamedova Shirin sonsengnim</b>, Xona: <b>206B</b>.",
            "Oraliq (Midterm) 30% va Yakuniy (Final) 30% — Qayta topshirish (다시 보기) yo'q!",
            "Davomat 10% — <b>4 marta</b> dars qoldirilsa avtomatik 'F' baho olinadi!",
            "Jarimalar (-2 ball): Darsda uxlash, telefondan foydalanish, ruxsatsiz chiqib ketish."
          ]
        },
        {
          "type": "choice",
          "question": "Basic Korean 1 fani o'qituvchisi kim va xonasi qaysi?",
          "options": [
            "Makhamedova Shirin sonsengnim, Office 206B",
            "Kim sonsengnim, Office 101A",
            "Park sonsengnim, Office 305C",
            "Lee sonsengnim, Office 404"
          ],
          "correct": 0,
          "explanation": "1-ma'ruza 2-slaydda ko'rsatilgan: Makhamedova Shirin sonsengnim, Office – 206B."
        },
        {
          "type": "choice",
          "question": "Talaba necha marta dars qoldirsa to'g'ridan-to'g'ri 'F' baho oladi?",
          "options": [
            "4 marta (4 absence = F)",
            "2 marta",
            "6 marta",
            "10 marta"
          ],
          "correct": 0,
          "explanation": "3-slaydda ko'rsatilgan: (4 absence = F)!"
        },
        {
          "type": "choice",
          "question": "Oraliq (Midterm) va Yakuniy (Final) imtihonlar har biri necha foiz?",
          "options": [
            "Har biri 30% dan, qayta topshirish yo'q",
            "Har biri 20% dan, qayta topshirish bor",
            "Oraliq 50%, Yakuniy 50%",
            "Oraliq imtihon yo'q"
          ],
          "correct": 0,
          "explanation": "Oraliq 30% va Yakuniy 30%, qayta topshirish (다시 보기) yo'q!"
        },
        {
          "type": "choice",
          "question": "Quyidagilardan qaysi biri darsda -2 ball jarimaga sabab bo'ladi?",
          "options": [
            "Darsda uxlash yoki telefondan foydalanish",
            "Faol savol berish",
            "Daftarni toza tutish",
            "Vazifani topshirish"
          ],
          "correct": 0,
          "explanation": "Darsda uxlash, telefondan foydalanish yoki ruxsatsiz chiqish -2 ball jarima beradi."
        },
        {
          "type": "choice",
          "question": "Kursda 'A+ / A' baho olish uchun qancha ball to'plash kerak?",
          "options": [
            "85 – 100% ball (talabalarning 20% gacha)",
            "70 – 84% ball",
            "60 – 70% ball",
            "50 – 60% ball"
          ],
          "correct": 0,
          "explanation": "A+/A olish uchun 85–100% ball kerak (20% kvota)."
        }
      ]
    },
    {
      "id": "lesson_4_1",
      "sectionId": "sec_compound_vowels",
      "title": "E va YE tovushli diftonglar",
      "subTitle": "ㅐ, ㅒ, ㅔ, ㅖ",
      "steps": [
        {
          "type": "theory",
          "title": "Diftonglar (복합 모음) nima?",
          "korean": "복합 모음 (11 ta)",
          "audio": "복합 모음",
          "image": "part2/image8.png",
          "explanation": "Koreys tilida <b>11 ta murakkab unli (diftong)</b> mavjud. Ular oddiy unlilarga <b>ㅣ [i]</b> yoki <b>ㅗ [o] / ㅜ [u]</b> unlilarini qo'shish orqali yasaladi.",
          "points": [
            "<b>ㅐ [ae]</b> = ㅏ + ㅣ (og'iz kengroq ochilib 'e' aytiladi)",
            "<b>ㅒ [yae]</b> = ㅑ + ㅣ ('yae' tovushi)",
            "<b>ㅔ [e]</b> = ㅓ + ㅣ (o'zbek tilidagi oddiy 'e')",
            "<b>ㅖ [ye]</b> = ㅕ + ㅣ ('ye' tovushi, masalan: 시계 [sigye])"
          ]
        },
        {
          "type": "stroke",
          "name": "ㅐ (ae)",
          "canvasLetter": "ㅐ",
          "strokes": [
            "1. Chap tomondagi tik chiziq (yuqoridan pastga)",
            "2. O'rtadagi qisqa gorizontal chiziq (chapdan o'ngga)",
            "3. O'ng tomondagi tik chiziq (yuqoridan pastga)"
          ]
        },
        {
          "type": "choice",
          "question": "ㅐ harfi qaysi ikki oddiy unlining birikmasidan hosil bo'ladi?",
          "options": [
            "ㅏ + ㅣ",
            "ㅓ + ㅣ",
            "ㅗ + ㅏ",
            "ㅡ + ㅣ"
          ],
          "correct": 0,
          "explanation": "To'g'ri! ㅏ + ㅣ = ㅐ [ae] hosil bo'ladi."
        },
        {
          "type": "choice",
          "question": "가게 [gage - do'kon] va 시계 [sigye - soat] so'zlarida qaysi diftonglar qatnashgan?",
          "options": [
            "가게'da ㅔ, 시계'da ㅖ",
            "Ikkalasida ham ㅐ",
            "가게'da ㅘ, 시계'da ㅝ",
            "Ikkalasida ham ㅚ"
          ],
          "correct": 0,
          "explanation": "To'g'ri! 가게 so'zida ㅔ, 시계 so'zida esa ㅖ diftongi mavjud."
        },
        {
          "type": "match",
          "question": "Diftonglar va ularning formulasini moslang:",
          "pairs": [
            {
              "k": "ㅐ",
              "v": "ㅏ + ㅣ"
            },
            {
              "k": "ㅒ",
              "v": "ㅑ + ㅣ"
            },
            {
              "k": "ㅔ",
              "v": "ㅓ + ㅣ"
            },
            {
              "k": "ㅖ",
              "v": "ㅕ + ㅣ"
            }
          ]
        }
      ]
    },
    {
      "id": "lesson_4_2",
      "sectionId": "sec_compound_vowels",
      "title": "W tovushli va murakkab diftonglar",
      "subTitle": "ㅘ, ㅙ, ㅚ, ㅝ, ㅞ, ㅟ, ㅢ",
      "steps": [
        {
          "type": "theory",
          "title": "W tovushli Diftonglar",
          "korean": "ㅘ • ㅙ • ㅚ • ㅝ • ㅞ • ㅟ • ㅢ",
          "audio": "와 왜 외 워 웨 위 의",
          "image": "part2/image8.png",
          "explanation": "ㅗ yoki ㅜ unlisiga boshqa unlilar qo'shilganda inglizcha <b>[w]</b> tovushi hosil bo'ladi:",
          "points": [
            "<b>ㅘ [wa]</b> = ㅗ + ㅏ (사과 - olma)",
            "<b>ㅙ [wae]</b> = ㅗ + ㅐ (왜 - nega, 돼지 - cho'chqa)",
            "<b>ㅚ [we]</b> = ㅗ + ㅣ (회사 - kompaniya, diqqat: [we] deb o'qiladi!)",
            "<b>ㅝ [wo]</b> = ㅜ + ㅓ (더워요 - havo issiq)",
            "<b>ㅞ [we]</b> = ㅜ + ㅔ (웨이터 - ofitsiant)",
            "<b>ㅟ [wi]</b> = ㅜ + ㅣ (뒤 - orqa)",
            "<b>ㅢ [ui]</b> = ㅡ + ㅣ (의자 - stul)"
          ]
        },
        {
          "type": "stroke",
          "name": "ㅘ (wa)",
          "canvasLetter": "ㅘ",
          "strokes": [
            "1. ㅗ unlisining qisqa tik chizig'i",
            "2. ㅗ unlisining gorizontal chizig'i",
            "3. ㅏ unlisining uzun tik chizig'i",
            "4. ㅏ unlisining o'ng tomon qisqa chizig'i"
          ]
        },
        {
          "type": "choice",
          "question": "사과 [sagwa - olma] so'zida qaysi diftong ishtirok etgan?",
          "options": [
            "ㅘ (ㅗ + ㅏ)",
            "ㅝ (ㅜ + ㅓ)",
            "ㅢ (ㅡ + ㅣ)",
            "ㅚ (ㅗ + ㅣ)"
          ],
          "correct": 0,
          "explanation": "To'g'ri! 사과 so'zida ㅘ (wa) diftongi qatnashgan: ㅅ + ㅏ + ㄱ + ㅘ = 사과."
        },
        {
          "type": "choice",
          "question": "회사 [hoesa - kompaniya] so'zidagi ㅚ harfi zamonaviy tilda qanday talaffuz qilinadi?",
          "options": [
            "[we] kabi",
            "[oi] kabi",
            "[a] kabi",
            "[yo] kabi"
          ],
          "correct": 0,
          "explanation": "To'g'ri! ㅚ harfi zamonaviy koreys tilida [we] deb talaffuz qilinadi."
        },
        {
          "type": "match",
          "question": "Diftong formulalarini moslang:",
          "pairs": [
            {
              "k": "ㅘ",
              "v": "ㅗ + ㅏ"
            },
            {
              "k": "ㅝ",
              "v": "ㅜ + ㅓ"
            },
            {
              "k": "ㅚ",
              "v": "ㅗ + ㅣ"
            },
            {
              "k": "ㅢ",
              "v": "ㅡ + ㅣ"
            }
          ]
        }
      ]
    },
    {
      "id": "lesson_4_3",
      "sectionId": "sec_compound_vowels",
      "title": "Diftongli so'zlar amaliyoti",
      "subTitle": "사과, 의자, 돼지, 시계",
      "steps": [
        {
          "type": "theory",
          "title": "2-Ma'ruzadagi Diftongli So'zlar",
          "korean": "사과 • 의자 • 돼지 • 회사 • 과자",
          "audio": "사과 의자 돼지 회사 과자",
          "image": "part2/image19.png",
          "explanation": "Taqdimotda o'rganilgan asosiy diftongli so'zlar bilan tanishing:",
          "points": [
            "<b>사과 [sagwa]</b> — Olma (ㅘ diftongi)",
            "<b>의자 [uija]</b> — Stul (ㅢ diftongi)",
            "<b>돼지 [dwaeji]</b> — Cho'chqa (ㅙ diftongi)",
            "<b>회사 [hoesa]</b> — Kompaniya / Ishxona (ㅚ diftongi)",
            "<b>과자 [gwaja]</b> — Pechene / Qarsildoq (ㅘ diftongi)"
          ]
        },
        {
          "type": "listening",
          "question": "Eshitgan so'zingizni toping:",
          "audio": "사과",
          "options": [
            "사과 (sagwa - olma)",
            "수박 (subak - tarvuz)",
            "오이 (oi - bodring)",
            "포도 (podo - uzum)"
          ],
          "correct": 0,
          "explanation": "To'g'ri! Audio talaffuzi: 사과 (olma)."
        },
        {
          "type": "listening",
          "question": "Eshitgan so'zingizni toping:",
          "audio": "의자",
          "options": [
            "의자 (uija - stul)",
            "모자 (moja - shapka)",
            "바지 (baji - shim)",
            "휴지 (hyuji - salfetka)"
          ],
          "correct": 0,
          "explanation": "To'g'ri! Audio talaffuzi: 의자 (stul)."
        },
        {
          "type": "builder",
          "question": "'Olma' so'zini bo'g'inlardan tuzing:",
          "target": "사과",
          "syllables": [
            "사",
            "과"
          ],
          "distractors": [
            "소",
            "고",
            "오"
          ],
          "explanation": "사 + 과 = 사과 (Olma).",
          "targetWord": "사과"
        },
        {
          "type": "builder",
          "question": "'Stul' so'zini bo'g'inlardan tuzing:",
          "target": "의자",
          "syllables": [
            "의",
            "자"
          ],
          "distractors": [
            "이",
            "모",
            "차"
          ],
          "explanation": "의 + 자 = 의자 (Stul).",
          "targetWord": "의자"
        },
        {
          "type": "match",
          "question": "So'zlarni ma'nolari bilan moslang:",
          "pairs": [
            {
              "k": "사과",
              "v": "Olma"
            },
            {
              "k": "의자",
              "v": "Stul"
            },
            {
              "k": "돼지",
              "v": "Cho'chqa"
            },
            {
              "k": "회사",
              "v": "Kompaniya"
            }
          ]
        }
      ]
    },
    {
      "id": "lesson_5_1",
      "sectionId": "sec_double_consonants",
      "title": "5 ta Juft Undosh (Ssangjaeum)",
      "subTitle": "ㄲ, ㄸ, ㅃ, ㅆ, ㅉ",
      "steps": [
        {
          "type": "theory",
          "title": "Juft Undoshlar (쌍자음)",
          "korean": "ㄲ • ㄸ • ㅃ • ㅆ • ㅉ",
          "audio": "쌍기역 쌍디귿 쌍비읍 쌍시옷 쌍지읒",
          "image": "part2/image13.png",
          "explanation": "Koreys tilida <b>5 ta juft undosh</b> bor. Ular ikkita bir xil undoshni yonma-yon yozish orqali yasaladi va <b>zarbli, bo'g'iq, nafas chiqarmasdan qattiq</b> aytiladi:",
          "points": [
            "<b>ㄲ [kk]</b> — 쌍기역 (ssang-giyeok) — masalan: 꼬리 (dum), 토끼 (quyon)",
            "<b>ㄸ [tt]</b> — 쌍디귿 (ssang-digeut) — masalan: 떡 (tteok)",
            "<b>ㅃ [pp]</b> — 쌍비읍 (ssang-bieup) — masalan: 오빠 (oppa - aka)",
            "<b>ㅆ [ss]</b> — 쌍시옷 (ssang-siot) — masalan: 싸다 (ssada - arzon)",
            "<b>ㅉ [jj]</b> — 쌍지읒 (ssang-jieut) — masalan: 찌개 (jjigae - sho'rva)"
          ]
        },
        {
          "type": "stroke",
          "name": "ㄲ (ssang-giyeok)",
          "canvasLetter": "ㄲ",
          "strokes": [
            "1. Chapdagi birinchi ㄱ (burchak chiziq)",
            "2. O'ngdagi ikkinchi ㄱ (burchak chiziq)"
          ]
        },
        {
          "type": "stroke",
          "name": "ㅃ (ssang-bieup)",
          "canvasLetter": "ㅃ",
          "strokes": [
            "1. Chapdagi ㅂ (ikkita tik chiziq va ikkita yotiq chiziq)",
            "2. O'ngdagi ㅂ (ikkita tik chiziq va ikkita yotiq chiziq)"
          ]
        },
        {
          "type": "choice",
          "question": "Koreys tilida nechta juft undosh (쌍자음) mavjud?",
          "options": [
            "5 ta (ㄲ, ㄸ, ㅃ, ㅆ, ㅉ)",
            "3 ta",
            "7 ta",
            "10 ta"
          ],
          "correct": 0,
          "explanation": "To'g'ri! Koreys tilida jami 5 ta juft undosh bor."
        },
        {
          "type": "match",
          "question": "Juft undoshlar nomini moslang:",
          "pairs": [
            {
              "k": "ㄲ",
              "v": "쌍기역 (ssang-giyeok)"
            },
            {
              "k": "ㄸ",
              "v": "쌍디귿 (ssang-digeut)"
            },
            {
              "k": "ㅃ",
              "v": "쌍비읍 (ssang-bieup)"
            },
            {
              "k": "ㅉ",
              "v": "쌍지읒 (ssang-jieut)"
            }
          ]
        }
      ]
    },
    {
      "id": "lesson_5_2",
      "sectionId": "sec_double_consonants",
      "title": "Juft va oddiy undoshlar farqi",
      "subTitle": "토끼, 꼬리, 찌개, 오빠",
      "steps": [
        {
          "type": "theory",
          "title": "Oddiy, Portlovchi va Juft Undoshlar Qiyosi",
          "korean": "ㄱ vs ㅋ vs ㄲ",
          "audio": "기역 키읔 쌍기역",
          "image": "part2/image14.png",
          "explanation": "Koreys tilida undoshlar 3 xil kuchlanish darajasiga ega:",
          "points": [
            "1. <b>Oddiy (Oddiy talaffuz)</b>: ㄱ [k/g], ㄷ [t/d], ㅂ [p/b], ㅈ [ch/j]",
            "2. <b>Nafasli / Portlovchi (Kuchli havo bilan)</b>: ㅋ [kʰ], ㅌ [tʰ], ㅍ [pʰ], ㅊ [chʰ]",
            "3. <b>Juft / Qattiq (Bo'g'iq, havo chiqmaydi)</b>: ㄲ [kk], ㄸ [tt], ㅃ [pp], ㅉ [jj]"
          ]
        },
        {
          "type": "listening",
          "question": "Eshitgan so'zingizni tanlang:",
          "audio": "토끼",
          "options": [
            "토끼 (tokki - quyon)",
            "고기 (gogi - go'sht)",
            "포도 (podo - uzum)",
            "모자 (moja - shapka)"
          ],
          "correct": 0,
          "explanation": "To'g'ri! 토끼 so'zida ㄲ juft undoshi bor."
        },
        {
          "type": "listening",
          "question": "Eshitgan so'zingizni tanlang:",
          "audio": "찌개",
          "options": [
            "찌개 (jjigae - quyuq sho'rva)",
            "치마 (chima - yubka)",
            "가게 (gage - do'kon)",
            "지도 (jido - xarita)"
          ],
          "correct": 0,
          "explanation": "To'g'ri! 찌개 so'zi ㅉ juft undoshi va ㅐ diftongi bilan yoziladi."
        },
        {
          "type": "builder",
          "question": "'Quyon' so'zini bo'g'inlardan tuzing:",
          "target": "토끼",
          "syllables": [
            "토",
            "끼"
          ],
          "distractors": [
            "고",
            "기",
            "도"
          ],
          "explanation": "토 + 끼 = 토끼 (Quyon).",
          "targetWord": "토끼"
        },
        {
          "type": "builder",
          "question": "'Aka' (qiz bola uchun) so'zini tuzing:",
          "target": "오빠",
          "syllables": [
            "오",
            "빠"
          ],
          "distractors": [
            "아",
            "바",
            "마"
          ],
          "explanation": "오 + 빠 = 오빠 (Oppa - aka).",
          "targetWord": "오빠"
        },
        {
          "type": "match",
          "question": "Juft undoshli so'zlarni moslang:",
          "pairs": [
            {
              "k": "토끼",
              "v": "Quyon"
            },
            {
              "k": "꼬리",
              "v": "Dum"
            },
            {
              "k": "오빠",
              "v": "Aka (qizlar uchun)"
            },
            {
              "k": "찌개",
              "v": "Sho'rva (jjigae)"
            }
          ]
        }
      ]
    },
    {
      "id": "lesson_6_1",
      "sectionId": "sec_syllables_batchim",
      "title": "Bo'g'in yasalishi (음절)",
      "subTitle": "V, CV tik, CV yotiq",
      "steps": [
        {
          "type": "theory",
          "title": "Bo'g'in (음절) Qanday Yasaladi?",
          "korean": "자음 + 모음 = 음절",
          "audio": "자음과 모음",
          "image": "part2/image15.png",
          "explanation": "Koreys tilida harflar alohida-alohida yozilmaydi, balki <b>kvadrat shaklidagi bo'g'inlar (음절)</b> holida birlashadi:",
          "points": [
            "<b>1. V (Faqat unli)</b>: So'z unli bilan boshlansa, har doim oldiga ovozsiz <b>'ㅇ'</b> qo'yiladi (오, 이, 아이, 오이).",
            "<b>2. CV (Undosh + Tik unli)</b>: Tik unlilar (ㅏ, ㅑ, ㅓ, ㅕ, ㅣ, ㅐ, ㅔ) undoshning <b>O'NG tomoniga</b> yoziladi (가, 나, 차, 허리).",
            "<b>3. CV (Undosh + Yotiq unli)</b>: Yotiq unlilar (ㅗ, ㅛ, ㅜ, ㅠ, ㅡ) undoshning <b>PASTIGA</b> yoziladi (소, 무, 포, 도)."
          ]
        },
        {
          "type": "choice",
          "question": "Agar so'z unli harf bilan boshlansa, uning oldiga qaysi harf yoziladi?",
          "options": [
            "Tovushsiz 'ㅇ' (ieung)",
            "Harf yozilmaydi, unlining o'zi yoziladi",
            "'ㅎ' harfi",
            "'ㄱ' harfi"
          ],
          "correct": 0,
          "explanation": "To'g'ri! So'z unli bilan boshlanganda ovozsiz 'ㅇ' harfi to'ldiruvchi (dummy) sifatida yoziladi (masalan: 아, 오, 이)."
        },
        {
          "type": "choice",
          "question": "Yotiq unlilar (ㅗ, ㅛ, ㅜ, ㅠ, ㅡ) undosh harfning qayeriga yoziladi?",
          "options": [
            "Undoshning tagiga (pastiga)",
            "Undoshning o'ng tomoniga",
            "Undoshning tepasiga",
            "Undoshning chap tomoniga"
          ],
          "correct": 0,
          "explanation": "To'g'ri! Yotiq unlilar doimo undosh harfning ostiga/pastiga yoziladi (masalan: 소, 무)."
        },
        {
          "type": "choice",
          "question": "소 [so - sigir] so'zining tuzilishi qaysi qolipga mos keladi?",
          "options": [
            "Undosh ustida + Yotiq unli tagida (C ustida / V ostida)",
            "Undosh chapda + Tik unli o'ngda (C + V)",
            "Faqat unli (V)",
            "Undosh + Unli + Undosh"
          ],
          "correct": 0,
          "explanation": "To'g'ri! ㅅ tepada, ㅗ unlisi esa uning ostida turadi."
        },
        {
          "type": "match",
          "question": "Bo'g'in turi va so'zlarni moslang:",
          "pairs": [
            {
              "k": "아이",
              "v": "Faqat unli (V: ㅇ+ㅏ, ㅇ+ㅣ)"
            },
            {
              "k": "나무",
              "v": "Undosh + Unli (CV)"
            },
            {
              "k": "소",
              "v": "Undosh ustida + Yotiq unli ostida"
            },
            {
              "k": "차",
              "v": "Undosh chapda + Tik unli o'ngda"
            }
          ]
        }
      ]
    },
    {
      "id": "lesson_6_2",
      "sectionId": "sec_syllables_batchim",
      "title": "Pastki undosh (Batchim)",
      "subTitle": "VC, CVC (집, 산, 공, 물, 입)",
      "steps": [
        {
          "type": "theory",
          "title": "Batchim (받침) — Pastki Undosh Nima?",
          "korean": "받침 (Batchim)",
          "audio": "받침",
          "image": "part2/image23.png",
          "explanation": "Bo'g'inning eng pastki qavatida keladigan undosh harf <b>받침 [Batchim]</b> deyiladi (ma'nosi 'tayanch / suyanish'):",
          "points": [
            "<b>VC qolipi</b>: Unli + Pastdagi undosh — masalan: <b>입 [ip]</b> (og'iz), <b>열 [yeol]</b> (o'n), <b>음 [eum]</b> (tovush).",
            "<b>CVC tik qolipi</b>: Undosh + Tik unli + Batchim — masalan: <b>집 [jip]</b> (uy), <b>산 [san]</b> (tog').",
            "<b>CVC yotiq qolipi</b>: Undosh + Yotiq unli + Batchim — masalan: <b>공 [gong]</b> (koptok/shar), <b>물 [mul]</b> (suv)."
          ]
        },
        {
          "type": "choice",
          "question": "산 [san - tog'] so'zida qaysi harf batchim (pastki undosh) vazifasini bajaradi?",
          "options": [
            "ㄴ (nieun)",
            "ㅅ (siot)",
            "ㅏ (a)",
            "ㅇ (ieung)"
          ],
          "correct": 0,
          "explanation": "To'g'ri! ㅅ boshlang'ich undosh, ㅏ unli, ㄴ esa eng pastdagi batchimdir: ㅅ + ㅏ + ㄴ = 산."
        },
        {
          "type": "choice",
          "question": "물 [mul - suv] so'zidagi batchim qaysi harf?",
          "options": [
            "ㄹ (rieul)",
            "ㅁ (mieum)",
            "ㅜ (u)",
            "ㅂ (bieup)"
          ],
          "correct": 0,
          "explanation": "To'g'ri! ㅁ tepada, ㅜ o'rtada, pastki qavatdagi ㄹ esa batchimdir: ㅁ + ㅜ + ㄹ = 물."
        },
        {
          "type": "listening",
          "question": "Eshitgan so'zingizni toping:",
          "audio": "집",
          "options": [
            "집 (jip - uy)",
            "산 (san - tog')",
            "물 (mul - suv)",
            "공 (gong - shar/koptok)"
          ],
          "correct": 0,
          "explanation": "To'g'ri! Audio talaffuzi: 집 (jip - uy)."
        },
        {
          "type": "listening",
          "question": "Eshitgan so'zingizni toping:",
          "audio": "물",
          "options": [
            "물 (mul - suv)",
            "불 (bul - olov)",
            "달 (dal - oy)",
            "발 (bal - oyoq)"
          ],
          "correct": 0,
          "explanation": "To'g'ri! Audio talaffuzi: 물 (mul - suv)."
        },
        {
          "type": "match",
          "question": "Batchimli so'zlarni ma'nolari bilan moslang:",
          "pairs": [
            {
              "k": "집",
              "v": "Uy / Xonadon"
            },
            {
              "k": "산",
              "v": "Tog'"
            },
            {
              "k": "물",
              "v": "Suv"
            },
            {
              "k": "공",
              "v": "Koptok / Nol"
            }
          ]
        }
      ]
    },
    {
      "id": "lesson_6_3",
      "sectionId": "sec_syllables_batchim",
      "title": "Xayrlashuv odobi & 2-ma'ruza finali",
      "subTitle": "안녕히 가세요 vs 안녕히 계세요",
      "steps": [
        {
          "type": "theory",
          "title": "Koreys Tilida Xayrlashish Odobi",
          "korean": "안녕히 가세요 • 안녕히 계세요",
          "audio": "안녕히 가세요 안녕히 계세요",
          "image": "part2/image26.png",
          "explanation": "Koreys tilida xayrlashish ikki xil bo'lib, o'zbek tiliga ikkalasi ham 'Xayr' deb tarjima qilinsa-da, vaziyatiga ko'ra farqlanadi:",
          "points": [
            "<b>안녕히 가세요 [Annyeonghi gaseyo]</b> — 'Yaxshi boring / Eson-omon boring'. <b>Ketayotgan odamga</b> nisbatan aytiladi (fe'l: 가다 - bormoq/ketmoq).",
            "<b>안녕히 계세요 [Annyeonghi gyeseyo]</b> — 'Yaxshi qoling / Tinch o'tiring'. <b>Joyida qolayotgan odamga</b> (mezbonga) aytiladi (fe'l: 계시다 - qolmoq/turmoq).",
            "<b>Masalan</b>: Siz mehmondorchilikdan chiqib ketayotganda uy egasiga '안녕히 계세요' deysiz, uy egasi esa sizga '안녕히 가세요' deydi!"
          ]
        },
        {
          "type": "choice",
          "question": "Agar siz do'stingizning uyiga mehmonga bordingiz va ketayotgan bo'lsangiz, uyida qolayotgan do'stingizga nima deysiz?",
          "options": [
            "안녕히 계세요 (Yaxshi qoling)",
            "안녕히 가세요 (Yaxshi boring)",
            "안녕하세요",
            "수고하셨어요"
          ],
          "correct": 0,
          "explanation": "To'g'ri! Qoluvchi insonga '안녕히 계세요' (Yaxshi qoling) deb xayrlashiladi."
        },
        {
          "type": "choice",
          "question": "Agar do'stingiz sizning uyingizdan chiqib ketayotgan bo'lsa, ketayotgan do'stingizga nima deysiz?",
          "options": [
            "안녕히 가세요 (Yaxshi boring)",
            "안녕히 계세요 (Yaxshi qoling)",
            "안녕하세요",
            "반갑습니다"
          ],
          "correct": 0,
          "explanation": "To'g'ri! Ketayotgan shaxsga '안녕히 가세요' (Yaxshi boring) deyiladi."
        },
        {
          "type": "builder",
          "question": "Ketayotgan mehmonga aytiladigan xayrlashuv iborasini tuzing:",
          "target": "안녕히가세요",
          "syllables": [
            "안",
            "녕",
            "히",
            "가",
            "세",
            "요"
          ],
          "distractors": [
            "계",
            "하"
          ],
          "explanation": "안녕히 가세요 — Yaxshi boring!",
          "targetWord": "안녕히가세요"
        },
        {
          "type": "builder",
          "question": "Joyida qolayotgan mehmonga aytiladigan xayrlashuv iborasini tuzing:",
          "target": "안녕히계세요",
          "syllables": [
            "안",
            "녕",
            "히",
            "계",
            "세",
            "요"
          ],
          "distractors": [
            "가",
            "요"
          ],
          "explanation": "안녕히 계세요 — Yaxshi qoling!",
          "targetWord": "안녕히계세요"
        },
        {
          "type": "theory",
          "title": "2-Ma'ruza Muvaffaqiyatli Yakunlandi!",
          "korean": "수고하셨어요!",
          "audio": "수고하셨어요",
          "image": "part2/image26.png",
          "explanation": "<b>수고하셨어요! [Sugohasyeosseoyo!]</b> — Bugun ham ajoyib mehnat qildingiz! Siz Hangul alifbosining barcha 40 ta harfini (oddiy va diftong unlilar, oddiy va juft undoshlar), bo'g'in yasash qoidalarini, batchimni hamda kundalik zarur 60 dan ortiq so'zlarni o'zlashtirdingiz.",
          "points": [
            "Jami harflar: <b>40 ta</b> (21 unli + 19 undosh)",
            "Bo'g'in turlari: <b>V, CV tik, CV yotiq, VC, CVC tik, CVC yotiq</b>",
            "Xayrlashuv: <b>안녕히 가세요</b> va <b>안녕히 계세요</b>"
          ]
        }
      ]
    }
  ],
  "compoundVowels": [
    {
      "char": "ㅐ",
      "name": "애",
      "sound": "ae / e",
      "rom": "ae",
      "formula": "ㅏ + ㅣ = ㅐ",
      "uz": "Ochiqroq 'E' tovushi (og'iz kengroq ochiladi)",
      "strokeCount": 3,
      "order": [
        "1. Chap tik chiziq",
        "2. O'rtadagi qisqa gorizontal chiziq",
        "3. O'ngdagi tik chiziq"
      ],
      "example": "배 (bae - nok/qorin)"
    },
    {
      "char": "ㅒ",
      "name": "얘",
      "sound": "yae",
      "rom": "yae",
      "formula": "ㅑ + ㅣ = ㅒ",
      "uz": "'YAE' tovushi",
      "strokeCount": 4,
      "order": [
        "1. Chap tik chiziq",
        "2. Yuqori qisqa chiziq",
        "3. Pastki qisqa chiziq",
        "4. O'ngdagi tik chiziq"
      ],
      "example": "얘기 (yaegi - hikoya/suhbat)"
    },
    {
      "char": "ㅔ",
      "name": "에",
      "sound": "e",
      "rom": "e",
      "formula": "ㅓ + ㅣ = ㅔ",
      "uz": "Yopiqroq 'E' tovushi (o'zbekcha oddiy 'e')",
      "strokeCount": 3,
      "order": [
        "1. Chapdagi qisqa chiziq",
        "2. Tik chiziq",
        "3. O'ngdagi tik chiziq"
      ],
      "example": "가게 (gage - do'kon)"
    },
    {
      "char": "ㅖ",
      "name": "예",
      "sound": "ye",
      "rom": "ye",
      "formula": "ㅕ + ㅣ = ㅖ",
      "uz": "'YE' tovushi",
      "strokeCount": 4,
      "order": [
        "1. Yuqori chap qisqa chiziq",
        "2. Pastki chap qisqa chiziq",
        "3. Tik chiziq",
        "4. O'ngdagi tik chiziq"
      ],
      "example": "시계 (sigye - soat)"
    },
    {
      "char": "ㅘ",
      "name": "와",
      "sound": "wa",
      "rom": "wa",
      "formula": "ㅗ + ㅏ = ㅘ",
      "uz": "'WA' tovushi (dudoqlangan U + A birikmasi)",
      "strokeCount": 4,
      "order": [
        "1. Qisqa tik chiziq",
        "2. Yotiq gorizontal chiziq",
        "3. Tik chiziq",
        "4. O'ng qisqa chiziq"
      ],
      "example": "사과 (sagwa - olma)"
    },
    {
      "char": "ㅙ",
      "name": "왜",
      "sound": "wae",
      "rom": "wae",
      "formula": "ㅗ + ㅐ = ㅙ",
      "uz": "'WAE' tovushi (U + AE birikmasi)",
      "strokeCount": 5,
      "order": [
        "1. Qisqa tik",
        "2. Gorizontal yotiq",
        "3. Tik chiziq",
        "4. O'rta gorizontal",
        "5. O'ng tik chiziq"
      ],
      "example": "돼지 (dwaeji - cho'chqa)"
    },
    {
      "char": "ㅚ",
      "name": "외",
      "sound": "oe / we",
      "rom": "oe",
      "formula": "ㅗ + ㅣ = ㅚ",
      "uz": "Zamonaviy tilda 'WE' deb talaffuz qilinadi",
      "strokeCount": 3,
      "order": [
        "1. Qisqa tik chiziq",
        "2. Gorizontal yotiq chiziq",
        "3. O'ngdagi tik chiziq"
      ],
      "example": "회사 (hoesa - firma/kompaniya)"
    },
    {
      "char": "ㅝ",
      "name": "워",
      "sound": "wo",
      "rom": "wo",
      "formula": "ㅜ + ㅓ = ㅝ",
      "uz": "'WO' tovushi (U + O' birikmasi)",
      "strokeCount": 4,
      "order": [
        "1. Gorizontal yotiq chiziq",
        "2. Pastga tik chiziq",
        "3. Qisqa gorizontal",
        "4. Tik chiziq"
      ],
      "example": "더워요 (deowoyo - issiq)"
    },
    {
      "char": "ㅞ",
      "name": "웨",
      "sound": "we",
      "rom": "we",
      "formula": "ㅜ + ㅔ = ㅞ",
      "uz": "'WE' tovushi (U + E birikmasi)",
      "strokeCount": 5,
      "order": [
        "1. Gorizontal yotiq chiziq",
        "2. Pastga tik chiziq",
        "3. Qisqa gorizontal",
        "4. Tik chiziq",
        "5. O'ng tik chiziq"
      ],
      "example": "웨이터 (weiteo - ofitsiant)"
    },
    {
      "char": "ㅟ",
      "name": "위",
      "sound": "wi",
      "rom": "wi",
      "formula": "ㅜ + ㅣ = ㅟ",
      "uz": "'WI' tovushi (U + I birikmasi)",
      "strokeCount": 3,
      "order": [
        "1. Gorizontal yotiq chiziq",
        "2. Pastga tik chiziq",
        "3. O'ngdagi tik chiziq"
      ],
      "example": "뒤 (dwi - orqa)"
    },
    {
      "char": "ㅢ",
      "name": "의",
      "sound": "ui / eui",
      "rom": "ui",
      "formula": "ㅡ + ㅣ = ㅢ",
      "uz": "Tishlar jipslashgan 'I' va 'I' birikmasi (UI)",
      "strokeCount": 2,
      "order": [
        "1. Gorizontal to'g'ri chiziq",
        "2. O'ng tomondan tik chiziq"
      ],
      "example": "의자 (uija - stul)"
    }
  ],
  "doubleConsonants": [
    {
      "char": "ㄲ",
      "name": "쌍기역 (ssang-giyeok)",
      "sound": "kk",
      "rom": "kk",
      "organ": "Ikkita ㄱ yonma-yon",
      "uz": "Zarbli, bo'g'iq, qattiq 'KK' (nafas chiqarmay aytiladi)",
      "strokes": 2,
      "example": "꼬리 (kkori - dum)"
    },
    {
      "char": "ㄸ",
      "name": "쌍디귿 (ssang-digeut)",
      "sound": "tt",
      "rom": "tt",
      "organ": "Ikkita ㄷ yonma-yon",
      "uz": "Zarbli, bo'g'iq, qattiq 'TT'",
      "strokes": 4,
      "example": "떡 (tteok - guruch keki)"
    },
    {
      "char": "ㅃ",
      "name": "쌍비읍 (ssang-bieup)",
      "sound": "pp",
      "rom": "pp",
      "organ": "Ikkita ㅂ yonma-yon",
      "uz": "Zarbli, labdan portlovchi qattiq 'PP'",
      "strokes": 8,
      "example": "오빠 (oppa - aka)"
    },
    {
      "char": "ㅆ",
      "name": "쌍시옷 (ssang-siot)",
      "sound": "ss",
      "rom": "ss",
      "organ": "Ikkita ㅅ yonma-yon",
      "uz": "Zarbli, kuchli, jarangdor 'SS'",
      "strokes": 4,
      "example": "싸다 (ssada - arzon)"
    },
    {
      "char": "ㅉ",
      "name": "쌍지읒 (ssang-jieut)",
      "sound": "jj",
      "rom": "jj",
      "organ": "Ikkita ㅈ yonma-yon",
      "uz": "Zarbli, bo'g'iq 'JJ / CHCH'",
      "strokes": 4,
      "example": "찌개 (jjigae - sho'rva)"
    }
  ]
};
