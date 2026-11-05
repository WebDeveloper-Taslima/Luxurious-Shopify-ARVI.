# ARVI SA | Swiss Fine & Rare Wines
# Luxury Website Redesign — Design System & Handover Guide

> **Confidential Client Handover Document**  
> *Prepared for: Website Visual & UX Elevation Revamp*  
> *Version:* 2.0.0 (Production-Ready)  
> *Target Frameworks:* Shopify Online Store 2.0 (Dawn 16.0+), Modern Semantic HTML5/CSS3/ES6+, Figma & Adobe XD  

---

## 1. Executive Design Philosophy: "The Swiss Vault"

The redesign reimagines the website from a dated or generic storefront into a **modern, polished, and timeless digital sanctuary**. 

Every design decision embodies three core tenets:
1. **Quiet Luxury & Precision:** Uncluttered layouts, generous white/dark space, and mathematical Swiss typography that lets investment-grade assets speak with quiet confidence.
2. **Provenance & Trust Architecture:** Prominently communicating authenticity, temperature-controlled vault provenance (12°C & 70% humidity in Melano), and professional critic scores (Robert Parker 100/100, James Suckling 99/100).
3. **Tactile Micro-Interactions:** Delivering physical-world luxury through high-definition 360° bottle inspection, precision label zoom magnifier lenses, and instant duty-free tax switching without page reloads.

---

## 2. Cohesive Color Palette Tokens

The color system uses deep obsidian mineral tones accented by champagne gold leaf and imperial Bordeaux wine red. All contrast ratios strictly exceed **WCAG 2.1 AA** standards (minimum 4.5:1 for body copy and 3.0:1 for large display typography).

| Token Name | Hex Code | RGB | Usage & Semantic Role |
| :--- | :--- | :--- | :--- |
| `--arvi-noir` | `#0A0A0B` | `rgb(10, 10, 11)` | Primary global background; deep subterranean vault mood. |
| `--arvi-noir-surface` | `#121214` | `rgb(18, 18, 20)` | Secondary surface; navigation headers and topbars. |
| `--arvi-noir-card` | `#18181C` | `rgb(24, 24, 28)` | Product card background, modal panels, and dropdown containers. |
| `--arvi-noir-border` | `rgba(197, 168, 128, 0.22)` | `rgba(197, 168, 128, 0.22)` | Delicate divider borders and card perimeter lines. |
| `--arvi-gold` | `#C5A880` | `rgb(197, 168, 128)` | Primary brand metallic accent; buttons, active links, icons. |
| `--arvi-gold-bright` | `#E2C9A6` | `rgb(226, 201, 166)` | Hover highlights, active text kickers, and price emphasis. |
| `--arvi-gold-dark` | `#998A65` | `rgb(153, 138, 101)` | Secondary button borders and pressed states. |
| `--arvi-gold-soft` | `rgba(197, 168, 128, 0.12)` | `rgba(197, 168, 128, 0.12)` | Subtle hover fills, pill backgrounds, and badge shading. |
| `--arvi-bordeaux` | `#5C1A1B` | `rgb(92, 26, 27)` | 100-Point critic score badges, allocation highlights, vintage badges. |
| `--arvi-bordeaux-deep`| `#3B0E10` | `rgb(59, 14, 16)` | Background gradient shadows and wine-focused hero overlays. |
| `--arvi-cream` | `#FBF9F5` | `rgb(251, 249, 245)` | Light mode editorial backgrounds, tasting notes cards. |
| `--arvi-muted` | `#8C8984` | `rgb(140, 137, 132)` | Secondary metadata, VAT labels, and disabled states. |
| `--arvi-text-light` | `#F5F5F7` | `rgb(245, 245, 247)` | Primary readable headline and body text color. |
| `--arvi-text-dim` | `#A19F9B` | `rgb(161, 159, 155)` | Descriptions, tasting notes, and provenance explanations. |

### Color Usage Rules:
* **Backgrounds:** Never use pure `#000000` for main reading content. Use `#0A0A0B` (Noir) or `#18181C` (Card) to preserve optical depth and reduce eye fatigue.
* **Gradients:** Use `--arvi-gold-gradient` (`linear-gradient(135deg, #DFC39D 0%, #C5A880 50%, #998A65 100%)`) sparingly—exclusively for primary CTAs, active badges, or hero accent text.
* **Bordeaux Badges:** Reserved strictly for critic scores (100 RP / 99 JS) and scarcity indicators to maintain high urgency and prestige.

---

## 3. Refined Typography System

