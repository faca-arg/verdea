---
id: DS-COMPONENT-004
title: Input
version: 1.0.0
status: Approved
owner: Design System
last_updated: 2026-07-21
---

# Input

## Propósito

Capturar información con claridad, validación inmediata y baja fricción.

## Anatomía

- Label.
- Campo.
- Placeholder opcional.
- Icono inicial o final opcional.
- Ayuda o contador.
- Mensaje de error.

## Medidas

- Alto estándar: 44px.
- Radio: 10px.
- Padding horizontal: 12–14px.
- Borde: 1px `color.border.subtle`.
- Texto: `typography.size.sm` o `md` según contexto.

## Variantes

- `text`.
- `email`.
- `password`.
- `number`.
- `currency`.
- `search` mediante componente Search.
- `textarea` con altura mínima de 96px.
- `select-trigger` visualmente compatible.

## Estados

- Default.
- Hover con borde más visible.
- Focus con borde verde y ring de 2px.
- Filled.
- Success con icono y mensaje opcional.
- Error con borde y texto de error.
- Disabled con fondo subtle.
- Read-only sin apariencia de disabled.

## Reglas UX

- Label siempre visible para formularios transaccionales.
- Placeholder nunca reemplaza el label.
- Validar al salir del campo o al intentar continuar; evitar errores agresivos mientras se escribe.
- Conservar valores ante errores de red.

## API React esperada

```ts
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
  error?: string;
  success?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  fullWidth?: boolean;
}
```

## Accesibilidad

- Relación label/input mediante `htmlFor`.
- `aria-describedby` para ayuda y error.
- `aria-invalid` cuando corresponda.
- Autofill y autocomplete configurados correctamente.

## No hacer

- Campos con alturas distintas dentro del mismo formulario.
- Labels solamente como placeholder.
- Bordes verdes permanentes sin significado.
- Validaciones comunicadas solo mediante color.
