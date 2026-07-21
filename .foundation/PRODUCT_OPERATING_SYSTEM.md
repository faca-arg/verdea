---
id: FOUNDATION-002
title: VERDEA Product Operating System
version: 1.0.0
status: Approved
owner: Founder + Product Architecture
last_updated: 2026-07-21
depends_on:
  - .foundation/PROJECT_CONSTITUTION.md
  - .foundation/PROJECT_MANIFEST.md
  - docs/01-blueprint/PROJECT_BLUEPRINT.md
affects:
  - Product lifecycle
  - Documentation
  - Design
  - Engineering
  - QA
  - Releases
related_adrs:
  - docs/adr/ADR-0001-monorepo.md
source_of_truth: true
---

# VERDEA Product Operating System

## 1. Propósito

Definir cómo se transforma una idea en una funcionalidad segura, coherente, probada y documentada dentro de VERDEA.

## 2. Jerarquía documental

```text
Project Constitution
→ Product Operating System
→ Project Manifest
→ Project Blueprint
→ Brand / Design / Experience / Engineering Bibles
→ Specs, RFC y ADR
→ Implementación
```

Ante un conflicto prevalece el documento de mayor autoridad.

## 3. Ciclo de vida de una funcionalidad

```text
Problema o oportunidad
→ Evidencia
→ Clasificación de decisión
→ RFC si corresponde
→ SPEC
→ UX y diseño
→ Revisión
→ Implementación
→ Testing
→ Release
→ Medición
→ Actualización documental
```

No se empieza por código cuando todavía se desconoce el comportamiento esperado.

## 4. Artefactos obligatorios

### SPEC

Define qué debe hacer la funcionalidad, para quién, qué estados posee, qué permisos requiere, qué datos consume y cómo se acepta.

### RFC

Se utiliza para discutir cambios amplios, riesgosos o transversales antes de decidir.

### ADR

Registra una decisión técnica o arquitectónica duradera.

### Issue o tarea

Descompone la ejecución en trabajo verificable.

### Pull request

Presenta cambios, evidencia visual, pruebas e impacto documental.

## 5. Metadata documental obligatoria

Todo documento gobernante debe iniciar con front matter YAML:

```yaml
id: TYPE-000
title: Nombre
version: 1.0.0
status: Draft | Review | Approved | Deprecated
owner: Rol responsable
last_updated: YYYY-MM-DD
depends_on: []
affects: []
related_adrs: []
source_of_truth: true | false
```

Debe finalizar con:

- Historial de cambios.
- Próxima revisión.
- Documentos relacionados cuando corresponda.
- Preguntas abiertas.

## 6. Definition of Ready

Una funcionalidad está lista para implementarse cuando:

- el problema y el usuario están definidos;
- el alcance y lo que queda fuera están escritos;
- los estados y flujos están descritos;
- los permisos están definidos;
- los contratos de datos están comprendidos;
- existen criterios de aceptación;
- se identificaron impactos en diseño, API, datos y QA;
- las preguntas críticas están resueltas.

## 7. Definition of Done

Una funcionalidad está terminada únicamente cuando:

- cumple la SPEC;
- utiliza tokens y componentes aprobados;
- contempla carga, vacío, error y permisos;
- funciona en desktop, tablet y mobile según corresponda;
- cumple WCAG AA;
- posee pruebas unitarias, de integración o E2E según el riesgo;
- tiene observabilidad adecuada;
- no introduce regresiones conocidas;
- actualiza documentación, contratos y changelog;
- fue validada en staging o entorno equivalente.

## 8. Golden Screen

La captura canónica de catálogo aprobada en julio de 2026 gobierna la identidad del storefront inicial. Toda nueva pantalla pública debe sentirse como una extensión natural de esa referencia.

No se permite reinterpretar de forma arbitraria:

- logo;
- paleta;
- densidad;
- grid;
- header;
- búsqueda;
- ProductCard;
- radios;
- jerarquía;
- dirección fotográfica.

## 9. Single Source of Truth

| Tema | Fuente oficial |
|---|---|
| Propósito y principios superiores | `.foundation/` |
| Alcance del producto | `docs/01-blueprint/` |
| Marca | `docs/02-brand/` |
| Diseño y tokens | `docs/03-design-system/` y `packages/design-tokens/` |
| Comportamiento funcional | `specs/` |
| Decisiones técnicas | `docs/adr/` |
| Cambios propuestos | `rfc/` |
| Contratos API | `docs/08-api/` y `packages/contracts/` |
| Implementación | `apps/` y `packages/` |

## 10. Revisiones obligatorias

### Product Review

Valida problema, alcance, prioridad y métricas.

### Design Review

Valida coherencia con Golden Screen, UX, accesibilidad y componentes.

### Engineering Review

Valida arquitectura, seguridad, mantenibilidad, rendimiento y observabilidad.

### QA Review

Valida cobertura, riesgos, escenarios y regresiones.

### AI Review

Valida que el cambio sea comprensible para agentes futuros y no dependa de contexto externo al repositorio.

## 11. Gestión de deuda

La deuda debe ser visible, clasificada y tener owner. No se acepta deuda deliberada sin:

- motivo;
- impacto;
- mitigación;
- fecha o condición de revisión.

## 12. Releases

Cada release debe incluir:

- alcance;
- riesgos;
- migraciones;
- feature flags si aplica;
- plan de rollback;
- monitoreo;
- notas de versión.

## 13. Arquitectura Review al cerrar cada fase

Responder:

1. ¿Se respeta la Constitución y el POS?
2. ¿La Golden Screen sigue gobernando la identidad?
3. ¿Hay decisiones que necesitan ADR o RFC?
4. ¿Se agregó complejidad sin evidencia?
5. ¿La documentación y el código siguen sincronizados?

## Historial de cambios

| Versión | Fecha | Cambio |
|---|---|---|
| 1.0.0 | 2026-07-21 | POS inicial aprobado. |

## Próxima revisión

Al cierre del Sprint 0.

## Preguntas abiertas

Ninguna.