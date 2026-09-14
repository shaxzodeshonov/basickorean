// ==========================================
// HANGEULDUO (한글듀오) - APP ENGINE
// Audio FX, Speech Synthesis, Game State, Duolingo Runner
// ==========================================

// --- 1. AUDIO ENGINE (Web Audio API & Speech Synthesis) ---
class SoundEffects {
  constructor() {
    this.ctx = null;
    this.muted = false;
  }

  initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playTone(freq, type, duration, delay = 0, gainVal = 0.15) {
    if (this.muted) return;
    this.initContext();
    if (!this.ctx) return;

    setTimeout(() => {
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + duration);
      } catch (e) {
        console.warn("Audio error", e);
      }
    }, delay);
  }

  correct() {
    // Joyful dual chime C5 -> G5
    this.playTone(523.25, 'triangle', 0.12, 0, 0.2);
    this.playTone(783.99, 'triangle', 0.25, 100, 0.25);
  }

  wrong() {
    // Gentle error boop F3 -> D3
    this.playTone(174.61, 'sine', 0.15, 0, 0.25);
    this.playTone(146.83, 'sine', 0.25, 120, 0.25);
  }

  click() {
    this.playTone(600, 'sine', 0.04, 0, 0.08);
  }

  match() {
    this.playTone(659.25, 'triangle', 0.1, 0, 0.15);
    this.playTone(880, 'triangle', 0.15, 70, 0.2);
  }

  fanfare() {
    // Victory fanfare
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      this.playTone(freq, 'triangle', 0.3, idx * 110, 0.25);
    });
  }
}

const sfx = new SoundEffects();

// Korean Text-To-Speech (Web Speech API)
function speakKorean(text, rate = 0.9) {
  sfx.initContext();
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'ko-KR';
  utterance.rate = rate;
  utterance.pitch = 1.0;

  // Try to find native Korean voice
  const voices = window.speechSynthesis.getVoices();
  const koVoice = voices.find(v => v.lang.startsWith('ko') || v.name.includes('Korean') || v.name.includes('Yuna') || v.name.includes('Heami'));
  if (koVoice) utterance.voice = koVoice;

  window.speechSynthesis.speak(utterance);
}

// Ensure voices are loaded
if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
  };
}

// --- 2. GAME STATE MANAGEMENT ---
const STORAGE_KEY = "HANGEUL_DUO_PROGRESS_V1";

class AppState {
  constructor() {
    this.xp = 0;
    this.streak = 1;
    this.hearts = 5;
    this.maxHearts = 5;
    this.unlockedLessons = ["lesson_1_1", "lesson_2_1", "lesson_3_1"];
    this.completedLessons = [];
    this.currentTrack = "all"; // 'all', 'alphabet', 'words', 'culture'
    this.load();
  }

  load() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        const parsed = JSON.parse(data);
        this.xp = parsed.xp || 0;
        this.streak = parsed.streak || 1;
        this.hearts = parsed.hearts !== undefined ? parsed.hearts : 5;
        this.unlockedLessons = parsed.unlockedLessons || ["lesson_1_1", "lesson_2_1", "lesson_3_1"];
        this.completedLessons = parsed.completedLessons || [];
      }
    } catch (e) {
      console.warn("Storage load error", e);
    }
  }

  save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        xp: this.xp,
        streak: this.streak,
        hearts: this.hearts,
        unlockedLessons: this.unlockedLessons,
        completedLessons: this.completedLessons
      }));
    } catch (e) {
      console.warn("Storage save error", e);
    }
    this.updateStatsUI();
  }

  addXP(amount) {
    this.xp += amount;
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
  }

  completeLesson(lessonId) {
    if (!this.completedLessons.includes(lessonId)) {
      this.completedLessons.push(lessonId);
    }
    // Unlock next lesson in line
    const allIds = HANGEUL_DATA.lessons.map(l => l.id);
    const currIdx = allIds.indexOf(lessonId);
    if (currIdx !== -1 && currIdx + 1 < allIds.length) {
      const nextId = allIds[currIdx + 1];
      if (!this.unlockedLessons.includes(nextId)) {
        this.unlockedLessons.push(nextId);
      }
    }
    this.save();
  }

  updateStatsUI() {
    const xpEl = document.getElementById("statXP");
    const streakEl = document.getElementById("statStreak");
    const heartsEl = document.getElementById("statHearts");

    if (xpEl) xpEl.innerText = this.xp;
    if (streakEl) streakEl.innerText = this.streak;
    if (heartsEl) heartsEl.innerText = this.hearts;
  }
}

