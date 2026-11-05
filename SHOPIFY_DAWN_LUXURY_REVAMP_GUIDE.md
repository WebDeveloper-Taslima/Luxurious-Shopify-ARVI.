# ARVI SA | Swiss Fine & Rare Wines
## Shopify Dawn Luxury Revamp Architecture & Implementation Guide

---

## 1. Executive Summary & Site Audit

### A. The Challenge & Physical Boutique Disconnect
ARVI operates three of Switzerland’s most prestigious luxury wine destinations:
1. **Arvino Melano**: Headquarters & Central Subterranean Cellar (Via Pedemonte di Sopra 1, 6818 Melano), housing over 10,000 fine and rare bottles under strict 12°C/70% humidity controls.
2. **Arvino Lugano**: Lakeside luxury tasting salon (Via Emilio Bossi 1, 6900 Lugano) featuring artisan glassware and open tastings.
3. **Arvino Zurich**: High-end financial district boutique (Sankt Annagasse 9, 8001 Zurich) hosting private standing tastings for 40 guests and bespoke seated dinners for 18 at a handcrafted master table.

**The Client Problem:**
Customers who visit these opulent physical shops visit the website and describe it as **"basic"**, stating it does not reflect the world-class prestige of CHF 2,000+ bottles (such as Château Pétrus, DRC Romanée-Conti, Masseto, and Château Latour).

### B. Audit of Current Websites

| Site | Platform / Status | Diagnosis & Shortcomings |
| :--- | :--- | :--- |
| **arvi.ch / arvi.ch/shops** | Legacy nopCommerce (.NET) | Deep inventory and rich physical boutique content, but legacy table layouts, heavy scripts, and dated UX. |
| **myarvi.myshopify.com** (pwd: `6818`) | Stock Shopify Dawn 16.0.0 | **Unfinished template look:**<br>• Default placeholder text (*"Colonna Associa un testo a un'immagine..."*)<br>• Plain white boxes with floating bottle images lacking drama and lighting<br>• No Swiss vault storytelling or heritage presence<br>• Lack of wine critic ratings (Robert Parker, James Suckling, Antonio Galloni)<br>• Missing vintage matrix, format selectors (750ml, Magnum, OWC 6-pack)<br>• No 360° inspection or high-resolution label zoom for rare bottle collectors |

---

## 2. Redesign Strategy: The "Swiss Vault" Luxury Aesthetic

### Brand Identity & Color Palette
* **Deep Swiss Obsidian (`#0A0A0B` / `#121214`)**: Creates dramatic contrast, reminiscent of underground subterranean cellars and luxury retail interiors.
* **Champagne Gold (`#C5A880` / `#DFC39D` / `#998A65`)**: Used for foil accents, typography kickers, and verified provenance seals.
* **Imperial Wine Bordeaux (`#5C1A1B` / `#3B0E10`)**: Highlights critic scores (100 RP), selected vintages, and allocation buttons.
* **Warm Silk Cream (`#FAF8F5`)**: Soft, elegant reading background for editorial content.

### High-End Typography System
* **Editorial Serif (`Cormorant Garamond` / `Minion Pro`)**: Conveys centuries of Old World viticultural heritage for châteaux, appellations, and storytelling.
* **Swiss Modernist Sans (`Inter` / `Helvetica Neue`)**: Clean, minimalist UI labels, filters, and high-readability body copy.
* **Monospaced Tabular Numerals (`JetBrains Mono`)**: Precise, technical rendering of vintage years (`2009`), bottle numbers, and critic points (`100/100`).

---

## 3. Key Upgrades Delivered

### 1. Hero & Heritage Banner Module (`sections/arvi-hero-heritage.liquid`)
* Full-screen cinematic hero with subtle zoom effect.
* Gold heritage badge: *"Established 1991 • Melano, Switzerland"*.
* Direct dual call-to-actions: *"Explore Fine Wine Vault"* and *"Discover Our Boutiques"*.

### 2. Swiss Vault 4-Pillar Trust Bar (`sections/arvi-value-propositions.liquid`)
Instantly resolves collector hesitation by highlighting:
1. **100% Provenance Guaranteed**: Direct châteaux allocations and single-owner provenance.
2. **Subterranean Climate Vault**: Constant 12°C & 70% humidity in the 10,000+ bottle Melano facility.
3. **Swiss Tax-Free Bonded & 24h Transit**: Free Port storage exemption from 8.1% Swiss VAT with insured express shipping.
4. **Private Sommelier Advisory**: Personal portfolio curation and tasting rooms in Zurich, Lugano, and Melano.

