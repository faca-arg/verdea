---
id: DS-COMPONENT-008
title: CheckoutSummary
version: 1.0.0
status: Approved
owner: Design System
last_updated: 2026-07-21
---

# CheckoutSummary

## Propósito

Mantener visible el contenido económico del pedido y permitir confirmar la compra con confianza.

## Base visual

- Card blanca con borde sutil y radio 14–16px.
- Padding 20–24px.
- Sticky en desktop con offset bajo el header.
- Ancho aproximado: 360–420px según viewport.
- CTA principal de ancho completo.

## Anatomía

1. Título y cantidad de artículos.
2. Acción “Editar carrito”.
3. Líneas de producto con miniatura, nombre, precio, cantidad y total.
4. Cupón o código de descuento.
5. Subtotal.
6. Envío.
7. Descuentos.
8. Impuestos o aclaración.
9. Total destacado.
10. CTA de confirmar.
11. Términos y condiciones.
12. Bloque de seguridad y confianza.

## Reglas de contenido

- El total debe ser el elemento numérico más prominente.
- No ocultar costos hasta el último paso.
- Los descuentos aparecen con signo y color de éxito.
- Los artículos largos pueden colapsarse solo cuando existan más de seis; el total siempre permanece visible.

## Estados

- Recalculando: skeleton o shimmer únicamente en importes afectados.
- Cupón aplicado.
- Cupón inválido con mensaje inline.
- Cambio de stock o precio: aviso explícito antes de confirmar.
- Error de pago: conservar formulario y resumen.
- Loading de confirmación: botón bloqueado e idempotencia garantizada.

## Responsive

- Desktop: columna derecha sticky.
- Tablet: columna derecha no sticky si reduce legibilidad.
- Mobile: aparece debajo de los datos o como resumen colapsable superior; CTA sticky inferior opcional.

## API React esperada

```ts
interface CheckoutSummaryProps {
  items: CheckoutItem[];
  subtotal: Money;
  shipping: Money;
  discounts: DiscountLine[];
  total: Money;
  loading?: boolean;
  submitting?: boolean;
  coupon?: CouponState;
  onApplyCoupon?: (code: string) => void;
  onEditCart?: () => void;
  onConfirm: () => void;
}
```

## Accesibilidad

- Importes y cambios anunciados mediante región live no intrusiva.
- CTA explica la acción final.
- Errores del cupón asociados al campo.
- Orden de lectura coincide con la jerarquía visual.

## No hacer

- Ocultar el total debajo del fold.
- Abrir un modal para editar una cantidad simple.
- Cambiar importes sin explicación.
- Habilitar múltiples confirmaciones durante una solicitud.