const state = new AppState();

// --- 3. DUOLINGO EXERCISE RUNNER ---
class ExerciseRunner {
  constructor(lesson) {
    this.lesson = lesson;
    this.currentStepIdx = 0;
    this.selectedOption = null;
    this.builderAnswer = [];
    this.matchedPairs = 0;
    this.activeMatchCard = null;
    this.isEvaluating = false;
    this.lessonMistakes = 0;
    this.container = document.getElementById("exerciseView");
    this.contentEl = document.getElementById("exerciseContent");
    this.progressBar = document.getElementById("exerciseProgress");
    this.heartsCounter = document.getElementById("exerciseHeartsCount");
    this.evalBar = document.getElementById("evalBar");
    this.evalInner = document.getElementById("evalInner");
    this.actionBtn = document.getElementById("evalActionBtn");
  }

  start() {
    this.container.style.display = "flex";
    this.currentStepIdx = 0;
    this.lessonMistakes = 0;
    this.renderCurrentStep();
  }

  renderCurrentStep() {
    const step = this.lesson.steps[this.currentStepIdx];
    const total = this.lesson.steps.length;
    const progressPercent = (this.currentStepIdx / total) * 100;
    this.progressBar.style.width = `${progressPercent}%`;
    this.heartsCounter.innerText = state.hearts;

    this.resetEvalBar();
    this.selectedOption = null;
    this.builderAnswer = [];
    this.activeMatchCard = null;
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
      default:
        html = `<div>Noma'lum qadam</div>`;
    }

    this.contentEl.innerHTML = html;
    this.bindStepEvents(step);

