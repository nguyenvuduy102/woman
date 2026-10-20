/**
 * 20/10 VIETNAMESE WOMEN'S DAY - VƯỜN HOA YÊU THƯƠNG
 * Hiệu ứng tương tác vườn hoa, chuyển cảnh mượt mà và lời chúc 20/10
 */

// ==========================================================================
// 1. DỮ LIỆU CÁC LOÀI HOA & LỜI CHÚC 20/10 Ý NGHĨA
// ==========================================================================
const FLOWERS_DATA = [
  {
    id: 'rose',
    name: 'Hoa Hồng Đỏ',
    emoji: '🌹',
    category: 'Một Nửa Yêu Thương',
    stemHeight: 'stem-tall',
    swaySpeed: 'sway-slow',
    delay: '0s',
    meaning: 'Biểu tượng của tình yêu nồng nàn, vẻ đẹp quyến rũ và sự trân trọng vĩnh cửu.',
    wishes: [
      `Nhân ngày Phụ nữ Việt Nam 20/10, chúc em luôn luôn xinh đẹp, rạng rỡ như đóa hồng sớm mai. Cảm ơn em vì đã đến và mang lại nụ cười, ấm áp cho cuộc sống của anh! 💖`,
      `Chúc người phụ nữ tuyệt vời nhất trong lòng anh có một ngày 20/10 ngập tràn niềm vui, nhận được thật nhiều yêu thương và luôn nở nụ cười hạnh phúc trên môi! 🌹✨`
    ],
    svg: `
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="roseGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ff4d6d"/>
            <stop offset="70%" stop-color="#e60039"/>
            <stop offset="100%" stop-color="#990024"/>
          </radialGradient>
          <filter id="petalShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#80001a" flood-opacity="0.3"/>
          </filter>
        </defs>
        <!-- Cánh hoa ngoài -->
        <path d="M50 15 C30 15 15 35 25 60 C32 75 50 82 50 82 C50 82 68 75 75 60 C85 35 70 15 50 15 Z" fill="url(#roseGlow)" filter="url(#petalShadow)"/>
        <path d="M50 25 C36 25 28 38 34 56 C40 68 50 74 50 74 C50 74 60 68 66 56 C72 38 64 25 50 25 Z" fill="#ff3366"/>
        <path d="M50 32 C40 32 35 42 39 52 C44 60 50 65 50 65 C50 65 56 60 61 52 C65 42 60 32 50 32 Z" fill="#ff668a"/>
        <!-- Nhụy cuộn xoắn -->
        <circle cx="50" cy="46" r="10" fill="#ff1a53"/>
        <path d="M47 43 C49 40 53 40 55 43 C56 46 54 49 50 50 C46 49 45 45 47 43 Z" fill="#ffebee"/>
      </svg>
    `
  },
  {
    id: 'tulip',
    name: 'Tulip Hồng Dịu Dàng',
    emoji: '🌷',
    category: 'Mẹ Kính Yêu',
    stemHeight: 'stem-med',
    swaySpeed: 'sway-mid',
    delay: '-1.2s',
    meaning: 'Tượng trưng cho sự chở che ấm áp, tình mẫu tử thiêng liêng và lòng biết ơn vô hạn.',
    wishes: [
      `Con kính chúc Mẹ yêu ngày 20/10 thật nhiều sức khỏe, luôn bình an và vui tươi mỗi ngày. Cảm ơn Mẹ vì bao hy sinh, chăm lo và tình yêu thương vô bờ bến dành cho gia đình! 🌷❤️`,
      `Mẹ là món quà tuyệt vời nhất mà cuộc đời đã ban tặng cho con. Chúc Mẹ 20/10 luôn an yên, mạnh khỏe và mãi là điểm tựa ấm áp nhất của chúng con!`
    ],
    svg: `
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="tulipGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#ff758c"/>
            <stop offset="100%" stop-color="#ff3366"/>
          </linearGradient>
          <linearGradient id="tulipLight" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#ffb3c1"/>
            <stop offset="100%" stop-color="#ff6b8b"/>
          </linearGradient>
        </defs>
        <!-- Cánh tulip bầu dục -->
        <path d="M28 35 C20 55 30 80 50 85 C38 75 32 55 38 35 C42 22 32 25 28 35 Z" fill="url(#tulipGrad)"/>
        <path d="M72 35 C80 55 70 80 50 85 C62 75 68 55 62 35 C58 22 68 25 72 35 Z" fill="url(#tulipGrad)"/>
        <path d="M36 28 C45 20 55 20 64 28 C68 45 62 78 50 85 C38 78 32 45 36 28 Z" fill="url(#tulipLight)"/>
        <path d="M46 22 C48 18 52 18 54 22 C55 30 52 40 50 42 C48 40 45 30 46 22 Z" fill="#fff0f5"/>
      </svg>
    `
  },
  {
    id: 'sunflower',
    name: 'Hướng Dương Rực Rỡ',
    emoji: '🌻',
    category: 'Bạn Bè & Đồng Nghiệp',
    stemHeight: 'stem-tall',
    swaySpeed: 'sway-fast',
    delay: '-2.4s',
    meaning: 'Biểu tượng của niềm tin, sự kiên định, năng lượng tích cực và thành công tỏa sáng.',
    wishes: [
      `Chúc bạn ngày 20/10 luôn tràn đầy nhiệt huyết, rực rỡ như hoa hướng dương đón nắng mới. Chúc mọi mục tiêu, hoài bão của bạn đều thành công rực rỡ! 🌻✨`,
      `Gửi tới người bạn/đồng nghiệp tuyệt vời: Chúc bạn luôn xinh đẹp, năng động, công việc thăng hoa và mỗi ngày trôi qua đều ngập tràn niềm hứng khởi!`
    ],
    svg: `
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="sunflowerCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#5c3a21"/>
            <stop offset="80%" stop-color="#3d2314"/>
            <stop offset="100%" stop-color="#2a160c"/>
          </radialGradient>
        </defs>
        <!-- Cánh hoa hướng dương xoay quanh -->
        <g stroke="#e67e22" stroke-width="0.5">
          <ellipse cx="50" cy="18" rx="7" ry="16" fill="#fbc531"/>
          <ellipse cx="50" cy="82" rx="7" ry="16" fill="#fbc531"/>
          <ellipse cx="18" cy="50" rx="16" ry="7" fill="#fbc531"/>
          <ellipse cx="82" cy="50" rx="16" ry="7" fill="#fbc531"/>
          <ellipse cx="27" cy="27" rx="8" ry="16" transform="rotate(-45 27 27)" fill="#e1b12c"/>
          <ellipse cx="73" cy="27" rx="8" ry="16" transform="rotate(45 73 27)" fill="#e1b12c"/>
          <ellipse cx="27" cy="73" rx="8" ry="16" transform="rotate(45 27 73)" fill="#e1b12c"/>
          <ellipse cx="73" cy="73" rx="8" ry="16" transform="rotate(-45 73 73)" fill="#e1b12c"/>
          <ellipse cx="50" cy="22" rx="6" ry="14" fill="#ffd32a"/>
          <ellipse cx="50" cy="78" rx="6" ry="14" fill="#ffd32a"/>
          <ellipse cx="22" cy="50" rx="14" ry="6" fill="#ffd32a"/>
          <ellipse cx="78" cy="50" rx="14" ry="6" fill="#ffd32a"/>
        </g>
        <!-- Nhụy hoa to tròn -->
        <circle cx="50" cy="50" r="22" fill="url(#sunflowerCore)"/>
        <circle cx="50" cy="50" r="20" fill="none" stroke="#e1b12c" stroke-width="2" stroke-dasharray="3,3"/>
      </svg>
    `
  },
  {
    id: 'daisy',
    name: 'Cúc Họa Mi Trong Sáng',
    emoji: '🌸',
    category: 'Chị Em Gái Ngọt Ngào',
    stemHeight: 'stem-short',
    swaySpeed: 'sway-slow',
    delay: '-0.7s',
    meaning: 'Tượng trưng cho sự trong sáng, hồn nhiên, nụ cười vui tươi và tình cảm gắn kết.',
    wishes: [
      `Chúc chị/em gái một ngày 20/10 ngập tràn niềm vui, nhận được thật nhiều quà và hoa. Hãy luôn giữ nụ cười vô tư, duyên dáng và yêu đời nhé! 🌸🥰`,
      `Ngày 20/10 chúc người chị/em đáng yêu mãi trẻ trung, xinh tươi, học tập và công việc luôn hanh thông, gặp thật nhiều may mắn trên đường đời!`
    ],
    svg: `
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="daisyCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ffea00"/>
            <stop offset="100%" stop-color="#ffaa00"/>
          </radialGradient>
        </defs>
        <!-- Các cánh hoa trắng mỏng -->
        <g fill="#ffffff" stroke="#f1f5f9" stroke-width="0.8">
          <ellipse cx="50" cy="18" rx="5" ry="18"/>
          <ellipse cx="50" cy="82" rx="5" ry="18"/>
          <ellipse cx="18" cy="50" rx="18" ry="5"/>
          <ellipse cx="82" cy="50" rx="18" ry="5"/>
          <ellipse cx="27" cy="27" rx="5" ry="18" transform="rotate(-45 27 27)"/>
          <ellipse cx="73" cy="27" rx="5" ry="18" transform="rotate(45 73 27)"/>
          <ellipse cx="27" cy="73" rx="5" ry="18" transform="rotate(45 27 73)"/>
          <ellipse cx="73" cy="73" rx="5" ry="18" transform="rotate(-45 73 73)"/>
          <ellipse cx="38" cy="20" rx="4.5" ry="17" transform="rotate(-22.5 38 20)"/>
          <ellipse cx="62" cy="20" rx="4.5" ry="17" transform="rotate(22.5 62 20)"/>
          <ellipse cx="38" cy="80" rx="4.5" ry="17" transform="rotate(22.5 38 80)"/>
          <ellipse cx="62" cy="80" rx="4.5" ry="17" transform="rotate(-22.5 62 80)"/>
        </g>
        <!-- Nhụy vàng óng -->
        <circle cx="50" cy="50" r="14" fill="url(#daisyCore)" stroke="#e67e22" stroke-width="1"/>
      </svg>
    `
  },
  {
    id: 'lotus',
    name: 'Hoa Sen Thanh Tao',
    emoji: '🪷',
    category: 'Người Phụ Nữ Truyền Cảm Hứng',
    stemHeight: 'stem-med',
    swaySpeed: 'sway-mid',
    delay: '-1.8s',
    meaning: 'Biểu tượng của nét đẹp thuần khiết, trí tuệ, sự kiên cường và lòng bao dung cao quý.',
    wishes: [
      `Kính chúc Cô giáo / Người phụ nữ truyền cảm hứng ngày 20/10 dồi dào sức khỏe, hạnh phúc và luôn tràn đầy tâm huyết để tiếp tục dẫn dắt bao thế hệ vươn xa! 🪷📖`,
      `Chúc bạn luôn giữ được tâm thế bình an, nhẹ nhàng như hoa sen giữa hồ nước, tỏa hương thơm thanh khiết làm đẹp cho cuộc đời!`
    ],
    svg: `
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lotusPink" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#ff80bf"/>
            <stop offset="60%" stop-color="#ffb3d9"/>
            <stop offset="100%" stop-color="#ffffff"/>
          </linearGradient>
        </defs>
        <!-- Cánh sen nở lớp ngoài -->
        <path d="M50 20 C32 40 20 62 30 78 C40 85 50 82 50 82 C50 82 60 85 70 78 C80 62 68 40 50 20 Z" fill="url(#lotusPink)"/>
        <path d="M22 55 C15 65 24 75 38 78 C28 72 24 62 22 55 Z" fill="#ff66b2"/>
        <path d="M78 55 C85 65 76 75 62 78 C72 72 76 62 78 55 Z" fill="#ff66b2"/>
        <!-- Cánh sen lớp giữa -->
        <path d="M50 30 C38 48 34 68 42 78 C46 81 50 80 50 80 C50 80 54 81 58 78 C66 68 62 48 50 30 Z" fill="#ffe6f2"/>
        <circle cx="50" cy="62" r="7" fill="#facc15"/>
      </svg>
    `
  },
  {
    id: 'carnation',
    name: 'Cẩm Chướng Tri Kỷ',
    emoji: '🌺',
    category: 'Trân Quý & Biết Ơn',
    stemHeight: 'stem-tall',
    swaySpeed: 'sway-slow',
    delay: '-3.1s',
    meaning: 'Biểu tượng của tình cảm chân thành, sự kính trọng, gắn bó bền chặt và tri ân.',
    wishes: [
      `Chúc bạn ngày 20/10 ngập tràn may mắn, luôn được yêu thương và chở che. Cảm ơn vì đã luôn là người bạn đồng hành tuyệt vời trong từng chặng đường! 🌺💕`,
      `Mỗi người phụ nữ là một điều kỳ diệu của thế giới. Chúc bạn luôn tự tin, tỏa sáng và được đón nhận tất cả những điều ngọt ngào nhất hôm nay!`
    ],
    svg: `
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="carnationGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#d946ef"/>
            <stop offset="100%" stop-color="#ec4899"/>
          </linearGradient>
        </defs>
        <!-- Cánh hoa viền ren răng cưa -->
        <path d="M50 20 L55 28 L65 22 L68 32 L78 30 L76 40 L85 45 L78 55 L84 65 L72 70 L68 80 L56 76 L50 82 L44 76 L32 80 L28 70 L16 65 L22 55 L15 45 L24 40 L22 30 L32 32 L35 22 L45 28 Z" fill="url(#carnationGrad)"/>
        <circle cx="50" cy="50" r="18" fill="#f472b6"/>
        <circle cx="50" cy="50" r="9" fill="#fdf2f8"/>
      </svg>
    `
  },
  {
    id: 'lisianthus',
    name: 'Cát Tường May Mắn',
    emoji: '🌼',
    category: 'Vạn Sự Như Ý',
    stemHeight: 'stem-short',
    swaySpeed: 'sway-fast',
    delay: '-1.5s',
    meaning: 'Mang thông điệp bình an, may mắn, hạnh phúc viên mãn và vạn sự cát tường.',
    wishes: [
      `Chúc bạn ngày 20/10 ngập tràn niềm vui, vạn sự hanh thông, luôn an yên và gặp thật nhiều may mắn trong cuộc sống cũng như công việc! 🌼🍀`,
      `Gửi ngàn đóa hoa cát tường tới bạn: Chúc bạn luôn rạng rỡ, bình an trong tâm hồn và gặt hái thật nhiều thành tựu rực rỡ!`
    ],
    svg: `
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="lislGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#ffffff"/>
            <stop offset="60%" stop-color="#c4b5fd"/>
            <stop offset="100%" stop-color="#8b5cf6"/>
          </radialGradient>
        </defs>
        <!-- Cánh hoa xoắn mềm mại -->
        <circle cx="50" cy="50" r="34" fill="url(#lislGrad)"/>
        <path d="M50 24 C40 24 32 35 34 50 C36 65 50 72 50 72 C50 72 64 65 66 50 C68 35 60 24 50 24 Z" fill="#ddd6fe"/>
        <circle cx="50" cy="48" r="9" fill="#fef08a"/>
      </svg>
    `
  }
];

