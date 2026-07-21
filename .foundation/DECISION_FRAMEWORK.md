---
id: FOUNDATION-003
title: VERDEA Decision Framework
version: 1.0.0
status: Approved
owner: Founder + Product Architecture
last_updated: 2026-07-21
depends_on:
  - .foundation/PROJECT_CONSTITUTION.md
affects:
  - RFC
  - ADR
  - Product planning
  - Design reviews
  - Engineering reviews
related_adrs: []
source_of_truth: true
---

# VERDEA Decision Framework

## Objetivo

Establecer un método común, breve y verificable para decidir cambios de producto, diseño, arquitectura, datos y operación.

## 1. Clasificación de decisiones

### Nivel 1 — Constitucional

Afecta identidad, principios, arquitectura general, aislamiento de tenants o fuentes de verdad.

**Ejemplos:** nombre, Golden Screen, estrategia multi-tenant, sistema de tokens, separación Store/Admin/API.

**Requiere:** aprobación del Founder, RFC, ADR y actualización de documentos afectados.

### Nivel 2 — Controlada

Afecta un flujo crítico, componente canónico, contrato público o modelo de dominio.

**Ejemplos:** checkout, ProductCard, ciclo de pedido, política de reserva de stock, permisos.

**Requiere:** SPEC o RFC, revisión de producto, diseño e ingeniería, y criterios de migración.

### Nivel 3 — Operativa

Cambio localizado que no altera contratos ni reglas superiores.

**Ejemplos:** copy, icono equivalente, orden secundario de información, corrección interna.

**Requiere:** issue o tarea, revisión normal y pruebas correspondientes.

## 2. Consejo de decisión

Toda decisión Nivel 1 o 2 debe responder cinco perspectivas:

| Perspectiva | Pregunta obligatoria |
|---|---|
| Producto | ¿Resuelve un problema real y prioritario? |
| Experiencia | ¿Reduce fricción y mantiene coherencia? |
| Diseño | ¿Respeta Golden Screen, tokens y componentes canónicos? |
| Ingeniería | ¿Es mantenible, segura, observable y testeable? |
| Negocio | ¿Aporta valor sostenible y es viable para el mercado objetivo? |

Para trabajo asistido por IA se agrega una sexta:

| IA | ¿El cambio queda suficientemente documentado para ser comprendido y mantenido por otros agentes? |

## 3. Puntaje de decisión

Asignar de 0 a 3 puntos por criterio:

- `0`: contradice el criterio.
- `1`: beneficio débil o riesgo alto.
- `2`: cumple adecuadamente.
- `3`: mejora claramente el sistema.

Criterios:

1. Valor para el usuario.
2. Coherencia con el producto.
3. Simplicidad.
4. Sostenibilidad técnica.
5. Seguridad y privacidad.
6. Impacto comercial.
7. Reutilización.
8. Capacidad de prueba y observación.

Una decisión Nivel 1 o 2 no se aprueba con un puntaje inferior a 16/24 ni con un cero en seguridad, usuario o coherencia.

## 4. Flujo de decisión

```text
Problema observado
→ Evidencia
→ Opciones
→ Evaluación
→ Decisión
→ RFC o ADR
→ Plan de implementación
→ Validación
→ Registro en historial
```

## 5. Evidencia mínima

Una propuesta debe indicar:

- problema concreto;
- usuarios afectados;
- evidencia disponible;
- resultado esperado;
- alternativas consideradas;
- costo y riesgos;
- documentos, contratos y componentes afectados;
- forma de medir el resultado.

## 6. Cuándo crear un RFC

Crear RFC cuando el cambio:

- modifica un flujo crítico;
- introduce una capacidad importante;
- afecta más de un dominio;
- cambia una experiencia canónica;
- requiere migración o lanzamiento gradual;
- todavía necesita discusión.

## 7. Cuándo crear un ADR

Crear ADR cuando se elige una solución técnica o estructural duradera entre alternativas relevantes.

Ejemplos: framework, estrategia de autenticación, eventos, tenancy, cache, búsqueda o almacenamiento.

## 8. Reversibilidad

Toda propuesta debe clasificarse:

- **Reversible:** puede deshacerse sin migración compleja.
- **Costosa de revertir:** requiere migración, coordinación o compatibilidad temporal.
- **Prácticamente irreversible:** afecta contratos públicos, datos históricos o identidad.

Cuanto menor sea la reversibilidad, mayor debe ser la evidencia y el nivel de aprobación.

## 9. Registro de desacuerdos

Los desacuerdos importantes deben quedar documentados en el RFC o ADR. No se eliminan para simular consenso. Debe indicarse quién decide y con qué fundamento.

## 10. Plantilla breve

```yaml
id: DECISION-000
title: Nombre de la decisión
level: 1 | 2 | 3
status: Proposed | Approved | Rejected | Superseded
problem: Problema concreto
users_affected: []
evidence: []
options: []
decision: Decisión seleccionada
risks: []
reversibility: Reversible | Costly | Irreversible
affects: []
metrics: []
owner: Nombre o rol
```

## Historial de cambios

| Versión | Fecha | Cambio |
|---|---|---|
| 1.0.0 | 2026-07-21 | Framework inicial aprobado. |

## Próxima revisión

Al completar el primer RFC real del proyecto.

## Preguntas abiertas

Ninguna.