The typographic pairing balances **Old World viticultural heritage** with **Swiss modernism** and **numeral precision**:

1. **Editorial Serif (`Cormorant Garamond`):** Headlines, hero kickers, châteaux names, and storytelling.
2. **Swiss Modern Sans (`Inter`):** UI navigation, filter buttons, body copy, and sommelier descriptions.
3. **Tabular Monospace (`JetBrains Mono`):** Numeric data, vintage years (`2009`), critic scores (`100/100`), and prices (`CHF 1'890`).

### Type Scale & Hierarchy

| Role | Font Family | Size (Desktop) | Size (Mobile) | Weight | Letter Spacing | Line Height |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Display H1** | `Cormorant Garamond` | `clamp(40px, 5.2vw, 68px)` | `36px` | 400 (Regular) | `0.02em` | `1.1` |
| **Section H2** | `Cormorant Garamond` | `clamp(28px, 3.5vw, 44px)` | `28px` | 400 (Regular) | `0.02em` | `1.2` |
| **Product Card H3** | `Cormorant Garamond` | `20px` | `18px` | 500 (Medium) | `0.01em` | `1.25` |
| **Section Kicker** | `Inter` | `11px` | `10px` | 600 (SemiBold) | `0.22em` (All Caps) | `1.4` |
| **Nav Links / Buttons**| `Inter` | `12px` | `12px` | 500 (Medium) | `0.14em` (All Caps) | `1.0` |
| **Body Copy** | `Inter` | `15px` | `14px` | 300 / 400 | `-0.01em` | `1.65` |
| **Critic / Vintage Num**| `JetBrains Mono` | `11px - 14px` | `11px` | 600 (SemiBold) | `0.05em` | `1.0` |
| **Price Display** | `JetBrains Mono` | `24px` (Main) / `18px` | `20px` | 600 (SemiBold) | `0.02em` | `1.1` |

---

## 4. Spacing Rules & Layout Grid

An **8-Point Modular Grid** governs all padding, margins, and component dimensions to guarantee visual rhythm.

### Spacing Scale
* `--space-2xs`: `4px` (Border radius, badge internal padding)
* `--space-xs`: `8px` (Icon gaps, tag spacing, micro-margins)
* `--space-sm`: `12px` (Pill padding, small button gutters)
* `--space-md`: `16px` (Standard card internal padding, input spacing)
* `--space-lg`: `24px` (Card gaps, container gutters)
* `--space-xl`: `32px` (Sub-section margins, grid gaps)
* `--space-2xl`: `48px` (Section paddings on mobile)
* `--space-3xl`: `80px - 120px` (Generous section breathing room on desktop)

### Container & Layout Rules
* **Max Container Width:** `1440px` (Centers on ultra-wide screens with `margin: 0 auto`).
* **Desktop Page Gutters:** `28px` on left/right.
* **Tablet Page Gutters:** `20px` on left/right.
* **Mobile Page Gutters:** `16px` on left/right.
* **Product Card Grid:** Fluid CSS Grid with `repeat(auto-fill, minmax(280px, 1fr))` and `gap: 28px`.

---

## 5. UI Elements & Component Library

### A. Buttons & CTAs
1. **Primary Luxury Button (`.arvi-btn-primary`)**:
   - Background: `--arvi-gold-gradient`
   - Text: `#000000`, 600 weight, 11px uppercase, `letter-spacing: 0.14em`.
   - Hover: Transform `translateY(-2px)`, shadow `0 8px 24px rgba(197, 168, 128, 0.35)`.
2. **Secondary Ghost Button (`.arvi-btn-secondary`)**:
   - Background: `transparent`, border `1px solid var(--arvi-gold)`.
   - Text: `var(--arvi-gold-bright)`.
   - Hover: Background `rgba(197, 168, 128, 0.12)`, border-color `var(--arvi-gold-bright)`.
3. **Tertiary Link Button (`.arvi-topbar-link`, `.arvi-nav-link`)**:
   - Underline slide effect on hover, gold color transition.

### B. Badges & Provenance Tags
* **Critic Score Badge (`.arvi-critic-badge`)**: Background `#5C1A1B`, text `#FFF`, font `JetBrains Mono`. Displays authoritative critic points: `100 RP`, `99 JS`, `98 AG`.
* **Provenance Tag (`.arvi-provenance-tag`)**: Translucent obsidian pill with 1px gold border: `Direct Châteaux`, `OWC 6-Pack`, `Domaine Allocation`.
* **Scarcity Pulse Dot (`.arvi-scarcity-pill`)**: Amber/Green glowing dot with 1.8s infinite pulse animation: *"Only 2 bottles remaining in Melano Vault"*.