// ==========================================================================
// 2. KHỞI TẠO DOM ELEMENTS
// ==========================================================================
const flowerMeadow = document.getElementById('flowerMeadow');
const wishDialog = document.getElementById('wishDialog');
const dialogCloseBtn = document.getElementById('dialogCloseBtn');
const backToGardenBtn = document.getElementById('backToGardenBtn');
const copyWishBtn = document.getElementById('copyWishBtn');
const copyIcon = document.getElementById('copyIcon');
const copyLabel = document.getElementById('copyLabel');
const flowerIconPreview = document.getElementById('flowerIconPreview');
const wishCategory = document.getElementById('wishCategory');
const dialogTitle = document.getElementById('dialogTitle');
const wishContent = document.getElementById('wishContent');
const flowerMeaning = document.getElementById('flowerMeaning');
const recipientDisplay = document.getElementById('recipientDisplay');
const flowerMiniList = document.getElementById('flowerMiniList');

const nameDialog = document.getElementById('nameDialog');
const customNameBtn = document.getElementById('customNameBtn');
const nameDialogCloseBtn = document.getElementById('nameDialogCloseBtn');
const nameForm = document.getElementById('nameForm');
const recipientInput = document.getElementById('recipientInput');
const clearNameBtn = document.getElementById('clearNameBtn');

