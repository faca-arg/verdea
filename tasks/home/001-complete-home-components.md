---
id: HOME-001
title: Completar componentes base de Home
status: Ready
owner: Design System Frontend
---

# Objetivo

Completar técnicamente `StoreHeader`, `Hero`, `CategoryCard`, `BenefitsStrip`, `BenefitItem` y la variante `featured` de `ProductCard` antes de ensamblar la Home.

# Trabajo requerido

- Implementar o terminar cada componente en `packages/ui`.
- Exportarlo desde `packages/ui/src/index.ts`.
- Agregar stories con estados desktop y mobile.
- Agregar tests de render e interacción principal.
- Incorporar ejemplos en `apps/docs`.
- Usar íconos SVG lineales; no emojis.
- Mantener pesos de texto `400` o `500` en botones y acciones.

# Criterio automático de finalización

La tarea queda `Done` cuando typecheck, tests, build de Storybook y build de `apps/docs` pasan, y los seis componentes aparecen en ambos entornos de revisión.

# Prohibido

- Construir la Home.
- Crear estilos locales de pantalla para resolver componentes.
- Rediseñar componentes ya aprobados.