    // Auto-play audio if step has audio
    if (step.audio && (step.type === "theory" || step.type === "listening")) {
      setTimeout(() => speakKorean(step.audio), 350);
    }
  }

  renderTheory(step) {
    const pointsHtml = step.points
      ? `<ul class="theory-points">${step.points.map(p => `<li>${p}</li>`).join("")}</ul>`
      : "";

    const imgHtml = step.image
      ? `<img src="images/${step.image}" class="theory-img" alt="Illustration" onerror="this.style.display='none'">`
      : "";

    return `
      <div class="step-card">
        <h2 class="exercise-title">${step.title}</h2>
        <div class="theory-card">
          <div class="theory-header-box">
            <div class="theory-korean-pill">
              <span>${step.korean}</span>
              <button class="speaker-btn" onclick="speakKorean('${step.audio || step.korean}')" title="Ovoz chiqarish">🔊</button>
            </div>
          </div>
          ${imgHtml}
          <div class="theory-desc">${step.explanation}</div>
          ${pointsHtml}
        </div>
      </div>
    `;
  }

  renderChoice(step) {
    const optionsHtml = step.options.map((opt, idx) => `
      <button class="option-btn" data-idx="${idx}">
        <span class="option-kbd">${idx + 1}</span>
        <span class="option-text">${opt}</span>
      </button>
    `).join("");

    return `
      <div class="step-card">
        <h2 class="exercise-title">${step.question}</h2>
        <div class="options-grid">
          ${optionsHtml}
        </div>
      </div>
    `;
  }

  renderListening(step) {
    const optionsHtml = step.options.map((opt, idx) => `
      <button class="option-btn" data-idx="${idx}">
        <span class="option-kbd">${idx + 1}</span>
        <span class="option-text">${opt}</span>
      </button>
    `).join("");

    return `
      <div class="step-card" style="text-align: center;">
        <h2 class="exercise-title">${step.question}</h2>
        <div style="margin: 24px 0; display: flex; gap: 16px; justify-content: center;">
          <button class="speaker-btn large" onclick="speakKorean('${step.audio}', 0.9)" title="Oddiy tezlikda eshitish">🔊</button>
          <button class="speaker-btn large" style="background: var(--primary-yellow); box-shadow: 0 6px 0 var(--primary-yellow-dark);" onclick="speakKorean('${step.audio}', 0.6)" title="Sekin tezlikda eshitish">🐢</button>
        </div>
        <div class="options-grid" style="text-align: left;">
          ${optionsHtml}
        </div>
      </div>
    `;
  }

  renderMatch(step) {
    // Shuffle pairs into two columns
    const koreans = step.pairs.map(p => ({ val: p.k, id: p.k, isKorean: true }));
    const uzbeks = step.pairs.map(p => ({ val: p.v, id: p.k, isKorean: false }));
    const allCards = [...koreans, ...uzbeks].sort(() => Math.random() - 0.5);

    const cardsHtml = allCards.map(c => `
      <div class="match-card" data-id="${c.id}" data-korean="${c.isKorean}">
        <span>${c.val}</span>
      </div>
    `).join("");

    return `
      <div class="step-card">
        <h2 class="exercise-title">${step.question}</h2>
        <p style="color: var(--text-muted); font-weight: 700; margin-bottom: 12px;">Mos juftliklarni birma-bir bosing:</p>
        <div class="match-container" id="matchContainer">
          ${cardsHtml}
        </div>
      </div>
    `;
  }

  renderBuilder(step) {
    const pool = [...step.syllables, ...(step.distractors || [])].sort(() => Math.random() - 0.5);
    const poolHtml = pool.map(s => `
      <button class="syllable-tile pool-tile" data-val="${s}">${s}</button>
    `).join("");

    return `
      <div class="step-card">
        <h2 class="exercise-title">${step.question}</h2>
        <div class="builder-target-box" id="builderTarget">
          <span style="color: var(--text-light); font-weight: 700; font-size: 1.1rem;" id="builderPlaceholder">Bo'g'inlarni bu yerga bosing...</span>
        </div>
        <div class="builder-pool" id="builderPool">
          ${poolHtml}
        </div>
      </div>
    `;
  }

  renderStroke(step) {
    const stepsList = step.strokes.map(s => `<li style="margin-bottom: 6px; font-weight: 700;">${s}</li>`).join("");

    return `
      <div class="step-card" style="text-align: center;">
        <h2 class="exercise-title">${step.name} harfini yozish tartibi</h2>
        <div class="stroke-view">
          <div class="canvas-wrapper">
            <div class="stroke-guide-bg">${step.canvasLetter}</div>
            <canvas id="strokeCanvas" class="stroke-canvas" width="260" height="260"></canvas>
          </div>
          <div class="stroke-controls">
            <button class="btn-secondary" id="clearCanvasBtn">Tozalash 🗑️</button>
            <button class="btn-secondary" onclick="speakKorean('${step.canvasLetter}')">Talaffuz 🔊</button>
          </div>
          <div style="text-align: left; background: #ffffff; padding: 14px 20px; border-radius: 12px; border: 2px solid var(--border-color); max-width: 320px; width: 100%;">
            <h4 style="font-weight: 900; margin-bottom: 8px;">Yozilish tartibi:</h4>
            <ol style="padding-left: 20px; color: var(--text-dark);">${stepsList}</ol>
          </div>
        </div>
      </div>
    `;
  }

  bindStepEvents(step) {
    // Theory step: action button ready to proceed immediately
    if (step.type === "theory") {
      this.actionBtn.disabled = false;
      this.actionBtn.innerText = "Tushunarli";
      this.actionBtn.className = "btn-primary";
      return;
    }

    // Stroke canvas step
    if (step.type === "stroke") {
      this.initStrokeCanvas();
      this.actionBtn.disabled = false;
      this.actionBtn.innerText = "Keyingisi";
      this.actionBtn.className = "btn-primary";
      return;
    }

    // Choice / Listening options
    if (step.type === "choice" || step.type === "listening") {
      const btns = this.contentEl.querySelectorAll(".option-btn");
      btns.forEach(btn => {
        btn.addEventListener("click", () => {
          sfx.click();
          btns.forEach(b => b.classList.remove("selected"));
          btn.classList.add("selected");
          this.selectedOption = parseInt(btn.dataset.idx);
          this.actionBtn.disabled = false;
        });
      });
      return;
    }

    // Match Pairs
    if (step.type === "match") {
      this.matchedPairs = 0;
      const totalPairs = step.pairs.length;
      const cards = this.contentEl.querySelectorAll(".match-card");

      cards.forEach(card => {
        card.addEventListener("click", () => {
          if (card.classList.contains("matched")) return;
          sfx.click();

          if (card.dataset.korean === "true") {
            speakKorean(card.querySelector("span").innerText);
          }

          if (!this.activeMatchCard) {
            cards.forEach(c => c.classList.remove("selected"));
            card.classList.add("selected");
            this.activeMatchCard = card;
          } else {
            if (this.activeMatchCard === card) {
              card.classList.remove("selected");
              this.activeMatchCard = null;
              return;
            }

            const isMatch = (this.activeMatchCard.dataset.id === card.dataset.id) &&
                            (this.activeMatchCard.dataset.korean !== card.dataset.korean);

            if (isMatch) {
              sfx.match();
              this.activeMatchCard.classList.remove("selected");
              this.activeMatchCard.classList.add("matched");
              card.classList.add("matched");
              this.activeMatchCard = null;
              this.matchedPairs++;

              if (this.matchedPairs === totalPairs) {
                this.actionBtn.disabled = false;
                this.showEvaluation(true, "Ajoyib! Barcha juftliklar to'g'ri topildi!");
              }
            } else {
              sfx.wrong();
              const first = this.activeMatchCard;
              first.classList.add("error");
              card.classList.add("error");
              setTimeout(() => {
                first.classList.remove("error", "selected");
                card.classList.remove("error", "selected");
              }, 400);
              this.activeMatchCard = null;
            }
          }
        });
      });
      return;
    }

    // Word Builder
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
          targetTile.className = "syllable-tile";
          targetTile.innerText = tile.dataset.val;
          targetTile.addEventListener("click", () => {
            sfx.click();
            targetTile.remove();
            tile.classList.remove("used");
            this.builderAnswer = this.builderAnswer.filter(item => item !== targetTile);
            if (this.builderAnswer.length === 0 && placeholder) {
              placeholder.style.display = "inline";
            }
            this.actionBtn.disabled = this.builderAnswer.length === 0;
          });

          targetBox.appendChild(targetTile);
          this.builderAnswer.push(targetTile);
          this.actionBtn.disabled = false;
        });
      });
    }
  }

  initStrokeCanvas() {
    const canvas = document.getElementById("strokeCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let drawing = false;

    ctx.strokeStyle = "#58cc02";
    ctx.lineWidth = 14;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    const getPos = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      return {
        x: clientX - rect.left,
        y: clientY - rect.top
      };
    };

    const startDraw = (e) => {
      drawing = true;
      const pos = getPos(e);
      ctx.beginPath();
      ctx.moveTo(pos.x, pos.y);
      if (e.type === "touchstart") e.preventDefault();
    };

    const draw = (e) => {
      if (!drawing) return;
      const pos = getPos(e);
      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();
      if (e.type === "touchmove") e.preventDefault();
    };

    const stopDraw = () => { drawing = false; };

    canvas.addEventListener("mousedown", startDraw);
    canvas.addEventListener("mousemove", draw);
    window.addEventListener("mouseup", stopDraw);

    canvas.addEventListener("touchstart", startDraw, { passive: false });
    canvas.addEventListener("touchmove", draw, { passive: false });
    window.addEventListener("touchend", stopDraw);

    const clearBtn = document.getElementById("clearCanvasBtn");
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        sfx.click();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      });
    }
  }

  resetEvalBar() {
    this.evalBar.className = "eval-bar";
    this.actionBtn.className = "btn-primary";
    this.actionBtn.innerText = "Tekshirish";
    this.actionBtn.disabled = true;

    // Reset feedback area
    const feedbackBox = document.getElementById("evalFeedback");
    if (feedbackBox) {
      feedbackBox.innerHTML = "";
    }
  }

  handleAction() {
    const step = this.lesson.steps[this.currentStepIdx];

    // Theory, stroke, or already evaluated: move forward
    if (step.type === "theory" || step.type === "stroke" || this.isEvaluating) {
      this.nextStep();
      return;
    }

    // Evaluate choice or listening
    if (step.type === "choice" || step.type === "listening") {
      const isCorrect = this.selectedOption === step.correct;
      const explanation = step.explanation || (isCorrect ? "Barakalla! To'g'ri tanladingiz." : `To'g'ri javob: ${step.options[step.correct]}`);
      this.showEvaluation(isCorrect, explanation);
      return;
    }

    // Evaluate Word Builder
    if (step.type === "builder") {
      const formed = this.builderAnswer.map(b => b.innerText).join("");
      const isCorrect = formed === step.targetWord;
      const explanation = isCorrect
        ? `To'g'ri! ${step.targetWord} muvaffaqiyatli tuzildi!`
        : `Noto'g'ri. To'g'ri so'z: ${step.targetWord}`;
      this.showEvaluation(isCorrect, explanation);
      return;
    }

    // Match pairs already triggers next on complete
    if (step.type === "match") {
      this.nextStep();
    }
  }

  showEvaluation(isCorrect, message) {
    this.isEvaluating = true;
    const feedbackBox = document.getElementById("evalFeedback");

    if (isCorrect) {
      sfx.correct();
      state.addXP(10);
      this.evalBar.className = "eval-bar correct";
      this.actionBtn.className = "btn-primary";
      this.actionBtn.innerText = "Davom etish";
      this.actionBtn.disabled = false;

      feedbackBox.innerHTML = `
        <div class="feedback-icon">✓</div>
        <div class="feedback-text">
          <h4>Ajoyib!</h4>
          <p>${message}</p>
        </div>
      `;
    } else {
      sfx.wrong();
      this.lessonMistakes++;
      const left = state.loseHeart();
      this.heartsCounter.innerText = left;

      this.evalBar.className = "eval-bar wrong";
      this.actionBtn.className = "btn-primary wrong-btn";
      this.actionBtn.innerText = "Tushunarli";
      this.actionBtn.disabled = false;

      feedbackBox.innerHTML = `
        <div class="feedback-icon">✕</div>
        <div class="feedback-text">
          <h4>Xato javob</h4>
          <p>${message}</p>
        </div>
      `;

      if (left <= 0) {
        setTimeout(() => this.showOutOfHeartsModal(), 600);
      }
    }
  }

  nextStep() {
    this.currentStepIdx++;
    if (this.currentStepIdx < this.lesson.steps.length) {
      this.renderCurrentStep();
    } else {
      this.finishLesson();
    }
  }

  finishLesson() {
    sfx.fanfare();
    state.completeLesson(this.lesson.id);
    state.addXP(50);

    triggerConfetti();

    const xpEarned = 50 + (this.lesson.steps.length * 10) - (this.lessonMistakes * 5);
    const accuracy = Math.max(10, Math.round(((this.lesson.steps.length - this.lessonMistakes) / this.lesson.steps.length) * 100));

    const modal = document.getElementById("celebrationModal");
    const titleEl = document.getElementById("celebrationTitle");
    const xpEl = document.getElementById("celebrationXP");
    const accEl = document.getElementById("celebrationAcc");

    if (titleEl) titleEl.innerText = `${this.lesson.title} Yakunlandi!`;
    if (xpEl) xpEl.innerText = `+${xpEarned} XP`;
    if (accEl) accEl.innerText = `${accuracy}%`;

    modal.style.display = "flex";
  }

  showOutOfHeartsModal() {
    const modal = document.getElementById("outOfHeartsModal");
    if (modal) modal.style.display = "flex";
  }

  close() {
    this.container.style.display = "none";
    renderPath();
  }
}