const randomWishBtn = document.getElementById('randomWishBtn');
const musicToggleBtn = document.getElementById('musicToggleBtn');
const musicIcon = document.getElementById('musicIcon');
const audioWaves = document.getElementById('audioWaves');
const toastNotification = document.getElementById('toastNotification');
const petalCanvas = document.getElementById('petalCanvas');

// Trạng thái ứng dụng
let currentRecipient = localStorage.getItem('recipient_2010') || '';
let selectedFlowerIndex = 0;
let isAudioPlaying = false;
let audioCtx = null;
let musicInterval = null;

// ==========================================================================
// 3. TUÂN THỦ MODERN WEB GUIDANCE: ANIMATE-TO-FROM-TOP-LAYER
// ==========================================================================

/**
 * Kiểm tra xem trình duyệt có hỗ trợ chuyển tiếp display (allow-discrete) thật sự không
 * (Tránh lỗi trên Firefox 129+ nơi CSS.supports trả về true nhưng chưa thực sự transition display)
 */
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

/**
 * Kiểm tra xem trình duyệt có hỗ trợ cả overlay và display transition hay không
 */
function supportsTopLayerExit() {
  return window.CSS?.supports?.('overlay', 'auto') && canTransitionDisplay();
}

/**
 * Đóng phần tử top layer một cách mượt mà (smooth exit transition)
 */
