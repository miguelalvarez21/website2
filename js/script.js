/* =========================================================
   CASA BRIELAS — MOTOR
   El contenido (marcas, productos, recetas) vive en js/data.js.
   Este archivo solo lo dibuja. Las dos marcas usan el mismo código
   y por eso tienen exactamente la misma jerarquía.
========================================================= */

/* =========================================================
   3) Utilidades
========================================================= */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const waLink = (msg) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
const label = (it) => it.shortName || it.name;

/* Marcador de posición: si una foto todavía no existe en assets/,
   se dibuja una ilustración en SVG con el color del producto.
   Cuando subas la foto real con el mismo nombre, se usa la foto. */
function placeholder(color = "#C4566E", shape = "cake") {
  const shapes = {
    cake: '<path d="M60 175h180v-52c0-17-13-30-30-30H90c-17 0-30 13-30 30v52z"/><path d="M60 140c14 0 14-12 28-12s14 12 28 12 14-12 28-12 14 12 28 12 14-12 28-12 14 12 28 12"/><path d="M150 93V66"/><path d="M143 60c0-6 7-9 7-14 0 5 7 8 7 14a7 7 0 11-14 0z"/>',
    tiered: '<path d="M96 178h108v-40H96z"/><path d="M112 138h76V104h-76z"/><path d="M124 104h52V78h-52z"/><path d="M150 78V58M143 52c0-6 7-9 7-14 0 5 7 8 7 14a7 7 0 11-14 0z"/>',
    heart: '<path d="M150 182s-66-40-66-84a34 34 0 0166-12 34 34 0 0166 12c0 44-66 84-66 84z"/><path d="M108 118c12 0 12-10 24-10s12 10 24 10 12-10 24-10"/>',
    cupcake: '<path d="M92 112h116l-18 66a14 14 0 01-14 11h-52a14 14 0 01-14-11l-18-66z"/><path d="M96 112c-9-9-4-24 9-25 1-15 18-23 29-14 7-12 26-10 30 4 14-3 25 11 19 24"/><path d="M118 189l8-77M150 189v-77M182 189l-8-77"/>',
    round: '<ellipse cx="150" cy="112" rx="86" ry="26"/><path d="M64 112v40c0 14 39 26 86 26s86-12 86-26v-40"/><path d="M100 104c10 8 22 2 30 8s22 2 32-4"/>',
    square: '<path d="M70 100h160v76H70z"/><path d="M70 128h160M70 152h160M110 100v76M150 100v76M190 100v76"/>',
    cookie: '<circle cx="150" cy="140" r="62"/><circle cx="128" cy="120" r="7"/><circle cx="168" cy="130" r="6"/><circle cx="140" cy="164" r="6"/><circle cx="176" cy="164" r="5"/><circle cx="118" cy="150" r="5"/>',
    alfajor: '<path d="M84 122a66 20 0 01132 0v6H84z"/><path d="M84 128v14a66 20 0 00132 0v-14"/><path d="M84 156a66 20 0 00132 0"/><path d="M84 142c14-8 28 6 44-2s28 6 44-2 28 6 44-2"/>',
    bread: '<path d="M62 158c0-40 22-64 88-64s88 24 88 64c0 12-10 20-24 20H86c-14 0-24-8-24-20z"/><path d="M108 104l-16 26M144 100l-16 30M180 104l-16 26"/>',
    croissant: '<path d="M60 158c14-46 48-66 90-66s76 20 90 66"/><path d="M60 158c10 10 26 12 40 4M240 158c-10 10-26 12-40 4"/><path d="M112 100c6 22 6 40 0 58M150 92c8 24 8 44 0 66M188 100c-6 22-6 40 0 58"/>',
    rosca: '<ellipse cx="150" cy="140" rx="82" ry="54"/><ellipse cx="150" cy="140" rx="32" ry="20"/><path d="M96 108l14 10M204 108l-14 10M150 88v12M108 176l12-12M192 176l-12-12"/>',
    flan: '<path d="M78 176h144"/><path d="M92 176v-24c0-30 26-52 58-52s58 22 58 52v24"/><path d="M92 152c16 8 32-6 48 2s32-6 48 2 16-6 20-4"/>',
    cup: '<path d="M104 82h92l-12 108a14 14 0 01-14 12h-40a14 14 0 01-14-12L104 82z"/><path d="M110 122h80M114 158h72"/>',
    burger: '<path d="M72 116c0-26 35-42 78-42s78 16 78 42H72z"/><path d="M72 130h156M72 148c0-6 6-10 12-8 14 4 24-6 38-2s24-6 38-2 24-6 38-2c8 2 12 6 12 14H72z"/><path d="M78 168h144c0 14-14 24-32 24H110c-18 0-32-10-32-24z"/>',
    box: '<path d="M72 118h156v72H72z"/><path d="M64 92h172v26H64z"/><path d="M150 92v98"/><path d="M150 92c-14-18-40-18-40 0M150 92c14-18 40-18 40 0"/>',
    watermelon: '<path d="M60 108h180c0 50-40 84-90 84s-90-34-90-84z"/><path d="M74 122h152"/><path d="M122 146l6 10M158 140l6 12M140 168l6 10"/>',
    icecream: '<path d="M78 112h144v58c0 16-14 28-32 28h-80c-18 0-32-12-32-28v-58z"/><path d="M78 112c0-18 32-32 72-32s72 14 72 32"/><path d="M78 140c16 10 32-4 48 4s32-4 48 4 32-4 48 4"/>',
    kit: '<path d="M66 168l86-86"/><path d="M60 174a10 10 0 0114-14l8 8a10 10 0 01-14 14z"/><path d="M148 78l14-14 40 40-14 14z"/><circle cx="208" cy="150" r="34"/><circle cx="198" cy="142" r="4"/><circle cx="218" cy="152" r="4"/><circle cx="204" cy="162" r="3"/>',
    bottle: '<path d="M130 46h40v40s26 20 26 66v66c0 14-12 26-26 26h-40c-14 0-26-12-26-26v-66c0-46 26-66 26-66V46z"/><path d="M104 152h92"/>',
  };
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 224" width="300" height="224">
    <rect width="300" height="224" fill="#F3EDE0"/>
    <g fill="none" stroke="${color}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" opacity="0.85">
      ${shapes[shape] || shapes.cake}
    </g></svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg.replace(/\s+/g, " "));
}