### C. 360° Bottle Inspector & Label Magnifier
* **Viewer Viewport (`.arvi-bottle-viewport`)**:
  - Radial gradient dark studio lighting (`#242429` to `#0D0D0F`).
  - Inertial mouse drag and touch swipe rotation simulating bottle inspection.
  - Optical label reflection highlights that shift dynamically with rotation angle.
* **Magnifier Lens (`.arvi-magnifier-lens`)**:
  - Circular lens (`150px` diameter) with `border: 2px solid var(--arvi-gold)` and `box-shadow: 0 0 25px rgba(197,168,128,0.4)`.
  - Magnification level: 2.5x high-definition zoom for capsule stamps and cork seals.

### D. Navigation Header & Responsive Drawer
* **Sticky Header (`.arvi-header-main`)**: Glassmorphism blur (`backdrop-filter: blur(20px)`), `rgba(10,10,11,0.94)` background.
* **Mobile Hamburger (`.arvi-hamburger`)**: Minimalist 3-line animated hamburger transitioning into an "X" on toggle.
* **Slide-out Drawer (`.arvi-mobile-drawer`)**: Smooth `0.4s cubic-bezier(0.16, 1, 0.3, 1)` slide from right, featuring brand logo, all navigation links, sommelier hotline, and booking CTA.

### E. Live Duty-Free & Bonded Tax Switcher
* Real-time client-side calculation switching between:
  - **Domestic Swiss VAT (CHF incl. 8.1% VAT)**
  - **Bonded Free Port Vault (CHF tax-free)**
  - **Export Currencies (EUR / USD)**
* Instant DOM price update without reloading or disrupting browsing flow.

---

## 6. Responsive Breakpoint Matrix

| Device Class | Breakpoint Range | Navigation Mode | Grid Columns | Padding Gutters |
| :--- | :--- | :--- | :--- | :--- |
| **Ultra-Wide Desktop** | `> 1440px` | Full Horizontal + Topbar | 4 Columns | `28px` (Centered) |
| **Standard Desktop** | `1200px - 1439px` | Full Horizontal + Topbar | 3 - 4 Columns | `24px` |
| **Laptop / Small Desktop**| `992px - 1199px` | Compact Horizontal | 3 Columns | `20px` |
| **Tablet (Portrait/Landscape)**| `768px - 991px` | Mobile Hamburger Drawer | 2 Columns | `20px` |
| **Mobile Smartphone** | `375px - 767px` | Mobile Hamburger Drawer | 1 - 2 Columns | `16px` |
| **Compact Mobile** | `< 375px` | Mobile Drawer + Stacked | 1 Column | `12px` |

---

## 7. Micro-Interactions & Animation Standards

* **Standard Transition Curve:** `cubic-bezier(0.16, 1, 0.3, 1)` (Apple/Swiss luxury easing curve — swift initial acceleration with ultra-smooth deceleration).
* **Hover Transitions:** `300ms - 350ms` on all links, cards, and buttons.
* **Card Elevation:** Cards elevate `translateY(-6px)` with subtle gold glow shadow (`0 20px 40px rgba(0,0,0,0.5), 0 0 25px rgba(197,168,128,0.1)`).
* **Bottle Zoom:** Sub-pixel smooth transition on image hover (`transform: scale(1.06) translateY(-4px)`).
* **Notification Toast:** `fadeInSlide` with auto-dismiss after 4 seconds.

---

## 8. Handover Verification Checklist

- [x] **Page 1 (Homepage):** `index.html` with Hero, 4-Pillar Trust, Curated Icons, Sommelier Advisory.
- [x] **Page 2 (Product Experience):** `product-sample.html` with 360° bottle viewer, label magnifier, vintage matrix.
- [x] **Page 3 (Boutiques Showcase):** `shops.html` with Melano, Lugano, and Zurich locations, transit guides, reservation modal.
- [x] **Page 4 (Fine Wine Vault / Catalog):** `collection.html` with region tabs, vintage decade filter, critic score filter, search, and list/grid toggle.
- [x] **Responsive Drawer:** Integrated across all pages for tablets and mobile devices.
- [x] **Multilingual Translator:** 6-language client-side dictionary (EN, IT, DE, FR, ES, ZH).
- [x] **Tax & Currency Switcher:** Real-time Swiss VAT (8.1%) vs. Free Port Bonded pricing.
- [x] **Design Tokens & CSS Variables:** Fully documented in `css/arvi-luxury.css` and reusable across Shopify Dawn templates.
