/* =========================================================
   1) CONFIGURACIÓN — editá estas dos líneas
========================================================= */
const WHATSAPP_NUMBER = "50433135588"; // TODO: tu número real (código de país + número, sin + ni espacios)
const DEFAULT_MESSAGE = "¡Hola! Quiero hacer un pedido de Kombucha by Brielas 🍹";

/* =========================================================
   2) SABORES — todo el contenido de la página sale de aquí
========================================================= */
const FLAVORS = [
  {
    name: "Jamaica",
    color: "#B23144",
    img: "assets/label_jamaica.jpg",
    kicker: "Floral y ácida",
    tagline: "Flor de jamaica hondureña: color rubí, acidez limpia y un final seco que despierta el paladar.",
    chips: ["Floral", "Ácida", "Refrescante"],
    desc: "La flor de jamaica (hibisco) se infusiona en la segunda fermentación y le entrega a la kombucha su color rojo intenso y una acidez brillante parecida al arándano. Es de las más fáciles de tomar para quien recién empieza con kombucha: se siente familiar, como un fresco de jamaica, pero con burbuja natural y mucho menos dulce.",
    ingredients: ["Té fermentado", "Flor de jamaica", "Azúcar de caña", "Cultivo vivo (SCOBY)"],
    meters: { "Acidez": 4, "Dulzor": 2, "Burbuja": 3 },
    serve: "Bien fría, en copa alta con hielo y una rodaja de limón.",
    pairing: "Va perfecto con comida frita, tacos o algo picante — la acidez limpia el paladar.",
    ferment: "3 días de segunda fermentación",
  },
  {
    name: "Piña y Cúrcuma",
    color: "#E3A72E",
    img: "assets/label_pina.jpg",
    kicker: "Tropical y dorada",
    tagline: "Piña madura con un toque cálido de cúrcuma: dulce al frente, terrosa al final.",
    chips: ["Tropical", "Dorada", "Especiada"],
    desc: "La piña es una de las frutas más generosas para fermentar: sus azúcares alimentan la levadura y producen una burbuja fuerte y viva. La cúrcuma fresca entra al final y le da ese color dorado profundo con un fondo cálido y ligeramente terroso que equilibra lo dulce de la fruta.",
    ingredients: ["Té fermentado", "Piña fresca", "Cúrcuma", "Azúcar de caña", "Cultivo vivo (SCOBY)"],
    meters: { "Acidez": 3, "Dulzor": 3, "Burbuja": 5 },
    serve: "Abrila despacio y sobre el fregadero — esta es la más efervescente de todas.",
    pairing: "Ideal a media mañana o después de entrenar.",
    ferment: "2 a 3 días de segunda fermentación",
  },
  {
    name: "Remolacha y Cúrcuma",
    color: "#A63A5E",
    img: "assets/label_remolacha.jpg",
    kicker: "Terrosa y profunda",
    tagline: "Remolacha y cúrcuma: tierra, raíz y un color magenta que no necesita colorante.",
    chips: ["Terrosa", "Raíz", "Intensa"],
    desc: "La remolacha aporta un dulzor de tierra y ese magenta imposible que sale directo del vegetal, sin ningún colorante. La cúrcuma la acompaña con calidez y un ligero amargor. Es la más 'de raíz' del menú: fuerte de carácter, para quien ya se acostumbró al sabor del fermento.",
    ingredients: ["Té fermentado", "Remolacha", "Cúrcuma", "Azúcar de caña", "Cultivo vivo (SCOBY)"],
    meters: { "Acidez": 3, "Dulzor": 2, "Burbuja": 3 },
    serve: "Fría y sin hielo, para no diluir el sabor.",
    pairing: "Buena compañera de un desayuno con huevo, aguacate y pan.",
    ferment: "3 a 4 días de segunda fermentación",
  },
  {
    name: "Maracuyá",
    color: "#E0762E",
    img: "assets/label_maracuya.jpg",
    kicker: "Ácida y perfumada",
    tagline: "Maracuyá tropical: aromática, muy ácida y con la efervescencia justa.",
    chips: ["Cítrica", "Aromática", "Tropical"],
    desc: "El maracuyá es puro aroma: apenas se abre la botella ya se siente. Su acidez natural se suma a la del fermento, así que esta es la más punzante del menú — brillante, casi cítrica, con un dulzor bajo y un final largo y perfumado.",
    ingredients: ["Té fermentado", "Pulpa de maracuyá", "Azúcar de caña", "Cultivo vivo (SCOBY)"],
    meters: { "Acidez": 5, "Dulzor": 2, "Burbuja": 4 },
    serve: "Muy fría. También funciona de base para una limonada o un cóctel sin alcohol.",
    pairing: "Con mariscos, ceviche o una tarde de calor.",
    ferment: "2 a 3 días de segunda fermentación",
  },
  {
    name: "Gengibre",
    color: "#CC8B2C",
    img: "assets/label_gengibre.jpg",
    kicker: "Picante y clásica",
    tagline: "Jengibre fresco rallado: el clásico de la kombucha, directo y con carácter.",
    chips: ["Picante", "Clásica", "Digestiva"],
    desc: "El jengibre es el sabor más tradicional de la kombucha y por buena razón: sus propios azúcares y aceites empujan una fermentación muy activa, así que sale picante en la lengua y burbujeante en la boca. Cuanto más tiempo pasa en la botella, más se afila el picor.",
    ingredients: ["Té fermentado", "Jengibre fresco", "Azúcar de caña", "Cultivo vivo (SCOBY)"],
    meters: { "Acidez": 4, "Dulzor": 1, "Burbuja": 5 },
    serve: "Fría, sola. Si querés bajarle el picor, dejala reposar unos minutos fuera del hielo.",
    pairing: "Después de comer, o cuando el estómago anda pesado.",
    ferment: "3 a 4 días de segunda fermentación",
  },
  {
    name: "Apio, pepino, limón, piña, espinaca y kale",
    shortName: "Verde",
    color: "#6C8F3E",
    img: "assets/label_verde.jpg",
    kicker: "Verde y vegetal",
    tagline: "Seis vegetales y frutas frescas: herbal, ligera y con final cítrico.",
    chips: ["Herbal", "Ligera", "Vegetal"],
    desc: "La más compleja del menú. El apio y el pepino ponen el fondo fresco y vegetal, la espinaca y el kale suman ese verde profundo, la piña aporta el dulzor y los azúcares para la burbuja, y el limón amarra todo con un final cítrico. Sabe a jugo verde, pero fermentado y con vida.",
    ingredients: ["Té fermentado", "Apio", "Pepino", "Limón", "Piña", "Espinaca", "Kale", "Cultivo vivo (SCOBY)"],
    meters: { "Acidez": 3, "Dulzor": 2, "Burbuja": 3 },
    serve: "Agitá suave antes de servir — los vegetales se asientan. Muy fría.",
    pairing: "Con el almuerzo o como reemplazo del jugo verde de la mañana.",
    ferment: "2 a 3 días de segunda fermentación",
  },
];