/* Cada <img> con data-ph cae al marcador si el archivo no existe */
function armFallbacks(root = document) {
  $$("img[data-ph]", root).forEach((img) => {
    img.addEventListener("error", function handle() {
      img.removeEventListener("error", handle);
      img.src = placeholder(img.dataset.phColor, img.dataset.ph);
      img.classList.add("is-placeholder");
    });
    if (img.complete && img.naturalWidth === 0) img.dispatchEvent(new Event("error"));
  });
}

/* Texto legible sobre el color del producto: oscuro en los claros,
   blanco en los oscuros. Evita botones dorados con letra blanca. */
function inkOn(hex) {
  const c = hex.replace("#", "");
  const ch = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
  const L = 0.2126 * ch(parseInt(c.slice(0, 2), 16))
          + 0.7152 * ch(parseInt(c.slice(2, 4), 16))
          + 0.0722 * ch(parseInt(c.slice(4, 6), 16));
  return L > 0.3 ? "#14201A" : "#FFFFFF";
}

function meterHTML(meters) {
  return `<div class="meters">${Object.entries(meters).map(([k, v]) => `
    <div class="meter"><span>${k}</span><div class="meter-bar">
      ${[1, 2, 3, 4, 5].map((n) => `<i class="${n <= v ? "on" : ""}"></i>`).join("")}
    </div></div>`).join("")}</div>`;
}

const imgTag = (src, alt, shape, color, cls = "", extra = "") =>
  `<img src="${src}" alt="${alt}" ${cls ? `class="${cls}"` : ""} ${extra}
    data-ph="${shape || "cake"}" data-ph-color="${color || "#C4566E"}" loading="lazy">`;

/* =========================================================
   4) Loader
========================================================= */
/* Adónde va el visitante — hace falta antes del loader para elegir la animación */
const WORLD_HASH = { kombucha: "#kombucha", bakery: "#reposteria" };
const HASH_WORLD = { "#kombucha": "kombucha", "#reposteria": "bakery", "#bakery": "bakery" };
const RECUERDO = "casaBrielasMundo";
const recordar = (id) => { try { localStorage.setItem(RECUERDO, id); } catch (e) {} };
const recordado = () => { try { return localStorage.getItem(RECUERDO); } catch (e) { return null; } };

function destinoInicial() {
  const porHash = HASH_WORLD[location.hash.toLowerCase()];
  if (porHash) return porHash;
  const previo = recordado();
  if (location.hash && previo && BRANDS[previo]) return previo;
  return "casa";
}

