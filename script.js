document.addEventListener("DOMContentLoaded", () => {
    const VISIBLE = 9;

    /* ===== I18N (EN / UA / PL) ===== */
    const I18N = {
        en: {
        "badge_area": "Serving Chicago, IL and nearby suburbs",
        "badge_hvac": "HVACInstallation & Repair",
        "badge_residential": "Residential & Light Commercial",
        "brand_name": "FROST HAWK",
        "brand_sub": "Heating & Cooling",
        "btn_call": "Call or Text: (773) 647-0598",
        "btn_email": "Email a quote request",
        "card_chip": "Licensed technician",
        "card_city": "Chicago, IL",
        "card_footer_title": "Professional Heating & Cooling",
        "card_note": "Same-day service when available",
        "card_title": "Frost Hawk | HVAC",
        "chip_ac": "AC install",
        "chip_duct": "Ductwork",
        "chip_furnace": "Furnace install",
        "chip_trouble": "Troubleshooting",
        "contact_area_label": "Area",
        "contact_area_text": "Chicago, IL & nearby suburbs",
        "contact_call_label": "Call / Text",
        "contact_email_label": "Email",
        "contact_note": "For the fastest response, please include photos of your\n                equipment, model numbers, and a short description of the\n                problem.",
        "contact_title": "Contact",
        "footer_text": "©Frost Hawk Heating & Cooling. All rights reserved.",
        "form_btn": "Send request",
        "form_msg_label": "What do you need help with?",
        "form_msg_ph": "Installation, no-heat issue, maintenance, etc.",
        "form_name_label": "Name",
        "form_name_ph": "Your name",
        "form_note": "This is a visual example. Your web developer can connect it to\n                email or CRM.",
        "form_phone_label": "Phone",
        "form_phone_ph": "Your phone",
        "form_title": "Quick request form",        "gallery_title": "Gallery",
        "hero_subtitle": "Frost Hawk provides expert HVAC installation, repair, and\n              maintenance for homes and small businesses. Clean work, honest\n              pricing, and fast response.",
        "hero_tag": "Same-day HVAC service in Chicago area",
        "hero_title": "Professional HVAC Services You Can Trust",
        "nav_247": "24/7",
        "nav_contact": "Contact",
        "nav_gallery": "Gallery",
        "nav_service": "Service",
        "nav_services": "Services",
        "nav_why": "Why Frost Hawk",
        "services_title": "Services",
        "svc_install_li1": "New furnace and AC installation",
        "svc_install_li2": "System replacement and upgrades",
        "svc_install_li3": "Thermostat & control wiring",
        "svc_install_li4": "Ductwork modifications",
        "svc_install_text": "Properly sized and professionally installed systems that run\n                efficiently and keep your home comfortable all year.",
        "svc_install_title": "HVAC Installation",
        "svc_repair_li1": "No-heat / no-cool calls",
        "svc_repair_li2": "Electrical & control issues",
        "svc_repair_li3": "Airflow and duct problems",
        "svc_repair_li4": "Emergency troubleshooting",
        "svc_repair_text": "If the system stopped working, blowing cold air, or making\n                strange noises — we will find the cause and fix it right.",
        "svc_repair_title": "Repair & Diagnostics",
        "svc_upgrades_li1": "Humidifiers & air cleaners",
        "svc_upgrades_li2": "Zoning & smart thermostats",
        "svc_upgrades_li3": "System balancing & air sealing",
        "svc_upgrades_li4": "Maintenance & seasonal checkups",
        "svc_upgrades_text": "Improve comfort, air quality, and energy efficiency with\n                professional add-ons and fine-tuning.",
        "svc_upgrades_title": "Comfort Upgrades",
        "why_comm_text": "You always know what is being done, why, and how much it costs.\n                No hidden fees, no surprise extras.",
        "why_comm_title": "Clear communication",
        "why_fast_text": "When there is no heat or cooling, every hour matters. We do our\n                best to provide same-day or next-day service whenever possible.",
        "why_fast_title": "Fast response",
        "why_prof_text": "Clean installs, tight ductwork, correct wiring, and respect for\n                your home. We treat every project as if it is our own house.",
        "why_prof_title": "Professional work",
        "why_title": "Why choose Frost Hawk?"
},
        uk: {
        "badge_area": "Працюємо в Chicago, IL та найближчих передмістях",
        "badge_hvac": "<strong>HVAC</strong> монтаж та ремонт",
        "badge_residential": "Житлові об’єкти та легка комерція",
        "brand_name": "FROST HAWK",
        "brand_sub": "Опалення та кондиціювання",
        "btn_call": "Дзвінок або SMS: (773) 647-0598",
        "btn_email": "Написати запит на прорахунок",
        "card_chip": "Ліцензований технік",
        "card_city": "Chicago, IL",
        "card_footer_title": "Професійне опалення та кондиціювання",
        "card_note": "За можливості — сервіс того ж дня",
        "card_title": "Frost Hawk | HVAC",
        "chip_ac": "Монтаж AC",
        "chip_duct": "Повітропроводи",
        "chip_furnace": "Монтаж печі",
        "chip_trouble": "Діагностика",
        "contact_area_label": "Район:",
        "contact_area_text": "Chicago, IL та передмістя",
        "contact_call_label": "Телефон:",
        "contact_email_label": "Email:",
        "contact_note": "Вкажіть, що потрібно (монтаж/ремонт/нема тепла/нема холоду) — відповімо якнайшвидше.",
        "contact_title": "Зв’язатися",
        "footer_text": "© <span id=\"year\"></span> Frost Hawk Heating &amp; Cooling. Всі права захищено.",
        "form_btn": "Надіслати",
        "form_msg_label": "Повідомлення",
        "form_msg_ph": "Монтаж, немає тепла, сервіс, обслуговування тощо.",
        "form_name_label": "Ім’я",
        "form_name_ph": "Ваше ім’я",
        "form_note": "Ми не розсилаємо спам. Тільки відповідаємо по вашому запиту.",
        "form_phone_label": "Телефон",
        "form_phone_ph": "Ваш телефон",
        "form_title": "Запит на прорахунок",        "gallery_title": "Галерея робіт",
        "hero_tag": "<span class=\"hero-tag-pill\"></span> HVAC сервіс того ж дня в районі Chicago",
        "nav_247": "24/7",
        "nav_contact": "Контакти",
        "nav_gallery": "Галерея",
        "nav_service": "Сервіс",
        "nav_services": "Послуги",
        "nav_why": "Чому Frost Hawk",
        "services_title": "Послуги",
        "svc_install_li1": "Монтаж газових печей (furnace)",
        "svc_install_li2": "Монтаж кондиціонерів (AC)",
        "svc_install_li3": "Підключення термостатів та керування",
        "svc_install_li4": "Пуско-наладка та перевірка",
        "svc_install_text": "Нові системи, заміни та правильний монтаж з чистою подачею.",
        "svc_install_title": "Монтаж",
        "svc_repair_li1": "Нема тепла / немає холоду",
        "svc_repair_li2": "Електрика та проблеми керування",
        "svc_repair_li3": "Помилки термостата / плати",
        "svc_repair_li4": "Витоки, шум, слабкий потік повітря",
        "svc_repair_text": "Швидка діагностика і ремонт, щоб система знову працювала стабільно.",
        "svc_repair_title": "Ремонт і Діагностика",
        "svc_upgrades_li1": "Зволожувачі &amp; очищувачі повітря",
        "svc_upgrades_li2": "Зонування &amp; розумні термостати",
        "svc_upgrades_li3": "Балансування системи &amp; герметизація",
        "svc_upgrades_li4": "Сезонне обслуговування та checkup",
        "svc_upgrades_text": "Покращіть комфорт, якість повітря та енергоефективність завдяки професійним рішенням.",
        "svc_upgrades_title": "Покращення комфорту",
        "why_comm_text": "Ви завжди знаєте, що робимо, чому і скільки це коштує. Без прихованих платежів і “сюрпризів”.",
        "why_comm_title": "Зрозуміла комунікація",
        "why_fast_text": "Коли немає тепла або холоду — важлива кожна година. Робимо все, щоб приїхати того ж дня або наступного, якщо можливо.",
        "why_fast_title": "Швидка реакція",
        "why_prof_text": "Чистий монтаж, герметичні повітропроводи, правильне підключення та повага до вашого дому. Робимо як для себе.",
        "why_prof_title": "Професійна робота",
        "why_title": "Чому обирають Frost Hawk?",
        "hero_title": "Професійні HVAC послуги, яким можна довіряти",
        "hero_subtitle": "Frost Hawk виконує монтаж і ремонт HVAC у Chicago та передмістях. Чиста робота, чесна ціна та швидка реакція."
},
        pl: {
        "badge_area": "Obsługujemy Chicago, IL oraz okoliczne przedmieścia",
        "badge_hvac": "<strong>HVAC</strong> montaż i serwis",
        "badge_residential": "Domy i lekka komercja",
        "brand_name": "FROST HAWK",
        "brand_sub": "Ogrzewanie i klimatyzacja",
        "btn_call": "Zadzwoń lub SMS: (773) 647-0598",
        "btn_email": "Wyślij zapytanie o wycenę",
        "card_chip": "Licencjonowany technik",
        "card_city": "Chicago, IL",
        "card_footer_title": "Profesjonalne ogrzewanie i klimatyzacja",
        "card_note": "Serwis tego samego dnia — gdy dostępny",
        "card_title": "Frost Hawk | HVAC",
        "chip_ac": "Montaż AC",
        "chip_duct": "Kanały / ductwork",
        "chip_furnace": "Montaż pieca",
        "chip_trouble": "Diagnostyka",
        "contact_area_label": "Obszar:",
        "contact_area_text": "Chicago, IL i okolice",
        "contact_call_label": "Telefon:",
        "contact_email_label": "Email:",
        "contact_note": "Napisz, czego potrzebujesz (montaż/naprawa/brak ciepła/brak chłodzenia) — odezwiemy się szybko.",
        "contact_title": "Kontakt",
        "footer_text": "© <span id=\"year\"></span> Frost Hawk Heating &amp; Cooling. Wszelkie prawa zastrzeżone.",
        "form_btn": "Wyślij",
        "form_msg_label": "Wiadomość",
        "form_msg_ph": "Montaż, brak ciepła, serwis, konserwacja itd.",
        "form_name_label": "Imię",
        "form_name_ph": "Twoje imię",
        "form_note": "Nie wysyłamy spamu. Tylko odpowiadamy na Twoje zapytanie.",
        "form_phone_label": "Telefon",
        "form_phone_ph": "Twój telefon",
        "form_title": "Zapytanie o wycenę",        "gallery_title": "Galeria",
        "hero_tag": "<span class=\"hero-tag-pill\"></span> Serwis HVAC tego samego dnia w okolicy Chicago",
        "nav_247": "24/7",
        "nav_contact": "Kontakt",
        "nav_gallery": "Galeria",
        "nav_service": "Serwis",
        "nav_services": "Usługi",
        "nav_why": "Dlaczego Frost Hawk",
        "services_title": "Usługi",
        "svc_install_li1": "Montaż pieców gazowych (furnace)",
        "svc_install_li2": "Montaż klimatyzacji (AC)",
        "svc_install_li3": "Podłączenie termostatów i sterowania",
        "svc_install_li4": "Uruchomienie i testy",
        "svc_install_text": "Nowe systemy, wymiany i poprawny montaż wykonany czysto i solidnie.",
        "svc_install_title": "Montaż",
        "svc_repair_li1": "Brak ciepła / brak chłodzenia",
        "svc_repair_li2": "Elektryka i sterowanie",
        "svc_repair_li3": "Błędy termostatu / płyty",
        "svc_repair_li4": "Wycieki, hałas, słaby przepływ powietrza",
        "svc_repair_text": "Szybka diagnostyka i naprawa, żeby system działał stabilnie.",
        "svc_repair_title": "Naprawa i Diagnostyka",
        "svc_upgrades_li1": "Nawilżacze &amp; oczyszczacze",
        "svc_upgrades_li2": "Strefy &amp; inteligentne termostaty",
        "svc_upgrades_li3": "Balans systemu &amp; uszczelnienia",
        "svc_upgrades_li4": "Konserwacja i przeglądy sezonowe",
        "svc_upgrades_text": "Popraw komfort, jakość powietrza i efektywność energii dzięki profesjonalnym dodatkom.",
        "svc_upgrades_title": "Ulepszenia komfortu",
        "why_comm_text": "Zawsze wiesz, co robimy, dlaczego i ile to kosztuje. Bez ukrytych opłat i niespodzianek.",
        "why_comm_title": "Jasna komunikacja",
        "why_fast_text": "Gdy nie ma ciepła lub chłodzenia, liczy się każda godzina. Robimy wszystko, aby być tego samego dnia lub następnego, jeśli to możliwe.",
        "why_fast_title": "Szybka reakcja",
        "why_prof_text": "Czysty montaż, szczelne kanały, poprawne podłączenia i szacunek do Twojego domu. Robimy jak dla siebie.",
        "why_prof_title": "Profesjonalna robota",
        "why_title": "Dlaczego Frost Hawk?",
        "hero_title": "Profesjonalne usługi HVAC, którym możesz zaufać",
        "hero_subtitle": "Frost Hawk oferuje montaż i naprawy HVAC w Chicago i okolicach. Czysta robota, uczciwe ceny i szybka reakcja."
}
    };

    const langButtons = Array.from(document.querySelectorAll(".lang-btn"));

    function applyLang(lang) {
        const dict = I18N[lang] || I18N.en;

        // set active state on buttons
        langButtons.forEach(b => b.classList.toggle("active", b.dataset.lang === lang));

        // set <html lang="">
        document.documentElement.lang = lang === "uk" ? "uk" : (lang === "pl" ? "pl" : "en");

        // text nodes
        document.querySelectorAll("[data-i18n]").forEach((el) => {
            const key = el.getAttribute("data-i18n");
            const val = (dict && dict[key]) || (I18N.en && I18N.en[key]);
            if (val == null) return;

            // If element originally contains HTML (child nodes) or val looks like HTML, keep HTML.
            const looksHtml = typeof val === "string" && /<[^>]+>/.test(val);
            if (el.children.length > 0 || looksHtml) {
                el.innerHTML = val;
            } else {
                el.textContent = val;
            }
        });

        // placeholders
        document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
            const key = el.getAttribute("data-i18n-placeholder");
            const val = (dict && dict[key]) || (I18N.en && I18N.en[key]);
            if (typeof val === "string") {
                el.setAttribute("placeholder", val);
            }
        });

        try {
            localStorage.setItem("fh_lang", lang);
        } catch (_) {}
    }

    // init language (saved -> browser -> default EN)
    let startLang = "en";
    try {
        const saved = localStorage.getItem("fh_lang");
        if (saved && I18N[saved]) startLang = saved;
        else {
            const nav = (navigator.language || "").toLowerCase();
            if (nav.startsWith("uk")) startLang = "uk";
            if (nav.startsWith("pl")) startLang = "pl";
        }
    } catch (_) {}

    langButtons.forEach((btn) => {
        btn.addEventListener("click", () => applyLang(btn.dataset.lang));
    });

    // footer year
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    applyLang(startLang);

    const photos = Array.from(
        document.querySelectorAll(".gallery-item:not(.gallery-more)")
    );
    const moreTile = document.querySelector(".gallery-item.gallery-more");

    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const btnClose = document.querySelector(".close-lightbox");
    const btnPrev = document.querySelector(".lightbox-prev");
    const btnNext = document.querySelector(".lightbox-next");

    const modal = document.getElementById("galleryModal");
    const modalGrid = document.getElementById("galleryModalGrid");
    const modalClose = document.querySelector(".gallery-modal__close");
    const modalOverlay = document.querySelector(".gallery-modal__overlay");

    let currentIndex = 0;

    /* helpers */
    function bg(el) {
        const s = el.style.backgroundImage || "";
        return s ? s.slice(5, -2) : "";
    }

    function label(el) {
        const l = el.querySelector(".gallery-item-label");
        return l ? l.textContent.trim() : "";
    }

    /* ===== GRID CONTROL ===== */
    photos.forEach((el, i) => {
        if (i >= VISIBLE) el.style.display = "none";
    });

    const hiddenCount = photos.length - VISIBLE;
    if (hiddenCount > 0 && moreTile) {
        moreTile.style.display = "flex";
        moreTile.querySelector(".gallery-more__text").textContent = `+${hiddenCount}`;
    }

    /* ===== LIGHTBOX ===== */
    function openLightbox(i) {
        if (i < 0) i = photos.length - 1;
        if (i >= photos.length) i = 0;

        currentIndex = i;
        lightboxImg.src = bg(photos[i]);
        lightbox.style.display = "flex";
        lockScroll();
    }

    function closeLightbox() {
        lightbox.style.display = "none";
        lightboxImg.src = "";
        unlockScroll();
    }

    photos.forEach((el, i) => {
        el.addEventListener("click", () => openLightbox(i));
    });

    btnClose.onclick = closeLightbox;
    // Close lightbox when clicking outside the image (background)
    lightbox.addEventListener("click", (e) => {
        // if click is on backdrop itself (not the image or nav buttons)
        if (e.target === lightbox) closeLightbox();
    });

    btnPrev.onclick = () => openLightbox(currentIndex - 1);
    btnNext.onclick = () => openLightbox(currentIndex + 1);

    window.addEventListener("keydown", (e) => {
        if (lightbox.style.display !== "flex") return;
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowRight") openLightbox(currentIndex + 1);
        if (e.key === "ArrowLeft") openLightbox(currentIndex - 1);
    });

    /* ===== MODAL ===== */
    // ===== Scroll lock helpers (re-entrant; prevents background scrolling on iOS/Android) =====
    let __scrollY = 0;
    let __lockDepth = 0;

    function lockScroll() {
        __lockDepth += 1;
        if (__lockDepth > 1) return; // already locked by a parent modal

        __scrollY = window.scrollY || window.pageYOffset || 0;
        document.documentElement.classList.add("modal-open");
        document.body.classList.add("modal-open");
        document.body.style.position = "fixed";
        document.body.style.top = `-${__scrollY}px`;
        document.body.style.left = "0";
        document.body.style.right = "0";
        document.body.style.width = "100%";
    }

    function unlockScroll() {
        if (__lockDepth === 0) return;
        __lockDepth -= 1;
        if (__lockDepth > 0) return; // keep locked until last modal closes

        document.documentElement.classList.remove("modal-open");
        document.body.classList.remove("modal-open");
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.left = "";
        document.body.style.right = "";
        document.body.style.width = "";
        window.scrollTo(0, __scrollY);
    }

    function openModal() {
        modalGrid.innerHTML = "";

        photos.forEach((el, i) => {
            const t = document.createElement("div");
            t.className = "gallery-modal__thumb";
            t.style.backgroundImage = `url(${bg(el)})`;

            const l = label(el);
            if (l) {
                const cap = document.createElement("div");
                cap.className = "gallery-modal__thumb-label";
                cap.textContent = l;
                t.appendChild(cap);
            }

            t.onclick = () => {
                closeModal();
                openLightbox(i);
            };

            modalGrid.appendChild(t);
        });

        modal.classList.add("is-open");
        lockScroll();
    }

    function closeModal() {
        modal.classList.remove("is-open");
        unlockScroll();
    }

    
    // Mobile Services accordion (tap cards to expand/collapse)
    function initServicesAccordion() {
        const cards = Array.from(document.querySelectorAll("#services .card"));
        if (!cards.length) return;

        const mq = window.matchMedia("(max-width: 768px)");

        function setA11y(card) {
            card.setAttribute("role", "button");
            card.setAttribute("tabindex", "0");
            card.setAttribute("aria-expanded", card.classList.contains("is-open") ? "true" : "false");
        }

        function clearA11y(card) {
            card.removeAttribute("role");
            card.removeAttribute("tabindex");
            card.removeAttribute("aria-expanded");
        }

        function toggle(target) {
            const willOpen = !target.classList.contains("is-open");
            // one open at a time on mobile
            cards.forEach((c) => c.classList.remove("is-open"));
            if (willOpen) target.classList.add("is-open");

            cards.forEach((c) => {
                if (mq.matches) {
                    c.setAttribute("aria-expanded", c.classList.contains("is-open") ? "true" : "false");
                }
            });
        }

        function bind(card) {
            if (card.dataset.accBound === "1") return;
            card.dataset.accBound = "1";

            card.addEventListener("click", () => {
                if (!mq.matches) return;
                toggle(card);
            });

            card.addEventListener("keydown", (e) => {
                if (!mq.matches) return;
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggle(card);
                }
            });
        }

        function apply() {
            if (mq.matches) {
                cards.forEach((card) => {
                    bind(card);
                    setA11y(card);
                });
            } else {
                // desktop: show all content normally
                cards.forEach((card) => {
                    card.classList.remove("is-open");
                    clearA11y(card);
                });
            }
        }

        apply();
        if (mq.addEventListener) mq.addEventListener("change", apply);
        else mq.addListener(apply);
    }

    initServicesAccordion();