async function closeTopLayer(element) {
  if (!element.open) return;

  if (!supportsTopLayerExit()) {
    element.setAttribute('data-closing', '');
    const animations = element.getAnimations({ subtree: true });
    if (animations.length > 0) {
      await Promise.race([
        Promise.allSettled(animations.map((a) => a.finished)),
        new Promise((resolve) => setTimeout(resolve, 380)),
      ]);
    }
    if (!element.hasAttribute('data-closing')) return;
    element.removeAttribute('data-closing');
  }

  element.close();
}

// Bắt sự kiện Esc để chạy animation đóng mượt mà
[wishDialog, nameDialog].forEach((dlg) => {
  dlg.addEventListener('cancel', (e) => {
    e.preventDefault();
    closeTopLayer(dlg);
  });
});

// Click ra ngoài backdrop để đóng (Light dismiss modal)
[wishDialog, nameDialog].forEach((dlg) => {
  dlg.addEventListener('click', (e) => {
    const rect = dlg.getBoundingClientRect();
    const isInDialog = (
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width
    );
    if (!isInDialog) {
      closeTopLayer(dlg);
    }
  });
});

// ==========================================================================
// 4. KẾT XUẤT VƯỜN HOA ĐUNG ĐƯA (RENDER FLOWER MEADOW)
// ==========================================================================
function renderGarden() {
  flowerMeadow.innerHTML = '';
  flowerMiniList.innerHTML = '';

  FLOWERS_DATA.forEach((flower, index) => {
    // Tạo phần tử cây hoa
    const flowerItem = document.createElement('div');
    flowerItem.className = `flower-item ${flower.swaySpeed}`;
    flowerItem.style.animationDelay = flower.delay;
    flowerItem.setAttribute('tabindex', '0');
    flowerItem.setAttribute('role', 'button');
    flowerItem.setAttribute('aria-label', `${flower.name} - ${flower.category}`);

    flowerItem.innerHTML = `
      <div class="flower-tooltip">${flower.name}</div>
      <div class="flower-head">
        ${flower.svg}
      </div>
      <div class="flower-stem-wrapper">
        <div class="flower-stem ${flower.stemHeight}"></div>
        <div class="leaf left"></div>
        <div class="leaf right"></div>
      </div>
    `;

    // Sự kiện tương tác click/Enter vào hoa
    const triggerFlower = (event) => {
      createSparkleBurst(event.clientX || (flowerItem.getBoundingClientRect().left + 40), event.clientY || (flowerItem.getBoundingClientRect().top + 30));
      openWishModal(index);
    };

    flowerItem.addEventListener('click', triggerFlower);
    flowerItem.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        triggerFlower(e);
      }
    });

    flowerMeadow.appendChild(flowerItem);

    // Tạo mini chip chọn hoa nhanh trong modal
    const chip = document.createElement('button');
    chip.className = 'mini-chip';
    chip.setAttribute('type', 'button');
    chip.setAttribute('title', flower.name);
    chip.textContent = flower.emoji;
    chip.addEventListener('click', () => {
      openWishModal(index);
    });
    flowerMiniList.appendChild(chip);
  });

  updateRecipientBadge();
}

