---
id: DS-COMPONENT-005
title: Card
version: 1.0.0
status: Approved
owner: Design System
last_updated: 2026-07-21
---

# Card

## Propósito

Agrupar contenido relacionado con bordes y elevación mínimos, preservando la estética clara y editorial de VERDEA.

## Base visual

- Fondo: `color.surface.default`.
- Borde: `component.card.border`.
- Radio: `component.card.radius` (14px).
- Padding base: `component.card.padding` (16px).
- Sombra por defecto: ninguna o `shadow.xs`.
- Hover interactivo: `shadow.sm` sin modificar el radio.

## Variantes

- `default`: agrupación general.
- `interactive`: card clickeable completa.
- `soft`: fondo `surface.soft`.
- `highlight`: borde o fondo verde muy suave.
- `media`: imagen dominante con contenido inferior.
- `summary`: información transaccional y totales.

## Anatomía

- Header opcional.
- Body.
- Footer opcional.
- Media opcional.
- Acción contextual opcional.

## Reglas

- Una card no debe contener múltiples bordes internos innecesarios.
- No anidar más de dos niveles de cards.
- Si toda la card es interactiva, sus acciones internas deben manejar foco y eventos sin conflicto.
- El padding puede reducirse a 12px en cards densas de pedido; cualquier excepción debe estar documentada.

## API React esperada

```ts
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'interactive' | 'soft' | 'highlight' | 'media' | 'summary';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  selected?: boolean;
}
```

## Accesibilidad

- Card no interactiva usa `div` o `section`.
- Card interactiva usa enlace o botón real, no `div` con click.
- Título de sección asociado cuando corresponda.

## No hacer

- Sombras oscuras o de gran desplazamiento.
- Glassmorphism.
- Bordes dobles.
- Radios diferentes en cards equivalentes.
