/* ═══════════════════════════════════════════════
   FROST HAWK — script.js
   ─ i18n
   ─ Gallery (reads gallery-data.json or fallback)
   ─ Lightbox
   ─ Contact form → Telegram
   ─ Scroll animations
   ─ Mobile bar phone reveal
═══════════════════════════════════════════════ */

// ── TELEGRAM CONFIG ──────────────────────────
// Replace these after you create the bot:
const TG_TOKEN  = "8921540536:AAEi1cjlarKdwM91TfrH8ecbwsblxIv0Qp4";
const TG_CHAT   = "298158066";

// ── GALLERY FALLBACK ─────────────────────────
// Used if gallery-data.json doesn't exist yet
const GALLERY_FALLBACK = [
  { src: "gallery1.jpg",   label: "Ductwork + Mechanical Room" },
  { src: "gallery2.jpg",   label: "Dual Trane AC Units Install" },
  { src: "gallery3.jpg",   label: "Furnace + PVC Venting Install" },
  { src: "gallery4.jpg",   label: "AC Condenser Installation" },
  { src: "gallery5.jpg",   label: "Furnace with Aprilaire humidifier" },
  { src: "gallery6.jpg",   label: "Rooftop condensers – Chicago skyline" },
  { src: "gallery7.jpg",   label: "Rooftop condensers – Chicago skyline" },
  { src: "gallery8.jpg",   label: "Mitsubishi rooftop mini-split install" },
  { src: "gallery9.jpg",   label: "Furnace & coil in mechanical closet" },
  { src: "gallery10.jpg",  label: "Radiant floor heating – commercial" },
  { src: "gallery10_1.jpg",label: "Hydronic radiant heating layout" },
  { src: "gallery10_2.jpg",label: "Radiant heating system with insulation" },
];

const VISIBLE_GALLERY = 6;