// ==========================================================================
// 5. HIỂN THỊ MODAL LỜI CHÚC
// ==========================================================================
function openWishModal(index) {
  selectedFlowerIndex = index;
  const flower = FLOWERS_DATA[index];

  flowerIconPreview.textContent = flower.emoji;
  wishCategory.textContent = flower.category;
  dialogTitle.textContent = flower.name;
  flowerMeaning.innerHTML = `🌱 <em>Ý nghĩa loài hoa:</em> ${flower.meaning}`;

  // Tùy biến lời chúc theo người nhận
  let chosenWish = flower.wishes[Math.floor(Math.random() * flower.wishes.length)];
  if (currentRecipient) {
    recipientDisplay.style.display = 'inline-block';
    recipientDisplay.textContent = `Gửi tặng: ${currentRecipient}`;
  } else {
    recipientDisplay.style.display = 'none';
  }

  wishContent.textContent = chosenWish;

  // Cập nhật trạng thái active cho mini chip
  const chips = flowerMiniList.querySelectorAll('.mini-chip');
  chips.forEach((c, i) => {
    c.classList.toggle('active', i === index);
  });

  // Reset nút sao chép
  copyIcon.textContent = '📋';
  copyLabel.textContent = 'Sao chép lời chúc';

  wishDialog.showModal();
}

