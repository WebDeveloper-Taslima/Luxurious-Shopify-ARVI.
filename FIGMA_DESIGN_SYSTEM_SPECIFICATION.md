# ARVI SA | Swiss Fine & Rare Wines
# Figma & Adobe XD Component Architecture Specification

> **Deliverable #3 Documentation:** Organised Design Files with Clearly Labelled Components  
> *Design System Version:* v2.0  
> *Platform:* Figma Professional / Adobe XD Master Component System  

---

## 1. File Structure & Page Hierarchy

To maintain complete clarity for developers, stakeholders, and product managers, the Figma / Adobe XD file is structured into 6 dedicated pages:

```
📦 ARVI SA — Luxury Redesign Master File (Figma / Adobe XD)
├── 📄 00. Cover & Version History
├── 📄 01. Foundations & Tokens (Colors, Typography, Elevation, Grids)
├── 📄 02. Component Library (Atoms, Molecules, Organisms)
├── 📄 03. Page Templates — Desktop (1440px)
├── 📄 04. Page Templates — Tablet (768px)
├── 📄 05. Page Templates — Mobile (375px)
└── 📄 06. Interactive Prototype Flows & Micro-interactions
```

---

## 2. Component Taxonomy & Layer Naming Conventions

All components adhere to strict **Atomic Design principles** with slash (`/`) naming conventions for seamless variant grouping:

### A. Atoms (`Components / Atoms / ...`)
* `Button / Primary / [Default, Hover, Active, Disabled]`
* `Button / Secondary-Ghost / [Default, Hover, Active, Disabled]`
* `Badge / Critic-Score / [100-RP, 99-JS, 98-AG, 95-Default]`
* `Badge / Provenance / [Direct-Châteaux, OWC-6Pack, Domaine]`
* `Badge / Scarcity-Pill / [Green-InStock, Amber-LowStock, Red-Allocated]`
* `Input / Text / [Default, Focused, Error, Disabled]`
* `Dropdown / Select / [Collapsed, Expanded, Hover]`
* `Icon / UI / [Search, Cart, Chevron-Down, Close, Map-Pin, Sommelier]`

### B. Molecules (`Components / Molecules / ...`)
* `Nav-Item / Desktop / [Default, Hover, Active]`
* `Nav-Item / Mobile-Drawer / [Default, Hover, Active]`
* `Vintage-Pill / [Selected, Available, OutOfStock]`
* `Format-Selector / [750ml, Magnum-1500ml, OWC-Case]`
* `Price-Display / [Swiss-VAT, Bonded-TaxFree, MultiCurrency]`
* `Search-Bar / Live / [Empty, Typing, Results-Found]`
* `Filter-Chip / [Inactive, Active-Gold]`
* `Transit-Card / [Car, Train, Plane]`

### C. Organisms (`Components / Organisms / ...`)
* `Header / Desktop / [Transparent-Hero, Sticky-Solid-Blur]`
* `Header / Mobile / [Standard, Drawer-Open]`
* `Drawer / Slideout-Menu / [Closed, Open-Active]`
* `Card / Product-Grid / [Default, Hover-QuickActions, OutOfStock]`
* `Card / Product-List / [Default, Hover, OutOfStock]`
* `Section / Trust-4Pillars / [Desktop-4Col, Tablet-2Col, Mobile-1Col]`
* `Viewer / 360-Bottle-Inspector / [Default, Dragging-Active, Magnifier-On]`
* `Section / Boutique-Card / [Melano-HQ, Lugano-Lakeside, Zurich-Financial]`
* `Modal / Sommelier-Reservation / [Default, Submitting, Success]`
* `Footer / Master / [Desktop, Mobile-Accordion]`

---

## 3. Auto-Layout & Constraints Specifications

All components and templates are built with 100% **Figma Auto-Layout 5.0** to ensure true responsive behavior:

| Component | Auto-Layout Direction | Padding (T/R/B/L) | Gap | Resizing (Width) | Resizing (Height) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `Button / Primary` | Horizontal | `12px, 24px, 12px, 24px` | `8px` | Hug Contents | Fixed `42px` |
| `Badge / Critic` | Horizontal | `4px, 8px, 4px, 8px` | `4px` | Hug Contents | Hug Contents |
| `Card / Product-Grid` | Vertical | `0px, 0px, 0px, 0px` | `0px` | Fill Container | Hug Contents |
| `Card-Info / Internal` | Vertical | `20px, 20px, 20px, 20px` | `8px` | Fill Container | Hug Contents |
| `Header / Main` | Horizontal | `18px, 28px, 18px, 28px` | `Auto` | Fill Container (1440) | Fixed `76px` |
| `Controls / Filter-Bar` | Horizontal | `16px, 28px, 16px, 28px` | `16px` | Fill Container | Hug Contents |

---

## 4. Design Tokens Mapping Table (Figma Variables & CSS)

| Figma Variable | Token Scope | CSS Custom Property | Value |
| :--- | :--- | :--- | :--- |
| `Color/Surface/Noir-Deep` | Color / Background | `var(--arvi-noir)` | `#0A0A0B` |
| `Color/Surface/Noir-Card` | Color / Card Surface | `var(--arvi-noir-card)` | `#18181C` |
| `Color/Brand/Gold-Primary`| Color / Accent & CTA | `var(--arvi-gold)` | `#C5A880` |
| `Color/Brand/Gold-Bright` | Color / Highlight | `var(--arvi-gold-bright)` | `#E2C9A6` |
| `Color/Brand/Bordeaux` | Color / Badges & Rarity| `var(--arvi-bordeaux)` | `#5C1A1B` |
| `Font/Headline/Serif` | Typography / Family | `var(--arvi-font-serif)` | `Cormorant Garamond` |
| `Font/Body/Sans` | Typography / Family | `var(--arvi-font-sans)` | `Inter` |
| `Font/Numeral/Mono` | Typography / Family | `var(--arvi-font-mono)` | `JetBrains Mono` |
| `Elevation/Luxe-Card` | Effect / Drop Shadow | `var(--arvi-shadow-luxe)`| `0 20px 45px -10px #000 (45%)` |
| `Motion/Easing/Luxe` | Transition Curve | `var(--arvi-transition)` | `cubic-bezier(0.16, 1, 0.3, 1)` |

---

## 5. Screen Templates & Responsive Breakpoints

1. **Homepage (`03. Page Templates / 01-Home`)**:
   - `Desktop-1440`: Complete 4-pillar trust, heritage video banner, featured allocations carousel, boutiques overview, cellar club footer.
   - `Tablet-768`: 2-column grid, compact header with hamburger drawer.
   - `Mobile-375`: 1-column high-touch stack, sticky booking floating bar.

2. **Fine Wine Vault / Catalog (`03. Page Templates / 02-Catalog`)**:
   - `Desktop-1440`: Sticky filter tabs, instant search bar, critic ratings, 3-column allocations grid, list view toggle.
   - `Mobile-375`: Filter drawer modal, 1-column cards with quick allocation swipe.

3. **Product Detail Page (`03. Page Templates / 03-Product`)**:
   - `Desktop-1440`: Sticky 360° bottle viewer column, label magnifier, critic score matrix, vintage grid, format selector.
   - `Mobile-375`: Swipeable bottle carousel, touch pinch-to-zoom label inspector, sticky bottom add-to-vault bar.

4. **Arvino Boutiques (`03. Page Templates / 04-Boutiques`)**:
   - `Desktop-1440`: Melano Central Vault, Lugano Lakeside Salon, Zurich Boutique, transit routes, reservation engine.
   - `Mobile-375`: 1-tap call sommelier, GPS transit direct navigation link.
