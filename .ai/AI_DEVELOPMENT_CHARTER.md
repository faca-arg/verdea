---
id: AI-001
title: VERDEA AI Development Charter
version: 1.0.0
status: Approved
owner: Product Architecture
last_updated: 2026-07-21
depends_on:
  - .foundation/PROJECT_CONSTITUTION.md
  - .foundation/PRODUCT_OPERATING_SYSTEM.md
affects:
  - Cursor
  - Gemini
  - Claude Code
  - Codex
  - Copilot
  - Human contributors
related_adrs: []
source_of_truth: true
---

# VERDEA AI Development Charter

## 1. Propósito

Definir cómo debe comportarse cualquier agente de IA que analice, genere, revise o modifique VERDEA.

## 2. Orden obligatorio de lectura

Antes de escribir código, leer en este orden:

1. `.foundation/PROJECT_CONSTITUTION.md`
2. `.foundation/PRODUCT_OPERATING_SYSTEM.md`
3. `.foundation/PROJECT_MANIFEST.md`
4. `docs/01-blueprint/PROJECT_BLUEPRINT.md`
5. la SPEC del dominio involucrado;
6. las reglas de diseño o ingeniería aplicables;
7. los componentes, contratos y ejemplos existentes.

Si falta una fuente necesaria, detenerse y declarar qué falta. No completar silenciosamente con una solución genérica.

## 3. Conducta obligatoria

Todo agente debe:

- explicar supuestos relevantes;
- buscar primero reutilización;
- respetar límites entre apps y packages;
- mantener TypeScript strict;
- utilizar design tokens;
- preservar contratos existentes o proponer migración explícita;
- generar estados de carga, vacío, error y permisos;
- incluir o actualizar pruebas;
- actualizar documentación afectada;
- señalar deuda o riesgos introducidos;
- minimizar el alcance del cambio.

## 4. Prohibiciones

No se permite:

- reinterpretar la Golden Screen;
- inventar colores, tipografías, radios, sombras o espaciados;
- conservar estilos predeterminados de Bootstrap, Material UI o shadcn/ui;
- duplicar componentes existentes;
- consumir directamente base de datos desde componentes UI;
- saltar permisos o contexto de tenant;
- crear endpoints sin contrato;
- modificar migraciones ya aplicadas como si nunca hubieran existido;
- ocultar errores con datos falsos;
- usar placeholders como implementación final;
- afirmar que algo está terminado sin pruebas o evidencia;
- realizar refactors amplios no solicitados junto con una funcionalidad pequeña.

## 5. Regla de fidelidad visual

Las referencias aprobadas y el Design System son vinculantes. Una IA no debe “mejorar”, “modernizar” o “reinterpretar” la interfaz sin RFC aprobado.

En cambios visuales debe verificar:

- viewport canónico;
- estructura y proporciones;
- tipografía;
- tokens;
- estados interactivos;
- responsive;
- accesibilidad;
- screenshot de comparación cuando sea posible.

## 6. Regla de dominio

VERDEA no es retail genérico. Antes de modelar una funcionalidad debe considerar:

- productos vivos;
- variantes botánicas;
- stock por ubicación;
- reservas;
- lotes y antigüedad;
- estado sanitario;
- mermas;
- cuidados;
- restricciones de entrega;
- canales online y físicos.

## 7. Formato de propuesta antes de implementar

Para cambios Nivel 1 o 2, responder primero:

```text
Problema
Alcance
Fuera de alcance
Archivos afectados
Contratos afectados
Riesgos
Plan de implementación
Plan de pruebas
Documentación a actualizar
```

No iniciar una implementación amplia hasta que la propuesta sea coherente con el repositorio.

## 8. Formato de entrega

Toda entrega debe indicar:

- qué se modificó;
- por qué;
- cómo probarlo;
- qué decisiones se tomaron;
- qué quedó pendiente;
- qué documentación fue actualizada.

## 9. Manejo de incertidumbre

Cuando exista ambigüedad:

1. buscar fuentes oficiales dentro del repositorio;
2. elegir la interpretación de menor impacto si es reversible;
3. preguntar cuando afecte una decisión Nivel 1 o 2;
4. nunca inventar certeza.

## 10. Seguridad

Todo agente debe tratar como críticos:

- tenant isolation;
- autenticación y sesiones;
- permisos;
- pagos y webhooks;
- stock y transacciones;
- datos personales;
- secretos;
- auditoría.

En estos dominios se requieren validaciones del lado servidor y pruebas negativas.

## 11. Definition of Done para trabajo de IA

Un cambio generado por IA no está terminado hasta que:

- compila;
- pasa lint y typecheck;
- pasa las pruebas aplicables;
- respeta el Design System;
- no rompe contratos sin migración;
- actualiza documentación;
- declara supuestos y limitaciones;
- puede ser entendido por otro agente sin leer el chat que lo originó.

## Historial de cambios

| Versión | Fecha | Cambio |
|---|---|---|
| 1.0.0 | 2026-07-21 | Charter inicial aprobado. |

## Próxima revisión

Después de la primera funcionalidad implementada mediante vibecoding.

## Preguntas abiertas

Ninguna.