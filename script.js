/**
 * A LITTLE GIFT • 20 OCTOBER - THÁNG MƯỜI DỊU DÀNG
 * Logic tương tác các chương: Mã PIN 2010, Giữ mở hộp quà, Mở phong bì thư, Bức thư 20/10
 */

// ==========================================================================
// 1. QUẢN LÝ CHUYỂN CẢNH CÁC MÀN HÌNH (SCREENS)
// ==========================================================================
let currentScreen = 0;
const totalScreens = 5;

function goToScreen(targetIndex) {
  if (targetIndex < 0 || targetIndex >= totalScreens) return;

  const currentEl = document.getElementById(`screen${currentScreen}`);
  const nextEl = document.getElementById(`screen${targetIndex}`);

  if (!nextEl) return;

  // Hiệu ứng thoát màn hình hiện tại
  if (currentEl) {
    currentEl.classList.remove('active');
    currentEl.classList.add('exit-left');
    setTimeout(() => {
      currentEl.classList.remove('exit-left');
    }, 550);
  }

  // Kích hoạt màn hình kế tiếp
  currentScreen = targetIndex;
  nextEl.classList.add('active');

  // Khởi động nhạc nhẹ tự động nếu người dùng chưa tắt
  if (!isAudioPlaying && audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

// Nút bắt đầu từ màn hình 0 -> màn hình 1
document.getElementById('startBtn').addEventListener('click', (e) => {
  createSparkles(e.clientX, e.clientY);
  goToScreen(1);
});

// Chạm vào bó hoa phát tia sáng lấp lánh
const bouquetGraphic = document.getElementById('bouquetGraphic');
if (bouquetGraphic) {
  bouquetGraphic.addEventListener('click', (e) => {
    createSparkles(e.clientX, e.clientY);
  });
}

// Nút xem lại từ đầu từ màn hình 4 -> màn hình 0
document.getElementById('restartJourneyBtn').addEventListener('click', () => {
  resetPin();
  resetGiftBox();
  resetEnvelope();
  goToScreen(0);
});

// ==========================================================================
// 2. CHƯƠNG 01: MẬT MÃ NHỎ XINH (PIN 2502)
// ==========================================================================
let currentPin = '';
const correctPin = '2502';
const pinDotsContainer = document.getElementById('pinDots');
const pinDots = pinDotsContainer.querySelectorAll('.dot');
const keypadGrid = document.getElementById('keypadGrid');
const clearBtn = document.getElementById('clearBtn');
const backspaceBtn = document.getElementById('backspaceBtn');
const skipPinBtn = document.getElementById('skipPinBtn');

function updatePinDisplay() {
  pinDots.forEach((dot, idx) => {
    dot.classList.toggle('filled', idx < currentPin.length);
  });
}

function handlePinInput(digit) {
  if (currentPin.length >= 4) return;
  currentPin += digit;
  updatePinDisplay();

  // Đủ 4 số -> kiểm tra mã PIN
  if (currentPin.length === 4) {
    if (currentPin === correctPin) {
      // Đúng mã PIN: chúc mừng và chuyển tiếp
      createScreenConfetti();
      playChimeSuccess();
      setTimeout(() => {
        goToScreen(2);
      }, 500);
    } else {
      // Sai mã PIN: rung lắc cảnh báo
      pinDotsContainer.classList.add('error');
      setTimeout(() => {
        pinDotsContainer.classList.remove('error');
        currentPin = '';
        updatePinDisplay();
      }, 600);
    }
  }
}

keypadGrid.addEventListener('click', (e) => {
  const target = e.target.closest('.key-btn');
  if (!target) return;

  const val = target.getAttribute('data-val');
  if (val !== null) {
    handlePinInput(val);
  }
});

clearBtn.addEventListener('click', () => {
  currentPin = '';
  updatePinDisplay();
});

backspaceBtn.addEventListener('click', () => {
  if (currentPin.length > 0) {
    currentPin = currentPin.slice(0, -1);
    updatePinDisplay();
  }
});

// Nút "Để Anh mở hộ Em" -> Tự động nhập 2010
skipPinBtn.addEventListener('click', () => {
  currentPin = '';
  let i = 0;
  const autoType = setInterval(() => {
    if (i < correctPin.length) {
      currentPin += correctPin[i];
      updatePinDisplay();
      i++;
    } else {
      clearInterval(autoType);
      createScreenConfetti();
      playChimeSuccess();
      setTimeout(() => {
        goToScreen(2);
      }, 500);
    }
  }, 160);
});

function resetPin() {
  currentPin = '';
  updatePinDisplay();
}

// ==========================================================================
// 3. CHƯƠNG 02: MỘT CHÚT PHÉP MÀU (GIỮ 1.5S ĐỂ MỞ HỘP QUÀ)
// ==========================================================================
const holdGiftBtn = document.getElementById('holdGiftBtn');
const holdProgressFill = document.getElementById('holdProgressFill');
const giftBoxWrap = document.getElementById('giftBoxWrap');

let holdTimer = null;
let holdStartTime = 0;
const REQUIRED_HOLD_MS = 1400; // 1.4s

function startHolding(e) {
  if (currentScreen !== 2) return;
  e.preventDefault();

  holdStartTime = Date.now();
  holdProgressFill.style.transition = 'width 0.05s linear';

  if (holdTimer) clearInterval(holdTimer);

  holdTimer = setInterval(() => {
    const elapsed = Date.now() - holdStartTime;
    const progress = Math.min(100, (elapsed / REQUIRED_HOLD_MS) * 100);
    holdProgressFill.style.width = `${progress}%`;

    // Bắn hạt lấp lánh khi đang giữ
    if (Math.random() < 0.3) {
      const rect = holdGiftBtn.getBoundingClientRect();
      createSparkles(rect.left + Math.random() * rect.width, rect.top + Math.random() * rect.height);
    }

    if (elapsed >= REQUIRED_HOLD_MS) {
      clearInterval(holdTimer);
      holdTimer = null;
      completeGiftBoxOpen();
    }
  }, 30);
}

function cancelHolding() {
  if (holdTimer) {
    clearInterval(holdTimer);
    holdTimer = null;
  }
  holdProgressFill.style.transition = 'width 0.25s ease';
  holdProgressFill.style.width = '0%';
}

function completeGiftBoxOpen() {
  holdProgressFill.style.width = '100%';
  giftBoxWrap.classList.add('opened');
  createScreenConfetti();
  playChimeSuccess();

  setTimeout(() => {
    goToScreen(3);
  }, 750);
}

// Bắt cả chuột (Desktop) và ngón tay (Mobile)
holdGiftBtn.addEventListener('mousedown', startHolding);
window.addEventListener('mouseup', cancelHolding);

holdGiftBtn.addEventListener('touchstart', startHolding, { passive: false });
window.addEventListener('touchend', cancelHolding);
window.addEventListener('touchcancel', cancelHolding);

function resetGiftBox() {
  giftBoxWrap.classList.remove('opened');
  holdProgressFill.style.width = '0%';
}

// ==========================================================================
// 4. CHƯƠNG 03: PHONG BÌ THƯ GỬI EM
// ==========================================================================
const envelopeWrap = document.getElementById('envelopeWrap');

envelopeWrap.addEventListener('click', (e) => {
  if (envelopeWrap.classList.contains('opened')) return;

  const rect = envelopeWrap.getBoundingClientRect();
  createSparkles(rect.left + rect.width / 2, rect.top + rect.height / 2);
  envelopeWrap.classList.add('opened');
  playChimeSuccess();

  setTimeout(() => {
    goToScreen(4);
  }, 750);
});

function resetEnvelope() {
  envelopeWrap.classList.remove('opened');
}

// ==========================================================================
// 5. CHƯƠNG 04: BỨC THƯ TÌNH CẢM & CÁ NHÂN HÓA TÊN
// ==========================================================================
const recipientGreeting = document.getElementById('recipientGreeting');
const editRecipientBtn = document.getElementById('editRecipientBtn');
const nameCustomDialog = document.getElementById('nameCustomDialog');
const closeNameDialogBtn = document.getElementById('closeNameDialogBtn');
const recipientForm = document.getElementById('recipientForm');
const recipientInputVal = document.getElementById('recipientInputVal');
const clearRecipientBtn = document.getElementById('clearRecipientBtn');
const copyFinalWishBtn = document.getElementById('copyFinalWishBtn');
const toast = document.getElementById('toast');

let savedRecipient = localStorage.getItem('letter_recipient_2010') || '';

function updateGreeting() {
  if (savedRecipient) {
    recipientGreeting.textContent = `Gửi ${savedRecipient} thương mến,`;
  } else {
    recipientGreeting.textContent = 'Gửi Em thương mến,';
  }
}
updateGreeting();

// Mở modal đổi tên
editRecipientBtn.addEventListener('click', () => {
  recipientInputVal.value = savedRecipient;
  nameCustomDialog.showModal();
});

closeNameDialogBtn.addEventListener('click', () => closeTopLayer(nameCustomDialog));

recipientForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const val = recipientInputVal.value.trim();
  savedRecipient = val;
  if (val) {
    localStorage.setItem('letter_recipient_2010', val);
    showToast(`Đã đổi tên người nhận thành: ${val} 🌸`);
  } else {
    localStorage.removeItem('letter_recipient_2010');
    showToast('Đã chuyển về tên mặc định');
  }
  updateGreeting();
  closeTopLayer(nameCustomDialog);
});

