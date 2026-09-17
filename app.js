// ==========================================
// HANGEUL SAYOHATI (한글 여행) - APP ENGINE
// Modern, responsive, zero-emoji, clean architecture
// ==========================================

// --- 1. CLEAN STATIC SVG ICONS (NO EMOJIS) ---
const ICONS = {
  play: `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="6 3 20 12 6 21 6 3"></polygon></svg>`,
  lock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
  heart: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
  speaker: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>`,
  timer: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 8 14"></polyline></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
  trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
  alert: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`
};

// --- 2. AUDIO SYNTHESIZER & SPEECH TTS ---
class SoundManager {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  click() {
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(440, this.ctx.currentTime);
    gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);
  }

  correct() {
    this.init();
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc1.type = "triangle";
    osc2.type = "sine";

    osc1.frequency.setValueAtTime(523.25, t); // C5
    osc1.frequency.setValueAtTime(659.25, t + 0.1); // E5
    osc2.frequency.setValueAtTime(1046.50, t + 0.15); // C6

    gain.gain.setValueAtTime(0.15, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.45);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(this.ctx.destination);

    osc1.start(t);
    osc2.start(t + 0.1);
    osc1.stop(t + 0.45);
    osc2.stop(t + 0.45);
  }

  wrong() {
    this.init();
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(220, t);
    osc.frequency.setValueAtTime(164.81, t + 0.12);

    gain.gain.setValueAtTime(0.12, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.35);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(t);
    osc.stop(t + 0.35);
  }

  fanfare() {
    this.init();
    if (!this.ctx) return;
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const st = this.ctx.currentTime + (i * 0.1);
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, st);
      gain.gain.setValueAtTime(0.15, st);
      gain.gain.exponentialRampToValueAtTime(0.001, st + 0.35);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(st);
      osc.stop(st + 0.35);
    });
  }
}

const sfx = new SoundManager();

