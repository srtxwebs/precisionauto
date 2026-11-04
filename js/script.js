/* =========================================================
   PRECISION AUTO - SITE SCRIPT
   ---------------------------------------------------------
   SERVICES: edit prices, times and photos here.
     img   = photo file in the images folder
     price = starting price in dollars
     time  = [from, to, unit]  unit: "min", "h" or "d" (days)
     cat   = maint | repair | diag | comfort
   The names and descriptions are in js/translations.js
   ========================================================= */
const SERVICES = [
  { id: "oil",          cat: "maint",   img: "images/oil-change.jpg",         price: 59,  time: [45, 0, "min"], icon: "drop",    featured: true },
  { id: "brakes",       cat: "repair",  img: "images/brake-repair.jpg",       price: 149, time: [1.5, 2, "h"],  icon: "disc",    featured: true },
  { id: "diagnostics",  cat: "diag",    img: "images/engine-diagnostics.jpg", price: 89,  time: [1, 0, "h"],    icon: "pulse",   featured: true },
  { id: "tires",        cat: "maint",   img: "images/tires.jpg",              price: 79,  time: [1, 0, "h"],    icon: "tire" },
  { id: "ac",           cat: "comfort", img: "images/ac-heating.jpg",         price: 129, time: [1, 2, "h"],    icon: "snow" },
  { id: "battery",      cat: "comfort", img: "images/battery.jpg",            price: 49,  time: [30, 0, "min"], icon: "battery" },
  { id: "transmission", cat: "repair",  img: "images/transmission.jpg",       price: 189, time: [2, 4, "h"],    icon: "gear" },
  { id: "suspension",   cat: "repair",  img: "images/suspension.jpg",         price: 129, time: [2, 3, "h"],    icon: "spring" },
  { id: "engine",       cat: "repair",  img: "images/engine-repair.jpg",      price: 249, time: [1, 3, "d"],    icon: "engine" },
  { id: "cooling",      cat: "repair",  img: "images/cooling-system.jpg",     price: 99,  time: [1, 2, "h"],    icon: "thermo" },
  { id: "exhaust",      cat: "repair",  img: "images/exhaust.jpg",            price: 119, time: [1, 2, "h"],    icon: "exhaust" },
  { id: "inspection",   cat: "diag",    img: "images/inspection.jpg",         price: 99,  time: [1, 0, "h"],    icon: "clip" }
];

/* Shop hours: [open, close] in 24h (7.5 = 7:30). null = closed. 0 = Sunday */
const HOURS = { 1: [7.5, 18], 2: [7.5, 18], 3: [7.5, 18], 4: [7.5, 18], 5: [7.5, 18], 6: [8, 14], 0: null };
/* Booking time slots: [first, last] slot of the day */
const SLOTS = { weekday: [8, 17], saturday: [8, 13] };

const ICONS = {
  drop: '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z"/>',
  disc: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="M12 3v3M21 12h-3M12 21v-3M3 12h3"/>',
  pulse: '<path d="M3 12h4l2-5 4 10 2-5h6"/>',
  tire: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 3v5M12 16v5M3 12h5M16 12h5"/>',
  snow: '<path d="M12 2v20M3.3 7l17.4 10M20.7 7 3.3 17M9 4l3 2 3-2M9 20l3-2 3 2"/>',
  battery: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M7 7V4h3v3M14 7V4h3v3M7 13h4M9 11v4M14 13h4"/>',
  gear: '<circle cx="12" cy="12" r="3.2"/><path d="M12 2v3M12 19v3M4.9 4.9 7 7M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1 7 17M17 7l2.1-2.1"/>',
  spring: '<path d="M6 3h12M6 21h12M7 6l10 3-10 3 10 3-10 3"/>',
  engine: '<path d="M4 10h3l2-3h6v3h3l2 2v5h-2v2h-4l-2-2H9l-2 2H4z"/>',
  thermo: '<path d="M10 14V5a2 2 0 0 1 4 0v9a4 4 0 1 1-4 0Z"/><path d="M12 9v7"/>',
  exhaust: '<path d="M3 15h10a3 3 0 0 0 0-6H8"/><path d="M16 8c1.5 0 2-1 2-2M18 12c1.5 0 3-.5 3-2M17 16c1.5 0 3 .5 3 2"/>',
  clip: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M9 11l2 2 4-4M9 17h6"/>'
};
const icon = k => `<svg class="ic-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[k] || ICONS.gear}</svg>`;
const ARROW = '<svg><use href="#arrow"/></svg>';

