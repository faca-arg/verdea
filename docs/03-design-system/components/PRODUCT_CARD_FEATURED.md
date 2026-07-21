---
id: DS-COMP-014
title: ProductCard Featured Variant
version: 1.0.0
status: Approved
owner: Design System
source: Approved Home Golden Screen
---

# ProductCard — variante Featured

## Propósito

Mostrar productos destacados en Home sin crear un componente comercial distinto. Debe reutilizar la anatomía y comportamiento de `ProductCard`.

## Diferencias permitidas respecto de la variante estándar

- Área de imagen ligeramente más alta.
- Badge editorial o promocional opcional.
- Precio anterior y descuento opcionales.
- CTA más visible según Golden Screen.
- Ancho adaptable a carrusel o grilla destacada.

## Elementos invariantes

- Tipografía.
- Radio.
- Tratamiento de imagen.
- Acción de favorito.
- Jerarquía nombre → descripción → precio → stock → CTA.
- Estados de accesibilidad, loading y error.

## API esperada

Extender `ProductCardProps`:

```ts
type ProductCardVariant = "standard" | "featured";

interface ProductCardProps {
  variant?: ProductCardVariant;
  previousPrice?: string;
  discountLabel?: string;
}
```

## Reglas

- `featured` no debe duplicar JSX ni estilos completos.
- Utilizar modificador de clase o variantes tipadas.
- No crear `FeaturedProductCard` como componente separado salvo ADR.

## Prohibido

- Cambiar el color de marca por producto.
- Usar overlays oscuros sobre la imagen.
- Ocultar precio o CTA en desktop.
- Agregar rating si la fuente de verdad no lo muestra.
