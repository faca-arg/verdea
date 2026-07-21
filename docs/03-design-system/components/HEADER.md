---
id: DS-COMPONENT-001
title: Header
version: 1.0.0
status: Approved
owner: Design System
last_updated: 2026-07-21
---

# Header

## Propósito

Alojar la identidad VERDEA, búsqueda, exploración, ubicación y acciones personales sin competir con el contenido. Existen variantes públicas, checkout y cuenta.

## Anatomía

1. Logo oficial SVG.
2. Navegación o botón de categorías.
3. Search.
4. Ubicación o sucursal.
5. Acciones: ofertas, favoritos, notificaciones, cuenta y carrito.
6. Navegación secundaria opcional.

## Variantes

### `store`
Fondo `color.brand.forest950`, logo claro, búsqueda central y acciones en blanco. Alto principal `layout.headerMainHeight` (72px). Puede sumar navegación secundaria blanca de 48px.

### `checkout`
Fondo verde oscuro, sin menú comercial. Solo logo, mensaje de compra segura y canal de ayuda. Reduce distracciones.

### `account`
Fondo `surface.default`, dentro del shell con sidebar. Muestra búsqueda, sucursal, notificaciones, usuario y carrito.

### `product-light`
Fondo blanco, logo oscuro, categorías verdes y acciones de cuenta; utilizada en detalle de producto.

## Layout

- Sticky en storefront y cuenta.
- Contenedor máximo: `layout.containerMax`.
- Padding horizontal desktop: 24px.
- Gap entre acciones: 20–24px.
- Search ocupa el espacio flexible con máximo aproximado de 640px.
- El logo siempre usa el SVG oficial; nunca se reconstruye con texto.

## Estados

- Scroll: mantiene altura; puede sumar borde inferior sutil.
- Loading: skeleton para ubicación y usuario, nunca para el logo.
- Menú abierto: focus trap y cierre con Escape.
- Carrito con badge: máximo visual `99+`.

## Responsive

- `<1024px`: ocultar navegación secundaria extensa; categorías pasan a drawer.
- `<768px`: ubicación y textos de acciones se simplifican a iconos; búsqueda puede ocupar segunda fila.
- `<640px`: logo compacto, buscador visible o accionable; carrito y menú prioritarios.

## Accesibilidad

- `header` semántico y `nav` con etiqueta.
- Todas las acciones con `aria-label`.
- Indicador de página actual con `aria-current`.
- Contraste AA sobre fondos verdes.

## API React esperada

```ts
type HeaderVariant = 'store' | 'checkout' | 'account' | 'product-light';

interface HeaderProps {
  variant: HeaderVariant;
  cartCount?: number;
  user?: { name: string; avatarUrl?: string };
  location?: { name: string; detail?: string };
  showSecondaryNav?: boolean;
  onOpenCategories?: () => void;
}
```

## No hacer

- Cambiar el logo por un icono genérico.
- Agregar sombras fuertes o gradientes.
- Introducir más de dos niveles horizontales.
- Mostrar navegación comercial completa durante checkout.
