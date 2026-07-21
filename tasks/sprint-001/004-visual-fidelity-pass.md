---
id: TASK-004
title: Aplicar Visual Rendering System
status: Ready
owner: Design System
priority: Critical
depends_on:
  - TASK-001
  - docs/03-design-system/VISUAL_RENDERING_SYSTEM.md
---

# Objetivo

Validar y ajustar la fidelidad visual de `apps/docs` y Storybook contra las Golden Screens, sin cambiar anatomía, contratos de props ni arquitectura.

# Leer antes de ejecutar

1. `.foundation/`
2. `.ai/`
3. `docs/02-brand/BRAND_BIBLE.md`
4. `docs/03-design-system/GOLDEN_SCREEN_SPECIFICATION.md`
5. `docs/03-design-system/VISUAL_RENDERING_SYSTEM.md`
6. `packages/design-tokens/css-variables.css`
7. `packages/ui/src/styles.css`

# Alcance permitido

- Ajustar tokens visuales.
- Ajustar CSS de componentes existentes.
- Ajustar escala tipográfica, line-height y tracking.
- Ajustar sombras multicapa, bordes, fondos y gradientes sutiles.
- Ajustar densidad, padding y gaps sin alterar la anatomía.
- Corregir responsive y estados visuales.
- Añadir historias de estados existentes si faltan.

# Prohibido

- Crear pantallas de producto.
- Crear nuevos componentes.
- Cambiar las APIs públicas de los componentes.
- Cambiar logo, paleta base o dirección de arte.
- Aplicar gradientes notorios, glassmorphism fuerte o sombras negras.
- Optimizar la interfaz para zoom 90%.
- Marcar la tarea como completa sin capturas al 100% de zoom.

# Procedimiento

1. Actualizar la rama local.
2. Ejecutar `pnpm install`.
3. Ejecutar `pnpm typecheck` y `pnpm test`.
4. Levantar `pnpm docs` y `pnpm storybook`.
5. Revisar a zoom 100% en 1920×1080, 1440×900, 1024×768 y 390×844.
6. Comparar Button, Input, Search, Card, ProductCard, FilterSidebar, CheckoutSummary, Header y AccountSidebar contra las Golden Screens.
7. Corregir exclusivamente discrepancias de renderizado.
8. Repetir pruebas y builds.
9. Generar capturas comparativas antes/después.
10. Detenerse y esperar aprobación antes de ejecutar TASK-002 o TASK-003.

# Criterios de aceptación

- La UI se siente refinada a zoom 100%.
- Botones primarios presentan profundidad sutil y estados completos.
- Cards no parecen cajas genéricas.
- Los blancos son cálidos y los bordes tienen matiz verde.
- La tipografía es más compacta y coincide con la densidad de las referencias.
- Inputs y Search tienen foco refinado sin borde agresivo.
- ProductCard mejora imagen, jerarquía, precio, stock y CTA.
- No hay errores TypeScript, tests fallidos ni warnings críticos.
- Apps/docs y Storybook compilan.

# Entrega esperada

- Lista de archivos modificados.
- Resultados de typecheck, tests y builds.
- Puertos locales.
- Capturas a zoom 100%.
- Diferencias que todavía requieran decisión de diseño.
