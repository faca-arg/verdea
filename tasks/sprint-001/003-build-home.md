---
id: TASK-003
title: Construir Home oficial de VERDEA
status: Blocked
owner: Storefront Frontend
priority: High
depends_on:
  - TASK-001
  - TASK-002
unblock_condition: Componentes de TASK-002 aprobados visualmente
---

# Objetivo

Construir la Home pública de VERDEA utilizando exclusivamente componentes aprobados de `@verdea/ui`.

# Estado actual

**BLOQUEADA.** No ejecutar hasta que TASK-002 esté terminada y aprobada mediante revisión de `apps/docs` y Storybook.

# Fuentes de verdad

- Home Golden Screen.
- `docs/03-design-system/GOLDEN_SCREEN_SPECIFICATION.md`.
- `docs/02-brand/BRAND_BIBLE.md`.
- `packages/ui`.
- `packages/design-tokens`.

# Componentes permitidos

- `StoreHeader`.
- `Search`.
- `Hero`.
- `Button`.
- `CategoryCard`.
- `BenefitsStrip`.
- `ProductCard` variante `featured`.
- `Card`.

# Regla de bloqueo

Si durante la implementación falta un componente, variante o comportamiento:

1. Detenerse.
2. Identificar el faltante.
3. Proponer una especificación o extensión concreta.
4. No crear el componente dentro de Home.
5. Esperar aprobación.

# Prohibido

- CSS local que replique componentes existentes.
- Componentes internos de una sola pantalla para resolver diferencias visuales.
- Reinterpretar la referencia.
- Modificar tokens.
- Inventar secciones.
- Usar placeholders como entrega final.

# Definition of Done

Se completará después de la aprobación de TASK-002 y de la definición final de contenido de Home.
