/* =========================================================
   PRECISION AUTO - TRANSLATIONS
   Languages: English (en), Español (es), Deutsch (de),
              Français (fr), Português (pt)
   To change any text, find its key and edit the words.
   To add a language: copy the whole "en" block, change the
   code (for example "it"), translate it, and add the language
   to LANGS below.
   ========================================================= */

const LANGS = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "de", label: "Deutsch" },
  { code: "fr", label: "Français" },
  { code: "pt", label: "Português" }
];

const I18N = {
  /* ---------------- ENGLISH ---------------- */
  en: {
    "nav.services": "Services", "nav.allServices": "All Services", "nav.about": "About Us", "nav.specials": "Specials",
    "nav.reviews": "Reviews", "nav.contact": "Contact", "nav.book": "Book an Appointment", "nav.lang": "Language",
    "float.book": "Book now",

    "hero.l1": "Expert Repairs.", "hero.l2": "Honest Service.",
    "hero.sub": "Your neighborhood auto repair specialists. Keeping you safe and confident on the road.",
    "hero.book": "Book an Appointment", "hero.explore": "Explore Services",
    "hero.tag1": "ASE-Certified Technicians", "hero.tag2": "All Makes & Models", "hero.tag3": "24-Month / 24,000-Mile Warranty",
    "hero.rating": "Google rating", "hero.reviews": "from 1,240 reviews",

    "trust.1": "Certified Experts", "trust.2": "Upfront Pricing", "trust.3": "Quality Parts", "trust.4": "Local & Trusted",

    "svc.eyebrow": "What we do", "svc.title": "Complete Care for Your Car",
    "svc.sub": "From routine maintenance to complex repairs, we have you covered.",
    "svc.more": "View details", "svc.from": "From", "svc.viewAll": "View All 12 Services", "svc.popular": "Also popular",

    "about.eyebrow": "About us", "about.title": "A Shop You Can Count On",
    "about.text": "We believe in clear communication, fair pricing, and high-quality workmanship. Our team treats your vehicle like our own, with the expertise and care it deserves.",
    "about.c1": "Honest, straightforward recommendations", "about.c2": "Experienced, ASE-certified technicians", "about.c3": "Dependable repairs that are built to last",
    "about.s1": "Years in business", "about.s2": "Cars serviced", "about.s3": "Would recommend",

    "steps.eyebrow": "How it works", "steps.title": "From Drop-Off to Drive Away",
    "steps.sub": "No surprises on the bill. You approve every repair before we start.",
    "steps.1t": "Book Online", "steps.1d": "Pick a service and a time that fits. Same-day slots most weekdays.",
    "steps.2t": "Free Inspection", "steps.2d": "A technician checks your car and sends photos of what they find.",
    "steps.3t": "You Approve", "steps.3d": "Get a written quote with parts and labor. Nothing starts without your OK.",
    "steps.4t": "Drive Away", "steps.4d": "Pick up your car, backed by our 24-month / 24,000-mile warranty.",

    "spec.eyebrow": "Current offers", "spec.title": "This Month's Specials",
    "spec.sub": "Mention the offer when you book. One coupon per visit.",
    "spec.1a": "$20 OFF", "spec.1t": "Any brake service", "spec.1d": "Pads, rotors or brake fluid flush.",
    "spec.2a": "FREE", "spec.2t": "Tire rotation", "spec.2d": "With any synthetic oil change.",
    "spec.3a": "10% OFF", "spec.3t": "Seniors & military", "spec.3d": "On labor for any repair. Show ID at drop-off.",
    "spec.claim": "Claim offer", "spec.valid": "Valid through Nov 30, 2026",

    "team.eyebrow": "Meet the crew", "team.title": "The People Under the Hood",
    "team.sub": "Every technician is ASE-certified and trained on the latest diagnostic tools.",
    "team.1r": "Master Technician · 22 years", "team.2r": "Brakes & Suspension · 14 years", "team.3r": "Diagnostics Lead · 11 years",

    "rev.title": "Trusted by Local Drivers", "rev.sub": "4.9 average from 1,240 reviews on Google and Yelp.",
    "rev.1": "Another shop quoted me $1,800 for brakes. They showed me my rotors were still in spec and did pads only. Saved me over a thousand dollars.",
    "rev.2": "They texted me photos of the leak before doing anything. Clear price, done the same afternoon. This is my shop now.",
    "rev.3": "The check engine light had two dealers stumped. They found a cracked vacuum hose in under an hour.",
    "rev.4": "Clean waiting room, good coffee, and my oil change and tire rotation were done in 40 minutes.",
    "rev.5": "My A/C was blowing warm in July. They found the leak and fixed it for less than the quote.",
    "rev.6": "Three cars over eight years. They never push extra work and always tell me what can wait.",

    "con.eyebrow": "Visit us", "con.title": "Hours & Location",
    "con.sub": "Drop by, call, or book online. We'll confirm by text within one business hour.",
    "con.shuttle": "Free shuttle within 5 miles", "con.closed": "Closed", "con.open": "Open now", "con.closedNow": "Closed now",
    "con.bookT": "Ready when you are", "con.bookP": "Book online in under a minute. Pick a service, a date and a time.",

    "faq.eyebrow": "Questions", "faq.title": "Good to Know",
    "faq.q1": "Will servicing my car here void my factory warranty?",
    "faq.a1": "No. You can service your car at any independent shop. We use OEM-spec parts and fluids and log every service so your warranty stays intact.",
    "faq.q2": "How long does a typical repair take?",
    "faq.a2": "Oil changes take about 45 minutes. Most brake jobs and diagnostics are done the same day. For bigger repairs we give you a time estimate with the quote.",
    "faq.q3": "Do you offer a warranty on repairs?",
    "faq.a3": "Yes. Parts and labor are covered for 24 months or 24,000 miles, whichever comes first.",
    "faq.q4": "Can I wait while my car is serviced?",
    "faq.a4": "Yes. Our waiting room has Wi-Fi, coffee and charging stations. For longer jobs we offer a free shuttle within 5 miles.",

    "cta.title": "Check engine light on? Let's find out why today.", "cta.btn": "Book an Appointment",

    "foot.tag": "Honest, certified auto repair for every make and model since 2008.",
    "foot.services": "Services", "foot.company": "Company", "foot.contact": "Contact", "foot.rights": "All rights reserved.",

    "sp.eyebrow": "Our services", "sp.title": "Every Service We Offer",
    "sp.sub": "Tap any service to see what's included, how long it takes and the starting price.",
    "sp.search": "Search services", "sp.none": "No services match your search.", "sp.home": "Home",
    "cat.all": "All", "cat.maint": "Maintenance", "cat.repair": "Repair", "cat.diag": "Diagnostics", "cat.comfort": "Comfort & Electrical",

    "m.price": "Starting at", "m.time": "Time", "m.warranty": "Warranty", "m.warrantyVal": "24 mo / 24k mi",
    "m.inc": "What's included", "m.book": "Book this service", "m.close": "Close", "m.prev": "Previous service", "m.next": "Next service",
    "unit.days": "days",

    "b.title": "Book an Appointment", "b.step1": "Service", "b.step2": "Vehicle & time", "b.step3": "Your details",
    "b.s1h": "What does your car need?", "b.s1p": "Pick one or more services.",
    "b.est": "Starting estimate", "b.next": "Continue", "b.back": "Back",
    "b.s2h": "Your vehicle and a time", "b.year": "Year", "b.make": "Make", "b.model": "Model", "b.date": "Date", "b.time": "Available times",
    "b.sunday": "We're closed on Sundays. Please pick another day.",
    "b.s3h": "How can we reach you?", "b.name": "Full name", "b.phone": "Phone", "b.email": "Email (optional)",
    "b.notes": "What's going on? (optional)", "b.notesPh": "Squeaking when I brake, mostly in the morning",
    "b.pref": "Contact me by", "b.text": "Text", "b.call": "Call", "b.mail": "Email",
    "b.submit": "Confirm booking",
    "b.doneT": "You're booked!", "b.doneP": "We'll contact you within one business hour to confirm.",
    "b.ref": "Confirmation", "b.sumSvc": "Services", "b.sumCar": "Vehicle", "b.sumWhen": "When",
    "b.close": "Done", "b.another": "Book another car",
    "b.errSvc": "Pick at least one service.", "b.errFields": "Fill in the highlighted fields.", "b.errTime": "Pick a time."
  },

  /* ---------------- ESPAÑOL ---------------- */
  es: {
    "nav.services": "Servicios", "nav.allServices": "Todos los servicios", "nav.about": "Nosotros", "nav.specials": "Ofertas",
    "nav.reviews": "Opiniones", "nav.contact": "Contacto", "nav.book": "Agendar cita", "nav.lang": "Idioma",
    "float.book": "Agendar",

    "hero.l1": "Reparaciones expertas.", "hero.l2": "Servicio honesto.",
    "hero.sub": "Tus especialistas en reparación automotriz del vecindario. Para que manejes seguro y tranquilo.",
    "hero.book": "Agendar cita", "hero.explore": "Ver servicios",
    "hero.tag1": "Técnicos certificados ASE", "hero.tag2": "Todas las marcas y modelos", "hero.tag3": "Garantía de 24 meses / 24,000 millas",
    "hero.rating": "Calificación en Google", "hero.reviews": "de 1,240 opiniones",

    "trust.1": "Expertos certificados", "trust.2": "Precios claros", "trust.3": "Refacciones de calidad", "trust.4": "Local y de confianza",

    "svc.eyebrow": "Lo que hacemos", "svc.title": "Cuidado completo para tu auto",
    "svc.sub": "Desde mantenimiento de rutina hasta reparaciones complejas, te cubrimos.",
    "svc.more": "Ver detalles", "svc.from": "Desde", "svc.viewAll": "Ver los 12 servicios", "svc.popular": "También populares",

    "about.eyebrow": "Nosotros", "about.title": "Un taller en el que puedes confiar",
    "about.text": "Creemos en la comunicación clara, precios justos y trabajo de alta calidad. Nuestro equipo trata tu vehículo como si fuera nuestro.",
    "about.c1": "Recomendaciones honestas y directas", "about.c2": "Técnicos con experiencia y certificación ASE", "about.c3": "Reparaciones confiables y duraderas",
    "about.s1": "Años de experiencia", "about.s2": "Autos atendidos", "about.s3": "Nos recomiendan",

    "steps.eyebrow": "Cómo funciona", "steps.title": "De la entrega a la salida",
    "steps.sub": "Sin sorpresas en la cuenta. Tú apruebas cada reparación antes de empezar.",
    "steps.1t": "Agenda en línea", "steps.1d": "Elige un servicio y un horario. Hay citas el mismo día casi todos los días hábiles.",
    "steps.2t": "Revisión gratis", "steps.2d": "Un técnico revisa tu auto y te envía fotos de lo que encuentra.",
    "steps.3t": "Tú apruebas", "steps.3d": "Recibe una cotización por escrito. Nada empieza sin tu autorización.",
    "steps.4t": "Llévatelo", "steps.4d": "Recoge tu auto con nuestra garantía de 24 meses / 24,000 millas.",

    "spec.eyebrow": "Ofertas actuales", "spec.title": "Ofertas del mes",
    "spec.sub": "Menciona la oferta al agendar. Un cupón por visita.",
    "spec.1a": "$20 MENOS", "spec.1t": "Cualquier servicio de frenos", "spec.1d": "Balatas, discos o cambio de líquido.",
    "spec.2a": "GRATIS", "spec.2t": "Rotación de llantas", "spec.2d": "Con cualquier cambio de aceite sintético.",
    "spec.3a": "10% MENOS", "spec.3t": "Adultos mayores y militares", "spec.3d": "En mano de obra. Presenta identificación.",
    "spec.claim": "Usar oferta", "spec.valid": "Válido hasta el 30 de nov. de 2026",

    "team.eyebrow": "Nuestro equipo", "team.title": "Las personas bajo el cofre",
    "team.sub": "Todos nuestros técnicos están certificados por ASE y capacitados en las herramientas más nuevas.",
    "team.1r": "Técnico maestro · 22 años", "team.2r": "Frenos y suspensión · 14 años", "team.3r": "Jefe de diagnóstico · 11 años",

    "rev.title": "La confianza de los conductores locales", "rev.sub": "Promedio de 4.9 en 1,240 opiniones de Google y Yelp.",
    "rev.1": "Otro taller me cotizó $1,800 por frenos. Aquí me mostraron que los discos estaban bien y solo cambiaron balatas. Me ahorré más de mil dólares.",
    "rev.2": "Me mandaron fotos de la fuga antes de hacer nada. Precio claro y listo esa misma tarde. Ahora este es mi taller.",
    "rev.3": "La luz de check engine tenía confundidas a dos agencias. Ellos encontraron una manguera de vacío rota en menos de una hora.",
    "rev.4": "Sala de espera limpia, buen café, y el cambio de aceite y rotación quedaron en 40 minutos.",
    "rev.5": "Mi aire acondicionado echaba aire caliente en julio. Encontraron la fuga y cobraron menos de lo cotizado.",
    "rev.6": "Tres autos en ocho años. Nunca me venden trabajos de más y siempre me dicen qué puede esperar.",

    "con.eyebrow": "Visítanos", "con.title": "Horario y ubicación",
    "con.sub": "Pasa, llama o agenda en línea. Confirmamos por mensaje en menos de una hora hábil.",
    "con.shuttle": "Transporte gratis en 8 km a la redonda", "con.closed": "Cerrado", "con.open": "Abierto ahora", "con.closedNow": "Cerrado ahora",
    "con.bookT": "Listos cuando tú lo estés", "con.bookP": "Agenda en línea en menos de un minuto. Elige servicio, fecha y hora.",

    "faq.eyebrow": "Preguntas", "faq.title": "Bueno saber",
    "faq.q1": "¿Pierdo la garantía de fábrica si doy servicio aquí?",
    "faq.a1": "No. Puedes dar servicio a tu auto en cualquier taller independiente. Usamos partes y fluidos con especificación original y registramos cada servicio.",
    "faq.q2": "¿Cuánto tarda una reparación normal?",
    "faq.a2": "Un cambio de aceite tarda unos 45 minutos. La mayoría de frenos y diagnósticos quedan el mismo día. Para trabajos grandes te damos un tiempo estimado.",
    "faq.q3": "¿Las reparaciones tienen garantía?",
    "faq.a3": "Sí. Partes y mano de obra tienen garantía de 24 meses o 24,000 millas, lo que ocurra primero.",
    "faq.q4": "¿Puedo esperar mientras atienden mi auto?",
    "faq.a4": "Sí. La sala de espera tiene Wi-Fi, café y cargadores. Para trabajos largos ofrecemos transporte gratis.",

    "cta.title": "¿Se encendió la luz de check engine? Averigüemos por qué hoy.", "cta.btn": "Agendar cita",

    "foot.tag": "Reparación automotriz honesta y certificada para todas las marcas desde 2008.",
    "foot.services": "Servicios", "foot.company": "Empresa", "foot.contact": "Contacto", "foot.rights": "Todos los derechos reservados.",

    "sp.eyebrow": "Nuestros servicios", "sp.title": "Todos nuestros servicios",
    "sp.sub": "Toca cualquier servicio para ver qué incluye, cuánto tarda y el precio inicial.",
    "sp.search": "Buscar servicios", "sp.none": "Ningún servicio coincide con tu búsqueda.", "sp.home": "Inicio",
    "cat.all": "Todos", "cat.maint": "Mantenimiento", "cat.repair": "Reparación", "cat.diag": "Diagnóstico", "cat.comfort": "Confort y eléctrico",

    "m.price": "Desde", "m.time": "Tiempo", "m.warranty": "Garantía", "m.warrantyVal": "24 meses / 24k mi",
    "m.inc": "Qué incluye", "m.book": "Agendar este servicio", "m.close": "Cerrar", "m.prev": "Servicio anterior", "m.next": "Siguiente servicio",
    "unit.days": "días",

    "b.title": "Agendar cita", "b.step1": "Servicio", "b.step2": "Vehículo y hora", "b.step3": "Tus datos",
    "b.s1h": "¿Qué necesita tu auto?", "b.s1p": "Elige uno o más servicios.",
    "b.est": "Estimado inicial", "b.next": "Continuar", "b.back": "Atrás",
    "b.s2h": "Tu vehículo y un horario", "b.year": "Año", "b.make": "Marca", "b.model": "Modelo", "b.date": "Fecha", "b.time": "Horarios disponibles",
    "b.sunday": "Cerramos los domingos. Elige otro día, por favor.",
    "b.s3h": "¿Cómo te contactamos?", "b.name": "Nombre completo", "b.phone": "Teléfono", "b.email": "Correo (opcional)",
    "b.notes": "¿Qué le pasa? (opcional)", "b.notesPh": "Rechina al frenar, sobre todo en la mañana",
    "b.pref": "Contáctame por", "b.text": "Mensaje", "b.call": "Llamada", "b.mail": "Correo",
    "b.submit": "Confirmar cita",
    "b.doneT": "¡Tu cita está agendada!", "b.doneP": "Te contactaremos en menos de una hora hábil para confirmar.",
    "b.ref": "Confirmación", "b.sumSvc": "Servicios", "b.sumCar": "Vehículo", "b.sumWhen": "Cuándo",
    "b.close": "Listo", "b.another": "Agendar otro auto",
    "b.errSvc": "Elige al menos un servicio.", "b.errFields": "Completa los campos marcados.", "b.errTime": "Elige un horario."
  },

  /* ---------------- DEUTSCH ---------------- */
  de: {
    "nav.services": "Leistungen", "nav.allServices": "Alle Leistungen", "nav.about": "Über uns", "nav.specials": "Angebote",
    "nav.reviews": "Bewertungen", "nav.contact": "Kontakt", "nav.book": "Termin buchen", "nav.lang": "Sprache",
    "float.book": "Buchen",

    "hero.l1": "Fachgerechte Reparatur.", "hero.l2": "Ehrlicher Service.",
    "hero.sub": "Ihre Kfz-Werkstatt in der Nachbarschaft. Damit Sie sicher und entspannt unterwegs sind.",
    "hero.book": "Termin buchen", "hero.explore": "Leistungen ansehen",
    "hero.tag1": "ASE-zertifizierte Mechaniker", "hero.tag2": "Alle Marken & Modelle", "hero.tag3": "24 Monate / 24.000 Meilen Garantie",
    "hero.rating": "Google-Bewertung", "hero.reviews": "aus 1.240 Bewertungen",

    "trust.1": "Zertifizierte Profis", "trust.2": "Klare Preise", "trust.3": "Qualitätsteile", "trust.4": "Lokal & vertraut",

    "svc.eyebrow": "Was wir tun", "svc.title": "Rundum-Pflege für Ihr Auto",
    "svc.sub": "Von der Inspektion bis zur aufwendigen Reparatur sind Sie bei uns richtig.",
    "svc.more": "Details ansehen", "svc.from": "Ab", "svc.viewAll": "Alle 12 Leistungen ansehen", "svc.popular": "Ebenfalls beliebt",

    "about.eyebrow": "Über uns", "about.title": "Eine Werkstatt, auf die Sie zählen können",
    "about.text": "Wir setzen auf klare Kommunikation, faire Preise und hochwertige Arbeit. Unser Team behandelt Ihr Fahrzeug wie das eigene.",
    "about.c1": "Ehrliche, klare Empfehlungen", "about.c2": "Erfahrene, ASE-zertifizierte Mechaniker", "about.c3": "Zuverlässige Reparaturen, die halten",
    "about.s1": "Jahre im Geschäft", "about.s2": "Betreute Autos", "about.s3": "Empfehlen uns weiter",

    "steps.eyebrow": "So funktioniert's", "steps.title": "Vom Abgeben bis zum Losfahren",
    "steps.sub": "Keine Überraschungen auf der Rechnung. Sie geben jede Reparatur vorher frei.",
    "steps.1t": "Online buchen", "steps.1d": "Leistung und Uhrzeit wählen. Termine am selben Tag an den meisten Werktagen.",
    "steps.2t": "Kostenloser Check", "steps.2d": "Ein Mechaniker prüft Ihr Auto und schickt Ihnen Fotos.",
    "steps.3t": "Sie geben frei", "steps.3d": "Schriftlicher Kostenvoranschlag. Ohne Ihr OK beginnt nichts.",
    "steps.4t": "Losfahren", "steps.4d": "Abholen mit 24 Monaten / 24.000 Meilen Garantie.",

    "spec.eyebrow": "Aktuelle Angebote", "spec.title": "Angebote des Monats",
    "spec.sub": "Nennen Sie das Angebot bei der Buchung. Ein Gutschein pro Besuch.",
    "spec.1a": "$20 RABATT", "spec.1t": "Jeder Bremsenservice", "spec.1d": "Beläge, Scheiben oder Bremsflüssigkeit.",
    "spec.2a": "GRATIS", "spec.2t": "Reifenwechsel vorne/hinten", "spec.2d": "Bei jedem Ölwechsel mit Synthetiköl.",
    "spec.3a": "10% RABATT", "spec.3t": "Senioren & Militär", "spec.3d": "Auf den Arbeitslohn. Ausweis bitte mitbringen.",
    "spec.claim": "Angebot nutzen", "spec.valid": "Gültig bis 30. Nov. 2026",

    "team.eyebrow": "Unser Team", "team.title": "Die Menschen unter der Haube",
    "team.sub": "Alle Mechaniker sind ASE-zertifiziert und auf die neuesten Diagnosegeräte geschult.",
    "team.1r": "Kfz-Meister · 22 Jahre", "team.2r": "Bremsen & Fahrwerk · 14 Jahre", "team.3r": "Leiter Diagnose · 11 Jahre",

    "rev.title": "Das Vertrauen der Fahrer vor Ort", "rev.sub": "Durchschnitt 4,9 aus 1.240 Bewertungen auf Google und Yelp.",
    "rev.1": "Eine andere Werkstatt wollte 1.800 $ für die Bremsen. Hier zeigte man mir, dass die Scheiben noch gut waren. Nur neue Beläge, über tausend Dollar gespart.",
    "rev.2": "Sie haben mir Fotos vom Leck geschickt, bevor sie etwas gemacht haben. Klarer Preis, am selben Nachmittag fertig.",
    "rev.3": "Die Motorkontrollleuchte hat zwei Händler ratlos gemacht. Hier fand man in unter einer Stunde einen gerissenen Unterdruckschlauch.",
    "rev.4": "Sauberer Warteraum, guter Kaffee, und Ölwechsel plus Reifentausch waren in 40 Minuten erledigt.",
    "rev.5": "Meine Klimaanlage blies im Juli warme Luft. Leck gefunden und günstiger als veranschlagt repariert.",
    "rev.6": "Drei Autos in acht Jahren. Nie unnötige Arbeiten, und sie sagen mir immer, was warten kann.",

    "con.eyebrow": "Besuchen Sie uns", "con.title": "Öffnungszeiten & Anfahrt",
    "con.sub": "Vorbeikommen, anrufen oder online buchen. Wir bestätigen per SMS innerhalb einer Geschäftsstunde.",
    "con.shuttle": "Gratis-Shuttle im Umkreis von 8 km", "con.closed": "Geschlossen", "con.open": "Jetzt geöffnet", "con.closedNow": "Jetzt geschlossen",
    "con.bookT": "Bereit, wenn Sie es sind", "con.bookP": "In weniger als einer Minute online buchen. Leistung, Datum und Uhrzeit wählen.",

    "faq.eyebrow": "Fragen", "faq.title": "Gut zu wissen",
    "faq.q1": "Verliere ich die Herstellergarantie, wenn ich hier warten lasse?",
    "faq.a1": "Nein. Sie dürfen jede freie Werkstatt nutzen. Wir verwenden Teile und Flüssigkeiten nach Herstellervorgabe und dokumentieren jeden Service.",
    "faq.q2": "Wie lange dauert eine normale Reparatur?",
    "faq.a2": "Ein Ölwechsel dauert etwa 45 Minuten. Die meisten Bremsarbeiten und Diagnosen sind am selben Tag fertig. Bei größeren Arbeiten nennen wir eine Dauer.",
    "faq.q3": "Gibt es Garantie auf Reparaturen?",
    "faq.a3": "Ja. Teile und Arbeit sind 24 Monate oder 24.000 Meilen abgesichert, je nachdem, was zuerst eintritt.",
    "faq.q4": "Kann ich während der Reparatur warten?",
    "faq.a4": "Ja. Der Warteraum hat WLAN, Kaffee und Ladestationen. Bei längeren Arbeiten gibt es einen Gratis-Shuttle.",

    "cta.title": "Motorkontrollleuchte an? Finden wir heute heraus, warum.", "cta.btn": "Termin buchen",

    "foot.tag": "Ehrliche, zertifizierte Kfz-Reparatur für alle Marken seit 2008.",
    "foot.services": "Leistungen", "foot.company": "Unternehmen", "foot.contact": "Kontakt", "foot.rights": "Alle Rechte vorbehalten.",

    "sp.eyebrow": "Unsere Leistungen", "sp.title": "Alle unsere Leistungen",
    "sp.sub": "Tippen Sie auf eine Leistung für Umfang, Dauer und Startpreis.",
    "sp.search": "Leistungen suchen", "sp.none": "Keine Leistung passt zu Ihrer Suche.", "sp.home": "Start",
    "cat.all": "Alle", "cat.maint": "Wartung", "cat.repair": "Reparatur", "cat.diag": "Diagnose", "cat.comfort": "Komfort & Elektrik",

    "m.price": "Ab", "m.time": "Dauer", "m.warranty": "Garantie", "m.warrantyVal": "24 Mon. / 24k Meilen",
    "m.inc": "Im Preis enthalten", "m.book": "Diese Leistung buchen", "m.close": "Schließen", "m.prev": "Vorherige Leistung", "m.next": "Nächste Leistung",
    "unit.days": "Tage",

    "b.title": "Termin buchen", "b.step1": "Leistung", "b.step2": "Fahrzeug & Zeit", "b.step3": "Ihre Daten",
    "b.s1h": "Was braucht Ihr Auto?", "b.s1p": "Wählen Sie eine oder mehrere Leistungen.",
    "b.est": "Geschätzter Startpreis", "b.next": "Weiter", "b.back": "Zurück",
    "b.s2h": "Ihr Fahrzeug und eine Uhrzeit", "b.year": "Baujahr", "b.make": "Marke", "b.model": "Modell", "b.date": "Datum", "b.time": "Freie Zeiten",
    "b.sunday": "Sonntags geschlossen. Bitte wählen Sie einen anderen Tag.",
    "b.s3h": "Wie erreichen wir Sie?", "b.name": "Vollständiger Name", "b.phone": "Telefon", "b.email": "E-Mail (optional)",
    "b.notes": "Was ist los? (optional)", "b.notesPh": "Quietscht beim Bremsen, vor allem morgens",
    "b.pref": "Kontakt per", "b.text": "SMS", "b.call": "Anruf", "b.mail": "E-Mail",
    "b.submit": "Buchung bestätigen",
    "b.doneT": "Ihr Termin ist gebucht!", "b.doneP": "Wir melden uns innerhalb einer Geschäftsstunde zur Bestätigung.",
    "b.ref": "Bestätigung", "b.sumSvc": "Leistungen", "b.sumCar": "Fahrzeug", "b.sumWhen": "Wann",
    "b.close": "Fertig", "b.another": "Weiteres Auto buchen",
    "b.errSvc": "Wählen Sie mindestens eine Leistung.", "b.errFields": "Bitte die markierten Felder ausfüllen.", "b.errTime": "Bitte eine Uhrzeit wählen."
  },

  /* ---------------- FRANÇAIS ---------------- */
  fr: {
    "nav.services": "Services", "nav.allServices": "Tous les services", "nav.about": "À propos", "nav.specials": "Offres",
    "nav.reviews": "Avis", "nav.contact": "Contact", "nav.book": "Prendre rendez-vous", "nav.lang": "Langue",
    "float.book": "Réserver",

    "hero.l1": "Réparations expertes.", "hero.l2": "Service honnête.",
    "hero.sub": "Vos spécialistes de la réparation auto de quartier. Pour rouler en sécurité et en toute confiance.",
    "hero.book": "Prendre rendez-vous", "hero.explore": "Voir les services",
    "hero.tag1": "Techniciens certifiés ASE", "hero.tag2": "Toutes marques et modèles", "hero.tag3": "Garantie 24 mois / 24 000 miles",
    "hero.rating": "Note Google", "hero.reviews": "sur 1 240 avis",

    "trust.1": "Experts certifiés", "trust.2": "Prix transparents", "trust.3": "Pièces de qualité", "trust.4": "Local et fiable",

    "svc.eyebrow": "Ce que nous faisons", "svc.title": "Un entretien complet pour votre voiture",
    "svc.sub": "De l'entretien courant aux réparations complexes, nous nous occupons de tout.",
    "svc.more": "Voir les détails", "svc.from": "Dès", "svc.viewAll": "Voir les 12 services", "svc.popular": "Aussi demandés",

    "about.eyebrow": "À propos", "about.title": "Un garage sur qui compter",
    "about.text": "Nous croyons en une communication claire, des prix justes et un travail de qualité. Notre équipe traite votre véhicule comme le sien.",
    "about.c1": "Des recommandations honnêtes et directes", "about.c2": "Des techniciens expérimentés certifiés ASE", "about.c3": "Des réparations fiables et durables",
    "about.s1": "Années d'activité", "about.s2": "Voitures entretenues", "about.s3": "Nous recommandent",

    "steps.eyebrow": "Comment ça marche", "steps.title": "Du dépôt jusqu'au départ",
    "steps.sub": "Aucune surprise sur la facture. Vous approuvez chaque réparation avant le début.",
    "steps.1t": "Réservez en ligne", "steps.1d": "Choisissez un service et un horaire. Créneaux le jour même la plupart des jours.",
    "steps.2t": "Inspection gratuite", "steps.2d": "Un technicien vérifie votre voiture et vous envoie des photos.",
    "steps.3t": "Vous approuvez", "steps.3d": "Devis écrit avec pièces et main-d'œuvre. Rien ne commence sans votre accord.",
    "steps.4t": "Reprenez la route", "steps.4d": "Récupérez votre voiture avec notre garantie 24 mois / 24 000 miles.",

    "spec.eyebrow": "Offres en cours", "spec.title": "Les offres du mois",
    "spec.sub": "Mentionnez l'offre lors de la réservation. Un coupon par visite.",
    "spec.1a": "-20 $", "spec.1t": "Tout service de freins", "spec.1d": "Plaquettes, disques ou purge du liquide.",
    "spec.2a": "OFFERT", "spec.2t": "Permutation des pneus", "spec.2d": "Avec toute vidange à l'huile synthétique.",
    "spec.3a": "-10 %", "spec.3t": "Seniors et militaires", "spec.3d": "Sur la main-d'œuvre. Pièce d'identité au dépôt.",
    "spec.claim": "Profiter de l'offre", "spec.valid": "Valable jusqu'au 30 nov. 2026",

    "team.eyebrow": "L'équipe", "team.title": "Les gens sous le capot",
    "team.sub": "Tous nos techniciens sont certifiés ASE et formés aux derniers outils de diagnostic.",
    "team.1r": "Technicien expert · 22 ans", "team.2r": "Freins et suspension · 14 ans", "team.3r": "Responsable diagnostic · 11 ans",

    "rev.title": "La confiance des conducteurs du coin", "rev.sub": "Moyenne de 4,9 sur 1 240 avis Google et Yelp.",
    "rev.1": "Un autre garage m'a demandé 1 800 $ pour les freins. Ici, on m'a montré que mes disques étaient encore bons. Plaquettes seulement : plus de mille dollars économisés.",
    "rev.2": "Ils m'ont envoyé des photos de la fuite avant de commencer. Prix clair, terminé dans l'après-midi.",
    "rev.3": "Le voyant moteur laissait deux concessionnaires perplexes. Ils ont trouvé une durite de dépression fendue en moins d'une heure.",
    "rev.4": "Salle d'attente propre, bon café, et vidange plus permutation faites en 40 minutes.",
    "rev.5": "Ma clim soufflait de l'air chaud en juillet. Fuite trouvée et réparée pour moins que le devis.",
    "rev.6": "Trois voitures en huit ans. Jamais de travaux inutiles, et ils me disent toujours ce qui peut attendre.",

    "con.eyebrow": "Venez nous voir", "con.title": "Horaires et adresse",
    "con.sub": "Passez, appelez ou réservez en ligne. Confirmation par SMS en moins d'une heure ouvrée.",
    "con.shuttle": "Navette gratuite dans un rayon de 8 km", "con.closed": "Fermé", "con.open": "Ouvert", "con.closedNow": "Fermé actuellement",
    "con.bookT": "Prêts quand vous l'êtes", "con.bookP": "Réservez en ligne en moins d'une minute. Service, date et heure.",

    "faq.eyebrow": "Questions", "faq.title": "Bon à savoir",
    "faq.q1": "Est-ce que je perds la garantie constructeur en venant ici ?",
    "faq.a1": "Non. Vous pouvez faire entretenir votre voiture dans n'importe quel garage indépendant. Nous utilisons des pièces conformes et consignons chaque intervention.",
    "faq.q2": "Combien de temps dure une réparation courante ?",
    "faq.a2": "Une vidange prend environ 45 minutes. La plupart des freins et diagnostics sont faits le jour même. Pour les gros travaux, nous indiquons un délai.",
    "faq.q3": "Les réparations sont-elles garanties ?",
    "faq.a3": "Oui. Pièces et main-d'œuvre sont garanties 24 mois ou 24 000 miles, au premier terme atteint.",
    "faq.q4": "Puis-je attendre pendant l'intervention ?",
    "faq.a4": "Oui. La salle d'attente a le Wi-Fi, du café et des prises de recharge. Pour les longs travaux, navette gratuite.",

    "cta.title": "Voyant moteur allumé ? Trouvons la cause aujourd'hui.", "cta.btn": "Prendre rendez-vous",

    "foot.tag": "Réparation automobile honnête et certifiée pour toutes marques depuis 2008.",
    "foot.services": "Services", "foot.company": "Entreprise", "foot.contact": "Contact", "foot.rights": "Tous droits réservés.",

    "sp.eyebrow": "Nos services", "sp.title": "Tous nos services",
    "sp.sub": "Touchez un service pour voir ce qui est inclus, la durée et le prix de départ.",
    "sp.search": "Rechercher un service", "sp.none": "Aucun service ne correspond à votre recherche.", "sp.home": "Accueil",
    "cat.all": "Tous", "cat.maint": "Entretien", "cat.repair": "Réparation", "cat.diag": "Diagnostic", "cat.comfort": "Confort et électrique",

    "m.price": "À partir de", "m.time": "Durée", "m.warranty": "Garantie", "m.warrantyVal": "24 mois / 24k mi",
    "m.inc": "Ce qui est inclus", "m.book": "Réserver ce service", "m.close": "Fermer", "m.prev": "Service précédent", "m.next": "Service suivant",
    "unit.days": "jours",

    "b.title": "Prendre rendez-vous", "b.step1": "Service", "b.step2": "Véhicule et heure", "b.step3": "Vos coordonnées",
    "b.s1h": "De quoi votre voiture a-t-elle besoin ?", "b.s1p": "Choisissez un ou plusieurs services.",
    "b.est": "Estimation de départ", "b.next": "Continuer", "b.back": "Retour",
    "b.s2h": "Votre véhicule et un horaire", "b.year": "Année", "b.make": "Marque", "b.model": "Modèle", "b.date": "Date", "b.time": "Horaires disponibles",
    "b.sunday": "Nous sommes fermés le dimanche. Choisissez un autre jour.",
    "b.s3h": "Comment vous joindre ?", "b.name": "Nom complet", "b.phone": "Téléphone", "b.email": "E-mail (facultatif)",
    "b.notes": "Que se passe-t-il ? (facultatif)", "b.notesPh": "Grincement au freinage, surtout le matin",
    "b.pref": "Me contacter par", "b.text": "SMS", "b.call": "Appel", "b.mail": "E-mail",
    "b.submit": "Confirmer le rendez-vous",
    "b.doneT": "Rendez-vous réservé !", "b.doneP": "Nous vous contacterons dans l'heure ouvrée pour confirmer.",
    "b.ref": "Confirmation", "b.sumSvc": "Services", "b.sumCar": "Véhicule", "b.sumWhen": "Quand",
    "b.close": "Terminé", "b.another": "Réserver pour une autre voiture",
    "b.errSvc": "Choisissez au moins un service.", "b.errFields": "Remplissez les champs indiqués.", "b.errTime": "Choisissez un horaire."
  },

  /* ---------------- PORTUGUÊS ---------------- */
  pt: {
    "nav.services": "Serviços", "nav.allServices": "Todos os serviços", "nav.about": "Sobre nós", "nav.specials": "Promoções",
    "nav.reviews": "Avaliações", "nav.contact": "Contato", "nav.book": "Agendar horário", "nav.lang": "Idioma",
    "float.book": "Agendar",

    "hero.l1": "Reparos especializados.", "hero.l2": "Serviço honesto.",
    "hero.sub": "Seus especialistas em reparação automotiva do bairro. Para você dirigir com segurança e confiança.",
    "hero.book": "Agendar horário", "hero.explore": "Ver serviços",
    "hero.tag1": "Técnicos certificados ASE", "hero.tag2": "Todas as marcas e modelos", "hero.tag3": "Garantia de 24 meses / 24.000 milhas",
    "hero.rating": "Nota no Google", "hero.reviews": "de 1.240 avaliações",

    "trust.1": "Especialistas certificados", "trust.2": "Preço transparente", "trust.3": "Peças de qualidade", "trust.4": "Local e confiável",

    "svc.eyebrow": "O que fazemos", "svc.title": "Cuidado completo para o seu carro",
    "svc.sub": "Da manutenção de rotina aos reparos complexos, cuidamos de tudo.",
    "svc.more": "Ver detalhes", "svc.from": "A partir de", "svc.viewAll": "Ver os 12 serviços", "svc.popular": "Também procurados",

    "about.eyebrow": "Sobre nós", "about.title": "Uma oficina em que você pode confiar",
    "about.text": "Acreditamos em comunicação clara, preço justo e trabalho de qualidade. Nossa equipe trata o seu veículo como se fosse nosso.",
    "about.c1": "Recomendações honestas e diretas", "about.c2": "Técnicos experientes e certificados ASE", "about.c3": "Reparos confiáveis e duradouros",
    "about.s1": "Anos de experiência", "about.s2": "Carros atendidos", "about.s3": "Nos recomendam",

    "steps.eyebrow": "Como funciona", "steps.title": "Da entrega à saída",
    "steps.sub": "Sem surpresas na conta. Você aprova cada reparo antes de começarmos.",
    "steps.1t": "Agende online", "steps.1d": "Escolha um serviço e um horário. Vagas no mesmo dia na maioria dos dias úteis.",
    "steps.2t": "Inspeção grátis", "steps.2d": "Um técnico verifica seu carro e envia fotos do que encontrar.",
    "steps.3t": "Você aprova", "steps.3d": "Orçamento por escrito com peças e mão de obra. Nada começa sem o seu OK.",
    "steps.4t": "Pegue a estrada", "steps.4d": "Retire seu carro com garantia de 24 meses / 24.000 milhas.",

    "spec.eyebrow": "Ofertas atuais", "spec.title": "Promoções do mês",
    "spec.sub": "Mencione a oferta ao agendar. Um cupom por visita.",
    "spec.1a": "$20 OFF", "spec.1t": "Qualquer serviço de freio", "spec.1d": "Pastilhas, discos ou troca de fluido.",
    "spec.2a": "GRÁTIS", "spec.2t": "Rodízio de pneus", "spec.2d": "Com qualquer troca de óleo sintético.",
    "spec.3a": "10% OFF", "spec.3t": "Idosos e militares", "spec.3d": "Na mão de obra. Apresente documento na entrega.",
    "spec.claim": "Usar oferta", "spec.valid": "Válido até 30 de nov. de 2026",

    "team.eyebrow": "Nossa equipe", "team.title": "As pessoas debaixo do capô",
    "team.sub": "Todos os técnicos são certificados ASE e treinados nas ferramentas de diagnóstico mais recentes.",
    "team.1r": "Técnico mestre · 22 anos", "team.2r": "Freios e suspensão · 14 anos", "team.3r": "Chefe de diagnóstico · 11 anos",

    "rev.title": "A confiança dos motoristas da região", "rev.sub": "Média de 4,9 em 1.240 avaliações no Google e Yelp.",
    "rev.1": "Outra oficina pediu $1.800 pelos freios. Aqui me mostraram que os discos ainda estavam bons e trocaram só as pastilhas. Economizei mais de mil dólares.",
    "rev.2": "Me mandaram fotos do vazamento antes de fazer qualquer coisa. Preço claro, pronto na mesma tarde.",
    "rev.3": "A luz da injeção deixou duas concessionárias sem resposta. Eles acharam uma mangueira de vácuo rachada em menos de uma hora.",
    "rev.4": "Sala de espera limpa, café bom, e troca de óleo com rodízio prontos em 40 minutos.",
    "rev.5": "Meu ar-condicionado soprava ar quente em julho. Acharam o vazamento e cobraram menos que o orçamento.",
    "rev.6": "Três carros em oito anos. Nunca empurram serviço extra e sempre dizem o que pode esperar.",

    "con.eyebrow": "Visite-nos", "con.title": "Horários e endereço",
    "con.sub": "Passe aqui, ligue ou agende online. Confirmamos por mensagem em até uma hora útil.",
    "con.shuttle": "Transporte grátis num raio de 8 km", "con.closed": "Fechado", "con.open": "Aberto agora", "con.closedNow": "Fechado agora",
    "con.bookT": "Prontos quando você estiver", "con.bookP": "Agende online em menos de um minuto. Escolha serviço, data e hora.",

    "faq.eyebrow": "Perguntas", "faq.title": "Bom saber",
    "faq.q1": "Perco a garantia de fábrica se fizer a manutenção aqui?",
    "faq.a1": "Não. Você pode fazer a manutenção em qualquer oficina independente. Usamos peças e fluidos dentro da especificação original e registramos cada serviço.",
    "faq.q2": "Quanto tempo leva um reparo comum?",
    "faq.a2": "A troca de óleo leva cerca de 45 minutos. A maioria dos freios e diagnósticos fica pronta no mesmo dia. Para serviços maiores, damos uma previsão.",
    "faq.q3": "Os reparos têm garantia?",
    "faq.a3": "Sim. Peças e mão de obra têm garantia de 24 meses ou 24.000 milhas, o que vier primeiro.",
    "faq.q4": "Posso esperar enquanto atendem meu carro?",
    "faq.a4": "Sim. A sala de espera tem Wi-Fi, café e carregadores. Para serviços longos, oferecemos transporte grátis.",

    "cta.title": "Luz da injeção acesa? Vamos descobrir o motivo hoje.", "cta.btn": "Agendar horário",

    "foot.tag": "Reparação automotiva honesta e certificada para todas as marcas desde 2008.",
    "foot.services": "Serviços", "foot.company": "Empresa", "foot.contact": "Contato", "foot.rights": "Todos os direitos reservados.",

    "sp.eyebrow": "Nossos serviços", "sp.title": "Todos os nossos serviços",
    "sp.sub": "Toque em um serviço para ver o que inclui, quanto tempo leva e o preço inicial.",
    "sp.search": "Buscar serviços", "sp.none": "Nenhum serviço corresponde à sua busca.", "sp.home": "Início",
    "cat.all": "Todos", "cat.maint": "Manutenção", "cat.repair": "Reparo", "cat.diag": "Diagnóstico", "cat.comfort": "Conforto e elétrica",

    "m.price": "A partir de", "m.time": "Tempo", "m.warranty": "Garantia", "m.warrantyVal": "24 meses / 24k mi",
    "m.inc": "O que inclui", "m.book": "Agendar este serviço", "m.close": "Fechar", "m.prev": "Serviço anterior", "m.next": "Próximo serviço",
    "unit.days": "dias",

    "b.title": "Agendar horário", "b.step1": "Serviço", "b.step2": "Veículo e horário", "b.step3": "Seus dados",
    "b.s1h": "Do que o seu carro precisa?", "b.s1p": "Escolha um ou mais serviços.",
    "b.est": "Estimativa inicial", "b.next": "Continuar", "b.back": "Voltar",
    "b.s2h": "Seu veículo e um horário", "b.year": "Ano", "b.make": "Marca", "b.model": "Modelo", "b.date": "Data", "b.time": "Horários disponíveis",
    "b.sunday": "Fechamos aos domingos. Escolha outro dia, por favor.",
    "b.s3h": "Como podemos falar com você?", "b.name": "Nome completo", "b.phone": "Telefone", "b.email": "E-mail (opcional)",
    "b.notes": "O que está acontecendo? (opcional)", "b.notesPh": "Chia ao frear, principalmente de manhã",
    "b.pref": "Falar comigo por", "b.text": "Mensagem", "b.call": "Ligação", "b.mail": "E-mail",
    "b.submit": "Confirmar agendamento",
    "b.doneT": "Horário agendado!", "b.doneP": "Entraremos em contato em até uma hora útil para confirmar.",
    "b.ref": "Confirmação", "b.sumSvc": "Serviços", "b.sumCar": "Veículo", "b.sumWhen": "Quando",
    "b.close": "Pronto", "b.another": "Agendar outro carro",
    "b.errSvc": "Escolha pelo menos um serviço.", "b.errFields": "Preencha os campos destacados.", "b.errTime": "Escolha um horário."
  }
};

