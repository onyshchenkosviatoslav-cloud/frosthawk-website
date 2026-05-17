/* ══════════════════════════════════════════
   FROST HAWK v2 — script.js
   ─ Scroll animations
   ─ Counter animations
   ─ Gallery + Lightbox
   ─ Contact form → Telegram
   ─ Mobile bar
══════════════════════════════════════════ */

const TG_TOKEN = "8921540536:AAEi1cjlarKdwM91TfrH8ecbwsblxIv0Qp4";
const TG_CHAT  = "298158066";

const GALLERY_FALLBACK = [
  { src:"gallery1.jpg",    label:"Ductwork + Mechanical Room" },
  { src:"gallery2.jpg",    label:"Dual Trane AC Units Install" },
  { src:"gallery3.jpg",    label:"Furnace + PVC Venting Install" },
  { src:"gallery4.jpg",    label:"AC Condenser Installation" },
  { src:"gallery5.jpg",    label:"Furnace with Aprilaire Humidifier" },
  { src:"gallery6.jpg",    label:"Rooftop Condensers – Chicago Skyline" },
  { src:"gallery7.jpg",    label:"Rooftop Condensers – Chicago Skyline" },
  { src:"gallery8.jpg",    label:"Mitsubishi Rooftop Mini-Split Install" },
  { src:"gallery9.jpg",    label:"Furnace & Coil in Mechanical Closet" },
  { src:"gallery10.jpg",   label:"Radiant Floor Heating – Commercial" },
  { src:"gallery10_1.jpg", label:"Hydronic Radiant Heating Layout" },
  { src:"gallery10_2.jpg", label:"Radiant Heating System with Insulation" },
];

const VISIBLE = 6;
let galleryData = [];
let galleryVisible = VISIBLE;
let lbIndex = 0;

/* ── SCROLL ANIMATIONS ── */
function initScrollAnimations() {
  const els = document.querySelectorAll('.anim-fade-up, .anim-slide-right');
  if (!els.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  els.forEach(el => io.observe(el));
}

/* ── COUNTER ANIMATION ── */
function animateCounter(el, target, suffix = '') {
  const duration = 1400;
  const start = performance.now();
  const isSpecial = suffix === '/7'; // 24/7 — don't animate

  if (isSpecial) return; // keep as-is

  function tick(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const val = Math.round(target * ease);
    el.textContent = val + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const el = e.target;
        const count = parseInt(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        animateCounter(el, count, suffix);
        io.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => io.observe(el));
}

/* ── GALLERY ── */
async function loadGallery() {
  try {
    const r = await fetch('gallery-data.json?t=' + Date.now());
    galleryData = r.ok ? await r.json() : [...GALLERY_FALLBACK];
  } catch (_) {
    galleryData = [...GALLERY_FALLBACK];
  }
  renderGallery();
}

function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  const btn  = document.getElementById('galleryMoreBtn');
  if (!grid) return;

  grid.innerHTML = '';
  const items = galleryData.slice(0, galleryVisible);

  items.forEach((photo, i) => {
    const div = document.createElement('div');
    div.className = 'gallery-item anim-fade-up';
    div.style.backgroundImage = `url('${photo.src}')`;
    div.style.transitionDelay = (i % 3) * 0.07 + 's';
    div.innerHTML = `<div class="gallery-ov">🔍</div><div class="gallery-label">${photo.label || ''}</div>`;
    div.addEventListener('click', () => openLightbox(i));
    grid.appendChild(div);
  });

  // trigger scroll animations for gallery items
  requestAnimationFrame(() => {
    grid.querySelectorAll('.anim-fade-up').forEach(el => {
      setTimeout(() => el.classList.add('visible'), 80);
    });
  });

  if (btn) {
    btn.style.display = galleryVisible < galleryData.length ? 'inline-flex' : 'none';
    btn.onclick = () => { galleryVisible = galleryData.length; renderGallery(); };
  }
}

/* ── LIGHTBOX ── */
function openLightbox(i) {
  lbIndex = i;
  const lb  = document.getElementById('lightbox');
  const img = document.getElementById('lbImg');
  const cap = document.getElementById('lbCaption');
  img.src = galleryData[i].src;
  if (cap) cap.textContent = galleryData[i].label || '';
  lb.classList.add('is-open');
  document.documentElement.classList.add('lb-open');
}
function closeLightbox() {
  document.getElementById('lightbox')?.classList.remove('is-open');
  document.documentElement.classList.remove('lb-open');
}
function shiftLb(dir) {
  lbIndex = (lbIndex + dir + galleryData.length) % galleryData.length;
  openLightbox(lbIndex);
}

/* ── TELEGRAM FORM ── */
async function sendToTelegram(name, phone, message) {
  const text = `🔧 *New Frost Hawk Request*\n\n👤 *Name:* ${name}\n📞 *Phone:* ${phone}\n\n💬 *Message:*\n${message}`;
  const r = await fetch(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: TG_CHAT, text, parse_mode: 'Markdown' }),
  });
  if (!r.ok) throw new Error('Telegram error');
}

/* ── MOBILE PHONE REVEAL ── */
function initMobilePhone() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  window.addEventListener('scroll', () => {
    const past = window.scrollY > (hero.offsetHeight * 0.5);
    document.body.classList.toggle('mob-phone', past);
  }, { passive: true });
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  // Year
  const yr = document.getElementById('year');
  if (yr) yr.textContent = new Date().getFullYear();

  // Animations
  initScrollAnimations();
  initCounters();

  // Gallery
  loadGallery();

  // Lightbox
  document.getElementById('lbClose')?.addEventListener('click', closeLightbox);
  document.getElementById('lbPrev')?.addEventListener('click', () => shiftLb(-1));
  document.getElementById('lbNext')?.addEventListener('click', () => shiftLb(1));
  document.getElementById('lightbox')?.addEventListener('click', e => {
    if (e.target === document.getElementById('lightbox')) closeLightbox();
  });
  document.addEventListener('keydown', e => {
    if (!document.getElementById('lightbox')?.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') shiftLb(1);
    if (e.key === 'ArrowLeft') shiftLb(-1);
  });

  // Contact form
  const form   = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (form) {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const name    = form.querySelector('[name=name]').value.trim();
      const phone   = form.querySelector('[name=phone]').value.trim();
      const message = form.querySelector('[name=message]').value.trim();
      const btn = form.querySelector('button[type=submit]');
      btn.disabled = true;
      btn.textContent = '…';
      if (status) { status.className = 'form-status'; status.textContent = ''; }
      try {
        await sendToTelegram(name, phone, message);
        if (status) { status.className = 'form-status ok'; status.textContent = '✓ Message sent! We\'ll get back to you soon.'; }
        form.reset();
      } catch (_) {
        if (status) { status.className = 'form-status err'; status.textContent = '⚠ Something went wrong. Please call us directly.'; }
      } finally {
        btn.disabled = false;
        btn.textContent = 'Send Request →';
      }
    });
  }

  // Mobile phone reveal
  initMobilePhone();

  // Parallax on hero bg text (subtle)
  const bgText = document.querySelector('.hero-bg-text');
  if (bgText) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      bgText.style.transform = `translateY(${y * 0.12}px)`;
    }, { passive: true });
  }
});
