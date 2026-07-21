# @verdea/ui

Biblioteca oficial de componentes React de VERDEA. Implementa las especificaciones aprobadas en `docs/03-design-system/components` y consume únicamente los tokens de `packages/design-tokens`.

## Componentes disponibles

- `Header`
- `Search`
- `Button`
- `Input`
- `Card`
- `ProductCard`
- `FilterSidebar`
- `CheckoutSummary`
- `AccountSidebar`

## Uso

```tsx
import { Button, ProductCard } from "@verdea/ui";
import "@verdea/ui/styles.css";
```

## Reglas

- No agregar colores, radios o espaciados hardcodeados cuando exista un token.
- No recrear el logo con texto o iconos; importar los SVG oficiales.
- No incorporar lógica de negocio, acceso a base de datos ni llamadas HTTP.
- Todo componente nuevo necesita especificación, Storybook, accesibilidad y pruebas.
- Los cambios visuales relevantes requieren actualizar primero Design Foundation y la especificación del componente.

## Desarrollo

```bash
pnpm --filter @verdea/ui typecheck
pnpm --filter @verdea/ui storybook
pnpm --filter @verdea/ui build-storybook
```

## Estado

Versión inicial `0.1.0`. Los componentes son funcionales y sirven como base para validación visual. Antes de utilizarlos en producción deben completar pruebas unitarias, visual regression y revisión contra las Golden Screens.
