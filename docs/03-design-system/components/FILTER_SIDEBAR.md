---
id: DS-COMPONENT-007
title: FilterSidebar
version: 1.0.0
status: Approved
owner: Design System
last_updated: 2026-07-21
---

# FilterSidebar

## Propósito

Permitir refinar el catálogo sin perder contexto ni ocupar más protagonismo que los productos.

## Base visual

- Ancho desktop: `layout.filterSidebarWidth` (196px).
- Fondo blanco.
- Borde `color.border.subtle`.
- Radio 14px.
- Padding 16px.
- Secciones separadas por 20–24px o divisor sutil.

## Anatomía

1. Header: “Filtrar productos” + “Limpiar filtros”.
2. Grupos de filtros.
3. Opciones con checkbox o radio.
4. Contadores opcionales.
5. Rango de precio.
6. Acción “Mostrar más filtros”.
7. Resumen de filtros activos opcional.

## Comportamiento

- Aplicación inmediata para checkboxes simples.
- Debounce en precio y rangos.
- “Limpiar filtros” restaura estado inicial y anuncia el cambio.
- Conservar filtros en URL para compartir y volver atrás.
- Grupos extensos pueden colapsarse, pero los principales comienzan abiertos.

## Responsive

- Desktop: sidebar fija dentro del layout; puede ser sticky bajo el header.
- `<1024px`: desaparece del flujo y abre en drawer lateral.
- Mobile: bottom sheet o drawer de ancho completo con footer sticky “Ver resultados”.

## Estados

- Loading de conteos.
- Sin opciones disponibles.
- Filtro aplicado.
- Error parcial sin bloquear el catálogo.

## API React esperada

```ts
interface FilterSidebarProps {
  groups: FilterGroup[];
  values: FilterState;
  resultCount?: number;
  loading?: boolean;
  mode?: 'sidebar' | 'drawer';
  onChange: (state: FilterState) => void;
  onClear: () => void;
  onClose?: () => void;
}
```

## Accesibilidad

- `fieldset` y `legend` por grupo.
- Checkboxes reales.
- Conteo de resultados anunciado.
- Drawer con focus trap y cierre Escape.

## No hacer

- Aplicar filtros solo al presionar un botón en desktop.
- Usar selects para todas las opciones.
- Mostrar categorías sin jerarquía.
- Bloquear todo el catálogo mientras actualizan conteos.