/* =========================================================
   3) Utilidades
========================================================= */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const waLink = (msg) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
const label = (f) => f.shortName || f.name;

function meterHTML(meters) {
  return `<div class="meters">${Object.entries(meters).map(([k, v]) => `
    <div class="meter"><span>${k}</span><div class="meter-bar">
      ${[1, 2, 3, 4, 5].map((n) => `<i class="${n <= v ? "on" : ""}"></i>`).join("")}
    </div></div>`).join("")}</div>`;
}

/* =========================================================
   4) Loader
========================================================= */
(function () {
  const loaderEl = $("#loader"), pctEl = $("#loaderPct"), fillEl = $("#loaderFill"), site = $("#site");
  const bubbles = $("#loaderBubbles");
  for (let i = 0; i < 6; i++) {
    const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", 16 + Math.random() * 28);
    c.setAttribute("cy", 130);
    c.setAttribute("r", 1 + Math.random() * 1.6);
    c.setAttribute("fill", "rgba(255,255,255,.6)");
    if (!reduced) c.style.animation = `fizzSm ${2 + Math.random() * 2}s linear ${Math.random() * 2}s infinite`;
    bubbles.appendChild(c);
  }
  let pct = 0;
  const done = () => {
    loaderEl.classList.add("fade");
    site.hidden = false;
    $("#fab").hidden = false;
    setTimeout(() => loaderEl.remove(), 750);
  };
  const timer = setInterval(() => {
    pct = Math.min(100, pct + Math.random() * 15 + 7);
    pctEl.textContent = Math.floor(pct) + "%";
    const h = (pct / 100) * 124;
    fillEl.setAttribute("y", 138 - h);
    fillEl.setAttribute("height", h);
    if (pct >= 100) { clearInterval(timer); setTimeout(done, 350); }
  }, 200);
})();

/* =========================================================
   5) Enlaces de WhatsApp
========================================================= */
$$(".wa-link").forEach((a) => (a.href = waLink(DEFAULT_MESSAGE)));

