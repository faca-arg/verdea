---
id: DS-COMPONENT-006
title: ProductCard
version: 1.0.0
status: Approved
owner: Design System
last_updated: 2026-07-21
---

# ProductCard

## Propósito

Presentar productos de forma visual, comparable y accionable. Es uno de los componentes más sensibles de la identidad VERDEA.

## Anatomía

1. Contenedor Card.
2. Área de imagen cuadrada o casi cuadrada.
3. Wishlist icon en esquina superior derecha.
4. Badge opcional.
5. Nombre.
6. Descripción breve opcional.
7. Precio y precio anterior opcional.
8. Rating opcional.
9. Stock opcional.
10. CTA de agregar.

## Base visual

- Fondo blanco.
- Borde `color.border.subtle`.
- Radio 14px.
- Padding 12–16px.
- Imagen con `object-fit: contain` sobre fondo blanco o `surface.soft`.
- Sin sombra permanente; `shadow.sm` solo en hover.
- Transición `motion.normal`.

## Jerarquía

Imagen → nombre → precio → CTA. Los badges y metadatos no deben competir con esos cuatro elementos.

## Variantes

- `catalog`: incluye descripción, stock y botón soft.
- `featured`: imagen más grande, rating y botón outline.
- `favorite`: versión compacta para Mi cuenta.
- `recommendation`: compacta horizontal o mini-card con acción rápida.
- `order-item`: presentación informativa sin wishlist ni CTA comercial.

## Estados

- Default.
- Hover: leve elevación y escala de imagen máxima 1.02.
- Out of stock: CTA deshabilitado y mensaje explícito.
- Loading: skeleton conservando altura.
- Error de imagen: fallback botánico neutro.
- Added: confirmación breve sin reemplazar permanentemente el CTA.

## Contenido

- Nombre máximo 2 líneas.
- Descripción máxima 2 líneas.
- Precio siempre visible.
- Badge solo si aporta una característica real.
- Stock bajo se muestra sin alarmismo.

## API React esperada

```ts
interface ProductCardProps {
  product: ProductCardModel;
  variant?: 'catalog' | 'featured' | 'favorite' | 'recommendation' | 'order-item';
  showRating?: boolean;
  showStock?: boolean;
  loading?: boolean;
  onAdd?: (productId: string) => void;
  onToggleFavorite?: (productId: string) => void;
}
```

## Accesibilidad

- Alt descriptivo del producto.
- Wishlist con estado `aria-pressed`.
- Precio anterior con significado accesible.
- CTA con nombre de producto cuando el contexto no sea suficiente.

## No hacer

- Cambiar la estructura por pantalla.
- Usar fotografías con fondos inconsistentes.
- Colocar más de dos badges.
- Ocultar precio o CTA solo en hover.
- Usar sombras fuertes o movimientos amplios.
