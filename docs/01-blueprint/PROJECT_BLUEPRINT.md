# VERDEA Project Blueprint

**Versión:** 1.0  
**Estado:** Aprobado  
**Referencia visual canónica:** catálogo desktop aprobado en julio de 2026.

## 1. Definición

VERDEA es una plataforma SaaS vertical para viveros, garden centers, productores y paisajistas. Une gestión interna, comercio electrónico, inventario vivo, POS, pedidos, clientes, compras, caja, logística, marketing y reportes.

No es un ERP genérico ni una tienda aislada: es un sistema operativo sectorial.

## 2. Promesa

> Todo tu vivero conectado.

**Tagline:** Hacé crecer tu vivero.

## 3. Productos

- **Storefront:** tienda pública orientada a descubrimiento, compra y postventa.
- **Admin:** panel privado para operación y análisis.
- **API:** dominio, persistencia, seguridad e integraciones.
- **Workers:** procesos asíncronos, webhooks, notificaciones y reportes.
- **Platform:** tenants, planes, límites, soporte y observabilidad.

## 4. Principios

1. El diseño es parte central del producto.
2. La especialización para viveros debe ser real.
3. Stock, pedidos, clientes y pagos tienen una única fuente de verdad.
4. Acciones frecuentes deben resolverse en pocos pasos.
5. La UI aprobada se reutiliza; no se rediseña pantalla por pantalla.
6. Multi-tenancy, accesibilidad, auditoría y observabilidad existen desde el inicio.

## 5. Módulos

Panel principal, tienda online, productos, inventario, POS, pedidos, clientes, entregas, proveedores, compras, caja, gastos, equipo, marketing, asistente de plantas, reportes, sucursales, configuración, integraciones y seguridad.

## 6. Arquitectura tecnológica

- Monorepo con Turborepo y pnpm.
- Next.js, React y TypeScript strict.
- Tailwind CSS con design tokens VERDEA.
- Radix UI y shadcn/ui solo como primitives sin estilo por defecto.
- NestJS, PostgreSQL, Prisma, Redis y BullMQ.
- S3 compatible, Mercado Pago, WhatsApp Business, ARCA y Google Maps.
- Vitest, Playwright, Jest y Supertest.

## 7. Estructura

```text
apps/
  admin/
  store/
  api/
  workers/
  docs/
  marketing/
packages/
  ui/
  design-tokens/
  icons/
  database/
  auth/
  api-client/
  contracts/
  validations/
  analytics/
  config/
  testing/
  utils/
docs/
  01-blueprint/
  02-brand/
  03-design-system/
  04-product/
  05-frontend/
  06-backend/
  07-database/
  08-api/
  09-qa/
  10-devops/
  adr/
```

## 8. Roadmap

### Fase 0 — Fundaciones
Blueprint, Design Foundation, biblioteca de componentes, Storybook, contratos, monorepo y CI.

### Fase 1 — MVP
Autenticación, tenants, productos, inventario, POS, pedidos, clientes, caja, storefront, carrito, checkout, Mercado Pago, WhatsApp y reportes básicos.

### Fase 2 — Operación avanzada
Compras, proveedores, logística, multi-sucursal, marketing, fidelización, mis plantas y facturación.

### Fase 3 — Inteligencia
Recomendador, reposición predictiva, automatizaciones, paisajismo, mayoristas y app móvil.

## 9. Criterios de aceptación globales

- Un vivero puede comenzar sin asistencia técnica.
- El stock de tienda y POS permanece sincronizado.
- Los pagos y webhooks son idempotentes.
- No existe acceso cruzado entre tenants.
- Las pantallas reproducen el sistema visual canónico.
- Los flujos críticos tienen pruebas automatizadas.
- Toda pantalla contempla carga, vacío, error, permisos, responsive y accesibilidad.