clearRecipientBtn.addEventListener('click', () => {
  savedRecipient = '';
  localStorage.removeItem('letter_recipient_2010');
  updateGreeting();
  closeTopLayer(nameCustomDialog);
  showToast('Đã chuyển về tên mặc định');
});

// Sao chép nội dung thư
copyFinalWishBtn.addEventListener('click', async () => {
  const recipientName = savedRecipient || 'Em';
  const letterText = `💌 Gửi ${recipientName} thương mến,\n\n` +
    `Nhân ngày Phụ nữ Việt Nam 20/10, chúc ${recipientName.toLowerCase()} luôn được yêu thương, được tự do theo đuổi những điều mình tin tưởng và giữ mãi nụ cười rạng rỡ.\n\n` +
    `Mong mỗi ngày của ${recipientName.toLowerCase()} đều có một lý do để mỉm cười, mỗi hành trình đều có những người đồng hành tử tế, và mỗi ước mơ đều được trân trọng.\n\n` +
    `Cảm ơn vì ${recipientName.toLowerCase()} đã hiện diện trên thế giới này theo một cách rất riêng. Chúc ${recipientName.toLowerCase()} có một ngày 20/10 thật đẹp — và 364 ngày còn lại cũng thật rực rỡ!\n\n` +
    `💖 Với tất cả yêu thương • A LITTLE GIFT • 20 OCTOBER`;

  try {
    await navigator.clipboard.writeText(letterText);
    showToast('Đã sao chép bức thư thành công! 💖');
  } catch (err) {
    showToast('Đã chọn nội dung bức thư!');
  }
});

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2600);
}

