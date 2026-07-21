# VERDEA

**Sistema operativo SaaS para viveros y garden centers.**

VERDEA conecta gestión, e-commerce, inventario, punto de venta, pedidos, clientes, compras, caja, logística y fidelización en una única plataforma multiempresa.

> **Todo tu vivero conectado.**

## Estado

Sprint 0 — Foundation en progreso. Todavía no comenzó la implementación funcional.

## Empezar por acá

Toda persona o agente de IA debe leer:

1. [Project Constitution](.foundation/PROJECT_CONSTITUTION.md)
2. [Product Operating System](.foundation/PRODUCT_OPERATING_SYSTEM.md)
3. [Project Manifest](.foundation/PROJECT_MANIFEST.md)
4. [Decision Framework](.foundation/DECISION_FRAMEWORK.md)
5. [Project Blueprint](docs/01-blueprint/PROJECT_BLUEPRINT.md)
6. [AI Development Charter](.ai/AI_DEVELOPMENT_CHARTER.md)
7. [Brand Bible](docs/02-brand/BRAND_BIBLE.md)
8. [Golden Screen Specification](docs/03-design-system/GOLDEN_SCREEN_SPECIFICATION.md)

El estado del sprint se mantiene en [Sprint 0 — Foundation](docs/00-sprints/SPRINT-000-foundation.md).

## Fuentes de verdad visuales

- [Brand metadata](assets/brand/brand.json)
- [Brand palette](assets/brand/colors/palette.json)
- [Design tokens](packages/design-tokens/design-tokens.json)
- [CSS variables](packages/design-tokens/css-variables.css)
- `assets/brand/logo/master/`: activos maestros del isotipo, wordmark y lockup horizontal.

Ninguna implementación puede inventar colores, reconstruir el logo o modificar jerarquías visuales fuera de estas fuentes.

## Productos previstos

- `apps/store`: tienda web pública para clientes.
- `apps/admin`: panel privado de gestión.
- `apps/api`: API y dominio del negocio.
- `apps/workers`: procesos en segundo plano.
- `apps/docs`: documentación navegable.
- `apps/marketing`: sitio institucional.

## Paquetes compartidos previstos

- `packages/ui`: componentes React de VERDEA.
- `packages/design-tokens`: colores, tipografía, radios, espaciados y motion.
- `packages/database`: esquema, cliente y migraciones.
- `packages/auth`: autenticación, sesiones y permisos.
- `packages/contracts`: contratos tipados entre frontend y backend.
- `packages/api-client`: cliente de API.
- `packages/icons`: iconografía propia.
- `packages/validations`: esquemas Zod.
- `packages/analytics`: eventos y medición.
- `packages/config`: configuración compartida.
- `packages/testing`: utilidades de pruebas.
- `packages/utils`: utilidades generales.

## Decisiones arquitectónicas

- [ADR-0001: adoptar un monorepo](docs/adr/ADR-0001-monorepo.md)

## Referencias visuales

Las pantallas aprobadas de Home, Catálogo, Producto, Checkout y Mi cuenta forman el conjunto de **Golden Screens**. No deben tratarse como inspiración: gobiernan estructura, identidad, jerarquía, densidad, componentes y dirección fotográfica de VERDEA.

## Stack previsto

- Next.js, React y TypeScript strict.
- Tailwind CSS con estilos VERDEA propios.
- Radix UI y shadcn/ui únicamente como primitives.
- NestJS, PostgreSQL, Prisma, Redis y BullMQ.
- Mercado Pago, WhatsApp Business, ARCA y Google Maps.
- Turborepo y pnpm workspaces.

## Principios

1. Diseño como parte del producto.
2. Especialización real para viveros.
3. Una única fuente de verdad para stock, clientes, pedidos y pagos.
4. Multi-tenancy seguro desde el inicio.
5. Componentes consistentes y documentados.
6. Accesibilidad, rendimiento y pruebas visuales obligatorias.
7. El contexto necesario debe vivir en el repositorio, no en prompts o chats externos.
8. El proyecto se optimiza exclusivamente para VERDEA.

## Desarrollo

El repositorio se construirá por etapas:

1. Fundaciones de producto, IA y diseño.
2. Design System, tokens y Storybook.
3. Storefront público.
4. Backoffice.
5. API, base de datos e integraciones.
6. QA, observabilidad y despliegue.

## Licencia

Repositorio privado. Todos los derechos reservados hasta definir la estrategia legal y comercial.