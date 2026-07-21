---
id: TASK-002
title: Implementar componentes faltantes para Home
status: Ready
owner: Design System Frontend
priority: Critical
depends_on:
  - TASK-001
---

# Contexto

AntiGravity detectó correctamente que Home no puede construirse todavía con la biblioteca existente. Esta tarea resuelve únicamente ese bloqueo.

# Objetivo

Implementar y revisar los componentes necesarios para Home, sin construir todavía la página Home.

# Componentes a implementar

1. `Hero`.
2. `CategoryCard`.
3. `BenefitsStrip` y `BenefitItem`.
4. `StoreHeader`, reutilizando el `Header` base cuando sea posible.
5. Variante `featured` de `ProductCard`.

# Fuentes de verdad

- `docs/03-design-system/GOLDEN_SCREEN_SPECIFICATION.md`
- `docs/03-design-system/components/HERO.md`
- `docs/03-design-system/components/CATEGORY_CARD.md`
- `docs/03-design-system/components/BENEFITS_STRIP.md`
- `docs/03-design-system/components/STORE_HEADER.md`
- `docs/03-design-system/components/PRODUCT_CARD.md`
- `docs/03-design-system/components/PRODUCT_CARD_FEATURED.md`
- `packages/design-tokens/design-tokens.json`
- `packages/design-tokens/css-variables.css`

# Implementación requerida

- Agregar componentes a `packages/ui/src` con TypeScript strict.
- Exportarlos desde `packages/ui/src/index.ts`.
- Crear estilos con tokens existentes.
- Agregar historias de Storybook para todas las variantes.
- Agregar tests de render, accesibilidad básica e interacción principal.
- Incorporarlos a la página visual de `apps/docs`.

# Restricciones

- No construir Home.
- No crear nuevos colores, radios, sombras o escalas tipográficas.
- No modificar logo ni activos de marca.
- No utilizar Material UI, Bootstrap ni estilos predeterminados de shadcn.
- No copiar JSX completo para la variante featured.
- No agregar funcionalidades no visibles en las Golden Screens.

# Revisión visual obligatoria

Mostrar los componentes en los viewports:

- 1672 × 941.
- 1440 × 900.
- 768 × 1024.
- 390 × 844.

# Entregables

- Código React.
- Stories.
- Tests.
- Página de revisión actualizada.
- Capturas desktop y mobile.
- Lista de diferencias todavía existentes respecto de la referencia.

# Definition of Done

- Typecheck, tests y builds exitosos.
- Sin warnings de React.
- Foco visible y navegación por teclado.
- Componentes visualmente aprobables en `apps/docs` y Storybook.
- Ninguna página de producto construida todavía.
