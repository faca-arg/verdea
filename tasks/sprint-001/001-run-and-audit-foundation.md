---
id: TASK-001
title: Ejecutar y auditar la fundación visual
status: Ready
owner: Frontend
priority: Critical
---

# Objetivo

Clonar y ejecutar el monorepo, validar `apps/docs` y Storybook, y corregir únicamente errores técnicos que impidan revisar los componentes existentes.

# Lecturas obligatorias

- `.foundation/PROJECT_CONSTITUTION.md`
- `.foundation/PRODUCT_OPERATING_SYSTEM.md`
- `.ai/AI_DEVELOPMENT_CHARTER.md`
- `docs/02-brand/BRAND_BIBLE.md`
- `docs/03-design-system/GOLDEN_SCREEN_SPECIFICATION.md`
- `packages/ui/README.md`

# Acciones

1. Ejecutar `pnpm install`.
2. Ejecutar `pnpm typecheck`.
3. Ejecutar `pnpm test`.
4. Ejecutar `pnpm build:docs`.
5. Ejecutar `pnpm build-storybook`.
6. Corregir dependencias, imports, TypeScript, configuración de Turbo, Next o Storybook si fuera necesario.
7. Levantar `pnpm docs` y `pnpm storybook`.

# Prohibido

- Cambiar diseño, colores, radios o tipografía.
- Crear componentes de producto nuevos.
- Modificar la Golden Screen.
- Reescribir activos de marca.
- Continuar con Home.

# Entregables

- `apps/docs` funcionando en localhost.
- Storybook funcionando en localhost.
- Informe de errores corregidos.
- Resultado de comandos.
- Captura general de la página de revisión.

# Definition of Done

- Typecheck sin errores.
- Tests sin errores.
- Build de docs exitoso.
- Build de Storybook exitoso.
- No existen cambios visuales no autorizados.