moreTile.onclick = openModal;
    modalClose.onclick = closeModal;
    modalOverlay.onclick = closeModal;
});

// Mobile header phone button on scroll
(function(){
  const PHONE_SHOW_AT = 120; // px
  function onScroll(){
    if (window.innerWidth > 768) {
      document.body.classList.remove("show-phone");
      return;
    }
    if (window.scrollY > PHONE_SHOW_AT) document.body.classList.add("show-phone");
    else document.body.classList.remove("show-phone");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  onScroll();
})()

// Mobile bottom sticky CALL button: show when user reaches Services section, hide near the very top
(function(){
  const cta = document.querySelector(".mobile-sticky-cta");
  const services = document.getElementById("services");
  if (!cta || !services) return;

  // Tune these two numbers to control when it shows/hides:
  // - SHOW_OFFSET: shows a bit earlier (before Services reaches the top)
  // - HIDE_OFFSET: hides a bit later when scrolling back up (must be bigger than SHOW_OFFSET)
  const SHOW_OFFSET = 240;
  const HIDE_OFFSET = 360;

  let visible = false;
  let ticking = false;

  function setVisible(next){
    visible = next;
    cta.classList.toggle("is-visible", visible);
    document.body.classList.toggle("has-sticky", visible);
  }

  function compute(){
    if (!window.matchMedia('(max-width: 768px)').matches) { setVisible(false); return; }

    const y = window.scrollY || window.pageYOffset || 0;
    const servicesTop = services.getBoundingClientRect().top + y;

    // hysteresis: different thresholds depending on current state
    const showAt = servicesTop - SHOW_OFFSET;
    const hideAt = servicesTop - HIDE_OFFSET;

    if (!visible){
      if (y >= showAt) setVisible(true);
    } else {
      if (y <= hideAt) setVisible(false);
    }
  }

  function onScroll(){
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      compute();
      ticking = false;
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", compute);
  compute();
})();
;



// Mobile fixed nav + phone attaches when header phone scrolls out of view
(function(){
  const fixedBar = document.getElementById("mobileFixedBar");
  const fixedPhone = document.getElementById("mobileFixedPhone");
  const headerPhone = document.querySelector(".header-phone-btn") || document.querySelector('a[href^="tel:"]');

  if (!fixedBar) return;

  function isMobile(){
    return window.matchMedia("(max-width: 768px)").matches;
  }

  function setBarHeight(){
    if (!isMobile()){
      document.documentElement.style.setProperty("--mobile-fixed-bar-h", "0px");
      document.body.classList.remove("show-fixed-phone");
      return;
    }
    // measure with/without phone depending on current state
    const h = fixedBar.offsetHeight || 0;
    document.documentElement.style.setProperty("--mobile-fixed-bar-h", h + "px");
  }

  // Observe header phone: when it becomes visible, hide fixed phone; when not, show fixed phone
  if (headerPhone && fixedPhone){
    const io = new IntersectionObserver(([entry]) => {
      if (!isMobile()) return;
      document.body.classList.toggle("show-fixed-phone", !entry.isIntersecting);
      // allow layout to settle then re-measure
      window.requestAnimationFrame(() => setBarHeight());
    }, { threshold: 0.01 });

    io.observe(headerPhone);
  }

  window.addEventListener("resize", () => setBarHeight());
  window.addEventListener("orientationchange", () => setTimeout(setBarHeight, 50));

  // if language changes text length, re-measure after click
  document.addEventListener("click", (e) => {
    const t = e.target;
    if (t && (t.matches(".lang-btn") || t.closest(".lang-switch"))){
      setTimeout(setBarHeight, 60);
    }
  });

  // initial
  setTimeout(setBarHeight, 50);
})();
