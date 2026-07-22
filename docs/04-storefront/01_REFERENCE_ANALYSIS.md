---
id: STOREFRONT-REF-001
version: 1.0.0
status: Active
owner: Product Design + Product Architecture
source: Approved Golden Screens
last_updated: 2026-07-21
---

# VERDEA — Reference Analysis

## Purpose

This document converts the approved VERDEA Golden Screens into measurable visual and behavioral rules. It is not inspiration. It is the observation layer that governs implementation.

Values marked **Measured target** are implementation targets inferred from the approved screens and must be validated through screenshot comparison. Values marked **Token-bound** must come from `packages/design-tokens`.

## Reference set

- GS-001 — Home.
- GS-002 — Catalog.
- GS-003 — Product detail.
- GS-004 — Checkout.
- GS-005 — Account.
- GS-006 — Canonical Design System board.

## Global visual principles

1. VERDEA presents commerce before technology.
2. The interface is compact, but it never feels crowded.
3. Hierarchy comes primarily from composition, spacing, image scale and contrast.
4. Small controls use regular or medium weights.
5. Strong weight is reserved for section titles and key prices.
6. The green system has depth; it must not render as one flat fill.
7. White surfaces are warm and slightly tinted.
8. Borders are visible only when needed to define structure.
9. Shadows create separation without looking decorative.
10. Icons are linear SVGs; emojis are forbidden.
11. Product imagery is the dominant commerce signal.
12. Every component must look intentional at browser zoom 100%.

## Measurable reference matrix

