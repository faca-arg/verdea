---
id: DS-COMP-013
title: StoreHeader
version: 1.0.0
status: Approved
owner: Design System
source: Approved Store Golden Screens
---

# StoreHeader

## Propósito

Extender el `Header` base con todas las funciones necesarias para la tienda pública sin duplicar su identidad.

## Anatomía

### Fila principal

1. Lockup oficial VERDEA.
2. Activador de categorías.
3. Search principal.
4. Ubicación o zona de envío.
5. Cuenta.
6. Favoritos.
7. Carrito con contador.

### Navegación secundaria

- Categorías principales.
- Estado activo.
- Ofertas con tratamiento semántico discreto.
- Scroll horizontal en pantallas reducidas.

## Reglas visuales

- Fila principal: `layout.headerMainHeight`.
- Fila secundaria: `layout.headerSecondaryHeight`.
- Fondo principal: `color.brand.forest950` cuando corresponda a la Golden Screen; navegación secundaria clara.
- Lockup: siempre usar el SVG oficial.
- Search: elemento de mayor flexibilidad horizontal.
- Íconos: familia lineal coherente, 20–22 px.
- Carrito: badge pequeño, legible y accesible.
- Sticky permitido sin sombras fuertes.

## Responsive

- Desktop: dos filas completas.
- Tablet: simplificar ubicación y etiquetas de acciones.
- Mobile: marca, búsqueda o activador, cuenta y carrito; categorías en scroll horizontal o drawer.

## API React esperada

```ts
interface StoreHeaderProps {
  logoSrc: string;
  search: ReactNode;
  categoryTrigger?: ReactNode;
  location?: ReactNode;
  account?: ReactNode;
  wishlist?: ReactNode;
  cart?: ReactNode;
  categories: Array<{
    id: string;
    label: string;
    href: string;
    active?: boolean;
    emphasis?: "default" | "offer";
  }>;
}
```

## Accesibilidad

- Landmarks correctos.
- Navegaciones principal y secundaria etiquetadas.
- Todos los icon buttons con nombre accesible.
- Drawer móvil con control de foco.

## Prohibido

- Recrear el logo con texto e ícono.
- Mezclar fondo oscuro y claro sin respetar la variante aprobada.
- Ocultar el carrito en mobile.
- Inventar una tercera fila.
