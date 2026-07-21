---
id: DS-COMPONENT-002
title: Search
version: 1.0.0
status: Approved
owner: Design System
last_updated: 2026-07-21
---

# Search

## Propósito

Permitir encontrar plantas, macetas, sustratos, herramientas y pedidos con una interacción inmediata y visualmente dominante.

## Anatomía

- Contenedor.
- Icono de búsqueda a la izquierda.
- Campo de texto.
- Acción opcional de filtros a la derecha.
- Panel de sugerencias.
- Estado de carga o sin resultados.

## Medidas

- Alto estándar: 44px.
- Radio: 10px.
- Padding horizontal: 14–16px.
- Icono: 18–20px.
- Borde: `color.border.subtle`.
- Fondo claro: `color.surface.default`.

## Variantes

- `header-dark`: fondo blanco sobre header verde.
- `header-light`: fondo `surface.soft` o blanco sobre header claro.
- `catalog`: incluye botón de filtros.
- `compact`: icono + input reducido para mobile.

## Comportamiento

- Debounce entre 200 y 300ms.
- Mínimo 2 caracteres para búsquedas remotas.
- Sugerencias agrupadas: productos, categorías y búsquedas recientes.
- Flechas arriba/abajo recorren resultados; Enter confirma; Escape cierra.
- La búsqueda nunca bloquea la escritura mientras carga.

## Estados

- Default, hover, focus, typing, loading, results, empty y error.
- Focus: borde `color.border.focus` y ring visible de 2px.
- Loading: spinner discreto en extremo derecho.
- Empty: mensaje útil y acceso al catálogo completo.

## Responsive

- Desktop: ancho flexible, máximo cercano a 640px.
- Tablet: ocupa la mayor parte del header.
- Mobile: puede pasar a segunda fila y ocupar 100%.

## API React esperada

```ts
interface SearchProps {
  value: string;
  placeholder?: string;
  variant?: 'header-dark' | 'header-light' | 'catalog' | 'compact';
  loading?: boolean;
  results?: SearchResult[];
  onChange: (value: string) => void;
  onSelect?: (result: SearchResult) => void;
  onOpenFilters?: () => void;
}
```

## Accesibilidad

- Combobox ARIA para sugerencias.
- Estado de resultados anunciado mediante `aria-live`.
- Labels visibles u ocultos accesibles.

## No hacer

- Usar un modal para búsquedas simples.
- Ocultar el buscador detrás de un icono en desktop.
- Usar placeholders genéricos como “Buscar...”.
