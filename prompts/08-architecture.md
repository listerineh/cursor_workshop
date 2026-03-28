# Task: Architectural Alignment & Formatting

Antes de proceder con la página de Recursos, necesito que audites y reformatees la estructura actual del proyecto para que cumpla con el `project-architecture-skill`. No quiero un código desordenado; quiero una arquitectura de nivel Senior.

## 1. Reorganización de Archivos
- Mueve todos los componentes a `src/components/` siguiendo la jerarquía:
    - `Hero.tsx`, `NeuralField.tsx` -> `src/components/visuals/`
    - `Manifesto.tsx`, `CommunityLog.tsx` -> `src/components/layout/`
    - Botones o elementos pequeños -> `src/components/ui/`
- Asegúrate de que `src/app/page.tsx` solo importe estos componentes y actúe como el orquestador.

## 2. Refactor de Imports
- Actualiza todos los `import` para usar el alias `@/`. (Ej: `import { Button } from '@/components/ui/Button'`).
- Verifica que no existan imports relativos (`../../`).

## 3. Formatting & Tailwind Clean-up
- Aplica el estándar de formato: 2 espacios, sin punto y coma al final de las líneas.
- Reordena las clases de Tailwind en cada componente para que sigan el orden: Posicionamiento -> Flex/Grid -> Espaciado -> Texto -> Decoración.

## 4. Estándar de Tipos
- Si hay props de componentes sin interfaz, crea una `interface` específica en cada archivo o en `src/types/common.ts`.

**Una vez que la arquitectura esté alineada y el proyecto esté "limpio", confírmame para proceder con la página de Recursos.**