/* =========================================================
   Tres animaciones de carga — una por puerta
   Todas usan el mismo truco: una figura recortada que se llena
   de abajo hacia arriba con el porcentaje.
========================================================= */
const LOADERS = {
  // La casa: un arco que se llena de luz
  casa: {
    msg: "Abriendo la casa…",
    fill: { y0: 134, h: 80 },
    svg: `
      <defs><clipPath id="cutCasa"><path d="M12 134V54a18 18 0 0136 0v80z"/></clipPath></defs>
      <g clip-path="url(#cutCasa)"><rect id="loaderFill" x="10" y="138" width="40" height="0"/></g>
      <path d="M12 134V54a18 18 0 0136 0v80z" stroke="currentColor" stroke-width="1.4"/>
      <path d="M4 134h52" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
      <circle cx="21" cy="22" r="2.6" fill="currentColor" opacity=".55"/>
      <circle cx="30" cy="22" r="2.6" fill="currentColor" opacity=".8"/>
      <circle cx="39" cy="22" r="2.6" fill="currentColor" opacity=".55"/>`,
  },

  // Kombucha: la botella que se llena, con burbujas subiendo
  kombucha: {
    msg: "Fermentando la experiencia…",
    fill: { y0: 138, h: 124 },
    burbujas: true,
    svg: `
      <defs><clipPath id="cutBotella"><path d="M22 6H38V26C38 26 48 34 48 52V128C48 133.5 43.5 138 38 138H22C16.5 138 12 133.5 12 128V52C12 34 22 26 22 26V6Z"/></clipPath></defs>
      <g clip-path="url(#cutBotella)">
        <rect id="loaderFill" x="10" y="138" width="40" height="0"/>
        <g id="loaderBubbles"></g>
      </g>
      <path d="M22 6H38V26C38 26 48 34 48 52V128C48 133.5 43.5 138 38 138H22C16.5 138 12 133.5 12 128V52C12 34 22 26 22 26V6Z" stroke="currentColor" stroke-width="1.4"/>
      <path d="M20 4h20" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>`,
  },

  // Repostería: el pastel que se va armando, y al final se enciende la vela
  bakery: {
    msg: "Precalentando el horno…",
    fill: { y0: 132, h: 62 },
    svg: `
      <defs><clipPath id="cutPastel">
        <path d="M8 132v-24a8 8 0 018-8h28a8 8 0 018 8v24z"/>
        <path d="M16 100V80a8 8 0 018-8h12a8 8 0 018 8v20z"/>
      </clipPath></defs>
      <g clip-path="url(#cutPastel)"><rect id="loaderFill" x="6" y="136" width="48" height="0"/></g>
      <path d="M8 132v-24a8 8 0 018-8h28a8 8 0 018 8v24z" stroke="currentColor" stroke-width="1.4"/>
      <path d="M16 100V80a8 8 0 018-8h12a8 8 0 018 8v20z" stroke="currentColor" stroke-width="1.4"/>
      <path d="M16 84c4 0 4-4 8-4s4 4 8 4 4-4 8-4 4 4 4 4" stroke="currentColor" stroke-width="1.1" opacity=".65"/>
      <path d="M2 132h56" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
      <path d="M30 72V58" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
      <path id="loaderFlame" d="M30 46c0 4-4 5-4 8a4 4 0 008 0c0-3-4-4-4-8z" stroke="currentColor" stroke-width="1.3"/>`,
  },
};

(function () {
  const destino = destinoInicial();
  const arte = LOADERS[destino] || LOADERS.casa;

  // la carga ya viste los colores del mundo al que vas
  if (destino !== "casa") document.body.dataset.world = destino;
  $("#loaderMsg").textContent = arte.msg;
  $("#loaderArt").innerHTML =
    `<svg class="loader-bottle" viewBox="0 0 60 140" fill="none" xmlns="http://www.w3.org/2000/svg">${arte.svg}</svg>`;

  const loaderEl = $("#loader"), pctEl = $("#loaderPct"), fillEl = $("#loaderFill");
  const bubbles = $("#loaderBubbles");
  if (bubbles) {
    for (let i = 0; i < 6; i++) {
      const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      c.setAttribute("cx", 16 + Math.random() * 28);
      c.setAttribute("cy", 130);
      c.setAttribute("r", 1 + Math.random() * 1.6);
      c.setAttribute("fill", "rgba(255,255,255,.6)");
      if (!reduced) c.style.animation = `fizzSm ${2 + Math.random() * 2}s linear ${Math.random() * 2}s infinite`;
      bubbles.appendChild(c);
    }
  }

  let pct = 0;
  const done = () => {
    loaderEl.classList.add("fade");
    openEntry();
    setTimeout(() => loaderEl.remove(), 750);
  };
  const timer = setInterval(() => {
    pct = Math.min(100, pct + Math.random() * 15 + 7);
    pctEl.textContent = Math.floor(pct) + "%";
    const h = (pct / 100) * arte.fill.h;
    fillEl.setAttribute("y", arte.fill.y0 - h);
    fillEl.setAttribute("height", h);
    if (pct >= 100) {
      clearInterval(timer);
      loaderEl.classList.add("full");   // enciende la vela del pastel
      setTimeout(done, 450);
    }
  }, 200);
})();

/* =========================================================
   5) Portal de entrada — las dos marcas, mismo peso
========================================================= */
function openEntry() {
  // si la red de seguridad alcanzó a mostrar el respaldo, lo retiramos
  const fb = $("#fallback"); if (fb) fb.hidden = true;
  const fromHash = HASH_WORLD[location.hash.toLowerCase()];
  if (fromHash) { enterWorld(fromHash, false); return; }
  // La URL trae un ancla de sección (un enlace viejo, o el visitante recargó
  // después de navegar): lo devolvemos a la marca donde estaba, no al portal.
  const previo = recordado();
  if (location.hash && previo && BRANDS[previo]) { enterWorld(previo, false); return; }
  $("#portal").hidden = false;
  requestAnimationFrame(() => $("#portal").classList.add("in"));
}

