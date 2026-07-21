---
id: DS-COMPONENT-003
title: Button
version: 1.0.0
status: Approved
owner: Design System
last_updated: 2026-07-21
---

# Button

## Propósito

Representar acciones claras con una jerarquía visual consistente.

## Tamaños

- `sm`: 36px.
- `md`: 44px.
- `lg`: 48px.
- Radio compartido: 10px.
- Padding horizontal: 14px, 18px y 22px.
- Gap icono/texto: 8px.

## Variantes

### `primary`
Fondo `brand.forest700`, texto blanco. Para comprar, continuar, guardar o confirmar.

### `secondary`
Fondo blanco, borde verde o neutro, texto verde oscuro. Para acciones importantes no principales.

### `soft`
Fondo `brand.leaf100`, texto verde. Utilizado en ProductCard y acciones de baja fricción.

### `ghost`
Sin fondo ni borde. Para enlaces funcionales y acciones de toolbar.

### `danger`
Fondo o borde de error. Solo acciones destructivas.

### `icon`
Cuadrado o circular; requiere `aria-label`.

## Estados

- Hover: oscurecer fondo o elevar contraste; no cambiar geometría.
- Active: `translateY(1px)` o reducción visual mínima.
- Focus: ring de 2px y offset de 2px.
- Loading: spinner, texto estable y ancho preservado.
- Disabled: opacidad aproximada de 45%, sin eventos.

## Jerarquía

Una región no debe mostrar más de una acción `primary`. Las acciones destructivas nunca usan el verde principal.

## API React esperada

```ts
type ButtonVariant = 'primary' | 'secondary' | 'soft' | 'ghost' | 'danger' | 'icon';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  fullWidth?: boolean;
}
```

## Accesibilidad

- Texto descriptivo o `aria-label`.
- Área táctil mínima 44×44px.
- Estado loading anunciado.
- No comunicar el estado únicamente por color.

## No hacer

- Crear variantes por pantalla.
- Usar alturas fuera de los tokens.
- Agregar gradientes, glow o sombras fuertes.
- Usar botones verdes para acciones destructivas.