/* ---------------- SERVICE TEXT ----------------
   n = name, s = short line, d = description, inc = what's included */
const SVC_TEXT = {
  en: {
    oil: { n: "Oil & Maintenance", s: "Oil changes, filters and factory-recommended service.", d: "Synthetic or conventional oil change with a new filter, fluid top-offs and a 27-point inspection. We follow your manufacturer's schedule and keep a record of every visit.", inc: ["Up to 5 qt of oil and a new filter", "Fluid top-off and tire pressure check", "27-point safety inspection"] },
    brakes: { n: "Brake Repair", s: "Pads, rotors, calipers and brake fluid service.", d: "We measure pad and rotor thickness and show you the numbers before replacing anything. Quiet ceramic pads and rotors that meet or beat factory spec.", inc: ["Pad and rotor measurement", "Premium ceramic pads", "Brake fluid test and road test"] },
    diagnostics: { n: "Engine Diagnostics", s: "Check engine light on? We find the real cause.", d: "We read the codes, test the sensors and trace the fault to its source, then explain it in plain words. The diagnostic fee is credited toward the repair.", inc: ["Full computer scan of all modules", "Sensor and wiring tests", "Written report with photos"] },
    tires: { n: "Tires & Alignment", s: "New tires, rotation, balancing and alignment.", d: "Uneven wear costs you money. We rotate, balance and align your wheels with a computerized system, and stock all major tire brands.", inc: ["Computerized 4-wheel alignment", "Rotation and balancing", "TPMS sensor check"] },
    ac: { n: "A/C & Heating", s: "Cold air in summer, a warm cabin in winter.", d: "We pressure-test the system, find leaks with UV dye and recharge with the correct refrigerant, including R-1234yf. We also repair blowers and heater cores.", inc: ["System pressure and leak test", "Refrigerant recharge", "Cabin air filter check"] },
    battery: { n: "Battery & Electrical", s: "Batteries, starters, alternators and wiring.", d: "A car that won't start often needs more than a battery. We load-test the battery, starter and alternator and track down electrical drains.", inc: ["Battery load test", "Starter and alternator test", "Parasitic drain check"] },
    transmission: { n: "Transmission Service", s: "Fluid service, diagnostics and repair.", d: "Slipping, hard shifts or delayed engagement? We diagnose automatic and manual transmissions and service them with the exact fluid your car needs.", inc: ["Fluid exchange with OEM-spec fluid", "Shift quality and leak inspection", "Software updates when available"] },
    suspension: { n: "Suspension & Steering", s: "Shocks, struts, ball joints and tie rods.", d: "A bouncy ride or a pull to one side wears out tires and hurts handling. We inspect and replace worn suspension and steering parts.", inc: ["Shock and strut inspection", "Ball joint and tie rod check", "Alignment after repair"] },
    engine: { n: "Engine Repair", s: "From timing belts to complete engine work.", d: "Timing belts and chains, head gaskets, oil leaks and major engine repairs. You get a written quote and a timeline before we start.", inc: ["Timing belt and chain service", "Gasket and seal replacement", "Written quote before work"] },
    cooling: { n: "Cooling System", s: "Radiators, water pumps, hoses and coolant.", d: "Overheating can ruin an engine fast. We pressure-test the cooling system and replace radiators, thermostats, water pumps and hoses.", inc: ["Cooling system pressure test", "Coolant flush and refill", "Hose and thermostat check"] },
    exhaust: { n: "Exhaust & Muffler", s: "Mufflers, catalytic converters and emissions.", d: "Loud exhaust or a failed emissions test? We repair leaks and replace mufflers, pipes, oxygen sensors and catalytic converters.", inc: ["Exhaust leak inspection", "Oxygen sensor test", "Emissions readiness check"] },
    inspection: { n: "Pre-Purchase Inspection", s: "Buying a used car? Know before you pay.", d: "A technician inspects the car top to bottom, scans the computer and road-tests it. You get a full report with photos and repair costs.", inc: ["150-point inspection", "Computer scan and road test", "Report with photos and costs"] }
  },
  es: {
    oil: { n: "Aceite y mantenimiento", s: "Cambio de aceite, filtros y servicio de fábrica.", d: "Cambio de aceite sintético o convencional con filtro nuevo, nivelación de fluidos e inspección de 27 puntos. Seguimos el plan del fabricante y registramos cada visita.", inc: ["Hasta 5 cuartos de aceite y filtro nuevo", "Nivelación de fluidos y presión de llantas", "Inspección de seguridad de 27 puntos"] },
    brakes: { n: "Frenos", s: "Balatas, discos, calipers y líquido de frenos.", d: "Medimos el grosor de balatas y discos y te mostramos los números antes de cambiar algo. Balatas cerámicas silenciosas y discos con especificación original o mejor.", inc: ["Medición de balatas y discos", "Balatas cerámicas premium", "Prueba de líquido y prueba de manejo"] },
    diagnostics: { n: "Diagnóstico de motor", s: "¿Luz de check engine? Encontramos la causa real.", d: "Leemos los códigos, probamos los sensores y rastreamos la falla hasta su origen, y te lo explicamos claro. El costo del diagnóstico se abona a la reparación.", inc: ["Escaneo completo de todos los módulos", "Pruebas de sensores y cableado", "Reporte por escrito con fotos"] },
    tires: { n: "Llantas y alineación", s: "Llantas nuevas, rotación, balanceo y alineación.", d: "El desgaste disparejo te cuesta dinero. Rotamos, balanceamos y alineamos con equipo computarizado, y manejamos las principales marcas de llantas.", inc: ["Alineación computarizada de 4 ruedas", "Rotación y balanceo", "Revisión de sensores TPMS"] },
    ac: { n: "Aire acondicionado y calefacción", s: "Aire frío en verano, cabina caliente en invierno.", d: "Probamos la presión del sistema, encontramos fugas con tinte UV y recargamos con el refrigerante correcto, incluido R-1234yf. También reparamos sopladores y calefactores.", inc: ["Prueba de presión y fugas", "Recarga de refrigerante", "Revisión de filtro de cabina"] },
    battery: { n: "Batería y sistema eléctrico", s: "Baterías, marchas, alternadores y cableado.", d: "Un auto que no arranca muchas veces necesita más que batería. Probamos batería, marcha y alternador, y buscamos consumos parásitos.", inc: ["Prueba de carga de batería", "Prueba de marcha y alternador", "Revisión de consumo parásito"] },
    transmission: { n: "Transmisión", s: "Cambio de fluido, diagnóstico y reparación.", d: "¿Se patina, cambia duro o tarda en entrar? Diagnosticamos transmisiones automáticas y estándar y usamos el fluido exacto que tu auto necesita.", inc: ["Cambio de fluido con especificación original", "Revisión de cambios y fugas", "Actualización de software si existe"] },
    suspension: { n: "Suspensión y dirección", s: "Amortiguadores, struts, rótulas y terminales.", d: "Un auto que rebota o se jala de un lado gasta llantas y se maneja peor. Revisamos y cambiamos piezas gastadas de suspensión y dirección.", inc: ["Revisión de amortiguadores y struts", "Revisión de rótulas y terminales", "Alineación después de la reparación"] },
    engine: { n: "Reparación de motor", s: "Desde bandas de distribución hasta el motor completo.", d: "Bandas y cadenas de distribución, empaques de cabeza, fugas de aceite y reparaciones mayores. Recibes cotización y tiempo de entrega antes de empezar.", inc: ["Servicio de banda y cadena de tiempo", "Cambio de empaques y retenes", "Cotización por escrito antes del trabajo"] },
    cooling: { n: "Sistema de enfriamiento", s: "Radiadores, bombas de agua, mangueras y anticongelante.", d: "El sobrecalentamiento puede arruinar un motor rápido. Probamos la presión del sistema y cambiamos radiadores, termostatos, bombas de agua y mangueras.", inc: ["Prueba de presión del sistema", "Cambio de anticongelante", "Revisión de mangueras y termostato"] },
    exhaust: { n: "Escape y mofle", s: "Mofles, convertidores catalíticos y emisiones.", d: "¿Escape ruidoso o no pasaste la verificación? Reparamos fugas y cambiamos mofles, tubos, sensores de oxígeno y catalizadores.", inc: ["Revisión de fugas de escape", "Prueba de sensores de oxígeno", "Revisión para verificación"] },
    inspection: { n: "Revisión antes de comprar", s: "¿Vas a comprar un usado? Conócelo antes de pagar.", d: "Un técnico revisa el auto de arriba a abajo, escanea la computadora y lo prueba en camino. Recibes un reporte completo con fotos y costos de reparación.", inc: ["Inspección de 150 puntos", "Escaneo y prueba de manejo", "Reporte con fotos y costos"] }
  },
  de: {
    oil: { n: "Öl & Wartung", s: "Ölwechsel, Filter und Wartung nach Herstellervorgabe.", d: "Ölwechsel mit Synthetik- oder Mineralöl, neuem Filter, Nachfüllen aller Flüssigkeiten und 27-Punkte-Check. Wir halten uns an den Wartungsplan und dokumentieren jeden Besuch.", inc: ["Bis zu 5 Liter Öl und neuer Filter", "Flüssigkeiten auffüllen, Reifendruck prüfen", "27-Punkte-Sicherheitscheck"] },
    brakes: { n: "Bremsen", s: "Beläge, Scheiben, Sättel und Bremsflüssigkeit.", d: "Wir messen Belag- und Scheibenstärke und zeigen Ihnen die Werte, bevor wir etwas tauschen. Leise Keramikbeläge und Scheiben in Erstausrüsterqualität.", inc: ["Messung von Belägen und Scheiben", "Premium-Keramikbeläge", "Bremsflüssigkeitstest und Probefahrt"] },
    diagnostics: { n: "Motordiagnose", s: "Motorkontrollleuchte an? Wir finden die Ursache.", d: "Wir lesen Fehlercodes aus, prüfen Sensoren und verfolgen den Fehler bis zur Quelle. Dann erklären wir alles verständlich. Die Diagnosegebühr wird auf die Reparatur angerechnet.", inc: ["Kompletter Scan aller Steuergeräte", "Sensor- und Kabeltests", "Schriftlicher Bericht mit Fotos"] },
    tires: { n: "Reifen & Spur", s: "Neue Reifen, Umsetzen, Wuchten und Achsvermessung.", d: "Ungleichmäßiger Verschleiß kostet Geld. Wir setzen um, wuchten und vermessen mit Computer-Achsvermessung und führen alle großen Reifenmarken.", inc: ["Computer-Achsvermessung", "Umsetzen und Wuchten", "RDKS-Sensor-Prüfung"] },
    ac: { n: "Klima & Heizung", s: "Kühle Luft im Sommer, warmer Innenraum im Winter.", d: "Wir prüfen den Systemdruck, finden Lecks mit UV-Kontrastmittel und befüllen mit dem richtigen Kältemittel, auch R-1234yf. Gebläse und Wärmetauscher reparieren wir ebenfalls.", inc: ["Druck- und Dichtheitsprüfung", "Kältemittel befüllen", "Innenraumfilter prüfen"] },
    battery: { n: "Batterie & Elektrik", s: "Batterien, Anlasser, Lichtmaschinen und Kabel.", d: "Ein Auto, das nicht anspringt, braucht oft mehr als eine Batterie. Wir testen Batterie, Anlasser und Lichtmaschine und finden Ruhestromverbraucher.", inc: ["Batterie-Belastungstest", "Test von Anlasser und Lichtmaschine", "Ruhestrommessung"] },
    transmission: { n: "Getriebe", s: "Ölservice, Diagnose und Reparatur.", d: "Rutscht, schaltet hart oder greift verzögert? Wir prüfen Automatik- und Schaltgetriebe und verwenden genau das Öl, das Ihr Auto braucht.", inc: ["Getriebeölwechsel nach Herstellerspezifikation", "Schaltverhalten und Dichtheit prüfen", "Software-Update, falls verfügbar"] },
    suspension: { n: "Fahrwerk & Lenkung", s: "Stoßdämpfer, Federbeine, Traggelenke, Spurstangen.", d: "Ein wippendes Fahrverhalten oder ein Ziehen zur Seite kostet Reifen und Fahrsicherheit. Wir prüfen und ersetzen verschlissene Fahrwerks- und Lenkungsteile.", inc: ["Prüfung von Dämpfern und Federbeinen", "Traggelenke und Spurstangen prüfen", "Achsvermessung nach der Reparatur"] },
    engine: { n: "Motorreparatur", s: "Vom Zahnriemen bis zur kompletten Motorüberholung.", d: "Zahnriemen und Steuerketten, Zylinderkopfdichtungen, Ölverlust und große Motorreparaturen. Sie erhalten vorab einen schriftlichen Kostenvoranschlag und Zeitplan.", inc: ["Zahnriemen- und Steuerkettenservice", "Dichtungen ersetzen", "Schriftlicher Kostenvoranschlag vorab"] },
    cooling: { n: "Kühlsystem", s: "Kühler, Wasserpumpen, Schläuche und Kühlmittel.", d: "Überhitzung kann einen Motor schnell zerstören. Wir prüfen das Kühlsystem unter Druck und ersetzen Kühler, Thermostate, Wasserpumpen und Schläuche.", inc: ["Druckprüfung des Kühlsystems", "Kühlmittel spülen und befüllen", "Schläuche und Thermostat prüfen"] },
    exhaust: { n: "Auspuff", s: "Schalldämpfer, Katalysatoren und Abgaswerte.", d: "Lauter Auspuff oder Abgasuntersuchung nicht bestanden? Wir reparieren Lecks und ersetzen Schalldämpfer, Rohre, Lambdasonden und Katalysatoren.", inc: ["Prüfung auf Auspufflecks", "Lambdasonden-Test", "Vorprüfung für die Abgasuntersuchung"] },
    inspection: { n: "Gebrauchtwagen-Check", s: "Gebrauchtwagen im Blick? Erst prüfen, dann zahlen.", d: "Ein Mechaniker prüft das Auto von oben bis unten, liest den Fehlerspeicher aus und macht eine Probefahrt. Sie erhalten einen Bericht mit Fotos und Reparaturkosten.", inc: ["150-Punkte-Prüfung", "Fehlerspeicher und Probefahrt", "Bericht mit Fotos und Kosten"] }
  },
  fr: {
    oil: { n: "Vidange et entretien", s: "Vidange, filtres et entretien constructeur.", d: "Vidange synthétique ou classique avec filtre neuf, mise à niveau des liquides et inspection en 27 points. Nous suivons le carnet du constructeur et consignons chaque visite.", inc: ["Jusqu'à 5 litres d'huile et filtre neuf", "Niveaux et pression des pneus", "Inspection de sécurité en 27 points"] },
    brakes: { n: "Freins", s: "Plaquettes, disques, étriers et liquide de frein.", d: "Nous mesurons l'épaisseur des plaquettes et des disques et vous montrons les chiffres avant tout remplacement. Plaquettes céramique silencieuses et disques de qualité d'origine.", inc: ["Mesure des plaquettes et disques", "Plaquettes céramique premium", "Test du liquide et essai routier"] },
    diagnostics: { n: "Diagnostic moteur", s: "Voyant moteur allumé ? Nous trouvons la vraie cause.", d: "Nous lisons les codes, testons les capteurs et remontons jusqu'à la source de la panne, puis l'expliquons simplement. Les frais de diagnostic sont déduits de la réparation.", inc: ["Lecture complète de tous les calculateurs", "Tests des capteurs et du câblage", "Rapport écrit avec photos"] },
    tires: { n: "Pneus et parallélisme", s: "Pneus neufs, permutation, équilibrage et géométrie.", d: "Une usure irrégulière vous coûte de l'argent. Nous permutons, équilibrons et réglons la géométrie par ordinateur, avec toutes les grandes marques de pneus.", inc: ["Géométrie 4 roues assistée par ordinateur", "Permutation et équilibrage", "Contrôle des capteurs TPMS"] },
    ac: { n: "Climatisation et chauffage", s: "Air frais l'été, habitacle chaud l'hiver.", d: "Nous testons la pression du circuit, détectons les fuites au traceur UV et rechargeons avec le bon gaz, y compris le R-1234yf. Nous réparons aussi pulseurs et radiateurs de chauffage.", inc: ["Test de pression et d'étanchéité", "Recharge de gaz", "Contrôle du filtre d'habitacle"] },
    battery: { n: "Batterie et électricité", s: "Batteries, démarreurs, alternateurs et câblage.", d: "Une voiture qui ne démarre pas a souvent besoin de plus qu'une batterie. Nous testons batterie, démarreur et alternateur et traquons les consommations parasites.", inc: ["Test de charge de la batterie", "Test du démarreur et de l'alternateur", "Recherche de consommation parasite"] },
    transmission: { n: "Boîte de vitesses", s: "Vidange, diagnostic et réparation.", d: "Patinage, passages durs ou engagement lent ? Nous diagnostiquons les boîtes automatiques et manuelles et utilisons l'huile exacte dont votre voiture a besoin.", inc: ["Vidange avec huile conforme constructeur", "Contrôle des passages et des fuites", "Mise à jour logicielle si disponible"] },
    suspension: { n: "Suspension et direction", s: "Amortisseurs, jambes de force, rotules et biellettes.", d: "Une voiture qui rebondit ou tire d'un côté use les pneus et tient moins bien la route. Nous contrôlons et remplaçons les pièces usées.", inc: ["Contrôle des amortisseurs", "Contrôle des rotules et biellettes", "Géométrie après réparation"] },
    engine: { n: "Réparation moteur", s: "De la courroie de distribution au moteur complet.", d: "Courroies et chaînes de distribution, joints de culasse, fuites d'huile et grosses réparations. Vous recevez un devis écrit et un délai avant le début des travaux.", inc: ["Courroie et chaîne de distribution", "Remplacement des joints", "Devis écrit avant travaux"] },
    cooling: { n: "Refroidissement", s: "Radiateurs, pompes à eau, durites et liquide.", d: "Une surchauffe peut détruire un moteur rapidement. Nous testons le circuit sous pression et remplaçons radiateurs, thermostats, pompes à eau et durites.", inc: ["Test de pression du circuit", "Vidange et remplissage du liquide", "Contrôle des durites et du thermostat"] },
    exhaust: { n: "Échappement", s: "Silencieux, catalyseurs et émissions.", d: "Échappement bruyant ou contrôle antipollution raté ? Nous réparons les fuites et remplaçons silencieux, tubes, sondes lambda et catalyseurs.", inc: ["Recherche de fuites d'échappement", "Test des sondes lambda", "Pré-contrôle antipollution"] },
    inspection: { n: "Inspection avant achat", s: "Une occasion en vue ? Sachez tout avant de payer.", d: "Un technicien inspecte la voiture de fond en comble, lit les calculateurs et fait un essai routier. Vous recevez un rapport complet avec photos et coûts de réparation.", inc: ["Inspection en 150 points", "Lecture électronique et essai routier", "Rapport avec photos et coûts"] }
  },
  pt: {
    oil: { n: "Óleo e manutenção", s: "Troca de óleo, filtros e revisão de fábrica.", d: "Troca de óleo sintético ou mineral com filtro novo, complemento de fluidos e inspeção de 27 pontos. Seguimos o plano do fabricante e registramos cada visita.", inc: ["Até 5 litros de óleo e filtro novo", "Complemento de fluidos e calibragem", "Inspeção de segurança de 27 pontos"] },
    brakes: { n: "Freios", s: "Pastilhas, discos, pinças e fluido de freio.", d: "Medimos a espessura das pastilhas e discos e mostramos os números antes de trocar qualquer coisa. Pastilhas cerâmicas silenciosas e discos com padrão original ou melhor.", inc: ["Medição de pastilhas e discos", "Pastilhas cerâmicas premium", "Teste do fluido e teste de rodagem"] },
    diagnostics: { n: "Diagnóstico do motor", s: "Luz da injeção acesa? Achamos a causa real.", d: "Lemos os códigos, testamos os sensores e rastreamos a falha até a origem, e explicamos de forma simples. O valor do diagnóstico é abatido do reparo.", inc: ["Escaneamento completo de todos os módulos", "Testes de sensores e chicotes", "Relatório por escrito com fotos"] },
    tires: { n: "Pneus e alinhamento", s: "Pneus novos, rodízio, balanceamento e alinhamento.", d: "Desgaste irregular custa dinheiro. Fazemos rodízio, balanceamento e alinhamento computadorizado, e trabalhamos com as principais marcas de pneus.", inc: ["Alinhamento computadorizado 4 rodas", "Rodízio e balanceamento", "Verificação dos sensores TPMS"] },
    ac: { n: "Ar-condicionado e aquecimento", s: "Ar gelado no verão, cabine quente no inverno.", d: "Testamos a pressão do sistema, achamos vazamentos com corante UV e recarregamos com o gás correto, incluindo R-1234yf. Também reparamos ventiladores e aquecedores.", inc: ["Teste de pressão e vazamento", "Recarga de gás", "Verificação do filtro de cabine"] },
    battery: { n: "Bateria e elétrica", s: "Baterias, motores de partida, alternadores e fiação.", d: "Um carro que não pega muitas vezes precisa de mais que uma bateria. Testamos bateria, motor de partida e alternador e localizamos fugas de corrente.", inc: ["Teste de carga da bateria", "Teste de partida e alternador", "Verificação de fuga de corrente"] },
    transmission: { n: "Câmbio", s: "Troca de fluido, diagnóstico e reparo.", d: "Patinando, trocas duras ou demora para engatar? Diagnosticamos câmbios automáticos e manuais e usamos exatamente o fluido que o seu carro precisa.", inc: ["Troca de fluido com especificação original", "Inspeção de trocas e vazamentos", "Atualização de software quando houver"] },
    suspension: { n: "Suspensão e direção", s: "Amortecedores, pivôs e terminais de direção.", d: "Carro quicando ou puxando para um lado gasta pneus e piora a dirigibilidade. Inspecionamos e trocamos peças gastas de suspensão e direção.", inc: ["Inspeção de amortecedores", "Verificação de pivôs e terminais", "Alinhamento após o reparo"] },
    engine: { n: "Reparo de motor", s: "Da correia dentada ao motor completo.", d: "Correias e correntes de comando, juntas de cabeçote, vazamentos de óleo e reparos maiores. Você recebe orçamento por escrito e prazo antes de começarmos.", inc: ["Correia e corrente de comando", "Troca de juntas e retentores", "Orçamento por escrito antes do serviço"] },
    cooling: { n: "Arrefecimento", s: "Radiadores, bombas d'água, mangueiras e aditivo.", d: "O superaquecimento pode destruir um motor rapidamente. Testamos o sistema sob pressão e trocamos radiadores, válvulas termostáticas, bombas d'água e mangueiras.", inc: ["Teste de pressão do sistema", "Troca do líquido de arrefecimento", "Verificação de mangueiras e termostato"] },
    exhaust: { n: "Escapamento", s: "Silenciosos, catalisadores e emissões.", d: "Escapamento barulhento ou reprovado na inspeção de emissões? Reparamos vazamentos e trocamos silenciosos, tubos, sondas lambda e catalisadores.", inc: ["Inspeção de vazamentos", "Teste da sonda lambda", "Pré-inspeção de emissões"] },
    inspection: { n: "Vistoria antes da compra", s: "Vai comprar um usado? Saiba tudo antes de pagar.", d: "Um técnico inspeciona o carro de ponta a ponta, escaneia a central e faz um teste de rodagem. Você recebe um relatório completo com fotos e custos de reparo.", inc: ["Inspeção de 150 pontos", "Escaneamento e teste de rodagem", "Relatório com fotos e custos"] }
  }
};