// ==========================================================================
// 6. TUÂN THỦ MODERN WEB GUIDANCE: ANIMATE-TO-FROM-TOP-LAYER CHO DIALOG
// ==========================================================================
function canTransitionDisplay() {
  if (!window.CSS?.supports?.('transition-behavior', 'allow-discrete')) return false;
  const probe = document.createElement('div');
  probe.style.cssText = 'transition: display 1s allow-discrete !important; display: block;';
  document.body.appendChild(probe);
  getComputedStyle(probe).display;
  probe.style.display = 'none';
  const supports = getComputedStyle(probe).display === 'block';
  probe.remove();
  return supports;
}

function supportsTopLayerExit() {
  return window.CSS?.supports?.('overlay', 'auto') && canTransitionDisplay();
}

async function closeTopLayer(element) {
  if (!element.open) return;

  if (!supportsTopLayerExit()) {
    element.setAttribute('data-closing', '');
    const animations = element.getAnimations({ subtree: true });
    if (animations.length > 0) {
      await Promise.race([
        Promise.allSettled(animations.map((a) => a.finished)),
        new Promise((resolve) => setTimeout(resolve, 350)),
      ]);
    }
    if (!element.hasAttribute('data-closing')) return;
    element.removeAttribute('data-closing');
  }

  element.close();
}