/* Si alguien pega #kombucha o #reposteria estando ya adentro */
window.addEventListener("hashchange", () => {
  const w = HASH_WORLD[location.hash.toLowerCase()];
  if (w && (!ACTIVE || ACTIVE.id !== w)) enterWorld(w, false);
});

(function buildPortal() {
  const wrap = $("#portalDoors");
  wrap.innerHTML = Object.values(BRANDS).map((b) => `
    <button class="door" data-world="${b.id}" data-theme="${b.id}">
      <span class="door-craft">${b.craft}</span>
      <span class="door-mark">
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none">${b.icon}</svg>
      </span>
      <span class="door-name">${b.nameHTML}</span>
      <span class="door-copy">${b.door}</span>
      <span class="door-cta">Entrar <i>→</i></span>
    </button>`).join("");
  wrap.addEventListener("click", (e) => {
    const d = e.target.closest(".door");
    if (d) enterWorld(d.dataset.world, true);
  });
})();

function enterWorld(id, animate) {
  const portal = $("#portal");
  const go = () => {
    portal.hidden = true;
    portal.classList.remove("in", "out");
    mountWorld(id);
    $("#site").hidden = false;
    $("#fab").hidden = false;
    window.scrollTo({ top: 0, behavior: "auto" });
  };
  if (animate && !reduced) { portal.classList.add("out"); setTimeout(go, 520); }
  else go();
}

function backToPortal() {
  $("#site").hidden = true;
  $("#fab").hidden = true;
  history.replaceState(null, "", location.pathname);
  $("#portal").hidden = false;
  $("#portal").classList.remove("out");
  requestAnimationFrame(() => $("#portal").classList.add("in"));
  window.scrollTo({ top: 0, behavior: "auto" });
}

/* =========================================================
   6) Montar una marca — mismo código para las dos
========================================================= */
let ACTIVE = null;
let stopGlow = null;

function mountWorld(id) {
  const b = BRANDS[id];
  ACTIVE = b;
  document.body.dataset.world = id;
  document.documentElement.style.setProperty("--flavor", b.catalog.items[0].color);
  history.replaceState(null, "", WORLD_HASH[id]);
  recordar(id);
  document.title = id === "kombucha"
    ? "Kombucha by Brielas — Casa Brielas"
    : "Briela's Bakery — Casa Brielas";

  renderNav(b);
  renderHero(b);
  renderMarquee(b);
  renderProcess(b);
  renderCatalog(b);
  renderStory(b);
  renderGallery(b);
  renderExtra(b);
  renderOrder(b);
  renderFaq(b);

  $$(".wa-link").forEach((a) => (a.href = waLink(b.waMessage)));
  armFallbacks();
  initReveals();
}