// ── i18n ─────────────────────────────────────
const I18N = {
  en: {
    brand_name:"FROST HAWK", brand_sub:"Heating & Cooling",
    nav_services:"Services", nav_gallery:"Gallery", nav_why:"Why Us", nav_contact:"Contact",
    nav_247:"24/7", nav_service:"Service",
    btn_call:"☎ Call or Text: (773) 647-0598", btn_call_short:"☎ (773) 647-0598",
    btn_quote:"Get a Free Quote",
    hero_tag:"Same-day HVAC service · Chicago area",
    hero_title:"Professional HVAC Services You Can Trust",
    hero_subtitle:"Expert installation, repair, and maintenance for homes and small businesses. Clean work, honest pricing, fast response.",
    badge_hvac:"HVAC Install & Repair", badge_residential:"Residential & Commercial", badge_area:"Chicago, IL & suburbs",
    card_title:"Frost Hawk | HVAC", card_chip:"Licensed technician",
    card_footer_title:"Professional Heating & Cooling",
    card_city:"Chicago, IL", card_note:"Same-day when available",
    chip_furnace:"Furnace", chip_ac:"AC", chip_duct:"Ductwork", chip_trouble:"Diagnostics",
    stat_availability:"Availability", stat_years:"Years exp.", stat_rating:"Rating",
    services_title:"Services", services_h2:"What We Do",
    svc_install_title:"HVAC Installation",
    svc_install_text:"Properly sized and professionally installed systems that run efficiently and keep your home comfortable all year.",
    svc_install_li1:"New furnace and AC installation", svc_install_li2:"System replacement and upgrades",
    svc_install_li3:"Thermostat & control wiring", svc_install_li4:"Ductwork modifications",
    svc_repair_title:"Repair & Diagnostics",
    svc_repair_text:"System stopped working, blowing cold air, or making strange noises? We find the cause and fix it right.",
    svc_repair_li1:"No-heat / no-cool calls", svc_repair_li2:"Electrical & control issues",
    svc_repair_li3:"Airflow and duct problems", svc_repair_li4:"Emergency troubleshooting",
    svc_upgrades_title:"Comfort Upgrades",
    svc_upgrades_text:"Improve comfort, air quality, and energy efficiency with professional add-ons and fine-tuning.",
    svc_upgrades_li1:"Humidifiers & air cleaners", svc_upgrades_li2:"Zoning & smart thermostats",
    svc_upgrades_li3:"System balancing & air sealing", svc_upgrades_li4:"Maintenance & seasonal checkups",
    gallery_title:"Gallery", gallery_h2:"Our Work", gallery_show_more:"Show all photos",
    why_title:"Why Choose Us", why_h2:"The Frost Hawk Difference",
    why_prof_title:"Professional Work", why_prof_text:"Clean installs, tight ductwork, correct wiring, and respect for your home. We treat every project as if it is our own house.",
    why_comm_title:"Clear Communication", why_comm_text:"You always know what is being done, why, and how much it costs. No hidden fees, no surprise extras.",
    why_fast_title:"Fast Response", why_fast_text:"When there is no heat or cooling, every hour matters. We do our best to provide same-day or next-day service whenever possible.",
    contact_title:"Contact", contact_h2:"Get In Touch",
    contact_call_label:"Call / Text", contact_email_label:"Email", contact_area_label:"Service Area",
    contact_area_text:"Chicago, IL & nearby suburbs",
    contact_note:"For fastest response, include photos of your equipment, model numbers, and a short description of the problem.",
    form_title:"Quick Request", form_name_label:"Name", form_name_ph:"Your name",
    form_phone_label:"Phone", form_phone_ph:"Your phone",
    form_msg_label:"Message", form_msg_ph:"Installation, no-heat issue, maintenance...",
    form_btn:"Send Request",
    form_success:"✓ Message sent! We'll get back to you soon.",
    form_error:"⚠ Something went wrong. Please call us directly.",
    footer_text:"© YEAR Frost Hawk Heating & Cooling. All rights reserved.",
    admin_link:"Admin",
  },
  uk: {
    brand_name:"FROST HAWK", brand_sub:"Опалення та кондиціювання",
    nav_services:"Послуги", nav_gallery:"Галерея", nav_why:"Чому ми", nav_contact:"Контакти",
    nav_247:"24/7", nav_service:"Сервіс",
    btn_call:"☎ Дзвінок або SMS: (773) 647-0598", btn_call_short:"☎ (773) 647-0598",
    btn_quote:"Отримати прорахунок",
    hero_tag:"HVAC сервіс того ж дня · район Chicago",
    hero_title:"Професійні HVAC послуги, яким можна довіряти",
    hero_subtitle:"Монтаж, ремонт та обслуговування HVAC для будинків і малого бізнесу. Чиста робота, чесна ціна, швидка реакція.",
    badge_hvac:"HVAC монтаж та ремонт", badge_residential:"Житлові та комерційні об'єкти", badge_area:"Chicago, IL та передмістя",
    card_title:"Frost Hawk | HVAC", card_chip:"Ліцензований технік",
    card_footer_title:"Професійне опалення та кондиціювання",
    card_city:"Chicago, IL", card_note:"За можливості — сервіс того ж дня",
    chip_furnace:"Піч", chip_ac:"Кондиціонер", chip_duct:"Повітропроводи", chip_trouble:"Діагностика",
    stat_availability:"Доступність", stat_years:"Досвід", stat_rating:"Рейтинг",
    services_title:"Послуги", services_h2:"Що ми робимо",
    svc_install_title:"Монтаж HVAC",
    svc_install_text:"Правильно підібрані та професійно встановлені системи, що працюють ефективно цілий рік.",
    svc_install_li1:"Монтаж печей та кондиціонерів", svc_install_li2:"Заміна та модернізація систем",
    svc_install_li3:"Підключення термостатів та керування", svc_install_li4:"Зміни повітропроводів",
    svc_repair_title:"Ремонт і Діагностика",
    svc_repair_text:"Система не працює, дме холодним або шумить? Знайдемо причину та виправимо правильно.",
    svc_repair_li1:"Виклики без тепла / без холоду", svc_repair_li2:"Проблеми з електрикою та керуванням",
    svc_repair_li3:"Проблеми з потоком повітря та повітропроводами", svc_repair_li4:"Аварійне усунення несправностей",
    svc_upgrades_title:"Покращення комфорту",
    svc_upgrades_text:"Покращіть комфорт, якість повітря та енергоефективність з професійними рішеннями.",
    svc_upgrades_li1:"Зволожувачі та очищувачі повітря", svc_upgrades_li2:"Зонування та розумні термостати",
    svc_upgrades_li3:"Балансування системи та герметизація", svc_upgrades_li4:"Обслуговування та сезонні перевірки",
    gallery_title:"Галерея", gallery_h2:"Наші роботи", gallery_show_more:"Показати всі фото",
    why_title:"Чому обрати нас", why_h2:"Перевага Frost Hawk",
    why_prof_title:"Професійна робота", why_prof_text:"Чистий монтаж, герметичні повітропроводи, правильне підключення та повага до вашого дому. Робимо як для себе.",
    why_comm_title:"Зрозуміла комунікація", why_comm_text:"Ви завжди знаєте, що робимо, чому і скільки це коштує. Без прихованих платежів і сюрпризів.",
    why_fast_title:"Швидка реакція", why_fast_text:"Коли немає тепла або холоду — важлива кожна година. Робимо все, щоб приїхати того ж дня або наступного, якщо можливо.",
    contact_title:"Контакти", contact_h2:"Зв'язатися з нами",
    contact_call_label:"Дзвінок / SMS", contact_email_label:"Email", contact_area_label:"Район обслуговування",
    contact_area_text:"Chicago, IL та передмістя",
    contact_note:"Для швидкої відповіді вкажіть, що потрібно — монтаж, ремонт, немає тепла тощо.",
    form_title:"Швидкий запит", form_name_label:"Ім'я", form_name_ph:"Ваше ім'я",
    form_phone_label:"Телефон", form_phone_ph:"Ваш телефон",
    form_msg_label:"Повідомлення", form_msg_ph:"Монтаж, немає тепла, обслуговування...",
    form_btn:"Надіслати запит",
    form_success:"✓ Повідомлення надіслано! Ми зв'яжемось з вами найближчим часом.",
    form_error:"⚠ Щось пішло не так. Будь ласка, зателефонуйте нам напряму.",
    footer_text:"© YEAR Frost Hawk Heating & Cooling. Всі права захищено.",
    admin_link:"Адмін",
  },
  pl: {
    brand_name:"FROST HAWK", brand_sub:"Ogrzewanie i klimatyzacja",
    nav_services:"Usługi", nav_gallery:"Galeria", nav_why:"Dlaczego my", nav_contact:"Kontakt",
    nav_247:"24/7", nav_service:"Serwis",
    btn_call:"☎ Zadzwoń lub SMS: (773) 647-0598", btn_call_short:"☎ (773) 647-0598",
    btn_quote:"Uzyskaj bezpłatną wycenę",
    hero_tag:"Serwis HVAC tego samego dnia · okolice Chicago",
    hero_title:"Profesjonalne usługi HVAC, którym możesz zaufać",
    hero_subtitle:"Montaż, naprawa i konserwacja HVAC dla domów i małych firm. Czysta robota, uczciwe ceny, szybka reakcja.",
    badge_hvac:"Montaż i serwis HVAC", badge_residential:"Domy i komercja", badge_area:"Chicago, IL i okolice",
    card_title:"Frost Hawk | HVAC", card_chip:"Licencjonowany technik",
    card_footer_title:"Profesjonalne ogrzewanie i klimatyzacja",
    card_city:"Chicago, IL", card_note:"Serwis tego samego dnia gdy dostępny",
    chip_furnace:"Piec", chip_ac:"Klimatyzacja", chip_duct:"Kanały", chip_trouble:"Diagnostyka",
    stat_availability:"Dostępność", stat_years:"Lat dośw.", stat_rating:"Ocena",
    services_title:"Usługi", services_h2:"Co robimy",
    svc_install_title:"Montaż HVAC",
    svc_install_text:"Poprawnie dobrane i profesjonalnie zamontowane systemy, które działają wydajnie przez cały rok.",
    svc_install_li1:"Montaż pieców i klimatyzacji", svc_install_li2:"Wymiana i modernizacja systemów",
    svc_install_li3:"Podłączenie termostatów i sterowania", svc_install_li4:"Modyfikacje kanałów wentylacyjnych",
    svc_repair_title:"Naprawa i Diagnostyka",
    svc_repair_text:"System nie działa, wieje zimnym lub hałasuje? Znajdziemy przyczynę i naprawimy właściwie.",
    svc_repair_li1:"Wezwania bez ogrzewania/chłodzenia", svc_repair_li2:"Problemy elektryczne i sterowania",
    svc_repair_li3:"Problemy z przepływem powietrza", svc_repair_li4:"Awaryjna diagnostyka",
    svc_upgrades_title:"Ulepszenia komfortu",
    svc_upgrades_text:"Popraw komfort, jakość powietrza i efektywność energetyczną dzięki profesjonalnym dodatkom.",
    svc_upgrades_li1:"Nawilżacze i oczyszczacze powietrza", svc_upgrades_li2:"Strefy i inteligentne termostaty",
    svc_upgrades_li3:"Balans systemu i uszczelnienia", svc_upgrades_li4:"Konserwacja i przeglądy sezonowe",
    gallery_title:"Galeria", gallery_h2:"Nasze prace", gallery_show_more:"Pokaż wszystkie zdjęcia",
    why_title:"Dlaczego my", why_h2:"Różnica Frost Hawk",
    why_prof_title:"Profesjonalna robota", why_prof_text:"Czysty montaż, szczelne kanały, poprawne podłączenia i szacunek do Twojego domu. Robimy jak dla siebie.",
    why_comm_title:"Jasna komunikacja", why_comm_text:"Zawsze wiesz, co robimy, dlaczego i ile to kosztuje. Bez ukrytych opłat i niespodzianek.",
    why_fast_title:"Szybka reakcja", why_fast_text:"Gdy nie ma ciepła lub chłodzenia, liczy się każda godzina. Robimy wszystko, aby być tego samego dnia lub następnego.",
    contact_title:"Kontakt", contact_h2:"Skontaktuj się z nami",
    contact_call_label:"Telefon / SMS", contact_email_label:"Email", contact_area_label:"Obszar obsługi",
    contact_area_text:"Chicago, IL i okolice",
    contact_note:"Dla szybkiej odpowiedzi podaj, czego potrzebujesz — montaż, naprawa, brak ciepła itp.",
    form_title:"Szybkie zapytanie", form_name_label:"Imię", form_name_ph:"Twoje imię",
    form_phone_label:"Telefon", form_phone_ph:"Twój telefon",
    form_msg_label:"Wiadomość", form_msg_ph:"Montaż, brak ciepła, konserwacja...",
    form_btn:"Wyślij zapytanie",
    form_success:"✓ Wiadomość wysłana! Wkrótce się z Tobą skontaktujemy.",
    form_error:"⚠ Coś poszło nie tak. Proszę zadzwoń do nas bezpośrednio.",
    footer_text:"© YEAR Frost Hawk Heating & Cooling. Wszelkie prawa zastrzeżone.",
    admin_link:"Admin",
  },
};