nameCustomDialog.addEventListener('cancel', (e) => {
  e.preventDefault();
  closeTopLayer(nameCustomDialog);
});

nameCustomDialog.addEventListener('click', (e) => {
  const rect = nameCustomDialog.getBoundingClientRect();
  const isInDialog = (
    rect.top <= e.clientY &&
    e.clientY <= rect.top + rect.height &&
    rect.left <= e.clientX &&
    e.clientX <= rect.left + rect.width
  );
  if (!isInDialog) {
    closeTopLayer(nameCustomDialog);
  }
});

// ==========================================================================
// 7. ÂM NHẠC ÊM DỊU TỰ ĐỘNG (WEB AUDIO SYNTHESIZER - ZERO EXTERNAL MP3)
// ==========================================================================
const musicToggleBtn = document.getElementById('musicToggleBtn');
const musicIcon = document.getElementById('musicIcon');

let isAudioPlaying = false;
let audioCtx = null;
let musicInterval = null;

const LULLABY_NOTES = [
  // Fmaj7 - Cmaj7 - Dm7 - G ấm áp
  [349.23, 440.00, 523.25, 659.25], // F - A - C - E
  [261.63, 329.63, 392.00, 523.25], // C - E - G - C
  [293.66, 349.23, 440.00, 523.25], // D - F - A - C
  [392.00, 493.88, 587.33, 783.99], // G - B - D - G
];

let chordIdx = 0;
let noteIdx = 0;

function playBellTone(freq, time, dur = 1.4) {
  if (!audioCtx) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(freq, time);

  gain.gain.setValueAtTime(0, time);
  gain.gain.linearRampToValueAtTime(0.06, time + 0.04);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + dur);

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start(time);
  osc.stop(time + dur);
}

function playChimeSuccess() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') audioCtx.resume();
  const now = audioCtx.currentTime;
  playBellTone(523.25, now, 0.4); // C5
  playBellTone(659.25, now + 0.1, 0.5); // E5
  playBellTone(783.99, now + 0.2, 0.8); // G5
  playBellTone(1046.50, now + 0.3, 1.2); // C6
}

function startMusic() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  isAudioPlaying = true;
  musicToggleBtn.classList.add('playing');
  musicIcon.textContent = '🎶';

  musicInterval = setInterval(() => {
    if (!isAudioPlaying) return;
    const chord = LULLABY_NOTES[chordIdx];
    const freq = chord[noteIdx];
    playBellTone(freq, audioCtx.currentTime);

    noteIdx++;
    if (noteIdx >= chord.length) {
      noteIdx = 0;
      chordIdx = (chordIdx + 1) % LULLABY_NOTES.length;
    }
  }, 440);
}

function stopMusic() {
  isAudioPlaying = false;
  if (musicInterval) clearInterval(musicInterval);
  musicToggleBtn.classList.remove('playing');
  musicIcon.textContent = '🎵';
}

musicToggleBtn.addEventListener('click', () => {
  if (!isAudioPlaying) {
    startMusic();
    showToast('Đang phát giai điệu Tháng Mười dịu êm 🎶');
  } else {
    stopMusic();
    showToast('Đã tạm dừng âm nhạc');
  }
});

// ==========================================================================
// 8. HIỆU ỨNG HẠT LẤP LÁNH & CONFETTI
// ==========================================================================
function createSparkles(x, y) {
  if (!x || !y) return;
  const colors = ['#f472b6', '#fde047', '#fed7aa', '#ffffff', '#fbcfe8'];
  for (let i = 0; i < 14; i++) {
    const s = document.createElement('div');
    s.style.position = 'fixed';
    s.style.left = `${x}px`;
    s.style.top = `${y}px`;
    s.style.width = '6px';
    s.style.height = '6px';
    s.style.borderRadius = '50%';
    s.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    s.style.pointerEvents = 'none';
    s.style.zIndex = '9999';

    const angle = (i / 14) * 2 * Math.PI;
    const dist = 30 + Math.random() * 50;
    const tx = Math.cos(angle) * dist;
    const ty = Math.sin(angle) * dist;

    s.animate([
      { transform: 'translate(0, 0) scale(1)', opacity: 1 },
      { transform: `translate(${tx}px, ${ty}px) scale(0)`, opacity: 0 }
    ], {
      duration: 700 + Math.random() * 300,
      easing: 'cubic-bezier(0.12, 0.8, 0.32, 1)',
      fill: 'forwards'
    });

    document.body.appendChild(s);
    setTimeout(() => s.remove(), 1000);
  }
}