| ID | Area | Attribute | Observed / target rule | Implementation source | Validation |
|---|---|---|---|---|---|
| R001 | Page | Master viewport | 1672 × 941 | Home master spec | Screenshot |
| R002 | Page | Standard viewport | 1440 × 900 | Home master spec | Screenshot |
| R003 | Page | Mobile viewport | 390 × 844 | Home master spec | Screenshot |
| R004 | Page | Browser zoom | 100% | QA rule | Manual |
| R005 | Page | Background | Warm off-white, never dominant pure white | Token-bound | Pixel sample |
| R006 | Page | Content max width | Approx. 1360 px | Token-bound | DOM measurement |
| R007 | Page | Desktop edge padding | Approx. 24 px minimum | Token-bound | DOM measurement |
| R008 | Page | Section rhythm | 72–96 px major separation | Token-bound | DOM measurement |
| R009 | Page | Component density | Compact / comfortable | Reference | Visual review |
| R010 | Page | Horizontal alignment | Header, content and sections share axes | Layout system | Overlay |
| R011 | Typography | Interface family | Inter Variable | Token-bound | Computed style |
| R012 | Typography | Display family | Manrope where approved | Token-bound | Computed style |
| R013 | Typography | Button weight | 500 | Rendering system | Computed style |
| R014 | Typography | Navigation weight | 400–500 | Rendering system | Computed style |
| R015 | Typography | Small labels | Never visually heavy | Reference | Visual review |
| R016 | Typography | Letter spacing | Slightly tight on controls and titles | Component spec | Computed style |
| R017 | Typography | Antialiasing | Optimized / geometric precision | Global CSS | Browser review |
| R018 | Typography | Product title | Compact, 1–2 lines maximum | ProductCard spec | Screenshot |
| R019 | Typography | Price | Stronger than metadata, not oversized | ProductCard spec | Screenshot |
| R020 | Typography | Supporting text | Cool-neutral gray with adequate contrast | Token-bound | Contrast test |
| R021 | Color | Primary forest | Deep green with layered illumination | Token-bound + gradients | Pixel sample |
| R022 | Color | Primary action | Multi-stop green gradient | Rendering system | Pixel sample |
| R023 | Color | Primary hover | Brighter and slightly elevated | Rendering system | Interaction capture |
| R024 | Color | Primary pressed | Darker, lower elevation | Rendering system | Interaction capture |
| R025 | Color | Surface default | Warm white gradient | Rendering system | Pixel sample |
| R026 | Color | Canvas | Warm neutral | Token-bound | Pixel sample |
| R027 | Color | Border | Green-tinted low-alpha | Rendering system | Pixel sample |
| R028 | Color | Success | Natural medium green | Token-bound | Computed style |
| R029 | Color | Error | Muted red, not neon | Token-bound | Computed style |
| R030 | Color | Offer | Controlled red accent | Token-bound | Screenshot |
| R031 | Rendering | Card base | Warm white vertical gradient | Rendering system | Pixel sample |
| R032 | Rendering | Card border | 1 px, low contrast | Rendering system | DOM measurement |
| R033 | Rendering | Card radius | Compact rounded rectangle, not pill | Token-bound | DOM measurement |
| R034 | Rendering | Card shadow | Ambient multi-layer, low opacity | Rendering system | Computed style |
| R035 | Rendering | Card highlight | Subtle inner top highlight | Rendering system | Pixel sample |
| R036 | Rendering | Card hover | 1–2 px rise with stronger ambient shadow | Rendering system | Interaction capture |
| R037 | Rendering | Card active | Reduced elevation / contact shadow | Rendering system | Interaction capture |
| R038 | Rendering | Selected surface | Green focus/border reinforcement | Rendering system | Interaction capture |
| R039 | Rendering | Flat surfaces | Prohibited for prominent controls | Constitution | Code review |
| R040 | Rendering | Decorative gloss | Prohibited; gradients remain subtle | Rendering system | Visual review |
| R041 | Button | Primary height | Approx. 35–42 px by size | Component spec | DOM measurement |
| R042 | Button | Primary radius | Approx. 7–10 px, not overly round | Component spec | DOM measurement |
| R043 | Button | Text weight | 500 | Component spec | Computed style |
| R044 | Button | Text size | Compact, approx. 11–13 px by context | Component spec | Computed style |
| R045 | Button | Icon | 15–18 px linear SVG | Icon rules | DOM measurement |
| R046 | Button | Icon stroke | Approx. 1.8–2 px, round caps | Icon rules | SVG inspection |
| R047 | Button | Icon gap | Approx. 6–8 px | Component spec | DOM measurement |
| R048 | Button | Primary border | Dark green overlay | Rendering system | Computed style |
| R049 | Button | Primary highlight | Inner top highlight | Rendering system | Pixel sample |
| R050 | Button | Primary contact shadow | Inner bottom dark edge | Rendering system | Pixel sample |
| R051 | Button | Primary ambient shadow | Small green-tinted shadow | Rendering system | Computed style |
| R052 | Button | Secondary | Warm white gradient with green text | Rendering system | Screenshot |
| R053 | Button | Ghost | Pale green surface, not fully transparent in commerce CTA | Rendering system | Screenshot |
| R054 | Button | Focus | Clear green ring with offset | Accessibility | Interaction capture |
| R055 | Button | Disabled | Reduced opacity and saturation | Rendering system | Interaction capture |
| R056 | Button | Loading | Layout remains stable | Component spec | Test |
| R057 | Button | Emoji | Forbidden | AI rules | Code search |
| R058 | Input | Height | Approx. 38–44 px | Component spec | DOM measurement |
| R059 | Input | Radius | Approx. 8–10 px | Component spec | DOM measurement |
| R060 | Input | Background | Warm white vertical gradient | Rendering system | Pixel sample |
| R061 | Input | Border | Low-alpha green gray | Rendering system | Pixel sample |
| R062 | Input | Text weight | 400 | Component spec | Computed style |
| R063 | Input | Label weight | Approx. 500 | Component spec | Computed style |
| R064 | Input | Focus | Green border plus soft outer ring | Rendering system | Interaction capture |
| R065 | Input | Error | Red border with minimal soft ring | Rendering system | Interaction capture |
| R066 | Search | Role | Dominant header utility | Header spec | Screenshot |
| R067 | Search | Width | Largest control in header | Header spec | DOM measurement |
| R068 | Search | Icon | Linear search SVG, never glyph text | Icon rules | Code review |
| R069 | Search | Mobile | Own row when horizontal space is insufficient | Responsive spec | Screenshot |
| R070 | Header | Main height | Approx. 60–72 px depending context | Token-bound | DOM measurement |
| R071 | Header | Background | Multi-layer dark forest gradient | Rendering system | Pixel sample |
| R072 | Header | Top illumination | Radial green highlight, subtle | Rendering system | Pixel sample |
| R073 | Header | Bottom border | Low-alpha light separator | Rendering system | Pixel sample |
| R074 | Header | Shadow | Low dark-green ambient shadow | Rendering system | Computed style |
| R075 | Header | Logo | Official SVG asset only | Brand Bible | DOM inspection |
| R076 | Header | Logo reconstruction | Forbidden | Brand Bible | Code search |
| R077 | Header | Actions | Compact regular-weight labels | Header spec | Screenshot |
| R078 | Header | Icons | SVG line icons | Icon rules | DOM inspection |
| R079 | Header | Cart badge | Compact, high contrast, circular | Header spec | Screenshot |
| R080 | Secondary nav | Height | Approx. 44–52 px | Component spec | DOM measurement |
| R081 | Secondary nav | Background | Warm white | Rendering system | Pixel sample |
| R082 | Secondary nav | Active state | Green text + thin bottom indicator | Component spec | Screenshot |
| R083 | Secondary nav | Mobile | Horizontal scroll, no wrapping | Responsive spec | Screenshot |
| R084 | Hero | Visual priority | Highest Home block priority | Home master spec | Visual review |
| R085 | Hero | Composition | Asymmetric editorial split | Hero spec | Overlay |
| R086 | Hero | Image share | Approx. 55–65% visual weight | Hero spec | Overlay |
| R087 | Hero | Text share | Approx. 35–45% visual weight | Hero spec | Overlay |
| R088 | Hero | Background | Warm neutral / editorial image composition | Hero spec | Screenshot |
| R089 | Hero | Radius | Large but controlled | Token-bound | DOM measurement |
| R090 | Hero | Heading weight | Strong but not black-heavy | Hero spec | Computed style |
| R091 | Hero | CTA count | One primary, optional secondary | Hero spec | DOM inspection |
| R092 | Hero | Image treatment | Cropped editorially, no generic stock-card framing | Media rules | Screenshot |
| R093 | Hero | Mobile order | Copy first, image second unless reference dictates | Responsive spec | Screenshot |
| R094 | Categories | Card format | Image-led compact category object | CategoryCard spec | Screenshot |
| R095 | Categories | Grid | Even rhythm, consistent image ratios | Layout system | Overlay |
| R096 | Categories | Text weight | Medium | CategoryCard spec | Computed style |
| R097 | Categories | Hover | Minimal lift / border reinforcement | Rendering system | Interaction capture |
| R098 | Categories | Mobile | Horizontal carousel or reduced grid per spec | Responsive spec | Screenshot |
| R099 | ProductCard | Media share | Approx. 52–58% of card height | ProductCard spec | DOM measurement |
| R100 | ProductCard | Media background | Soft radial warm gradient | Rendering system | Pixel sample |
| R101 | ProductCard | Image | Contained, centered, editorial shadow | ProductCard spec | Screenshot |
| R102 | ProductCard | Favorite action | Circular SVG icon button | ProductCard spec | DOM inspection |
| R103 | ProductCard | Badge | Compact pastel pill | ProductCard spec | Screenshot |
| R104 | ProductCard | Body padding | Compact 10–14 px range | Component spec | DOM measurement |
| R105 | ProductCard | Body gap | Approx. 3–6 px | Component spec | DOM measurement |
| R106 | ProductCard | Title weight | Approx. 500–600 | Component spec | Computed style |
| R107 | ProductCard | Price weight | Strongest text inside body | Component spec | Screenshot |
| R108 | ProductCard | Stock | Small semantic line | Component spec | Screenshot |
| R109 | ProductCard | Add CTA | Full width | ProductCard spec | DOM measurement |
| R110 | ProductCard | Add icon | Linear cart SVG | Icon rules | DOM inspection |
| R111 | ProductCard | Featured | Variant prop, not duplicated markup | Architecture | Code review |
| R112 | ProductCard | Featured media | Slightly greener editorial background | Featured spec | Screenshot |
| R113 | ProductCard | Featured badge | Distinct but restrained | Featured spec | Screenshot |
| R114 | ProductCard | Hover | 2 px rise with border/shadow change | Rendering system | Interaction capture |
| R115 | ProductCard | Final imagery | No SVG placeholder in production | Delivery rule | Asset review |
| R116 | Filters | Width | Compact fixed desktop rail | Token-bound | DOM measurement |
| R117 | Filters | Sections | Thin separators, no heavy boxes | Filter spec | Screenshot |
| R118 | Filters | Label size | Smaller than product metadata | Filter spec | Computed style |
| R119 | Filters | Checkbox | Brand green, compact | Filter spec | Screenshot |
| R120 | Filters | Mobile | Drawer, not hidden functionality | Responsive spec | Interaction test |
| R121 | Checkout | Summary | Elevated but visually quiet | Checkout spec | Screenshot |
| R122 | Checkout | Total | Dominant semantic row | Checkout spec | Screenshot |
| R123 | Checkout | Confirm CTA | Full width primary gradient | Checkout spec | Screenshot |
| R124 | Checkout | Trust items | Linear icons + two-line text | Checkout spec | Screenshot |
| R125 | Benefits | Layout | Equal-weight horizontal items on desktop | Benefits spec | Overlay |
| R126 | Benefits | Iconography | Small line icon | Icon rules | DOM inspection |
| R127 | Benefits | Copy | Short title + short support line | Content spec | DOM inspection |
| R128 | Benefits | Mobile | Stack or horizontal scroll per final spec | Responsive spec | Screenshot |
| R129 | Editorial | Collection cards | Image-led, wider than ProductCard | Collection spec | Screenshot |
| R130 | Editorial | Text overlay | Controlled contrast and safe area | Collection spec | Contrast test |
| R131 | Guides | Purpose | Helpful commerce education, not blog clutter | Guides spec | Content review |
| R132 | Guides | Card density | Lower than product grid | Guides spec | Visual review |
| R133 | Account | Sidebar background | Layered dark forest | Rendering system | Pixel sample |
| R134 | Account | Active item | Green layered fill, medium text | Account spec | Screenshot |
| R135 | Account | Inactive item | Transparent / low highlight | Account spec | Screenshot |
| R136 | Account | Profile | Warm avatar and restrained badge | Account spec | Screenshot |
| R137 | Footer | Background | Dark forest family | Footer spec | Pixel sample |
| R138 | Footer | Density | Lower than catalog | Footer spec | Visual review |
| R139 | Footer | Link weight | Regular | Footer spec | Computed style |
| R140 | Footer | Logo | Official asset | Brand Bible | DOM inspection |
| R141 | Motion | Standard duration | 180–220 ms | Token-bound | Computed style |
| R142 | Motion | Slow duration | Up to 260 ms | Token-bound | Computed style |
| R143 | Motion | Translation | Usually 1–2 px for controls/cards | Rendering system | Interaction capture |
| R144 | Motion | Bounce | Forbidden | Motion rules | Code review |
| R145 | Motion | Reduced motion | Mandatory support | Accessibility | Automated test |
| R146 | Accessibility | Focus visibility | Mandatory for every control | Accessibility | Keyboard test |
| R147 | Accessibility | Icon labels | Mandatory for icon-only buttons | Accessibility | Axe/test |
| R148 | Accessibility | Contrast | WCAG AA minimum | Accessibility | Automated test |
| R149 | Accessibility | Touch target | Approx. 44 px minimum where needed | Responsive spec | DOM measurement |
| R150 | Accessibility | Heading order | Semantic and sequential | Architecture | DOM inspection |
| R151 | Performance | Image dimensions | Explicit width/height or aspect ratio | Performance | Lighthouse |
| R152 | Performance | LCP | < 2.5 s | Home master spec | Lighthouse |
| R153 | Performance | CLS | < 0.05 | Home master spec | Lighthouse |
| R154 | Performance | Client JS | Avoid for static sections | Architecture | Bundle review |
| R155 | QA | Screenshot method | Same viewport, zoom and data | QA spec | Process check |
| R156 | QA | Comparison | Overlay / difference image preferred | QA spec | Artifact review |
| R157 | QA | Allowed difference | No obvious visual mismatch at normal viewing | QA spec | Human approval |
| R158 | QA | New token creation | Prohibited without RFC | Constitution | Git diff |
| R159 | QA | Local component copies | Prohibited | Architecture | Code review |
| R160 | QA | Placeholder completion | Not accepted as final | Delivery rule | Asset review |

