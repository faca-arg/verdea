# VERDEA Tasks

Esta carpeta contiene trabajo ejecutable y versionado para personas y agentes de IA.

## Flujo

1. Leer `.foundation/`.
2. Leer `.ai/`.
3. Leer la documentación enlazada por la tarea.
4. Ejecutar únicamente el archivo solicitado.
5. No ampliar alcance ni rediseñar.
6. Informar bloqueos antes de improvisar.

## Estados

- `backlog/`: todavía no preparado.
- `sprint-001/`: trabajo activo del primer sprint de implementación visual.
- `completed/`: tareas terminadas y verificadas.

## Regla de seguridad visual

Si falta un componente aprobado, la tarea debe detenerse. El agente debe explicar el faltante y esperar una especificación o tarea nueva. Está prohibido resolver el bloqueo inventando UI, colores, espaciados o variantes.

## Formato de respuesta esperado

Al finalizar cada tarea, informar:

- archivos creados o modificados;
- comandos ejecutados;
- resultado de typecheck, tests y build;
- URL y puerto local;
- capturas o descripción del estado visual;
- bloqueos, supuestos y deuda pendiente.