function createScreenConfetti() {
  const colors = ['#f472b6', '#fb7185', '#fde047', '#38bdf8', '#c084fc', '#ffffff'];
  for (let i = 0; i < 40; i++) {
    const c = document.createElement('div');
    c.style.position = 'fixed';
    c.style.left = `${window.innerWidth * 0.2 + Math.random() * window.innerWidth * 0.6}px`;
    c.style.top = `${window.innerHeight * 0.45}px`;
    c.style.width = `${6 + Math.random() * 6}px`;
    c.style.height = `${10 + Math.random() * 8}px`;
    c.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    c.style.borderRadius = '2px';
    c.style.pointerEvents = 'none';
    c.style.zIndex = '99999';

    const tx = (Math.random() - 0.5) * 350;
    const ty = -180 - Math.random() * 220;
    const rot = Math.random() * 720;

    c.animate([
      { transform: 'translate(0, 0) rotate(0deg) scale(0.5)', opacity: 1 },
      { transform: `translate(${tx * 0.6}px, ${ty}px) rotate(${rot * 0.5}deg) scale(1)`, opacity: 1, offset: 0.4 },
      { transform: `translate(${tx}px, ${ty + 350}px) rotate(${rot}deg) scale(0.8)`, opacity: 0 }
    ], {
      duration: 1600 + Math.random() * 600,
      easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
      fill: 'forwards'
    });

    document.body.appendChild(c);
    setTimeout(() => c.remove(), 2300);
  }
}

// ==========================================================================
// 9. CANVAS CÁNH HOA HỒNG RƠI THEO GIÓ (FALLING ROSE PETALS)
// ==========================================================================
class PetalCanvasAnimation {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.petals = [];
    this.numPetals = 22;
    this.resize();
    this.init();

    window.addEventListener('resize', () => this.resize());
    this.loop = this.loop.bind(this);
    requestAnimationFrame(this.loop);
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  init() {
    this.petals = [];
    for (let i = 0; i < this.numPetals; i++) {
      this.petals.push(this.createPetal(true));
    }
  }

  createPetal(randomY = false) {
    const colors = [
      'rgba(244, 114, 182, 0.45)',
      'rgba(251, 113, 133, 0.4)',
      'rgba(253, 224, 71, 0.25)',
      'rgba(249, 168, 212, 0.5)'
    ];
    return {
      x: Math.random() * this.width,
      y: randomY ? Math.random() * this.height : -25,
      size: 7 + Math.random() * 8,
      speedY: 0.7 + Math.random() * 1.1,
      speedX: 0.4 + Math.random() * 0.8,
      sway: Math.random() * 2 * Math.PI,
      swaySpeed: 0.02 + Math.random() * 0.02,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 2,
      color: colors[Math.floor(Math.random() * colors.length)]
    };
  }

  loop() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    for (let i = 0; i < this.petals.length; i++) {
      const p = this.petals[i];
      p.y += p.speedY;
      p.sway += p.swaySpeed;
      p.x += p.speedX + Math.sin(p.sway) * 0.7;
      p.rotation += p.rotSpeed;

      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.beginPath();
      this.ctx.fillStyle = p.color;
      this.ctx.ellipse(0, 0, p.size, p.size * 0.6, 0, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();

      if (p.y > this.height + 25 || p.x > this.width + 30) {
        this.petals[i] = this.createPetal(false);
      }
    }

    requestAnimationFrame(this.loop);
  }
}

// ==========================================================================
// 10. KHỞI CHẠY KHI TẢI TRANG
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('petalCanvas');
  new PetalCanvasAnimation(canvas);
});
