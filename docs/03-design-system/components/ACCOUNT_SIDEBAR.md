---
id: DS-COMPONENT-009
title: AccountSidebar
version: 1.0.0
status: Approved
owner: Design System
last_updated: 2026-07-21
---

# AccountSidebar

## Propósito

Organizar el área privada del cliente y mantener la identidad VERDEA visible sin parecer un panel administrativo corporativo.

## Base visual

- Ancho desktop: `layout.accountSidebarWidth` (224px).
- Fondo `color.brand.forest950`.
- Alto completo del viewport.
- Logo oficial claro en la parte superior.
- Navegación vertical con iconos lineales.
- Card promocional VERDEA Plus en el extremo inferior.

## Anatomía

1. Logo.
2. Menú principal.
3. Badge opcional en carrito o pedidos.
4. Item activo.
5. Espaciador flexible.
6. Promoción o beneficio.

## Items iniciales

- Inicio.
- Tienda.
- Categorías.
- Favoritos.
- Mi carrito.
- Mis pedidos.
- Mis plantas.
- Ayuda.
- Mi cuenta.

## Estados de item

- Default: texto e icono blancos con contraste medio.
- Hover: fondo verde levemente más claro.
- Active: fondo `brand.forest700` o gradación equivalente, alto 44px, radio 10px.
- Badge: círculo verde luminoso con texto de alto contraste.
- Disabled: solo cuando exista una razón real y con explicación.

## Layout

- Padding horizontal: 16px.
- Gap vertical entre items: 6–8px.
- Iconos: 20–22px.
- Item: 44px de alto.
- El bloque VERDEA Plus utiliza fotografía botánica oscura, CTA claro y no debe desplazar la navegación esencial.

## Responsive

- Desktop: fija.
- Tablet: colapsable a rail de iconos o drawer, según ancho disponible.
- Mobile: drawer desde izquierda; no persiste abierto.
- El contenido conserva su estado al cerrar el drawer.

## API React esperada

```ts
interface AccountSidebarProps {
  activeItem: AccountNavKey;
  items?: AccountNavItem[];
  cartCount?: number;
  collapsed?: boolean;
  mobileOpen?: boolean;
  onNavigate?: (key: AccountNavKey) => void;
  onCloseMobile?: () => void;
}
```

## Accesibilidad

- `nav` con label “Cuenta de VERDEA”.
- Item activo con `aria-current="page"`.
- Drawer mobile con focus trap.
- Los badges incluyen significado accesible.

## No hacer

- Usar el sidebar en la tienda pública.
- Agregar submenús profundos.
- Cambiar el color activo por pantalla.
- Ocultar labels en desktop sin modo colapsado explícito.
