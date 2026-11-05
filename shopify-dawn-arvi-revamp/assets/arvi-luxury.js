/**
 * ARVI SA - Swiss Luxury Shopify Client Experience Engine
 * Handles 360° bottle inspection, label zoom magnifier, sticky luxury bar,
 * sommelier modal, live currency/tax switcher, and real-time multilingual translator.
 */

class ArviLuxuryExperience {
  constructor() {
    this.initBottleViewer();
    this.initLabelMagnifier();
    this.initStickyCartBar();
    this.initSommelierModal();
    this.initTaxCurrencyToggle();
    this.initVintageSelector();
    this.initLanguageTranslator();
  }

  // 1. Interactive 360° Bottle Inspector / 3D Tilt
  initBottleViewer() {
    const viewport = document.querySelector('.arvi-bottle-viewport');
    const bottleImg = document.querySelector('.arvi-bottle-viewport img');
    const btn360 = document.querySelector('[data-arvi-action="toggle-360"]');

    if (!viewport || !bottleImg) return;

    let isDragging = false;
    let startX = 0;
    let currentRotation = 0;
    let mode360 = false;

    if (btn360) {
      btn360.addEventListener('click', () => {
        mode360 = !mode360;
        btn360.classList.toggle('active', mode360);
        if (mode360) {
          viewport.style.cursor = 'ew-resize';
        } else {
          viewport.style.cursor = 'grab';
          bottleImg.style.transform = 'none';
        }
      });
    }

    const startDrag = (clientX) => {
      isDragging = true;
      startX = clientX;
    };

    const drag = (clientX) => {
      if (!isDragging) return;
      const deltaX = clientX - startX;
      currentRotation += deltaX * 0.4;
      startX = clientX;

      // Realistic 3D rotational tilt and label sheen shift
      bottleImg.style.transform = `rotateY(${currentRotation}deg) scale(1.02)`;
    };

    const stopDrag = () => {
      isDragging = false;
    };

    // Mouse events
    viewport.addEventListener('mousedown', (e) => startDrag(e.clientX));
    window.addEventListener('mousemove', (e) => drag(e.clientX));
    window.addEventListener('mouseup', stopDrag);

    // Touch events for mobile
    viewport.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) startDrag(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (e.touches.length === 1) drag(e.touches[0].clientX);
    }, { passive: true });

    window.addEventListener('touchend', stopDrag);
  }

  // 2. High-Precision Label Magnifier Lens
  initLabelMagnifier() {
    const viewport = document.querySelector('.arvi-bottle-viewport');
    const bottleImg = document.querySelector('.arvi-bottle-viewport img');
    const lens = document.querySelector('.arvi-magnifier-lens');
    const btnZoom = document.querySelector('[data-arvi-action="toggle-zoom"]');

    if (!viewport || !bottleImg || !lens) return;

    let zoomActive = false;

    if (btnZoom) {
      btnZoom.addEventListener('click', () => {
        zoomActive = !zoomActive;
        btnZoom.classList.toggle('active', zoomActive);
        if (!zoomActive) lens.style.display = 'none';
      });
    }

    viewport.addEventListener('mousemove', (e) => {
      if (!zoomActive) return;

      const rect = viewport.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (x < 0 || x > rect.width || y < 0 || y > rect.height) {
        lens.style.display = 'none';
        return;
      }

      lens.style.display = 'block';
      lens.style.left = `${x - lens.offsetWidth / 2}px`;
      lens.style.top = `${y - lens.offsetHeight / 2}px`;

      // Set high-res background zoom image
      lens.style.backgroundImage = `url('${bottleImg.src}')`;
      lens.style.backgroundSize = `${bottleImg.offsetWidth * 2.8}px ${bottleImg.offsetHeight * 2.8}px`;

      const bgX = (x / rect.width) * 100;
      const bgY = (y / rect.height) * 100;
      lens.style.backgroundPosition = `${bgX}% ${bgY}%`;
    });

    viewport.addEventListener('mouseleave', () => {
      if (lens) lens.style.display = 'none';
    });
  }

  // 3. Sticky Luxury Add to Cart Bar
  initStickyCartBar() {
    const stickyBar = document.querySelector('.arvi-sticky-cart-bar');
    const trigger = document.querySelector('.arvi-product-price-box');

    if (!stickyBar || !trigger) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
          stickyBar.classList.add('visible');
        } else {
          stickyBar.classList.remove('visible');
        }
      });
    }, { threshold: 0 });

    observer.observe(trigger);
  }

  // 4. Sommelier Advisory Modal
  initSommelierModal() {
    const triggers = document.querySelectorAll('[data-arvi-modal="sommelier"]');
    const modal = document.getElementById('arviSommelierModal');
    const closeBtn = document.querySelector('.arvi-modal-close');

    if (!modal) return;

    triggers.forEach((trigger) => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    const closeModal = () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    };

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // 5. Swiss Tax / Currency Selector
  initTaxCurrencyToggle() {
    const taxSelects = document.querySelectorAll('#arviGlobalTaxSelect, #arviTaxTypeSelect');
    const priceElements = document.querySelectorAll('[data-arvi-price], .arvi-card-price, .arvi-main-price, .arvi-sticky-price');

    if (!taxSelects.length) return;

    const updatePrices = (val) => {
      // Rates relative to CHF base
      // Swiss VAT = 8.1%
      // EUR conversion ~ 1.05
      // USD conversion ~ 1.15
      priceElements.forEach((el) => {
        let base = parseFloat(el.getAttribute('data-base-price'));
        if (!base) {
          // extract from text
          const txt = el.textContent.replace(/[^0-9.]/g, '');
          base = parseFloat(txt) || 0;
          if (base > 0) el.setAttribute('data-base-price', base);
        }

        if (base > 0) {
          let currencySymbol = 'CHF';
          let finalPrice = base;

          if (val === 'chf_excl' || val === 'excl') {
            currencySymbol = 'CHF';
            finalPrice = (base / 1.081);
          } else if (val === 'eur_incl') {
            currencySymbol = 'EUR';
            finalPrice = (base * 1.05);
          } else if (val === 'eur_excl') {
            currencySymbol = 'EUR';
            finalPrice = ((base / 1.081) * 1.05);
          } else if (val === 'usd') {
            currencySymbol = 'USD';
            finalPrice = (base * 1.15);
          } else {
            currencySymbol = 'CHF';
            finalPrice = base;
          }

          el.textContent = `${currencySymbol} ${Number(finalPrice.toFixed(2)).toLocaleString('de-CH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        }
      });

      const taxNotes = document.querySelectorAll('.arvi-tax-note, .arvi-card-tax');
      taxNotes.forEach((note) => {
        if (val.includes('excl') || val === 'usd') {
          note.textContent = 'Bonded Tax-Free / Excl. VAT';
        } else {
          note.textContent = 'Incl. 8.1% VAT';
        }
      });

      // Synchronize both dropdowns
      taxSelects.forEach(sel => {
        if (sel.querySelector(`option[value="${val}"]`)) {
          sel.value = val;
        }
      });

      try { localStorage.setItem('arvi_tax_pref', val); } catch (e) {}
    };

    taxSelects.forEach(sel => {
      sel.addEventListener('change', (e) => updatePrices(e.target.value));
    });

    // Restore preference
    try {
      const savedTax = localStorage.getItem('arvi_tax_pref');
      if (savedTax) updatePrices(savedTax);
    } catch (e) {}
  }

  // 6. Interactive Vintage Selector
  initVintageSelector() {
    const vintageBtns = document.querySelectorAll('.arvi-vintage-btn');
    vintageBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        vintageBtns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');

        const vintage = btn.getAttribute('data-vintage');
        const price = btn.getAttribute('data-price');
        const score = btn.getAttribute('data-score');

        // Update UI
        const mainPrice = document.querySelector('.arvi-main-price');
        const stickyPrice = document.querySelector('.arvi-sticky-price');
        const vintageHighlight = document.querySelector('.vintage-highlight');
        const mainScore = document.querySelector('.arvi-critic-points');

        if (mainPrice && price) {
          mainPrice.textContent = price;
          const cleanNum = parseFloat(price.replace(/[^0-9.]/g, ''));
          if (cleanNum) mainPrice.setAttribute('data-base-price', cleanNum);
        }
        if (stickyPrice && price) stickyPrice.textContent = price;
        if (vintageHighlight && vintage) vintageHighlight.textContent = vintage;
        if (mainScore && score) mainScore.textContent = score;
      });
    });
  }

  // 7. Real-Time Multilingual Client-Side Translator Engine
  initLanguageTranslator() {
    const langSelects = document.querySelectorAll('#arviLanguageSelect, select[data-arvi-lang]');
    if (!langSelects.length) return;

    // Translation Dictionary supporting EN, IT, DE, FR, ES, ZH
    const i18n = {
      en: {
        topbar_dispatch: "🇨🇭 Swiss Cellar Melano • Worldwide White-Glove Insured Delivery",
        topbar_signin: "VIP Cellar Sign In",
        nav_home: "Home",
        nav_wines: "Fine Wines",
        nav_enprimeur: "Bordeaux En Primeur",
        nav_allocation: "Featured Allocation",
        nav_boutiques: "Arvino Boutiques",
        nav_vault: "The Wine Vault",
        hero_kicker: "Established 1991 • Melano, Switzerland",
        hero_title: "Switzerland’s Premier Merchant for <em>Fine & Rare Wines</em>",
        hero_subtitle: "Direct châteaux allocations, climate-controlled subterranean vaults, and bespoke sommelier advisory. Over 10,000 legendary labels ready for immediate worldwide delivery.",
        hero_btn_explore: "Explore Rare Allocations",
        hero_btn_boutiques: "Discover Arvino Boutiques",
        trust_p1_title: "100% Provenance Guaranteed",
        trust_p1_desc: "Direct châteaux allocations, verified bottles, and pristine single-owner cellar history.",
        trust_p2_title: "Subterranean Climate Vault",
        trust_p2_desc: "Constant 12°C & 70% humidity in our purpose-built Melano cellar with 10,000+ labels.",
        trust_p3_title: "Swiss Tax-Free & 24h Transit",
        trust_p3_desc: "Bonded warehouse storage & temperature-controlled insured express shipping.",
        trust_p4_title: "Private Sommelier Advisory",
        trust_p4_desc: "Tailored portfolio curation and private tastings at our Zurich, Lugano & Melano shops.",
        collections_kicker: "Curated Allocations",
        collections_title: "Iconic Fine Wine Collections",
        collections_desc: "Explore legendary classifications and rare vintages sourced directly from the world’s most esteemed estates.",
        btn_inspect: "Inspect Bottle",
        btn_inspect_360: "Inspect Bottle (360° View)",
        story_kicker: "Heritage & Craftsmanship",
        story_title: "From Switzerland’s Deepest Vaults to <em>Your Private Cellar</em>",
        story_desc1: "Headquartered in Melano on the shores of Lake Lugano since 1991, ARVI SA represents the pinnacle of fine and rare wine merchantry. We bypass secondary middlemen to source directly from premier Châteaux and Domaines across Bordeaux, Burgundy, Champagne, and Tuscany.",
        story_desc2: "Every single bottle rests within our subterranean cellars under strictly regulated micro-climates (12°C constant temperature, 70% humidity) until dispatch. Whether you are building an investment-grade portfolio or securing an iconic vintage, our Swiss integrity guarantees authentic perfection.",
        boutiques_kicker: "Exclusive Destinations",
        boutiques_title: "The Arvino Luxury Wine Boutiques",
        boutiques_desc: "Step into an atmosphere of quiet opulence, where rare vintages meet personalized sommelier guidance. Experience ARVI in Switzerland’s most prestigious locations.",
        btn_visit_melano: "Visit Arvino Melano",
        btn_visit_lugano: "Visit Arvino Lugano",
        btn_visit_zurich: "Visit Arvino Zurich",
        btn_book_tasting: "Book Private Tasting",
        vat_label: "Incl. 8.1% VAT",
        secure_bottle: "Secure Allocation"
      },
      it: {
        topbar_dispatch: "🇨🇭 Cantina Svizzera Melano • Spedizione Assicurata White-Glove in Tutto il Mondo",
        topbar_signin: "Accedi al Caveau VIP",
        nav_home: "Home",
        nav_wines: "Vini Pregiati",
        nav_enprimeur: "Bordeaux En Primeur",
        nav_allocation: "Allocazione Speciale",
        nav_boutiques: "Boutique Arvino",
        nav_vault: "Cassaforte del Vino",
        hero_kicker: "Fondata nel 1991 • Melano, Svizzera",
        hero_title: "Il Punto di Riferimento in Svizzera per i <em>Vini Pregiati e Rari</em>",
        hero_subtitle: "Assegnazioni dirette dai castelli, cantine sotterranee a temperatura controllata e consulenza sommelier su misura. Oltre 10.000 etichette leggendarie pronte per la spedizione in tutto il mondo.",
        hero_btn_explore: "Esplora le Allocazioni Rare",
        hero_btn_boutiques: "Scopri le Boutique Arvino",
        trust_p1_title: "Provenienza Garantita al 100%",
        trust_p1_desc: "Assegnazioni dirette dai châteaux, bottiglie verificate e conservazione impeccabile da proprietario unico.",
        trust_p2_title: "Caveau Sotterraneo Climatizzato",
        trust_p2_desc: "12°C e 70% di umidità costanti nella nostra cantina di Melano con oltre 10.000 etichette.",
        trust_p3_title: "Tax-Free Svizzero & Spedizione 24h",
        trust_p3_desc: "Stoccaggio in magazzino doganale e spedizione express isotermica assicurata.",
        trust_p4_title: "Consulenza Sommelier Privata",
        trust_p4_desc: "Creazione di portafogli su misura e degustazioni private a Zurigo, Lugano e Melano.",
        collections_kicker: "Allocazioni Selezionate",
        collections_title: "Collezioni Iconiche di Vini Pregiati",
        collections_desc: "Esplora classificazioni leggendarie e annate rare provenienti direttamente dalle tenute più prestigiose del mondo.",
        btn_inspect: "Esamina Bottiglia",
        btn_inspect_360: "Esamina Bottiglia (Vista 360°)",
        story_kicker: "Tradizione e Maestria",
        story_title: "Dai Caveau Più Profondi della Svizzera alla <em>Tua Cantina Privata</em>",
        story_desc1: "Con sede a Melano, sulle rive del Lago di Lugano dal 1991, ARVI SA rappresenta l'apice del commercio di vini rari e da collezione, acquistando direttamente dai più grandi Châteaux e Domaines.",
        story_desc2: "Ogni singola bottiglia riposa nelle nostre cantine sotterranee a clima rigidamente controllato (12°C costanti, 70% umidità) fino alla spedizione, garantendo autenticità e perfezione assoluta.",
        boutiques_kicker: "Destinazioni Esclusive",
        boutiques_title: "Le Boutique del Vino di Lusso Arvino",
        boutiques_desc: "Entra in un'atmosfera di raffinata accoglienza, dove annate leggendarie incontrano la consulenza dei nostri sommelier a Melano, Lugano e Zurigo.",
        btn_visit_melano: "Visita Arvino Melano",
        btn_visit_lugano: "Visita Arvino Lugano",
        btn_visit_zurich: "Visita Arvino Zurigo",
        btn_book_tasting: "Prenota Degustazione Privata",
        vat_label: "IVA 8.1% Inclusa",
        secure_bottle: "Riserva Allocazione"
      },
      de: {
        topbar_dispatch: "🇨🇭 Schweizer Weinkeller Melano • Weltweiter versicherter Expressversand",
        topbar_signin: "VIP-Keller Login",
        nav_home: "Startseite",
        nav_wines: "Edle Weine",
        nav_enprimeur: "Bordeaux En Primeur",
        nav_allocation: "Besondere Zuteilung",
        nav_boutiques: "Arvino Boutiquen",
        nav_vault: "Der Weintresor",
        hero_kicker: "Gegründet 1991 • Melano, Schweiz",
        hero_title: "Schweizens führender Händler für <em>edle & seltene Weine</em>",
        hero_subtitle: "Direkte Châteaux-Zuteilungen, klimatisierte unterirdische Keller und maßgeschneiderte Sommelier-Beratung. Über 10.000 legendäre Etiketten sofort lieferbar.",
        hero_btn_explore: "Seltene Weine entdecken",
        hero_btn_boutiques: "Arvino Boutiquen entdecken",
        trust_p1_title: "100% Herkunft garantiert",
        trust_p1_desc: "Direkte Châteaux-Zuteilungen, zertifizierte Flaschen und lückenlose Einzeleigentümer-Herkunft.",
        trust_p2_title: "Unterirdischer Klimatresor",
        trust_p2_desc: "Konstant 12°C & 70% Luftfeuchtigkeit in unserem Melano-Zentrallager mit über 10.000 Etiketten.",
        trust_p3_title: "Schweizer Steuerfrei & 24h-Versand",
        trust_p3_desc: "Zolllagerung & temperaturgeführter, versicherter Expressversand.",
        trust_p4_title: "Private Sommelier-Beratung",
        trust_p4_desc: "Maßgeschneiderte Portfolio-Kuratierung und private Verkostungen in Zürich, Lugano & Melano.",
        collections_kicker: "Kuratierte Zuteilungen",
        collections_title: "Ikonische Weinkollektionen",
        collections_desc: "Entdecken Sie legendäre Klassifizierungen und seltene Jahrgänge direkt von den angesehensten Gütern der Welt.",
        btn_inspect: "Flasche prüfen",
        btn_inspect_360: "Flasche prüfen (360°-Ansicht)",
        story_kicker: "Tradition & Handwerk",
        story_title: "Aus den tiefsten Schweizer Tresoren in <em>Ihren privaten Keller</em>",
        story_desc1: "Mit Hauptsitz in Melano am Luganersee seit 1991 verkörpert ARVI SA den Gipfel des Handels mit feinen und seltenen Weinen. Wir beziehen direkt von den führenden Châteaux und Domaines.",
        story_desc2: "Jede einzelne Flasche ruht in unseren unterirdischen Kellern unter streng regulierten Mikroklimata (12°C, 70% Feuchtigkeit) bis zum weltweiten Versand.",
        boutiques_kicker: "Exklusive Standorte",
        boutiques_title: "Die Arvino Luxus-Weinboutiquen",
        boutiques_desc: "Erleben Sie eine Atmosphäre ruhiger Eleganz mit persönlicher Sommelier-Begleitung in Zürich, Lugano und Melano.",
        btn_visit_melano: "Arvino Melano besuchen",
        btn_visit_lugano: "Arvino Lugano besuchen",
        btn_visit_zurich: "Arvino Zürich besuchen",
        btn_book_tasting: "Private Degustation buchen",
        vat_label: "Inkl. 8.1% MwSt.",
        secure_bottle: "Zuteilung sichern"
      },
      fr: {
        topbar_dispatch: "🇨🇭 Cave Suisse Melano • Livraison Assurée Gants Blancs dans le Monde Entier",
        topbar_signin: "Connexion Cave VIP",
        nav_home: "Accueil",
        nav_wines: "Grands Vins",
        nav_enprimeur: "Bordeaux En Primeur",
        nav_allocation: "Allocation Exclusive",
        nav_boutiques: "Boutiques Arvino",
        nav_vault: "Le Coffre-Fort à Vin",
        hero_kicker: "Fondée en 1991 • Melano, Suisse",
        hero_title: "Le Premier Négociant de Suisse pour les <em>Grands Crus & Vins Rares</em>",
        hero_subtitle: "Allocations directes des châteaux, caves souterraines thermo-régulées et conseils personnalisés de sommeliers. Plus de 10 000 étiquettes de légende prêtes pour une expédition mondiale.",
        hero_btn_explore: "Découvrir les Allocations Rares",
        hero_btn_boutiques: "Découvrir les Boutiques Arvino",
        trust_p1_title: "Traçabilité 100% Garantie",
        trust_p1_desc: "Allocations directes de châteaux, flacons authentifiés et historique de garde irréprochable.",
        trust_p2_title: "Caveau Souterrain Régulé",
        trust_p2_desc: "12°C et 70% d'humidité constants dans notre cave de Melano abritant plus de 10 000 étiquettes.",
        trust_p3_title: "Hors-Taxe Suisse & Transit 24h",
        trust_p3_desc: "Stockage en entrepôt sous douane et expédition isotherme express assurée.",
        trust_p4_title: "Conseil Privé de Sommelier",
        trust_p4_desc: "Création de caves privées sur mesure et dégustations exclusives à Zurich, Lugano et Melano.",
        collections_kicker: "Allocations d'Exception",
        collections_title: "Collections Iconiques de Grands Crus",
        collections_desc: "Explorez des classifications légendaires et des millésimes rares issus directement des domaines les plus prestigieux.",
        btn_inspect: "Inspecter le Flacon",
        btn_inspect_360: "Inspecter le Flacon (Vue 360°)",
        story_kicker: "Héritage & Savoir-Faire",
        story_title: "Des Plus Profondes Caves Suisses à <em>Votre Cave Privée</em>",
        story_desc1: "Basé à Melano au bord du lac de Lugano depuis 1991, ARVI SA représente le sommet du négoce de vins rares, s'approvisionnant directement auprès des plus grands Châteaux et Domaines.",
        story_desc2: "Chaque bouteille repose dans nos caves souterraines sous microclimat thermo-régulé (12°C, 70% d'humidité) jusqu'à sa livraison sécurisée.",
        boutiques_kicker: "Destinations Exclusives",
        boutiques_title: "Les Boutiques de Vins de Luxe Arvino",
        boutiques_desc: "Pénétrez dans un univers d'opulence feutrée avec dégustations privées et conseils personnalisés à Zurich, Lugano et Melano.",
        btn_visit_melano: "Visiter Arvino Melano",
        btn_visit_lugano: "Visiter Arvino Lugano",
        btn_visit_zurich: "Visiter Arvino Zurich",
        btn_book_tasting: "Réserver une Dégustation",
        vat_label: "TVA 8.1% Incluse",
        secure_bottle: "Réserver l'Allocation"
      },
      es: {
        topbar_dispatch: "🇨🇭 Bodega Suiza Melano • Envío Asegurado Guante Blanco a Todo el Mundo",
        topbar_signin: "Acceso Bodega VIP",
        nav_home: "Inicio",
        nav_wines: "Vinos Exclusivos",
        nav_enprimeur: "En Primeur Burdeos",
        nav_allocation: "Asignación Destacada",
        nav_boutiques: "Boutiques Arvino",
        nav_vault: "La Bóveda de Vino",
        hero_kicker: "Fundada en 1991 • Melano, Suiza",
        hero_title: "El Principal Comerciante Suizo de <em>Vinos Exclusivos y Raros</em>",
        hero_subtitle: "Asignaciones directas de bodegas, almacenes subterráneos climatizados y asesoramiento de sommeliers personalizados. Más de 10.000 etiquetas de leyenda listas para entrega mundial.",
        hero_btn_explore: "Explorar Asignaciones Raras",
        hero_btn_boutiques: "Descubrir Boutiques Arvino",
        trust_p1_title: "100% Procedencia Garantizada",
        trust_p1_desc: "Asignaciones directas de bodegas, botellas verificadas e historial de conservación impecable.",
        trust_p2_title: "Bóveda Subterránea Climatizada",
        trust_p2_desc: "12°C y 70% de humedad constantes en nuestra bodega de Melano con más de 10.000 etiquetas.",
        trust_p3_title: "Exento de Impuestos & Envío 24h",
        trust_p3_desc: "Almacenamiento en depósito aduanero y transporte isotérmico asegurado.",
        trust_p4_title: "Asesoría de Sommelier Privada",
        trust_p4_desc: "Creación de bodegas privadas a medida y catas exclusivas en Zúrich, Lugano y Melano.",
        collections_kicker: "Asignaciones Seleccionadas",
        collections_title: "Colecciones Icónicas de Vinos",
        collections_desc: "Descubra clasificaciones legendarias y añadas raras directamente de las bodegas más prestigiosas.",
        btn_inspect: "Examinar Botella",
        btn_inspect_360: "Examinar Botella (Vista 360°)",
        story_kicker: "Tradición y Maestría",
        story_title: "De las Bóvedas Más Profundas de Suiza a <em>Su Bodega Privada</em>",
        story_desc1: "Con sede en Melano desde 1991, ARVI SA lidera la comercialización de vinos finos y de colección, abasteciéndose directamente de los productores más distinguidos.",
        story_desc2: "Cada botella reposa en bodegas subterráneas con microclima controlado (12°C constantes, 70% humedad) hasta su entrega en cualquier parte del mundo.",
        boutiques_kicker: "Destinos Exclusivos",
        boutiques_title: "Las Boutiques de Vino de Lujo Arvino",
        boutiques_desc: "Disfrute de un ambiente de máxima distinción con asesoramiento personalizado de sommeliers en Zúrich, Lugano y Melano.",
        btn_visit_melano: "Visitar Arvino Melano",
        btn_visit_lugano: "Visitar Arvino Lugano",
        btn_visit_zurich: "Visitar Arvino Zúrich",
        btn_book_tasting: "Reservar Cata Privada",
        vat_label: "IVA 8.1% Incluido",
        secure_bottle: "Asegurar Asignación"
      },
      zh: {
        topbar_dispatch: "🇨🇭 瑞士梅拉诺酒窖 • 全球尊享全保白手套温控配送",
        topbar_signin: "贵宾酒窖登录",
        nav_home: "首页",
        nav_wines: "顶级佳酿",
        nav_enprimeur: "波尔多期酒",
        nav_allocation: "精选配额",
        nav_boutiques: "Arvino 奢华精品店",
        nav_vault: "瑞士地下酒窖",
        hero_kicker: "创立于 1991 年 • 瑞士梅拉诺",
        hero_title: "瑞士首屈一指的 <em>顶级珍稀名庄佳酿</em> 商",
        hero_subtitle: "酒庄直采独家配额，恒温恒湿地下酒窖，私人侍酒师专属顾问。现存超 10,000 款传世名庄现货，即刻全球直达。",
        hero_btn_explore: "探索珍稀配额",
        hero_btn_boutiques: "探索线下精品店",
        trust_p1_title: "100% 原产地正品保证",
        trust_p1_desc: "名庄原厂独家直配，每一瓶均经过严苛多重查验与独家单主酒窖溯源。",
        trust_p2_title: "瑞士恒温恒湿地下酒窖",
        trust_p2_desc: "位于瑞士梅拉诺，常年恒定 12°C 与 70% 湿度，静藏 10,000 余款名庄传奇。",
        trust_p3_title: "瑞士保税免税 & 24h配送",
        trust_p3_desc: "提供瑞士自贸区保税恒温免税仓储，专业温控冷链全险加急快运。",
        trust_p4_title: "资深侍酒师一对一专属顾问",
        trust_p4_desc: "苏黎世、卢加诺及梅拉诺会客廊定制名酒资产配置与私享品鉴会。",
        collections_kicker: "甄选配额",
        collections_title: "传奇名庄馆藏系列",
        collections_desc: "尊享源自全球至高声誉酒庄的世纪年份与列级名庄传奇。",
        btn_inspect: "鉴赏酒瓶",
        btn_inspect_360: "360°全景鉴赏",
        story_kicker: "传世底蕴与匠心守候",
        story_title: "从瑞士地底传奇酒窖 到 <em>您的私人酒阁</em>",
        story_desc1: "自 1991 年起立足于卢加诺湖畔的梅拉诺，ARVI SA 代表着罕见珍稀名酒领域的巅峰水准，直接对接波尔多、勃艮第、香槟及托斯卡纳的传奇酒庄。",
        story_desc2: "每一瓶传世佳酿均在严格微气候调控（12°C 恒温，70% 湿度）的地下宝库静候陈年，直至送达全球藏家手中。",
        boutiques_kicker: "专属体验空间",
        boutiques_title: "Arvino 瑞士尊享酒廊精品店",
        boutiques_desc: "在低调雅致的空间中，品味百年陈酿与资深侍酒师的尊荣咨询，静候光临苏黎世、卢加诺与梅拉诺。",
        btn_visit_melano: "探访梅拉诺总店",
        btn_visit_lugano: "探访卢加诺精品店",
        btn_visit_zurich: "探访苏黎世精品店",
        btn_book_tasting: "预约私人品鉴",
        vat_label: "含 8.1% 瑞士税",
        secure_bottle: "立即锁定配额"
      }
    };

    const applyTranslation = (lang) => {
      const dict = i18n[lang] || i18n['en'];

      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
          el.innerHTML = dict[key];
        }
      });

      // Synchronize all language selects
      langSelects.forEach(sel => {
        sel.value = lang;
      });

      try { localStorage.setItem('arvi_selected_lang', lang); } catch (e) {}
    };

    langSelects.forEach(sel => {
      sel.addEventListener('change', (e) => {
        applyTranslation(e.target.value);
      });
    });

    // Check saved language
    try {
      const savedLang = localStorage.getItem('arvi_selected_lang');
      if (savedLang && i18n[savedLang]) {
        applyTranslation(savedLang);
      }
    } catch (e) {}
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.arviExperience = new ArviLuxuryExperience();
});