// Đóng modal quay lại vườn hoa
dialogCloseBtn.addEventListener('click', () => closeTopLayer(wishDialog));
backToGardenBtn.addEventListener('click', () => closeTopLayer(wishDialog));

// ==========================================================================
// 6. SAO CHÉP LỜI CHÚC & TOAST
// ==========================================================================
copyWishBtn.addEventListener('click', async () => {
  const flower = FLOWERS_DATA[selectedFlowerIndex];
  let textToCopy = '';
  if (currentRecipient) {
    textToCopy += `💌 Gửi tặng ${currentRecipient}\n`;
  }
  textToCopy += `💐 ${flower.name} - Ngày 20/10:\n\n${wishContent.textContent}\n\nChúc mừng Ngày Phụ Nữ Việt Nam 20/10! 🌸`;

  try {
    await navigator.clipboard.writeText(textToCopy);
    copyIcon.textContent = '✅';
    copyLabel.textContent = 'Đã sao chép!';
    showToast('Đã sao chép lời chúc thành công! 💖');
  } catch (err) {
    showToast('Đã chọn nội dung lời chúc!');
  }
});

function showToast(message) {
  toastNotification.textContent = message;
  toastNotification.classList.add('show');
  setTimeout(() => {
    toastNotification.classList.remove('show');
  }, 2600);
}