/* =========================================================
   6) Hero: burbujas, rotación de fotos, glow por sabor
========================================================= */
(function () {
  const fizz = $("#heroFizz");
  if (!reduced) {
    for (let i = 0; i < 14; i++) {
      const b = document.createElement("i");
      const s = 3 + Math.random() * 6;
      b.style.cssText = `left:${5 + Math.random() * 90}%;width:${s}px;height:${s}px;
        animation-duration:${5 + Math.random() * 5}s;animation-delay:${Math.random() * 6}s;`;
      fizz.appendChild(b);
    }
  }
  const photos = $$(".hero-photo");
  let i = 0;
  if (!reduced && photos.length > 1) {
    setInterval(() => {
      photos[i].classList.remove("active");
      i = (i + 1) % photos.length;
      photos[i].classList.add("active");
    }, 4200);
  }
  // el glow cicla entre los colores de los sabores
  let c = 0;
  const cycle = setInterval(() => {
    c = (c + 1) % FLAVORS.length;
    document.documentElement.style.setProperty("--flavor", FLAVORS[c].color);
  }, 3500);
  window.__stopGlowCycle = () => clearInterval(cycle);
})();

/* =========================================================
   7) Menú desplegable de sabores
========================================================= */
const menu = $("#flavorMenu"), toggle = $("#flavorToggle");
FLAVORS.forEach((f, i) => {
  const li = document.createElement("li");
  li.innerHTML = `<button data-index="${i}"><span class="dot" style="--dot:${f.color}"></span>${label(f)}</button>`;
  menu.appendChild(li);
});
const closeMenu = () => { menu.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); };
toggle.addEventListener("click", (e) => {
  e.stopPropagation();
  const open = menu.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
menu.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-index]");
  if (!btn) return;
  const f = FLAVORS[+btn.dataset.index];
  if (window.__stopGlowCycle) window.__stopGlowCycle();
  document.documentElement.style.setProperty("--flavor", f.color);
  closeMenu();
  openModal(+btn.dataset.index);
});
document.addEventListener("click", (e) => { if (!e.target.closest(".hero-dropdown-wrap")) closeMenu(); });

/* =========================================================
   8) Marquee
========================================================= */
(function () {
  const words = ["Kombucha viva", "•", "Fermentada a mano", "•", "Hecha en Honduras", "•",
    "Sin conservantes", "•", "Fruta real", "•", "Burbuja natural", "•"];
  const track = $("#marqueeTrack");
  track.innerHTML = [...words, ...words, ...words, ...words].map((w) => `<span>${w}</span>`).join("");
})();

/* =========================================================
   9) Tarjetas de sabores
========================================================= */
const grid = $("#flavorGrid");
FLAVORS.forEach((f, i) => {
  const card = document.createElement("article");
  card.className = "flavor-card reveal";
  card.style.setProperty("--card-color", f.color);
  card.innerHTML = `
    <div class="flavor-media">
      <span class="flavor-num">N&deg;${String(i + 1).padStart(2, "0")}</span>
      <img src="${f.img}" alt="Etiqueta de kombucha sabor ${label(f)}" loading="lazy">
    </div>
    <div class="flavor-body">
      <h3>${f.name}</h3>
      <p class="flavor-tagline">${f.tagline}</p>
      <div class="chips">${f.chips.map((c) => `<span class="chip">${c}</span>`).join("")}</div>
      ${meterHTML(f.meters)}
      <div class="flavor-actions">
        <button class="flavor-more" data-index="${i}">Ver detalle →</button>
        <a class="flavor-order" href="${waLink(`¡Hola! Quiero pedir una Kombucha by Brielas sabor ${label(f)} 🙌`)}" target="_blank" rel="noopener">Pedir</a>
      </div>
    </div>`;
  grid.appendChild(card);
});
grid.addEventListener("click", (e) => {
  const btn = e.target.closest(".flavor-more");
  if (btn) openModal(+btn.dataset.index);
});

/* =========================================================
   10) Galería (marquee de fotos)
========================================================= */
(function () {
  const photos = [
    "assets/green_crate_1.jpg", "assets/bottle_green_label.jpg", "assets/label_pina.jpg",
    "assets/bottle_amber.jpg", "assets/label_jamaica.jpg", "assets/green_crate_2.jpg",
    "assets/bottle_yellow.jpg", "assets/label_maracuya.jpg", "assets/person_bottle.jpg",
    "assets/label_remolacha.jpg", "assets/label_verde.jpg", "assets/label_gengibre.jpg",
  ];
  $("#galleryRow").innerHTML = [...photos, ...photos]
    .map((p) => `<img src="${p}" alt="Kombucha by Brielas" loading="lazy">`).join("");
})();

