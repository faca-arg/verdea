---
id: HOME-SPRINT
status: Active
owner: Storefront Frontend
---

# Home — flujo de ejecución

La Home se construye por bloques independientes. Cada bloque debe compilar, tener tests básicos, historia o ejemplo visual y revisión responsive antes de continuar.

## Orden obligatorio

1. `001-complete-home-components.md`
2. `002-store-header-and-category-nav.md`
3. `003-hero-and-categories.md`
4. `004-featured-products-and-benefits.md`
5. `005-editorial-guides-footer.md`
6. `006-home-assembly.md`

## Regla de aprobación

Una feature pasa a `Done` cuando:

- `pnpm typecheck` pasa;
- tests relacionados pasan;
- Storybook compila;
- `apps/docs` compila;
- existe ejemplo visual desktop y mobile;
- no introduce colores, tipografías, radios o sombras fuera de tokens;
- no crea CSS de página para imitar un componente compartido.

No es necesaria una aprobación humana intermedia cuando todos estos controles pasan. La revisión humana se reserva para diferencias visuales evidentes respecto de las Golden Screens.
