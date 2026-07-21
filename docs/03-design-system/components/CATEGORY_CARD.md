---
id: DS-COMP-011
title: CategoryCard
version: 1.0.0
status: Approved
owner: Design System
source: Approved Home Golden Screen
---

# CategoryCard

## Propósito

Permitir explorar familias de productos mediante una tarjeta visual horizontal, clara y editorial.

## Anatomía

1. Contenedor enlazable completo.
2. Bloque de texto con nombre de categoría.
3. Descripción o cantidad opcional.
4. Imagen o recorte de producto en el extremo derecho.
5. Indicador de navegación opcional.

## Reglas visuales

- Altura desktop: 120–156 px.
- Radio: `radius.lg` o `radius.xl` según densidad.
- Padding: `spacing.5` a `spacing.6`.
- Fondo: superficie pastel aprobada, nunca color saturado dominante.
- Título: 16–20 px, semibold/bold.
- Imagen: ocupar entre 34 % y 46 % del ancho, `object-fit: contain`.
- Borde sutil opcional; sombra máxima `shadow.xs`.
- Hover: elevación máxima 2 px y cambio sutil de borde.

## Responsive

- Desktop: grilla de 3 o 4 columnas según pantalla.
- Tablet: 2 columnas.
- Mobile: carrusel horizontal accesible o una columna.

## API React esperada

```ts
interface CategoryCardProps {
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  tone?: "leaf" | "sand" | "orange" | "neutral";
}
```

## Accesibilidad

- Toda la tarjeta funciona como enlace único.
- El nombre de la categoría debe estar disponible para lectores de pantalla.
- Foco visible.

## Prohibido

- Botones anidados dentro del enlace.
- Sombras fuertes.
- Texto sobre fotografías con bajo contraste.
- Íconos genéricos como reemplazo de la imagen de producto.