// ==========================================================================
// 7. CÁ NHÂN HÓA TÊN NGƯỜI NHẬN
// ==========================================================================
customNameBtn.addEventListener('click', () => {
  recipientInput.value = currentRecipient;
  nameDialog.showModal();
});

nameDialogCloseBtn.addEventListener('click', () => closeTopLayer(nameDialog));

nameForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const val = recipientInput.value.trim();
  currentRecipient = val;
  if (val) {
    localStorage.setItem('recipient_2010', val);
    showToast(`Đã lưu lời gửi tặng đến: ${val} 🌸`);
  } else {
    localStorage.removeItem('recipient_2010');
    showToast('Đã xóa tên người nhận');
  }
  updateRecipientBadge();
  closeTopLayer(nameDialog);
});

clearNameBtn.addEventListener('click', () => {
  recipientInput.value = '';
  currentRecipient = '';
  localStorage.removeItem('recipient_2010');
  updateRecipientBadge();
  closeTopLayer(nameDialog);
  showToast('Đã đặt lại lời chúc mặc định');
});

function updateRecipientBadge() {
  if (currentRecipient) {
    customNameBtn.innerHTML = `<span>💌</span> <span class="label">Gửi: ${currentRecipient}</span>`;
  } else {
    customNameBtn.innerHTML = `<span>💌</span> <span class="label">Gửi người thương</span>`;
  }
}

// ==========================================================================
// 8. HÁI HOA NGẪU NHIÊN
// ==========================================================================
randomWishBtn.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * FLOWERS_DATA.length);
  const flowerItems = flowerMeadow.querySelectorAll('.flower-item');
  if (flowerItems[randomIndex]) {
    flowerItems[randomIndex].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
    flowerItems[randomIndex].style.filter = 'drop-shadow(0 0 25px #ff1493)';
    setTimeout(() => {
      flowerItems[randomIndex].style.filter = '';
      openWishModal(randomIndex);
    }, 450);
  } else {
    openWishModal(randomIndex);
  }
});

// ==========================================================================
// 9. HIỆU ỨNG TIA LẤP LÁNH KHI CHẠM VÀO HOA (SPARKLE BURST)
// ==========================================================================
function createSparkleBurst(x, y) {
  if (!x || !y) return;
  const colors = ['#ff4d80', '#ffd166', '#06d6a0', '#118ab2', '#ff758c', '#ffffff'];
  for (let i = 0; i < 16; i++) {
    const p = document.createElement('div');
    p.className = 'sparkle-burst';
    p.style.left = `${x}px`;
    p.style.top = `${y}px`;
    p.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    const angle = (i / 16) * 2 * Math.PI + (Math.random() * 0.4);
    const distance = 40 + Math.random() * 65;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance;

    p.style.setProperty('--tx', `${tx}px`);
    p.style.setProperty('--ty', `${ty}px`);

    document.body.appendChild(p);
    setTimeout(() => p.remove(), 900);
  }
}

// ==========================================================================
// 10. ÂM NHẠC ÊM DỊU TỰ ĐỘNG (WEB AUDIO SYNTHESIZER - ZERO EXTERNAL FILES)
// ==========================================================================
// Giai điệu piano/kalimba nhẹ nhàng, thư thái, hoàn toàn tự chạy không cần tải file MP3
const CHORD_NOTES = [
  // Hợp âm C major / Fmaj7 / G / Am lofi ấm áp
  [261.63, 329.63, 392.00, 523.25], // C - E - G - C
  [349.23, 440.00, 523.25, 659.25], // F - A - C - E
  [392.00, 493.88, 587.33, 783.99], // G - B - D - G
  [220.00, 261.63, 329.63, 440.00], // A - C - E - A
];