(() => {
  const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const page = document.body.dataset.page;
  const store = { get(k) { try { return localStorage.getItem(k) } catch (e) { return null } }, set(k, v) { try { localStorage.setItem(k, v) } catch (e) {} } };

  /* ================= LANGUAGE ================= */
  const codes = LANGS.map(l => l.code);
  let lang = store.get("pa-lang");
  if (!codes.includes(lang)) { const nav = (navigator.language || "en").slice(0, 2); lang = codes.includes(nav) ? nav : "en"; }
  const t = k => (I18N[lang] && I18N[lang][k]) ?? I18N.en[k] ?? k;
  const sv = id => (SVC_TEXT[lang] && SVC_TEXT[lang][id]) || SVC_TEXT.en[id];
  const money = n => "$" + n.toLocaleString("en-US");
  const fmtTime = ([a, b, u]) => {
    const n = x => x.toLocaleString(lang);
    const unit = u === "d" ? " " + t("unit.days") : " " + u;
    return (b ? `${n(a)}–${n(b)}` : n(a)) + unit;
  };
  const catName = c => t("cat." + c);

  const langBtn = $("#langBtn"), langMenu = $("#langMenu");
  function buildLangMenu() {
    langMenu.innerHTML = LANGS.map(l => `<li><button role="option" data-lang="${l.code}" aria-selected="${l.code === lang}">${l.label}<small>${l.code.toUpperCase()}</small></button></li>`).join("");
  }
  function toggleLang(open) {
    langMenu.classList.toggle("open", open);
    langBtn.setAttribute("aria-expanded", open);
  }
  langBtn.addEventListener("click", e => { e.stopPropagation(); toggleLang(!langMenu.classList.contains("open")); });
  langMenu.addEventListener("click", e => {
    const b = e.target.closest("[data-lang]"); if (!b) return;
    setLang(b.dataset.lang); toggleLang(false);
  });
  document.addEventListener("click", e => { if (!e.target.closest(".lang")) toggleLang(false); });

  function setLang(code, first) {
    lang = code; store.set("pa-lang", code);
    document.documentElement.lang = code;
    $("#langCur").textContent = code.toUpperCase();
    buildLangMenu();
    $$("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
    $$("[data-i18n-ph]").forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
    $$("[data-i18n-aria]").forEach(el => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });
    renderAll();
    if (!first && !reduce) { const m = $("main"); m.classList.remove("i18n-fade"); void m.offsetWidth; m.classList.add("i18n-fade"); }
  }

  /* ================= IMAGES: fallback until you add your photos ================= */
  function watchImg(img, holder) {
    holder = holder || img.parentElement;
    const fail = () => { holder.classList.add("noimg"); img.style.visibility = "hidden"; };
    const ok = () => { holder.classList.remove("noimg"); img.style.visibility = ""; };
    if (img.complete) { img.naturalWidth ? ok() : fail(); }
    img.addEventListener("error", fail); img.addEventListener("load", ok);
  }

  /* ================= SERVICE CARDS ================= */
  const card = (s, i) => {
    const x = sv(s.id);
    return `<article class="svc ${page === "home" ? "reveal" : ""} tilt" data-svc="${s.id}" tabindex="0" role="button" aria-label="${x.n}" style="animation-delay:${page === "home" ? 0 : i * 60}ms">
      <div class="svc-img"><img src="${s.img}" alt="${x.n}" loading="lazy"><span class="price">${t("svc.from").toUpperCase()} ${money(s.price)}</span><span class="zoom"><svg><use href="#plus"/></svg></span></div>
      <div class="svc-body">
        <div class="svc-meta"><span><svg><use href="#clock"/></svg>${fmtTime(s.time)}</span><span>${catName(s.cat)}</span></div>
        <h3>${x.n}</h3><p>${x.s}</p>
        <span class="more">${t("svc.more")} ${ARROW}</span>
      </div></article>`;
  };
  const pop = s => {
    const x = sv(s.id);
    return `<button class="pop reveal" data-svc="${s.id}"><span class="ic">${icon(s.icon)}</span><span style="min-width:0"><b>${x.n}</b><small>${t("svc.from")} ${money(s.price)} · ${fmtTime(s.time)}</small></span><svg class="go"><use href="#arrow"/></svg></button>`;
  };

  function bindCards(root) {
    root.querySelectorAll(".svc-img img").forEach(img => watchImg(img));
    if (reduce || !matchMedia("(hover:hover)").matches) return;
    root.querySelectorAll(".tilt").forEach(c => {
      c.addEventListener("mousemove", e => {
        const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
        c.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-6px)`;
      });
      c.addEventListener("mouseleave", () => c.style.transform = "");
    });
  }

  /* Services page filter */
  let curCat = "all", query = "";
  function renderAllGrid() {
    const grid = $("#allGrid"); if (!grid) return;
    const q = query.trim().toLowerCase();
    const list = SERVICES.filter(s => (curCat === "all" || s.cat === curCat) && (!q || (sv(s.id).n + " " + sv(s.id).s + " " + sv(s.id).d).toLowerCase().includes(q)));
    grid.innerHTML = list.map(card).join("");
    $("#noRes").hidden = list.length > 0;
    bindCards(grid);
  }

  function renderAll() {
    const feat = $("#featGrid");
    if (feat) { feat.innerHTML = SERVICES.filter(s => s.featured).map(card).join(""); bindCards(feat); }
    const popG = $("#popGrid");
    if (popG) popG.innerHTML = SERVICES.filter(s => !s.featured).slice(0, 6).map(pop).join("");
    renderAllGrid();
    const fs = $("#footSvcs");
    if (fs) fs.innerHTML = SERVICES.slice(0, 5).map(s => `<li><a href="services.html#service-${s.id}">${sv(s.id).n}</a></li>`).join("") + `<li><a href="services.html">${t("nav.allServices")} →</a></li>`;
    renderHours();
    renderBookOptions();
    if (!$("#bookModal").hidden) { renderSlots(); if (bk.step === 4) fillSummary(); }
    if (!$("#svcModal").hidden && curSvc) fillSvc(curSvc, false);
  }

  /* ================= HOURS ================= */
  const timeFmt = h => new Date(2026, 0, 5, Math.floor(h), Math.round((h % 1) * 60)).toLocaleTimeString(lang, { hour: "numeric", minute: "2-digit" });
  function renderHours() {
    const tb = $("#hours tbody"); if (!tb) return;
    const today = new Date().getDay();
    tb.innerHTML = [1, 2, 3, 4, 5, 6, 0].map(d => {
      const name = new Date(2026, 0, 4 + d).toLocaleDateString(lang, { weekday: "long" });
      const h = HOURS[d];
      return `<tr class="${d === today ? "today" : ""}"><td>${name.charAt(0).toUpperCase() + name.slice(1)}</td><td>${h ? timeFmt(h[0]) + " – " + timeFmt(h[1]) : t("con.closed")}</td></tr>`;
    }).join("");
    const st = $("#status"), now = new Date(), h = HOURS[now.getDay()], cur = now.getHours() + now.getMinutes() / 60;
    const open = h && cur >= h[0] && cur < h[1];
    st.textContent = open ? t("con.open") : t("con.closedNow");
    st.classList.toggle("closed", !open);
  }

  /* ================= MODALS ================= */
  let lastFocus = null;
  function openModal(m) {
    lastFocus = document.activeElement;
    m.hidden = false; m.classList.remove("closing");
    document.body.classList.add("locked");
    setTimeout(() => m.querySelector(".dialog").focus(), 30);
  }
  function closeModal(m, cb) {
    if (m.hidden) { cb && cb(); return; }
    const done = () => { m.hidden = true; m.classList.remove("closing"); if ($$(".modal:not([hidden])").length === 0) document.body.classList.remove("locked"); cb ? cb() : lastFocus && lastFocus.focus && lastFocus.focus(); };
    if (reduce) return done();
    m.classList.add("closing"); setTimeout(done, 240);
    if (m.id === "svcModal" && location.hash.startsWith("#service-")) history.replaceState(null, "", location.pathname);
  }
  $$(".modal").forEach(m => m.addEventListener("click", e => { if (e.target.closest("[data-close]")) closeModal(m); }));
  document.addEventListener("keydown", e => {
    if (e.key !== "Escape") return;
    const open = $$(".modal:not([hidden])").pop(); if (open) closeModal(open);
  });

  /* ================= SERVICE DETAILS ================= */
  const svcModal = $("#svcModal"), smImg = $("#smImg");
  watchImg(smImg, $("#smMedia"));
  let curSvc = null;
  function fillSvc(id, animate) {
    const s = SERVICES.find(x => x.id === id), x = sv(id), i = SERVICES.indexOf(s);
    curSvc = id;
    $("#smMedia").classList.remove("noimg"); smImg.style.visibility = "";
    if (smImg.getAttribute("src") !== s.img) smImg.src = s.img;
    if (animate) { smImg.style.animation = "none"; void smImg.offsetWidth; smImg.style.animation = ""; }
    smImg.alt = x.n;
    $("#smCat").textContent = catName(s.cat);
    $("#smCount").textContent = `${i + 1} / ${SERVICES.length}`;
    $("#smTitle").textContent = x.n;
    $("#smDesc").textContent = x.d;
    $("#smPrice").textContent = money(s.price);
    $("#smTime").textContent = fmtTime(s.time);
    $("#smInc").innerHTML = x.inc.map(v => `<li><svg><use href="#check"/></svg>${v}</li>`).join("");
    if (animate) { const b = $("#smBody"); b.classList.remove("swap"); void b.offsetWidth; b.classList.add("swap"); }
  }
  function openSvc(id) {
    fillSvc(id, true);
    if (page === "services") history.replaceState(null, "", "#service-" + id);
    if (svcModal.hidden) openModal(svcModal);
  }
  const step = d => { const i = SERVICES.findIndex(s => s.id === curSvc); openSvc(SERVICES[(i + d + SERVICES.length) % SERVICES.length].id); };
  $("#smPrev").onclick = () => step(-1);
  $("#smNext").onclick = () => step(1);
  svcModal.addEventListener("keydown", e => { if (e.key === "ArrowLeft") step(-1); if (e.key === "ArrowRight") step(1); });
  $("#smBook").onclick = () => { const id = curSvc; closeModal(svcModal, () => openBook([id])); };

  document.addEventListener("click", e => {
    const c = e.target.closest("[data-svc]");
    if (c && !e.target.closest(".modal")) openSvc(c.dataset.svc);
  });
  document.addEventListener("keydown", e => {
    if ((e.key === "Enter" || e.key === " ") && e.target.matches("article[data-svc]")) { e.preventDefault(); openSvc(e.target.dataset.svc); }
  });

  /* ================= BOOKING ================= */
  const bookModal = $("#bookModal"), form = $("#bkForm");
  const bk = { step: 1, svcs: new Set(["oil"]), slot: null, pref: "text" };

  function renderBookOptions() {
    $("#bkSvcs").innerHTML = SERVICES.map(s => `<button type="button" class="opt" data-id="${s.id}" aria-pressed="${bk.svcs.has(s.id)}"><span class="ic">${icon(s.icon)}</span><b>${sv(s.id).n}</b><small>${t("svc.from")} ${money(s.price)}</small></button>`).join("");
    updateEst();
  }
  $("#bkSvcs").addEventListener("click", e => {
    const o = e.target.closest(".opt"); if (!o) return;
    const id = o.dataset.id;
    bk.svcs.has(id) ? bk.svcs.delete(id) : bk.svcs.add(id);
    o.setAttribute("aria-pressed", bk.svcs.has(id));
    $("#bkErr").textContent = "";
    updateEst();
  });
  function updateEst() {
    const sum = SERVICES.filter(s => bk.svcs.has(s.id)).reduce((a, s) => a + s.price, 0);
    $("#bkEst").textContent = sum ? money(sum) : "—";
  }

  // Year + makes
  const yr = new Date().getFullYear();
  $("#bk-year").innerHTML = Array.from({ length: 36 }, (_, i) => `<option>${yr + 1 - i}</option>`).join("");
  $("#bk-year").value = String(yr - 6);
  $("#makes").innerHTML = ["Acura", "Audi", "BMW", "Buick", "Cadillac", "Chevrolet", "Chrysler", "Dodge", "Ford", "GMC", "Honda", "Hyundai", "Infiniti", "Jeep", "Kia", "Lexus", "Lincoln", "Mazda", "Mercedes-Benz", "Mitsubishi", "Nissan", "Ram", "Subaru", "Tesla", "Toyota", "Volkswagen", "Volvo"].map(m => `<option value="${m}">`).join("");

  // Dates & time slots
  const dateIn = $("#bk-date");
  const iso = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  function defaultDate() { const d = new Date(); d.setDate(d.getDate() + 1); if (d.getDay() === 0) d.setDate(d.getDate() + 1); return iso(d); }
  dateIn.min = iso(new Date());
  dateIn.value = defaultDate();
  const hash = s => { let h = 7; for (const c of s) h = (h * 31 + c.charCodeAt(0)) >>> 0; return h; };
  function renderSlots() {
    const box = $("#bkSlots"), v = dateIn.value;
    if (!v) { box.innerHTML = ""; return; }
    const d = new Date(v + "T00:00"), day = d.getDay();
    $("#bkSunday").hidden = day !== 0;
    if (day === 0) { box.innerHTML = ""; bk.slot = null; return; }
    const [a, b] = day === 6 ? SLOTS.saturday : SLOTS.weekday;
    const now = new Date(), isToday = iso(now) === v, nowH = now.getHours() + now.getMinutes() / 60;
    let html = "", i = 0;
    for (let h = a; h <= b; h += .5, i++) {
      const key = String(h), taken = hash(v + key) % 10 < 3 || (isToday && h <= nowH + 1);
      if (taken && bk.slot === key) bk.slot = null;
      html += `<button type="button" class="slot" data-h="${key}" ${taken ? "disabled" : ""} aria-pressed="${bk.slot === key}" style="animation-delay:${i * 25}ms">${timeFmt(h)}</button>`;
    }
    box.innerHTML = html;
  }
  dateIn.addEventListener("change", () => { bk.slot = null; renderSlots(); dateIn.parentElement.classList.remove("err"); });
  $("#bkSlots").addEventListener("click", e => {
    const s = e.target.closest(".slot"); if (!s || s.disabled) return;
    bk.slot = s.dataset.h;
    $$("#bkSlots .slot").forEach(x => x.setAttribute("aria-pressed", x === s));
    $("#bkErr").textContent = "";
  });
  $("#bkPref").addEventListener("click", e => {
    const c = e.target.closest(".chip"); if (!c) return;
    bk.pref = c.dataset.v;
    $$("#bkPref .chip").forEach(x => x.setAttribute("aria-pressed", x === c));
  });
  form.querySelectorAll("input,select").forEach(i => i.addEventListener("input", () => i.parentElement.classList.remove("err")));

  function showStep(n, back) {
    bk.step = n;
    $$(".bk-step").forEach(s => { const on = +s.dataset.step === n; s.hidden = !on; s.classList.toggle("back", !!back); });
    $$("#stepper li").forEach((li, i) => { li.classList.toggle("on", i + 1 === n); li.classList.toggle("done", i + 1 < n || n === 4); });
    const done = n === 4;
    $("#bkBack").hidden = n === 1 || done;
    $("#bkNext").hidden = done;
    $("#bkEstWrap").style.visibility = done ? "hidden" : "";
    $("#bkAgain").hidden = !done; $("#bkClose").hidden = !done;
    const lbl = $("#bkNextLbl"); lbl.dataset.i18n = n === 3 ? "b.submit" : "b.next"; lbl.textContent = t(lbl.dataset.i18n);
    $("#bkErr").textContent = "";
    if (n === 2) renderSlots();
    form.querySelector(".bk-body").scrollIntoView({ block: "nearest" });
    bookModal.querySelector(".dialog").scrollTop = 0;
  }
  function need(ids) {
    let ok = true;
    ids.forEach(id => { const el = $(id), bad = !el.value.trim(); el.parentElement.classList.toggle("err", bad); if (bad) ok = false; });
    return ok;
  }
  function shake(el) { if (!reduce) el.animate([{ transform: "translateX(0)" }, { transform: "translateX(-8px)" }, { transform: "translateX(8px)" }, { transform: "translateX(0)" }], { duration: 300 }); }

  form.addEventListener("submit", e => {
    e.preventDefault();
    const err = $("#bkErr");
    if (bk.step === 1) {
      if (!bk.svcs.size) { err.textContent = t("b.errSvc"); shake($("#bkSvcs")); return; }
      return showStep(2);
    }
    if (bk.step === 2) {
      if (!need(["#bk-make", "#bk-model", "#bk-date"])) { err.textContent = t("b.errFields"); return; }
      if (!bk.slot) { err.textContent = t("b.errTime"); shake($("#bkSlots")); return; }
      return showStep(3);
    }
    if (bk.step === 3) {
      if (!need(["#bk-name", "#bk-phone"])) { err.textContent = t("b.errFields"); return; }
      bk.ref = "PA-" + String(Math.floor(10000 + Math.random() * 89999));
      $("#bkRef").textContent = bk.ref;
      fillSummary();
      /* TO RECEIVE BOOKINGS: send this data to your email / Firebase / Formspree here.
         The booking details are in: getBooking() */
      console.log("New booking", getBooking());
      showStep(4);
    }
  });
  function getBooking() {
    return {
      ref: bk.ref, services: [...bk.svcs], year: $("#bk-year").value, make: $("#bk-make").value.trim(), model: $("#bk-model").value.trim(),
      date: dateIn.value, time: timeFmt(+bk.slot), name: $("#bk-name").value.trim(), phone: $("#bk-phone").value.trim(),
      email: $("#bk-email").value.trim(), notes: $("#bk-notes").value.trim(), contactBy: bk.pref, language: lang
    };
  }
  function fillSummary() {
    $("#sumSvc").textContent = SERVICES.filter(s => bk.svcs.has(s.id)).map(s => sv(s.id).n).join(", ");
    $("#sumCar").textContent = `${$("#bk-year").value} ${$("#bk-make").value.trim()} ${$("#bk-model").value.trim()}`;
    const d = new Date(dateIn.value + "T00:00").toLocaleDateString(lang, { weekday: "long", month: "long", day: "numeric" });
    $("#sumWhen").textContent = bk.slot ? `${d} · ${timeFmt(+bk.slot)}` : d;
  }
  $("#bkBack").onclick = () => showStep(bk.step - 1, true);
  $("#bkAgain").onclick = () => {
    ["#bk-make", "#bk-model", "#bk-notes"].forEach(s => $(s).value = "");
    bk.slot = null; bk.svcs = new Set(["oil"]); renderBookOptions(); showStep(1, true);
  };

  function openBook(pre) {
    if (bk.step === 4) { bk.svcs = new Set(); bk.slot = null; ["#bk-make", "#bk-model", "#bk-notes"].forEach(s => $(s).value = ""); }
    if (pre && pre.length) bk.svcs = new Set(pre);
    renderBookOptions();
    showStep(1);
    openModal(bookModal);
  }
  document.addEventListener("click", e => {
    const b = e.target.closest("[data-book]"); if (!b) return;
    e.preventDefault();
    closeMenu();
    openBook(b.dataset.service ? b.dataset.service.split(",") : null);
  });

  /* ================= NAV, SCROLL, EFFECTS ================= */
  const nav = $("#nav"), prog = $("#progress"), topBtn = $("#totop"), fab = $("#fab"), par = $("#parallax"), heroImg = $("#heroImg");
  let ticking = false;
  function onScroll() {
    const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
    nav.classList.toggle("scrolled", y > 10);
    prog.style.transform = `scaleX(${h > 0 ? y / h : 0})`;
    topBtn.classList.toggle("show", y > 700);
    fab.classList.toggle("show", y > 500);
    if (!reduce) {
      if (heroImg) heroImg.style.transform = `translateY(${Math.min(y, 700) * .25}px)`;
      if (par) { const r = par.parentElement.getBoundingClientRect(); if (r.bottom > 0 && r.top < innerHeight) { const p = (r.top + r.height) / (innerHeight + r.height); par.style.transform = `translateY(${(p - 1) * 12}%)`; } }
    }
    ticking = false;
  }
  addEventListener("scroll", () => { if (!ticking) { requestAnimationFrame(onScroll); ticking = true; } }, { passive: true });
  topBtn.onclick = () => scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });

  const burger = $("#burger"), mm = $("#mmenu");
  function closeMenu() { mm.classList.remove("open"); burger.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); }
  burger.onclick = () => { const o = mm.classList.toggle("open"); burger.classList.toggle("open", o); burger.setAttribute("aria-expanded", o); };
  mm.querySelectorAll("a").forEach(a => a.addEventListener("click", closeMenu));

  const mq = $("#mq"); if (mq) mq.innerHTML += mq.innerHTML;

  $$("img").forEach(img => { if (!img.closest(".svc-img") && img.id !== "smImg") watchImg(img); });

  // Count-up numbers + process line
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return; io.unobserve(e.target);
    if (e.target.id === "steps") return animLine(e.target);
    const el = e.target, end = +el.dataset.count, suf = el.dataset.suffix || ""; if (reduce) return;
    const t0 = performance.now(), d = 1800;
    (function f(now) { const p = Math.min((now - t0) / d, 1), v = Math.round(end * (1 - Math.pow(1 - p, 3))); el.textContent = v.toLocaleString(lang) + suf; if (p < 1) requestAnimationFrame(f); })(t0);
  }), { threshold: .4 });
  $$("[data-count]").forEach(el => io.observe(el));
  const steps = $("#steps"); if (steps) io.observe(steps);
  function animLine(el) { if (reduce) { el.style.setProperty("--p", "100%"); return; } const t0 = performance.now(); (function f(now) { const p = Math.min((now - t0) / 1600, 1); el.style.setProperty("--p", (p * 100) + "%"); if (p < 1) requestAnimationFrame(f); })(t0); }

  // Reviews carousel
  const track = $("#rvTrack");
  if (track) {
    const cards = [...track.children], dotsEl = $("#rvDots"); let idx = 0, timer;
    const perView = () => innerWidth <= 600 ? 1 : innerWidth <= 900 ? 2 : 3;
    const pages = () => Math.max(1, cards.length - perView() + 1);
    const draw = () => { dotsEl.innerHTML = ""; for (let i = 0; i < pages(); i++) { const d = document.createElement("i"); if (i === idx) d.className = "on"; d.onclick = () => go(i); dotsEl.appendChild(d); } };
    const go = i => { idx = (i + pages()) % pages(); const w = cards[0].getBoundingClientRect().width + 22; track.style.transform = `translateX(${-idx * w}px)`; draw(); restart(); };
    const restart = () => { clearInterval(timer); if (!reduce) timer = setInterval(() => go(idx + 1), 5000); };
    $("#rvPrev").onclick = () => go(idx - 1); $("#rvNext").onclick = () => go(idx + 1);
    addEventListener("resize", () => go(Math.min(idx, pages() - 1)));
    let sx = null;
    track.addEventListener("touchstart", e => sx = e.touches[0].clientX, { passive: true });
    track.addEventListener("touchend", e => { if (sx == null) return; const dx = e.changedTouches[0].clientX - sx; if (Math.abs(dx) > 40) go(idx + (dx < 0 ? 1 : -1)); sx = null; });
    go(0);
  }

  // Services page filters
  const cats = $("#cats");
  if (cats) {
    cats.addEventListener("click", e => {
      const b = e.target.closest(".cat"); if (!b) return;
      curCat = b.dataset.cat;
      $$("#cats .cat").forEach(x => x.setAttribute("aria-pressed", x === b));
      renderAllGrid();
    });
    $("#svcSearch").addEventListener("input", e => { query = e.target.value; renderAllGrid(); });
  }

  $("#yr").textContent = new Date().getFullYear();

  /* ================= START ================= */
  setLang(lang, true);
  onScroll();
  const h = location.hash.slice(1);
  if (h === "book") openBook();
  else if (h.startsWith("service-") && SERVICES.some(s => s.id === h.slice(8))) openSvc(h.slice(8));
  addEventListener("hashchange", () => {
    const k = location.hash.slice(1);
    if (k.startsWith("service-") && SERVICES.some(s => s.id === k.slice(8)) && k.slice(8) !== curSvc) openSvc(k.slice(8));
  });
})();
