---
id: BRAND-001
title: VERDEA Brand Bible
version: 1.0.0
status: Approved
owner: Founder + Product Design
last_updated: 2026-07-21
depends_on:
  - .foundation/PROJECT_CONSTITUTION.md
  - .foundation/PRODUCT_OPERATING_SYSTEM.md
  - docs/01-blueprint/PROJECT_BLUEPRINT.md
affects:
  - Storefront
  - Checkout
  - Customer Account
  - Admin
  - Marketing
  - Design System
related_adrs:
  - docs/adr/ADR-0001-monorepo.md
source_of_truth: true
---

# VERDEA Brand Bible

## 1. Propósito

Este documento protege y operacionaliza la identidad de VERDEA. Define qué debe mantenerse constante en cualquier pantalla, componente, presentación o activo de marca.

VERDEA es una marca de software vertical para viveros y garden centers. Debe sentirse natural, moderna, clara, confiable y premium sin caer en una estética ecológica genérica.

## 2. Esencia de marca

**Nombre:** VERDEA  
**Tagline:** Lleva verde a tu vida  
**Promesa:** Todo tu vivero conectado.  
**Descriptor:** Sistema operativo para viveros y garden centers.

### Personalidad

- Natural.
- Minimalista.
- Premium.
- Confiable.
- Moderna.
- Humana.
- Editorial.

### Arquetipo

Cuidador + Creador.

### Sensaciones buscadas

- Calma.
- Orden.
- Vida.
- Crecimiento.
- Confianza.
- Cercanía.
- Tecnología silenciosa.

### Lo que VERDEA nunca debe ser

- Un ERP visualmente antiguo.
- Una plantilla Bootstrap.
- Una interfaz saturada.
- Una marca ecológica genérica.
- Una experiencia fría o excesivamente corporativa.
- Una composición con verdes fluorescentes o efectos artificiales.

## 3. Activos oficiales

La única fuente autorizada de activos maestros es:

```text
assets/brand/logo/master/
```

### Isotipo

```text
assets/brand/logo/master/verdea-isotype.svg
```

Brote de cuatro hojas con cuatro tonos: amarillo cálido, verde medio, verde profundo y naranja.

### Wordmark

```text
assets/brand/logo/master/verdea-wordmark.svg
```

Incluye el nombre VERDEA y el tagline oficial.

### Lockup horizontal

```text
assets/brand/logo/master/verdea-lockup-horizontal.svg
```

Composición oficial para headers, presentaciones, marketing y superficies amplias.

### Regla maestra

Los activos SVG oficiales se importan. Nunca se reconstruyen con texto HTML, iconos genéricos, emojis, imágenes generadas por IA o tipografías aproximadas.

## 4. Reglas de uso del logo

### Permitido

- Isotipo solo.
- Wordmark solo.
- Lockup horizontal.
- Versión sobre fondo claro.
- Versión clara sobre fondo verde profundo cuando exista el activo oficial.
- Escalado proporcional.

### Prohibido

- Rotar.
- Deformar.
- Cambiar tracking.
- Cambiar proporciones.
- Recolorear hojas individualmente.
- Agregar sombras o efectos 3D.
- Agregar glow.
- Aplicar degradados no incluidos en el activo.
- Reordenar isotipo, nombre y tagline.
- Reescribir VERDEA como texto dentro del frontend.

### Tamaños mínimos recomendados

- Lockup desktop: 148 px de ancho.
- Lockup mobile: 112 px de ancho.
- Wordmark: 96 px de ancho.
- Isotipo UI: 24 px.
- Favicon: 16 px.

### Área de seguridad

Mantener alrededor del lockup un espacio libre equivalente al ancho de una hoja pequeña del isotipo. Ningún texto, borde o icono puede invadir esa zona.

## 5. Paleta oficial

Fuente de verdad:

```text
assets/brand/colors/palette.json
```

### Colores estructurales

- Forest 950 — `#032C1B`: header, sidebar y fondos de alta jerarquía.
- Forest 900 — `#073624`: hover y superficies oscuras secundarias.
- Forest 800 — `#0E4B31`: acciones activas y profundidad.
- Forest 700 — `#155E37`: acción primaria.
- Leaf 600 — `#2E8B57`: acentos, estados seleccionados y soporte visual.
- Leaf 100 — `#EAF5ED`: fondos suaves, badges y resaltados.

### Acentos del isotipo

- Gold 500 — `#E5C16A`.
- Orange 500 — `#E89A4A`.

