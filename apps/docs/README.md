# @verdea/docs

Aplicación interna de documentación y revisión visual del Design System de VERDEA.

## Objetivo

Validar juntos `Header`, `Search`, `Button`, `Input`, `Card`, `ProductCard`, `FilterSidebar`, `CheckoutSummary` y `AccountSidebar` antes de construir pantallas de producto.

## Ejecutar

```bash
pnpm install
pnpm docs
```

Abrir `http://localhost:3002`.

Storybook se ejecuta por separado:

```bash
pnpm storybook
```

Abrir `http://localhost:6006`.

## Regla de aprobación

Los componentes no deben utilizarse en Home, Catálogo o Checkout hasta revisar:

- fidelidad con las Golden Screens;
- responsive;
- estados hover, focus, disabled, loading y error;
- accesibilidad;
- consistencia con los tokens oficiales.