/* =========================================================
   11) FAQ
========================================================= */
const FAQ = [
  { q: "¿Cuánto dura una botella?", a: "En refrigeración se mantiene en buen punto varias semanas. Como es un producto vivo, con el tiempo sigue fermentando muy despacio y se vuelve un poco más ácida y menos dulce — sigue estando buena, solo cambia de carácter." },
  { q: "¿Tiene alcohol?", a: "La fermentación produce trazas mínimas de alcohol de forma natural, muy por debajo de una bebida alcohólica. Aun así, no la recomendamos para niños pequeños ni durante el embarazo sin consultar con tu médico." },
  { q: "¿Por qué se ven hilitos o sedimento en la botella?", a: "Son levaduras y restos del cultivo. Es señal de que la kombucha está viva y sin filtrar en exceso. Podés agitar suave o dejarlos asentar, según prefieras." },
  { q: "¿Cómo la abro sin que se derrame?", a: "Siempre bien fría y sobre el fregadero, abriendo despacio. La presión viene del CO₂ natural de la segunda fermentación, y los sabores con más fruta —piña y jengibre— salen bastante activos." },
  { q: "¿Cuál me recomiendan si nunca he tomado kombucha?", a: "Jamaica o piña y cúrcuma. Las dos son las más amigables al principio. El jengibre y el maracuyá son las más intensas, y la verde es para quien ya está acostumbrado al sabor vegetal." },
  { q: "¿Cómo hago mi pedido?", a: "Todo por WhatsApp. Tocá cualquier botón de pedido, el mensaje ya va escrito con el sabor que elegiste, y por ahí coordinamos cantidad, entrega y pago." },
];
const faqList = $("#faqList");
FAQ.forEach((item) => {
  const div = document.createElement("div");
  div.className = "faq-item reveal";
  div.innerHTML = `<button class="faq-q">${item.q}<i>+</i></button><div class="faq-a"><p>${item.a}</p></div>`;
  faqList.appendChild(div);
});
faqList.addEventListener("click", (e) => {
  const q = e.target.closest(".faq-q");
  if (!q) return;
  const item = q.parentElement, panel = item.querySelector(".faq-a");
  const isOpen = item.classList.toggle("open");
  panel.style.maxHeight = isOpen ? panel.scrollHeight + "px" : "0px";
});

/* =========================================================
   12) Modal de detalle
========================================================= */
const modal = $("#modal"), modalBody = $("#modalBody");
let lastFocus = null;

function openModal(i) {
  const f = FLAVORS[i];
  lastFocus = document.activeElement;
  modalBody.innerHTML = `
    <div class="modal-hero"><img src="${f.img}" alt="Etiqueta de kombucha sabor ${label(f)}"></div>
    <div class="modal-content" style="--m-color:${f.color}">
      <span class="modal-kicker">${f.kicker}</span>
      <h2 id="modalTitle">${f.name}</h2>
      <p class="modal-desc">${f.desc}</p>

      <div class="modal-block"><h4>Ingredientes</h4>
        <div class="ing-list">${f.ingredients.map((x) => `<span>${x}</span>`).join("")}</div></div>

      <div class="modal-block"><h4>Perfil de sabor</h4>${meterHTML(f.meters)}</div>

      <div class="modal-block"><h4>Fermentación</h4><p>${f.ferment}</p></div>
      <div class="modal-block"><h4>Cómo tomarla</h4><p>${f.serve}</p></div>
      <div class="modal-block"><h4>Con qué acompañarla</h4><p>${f.pairing}</p></div>

      <a class="modal-cta" href="${waLink(`¡Hola! Quiero pedir una Kombucha by Brielas sabor ${label(f)} 🙌`)}" target="_blank" rel="noopener">
        Pedir ${label(f)} por WhatsApp
      </a>
    </div>`;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  modal.querySelector(".modal-close").focus();
}
function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
  if (lastFocus) lastFocus.focus();
}
modal.addEventListener("click", (e) => { if (e.target.closest("[data-close]")) closeModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.hidden) closeModal(); });

/* =========================================================
   13) El botón flotante aparece al pasar el hero
========================================================= */
(function () {
  const fab = $("#fab");
  const update = () => fab.classList.toggle("show", window.scrollY > window.innerHeight * 0.7);
  window.addEventListener("scroll", update, { passive: true });
  update();
})();

/* =========================================================
   14) Animaciones al hacer scroll
========================================================= */
(function () {
  const items = $$(".reveal");
  if (reduced || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const siblings = [...en.target.parentElement.children].filter((c) => c.classList.contains("reveal"));
      en.target.style.transitionDelay = Math.min(siblings.indexOf(en.target), 5) * 90 + "ms";
      en.target.classList.add("in");
      io.unobserve(en.target);
    });
  }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
  items.forEach((el) => io.observe(el));
})();
