---
id: STOREFRONT-HOME-000
version: 1.0.0
status: Locked
owner: Product Architecture
source_of_truth: true
last_updated: 2026-07-21
---

# VERDEA — Home Master Specification

## 1. Objective

This document is the implementation contract for the public VERDEA Home. It governs component boundaries, visual fidelity, sequence, responsive behavior, validation and delivery.

The Home must feel like a refined commerce product for viveros and garden centers: natural, calm, premium, editorial, modern and trustworthy. It must never resemble a generic marketplace template, a Bootstrap screen, a Material UI demo or a default shadcn composition.

## 2. Source-of-truth precedence

When sources conflict, use this order:

1. Approved Golden Screens.
2. `docs/04-storefront/01_REFERENCE_ANALYSIS.md`.
3. `docs/03-design-system/VISUAL_RENDERING_SYSTEM.md`.
4. `docs/02-brand/BRAND_BIBLE.md`.
5. `packages/design-tokens`.
6. `packages/ui`.

Code never overrides the specification. A mismatch must be corrected in code or documented through an RFC.

## 3. Canonical viewports

- Master desktop: `1672 × 941`.
- Standard desktop: `1440 × 900`.
- Tablet portrait: `768 × 1024`.
- Mobile: `390 × 844`.

Visual review must be made at browser zoom `100%`.

## 4. Page composition

The Home contains only these blocks and in this order:

1. `StoreHeader`.
2. `SecondaryCategoryNavigation`.
3. `Hero`.
4. `CategoryGrid`.
5. `FeaturedProducts`.
6. `EditorialCollections`.
7. `BenefitsStrip`.
8. `GuidesSection`.
9. `StoreFooter`.

No block may be added, removed or reordered without an approved RFC.

## 5. React architecture

```text
HomePage
├── StoreHeader
├── SecondaryCategoryNavigation
├── Hero
├── CategoryGrid
│   └── CategoryCard[]
├── FeaturedProducts
│   └── ProductCard[variant="featured"][]
├── EditorialCollections
│   └── CollectionCard[]
├── BenefitsStrip
│   └── BenefitItem[]
├── GuidesSection
│   └── GuideCard[]
└── StoreFooter
```

Each block is an independent component, Storybook story and test target. Large JSX-only page assemblies are prohibited.

## 6. Layout system

- Desktop container max-width: `1360px`.
- Desktop outer padding: `24px` minimum, visually aligned with the approved references.
- Tablet padding: `24px`.
- Mobile padding: `16px`.
- Primary grid: `12 columns`.
- Desktop column gap: `24px`.
- Mobile gap: `12px` to `16px` depending on component.
- Major section rhythm: `72px–96px`.
- Internal section rhythm: `24px–48px`.

Values must map to approved tokens. Do not create one-off spacing values inside Home.

## 7. Visual language

The page must use:

- warm whites instead of dominant pure white;
- dark forest surfaces with layered green illumination;
- subtle multi-layer shadows;
- low-contrast green-tinted borders;
- regular and medium typography rather than excessive bold;
- linear SVG icons with rounded caps and joins;
- compact but breathable density;
- editorial product imagery with controlled backgrounds.

Flat green fills, emojis, heavy bold labels, default browser controls and generic card styling are prohibited.

## 8. Typography

- Interface family: `Inter Variable`.
- Display family: `Manrope` only where already approved by the Design System.
- Button/action weight: `500`.
- Navigation weight: `400–500`.
- Product title weight: `500–600`.
- Section title weight: `600–700` only where needed for hierarchy.
- Avoid weight `700+` in small controls.
- Use optical sizing and antialiasing where supported.

## 9. Interaction language

All interactive elements must include:

- default;
- hover;
- pressed;
- focus-visible;
- disabled;
- loading where relevant.

Animation duration: `140ms–260ms`.
Animation curve: approved `ease-out` / standard curves.
No bounce, exaggerated spring, overshoot or decorative motion.

## 10. Responsive behavior

### Desktop

- Full header and secondary navigation visible.
- Hero uses asymmetric editorial composition.
- Product and category grids keep reference density.

### Tablet

- Search remains prominent.
- Header actions may reduce.
- Hero can stack while preserving emphasis order.
- Grids reduce columns.

### Mobile

- Header becomes compact.
- Search moves to its own row when needed.
- Category navigation becomes horizontal scroll.
- Hero stacks vertically.
- Product grid uses two columns where legible, otherwise one.
- Touch targets remain at least `44 × 44px` where required.

## 11. Accessibility

- Semantic landmarks are mandatory.
- Keyboard navigation must work end-to-end.
- Focus-visible must be clearly perceivable and visually consistent.
- Images require meaningful alt text.
- Icon-only actions require accessible labels.
- Text and controls must meet WCAG AA contrast.
- Motion must honor `prefers-reduced-motion`.

## 12. Performance

Targets:

- Lighthouse Performance ≥ 95 on production build.
- Accessibility ≥ 95.
- Best Practices ≥ 95.
- SEO ≥ 95.
- LCP < 2.5s.
- CLS < 0.05.
- No avoidable client-side rendering for static content.
- Responsive images and explicit dimensions required.

## 13. Implementation sequence

Mandatory order:

1. Complete and approve shared Home components.
2. Implement `StoreHeader` and `SecondaryCategoryNavigation`.
3. Implement `Hero` and `CategoryGrid`.
4. Implement `FeaturedProducts` and `BenefitsStrip`.
5. Implement `EditorialCollections`, `GuidesSection` and `StoreFooter`.
6. Assemble Home.
7. Run visual, responsive, accessibility and performance QA.

A later phase may not compensate for an unfinished earlier phase with local CSS.

## 14. Prohibited implementation shortcuts

- Home-specific copies of Design System components.
- New colors, shadows, radii or typography scales.
- Emoji icons.
- Inline styles used to reproduce the Golden Screen.
- CSS selectors that reach into unrelated components.
- Duplicated featured ProductCard markup.
- Placeholder imagery in final delivery.
- Unreviewed design decisions by an implementation agent.

## 15. Definition of Done

Home is complete only when:

- all nine blocks are present in the approved order;
- each block uses approved `@verdea/ui` components;
- visual comparison at canonical desktop is materially indistinguishable;
- responsive screenshots pass at all canonical viewports;
- no local design tokens exist;
- typecheck passes;
- tests pass;
- Storybook builds;
- Docs builds;
- accessibility checks pass;
- performance targets pass;
- remaining visual differences are documented and approved.

## 16. AI implementation rule

Any AI or developer must read this document and `01_REFERENCE_ANALYSIS.md` before editing Home.

When a requirement is missing or contradictory:

1. Stop.
2. Identify the exact ambiguity.
3. Point to the affected component and source.
4. Propose the smallest specification amendment.
5. Wait for approval.

Do not infer, invent or silently complete design gaps.
