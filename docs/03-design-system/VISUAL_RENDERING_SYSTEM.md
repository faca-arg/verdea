---
id: DESIGN-RENDER-001
title: VERDEA Visual Rendering System
version: 1.0.0
status: Approved
owner: Design System
last_updated: 2026-07-21
depends_on:
  - docs/02-brand/BRAND_BIBLE.md
  - docs/03-design-system/GOLDEN_SCREEN_SPECIFICATION.md
  - packages/design-tokens/design-tokens.json
affects:
  - packages/design-tokens/css-variables.css
  - packages/ui/src/styles.css
  - apps/docs
source_of_truth: true
---

# VERDEA Visual Rendering System

## 1. Objetivo

Definir el acabado visual obligatorio de VERDEA. Este documento no cambia la arquitectura, los layouts ni la anatomía de los componentes: gobierna cómo deben verse al renderizarse.

La referencia son las Golden Screens aprobadas de Home, Catálogo, Producto, Checkout y Mi cuenta. El resultado esperado no es una interfaz genérica correcta, sino una interfaz cálida, refinada, ligera y comercial.

## 2. Principios de renderizado

1. VERDEA evita blancos fríos y negros absolutos en superficies extensas.
2. El verde principal nunca debe sentirse plano ni saturado.
3. Las sombras sugieren profundidad sin hacer visibles sus capas.
4. Los bordes separan; no dibujan cajas duras.
5. La tipografía debe sentirse compacta, limpia y silenciosa.
6. Los controles tienen presencia táctil, no apariencia de framework.
7. La densidad es compacta en comercio y cómoda en formularios.
8. La fotografía domina; la UI acompaña.

## 3. Superficies

### Canvas

- Fondo principal: `#FBFCF9`.
- No usar `#FFFFFF` como fondo general.
- Puede llevar un gradiente radial ambiental casi imperceptible:
  `radial-gradient(circle at 50% 0%, rgba(255,255,255,.96), rgba(250,251,248,.98) 52%, #F7F9F5 100%)`.

### Surface principal

Las cards usan una superficie cálida de tres capas:

```css
background:
  linear-gradient(180deg, rgba(255,255,255,.98), rgba(253,254,252,.98));
border: 1px solid rgba(17, 67, 40, .10);
box-shadow:
  0 1px 0 rgba(255,255,255,.92) inset,
  0 1px 2px rgba(7,54,36,.035),
  0 8px 24px rgba(7,54,36,.045);
```

### Surface elevada

Para menús, resumen de checkout, tarjetas destacadas y elementos flotantes:

```css
box-shadow:
  0 1px 0 rgba(255,255,255,.95) inset,
  0 2px 6px rgba(7,54,36,.05),
  0 16px 42px rgba(7,54,36,.09);
```

## 4. Verde de acción

El botón primario no usa un relleno plano. Debe renderizarse con una transición vertical muy sutil:

```css
background: linear-gradient(180deg, #176F43 0%, #0F5C36 56%, #0B4E2F 100%);
border-color: rgba(3,44,27,.28);
box-shadow:
  0 1px 0 rgba(255,255,255,.16) inset,
  0 -1px 0 rgba(3,44,27,.20) inset,
  0 5px 14px rgba(14,75,49,.14);
```

Hover:

```css
background: linear-gradient(180deg, #1B7748 0%, #12643A 58%, #0D5632 100%);
box-shadow:
  0 1px 0 rgba(255,255,255,.18) inset,
  0 -1px 0 rgba(3,44,27,.22) inset,
  0 8px 20px rgba(14,75,49,.18);
transform: translateY(-1px);
```

Pressed:

```css
transform: translateY(0);
box-shadow:
  0 1px 3px rgba(3,44,27,.16) inset,
  0 2px 6px rgba(14,75,49,.10);
```

## 5. Tipografía

### Familias

- Interfaz: `Inter Variable`, fallback `Inter`.
- Títulos: `Manrope Variable`, fallback `Manrope`.
- Editorial: `DM Serif Display`, únicamente en campañas y colecciones.

### Ajustes globales

```css
font-synthesis: none;
text-rendering: geometricPrecision;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
font-feature-settings: "liga" 1, "calt" 1, "ss01" 1;
```

### Escala compacta

- Texto base UI: 13px en desktop.
- Inputs y botones: 13px.
- Labels: 11.5–12px.
- Títulos de card: 13–14px.
- Precios: 15–18px.
- Títulos de sección: 22–28px según jerarquía.
- Line-height general: 1.35–1.5.