## Visual gravity

### Header

- High functional density.
- Low vertical footprint.
- Search is the principal interactive mass.
- Logo anchors the left edge.
- Cart/account actions anchor the right edge.

### Hero

- Strongest editorial mass on Home.
- Image drives emotion; copy drives action.
- CTA must remain visible without overpowering image or heading.

### Product area

- Product imagery creates rhythm.
- Price and Add CTA create conversion hierarchy.
- Badges and stock remain subordinate.

### Footer

- Lower visual intensity.
- Dark background closes the page.
- Navigation is scannable, not decorative.

## Eye-flow target

```text
Logo → Search → Hero heading → Hero CTA → Categories → Featured products → Collections → Benefits → Guides → Footer
```

## Temperature map

- Header: cool dark forest.
- Canvas: warm neutral.
- Hero: warm editorial.
- Product cards: warm white with natural green accents.
- Benefits: pale green neutral.
- Footer: cool dark forest.

## Validation protocol

For each implemented block:

1. Run production build.
2. Use identical content and assets.
3. Capture at canonical viewport and 100% zoom.
4. Compare with the approved reference using overlay or image difference.
5. Record remaining differences by category: layout, type, color, rendering, media, responsive or behavior.
6. Correct the component or specification; never patch the page locally.

## Implementation restraint

This analysis does not authorize inventing missing visual details. When an exact value cannot be observed reliably, the implementation must use the closest existing token and record the uncertainty for visual QA.