let currentLang = "en";

function applyLang(lang) {
  const dict = I18N[lang] || I18N.en;
  currentLang = lang;
  document.documentElement.lang = lang === "uk" ? "uk" : lang === "pl" ? "pl" : "en";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = dict[key] || I18N.en[key];
    if (!val) return;
    const year = new Date().getFullYear();
    const final = val.replace("YEAR", year);
    if (/<[^>]+>/.test(final) || el.children.length > 0) el.innerHTML = final;
    else el.textContent = final;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    const val = dict[key] || I18N.en[key];
    if (val) el.placeholder = val;
  });

  document.querySelectorAll(".lang-btn").forEach(b =>
    b.classList.toggle("active", b.dataset.lang === lang)
  );

  try { localStorage.setItem("fh_lang", lang); } catch(_) {}
}

// ── GALLERY ──────────────────────────────────
let galleryData = [];
let galleryVisible = VISIBLE_GALLERY;
let lightboxIndex = 0;

async function loadGallery() {
  try {
    const res = await fetch("gallery-data.json?t=" + Date.now());
    if (res.ok) {
      galleryData = await res.json();
    } else {
      galleryData = GALLERY_FALLBACK;
    }
  } catch(_) {
    galleryData = GALLERY_FALLBACK;
  }
  renderGallery();
}