/* ---- nav + conmutador de marca ---- */
function renderNav(b) {
  $("#navLinks").innerHTML = b.nav.map((l) => `<a href="${l.href}">${l.label}</a>`).join("")
    + `<a class="nav-order wa-link" href="#" target="_blank" rel="noopener">Pedir por WhatsApp</a>`;
  $("#navMark").innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none">${b.icon}</svg>
    <span>${b.nameHTML}</span>`;
  const sw = $("#worldSwitch");
  sw.innerHTML = Object.values(BRANDS).map((x) => `
    <button data-world="${x.id}" class="${x.id === b.id ? "on" : ""}"
      aria-pressed="${x.id === b.id}">${x.shortName}</button>`).join("");
}
$("#worldSwitch").addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-world]");
  if (!btn || btn.dataset.world === ACTIVE.id) return;
  mountWorld(btn.dataset.world);
  window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
});
/* Menú móvil */
const navLinks = $("#navLinks"), burger = $("#navBurger");
const closeNav = () => { navLinks.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); };
burger.addEventListener("click", (e) => {
  e.stopPropagation();
  const open = navLinks.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
});
/* Los enlaces del menú desplazan por JS y NO tocan la URL, para que el hash
   siga identificando la marca (#kombucha / #reposteria) aunque navegues. */
function irASeccion(hash) {
  const destino = document.querySelector(hash);
  if (!destino) return false;
  destino.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  return true;
}
navLinks.addEventListener("click", (e) => {
  const a = e.target.closest("a");
  if (!a) return;
  closeNav();
  const hash = a.getAttribute("href") || "";
  if (hash.startsWith("#") && hash.length > 1 && irASeccion(hash)) e.preventDefault();
});
document.addEventListener("click", (e) => { if (!e.target.closest(".nav")) closeNav(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeNav(); });

/* El logo sube al inicio (comportamiento esperado).
   Volver al portal se hace desde el pie de página. */
$("#navMark").addEventListener("click", (e) => {
  e.preventDefault();
  closeNav();
  window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
});
$("#portalLink").addEventListener("click", (e) => { e.preventDefault(); backToPortal(); });

/* ---- hero ---- */
function renderHero(b) {
  $("#heroTitle").innerHTML = b.hero.title
    .map((l) => `<span class="line"><span>${l}</span></span>`).join("");
  $("#heroCopy").textContent = b.hero.copy;
  $("#heroTags").innerHTML = b.hero.tags.map((t) => `<span>${t}</span>`).join("");
  $("#heroPhotos").innerHTML = b.hero.photos.map((p, i) =>
    imgTag(p.src, p.alt, p.shape || "bottle", p.color || b.catalog.items[0].color,
      `hero-photo${i === 0 ? " active" : ""}`)).join("");
  $("#menuLabel").textContent = b.hero.menuLabel;

  const fizz = $("#heroFizz");
  fizz.innerHTML = "";
  if (!reduced) {
    for (let i = 0; i < 14; i++) {
      const el = document.createElement("i");
      const s = 3 + Math.random() * 6;
      el.style.cssText = `left:${5 + Math.random() * 90}%;width:${s}px;height:${s}px;
        animation-duration:${5 + Math.random() * 5}s;animation-delay:${Math.random() * 6}s;`;
      fizz.appendChild(el);
    }
  }

  const photos = $$(".hero-photo");
  clearInterval(window.__photoTimer);
  let i = 0;
  if (!reduced && photos.length > 1) {
    window.__photoTimer = setInterval(() => {
      photos[i].classList.remove("active");
      i = (i + 1) % photos.length;
      photos[i].classList.add("active");
    }, 4200);
  }

  if (stopGlow) stopGlow();
  let c = 0;
  const cycle = setInterval(() => {
    c = (c + 1) % b.catalog.items.length;
    document.documentElement.style.setProperty("--flavor", b.catalog.items[c].color);
  }, 3500);
  stopGlow = () => clearInterval(cycle);

}

/* El botón del hero baja directo al catálogo, sin desplegable de por medio */
$("#itemToggle").addEventListener("click", (e) => {
  e.preventDefault();
  irASeccion("#catalogo");
});

/* ---- marquee ---- */
function renderMarquee(b) {
  const w = b.marquee;
  $("#marqueeTrack").innerHTML = [...w, ...w, ...w, ...w].map((x) => `<span>${x}</span>`).join("");
}

/* ---- proceso ---- */
function renderProcess(b) {
  $("#processHead").innerHTML = `
    <span class="eyebrow">${b.process.eyebrow}</span>
    <h2>${b.process.title}</h2>
    <p class="section-sub">${b.process.sub}</p>`;
  $("#processSteps").innerHTML = b.process.steps.map((s, i) => `
    <li class="step reveal">
      <div class="step-num">${String(i + 1).padStart(2, "0")}</div>
      <div class="step-body">
        <h3>${s.h}</h3>
        <p>${s.p}</p>
        <span class="step-meta">${s.meta}</span>
      </div>
    </li>`).join("");
}

/* ---- catálogo ---- */
function renderCatalog(b) {
  $("#catalogHead").innerHTML = `
    <span class="eyebrow">${b.catalog.eyebrow}</span>
    <h2>${b.catalog.title}</h2>
    <p class="section-sub">${b.catalog.sub}</p>`;
  // Filtro por categoría — solo aparece si la marca las define
  const filtros = $("#catalogFilters");
  const cats = b.catalog.categories;
  if (cats && cats.length) {
    const cuenta = (id) => b.catalog.items.filter((x) => x.cat === id).length;
    filtros.innerHTML = `<button class="cat-btn on" data-cat="todo">Todo
        <i>${b.catalog.items.length}</i></button>` +
      cats.map((c) => `<button class="cat-btn" data-cat="${c.id}">${c.label}
        <i>${cuenta(c.id)}</i></button>`).join("");
    filtros.hidden = false;
  } else {
    filtros.innerHTML = "";
    filtros.hidden = true;
  }
  // el buscador arranca limpio en cada marca
  CAT_ACTIVA = "todo";
  $("#catalogSearch").value = "";
  $("#catalogSearch").placeholder = b.catalog.searchPlaceholder || "Buscar…";
  $("#catalogClear").hidden = true;
  $("#catalogCount").hidden = true;
  $("#catalogEmpty").hidden = true;

  $("#catalogGrid").innerHTML = b.catalog.items.map((it, i) => `
    <article class="flavor-card reveal" data-cat="${it.cat || ""}" style="--card-color:${it.color};--card-ink:${inkOn(it.color)}">
      <div class="flavor-media">
        <span class="flavor-num">N&deg;${String(i + 1).padStart(2, "0")}</span>
        ${it.imgs && it.imgs.length > 1
          ? `<span class="flavor-photos" aria-hidden="true">
               <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="14" height="12" rx="2" stroke="currentColor" stroke-width="1.8"/><path d="M8 3h13v12" stroke="currentColor" stroke-width="1.8"/></svg>
               ${it.imgs.length}</span>` : ""}
        ${imgTag(it.img, `${label(it)} — ${b.shortName} Brielas`, it.shape, it.color)}
      </div>
      <div class="flavor-body">
        <h3>${it.name}</h3>
        <p class="flavor-tagline">${it.tagline}</p>
        <div class="chips">${it.chips.map((c) => `<span class="chip">${c}</span>`).join("")}</div>
        ${meterHTML(it.meters)}
        <div class="flavor-actions">
          <button class="flavor-more" data-index="${i}">Ver detalle →</button>
          <a class="flavor-order" href="${waLink(b.itemMessage(label(it)))}" target="_blank" rel="noopener">Pedir</a>
        </div>
      </div>
    </article>`).join("");
}
$("#catalogGrid").addEventListener("click", (e) => {
  const btn = e.target.closest(".flavor-more");
  if (btn) openModal(+btn.dataset.index);
});

/* =========================================================
   Buscador de concordancia amplia
   Sin acentos, sin mayúsculas, por palabras sueltas y aguantando
   un error de tecleo. Busca en el nombre, la frase, las etiquetas,
   los sabores, la descripción, la categoría y hasta en la receta.
========================================================= */
const sinAcentos = (s) => (s || "").toString().toLowerCase()
  .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  .replace(/[^a-z0-9ñ\s]/g, " ").replace(/\s+/g, " ").trim();

/* distancia de edición con corte: ¿se parecen aguantando 1 error? */
function pareceIgual(a, b) {
  if (Math.abs(a.length - b.length) > 1) return false;
  let i = 0, j = 0, fallos = 0;
  while (i < a.length && j < b.length) {
    if (a[i] === b[j]) { i++; j++; continue; }
    if (++fallos > 1) return false;
    if (a.length > b.length) i++;
    else if (a.length < b.length) j++;
    else { i++; j++; }
  }
  return fallos + (a.length - i) + (b.length - j) <= 1;
}

/* El texto de cada producto se parte en tres capas y se normaliza una sola vez.
   Sirven para decidir si algo coincide y, sobre todo, para ordenar por relevancia:
   quien busca "flan" quiere primero los flanes, no todo lo que los menciona. */
const CACHE_BUSQUEDA = new WeakMap();
function textoBuscable(it, b) {
  if (CACHE_BUSQUEDA.has(it)) return CACHE_BUSQUEDA.get(it);
  const cat = (b.catalog.categories || []).find((c) => c.id === it.cat);
  const capas = {
    nombre: sinAcentos([it.name, it.shortName].filter(Boolean).join(" ")),
    fuerte: sinAcentos([it.name, it.shortName, (it.chips || []).join(" "), (it.list || []).join(" ")].filter(Boolean).join(" ")),
    medio: sinAcentos([it.kicker, it.tagline, cat ? cat.label : ""].filter(Boolean).join(" ")),
    debil: sinAcentos([it.desc, (it.receta || []).join(" "),
      (it.specs || []).map((s) => s.k + " " + s.v).join(" ")].filter(Boolean).join(" ")),
  };
  capas.todo = capas.fuerte + " " + capas.medio + " " + capas.debil;
  CACHE_BUSQUEDA.set(it, capas);
  return capas;
}

/* ¿la palabra aparece en esta capa? exacta, o con un error de tecleo */
function enCapa(capa, p) {
  if (!capa) return false;
  if (capa.includes(p)) return true;
  if (p.length < 4) return false;                 // muy corta para adivinar
  return capa.split(" ").some((w) => pareceIgual(w, p));
}

/* Devuelve 0 si no coincide, o un puntaje: más alto = más relevante */
function puntuar(capas, consulta) {
  const palabras = consulta.split(" ").filter(Boolean);
  if (!palabras.length) return 1;
  let total = 0;
  for (const p of palabras) {
    const peso = enCapa(capas.fuerte, p) ? 6 : enCapa(capas.medio, p) ? 3 : enCapa(capas.debil, p) ? 1 : 0;
    if (!peso) return 0;                          // todas las palabras tienen que estar
    total += peso;
  }
  // lo que se llama así va primero: nombre exacto > nombre lo contiene > lo tiene entre sus variantes
  if (capas.nombre.startsWith(consulta)) total += 14;
  else if (capas.nombre.includes(consulta)) total += 9;
  else if (capas.fuerte.includes(consulta)) total += 4;
  return total;
}

let CAT_ACTIVA = "todo";
function aplicarFiltros() {
  const q = sinAcentos($("#catalogSearch").value);
  const items = ACTIVE.catalog.items;
  let visibles = 0;
  $$(".flavor-card").forEach((card, i) => {
    const porCat = CAT_ACTIVA === "todo" || card.dataset.cat === CAT_ACTIVA;
    const puntos = q ? puntuar(textoBuscable(items[i], ACTIVE), q) : 1;
    const mostrar = porCat && puntos > 0;
    card.hidden = !mostrar;
    // los más relevantes se acomodan primero en la grilla
    card.style.order = q ? String(-puntos) : "";
    if (mostrar) { visibles++; card.classList.add("in"); card.style.transitionDelay = "0ms"; }
  });

  $("#catalogClear").hidden = !q;
  const total = items.length;
  const cuenta = $("#catalogCount");
  cuenta.hidden = !q && CAT_ACTIVA === "todo";
  cuenta.textContent = visibles === total
    ? `${total} productos`
    : `${visibles} de ${total} productos`;

  const vacio = $("#catalogEmpty");
  vacio.hidden = visibles > 0;
  vacio.textContent = q
    ? `No encontramos nada con “${$("#catalogSearch").value.trim()}”. Probá con otra palabra, o escribinos por WhatsApp y lo vemos.`
    : "No hay productos en esta categoría.";
}

$("#catalogFilters").addEventListener("click", (e) => {
  const btn = e.target.closest(".cat-btn");
  if (!btn) return;
  CAT_ACTIVA = btn.dataset.cat;
  $$(".cat-btn").forEach((b) => b.classList.toggle("on", b === btn));
  aplicarFiltros();
});
$("#catalogSearch").addEventListener("input", aplicarFiltros);
$("#catalogSearch").addEventListener("keydown", (e) => {
  if (e.key === "Escape") { $("#catalogSearch").value = ""; aplicarFiltros(); }
});
$("#catalogClear").addEventListener("click", () => {
  $("#catalogSearch").value = "";
  $("#catalogSearch").focus();
  aplicarFiltros();
});

/* ---- historia ---- */
function renderStory(b) {
  $("#storyCopy").innerHTML = `
    <span class="eyebrow">${b.story.eyebrow}</span>
    <h2>${b.story.title}</h2>
    ${b.story.paras.map((p) => `<p>${p}</p>`).join("")}`;
  $("#storyPhotos").innerHTML = b.story.photos.map((p) => `
    <figure class="story-photo${p.tall ? " tall" : ""} reveal">
      ${imgTag(p.src, p.alt, p.shape || "bottle", p.color || "#6C8F3E")}
    </figure>`).join("");
}

/* ---- galería ---- */
function renderGallery(b) {
  const first = b.catalog.items[0];
  $("#galleryRow").innerHTML = [...b.gallery, ...b.gallery]
    .map((p, i) => imgTag(p, `${b.shortName} Brielas`,
      b.id === "kombucha" ? "bottle" : ["cake", "cupcake", "round", "square"][i % 4],
      b.catalog.items[i % b.catalog.items.length]?.color || first.color)).join("");
}

/* ---- sección extra (beneficios / tipos y tamaños) ---- */
function renderExtra(b) {
  $("#extraHead").innerHTML = `<span class="eyebrow">${b.extra.eyebrow}</span><h2>${b.extra.title}</h2>`;
  $("#extraGrid").innerHTML = b.extra.items.map((x, i) => `
    <div class="benefit reveal">
      <span class="benefit-num">${String(i + 1).padStart(2, "0")}</span>
      <h3>${x.h}</h3>
      <p>${x.p}</p>
    </div>`).join("");
  $("#extraNote").textContent = b.extra.note;
}

/* ---- cómo pedir ---- */
function renderOrder(b) {
  $("#orderEyebrow").textContent = b.order.eyebrow;
  $("#orderTitle").textContent = b.order.title;
  $("#orderSteps").innerHTML = b.order.steps.map((s, i) => `
    <div class="order-step reveal"><span>${i + 1}</span><p>${s}</p></div>`).join("");
  $("#orderCtaText").textContent = b.order.cta;
  $("#orderNote").textContent = b.order.note;
}

/* ---- FAQ ---- */
function renderFaq(b) {
  $("#faqList").innerHTML = b.faq.map((item) => `
    <div class="faq-item reveal">
      <button class="faq-q">${item.q}<i>+</i></button>
      <div class="faq-a"><p>${item.a}</p></div>
    </div>`).join("");
}
$("#faqList").addEventListener("click", (e) => {
  const q = e.target.closest(".faq-q");
  if (!q) return;
  const item = q.parentElement, panel = item.querySelector(".faq-a");
  const isOpen = item.classList.toggle("open");
  panel.style.maxHeight = isOpen ? panel.scrollHeight + "px" : "0px";
});

/* =========================================================
   7) Modal de detalle
========================================================= */
const modal = $("#modal"), modalBody = $("#modalBody");
let lastFocus = null;

/* Galería de la ficha: una sola foto, o varias con flechas y miniaturas */
function galeriaHTML(it) {
  const fotos = (it.imgs && it.imgs.length ? it.imgs : [it.img])
    .map((f) => (typeof f === "string" ? { src: f, cap: "" } : f));

  if (fotos.length === 1) {
    return `<div class="modal-hero">${imgTag(fotos[0].src, label(it), it.shape, it.color)}</div>`;
  }
  return `
    <div class="modal-hero mg" id="mgal" data-i="0">
      ${fotos.map((f, i) => imgTag(f.src, `${label(it)} — foto ${i + 1} de ${fotos.length}`,
        it.shape, it.color, `mg-img${i === 0 ? " on" : ""}`)).join("")}
      <button class="mg-nav mg-prev" data-step="-1" aria-label="Foto anterior">&lsaquo;</button>
      <button class="mg-nav mg-next" data-step="1" aria-label="Foto siguiente">&rsaquo;</button>
      <span class="mg-count"><b>1</b>/${fotos.length}</span>
    </div>
    <div class="mg-strip">
      <div class="mg-thumbs">
        ${fotos.map((f, i) => `<button class="mg-thumb${i === 0 ? " on" : ""}" data-go="${i}"
          aria-label="Ver foto ${i + 1}">${imgTag(f.src, "", it.shape, it.color)}</button>`).join("")}
      </div>
      ${fotos.some((f) => f.cap) ? `<p class="mg-cap">${fotos[0].cap || ""}</p>` : ""}
    </div>`;
}

let CAPS = [];
function irAFoto(i) {
  const g = $("#mgal"); if (!g) return;
  const imgs = $$(".mg-img", g), thumbs = $$(".mg-thumb");
  i = (i + imgs.length) % imgs.length;
  g.dataset.i = i;
  imgs.forEach((im, n) => im.classList.toggle("on", n === i));
  thumbs.forEach((t, n) => t.classList.toggle("on", n === i));
  const c = $(".mg-count b"); if (c) c.textContent = i + 1;
  const cap = $(".mg-cap"); if (cap) cap.textContent = CAPS[i] || "";
  if (thumbs[i]) thumbs[i].scrollIntoView({ block: "nearest", inline: "nearest" });
}
modalBody.addEventListener("click", (e) => {
  const nav = e.target.closest(".mg-nav");
  const th = e.target.closest(".mg-thumb");
  if (!nav && !th) return;
  const g = $("#mgal"); if (!g) return;
  irAFoto(nav ? +g.dataset.i + +nav.dataset.step : +th.dataset.go);
});
document.addEventListener("keydown", (e) => {
  if (modal.hidden || !$("#mgal")) return;
  if (e.key === "ArrowRight") { e.preventDefault(); irAFoto(+$("#mgal").dataset.i + 1); }
  if (e.key === "ArrowLeft") { e.preventDefault(); irAFoto(+$("#mgal").dataset.i - 1); }
});

function openModal(i) {
  const b = ACTIVE, it = b.catalog.items[i];
  lastFocus = document.activeElement;
  CAPS = (it.imgs || []).map((f) => (typeof f === "string" ? "" : f.cap || ""));
  // el color del producto vive en todo el cuerpo de la ficha, no solo en el texto,
  // para que la galería y sus miniaturas también lo usen
  modalBody.style.cssText = `--m-color:${it.color};--m-ink:${inkOn(it.color)}`;
  modalBody.innerHTML = `
    ${galeriaHTML(it)}
    <div class="modal-content" style="--m-color:${it.color};--m-ink:${inkOn(it.color)}">
      <span class="modal-kicker">${it.kicker}</span>
      <h2 id="modalTitle">${it.name}</h2>
      <p class="modal-desc">${it.desc}</p>

      <div class="modal-block"><h4>${b.catalog.listLabel}</h4>
        <div class="ing-list">${it.list.map((x) => `<span>${x}</span>`).join("")}</div></div>

      <div class="modal-block"><h4>Perfil</h4>${meterHTML(it.meters)}</div>

      ${it.receta && it.receta.length ? `
      <div class="modal-block recipe">
        <h4>Cómo se hace</h4>
        <ol class="recipe-steps">${it.receta.map((paso) => `<li>${paso}</li>`).join("")}</ol>
      </div>` : ""}

      ${it.specs.map((s) => `<div class="modal-block"><h4>${s.k}</h4><p>${s.v}</p></div>`).join("")}

      <a class="modal-cta" href="${waLink(b.itemMessage(label(it)))}" target="_blank" rel="noopener">
        Pedir ${label(it)} por WhatsApp
      </a>
    </div>`;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  armFallbacks(modalBody);
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
   8) Botón flotante
========================================================= */
(function () {
  const fab = $("#fab");
  const update = () => fab.classList.toggle("show", window.scrollY > window.innerHeight * 0.7);
  window.addEventListener("scroll", update, { passive: true });
  update();
})();

/* =========================================================
   9) Animaciones al hacer scroll
========================================================= */
let revealObserver = null;
function initReveals() {
  const items = $$(".reveal");
  if (reduced || !("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("in"));
    return;
  }
  if (revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const siblings = [...en.target.parentElement.children].filter((c) => c.classList.contains("reveal"));
      en.target.style.transitionDelay = Math.min(siblings.indexOf(en.target), 5) * 90 + "ms";
      en.target.classList.add("in");
      revealObserver.unobserve(en.target);
    });
  }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
  items.forEach((el) => revealObserver.observe(el));
}

/* El script llegó hasta el final: la red de seguridad del HTML no debe actuar. */
window.__brielasListo = true;