### 3. Elevated Product Page (`sections/arvi-luxury-product-main.liquid`)
* **Interactive 360° Bottle Viewer**: Smooth touch and drag rotation simulation.
* **Label Magnifier Lens (Zoom)**: Allows high-net-worth collectors to inspect the capsule, label condition, and cork seal before purchase.
* **Critic Consensus Score Matrix**: Prominent badges for Robert Parker (100/100), James Suckling (99/100), Antonio Galloni (98/100), and Jancis Robinson (19.5/20).
* **Interactive Vintage Grid**: 1-click switching across available vintages (2005, 2009, 2010, 2015, 2018, 2020) with dynamic price updating.
* **Format & Original Wooden Case (OWC) Selector**: Standard 750ml, Magnum 1500ml, and Banded OWC 6-packs.
* **Real-Time Swiss VAT Switcher**: Toggles between CHF incl. 8.1% VAT and CHF bonded tax-free.
* **Scarcity & Vault Callout**: *"Only 3 bottles remaining in Melano Central Vault"*.
* **Sticky Luxury Add-to-Cart Bar**: Slides smoothly into view on scroll with quick buy and bottle thumbnail.
* **Sommelier Concierge Modal**: Direct 1-tap WhatsApp chat, phone dial, and email with the Head Sommelier.

### 4. Physical Boutiques Showcase (`sections/arvi-boutiques-showcase.liquid` & `preview/shops.html`)
Directly integrates the luxury architectural atmosphere of:
* **Arvino Melano**: Connecting directly to the central vault.
* **Arvino Lugano**: Lakeside luxury lounge.
* **Arvino Zurich**: Sankt Annagasse private salon and dinner table.
Includes interactive transit guides (by car, train, and plane), opening hours, and appointment forms.

### 5. Semantic SEO & AEO (Answer Engine Optimization) Master Schema (`snippets/arvi-seo-aeo-schema.liquid`)
* **Structured Data**: JSON-LD entities for `WineStore`, `PostalAddress` for all 3 shops, `GeoCoordinates`, `Product`, `Offers`, `AggregateRating`, `BreadcrumbList`, and `FAQPage`.
* **AEO Readiness**: Optimized for Google AI Overviews, SearchGPT, Gemini, and Perplexity when high-intent buyers query fine wine provenance and Swiss cellar storage.

---

## 4. Shopify Dawn Theme Integration Instructions

### Step 1: Add Asset Files
1. In Shopify Admin, navigate to **Online Store > Themes**.
2. On your **ARVI tema dawn** theme, click **... > Edit code**.
3. Under the **Assets** folder, click **Add a new asset**:
   * Upload `arvi-luxury.css`
   * Upload `arvi-luxury.js`

### Step 2: Add Sections
Under the **Sections** folder, click **Add a new section** and create:
* `arvi-hero-heritage.liquid`
* `arvi-value-propositions.liquid`
* `arvi-brand-storytelling.liquid`
* `arvi-boutiques-showcase.liquid`
* `arvi-luxury-product-main.liquid`
* `arvi-curated-collections.liquid`

### Step 3: Add Snippets
Under the **Snippets** folder, click **Add a new snippet** and create:
* `arvi-product-card-luxury.liquid`
* `arvi-seo-aeo-schema.liquid`

### Step 4: Include in `theme.liquid`
Open `layout/theme.liquid` and add just before `</head>`:
```liquid
{{ 'arvi-luxury.css' | asset_url | stylesheet_tag }}
{% render 'arvi-seo-aeo-schema' %}
```
And just before `</body>`:
```liquid
<script src="{{ 'arvi-luxury.js' | asset_url }}" defer="defer"></script>
```

### Step 5: Configure Shopify Metafields
In Shopify Admin, go to **Settings > Custom data > Products** and add the following definitions:
* `arvi.vintage` (Single line text) e.g., "2009"
* `arvi.appellation` (Single line text) e.g., "Pomerol Grand Cru • Bordeaux, France"
* `arvi.critic_score` (Single line text) e.g., "100 RP"
* `arvi.drinking_window` (Single line text) e.g., "2026 – 2065"
* `arvi.storage_location` (Single line text) e.g., "Melano Central Vault"

---

## 5. Live Interactive Preview Guide

You can immediately view the live prototype locally in any web browser:
* **Homepage Experience**: `preview/index.html`
* **Elevated Product Page (360° & Zoom)**: `preview/product-sample.html`
* **Arvino Boutiques (Shops Page)**: `preview/shops.html`

Both desktop and mobile experiences are fully responsive and functional.