function speakKorean(text, rate = 0.85) {
  if (!("speechSynthesis" in window)) {
    sfx.click();
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ko-KR";
  utterance.rate = rate;

  const voices = window.speechSynthesis.getVoices();
  const koVoice = voices.find(v => v.lang.startsWith("ko"));
  if (koVoice) utterance.voice = koVoice;

  window.speechSynthesis.speak(utterance);
}

// Ensure voices preloaded
if ("speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
}

// --- 3. APPLICATION STATE ---
class AppState {
  constructor() {
    this.stars = 0;
    this.hearts = 5;
    this.maxHearts = 5;
    this.completedLessons = [];
    this.unlockedLessons = ["lesson_1_1"];
    this.freeMode = true; // Default true: All lessons accessible immediately
    this.activeTab = "path";
    this.load();
  }

  load() {
    try {
      const saved = localStorage.getItem("hangeul_duo_state_v2");
      if (saved) {
        const obj = JSON.parse(saved);
        this.stars = obj.stars || 0;
        this.hearts = obj.hearts !== undefined ? obj.hearts : 5;
        this.completedLessons = obj.completedLessons || [];
        this.unlockedLessons = obj.unlockedLessons || ["lesson_1_1"];
        if (obj.freeMode !== undefined) this.freeMode = obj.freeMode;
      }
    } catch (e) {
      console.warn("Local storage read error", e);
    }
  }

  save() {
    try {
      localStorage.setItem("hangeul_duo_state_v2", JSON.stringify({
        stars: this.stars,
        hearts: this.hearts,
        completedLessons: this.completedLessons,
        unlockedLessons: this.unlockedLessons,
        freeMode: this.freeMode
      }));
    } catch (e) {
      console.warn("Local storage save error", e);
    }
    this.updateHeaderStats();
  }

  addStars(n) {
    this.stars += n;
    this.save();
  }

  loseHeart() {
    if (this.hearts > 0) {
      this.hearts--;
      this.save();
    }
    return this.hearts;
  }

  refillHearts() {
    this.hearts = this.maxHearts;
    this.save();
    sfx.correct();
    const modal = document.getElementById("heartsModal");
    if (modal) modal.style.display = "none";
  }

  completeLesson(id) {
    if (!this.completedLessons.includes(id)) {
      this.completedLessons.push(id);
    }
    const allIds = HANGEUL_DATA.lessons.map(l => l.id);
    const currIdx = allIds.indexOf(id);
    if (currIdx !== -1 && currIdx + 1 < allIds.length) {
      const nextId = allIds[currIdx + 1];
      if (!this.unlockedLessons.includes(nextId)) {
        this.unlockedLessons.push(nextId);
      }
    }
    this.save();
  }

  updateHeaderStats() {
    const starEl = document.getElementById("headerStarCount");
    const progEl = document.getElementById("headerProgressCount");
    const heartsEl = document.getElementById("headerHeartsCount");

    const total = HANGEUL_DATA.lessons.length;
    const completed = this.completedLessons.length;

    if (starEl) starEl.innerText = this.stars;
    if (progEl) progEl.innerText = `${completed}/${total}`;
    if (heartsEl) heartsEl.innerText = `${this.hearts}/${this.maxHearts}`;
  }
}

const state = new AppState();

// --- 4. SEAMLESS TAB NAVIGATION (NO POPUP MODALS) ---
function switchTab(tabName) {
  sfx.click();
  state.activeTab = tabName;

  // Update tab buttons
  document.querySelectorAll(".segment-btn").forEach(btn => {
    const isTarget = btn.dataset.tab === tabName;
    btn.classList.toggle("active", isTarget);
    btn.setAttribute("aria-selected", isTarget ? "true" : "false");
  });

  // Switch view sections
  const tabs = ["path", "soundboard", "wordbook", "syllabus"];
  tabs.forEach(t => {
    const viewEl = document.getElementById(`view-${t}`);
    if (viewEl) {
      viewEl.style.display = t === tabName ? "block" : "none";
      if (t === tabName) viewEl.classList.add("active");
    }
  });

  window.scrollTo({ top: 0, behavior: "smooth" });

  if (tabName === "soundboard") renderSoundboard();
  if (tabName === "wordbook") renderWordbook();
  if (tabName === "syllabus") renderSyllabus();
}

// --- 5. RENDER LEARNING PATH (ROADMAP) ---
function renderPath() {
  const container = document.getElementById("pathSectionsContainer");
  if (!container) return;

  let html = "";

  HANGEUL_DATA.sections.forEach(sec => {
    const secLessons = HANGEUL_DATA.lessons.filter(l => sec.lessonIds.includes(l.id));
    const completedCount = secLessons.filter(l => state.completedLessons.includes(l.id)).length;
    const totalCount = secLessons.length;

    let nodesHtml = "";
    secLessons.forEach((lesson, idx) => {
      const isCompleted = state.completedLessons.includes(lesson.id);
      const isUnlocked = state.freeMode || state.unlockedLessons.includes(lesson.id);

      let btnClass = "locked";
      let btnIcon = ICONS.lock;

      if (isCompleted) {
        btnClass = "completed";
        btnIcon = ICONS.check;
      } else if (isUnlocked) {
        btnClass = "unlocked";
        btnIcon = ICONS.play;
      }

      // Bold connecting line between sequential nodes
      if (idx > 0) {
        const prevLesson = secLessons[idx - 1];
        const prevCompleted = state.completedLessons.includes(prevLesson.id);
        nodesHtml += `
          <div class="path-connector ${prevCompleted ? "completed" : ""}"></div>
        `;
      }

      nodesHtml += `
        <div class="node-item">
          <button class="node-button ${btnClass}" ${!isUnlocked ? "disabled" : ""} onclick="startLesson('${lesson.id}')" title="${lesson.title}">
            ${btnIcon}
          </button>
          <div class="node-title">${lesson.title}</div>
          <div class="node-subtitle">${lesson.subTitle}</div>
        </div>
      `;
    });

    html += `
      <div class="section-block">
        <div class="section-head">
          <div class="section-title-wrap">
            <h2>${sec.title}</h2>
            <span>${sec.korean}</span>
          </div>
          <div class="section-progress-pill">${completedCount}/${totalCount} bajarildi</div>
        </div>
        <div class="nodes-container">
          ${nodesHtml}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  updateFreeModeUI();
}

function toggleFreeMode() {
  sfx.click();
  state.freeMode = !state.freeMode;
  state.save();
  renderPath();
}

function updateFreeModeUI() {
  const box = document.getElementById("freeModeCheckbox");
  const label = document.getElementById("freeModeLabel");
  if (box) {
    box.classList.toggle("checked", state.freeMode);
  }
  if (label) {
    label.innerText = state.freeMode ? "Erkin rejim (Hammasi ochiq)" : "Ketma-ket rejim";
  }
}

// --- 6. RENDER SOUNDBOARD TAB (ALIFBO) ---
let soundboardRendered = false;
let currentAlphabetFilter = "all";

function renderSoundboard() {
  if (soundboardRendered) return;
  soundboardRendered = true;

  const vowelsGrid = document.getElementById("vowelsGrid");
  const compoundVowelsGrid = document.getElementById("compoundVowelsGrid");
  const consonantsGrid = document.getElementById("consonantsGrid");
  const doubleConsonantsGrid = document.getElementById("doubleConsonantsGrid");

  if (vowelsGrid && HANGEUL_DATA.vowels) {
    vowelsGrid.innerHTML = HANGEUL_DATA.vowels.map(v => `
      <div class="soundboard-card" onclick="speakLetter('${v.char}', '${v.name}')" title="${v.uz}">
        <div class="soundboard-char">${v.char}</div>
        <div class="soundboard-rom">[${v.rom}]</div>
        <div class="soundboard-sub">${v.uz}</div>
      </div>
    `).join("");
  }

  if (compoundVowelsGrid && HANGEUL_DATA.compoundVowels) {
    compoundVowelsGrid.innerHTML = HANGEUL_DATA.compoundVowels.map(cv => `
      <div class="soundboard-card" onclick="speakLetter('${cv.char}', '${cv.name}')" title="${cv.formula} • ${cv.uz}">
        <div class="soundboard-char">${cv.char}</div>
        <div class="soundboard-rom">[${cv.sound}]</div>
        <div class="soundboard-sub" style="color: var(--accent-blue); font-weight: 700;">${cv.formula}</div>
      </div>
    `).join("");
  }

  if (consonantsGrid && HANGEUL_DATA.consonants) {
    consonantsGrid.innerHTML = HANGEUL_DATA.consonants.map(c => `
      <div class="soundboard-card" onclick="speakLetter('${c.char}', '${c.name}')" title="${c.organ}">
        <div class="soundboard-char">${c.char}</div>
        <div class="soundboard-rom">[${c.sound}]</div>
        <div class="soundboard-sub">${c.uz}</div>
      </div>
    `).join("");
  }

  if (doubleConsonantsGrid && HANGEUL_DATA.doubleConsonants) {
    doubleConsonantsGrid.innerHTML = HANGEUL_DATA.doubleConsonants.map(dc => `
      <div class="soundboard-card" onclick="speakLetter('${dc.char}', '${dc.name}')" title="${dc.uz}">
        <div class="soundboard-char">${dc.char}</div>
        <div class="soundboard-rom">[${dc.sound}]</div>
        <div class="soundboard-sub" style="color: #b91c1c; font-weight: 700;">${dc.name}</div>
      </div>
    `).join("");
  }
}

function speakLetter(char, name) {
  sfx.click();
  speakKorean(char);
}

function filterAlphabet(filter) {
  sfx.click();
  currentAlphabetFilter = filter;
  document.querySelectorAll("#alphabetFilterRow .filter-pill").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("onclick").includes(`'${filter}'`));
  });

  const vBlock = document.getElementById("vowelsBlock");
  const cvBlock = document.getElementById("compoundVowelsBlock");
  const cBlock = document.getElementById("consonantsBlock");
  const dcBlock = document.getElementById("doubleConsonantsBlock");

  if (vBlock) vBlock.style.display = (filter === "all" || filter === "vowels") ? "block" : "none";
  if (cvBlock) cvBlock.style.display = (filter === "all" || filter === "compounds") ? "block" : "none";
  if (cBlock) cBlock.style.display = (filter === "all" || filter === "consonants") ? "block" : "none";
  if (dcBlock) dcBlock.style.display = (filter === "all" || filter === "doubles") ? "block" : "none";
}

// --- 7. RENDER WORDBOOK TAB (LUG'AT) ---
let wordbookRendered = false;

function renderWordbook(filterQuery = "") {
  wordbookRendered = true;
  const stack = document.getElementById("wordbookStack");
  const countBadge = document.getElementById("wordbookCountBadge");
  const clearBtn = document.getElementById("searchClearBtn");

  if (!stack) return;

  const q = filterQuery.trim().toLowerCase();
  if (clearBtn) clearBtn.style.display = q ? "flex" : "none";

  const filtered = HANGEUL_DATA.words.filter(w => {
    if (!q) return true;
    return w.korean.toLowerCase().includes(q) ||
           w.uzbek.toLowerCase().includes(q) ||
           w.rom.toLowerCase().includes(q) ||
           w.category.toLowerCase().includes(q);
  });

  if (countBadge) {
    countBadge.innerText = `Jami: ${filtered.length} ta so'z`;
  }

  if (filtered.length === 0) {
    stack.innerHTML = `
      <div style="text-align: center; padding: 40px 20px; color: var(--text-muted); background: #ffffff; border: 1px solid var(--border); border-radius: var(--radius-lg);">
        <span class="svg-icon" style="width: 36px; height: 36px; margin-bottom: 10px; color: #a1a1aa;">${ICONS.search}</span>
        <p style="font-weight: 700; font-size: 1.05rem;">So'z topilmadi</p>
        <p style="font-size: 0.85rem; margin-top: 4px;">Boshqa so'z yoki iborani qidirib ko'ring</p>
      </div>
    `;
    return;
  }

  stack.innerHTML = filtered.map(w => {
    const imgSrc = w.image ? `images/${w.image}` : `images/image14.png`;
    return `
      <div class="word-card-row">
        <div class="word-meta">
          <img src="${imgSrc}" class="word-thumb-img" alt="${w.korean}" onerror="this.src='images/image14.png'">
          <div class="word-texts">
            <div class="word-ko-row">
              <span class="word-ko">${w.korean}</span>
              <span class="word-rom">[${w.rom}] • ${w.trans}</span>
            </div>
            <div class="word-uz">${w.uzbek}</div>
            <div class="word-note">${w.note || w.category}</div>
          </div>
        </div>
        <button class="word-audio-btn" onclick="playWordAudio('${w.korean}')" title="Tinglash">
          ${ICONS.speaker}
        </button>
      </div>
    `;
  }).join("");
}

function filterWords(val) {
  renderWordbook(val);
}

function clearWordSearch() {
  const input = document.getElementById("wordSearchInput");
  if (input) {
    input.value = "";
    input.focus();
  }
  renderWordbook("");
}

function playWordAudio(text) {
  sfx.click();
  speakKorean(text);
}

// --- 8. RENDER SYLLABUS TAB (QO'LLANMA) ---
let syllabusRendered = false;

function renderSyllabus() {
  if (syllabusRendered) return;
  syllabusRendered = true;

  const container = document.getElementById("syllabusContentArea");
  if (!container) return;

  const c = HANGEUL_DATA.courseInfo;

  const gradingRows = c.grading.map(g => `
    <tr>
      <td><b>${g.item}</b></td>
      <td style="color: var(--accent-blue); font-weight: 800;">${g.weight}</td>
      <td style="font-size: 0.82rem; color: var(--text-muted);">${g.detail}</td>
    </tr>
  `).join("");

  const scaleRows = c.gradeScale.map(s => `
    <tr>
      <td><b>${s.grade}</b></td>
      <td style="font-weight: 800;">${s.range}</td>
      <td style="font-size: 0.82rem; color: var(--text-muted);">${s.quota}</td>
    </tr>
  `).join("");

  const penaltiesHtml = c.penalties.map(p => `
    <li class="penalty-item">
      <span class="svg-icon" style="width: 16px; height: 16px;">${ICONS.alert}</span>
      <span>${p}</span>
    </li>
  `).join("");

  container.innerHTML = `
    <!-- COURSE INFO CARD -->
    <div class="syllabus-card">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 14px;">
        <div>
          <span class="group-badge">MA'RUZA ASOSLARI</span>
          <h3 style="margin-top: 8px; font-size: 1.35rem;">${c.name} — ${c.subName}</h3>
          <p style="color: var(--text-muted); font-weight: 600; margin-top: 4px;">
            O'qituvchi: <b>${c.teacher}</b> • Xona: <b>${c.office}</b>
          </p>
        </div>
      </div>
    </div>

    <!-- GRADING CRITERIA -->
    <div class="syllabus-card">
      <h3>Baholash Mezonlari (100% Ball)</h3>
      <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 8px;">1-ma'ruzaning 7-slaydidagi rasmiy baholash tartibi:</p>
      <table class="syllabus-table">
        <thead>
          <tr>
            <th>Imtihon turi</th>
            <th>Ulushi</th>
            <th>Tafsilot</th>
          </tr>
        </thead>
        <tbody>
          ${gradingRows}
        </tbody>
      </table>
    </div>

    <!-- STRICT PENALTIES -->
    <div class="syllabus-card">
      <h3 style="color: #b91c1c;">Darsdagi Jarimalar (-2 Ball)</h3>
      <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 4px;">Har bir quyidagi qoidabuzarlik uchun umumiy balldan 2 ball chegiriladi:</p>
      <ul class="penalties-list">
        ${penaltiesHtml}
      </ul>
    </div>

    <!-- GRADE SCALE -->
    <div class="syllabus-card">
      <h3>Baholar Shkalasi (Grade Scale)</h3>
      <table class="syllabus-table">
        <thead>
          <tr>
            <th>Baho</th>
            <th>Oraliq (%)</th>
            <th>Cheklov (Quota)</th>
          </tr>
        </thead>
        <tbody>
          ${scaleRows}
        </tbody>
      </table>
    </div>

    <!-- HANGEUL CREATION HISTORY -->
    <div class="syllabus-card">
      <span class="group-badge">TARIX VA FALSAFA</span>
      <h3 style="margin-top: 8px;">Hangulning Yaratilishi (1443-yil)</h3>
      <p style="font-size: 0.95rem; line-height: 1.6; color: var(--text-main); margin-bottom: 12px;">
        1443-yilda Choson sulolasining 4-hukmdori <b>Qirol Sejong (세종대왕)</b> xalq savodxonligini oshirish maqsadida 24 ta asosiy harfdan iborat Hangul alifbosini yaratdi. Alifbo kitobi <b>훈민정음 [Hunminjeongeum]</b> ("Xalqqa to'g'ri tovushlarni o'rgatish") deb atalgan.
      </p>
      <div style="background: #faf9f6; border: 1px solid var(--border); border-radius: var(--radius-md); padding: 14px;">
        <h4 style="font-weight: 800; margin-bottom: 6px;">Unlilarning 3 Falsafiy Elementi:</h4>
        <ul style="padding-left: 20px; font-size: 0.9rem; font-weight: 600; display: flex; flex-direction: column; gap: 6px;">
          <li><b>• (Cheon / 천)</b> — Dumaloq Osmon (Koinot)</li>
          <li><b>ㅡ (Ji / 지)</b> — Tekis Yer (Zamin)</li>
          <li><b>ㅣ (In / 인)</b> — Tik turgan Inson</li>
        </ul>
      </div>
    </div>

    <!-- 2-MA'RUZA: DIFTONGLAR & JUFT UNDOSHLAR -->
    <div class="syllabus-card">
      <span class="group-badge">2-MA'RUZA ASOSLARI</span>
      <h3 style="margin-top: 8px;">Diftonglar (11 ta) va Juft Undoshlar (5 ta)</h3>
      <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 14px;">
        2-ma'ruzada Hangulning qolgan 16 ta harfi o'rganiladi va alifbo to'liq <b>40 ta harf</b>ga yetadi (21 unli + 19 undosh):
      </p>

      <table class="syllabus-table" style="margin-bottom: 16px;">
        <thead>
          <tr>
            <th>Diftong</th>
            <th>Formulasi</th>
            <th>O'qilishi</th>
            <th>Misol</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><b>ㅐ</b></td><td>ㅏ + ㅣ</td><td>[ae / e]</td><td>배 (bae - nok)</td></tr>
          <tr><td><b>ㅒ</b></td><td>ㅑ + ㅣ</td><td>[yae]</td><td>얘기 (yaegi - suhbat)</td></tr>
          <tr><td><b>ㅔ</b></td><td>ㅓ + ㅣ</td><td>[e]</td><td>가게 (gage - do'kon)</td></tr>
          <tr><td><b>ㅖ</b></td><td>ㅕ + ㅣ</td><td>[ye]</td><td>시계 (sigye - soat)</td></tr>
          <tr><td><b>ㅘ</b></td><td>ㅗ + ㅏ</td><td>[wa]</td><td>사과 (sagwa - olma)</td></tr>
          <tr><td><b>ㅙ</b></td><td>ㅗ + ㅐ</td><td>[wae]</td><td>돼지 (dwaeji - cho'chqa)</td></tr>
          <tr><td><b>ㅚ</b></td><td>ㅗ + ㅣ</td><td>[we]</td><td>회사 (hoesa - firma)</td></tr>
          <tr><td><b>ㅝ</b></td><td>ㅜ + ㅓ</td><td>[wo]</td><td>더워요 (deowoyo - issiq)</td></tr>
          <tr><td><b>ㅞ</b></td><td>ㅜ + ㅔ</td><td>[we]</td><td>웨이터 (weiteo)</td></tr>
          <tr><td><b>ㅟ</b></td><td>ㅜ + ㅣ</td><td>[wi]</td><td>뒤 (dwi - orqa)</td></tr>
          <tr><td><b>ㅢ</b></td><td>ㅡ + ㅣ</td><td>[ui / i]</td><td>의자 (uija - stul)</td></tr>
        </tbody>
      </table>

      <div style="background: #f8fafc; border: 1px solid var(--border); border-radius: var(--radius-md); padding: 14px;">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: #b91c1c;">5 ta Juft Undosh (쌍자음):</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 8px; font-size: 0.88rem;">
          <div><b>ㄲ [kk]</b>: 꼬리 (dum)</div>
          <div><b>ㄸ [tt]</b>: 떡 (tteok)</div>
          <div><b>ㅃ [pp]</b>: 오빠 (aka)</div>
          <div><b>ㅆ [ss]</b>: 싸다 (arzon)</div>
          <div><b>ㅉ [jj]</b>: 찌개 (sho'rva)</div>
        </div>
      </div>
    </div>

    <!-- BO'G'IN TUZILISHI & XAYRLASHISH ODOBI -->
    <div class="syllabus-card">
      <span class="group-badge">2-MA'RUZA ASOSLARI</span>
      <h3 style="margin-top: 8px;">Bo'g'in (음절) Strukturasi va Xayrlashish</h3>
      <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 12px;">
        Koreys tili bo'g'inlarida unli va undoshlar doimo kvadrat shaklida birlashadi:
      </p>

      <ul class="theory-bullet-list" style="margin-bottom: 16px;">
        <li><b>V (Faqat unli)</b>: Oldiga ovozsiz 'ㅇ' qo'yiladi: <b>오</b> (5), <b>이</b> (2), <b>아이</b> (bola).</li>
        <li><b>CV (Tik unli)</b>: Undosh chapda, unli o'ngda: <b>가</b>, <b>나</b>, <b>차</b>, <b>허리</b>.</li>
        <li><b>CV (Yotiq unli)</b>: Undosh tepada, unli ostida: <b>소</b>, <b>무</b>, <b>포도</b>, <b>모자</b>.</li>
        <li><b>VC (Pastki undosh)</b>: Unli ustida, undosh pastda: <b>입</b> (og'iz), <b>열</b> (10), <b>음</b> (tovush).</li>
        <li><b>CVC (Batchim)</b>: Bo'g'in ostida pastki undosh (받침) joylashadi: <b>집</b> (uy), <b>산</b> (tog'), <b>공</b> (koptok), <b>물</b> (suv).</li>
      </ul>

      <div style="background: #fdf8f6; border: 1px solid #fecdd3; border-radius: var(--radius-md); padding: 14px;">
        <h4 style="font-weight: 800; margin-bottom: 8px; color: #9f1239;">Koreyscha Xayrlashish Odobi (Muhim!):</h4>
        <p style="font-size: 0.88rem; line-height: 1.5; color: var(--text-main);">
          • <b>안녕히 가세요 [Annyeonghi gaseyo]</b>: Ketayotgan insonga aytiladi ("Yaxshi boring", fe'l: 가다).<br>
          • <b>안녕히 계세요 [Annyeonghi gyeseyo]</b>: Joyida qolayotgan insonga aytiladi ("Yaxshi qoling", fe'l: 계시다).
        </p>
      </div>
    </div>
  `;
}

// --- 9. EXERCISE RUNNER (DUOLINGO-STYLE INTERACTIVE LEARNING) ---
class ExerciseRunner {
  constructor() {
    this.lesson = null;
    this.stepIndex = 0;
    this.selectedOption = null;
    this.isEvaluating = false;
    this.matchedCount = 0;
    this.builderAnswer = [];
    this.mistakesCount = 0;

    this.view = document.getElementById("exerciseView");
    this.contentEl = document.getElementById("exerciseContent");
    this.progressEl = document.getElementById("exerciseProgressFill");
    this.heartsEl = document.getElementById("exerciseHeartsDisplay");
    this.actionDrawer = document.getElementById("actionDrawer");
    this.feedbackEl = document.getElementById("drawerFeedback");
    this.mainActionBtn = document.getElementById("drawerActionBtn");

    this.initEvents();
  }

  initEvents() {
    const closeBtn = document.getElementById("closeExerciseRunnerBtn");
    if (closeBtn) closeBtn.addEventListener("click", () => this.exit());

    if (this.mainActionBtn) {
      this.mainActionBtn.addEventListener("click", () => this.handleActionClick());
    }

    const closeCelebBtn = document.getElementById("closeCelebBtn");
    if (closeCelebBtn) {
      closeCelebBtn.addEventListener("click", () => {
        const modal = document.getElementById("celebrationModal");
        if (modal) modal.style.display = "none";
        this.exit();
      });
    }

    const refillBtn = document.getElementById("refillBtn");
    if (refillBtn) {
      refillBtn.addEventListener("click", () => state.refillHearts());
    }
  }

  start(lessonId) {
    const lesson = HANGEUL_DATA.lessons.find(l => l.id === lessonId);
    if (!lesson) return;

    this.lesson = lesson;
    this.stepIndex = 0;
    this.mistakesCount = 0;

    this.heartsEl.innerText = state.hearts;
    this.view.style.display = "flex";
    this.renderStep();
  }

  exit() {
    this.view.style.display = "none";
    this.lesson = null;
    renderPath();
  }

  renderStep() {
    const step = this.lesson.steps[this.stepIndex];
    const total = this.lesson.steps.length;
    const pct = (this.stepIndex / total) * 100;
    this.progressEl.style.width = `${pct}%`;

    this.resetDrawer();
    this.selectedOption = null;
    this.builderAnswer = [];
    this.isEvaluating = false;

    let html = "";
    switch (step.type) {
      case "theory":
        html = this.renderTheory(step);
        break;
      case "choice":
        html = this.renderChoice(step);
        break;
      case "listening":
        html = this.renderListening(step);
        break;
      case "match":
        html = this.renderMatch(step);
        break;
      case "builder":
        html = this.renderBuilder(step);
        break;
      case "stroke":
        html = this.renderStroke(step);
        break;
    }

    this.contentEl.innerHTML = html;
    this.bindEvents(step);

    if (step.audio && (step.type === "theory" || step.type === "listening")) {
      setTimeout(() => speakKorean(step.audio), 300);
    }
  }

  renderTheory(step) {
    const points = step.points
      ? `<ul class="theory-bullet-list">${step.points.map(p => `<li>${p}</li>`).join("")}</ul>`
      : "";

    const img = step.image
      ? `<img src="images/${step.image}" class="theory-image-view" alt="Illustration" onerror="this.style.display='none'">`
      : "";

    return `
      <div class="step-box">
        <div class="exercise-badge">NAZARIYA VA TALAFFUZ</div>
        <h2 class="question-text">${step.title}</h2>
        <div class="cool-theory-card">
          <div class="theory-hero-korean">
            <span class="hero-korean-word">${step.korean}</span>
            <button class="audio-btn-pill" onclick="speakKorean('${step.audio || step.korean}')" title="Ovoz chiqarish">
              ${ICONS.speaker}
            </button>
          </div>
          ${img}
          <div class="theory-body-text">${step.explanation}</div>
          ${points}
        </div>
      </div>
    `;
  }

  renderChoice(step) {
    const opts = step.options.map((opt, idx) => `
      <button class="cool-option-btn" data-idx="${idx}">
        <span class="option-key-badge">${idx + 1}</span>
        <span>${opt}</span>
      </button>
    `).join("");

    return `
      <div class="step-box">
        <div class="exercise-badge">TO'G'RI JAVOBNI TANLANG</div>
        <h2 class="question-text">${step.question}</h2>
        <div class="options-stack">
          ${opts}
        </div>
      </div>
    `;
  }

  renderListening(step) {
    const opts = step.options.map((opt, idx) => `
      <button class="cool-option-btn" data-idx="${idx}">
        <span class="option-key-badge">${idx + 1}</span>
        <span>${opt}</span>
      </button>
    `).join("");

    return `
      <div class="step-box" style="text-align: center;">
        <div class="exercise-badge">TINGLAB MOSINI TOPING</div>
        <h2 class="question-text">${step.question}</h2>
        <div style="margin: 20px 0; display: flex; gap: 16px; justify-content: center;">
          <button class="audio-btn-pill large" onclick="speakKorean('${step.audio}', 0.9)" title="Oddiy tezlik">
            ${ICONS.speaker}
          </button>
          <button class="audio-btn-pill large slow" onclick="speakKorean('${step.audio}', 0.65)" title="Sekin tezlik">
            ${ICONS.timer}
          </button>
        </div>
        <div class="options-stack" style="text-align: left;">
          ${opts}
        </div>
      </div>
    `;
  }

  renderMatch(step) {
    const koreans = step.pairs.map(p => ({ val: p.k, id: p.k, isKorean: true }));
    const uzbeks = step.pairs.map(p => ({ val: p.v, id: p.k, isKorean: false }));
    const all = [...koreans, ...uzbeks].sort(() => Math.random() - 0.5);

    const cards = all.map(c => `
      <div class="modern-match-card" data-id="${c.id}" data-korean="${c.isKorean}">
        <span>${c.val}</span>
      </div>
    `).join("");

    return `
      <div class="step-box">
        <div class="exercise-badge">JUFTLIKLARNI MOSLANG</div>
        <h2 class="question-text">${step.question}</h2>
        <p style="color: var(--text-muted); font-weight: 600; margin-bottom: 14px; font-size: 0.9rem;">
          Mos koreyscha va o'zbekcha so'zlarni birma-bir bosing:
        </p>
        <div class="match-grid-modern">
          ${cards}
        </div>
      </div>
    `;
  }

  renderBuilder(step) {
    const pool = [...step.syllables, ...(step.distractors || [])].sort(() => Math.random() - 0.5);
    const poolTiles = pool.map(s => `
      <button class="modern-syllable-tile pool-tile" data-val="${s}">${s}</button>
    `).join("");

    return `
      <div class="step-box">
        <div class="exercise-badge">BO'G'INLARDAN SO'Z TUZING</div>
        <h2 class="question-text">${step.question}</h2>
        <div class="builder-drop-area" id="builderTarget">
          <span style="color: var(--text-sub); font-weight: 600;" id="builderPlaceholder">Bo'g'inlarni bu yerga bosing...</span>
        </div>
        <div class="builder-tiles-pool" id="builderPool">
          ${poolTiles}
        </div>
      </div>
    `;
  }

  renderStroke(step) {
    const list = step.strokes.map(s => `<li style="margin-bottom: 6px; font-weight: 600;">${s}</li>`).join("");

    return `
      <div class="step-box" style="text-align: center;">
        <div class="exercise-badge">HARFNI YOZISH MASHQI</div>
        <h2 class="question-text">${step.name} harfini chizing</h2>
        <div class="stroke-panel">
          <div class="canvas-box">
            <div class="canvas-watermark">${step.canvasLetter}</div>
            <canvas id="traceCanvas" class="trace-canvas" width="240" height="240"></canvas>
          </div>
          <div style="display: flex; gap: 10px; justify-content: center;">
            <button class="stat-chip" id="clearCanvasBtn" style="cursor: pointer;">
              <span class="svg-icon" style="width: 14px; height: 14px;">${ICONS.trash}</span>
              Tozalash
            </button>
            <button class="stat-chip" onclick="speakKorean('${step.canvasLetter}')" style="cursor: pointer;">
              <span class="svg-icon" style="width: 14px; height: 14px;">${ICONS.speaker}</span>
              Talaffuz
            </button>
          </div>
          <div style="text-align: left; background: #ffffff; padding: 14px 18px; border-radius: var(--radius-md); border: 1px solid var(--border); max-width: 320px; width: 100%; margin-top: 6px;">
            <h4 style="font-weight: 800; margin-bottom: 6px; font-size: 0.95rem;">Yozilish tartibi:</h4>
            <ol style="padding-left: 20px; color: var(--text-main); font-size: 0.9rem;">${list}</ol>
          </div>
        </div>
      </div>
    `;
  }

  bindEvents(step) {
    if (step.type === "theory") {
      this.mainActionBtn.disabled = false;
      this.mainActionBtn.innerText = "Tushunarli";
      this.mainActionBtn.className = "btn-main";
      return;
    }

    if (step.type === "stroke") {
      this.initCanvas();
      this.mainActionBtn.disabled = false;
      this.mainActionBtn.innerText = "Keyingisi";
      this.mainActionBtn.className = "btn-main";
      return;
    }

    if (step.type === "choice" || step.type === "listening") {
      const btns = this.contentEl.querySelectorAll(".cool-option-btn");
      btns.forEach(btn => {
        btn.addEventListener("click", () => {
          sfx.click();
          btns.forEach(b => b.classList.remove("selected"));
          btn.classList.add("selected");
          this.selectedOption = parseInt(btn.dataset.idx);
          this.mainActionBtn.disabled = false;
        });
      });
      return;
    }

    if (step.type === "match") {
      this.matchedCount = 0;
      const totalPairs = step.pairs.length;
      const cards = this.contentEl.querySelectorAll(".modern-match-card");

      cards.forEach(card => {
        card.addEventListener("click", () => {
          if (card.classList.contains("matched")) return;
          sfx.click();

          if (card.dataset.korean === "true") {
            speakKorean(card.querySelector("span").innerText);
          }

          if (!this.activeMatchCard) {
            this.activeMatchCard = card;
            card.classList.add("selected");
          } else {
            if (this.activeMatchCard === card) {
              card.classList.remove("selected");
              this.activeMatchCard = null;
              return;
            }

            const id1 = this.activeMatchCard.dataset.id;
            const id2 = card.dataset.id;
            const isK1 = this.activeMatchCard.dataset.korean;
            const isK2 = card.dataset.korean;

            if (id1 === id2 && isK1 !== isK2) {
              // Match found
              sfx.click();
              this.activeMatchCard.classList.remove("selected");
              this.activeMatchCard.classList.add("matched");
              card.classList.add("matched");
              this.activeMatchCard = null;
              this.matchedCount++;

              if (this.matchedCount === totalPairs) {
                setTimeout(() => {
                  this.showEvaluation(true, "Barcha juftliklar to'g'ri topildi!");
                }, 300);
              }
            } else {
              // Wrong match
              sfx.wrong();
              const first = this.activeMatchCard;
              first.classList.add("error");
              card.classList.add("error");
              setTimeout(() => {
                first.classList.remove("error", "selected");
                card.classList.remove("error", "selected");
              }, 350);
              this.activeMatchCard = null;
            }
          }
        });
      });
      return;
    }

    if (step.type === "builder") {
      const targetBox = document.getElementById("builderTarget");
      const poolBox = document.getElementById("builderPool");
      const placeholder = document.getElementById("builderPlaceholder");
      const poolTiles = poolBox.querySelectorAll(".pool-tile");

      poolTiles.forEach(tile => {
        tile.addEventListener("click", () => {
          if (tile.classList.contains("used")) return;
          sfx.click();
          speakKorean(tile.dataset.val);

          tile.classList.add("used");
          if (placeholder) placeholder.style.display = "none";

          const targetTile = document.createElement("button");
          targetTile.className = "modern-syllable-tile";
          targetTile.innerText = tile.dataset.val;

          targetTile.addEventListener("click", () => {
            sfx.click();
            targetTile.remove();
            tile.classList.remove("used");
            this.builderAnswer = this.builderAnswer.filter(i => i !== targetTile);
            if (this.builderAnswer.length === 0 && placeholder) {
              placeholder.style.display = "inline";
            }
            this.mainActionBtn.disabled = this.builderAnswer.length === 0;
          });

          targetBox.appendChild(targetTile);
          this.builderAnswer.push(targetTile);
          this.mainActionBtn.disabled = false;
        });
      });
    }
  }

  // Pointer Events Canvas (Touch & Mouse with Subpixel Accuracy)
  initCanvas() {
    const canvas = document.getElementById("traceCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let isDrawing = false;

    ctx.strokeStyle = "#18181b";
    ctx.lineWidth = 14;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    const getPos = (e) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;
      return {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY
      };
    };

    const startDraw = (e) => {
      isDrawing = true;
      try { canvas.setPointerCapture(e.pointerId); } catch (err) {}
      const pos = getPos(e);
      ctx.beginPath();
      ctx.moveTo(pos.x, pos.y);
      e.preventDefault();
    };

    const drawMove = (e) => {
      if (!isDrawing) return;
      const pos = getPos(e);
      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();
      e.preventDefault();
    };

    const stopDraw = (e) => {
      if (!isDrawing) return;
      isDrawing = false;
      try { canvas.releasePointerCapture(e.pointerId); } catch (err) {}
    };

    canvas.addEventListener("pointerdown", startDraw);
    canvas.addEventListener("pointermove", drawMove);
    canvas.addEventListener("pointerup", stopDraw);
    canvas.addEventListener("pointercancel", stopDraw);

    const clearBtn = document.getElementById("clearCanvasBtn");
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        sfx.click();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      });
    }
  }

  resetDrawer() {
    this.actionDrawer.className = "action-drawer";
    this.feedbackEl.innerHTML = "";
    this.mainActionBtn.disabled = true;
    this.mainActionBtn.innerText = "Tekshirish";
    this.mainActionBtn.className = "btn-main";
  }

  handleActionClick() {
    sfx.click();
    const step = this.lesson.steps[this.stepIndex];

    if (step.type === "theory" || step.type === "stroke" || this.isEvaluating) {
      this.nextStep();
      return;
    }

    if (step.type === "choice" || step.type === "listening") {
      const isCorrect = this.selectedOption === step.correct;
      const expl = isCorrect
        ? (step.explanation || "To'g'ri tanlov!")
        : `To'g'ri javob: ${step.options[step.correct]}. ${step.explanation || ""}`;
      this.showEvaluation(isCorrect, expl);
      return;
    }

    if (step.type === "builder") {
      const formed = this.builderAnswer.map(t => t.innerText.trim()).join("");
      const target = (step.targetWord || step.target || "").replace(/\s+/g, "");
      const isCorrect = formed === target;
      const targetDisplay = step.targetWord || step.target;
      const expl = isCorrect
        ? `To'g'ri! «${targetDisplay}» so'zi muvaffaqiyatli tuzildi.`
        : `Noto'g'ri. To'g'ri so'z: «${targetDisplay}». (${step.explanation || ""})`;
      this.showEvaluation(isCorrect, expl);
      return;
    }

    if (step.type === "match") {
      this.nextStep();
    }
  }

  showEvaluation(isCorrect, text) {
    this.isEvaluating = true;

    if (isCorrect) {
      sfx.correct();
      state.addStars(1);
      this.actionDrawer.className = "action-drawer correct";
      this.mainActionBtn.className = "btn-main";
      this.mainActionBtn.innerText = "Davom etish";
      this.mainActionBtn.disabled = false;

      this.feedbackEl.innerHTML = `
        <div class="feedback-status-icon">
          <span class="svg-icon" style="width: 24px; height: 24px;">${ICONS.check}</span>
        </div>
        <div>
          <h4>Ajoyib natija!</h4>
          <p style="color: #15803d; font-size: 0.92rem; font-weight: 600;">${text}</p>
        </div>
      `;
    } else {
      sfx.wrong();
      this.mistakesCount++;
      const left = state.loseHeart();
      this.heartsEl.innerText = left;

      this.actionDrawer.className = "action-drawer wrong";
      this.mainActionBtn.className = "btn-main wrong-action";
      this.mainActionBtn.innerText = "Tushunarli";
      this.mainActionBtn.disabled = false;

      this.feedbackEl.innerHTML = `
        <div class="feedback-status-icon">
          <span class="svg-icon" style="width: 24px; height: 24px;">${ICONS.alert}</span>
        </div>
        <div>
          <h4>Noto'g'ri javob</h4>
          <p>${text}</p>
        </div>
      `;

      if (left <= 0) {
        setTimeout(() => {
          const modal = document.getElementById("heartsModal");
          if (modal) modal.style.display = "flex";
        }, 600);
      }
    }
  }

  nextStep() {
    this.stepIndex++;
    if (this.stepIndex < this.lesson.steps.length) {
      this.renderStep();
    } else {
      this.finishLesson();
    }
  }

  finishLesson() {
    sfx.fanfare();
    state.addStars(5);
    state.completeLesson(this.lesson.id);

    const modal = document.getElementById("celebrationModal");
    const titleEl = document.getElementById("celebLessonTitle");
    const starsEl = document.getElementById("celebStarsEarned");
    const accEl = document.getElementById("celebAccuracyVal");

    const total = this.lesson.steps.length;
    const acc = Math.max(50, Math.round(((total - this.mistakesCount) / total) * 100));

    const photoEl = document.getElementById("celebPhotoImg");
    if (photoEl) {
      photoEl.src = (this.lesson.id.startsWith("lesson_4") || this.lesson.id.startsWith("lesson_5") || this.lesson.id.startsWith("lesson_6"))
        ? "images/part2/image26.png"
        : "images/image18.png";
    }

    if (titleEl) titleEl.innerText = `${this.lesson.title} tugallandi!`;
    if (starsEl) starsEl.innerText = `+${5 + total} ball`;
    if (accEl) accEl.innerText = `${acc}%`;

    if (modal) modal.style.display = "flex";
  }
}

let runner = null;

function startLesson(id) {
  sfx.click();
  if (!runner) runner = new ExerciseRunner();
  runner.start(id);
}

// --- 10. INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  state.updateHeaderStats();
  renderPath();

  // Tab buttons click listener
  document.querySelectorAll(".segment-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const tab = btn.dataset.tab;
      switchTab(tab);
    });
  });

  // Modal backdrop click to close
  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-backdrop")) {
      e.target.style.display = "none";
    }
  });
});
