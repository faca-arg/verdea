---
id: HOME-005
title: Colecciones editoriales, guías y footer
status: Blocked
owner: Storefront Frontend
depends_on: HOME-004
---

# Objetivo

Completar los bloques inferiores de Home con componentes compartidos y contenido presente en las Golden Screens.

# Alcance

- `EditorialCollectionCard`: banner editorial con imagen, título, cantidad o subtítulo y CTA discreto;
- `GuideCard`: consejo o guía de cuidado con imagen, categoría y enlace;
- `StoreFooter`: marca, navegación, ayuda, contacto, medios de pago y datos legales configurables.

# Reglas

- Crear primero la especificación del componente dentro de `docs/03-design-system/components/` si no existe.
- Implementar en `packages/ui`, no dentro de Home.
- No usar imágenes genéricas como entrega final.
- Mantener íconos SVG, pesos 400/500 y el Rendering System aprobado.

# Entregables

Stories, tests, ejemplos en `apps/docs`, responsive y capturas desktop/mobile.
