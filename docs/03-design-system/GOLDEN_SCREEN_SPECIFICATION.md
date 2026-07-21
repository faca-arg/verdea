---
id: DESIGN-001
title: VERDEA Golden Screen Specification
version: 1.0.0
status: Approved
owner: Product Design
last_updated: 2026-07-21
depends_on:
  - docs/02-brand/BRAND_BIBLE.md
  - packages/design-tokens/design-tokens.json
affects:
  - Storefront
  - Product Detail
  - Checkout
  - Customer Account
  - Component Library
source_of_truth: true
---

# VERDEA Golden Screen Specification

## 1. Propósito

Este documento traduce las pantallas visuales aprobadas de VERDEA a reglas de implementación. Las imágenes no son inspiración: son referencia canónica para estructura, densidad, jerarquía, fotografía, componentes y comportamiento.

## 2. Pantallas canónicas

1. Home pública.
2. Catálogo.
3. Detalle de producto.
4. Checkout.
5. Mi cuenta.

Toda pantalla nueva debe sentirse como una extensión natural de este conjunto.

## 3. Principios visuales compartidos

- Fondo general blanco cálido.
- Verde profundo en headers, sidebar y acciones principales.
- Cards blancas con borde suave.
- Sombras mínimas.
- Radios entre 10 y 16 px.
- Grillas compactas pero respiradas.
- Fotografía de producto protagonista.
- Iconografía lineal.
- Labels y ayudas en grises suaves.
- Acciones primarias claramente verdes.
- Contenedores amplios y centrados.

## 4. Layout global

### Desktop

- Viewport de referencia principal: 1672 × 941.
- Contenedor máximo: 1480 px.
- Contenido recomendado: 1360 px.
- Padding horizontal: 24 px.
- Gap base: 16 px.
- Sistema de 12 columnas.

### Breakpoints

- sm: 640 px.
- md: 768 px.
- lg: 1024 px.
- xl: 1280 px.
- 2xl: 1536 px.

## 5. Header público

### Anatomía

- Lockup VERDEA.
- Botón explorar categorías.
- Buscador principal.
- Oferta o comunicación contextual.
- Favoritos.
- Cuenta.
- Carrito.

### Reglas

- Altura objetivo: 72 px.
- Fondo: Forest 950 o blanco según pantalla.
- El buscador es el elemento dominante.
- Sticky en navegación comercial.
- Íconos de 20–22 px.
- Contador del carrito en badge circular.
- En checkout se utiliza una variante mínima y segura.

## 6. Navegación secundaria

- Altura: 48 px.
- Fondo blanco.
- Borde inferior sutil.
- Scroll horizontal en mobile.
- Categoría activa en verde.
- Ofertas pueden usar rojo funcional moderado.

## 7. Home pública

### Hero

- Ancho completo del contenedor.
- Radio de 14–18 px.
- Imagen editorial de plantas e interior.
- Copy a la izquierda.
- CTA primario verde.
- CTA secundario tipo enlace.
- Beneficios integrados en el borde inferior.

### Categorías

- Cards horizontales bajas.
- Texto a la izquierda.
- Imagen de producto a la derecha.
- Borde sutil.
- Hover con elevación leve.

### Productos destacados

- Grilla de 4–5 columnas según ancho.
- ProductCard con imagen protagonista.
- Acción de favorito arriba a la derecha.
- Precio y CTA en zona inferior.

## 8. Catálogo

### Estructura

- Breadcrumb.
- Título y descripción.
- Banner contextual.
- Beneficios.
- Sidebar de filtros.
- Barra de filtros rápidos.
- Orden y selector de vista.
- Grilla de productos.
- Colecciones inferiores.

### Sidebar

- Ancho objetivo: 196 px.
- Fondo blanco.
- Borde sutil.
- Radio: 14 px.
- Grupos separados por divisores.
- Checkboxes compactos.
- Slider verde.

### Grid de productos

- 6 columnas en la referencia ultra ancha.
- 4–5 columnas en escritorio estándar.
- Gap de 12–16 px.
- 3 columnas en tablet.
- 2 columnas en mobile.

## 9. ProductCard

### Anatomía

1. Media.
2. Favorito.
3. Badge.
4. Nombre.
5. Descripción corta.
6. Precio.
7. Stock o rating.
8. CTA.

### Reglas

- Fondo blanco.
- Borde: 1 px solid Border Subtle.
- Radio: 14 px.
- Padding: 12–16 px.
- Imagen en relación cercana a 1:1.
- Objeto contenido, no recortado.
- Título máximo 2 líneas.
- Precio en verde oscuro.
- CTA de altura 36–40 px.
- Hover: elevación sutil, no transformación exagerada.

### Estados

- Default.
- Hover.
- Selected.
- Out of stock.
- Loading.
- Error de imagen.
- Agregado al carrito.

## 10. Detalle de producto

### Composición