Estos colores aparecen principalmente en el isotipo y en comunicaciones especiales. No deben competir con el verde principal dentro de la UI.

### Neutros

- Canvas — `#FAFAF8`.
- Surface — `#FFFFFF`.
- Surface Alt — `#F4F5F2`.
- Border — `#E3E8E2`.
- Text — `#161A17`.
- Text Secondary — `#5F6761`.
- Text Muted — `#8A918C`.

## 6. Tipografía

### Interfaz

- **Manrope:** títulos, métricas, precios principales y CTAs.
- **Inter:** formularios, labels, navegación, tablas, filtros y texto funcional.
- **DM Serif Display:** uso editorial acotado en campañas, colecciones y piezas inspiracionales.

### Wordmark

El wordmark no se recrea tipográficamente. Se utiliza el SVG oficial.

### Jerarquía base

- Display: 48 px / 700.
- H1: 36 px / 700.
- H2: 28 px / 700.
- H3: 22 px / 600.
- Body: 16 px / 400.
- UI: 14 px / 500.
- Caption: 12 px / 400.

## 7. Dirección fotográfica

La fotografía debe ser protagonista y coherente en todo el producto.

### Productos

- Fondo blanco o gris cálido muy claro.
- Luz suave y natural.
- Planta u objeto completo.
- Maceta visible cuando corresponda.
- Sombra leve y realista.
- Encuadre consistente.
- Alta resolución.
- Sin fondos recargados.

### Banners

- Interiores luminosos.
- Muebles de materiales naturales.
- Plantas abundantes pero ordenadas.
- Tonos crema, verdes naturales y madera.
- Sensación editorial premium.
- Escenas creíbles, no ilustraciones artificiales.

### Prohibido

- Imágenes pixeladas.
- Fondos recortados de forma irregular.
- Saturación excesiva.
- Fotos mezcladas con estilos visuales incompatibles.
- Composiciones que parezcan banco de imágenes genérico.

## 8. Iconografía

- Línea fina.
- Geometría simple.
- Grosor consistente.
- Esquinas suaves.
- Color grafito o verde según jerarquía.
- Preferencia por Lucide React como base, con iconos propios cuando el dominio lo requiera.

Nunca mezclar iconos sólidos, emojis e iconos lineales dentro del mismo flujo.

## 9. Voz y tono

### VERDEA habla de forma

- Clara.
- Cercana.
- Serenamente optimista.
- Útil.
- Humana.
- Directa.

### Ejemplos correctos

- “Encontrá la planta ideal para tu espacio.”
- “Tu pedido ya está listo para retirar.”
- “Te ayudamos a elegir.”
- “Llevá vida a tu hogar.”

### Evitar

- “Solución omnicanal integral de última generación.”
- “Disrupción eco-friendly.”
- “Aprovechá YA esta oportunidad imperdible.”
- Lenguaje técnico visible al cliente.

## 10. Lenguaje visual de las Golden Screens

Las siguientes experiencias forman el sistema visual aprobado:

- Home pública.
- Catálogo.
- Detalle de producto.
- Checkout.
- Mi cuenta.

Patrones comunes:

- Verde profundo como estructura.
- Paneles y cards blancos.
- Fondo general blanco cálido.
- Bordes suaves.
- Sombras discretas.
- Mucho aire.
- Fotografía protagonista.
- CTAs verdes sólidos.
- Contenido denso pero organizado.
- Jerarquía visual inmediata.

## 11. Implementación en producto

### Correcto

```tsx
<BrandLogo variant="horizontal" />
```

### Incorrecto

```tsx
<div>
  <LeafIcon />
  <span>VERDEA</span>
</div>
```

### Reglas para IA

Toda IA debe:

1. Importar activos oficiales.
2. Consultar `palette.json` y `design-tokens.json`.
3. No inventar variantes.
4. No sustituir el logo por texto.
5. No rediseñar la identidad.
6. Solicitar RFC para cualquier cambio estructural.

## 12. Versionado

| Versión | Fecha | Cambio |
|---|---|---|
| 1.0.0 | 2026-07-21 | Brand Bible inicial basada en los activos oficiales y Golden Screens aprobadas. |

## Próxima revisión

Al cerrar la versión 1 del Design System o ante una modificación aprobada de marca.

## Preguntas abiertas

- Exportar variantes monocromas y claras del logo.
- Crear favicon y app icons derivados del isotipo maestro.
