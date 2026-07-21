---
id: ADR-0001
title: Adoptar un monorepo para VERDEA
version: 1.0.0
status: Accepted
owner: Product Architecture
last_updated: 2026-07-21
depends_on:
  - .foundation/PROJECT_CONSTITUTION.md
affects:
  - Repository
  - CI/CD
  - Frontend
  - Backend
  - Documentation
related_adrs: []
source_of_truth: true
---

# ADR-0001 — Adoptar un monorepo para VERDEA

## Contexto

VERDEA tendrá storefront, backoffice, API, workers, documentación, design system, contratos, autenticación, base de datos y herramientas compartidas. El desarrollo será realizado por un equipo pequeño con fuerte uso de vibecoding.

## Decisión

Utilizar un único monorepo basado en Turborepo y pnpm workspaces.

La estructura de alto nivel será:

```text
apps/
packages/
docs/
specs/
rfc/
.ai/
.foundation/
infra/
scripts/
assets/
```

## Motivos

- Una única fuente de verdad.
- Contratos y tipos compartidos.
- Refactors coordinados.
- Design System reutilizable.
- Contexto más accesible para agentes de IA.
- CI incremental.
- Menor fricción para un equipo pequeño.

## Alternativas consideradas

### Repositorios separados

Descartado inicialmente porque aumentaría coordinación, duplicación de configuración y dificultad para cambios transversales.

### Un único proyecto sin paquetes

Descartado porque mezclaría dominios y dificultaría reutilización, ownership y límites arquitectónicos.

## Consecuencias positivas

- Visibilidad completa del sistema.
- Versionado coordinado.
- Reutilización sencilla.
- Documentación junto a la implementación.

## Riesgos

- Crecimiento del repositorio.
- Dependencias indebidas entre paquetes.
- Pipelines más complejos si no se usan filtros y cache.

## Mitigaciones

- Límites explícitos por paquete.
- README por área.
- Reglas de lint para dependencias.
- Turborepo remote cache cuando sea necesario.
- Ownership y revisiones por dominio.

## Estado

Aceptado.

## Historial de cambios

| Versión | Fecha | Cambio |
|---|---|---|
| 1.0.0 | 2026-07-21 | Decisión inicial aceptada. |

## Próxima revisión

Cuando exista una segunda vertical de producto real o un problema operativo demostrado con el monorepo.

## Preguntas abiertas

Ninguna.