function renderGallery() {
  const grid = document.getElementById("galleryGrid");
  const moreBtn = document.getElementById("galleryMoreBtn");
  if (!grid) return;

  grid.innerHTML = "";
  const items = galleryData.slice(0, galleryVisible);

  items.forEach((photo, i) => {
    const div = document.createElement("div");
    div.className = "gallery-item fade-up";
    div.style.backgroundImage = `url('${photo.src}')`;
    div.style.transitionDelay = (i % 3) * 0.08 + "s";

    div.innerHTML = `
      <div class="gallery-overlay">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"/>
        </svg>
      </div>
      <div class="gallery-label">${photo.label || ""}</div>
    `;

    div.addEventListener("click", () => openLightbox(i));
    grid.appendChild(div);
  });

  // trigger fade-up
  requestAnimationFrame(() => {
    grid.querySelectorAll(".fade-up").forEach(el => {
      setTimeout(() => el.classList.add("visible"), 50);
    });
  });

  if (moreBtn) {
    if (galleryVisible < galleryData.length) {
      moreBtn.style.display = "inline-flex";
      moreBtn.onclick = () => {
        galleryVisible = galleryData.length;
        renderGallery();
        moreBtn.style.display = "none";
      };
    } else {
      moreBtn.style.display = "none";
    }
  }
}

