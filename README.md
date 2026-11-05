# ARVI SA | Swiss Fine & Rare Wines — Luxury Shopify Theme Revamp

[![Shopify Dawn](https://img.shields.io/badge/Shopify%20Theme-Dawn%2016.0%2B-95BF47?style=flat&logo=shopify&logoColor=white)](https://shopify.com)
[![Architecture](https://img.shields.io/badge/Architecture-Online%20Store%202.0-blue?style=flat)](#)
[![Performance](https://img.shields.io/badge/Performance-Mobile--First%20%26%20Fast-brightgreen?style=flat)](#)
[![Standards](https://img.shields.io/badge/Accessibility-WCAG%202.1%20AA-gold?style=flat)](#)

> An ultra-luxury, mobile-first Shopify Online Store 2.0 theme extension engineered for **ARVI SA**—Switzerland's premier fine and rare wine merchant based in Melano, Lugano, and Zurich. Built strictly on top of Shopify's flagship **Dawn 16.0+** theme to guarantee future-proof upgrade compatibility while delivering an unmistakable Swiss high-end luxury aesthetic.

---

## 📌 Background & Business Challenge

ARVI SA operates three world-class physical boutiques in Switzerland:
* **Arvino Melano**: Central headquarters on Lake Lugano with a subterranean, climate-controlled vault housing 10,000+ bottles.
* **Arvino Lugano**: Lakeside luxury tasting salon with artisan glassware and private cellar appointments.
* **Arvino Zurich**: High-end financial district boutique on Sankt Annagasse hosting seated collector dinners.

**The Problem:**
Customers visiting these opulent physical locations felt the online Shopify draft was too basic and did not reflect the prestige, trust, and provenance required for investment-grade fine wines (such as *Château Pétrus, DRC Romanée-Conti, Masseto, and Latour*).

**The Solution:**
This repository delivers an architectural revamp turning default Dawn into an elevated digital sanctuary of fine wine.

---

## ✨ Key Features & Enhancements

### 1. Interactive 360° Bottle Inspector & Label Magnifier
* **Touch & Mouse 360° Drag:** Connoisseurs can rotate and inspect bottles with smooth inertial 3D tilt.
* **Label Magnifier Zoom Lens:** High-definition inspection lens to verify bottling capsules, vintage stamps, and cork seals.

### 2. Collector-Grade Product Details
* **Critic Score Matrix:** Prominent badges for Robert Parker (100/100), James Suckling (99/100), Antonio Galloni (98/100), and Jancis Robinson (19.5/20).
* **Interactive Vintage Grid:** 1-click allocation switcher across historical vintages (2005, 2009, 2010, 2015, etc.) with real-time price synchronization.
* **Format & OWC Selectors:** Choose between Standard 750ml, Magnum 1500ml, or Original Wooden Banded Cases (OWC).
* **Provenance & Scarcity Callouts:** Live cellar inventory reassurance (*"Only 3 bottles remaining in Melano Central Vault"*).

### 3. Real-Time Multilingual Translator (6 Languages)
Instant client-side translation engine switching between:
* 🇬🇧 **EN** (English — Global Collectors)
* 🇮🇹 **IT** (Italiano — Ticino / Melano Headquarters)
* 🇩🇪 **DE** (Deutsch — Zurich Boutique)
* 🇫🇷 **FR** (Français — Geneva & Western Switzerland)
* 🇪🇸 **ES** (Español — International Market)
* 🇨🇳 **ZH** (中文 — Asian Fine Wine Connoisseurs)

### 4. Live Swiss VAT & Bonded Duty-Free Switcher
* Toggles prices in real-time between **CHF (incl. 8.1% Swiss VAT)** for domestic delivery, and **CHF / EUR / USD (Bonded Tax-Free)** for Free Port vault storage.
* High-contrast, dark-mode dropdown UI ensuring maximum legibility on all operating systems and browsers.

### 5. Physical Boutiques Integration (`/shops`)
* Dedicated luxury modules showcasing Melano, Lugano, and Zurich locations.
* Direct transit instructions (by car, train, and plane), interactive maps, visiting hours, and private sommelier tasting reservation forms.

### 6. Semantic SEO & AEO (Answer Engine Optimization)
* Comprehensive **JSON-LD Schema** covering `WineStore`, `PostalAddress` (for all 3 physical branches), `Product`, `Offer`, `AggregateRating`, and `FAQPage`.
* Optimized for **Google AI Overviews, SearchGPT, Perplexity, and Gemini**.

---

## 📂 Repository Structure

```
├── shopify-dawn-arvi-revamp/               # Production-Ready Shopify Theme Code
│   ├── assets/
│   │   ├── arvi-luxury.css                 # Swiss Obsidian & Champagne Gold styling
│   │   └── arvi-luxury.js                  # 360°, Magnifier, Sticky Bar & Translator
│   ├── sections/
│   │   ├── arvi-hero-heritage.liquid       # Cinematic heritage banner
│   │   ├── arvi-value-propositions.liquid  # 4-Pillar Swiss Vault trust bar
│   │   ├── arvi-brand-storytelling.liquid  # Subterranean cellar narrative
│   │   ├── arvi-boutiques-showcase.liquid  # Melano, Lugano & Zurich shops
│   │   ├── arvi-luxury-product-main.liquid # 360° viewer, critic scores & vintage grid
│   │   └── arvi-curated-collections.liquid # Iconic allocations showcase
│   ├── snippets/
│   │   ├── arvi-product-card-luxury.liquid # Critic score & quick reserve card
│   │   └── arvi-seo-aeo-schema.liquid      # Master JSON-LD structured data
│   ├── config/
│   │   └── settings_schema_additions.json  # No-code Theme Customizer controls
│   └── templates/
│       ├── index.json                      # Dawn OS 2.0 homepage layout
│       └── product.luxury.json             # Dawn OS 2.0 luxury product layout
│
├── index.html                              # Luxury Homepage (GitHub Pages entry point)
├── product-sample.html                     # 360° Bottle & Magnifier product page
├── shops.html                              # Physical Boutiques page (arvi.ch/shops)
├── css/arvi-luxury.css                     # Master luxury style system
├── js/arvi-luxury.js                       # Interactive client-side engine
├── images/                                 # Local high-res wine & boutique assets
├── SHOPIFY_DAWN_LUXURY_REVAMP_GUIDE.md     # Complete step-by-step setup documentation
└── README.md
```

---

## 🚀 How to Run the Local Interactive Demo

1. Clone or download this repository:
   ```bash
   git clone https://github.com/your-username/arvi-shopify-luxury-revamp.git
   cd arvi-shopify-luxury-revamp
   ```
2. Double-click `index.html` in your file explorer to open it in any web browser.
3. Test all interactive features:
   * **Language Switcher:** Select EN, IT, DE, FR, ES, or ZH in the topbar to see instant real-time translation.
   * **Tax Switcher:** Switch between *CHF (VAT Incl.)* and *Bonded Tax-Free* to observe live price recalculations.
   * **Product Page (`product-sample.html`):** Click **Interactive 360° Drag** to rotate the bottle with mouse/touch or **Inspect Label (Zoom)** to magnify the vintage label.
   * **Boutiques Page (`shops.html`):** Explore transit directions, maps, and tasting reservations for Melano, Lugano, and Zurich.

---

## 🛠️ Shopify Dawn Installation Guide

1. In your Shopify Admin, navigate to **Online Store > Themes**.
2. Select your Dawn theme and choose **... > Edit code**.
3. Upload the files from `shopify-dawn-arvi-revamp/`:
   * Upload `assets/arvi-luxury.css` and `assets/arvi-luxury.js` into **Assets**.
   * Copy the `.liquid` files into **Sections** and **Snippets**.
4. In `layout/theme.liquid`, include:
   ```liquid
   {{ 'arvi-luxury.css' | asset_url | stylesheet_tag }}
   {% render 'arvi-seo-aeo-schema' %}
   ```
   and right before `</body>`:
   ```liquid
   <script src="{{ 'arvi-luxury.js' | asset_url }}" defer="defer"></script>
   ```
5. Customize colors, boutique opening hours, and sommelier phone numbers directly in the **Shopify Theme Customizer** without writing any code.

---

## 📄 License & Credits

* **Client:** ARVI SA (Switzerland)
* **Theme Foundation:** Shopify Dawn 16.0+ (MIT License)
* **Custom Architecture & Revamp:** Bespoke Swiss Fine Wine Luxury System
