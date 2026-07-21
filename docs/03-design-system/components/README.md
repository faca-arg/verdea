---
id: DS-COMPONENTS-000
title: VERDEA Component Library
version: 1.0.0
status: Approved
owner: Design System
last_updated: 2026-07-21
depends_on:
  - docs/02-brand/BRAND_BIBLE.md
  - docs/03-design-system/GOLDEN_SCREEN_SPECIFICATION.md
  - packages/design-tokens/design-tokens.json
affects:
  - apps/store
  - apps/admin
  - packages/ui
source_of_truth: true
---

# VERDEA Component Library

Esta carpeta define los componentes visuales y de interacción que deben utilizarse para reconstruir las pantallas aprobadas de VERDEA.

## Componentes v1

1. [Header](HEADER.md)
2. [Search](SEARCH.md)
3. [Button](BUTTON.md)
4. [Input](INPUT.md)
5. [Card](CARD.md)
6. [ProductCard](PRODUCT_CARD.md)
7. [FilterSidebar](FILTER_SIDEBAR.md)
8. [CheckoutSummary](CHECKOUT_SUMMARY.md)
9. [AccountSidebar](ACCOUNT_SIDEBAR.md)

## Reglas globales

- Consumir exclusivamente tokens de `packages/design-tokens/design-tokens.json`.
- No copiar estilos por pantalla.
- No usar estilos predeterminados visibles de shadcn/ui, Material UI o Bootstrap.
- Cada componente debe cubrir default, hover, focus, active, disabled, loading y error cuando corresponda.
- Todo componente interactivo debe tener foco visible y nombre accesible.
- Las variantes deben responder a una diferencia real de intención, no a necesidades aisladas de una pantalla.
- Cambios estructurales requieren actualizar esta documentación antes de modificar React.

## Definition of Done

Un componente se considera listo cuando tiene:

- especificación aprobada;
- API de props tipada;
- implementación React;
- historias de Storybook;
- pruebas de interacción;
- pruebas visuales en desktop y mobile;
- accesibilidad WCAG AA;
- documentación de usos permitidos y prohibidos.
