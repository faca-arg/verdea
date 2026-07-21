---
id: HOME-006
title: Ensamblar Home oficial de VERDEA
status: Blocked
owner: Storefront Frontend
depends_on:
  - HOME-002
  - HOME-003
  - HOME-004
  - HOME-005
---

# Objetivo

Ensamblar la Home pública en `apps/store` usando exclusivamente los componentes aprobados.

# Orden de la página

1. StoreHeader + navegación secundaria.
2. Hero.
3. Categorías destacadas.
4. Productos destacados.
5. Colecciones editoriales.
6. BenefitsStrip.
7. Guías y consejos.
8. StoreFooter.

# Reglas

- La página solo compone componentes; no redefine su apariencia.
- CSS de página limitado a grid, orden, anchuras máximas y separación entre secciones.
- No duplicar markup de componentes.
- Contenido y assets deben estar tipados y separados de la vista.

# Definition of Done

- fidelidad visual revisada a 1672×941, 1440×900, 768×1024 y 390×844;
- zoom 100%;
- typecheck, tests y build exitosos;
- navegación por teclado y foco visibles;
- sin errores de consola ni warnings React;
- comparación visual documentada con diferencias pendientes.
