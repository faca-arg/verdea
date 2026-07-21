---
id: DS-COMP-010
title: Hero
version: 1.0.0
status: Approved
owner: Design System
source: Approved Home Golden Screen
---

# Hero

## Propósito

Presentar la propuesta de valor principal de VERDEA mediante una composición editorial, natural y premium. Debe conducir a explorar productos sin convertirse en un banner publicitario genérico.

## Anatomía

1. Contenedor de superficie clara o arena.
2. Columna de contenido.
3. Eyebrow opcional.
4. Título principal.
5. Texto de apoyo.
6. Grupo de CTA.
7. Imagen editorial de plantas.
8. Beneficios contextuales opcionales, únicamente cuando aparecen integrados en la Golden Screen.

## Reglas visuales

- Radio: `radius.2xl`.
- Padding desktop: entre `spacing.10` y `spacing.16` según ancho.
- Altura desktop objetivo: 360–460 px.
- Fondo: `surface.subtle`, arena aprobada o fotografía; nunca gradientes inventados.
- Título: familia display, peso bold, 36–48 px.
- Texto: 16–18 px, ancho máximo 520 px.
- Imagen: fotografía realista, iluminación natural, sin recortes agresivos.
- CTA primario: `Button primary`.
- CTA secundario: `Button secondary` o enlace textual aprobado.

## Responsive

- Desktop: dos columnas, contenido 45–52 %, imagen restante.
- Tablet: dos columnas compactas o imagen debajo según contenido.
- Mobile: una columna; texto primero, imagen después; CTAs apilados o en fila cuando haya espacio.

## Accesibilidad

- Un único `h1` cuando sea el hero principal de la página.
- Texto alternativo descriptivo si la imagen comunica contenido.
- Imagen decorativa con `alt=""` cuando no agrega información.
- Contraste AA.

## API React esperada

```ts
interface HeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryAction?: ReactNode;
  secondaryAction?: ReactNode;
  media: ReactNode;
  benefits?: ReactNode;
  className?: string;
}
```

## Prohibido

- Carrusel automático.
- Glassmorphism.
- Degradados no presentes.
- Texto centrado por defecto.
- Más de dos CTAs principales.
- Reemplazar la fotografía editorial por ilustraciones genéricas.
