# TASK-005 — Canonical Design System Board

## Objective

Validate and refine `apps/docs` until the rendered design-system board matches the approved canonical reference as closely as possible at 100% browser zoom.

## Source of truth

- Approved canonical design-system reference shared on 2026-07-21.
- `docs/03-design-system/VISUAL_RENDERING_SYSTEM.md`
- `packages/design-tokens/css-variables.css`
- `packages/ui/src/styles.css`
- `apps/docs/app/page.tsx`
- `apps/docs/app/globals.css`

## Required execution

1. Pull the latest default branch.
2. Run `pnpm install`.
3. Run typecheck and tests.
4. Start `apps/docs` at 100% browser zoom.
5. Capture the page at 1600 × 1000 or the closest available viewport.
6. Compare side by side with the canonical reference.
7. Adjust only visual fidelity: typography, density, spacing, gradients, borders, shadows, sizing, alignment and component states.
8. Do not change product architecture, component responsibilities or brand assets.
9. Repeat capture and comparison until no major visual discrepancy remains.

## Priority discrepancies

- Buttons must show layered forest-green rendering, not flat fills.
- Typography must feel compact, refined and optically aligned.
- Cards must use warm whites, delicate borders and ambient elevation.
- Product cards must have compact commerce density and full-width premium CTA.
- Header must reproduce the dark layered green surface and compact spacing.
- The complete board must fit naturally at 100% zoom.

## Acceptance criteria

- No TypeScript errors.
- No console warnings.
- All components remain keyboard accessible.
- Visual structure matches the reference in columns, proportions and density.
- Button, card, input and navigation rendering is visibly layered and premium.
- Screenshots are delivered for desktop at 100% zoom.
- Any remaining discrepancy is documented precisely rather than hidden.

## Prohibited

- Do not claim 99% fidelity without screenshot comparison.
- Do not use browser zoom below 100% to make the layout fit.
- Do not replace the official VERDEA SVG assets.
- Do not introduce a third-party component theme.
- Do not continue to Home until this task is approved.
