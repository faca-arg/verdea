---
id: FOUNDATION-000
title: VERDEA Project Constitution
version: 1.0.0
status: Approved
owner: Founder + Product Architecture
last_updated: 2026-07-21
depends_on:
  - docs/01-blueprint/PROJECT_BLUEPRINT.md
affects:
  - Product
  - Design
  - Engineering
  - Data
  - QA
  - AI agents
related_adrs:
  - docs/adr/ADR-0001-monorepo.md
source_of_truth: true
---

# VERDEA Project Constitution

## Propósito

Esta constitución define las reglas superiores para tomar decisiones en VERDEA. Cuando dos documentos, intereses o implementaciones entren en conflicto, prevalece este archivo.

## Artículo 1 — El usuario antes que la tecnología

Las decisiones se evalúan por el valor y la claridad que entregan al usuario, no por la novedad técnica. Ninguna tecnología justifica una experiencia peor.

## Artículo 2 — La simplicidad tiene prioridad

La solución más simple que resuelva correctamente el problema tiene prioridad sobre una solución más amplia, abstracta o sofisticada.

## Artículo 3 — El diseño forma parte del producto

La calidad visual, la jerarquía, la accesibilidad y la coherencia no son terminación cosmética. Son requisitos funcionales.

## Artículo 4 — La especialización no se negocia

VERDEA debe comprender la realidad de viveros y garden centers. No se aceptan adaptaciones superficiales de un ERP, CRM o e-commerce genérico.

## Artículo 5 — Una única fuente de verdad

Cada decisión, regla, dato o contrato tiene una ubicación oficial. No se duplican definiciones entre documentos ni se mantienen versiones paralelas sin declarar cuál es canónica.

## Artículo 6 — Especificación antes de implementación

Ninguna funcionalidad sustancial se implementa sin una especificación que defina objetivo, alcance, estados, permisos, datos y criterios de aceptación.

## Artículo 7 — El sistema de diseño gobierna la interfaz

Toda pantalla debe construirse con tokens y componentes aprobados. No se crean colores, radios, espaciados, sombras o componentes especiales sin modificar primero la fuente de verdad correspondiente.

## Artículo 8 — La seguridad y el aislamiento son fundacionales

Multi-tenancy, permisos, auditoría, validación y protección de datos existen desde el inicio. No se agregan como corrección posterior.

## Artículo 9 — Toda IA obedece las mismas reglas

Los agentes de IA deben leer el contexto obligatorio, reutilizar componentes y contratos, explicar supuestos y respetar los límites definidos por este repositorio.

## Artículo 10 — Las decisiones importantes son trazables

Toda decisión estructural requiere ADR o RFC. El repositorio debe permitir conocer qué se decidió, por qué, qué alternativas se descartaron y qué impacto produce.

## Artículo 11 — La calidad prevalece sobre la velocidad aparente

No se considera avance producir más pantallas, código o módulos si aumentan inconsistencia, deuda o incertidumbre. La velocidad se obtiene mediante fundamentos sólidos y reutilización.

## Artículo 12 — Una funcionalidad incompleta no está terminada

Debe contemplar al menos: estado normal, carga, vacío, error, permisos, responsive, accesibilidad, pruebas y documentación.

## Artículo 13 — La arquitectura debe poder evolucionar

Se evita tanto el acoplamiento improvisado como la sobrearquitectura prematura. Las abstracciones se incorporan cuando existe evidencia de reutilización o complejidad real.

## Artículo 14 — El conocimiento permanece

El código puede reemplazarse. Las decisiones, principios y reglas de dominio deben permanecer comprensibles y versionadas.

## Artículo 15 — Criterio final

Toda decisión importante debe responder:

> ¿Esto hace que VERDEA sea más útil, coherente, seguro y sostenible para las personas que lo usarán durante años?

Si la respuesta no es claramente afirmativa, la decisión debe revisarse.

## Autoridad documental

1. Project Constitution.
2. Product Operating System.
3. Project Manifest.
4. Project Blueprint.
5. Biblias de sistema: Brand, Design, Experience y Engineering.
6. Specs, RFC y ADR.
7. Implementación.

## Historial de cambios

| Versión | Fecha | Cambio |
|---|---|---|
| 1.0.0 | 2026-07-21 | Constitución inicial aprobada. |

## Próxima revisión

Al cierre del Sprint 0 o ante un cambio de estrategia empresarial.

## Preguntas abiertas

Ninguna.