// ── LIGHTBOX ─────────────────────────────────
function openLightbox(i) {
  lightboxIndex = i;
  const lb = document.getElementById("lightbox");
  const img = document.getElementById("lbImg");
  const cap = document.getElementById("lbCaption");
  if (!lb || !img) return;

  img.src = galleryData[i].src;
  if (cap) cap.textContent = galleryData[i].label || "";
  lb.classList.add("is-open");
  document.documentElement.classList.add("lb-open");
}

function closeLightbox() {
  document.getElementById("lightbox")?.classList.remove("is-open");
  document.documentElement.classList.remove("lb-open");
}

function shiftLightbox(dir) {
  lightboxIndex = (lightboxIndex + dir + galleryData.length) % galleryData.length;
  openLightbox(lightboxIndex);
}

// ── CONTACT FORM → TELEGRAM ──────────────────
async function submitToTelegram(name, phone, message) {
  const text = `🔧 *New Frost Hawk Request*\n\n👤 *Name:* ${name}\n📞 *Phone:* ${phone}\n\n💬 *Message:*\n${message}`;
  const url = `https://api.telegram.org/bot${TG_TOKEN}/sendMessage`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: TG_CHAT, text, parse_mode: "Markdown" }),
  });
  if (!res.ok) throw new Error("Telegram error");
}

// ── SCROLL ANIMATIONS ─────────────────────────
function initScrollAnimations() {
  const targets = document.querySelectorAll(".svc-card, .why-card, .contact-item, .section-head");
  targets.forEach(el => el.classList.add("fade-up"));

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } });
  }, { threshold: 0.1 });

  targets.forEach(el => io.observe(el));
}

// ── MOBILE BAR PHONE REVEAL ───────────────────
function initMobilePhone() {
  const hdrPhone = document.querySelector(".hdr-phone");
  if (!hdrPhone) return;
  const io = new IntersectionObserver(([e]) => {
    document.body.classList.toggle("mob-show-phone", !e.isIntersecting);
  }, { threshold: 0.1 });
  io.observe(document.querySelector(".site-header") || document.body);
}

// ── INIT ─────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  // Year in footer
  const yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();

  // Language
  let startLang = "en";
  try {
    const saved = localStorage.getItem("fh_lang");
    if (saved && I18N[saved]) startLang = saved;
    else {
      const nav = (navigator.language || "").toLowerCase();
      if (nav.startsWith("uk")) startLang = "uk";
      else if (nav.startsWith("pl")) startLang = "pl";
    }
  } catch(_) {}

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => applyLang(btn.dataset.lang));
  });
  applyLang(startLang);

  // Gallery
  loadGallery();

  // Lightbox controls
  document.getElementById("lbClose")?.addEventListener("click", closeLightbox);
  document.getElementById("lbPrev")?.addEventListener("click", () => shiftLightbox(-1));
  document.getElementById("lbNext")?.addEventListener("click", () => shiftLightbox(1));
  document.getElementById("lightbox")?.addEventListener("click", e => {
    if (e.target === document.getElementById("lightbox")) closeLightbox();
  });
  document.addEventListener("keydown", e => {
    if (!document.getElementById("lightbox")?.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") shiftLightbox(1);
    if (e.key === "ArrowLeft") shiftLightbox(-1);
  });

  // Contact form
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const dict = I18N[currentLang] || I18N.en;
      const name    = form.querySelector("[name=name]").value.trim();
      const phone   = form.querySelector("[name=phone]").value.trim();
      const message = form.querySelector("[name=message]").value.trim();
      const btn = form.querySelector("button[type=submit]");

      btn.disabled = true;
      btn.textContent = "…";
      if (status) { status.className = "form-status"; status.textContent = ""; }

      try {
        await submitToTelegram(name, phone, message);
        if (status) { status.className = "form-status success"; status.textContent = dict.form_success; }
        form.reset();
      } catch(_) {
        if (status) { status.className = "form-status error"; status.textContent = dict.form_error; }
      } finally {
        btn.disabled = false;
        btn.textContent = dict.form_btn;
      }
    });
  }

  // Scroll animations
  initScrollAnimations();

  // Mobile phone reveal (basic scroll)
  window.addEventListener("scroll", () => {
    const hero = document.querySelector(".hero");
    if (!hero) return;
    const passed = window.scrollY > hero.offsetHeight * 0.5;
    document.body.classList.toggle("mob-show-phone", passed);
  }, { passive: true });
});