let currentRunner = null;

function startLesson(lessonId) {
  sfx.initContext();
  sfx.click();
  const lesson = HANGEUL_DATA.lessons.find(l => l.id === lessonId);
  if (!lesson) return;

  if (state.hearts <= 0) {
    state.refillHearts();
  }

  currentRunner = new ExerciseRunner(lesson);
  currentRunner.start();
}

// --- 4. RENDER LEARNING PATH ---
function renderPath() {
  const container = document.getElementById("pathContainer");
  if (!container) return;

  const track = state.currentTrack;
  const filtered = HANGEUL_DATA.lessons.filter(l => {
    if (track === "all") return true;
    return l.track === track;
  });

  let html = "";
  let lastTrack = "";

  filtered.forEach((lesson, idx) => {
    // Track change banner
    if (lesson.track !== lastTrack && track === "all") {
      lastTrack = lesson.track;
      let trackClass = lesson.track;
      html += `
        <div class="path-section-banner ${trackClass}">
          <div>
            <div class="banner-title">${lesson.trackTitle}</div>
            <div class="banner-sub">Ma'ruzalarga asoslangan interaktiv modullar</div>
          </div>
          <span style="font-size: 28px;">${lesson.track === 'alphabet' ? '👑' : (lesson.track === 'words' ? '💬' : '🇰🇷')}</span>
        </div>
      `;
    }

    const isCompleted = state.completedLessons.includes(lesson.id);
    const isUnlocked = state.unlockedLessons.includes(lesson.id);

    let btnClass = "node-btn";
    if (isCompleted) btnClass += " completed";
    else if (!isUnlocked) btnClass += " locked";

    html += `
      <div class="path-node-wrapper">
        <button class="${btnClass}" ${!isUnlocked ? "disabled" : ""} onclick="startLesson('${lesson.id}')">
          <span class="node-icon">${lesson.icon}</span>
          ${isCompleted ? `<span class="node-crown">👑</span>` : ""}
        </button>
        <div class="node-label">${lesson.title}</div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// --- 5. MODAL HANDLERS (CHART, WORDBOOK, SYLLABUS, MATCH MADNESS) ---
function showAlphabetChart() {
  sfx.click();
  const modal = document.getElementById("alphabetModal");
  const vowelsGrid = document.getElementById("vowelsChartGrid");
  const consonantsGrid = document.getElementById("consonantsChartGrid");

  vowelsGrid.innerHTML = HANGEUL_DATA.vowels.map(v => `
    <div class="chart-tile" onclick="speakKorean('${v.name}')" title="${v.name} [${v.sound}] - ${v.uz}">
      <div class="chart-char">${v.char}</div>
      <div class="chart-sub">${v.name} [${v.sound}]</div>
    </div>
  `).join("");

  consonantsGrid.innerHTML = HANGEUL_DATA.consonants.map(c => `
    <div class="chart-tile" onclick="speakKorean('${c.char}')" title="${c.name} [${c.sound}] - ${c.uz}">
      <div class="chart-char">${c.char}</div>
      <div class="chart-sub">${c.name.split(' ')[0]}</div>
    </div>
  `).join("");

  modal.style.display = "flex";
}

function showWordbook() {
  sfx.click();
  const modal = document.getElementById("wordbookModal");
  const listEl = document.getElementById("wordbookList");
  renderWordList(HANGEUL_DATA.words);
  modal.style.display = "flex";
}

function renderWordList(words) {
  const listEl = document.getElementById("wordbookList");
  listEl.innerHTML = words.map(w => `
    <div class="word-row-card">
      <div class="word-row-info">
        <img src="images/${w.image}" class="word-row-thumb" alt="${w.korean}" onerror="this.src='images/image4.jpeg'">
        <div>
          <div class="word-korean">${w.korean} <span style="font-size: 0.9rem; color: var(--primary-green-dark); font-weight: 700;">[${w.trans}]</span></div>
          <div class="word-uzbek">${w.uzbek}</div>
          <div style="font-size: 0.78rem; color: var(--text-light);">${w.note}</div>
        </div>
      </div>
      <button class="speaker-btn" onclick="speakKorean('${w.korean}')">🔊</button>
    </div>
  `).join("");
}

function filterWordbook(query) {
  const q = query.toLowerCase().trim();
  const filtered = HANGEUL_DATA.words.filter(w =>
    w.korean.toLowerCase().includes(q) ||
    w.uzbek.toLowerCase().includes(q) ||
    w.trans.toLowerCase().includes(q)
  );
  renderWordList(filtered);
}

function showSyllabus() {
  sfx.click();
  const modal = document.getElementById("syllabusModal");
  const c = HANGEUL_DATA.courseInfo;

  const gradingRows = c.grading.map(g => `
    <tr>
      <td style="padding: 8px; border-bottom: 1px solid var(--border-color); font-weight: 800;">${g.item}</td>
      <td style="padding: 8px; border-bottom: 1px solid var(--border-color); color: var(--primary-green-dark); font-weight: 900;">${g.weight}</td>
      <td style="padding: 8px; border-bottom: 1px solid var(--border-color); color: var(--text-muted); font-size: 0.85rem;">${g.detail}</td>
    </tr>
  `).join("");

  const penaltiesList = c.penalties.map(p => `
    <li style="margin-bottom: 6px; font-weight: 700; color: #ea2b2b;">⚠️ ${p}</li>
  `).join("");

  const bodyEl = document.getElementById("syllabusModalBody");
  bodyEl.innerHTML = `
    <div style="margin-bottom: 20px; background: #eef9ff; border: 2px solid #b8e6ff; padding: 16px; border-radius: 14px;">
      <h3 style="color: var(--primary-blue-dark); font-weight: 900;">${c.name}</h3>
      <p style="font-weight: 800; color: var(--text-dark);">O'qituvchi: <b>${c.teacher}</b></p>
      <p style="font-weight: 700; color: var(--text-muted);">Xona: <b>${c.office}</b></p>
    </div>

    <h4 style="font-weight: 900; margin: 16px 0 8px;">Baholash mezonlari (Grading):</h4>
    <table style="width: 100%; border-collapse: collapse; text-align: left; margin-bottom: 20px;">
      <thead>
        <tr style="background: #f7f7f7;">
          <th style="padding: 8px; border-bottom: 2px solid var(--border-color);">Tarkib</th>
          <th style="padding: 8px; border-bottom: 2px solid var(--border-color);">Ulush</th>
          <th style="padding: 8px; border-bottom: 2px solid var(--border-color);">Izoh</th>
        </tr>
      </thead>
      <tbody>${gradingRows}</tbody>
    </table>

    <h4 style="font-weight: 900; margin: 16px 0 8px; color: #ea2b2b;">Qat'iy dars qoidalari & Jarimalar:</h4>
    <ul style="list-style: none; padding: 0;">${penaltiesList}</ul>
  `;

  modal.style.display = "flex";
}

// --- 6. CANVAS CONFETTI ENGINE ---
function triggerConfetti() {
  const canvas = document.getElementById("confettiCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];
  const colors = ["#58cc02", "#1cb0f6", "#ffc800", "#ff4b4b", "#ce82ff"];

  for (let i = 0; i < 120; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 18,
      vy: (Math.random() - 0.7) * 18,
      size: Math.random() * 9 + 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 12,
      gravity: 0.35,
      opacity: 1
    });
  }

  let animationFrame;
  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let alive = false;

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rotation += p.vRot;
      p.opacity -= 0.008;

      if (p.opacity > 0) {
        alive = true;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      }
    });

    if (alive) {
      animationFrame = requestAnimationFrame(update);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  update();
}

// --- 7. GLOBAL INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  state.updateStatsUI();
  renderPath();

  // Track buttons
  document.querySelectorAll(".track-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      sfx.click();
      document.querySelectorAll(".track-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.currentTrack = btn.dataset.track;
      renderPath();
    });
  });

  // Action button in eval bar
  const actionBtn = document.getElementById("evalActionBtn");
  if (actionBtn) {
    actionBtn.addEventListener("click", () => {
      if (currentRunner) currentRunner.handleAction();
    });
  }

  // Close exercise view
  const closeBtn = document.getElementById("closeExerciseBtn");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      sfx.click();
      if (confirm("Haqiqatan ham mashg'ulotni tark etmoqchimisiz? Progressingiz saqlanmaydi.")) {
        if (currentRunner) currentRunner.close();
      }
    });
  }

  // Celebration modal close
  const celebCloseBtn = document.getElementById("closeCelebrationBtn");
  if (celebCloseBtn) {
    celebCloseBtn.addEventListener("click", () => {
      sfx.click();
      document.getElementById("celebrationModal").style.display = "none";
      if (currentRunner) currentRunner.close();
    });
  }

  // Refill hearts button
  const refillBtn = document.getElementById("refillHeartsBtn");
  if (refillBtn) {
    refillBtn.addEventListener("click", () => {
      sfx.click();
      state.refillHearts();
      document.getElementById("outOfHeartsModal").style.display = "none";
      if (currentRunner) {
        currentRunner.heartsCounter.innerText = state.hearts;
      }
    });
  }

  // Generic modal close buttons
  document.querySelectorAll(".modal-close-x").forEach(btn => {
    btn.addEventListener("click", () => {
      sfx.click();
      btn.closest(".modal-overlay").style.display = "none";
    });
  });

  // Keyboard shortcut listener (1-4 for options, Enter for evaluate)
  window.addEventListener("keydown", (e) => {
    if (document.getElementById("exerciseView").style.display === "flex") {
      if (["1", "2", "3", "4"].includes(e.key)) {
        const idx = parseInt(e.key) - 1;
        const btn = document.querySelector(`.option-btn[data-idx="${idx}"]`);
        if (btn) btn.click();
      } else if (e.key === "Enter") {
        if (actionBtn && !actionBtn.disabled) {
          actionBtn.click();
        }
      }
    }
  });
});