function playKalimbaNote(freq, time, duration = 1.2) {
  if (!audioCtx) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(freq, time);

  // Envelope êm dịu chuông gió
  gain.gain.setValueAtTime(0, time);
  gain.gain.linearRampToValueAtTime(0.08, time + 0.05);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start(time);
  osc.stop(time + duration);
}

let chordIndex = 0;
let noteIndex = 0;

function startGentleMusic() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  isAudioPlaying = true;
  audioWaves.classList.add('playing');
  musicIcon.textContent = '🎶';

  // Chơi các nốt arpeggio lãng mạn nhẹ nhàng
  musicInterval = setInterval(() => {
    if (!isAudioPlaying) return;
    const currentChord = CHORD_NOTES[chordIndex];
    const freq = currentChord[noteIndex];
    playKalimbaNote(freq, audioCtx.currentTime);

    noteIndex++;
    if (noteIndex >= currentChord.length) {
      noteIndex = 0;
      chordIndex = (chordIndex + 1) % CHORD_NOTES.length;
    }
  }, 420);
}

function stopGentleMusic() {
  isAudioPlaying = false;
  if (musicInterval) clearInterval(musicInterval);
  audioWaves.classList.remove('playing');
  musicIcon.textContent = '🎵';
}

musicToggleBtn.addEventListener('click', () => {
  if (!isAudioPlaying) {
    startGentleMusic();
    showToast('Đang phát giai điệu du dương 🎶');
  } else {
    stopGentleMusic();
    showToast('Đã tạm dừng âm nhạc');
  }
});

// ==========================================================================
// 11. CANVAS CÁNH HOA BAY THEO GIÓ (FALLING FLOWER PETALS)
// ==========================================================================
class PetalSimulation {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.petals = [];
    this.numPetals = 25;
    this.resize();
    this.initPetals();

    window.addEventListener('resize', () => this.resize());
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  initPetals() {
    this.petals = [];
    for (let i = 0; i < this.numPetals; i++) {
      this.petals.push(this.createPetal(true));
    }
  }

  createPetal(randomY = false) {
    const colors = [
      'rgba(255, 182, 193, 0.75)',
      'rgba(255, 105, 180, 0.65)',
      'rgba(255, 218, 224, 0.8)',
      'rgba(255, 192, 203, 0.7)',
    ];
    return {
      x: Math.random() * this.width,
      y: randomY ? Math.random() * this.height : -20,
      size: 8 + Math.random() * 10,
      speedY: 0.8 + Math.random() * 1.4,
      speedX: 0.5 + Math.random() * 1.2,
      sway: Math.random() * 2 * Math.PI,
      swaySpeed: 0.02 + Math.random() * 0.02,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 2,
      color: colors[Math.floor(Math.random() * colors.length)],
    };
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    for (let i = 0; i < this.petals.length; i++) {
      const p = this.petals[i];
      p.y += p.speedY;
      p.sway += p.swaySpeed;
      p.x += p.speedX + Math.sin(p.sway) * 0.8;
      p.rotation += p.rotationSpeed;

      // Vẽ cánh hoa hình giọt nước uốn cong
      this.ctx.save();
      this.ctx.translate(p.x, p.y);
      this.ctx.rotate((p.rotation * Math.PI) / 180);
      this.ctx.beginPath();
      this.ctx.fillStyle = p.color;
      this.ctx.ellipse(0, 0, p.size, p.size * 0.6, 0, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.restore();

      // Khi rơi xuống đáy thì quay lại đỉnh
      if (p.y > this.height + 20 || p.x > this.width + 30) {
        this.petals[i] = this.createPetal(false);
      }
    }

    requestAnimationFrame(this.animate);
  }
}

// ==========================================================================
// 12. KHỞI CHẠY KHI TẢI TRANG
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  renderGarden();
  new PetalSimulation(petalCanvas);
});
