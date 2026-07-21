---
id: DS-COMP-012
title: BenefitsStrip
version: 1.0.0
status: Approved
owner: Design System
source: Approved Home Golden Screen
---

# BenefitsStrip

## Propósito

Comunicar confianza operativa cerca del inicio o del cierre de una página: envíos, pagos, asesoramiento, cambios o beneficios comerciales.

## Anatomía

- Contenedor horizontal.
- Entre 3 y 4 BenefitItems.
- Ícono lineal.
- Título corto.
- Texto auxiliar opcional.
- Separadores visuales sutiles cuando corresponda.

## Reglas visuales

- Fondo blanco o `surface.soft`.
- Borde sutil.
- Radio `radius.lg`.
- Padding vertical `spacing.5` o `spacing.6`.
- Íconos de 20–24 px.
- Título 14 px semibold.
- Texto auxiliar 12–14 px.
- Sin sombras o máximo `shadow.xs`.

## Responsive

- Desktop: 4 columnas.
- Tablet: 2 columnas.
- Mobile: lista vertical o carrusel sin autoplay.

## API React esperada

```ts
interface BenefitItem {
  id: string;
  icon: ReactNode;
  title: string;
  description?: string;
}

interface BenefitsStripProps {
  items: BenefitItem[];
  className?: string;
}
```

## Prohibido

- Claims no verificables.
- Íconos con estilos mezclados.
- Colores saturados por ítem.
- Animaciones permanentes.