No usar tamaños de 16px para todo. Las Golden Screens trabajan con una densidad visual menor.

## 6. Bordes y radios

- Bordes estándar: `rgba(17,67,40,.10)`.
- Bordes fuertes: `rgba(17,67,40,.18)`.
- Divisores: `rgba(17,67,40,.08)`.
- Card: 12–14px.
- Input: 9–10px.
- Botón: 8–10px.
- Pills: 999px.

No exagerar radios. VERDEA debe sentirse moderno, no infantil.

## 7. Inputs y Search

Los inputs usan fondo cálido, borde fino y una sombra interior mínima:

```css
background: linear-gradient(180deg, #FFFFFF, #FEFFFD);
border: 1px solid rgba(17,67,40,.12);
box-shadow:
  0 1px 0 rgba(255,255,255,.9) inset,
  0 1px 2px rgba(7,54,36,.025);
```

Focus:

```css
border-color: rgba(21,94,55,.66);
box-shadow:
  0 0 0 3px rgba(73,166,109,.11),
  0 1px 0 rgba(255,255,255,.9) inset;
```

Altura desktop: 40–44px. No aumentar el alto para compensar tipografía grande.

## 8. Cards

### Jerarquía

Una card nunca debe competir con su contenido. Debe percibirse por contraste suave, borde y sombra ambiental.

### Hover

Solo cards interactivas:

```css
transform: translateY(-2px);
box-shadow:
  0 1px 0 rgba(255,255,255,.96) inset,
  0 4px 10px rgba(7,54,36,.05),
  0 18px 38px rgba(7,54,36,.08);
```

Duración: 180ms. Curva: `cubic-bezier(.22,1,.36,1)`.

## 9. ProductCard

- Imagen sobre superficie `#F7F8F5`, nunca gris frío.
- Padding del media: 12–14px.
- Contenido: 12–14px.
- Gap interno: 4–6px.
- Título: 13px semibold.
- Descripción: 11.5–12px.
- Precio: 15px bold.
- Stock: 11.5px medium.
- CTA: 36px de alto en catálogo compacto.
- La imagen debe ocupar entre 62% y 70% del media visible.

## 10. Header

### Store Header claro

- Fondo: `rgba(255,255,255,.94)`.
- `backdrop-filter: blur(16px) saturate(1.08)`.
- Borde inferior: `rgba(17,67,40,.08)`.
- Sombra: `0 8px 28px rgba(7,54,36,.045)`.

### Header verde

- Fondo: gradiente horizontal muy leve entre `#032C1B`, `#043622` y `#032C1B`.
- Sin brillo evidente.
- El logo oficial debe conservarse sin filtros.

## 11. Iconografía

- Stroke: 1.6–1.8px.
- `stroke-linecap: round`.
- `stroke-linejoin: round`.
- Tamaño frecuente: 18–20px.
- Color por defecto: `#26362D`.
- Iconos verdes solo para estado, acción o marca.

## 12. Escala y densidad

La revisión debe hacerse a zoom de navegador 100%. Está prohibido ajustar el producto para que solo funcione visualmente al 90%.

En viewport 1920px:

- Contenedor máximo: 1480px.
- UI base: 13px.
- Gaps principales: 18–24px.
- Cards de catálogo: 210–250px según grilla.

## 13. Estados

Todos los componentes deben tener:

- default;
- hover;
- focus-visible;
- active;
- disabled;
- loading cuando corresponda;
- error y success en campos.

Los estados deben cambiar luz, borde y elevación; no únicamente el color.

## 14. Reglas prohibidas

- Fondos primarios completamente planos.
- Sombras negras fuertes.
- Blanco puro como canvas general.
- Texto base de 16px en paneles densos.
- Bordes grises sin matiz verde.
- `box-shadow` única y pesada.
- Radios superiores a 16px en controles comunes.
- Reescribir el logo con texto HTML.
- Aplicar glassmorphism evidente.

## 15. Criterio de aceptación visual

La implementación se aprueba cuando:

1. Puede revisarse al 100% de zoom sin sentirse sobredimensionada.
2. Los botones presentan profundidad suave y no relleno plano.
3. Las cards se perciben cálidas, ligeras y refinadas.
4. La jerarquía tipográfica coincide con las Golden Screens.
5. El contraste y la accesibilidad cumplen WCAG AA.
6. Las capturas comparativas muestran coherencia en color, densidad, borde, sombra y escala.

## Historial

- 1.0.0 — Se establece el sistema de renderizado premium derivado de las Golden Screens.