- Breadcrumb superior.
- Galería a la izquierda.
- Información y compra en el centro.
- Entrega, garantía y confianza a la derecha.
- Tabs y venta cruzada en la parte inferior.

### Galería

- Miniaturas verticales.
- Imagen principal grande.
- Badge sobre la imagen.
- Favorito flotante.
- Beneficios debajo.

### Compra

- Título grande.
- Claim.
- Rating.
- Precio.
- Stock.
- Texto descriptivo.
- Atributos botánicos.
- Selector de tamaño.
- Cantidad.
- CTA primario.
- CTA secundario.

## 11. Checkout

### Layout

- Header mínimo en verde profundo.
- Formulario en columna principal.
- Resumen sticky a la derecha.
- Fondo blanco con ilustración vegetal periférica.

### Stepper

- 4 pasos.
- Estado activo verde.
- Conectores finos.
- Etiquetas claras.

### Formularios

- Inputs de 44 px.
- Radio de 10 px.
- Labels pequeños.
- Feedback inline.
- Selección mediante cards para envío y pago.

### Resumen

- Card grande.
- Productos con miniaturas.
- Separadores finos.
- Cupón.
- Totales.
- CTA verde ancho.
- Bloque de confianza.

## 12. Mi cuenta

### Layout

- Sidebar verde profundo de 224 px.
- Contenido claro.
- Header blanco con buscador y ubicación.
- Tres zonas principales: perfil, actividad y cuidado.

### Sidebar

- Logo superior.
- Navegación con íconos.
- Estado activo verde más claro.
- Promoción VERDEA Plus en la parte inferior.

### Cards

- Perfil y puntos.
- Resumen principal con imagen editorial.
- Pedidos recientes.
- Mis plantas.
- Direcciones.
- Favoritos.
- Recompra.
- Soporte.

## 13. Botones

### Primario

- Fondo: Forest 700.
- Hover: Forest 800.
- Texto blanco.
- Altura: 44 px.
- Radio: 10 px.
- Peso: 600.

### Secundario

- Fondo blanco.
- Borde verde o neutro.
- Texto verde.

### Ghost

- Fondo transparente.
- Sin sombra.
- Uso para navegación y acciones de baja prioridad.

## 14. Inputs y controles

- Altura estándar: 44 px.
- Borde sutil.
- Fondo blanco.
- Radio: 10 px.
- Focus visible en verde.
- Error con borde y mensaje, nunca solo color.
- Selects y dropdowns comparten altura y radio.

## 15. Cards

- Fondo blanco.
- Borde suave.
- Radio: 14 px.
- Sombra xs o sm.
- Padding: 16–24 px según jerarquía.
- No usar glassmorphism.
- No usar sombras oscuras.

## 16. Tipografía

- Manrope para títulos, precios, métricas y CTAs.
- Inter para interfaz y formularios.
- Serif editorial solo en colecciones o campañas.

## 17. Motion

- Hover y focus: 140–180 ms.
- Entrada de menús: fade + translate de 4–8 px.
- Cards: elevación leve.
- Botones: feedback inmediato.
- Respetar prefers-reduced-motion.

## 18. Responsive

### Tablet

- Filtros en drawer.
- 3 columnas.
- Header simplificado.
- Product detail en 2 columnas.

### Mobile

- Buscador visible o accesible en primer nivel.
- Menú drawer.
- 2 columnas de producto.
- CTA sticky en producto.
- Checkout en una columna.
- Resumen debajo del formulario.
- Sidebar de cuenta transformada en navegación móvil.

## 19. Accesibilidad

- WCAG AA.
- Foco visible.
- Navegación por teclado.
- Labels persistentes.
- Contraste mínimo obligatorio.
- Icon buttons con aria-label.
- No depender solo del color.

## 20. Reglas para IA

Está prohibido:

- Reinterpretar el diseño.
- Cambiar el logo.
- Inventar colores.
- Usar estilos por defecto de Bootstrap, Material UI o shadcn/ui.
- Crear componentes duplicados.
- Modificar ProductCard, Header o Search sin RFC.
- Cambiar densidad o jerarquía arbitrariamente.

La implementación debe consumir:

```text
assets/brand/brand.json
assets/brand/colors/palette.json
packages/design-tokens/design-tokens.json
packages/design-tokens/css-variables.css
```

## 21. Validación visual

Viewports mínimos:

- 1672 × 941.
- 1440 × 900.
- 1280 × 800.
- 1024 × 768.
- 768 × 1024.
- 390 × 844.

Toda pantalla debe compararse mediante Playwright contra su referencia aprobada.

## Historial de cambios

| Versión | Fecha | Cambio |
|---|---|---|
| 1.0.0 | 2026-07-21 | Especificación inicial derivada de Home, Catálogo, Producto, Checkout y Mi cuenta. |

## Próxima revisión

Después de implementar el primer Storybook y validar los componentes base.
