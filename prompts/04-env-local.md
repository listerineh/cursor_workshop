# Task: Environment Configuration & Type Safety

Necesito configurar el entorno local para que el proyecto de Cursor Quito sea robusto y escalable. Aplica estándares de Senior Engineer.

## 1. Configuración de Archivos
- Crea un archivo `.env.local` en la raíz con placeholders para las siguientes variables (añade comentarios explicando para qué sirve cada una):
    - `NEXT_PUBLIC_DISCORD_INVITE_URL`: El link de invitación a la comunidad.
    - `NEXT_PUBLIC_GA_ID`: (Opcional) ID de Google Analytics.
    - `NEXT_PUBLIC_QUITO_NODE_STATUS`: Un string para definir el estado actual (ej. "OPERATIONAL").

- Crea un archivo `.env.example` que sea una copia del anterior pero sin los valores reales, para que otros colaboradores sepan qué configurar.

## 2. Type Safety (TypeScript)
- Crea o actualiza un archivo `env.d.ts` o `process-env.d.ts` dentro de una carpeta `types/` o en la raíz para tipar `process.env`.
- Define los tipos estrictos para las variables creadas arriba para que el autocompletado funcione en todo el proyecto.

## 3. Validación de Variables
- Crea un pequeño script de utilidad o una función en un archivo `src/lib/env.ts` que valide que las variables críticas (como la de Discord) estén presentes. Si no están, debe lanzar un `console.warn` claro en desarrollo.

## 4. Git Hygiene
- Asegúrate de que `.gitignore` ya incluya `.env`, `.env.local`, `.env.production`, etc., para evitar fugas de credenciales.

**No expliques el proceso, solo genera los archivos y la estructura de tipos.**