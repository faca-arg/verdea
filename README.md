# VERDEA

**Sistema operativo SaaS para viveros y garden centers.**

VERDEA conecta gestión, e-commerce, inventario, punto de venta, pedidos, clientes, compras, caja, logística y fidelización en una única plataforma multiempresa.

> **Todo tu vivero conectado.**

## Estado

Proyecto en fase de fundación de producto y diseño.

## Productos

- `apps/store`: tienda web pública para clientes.
- `apps/admin`: panel privado de gestión.
- `apps/api`: API y dominio del negocio.
- `apps/workers`: procesos en segundo plano.
- `apps/docs`: documentación navegable.
- `apps/marketing`: sitio institucional.

## Paquetes compartidos

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

## Documentación oficial

- [Project Blueprint](docs/01-blueprint/PROJECT_BLUEPRINT.md)
- [Design Foundation](docs/03-design-system/DESIGN_FOUNDATION.md)
- [ADR-0001: Monorepo y documentación versionada](docs/adr/ADR-0001-monorepo.md)

## Referencia visual

La captura de catálogo aprobada en julio de 2026 es la referencia visual canónica. No debe tratarse como inspiración: gobierna estructura, identidad, jerarquía, densidad, componentes y dirección fotográfica del storefront.

## Stack previsto

- Next.js, React y TypeScript.
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

## Desarrollo

El repositorio se construirá por etapas:

1. Fundaciones de producto y diseño.
2. Design system y Storybook.
3. Storefront público.
4. Backoffice.
5. API, base de datos e integraciones.
6. QA, observabilidad y despliegue.

## Licencia

Repositorio privado. Todos los derechos reservados hasta definir la estrategia legal y comercial.