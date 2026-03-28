# Task: Resource Hub Implementation (/resources)

Vamos a expandir Cursor Quito con una página de Recursos. Esta sección debe ser la "Biblia" técnica para los miembros de la comunidad. Aplica todos los skills previos, especialmente `tailwind-utility-skill` y `tech-copy-tone-skill`.

## 1. Estructura de Rutas y Navegación
- Crea una nueva ruta en `src/app/resources/page.tsx`.
- Implementa un `Navbar.tsx` persistente (o compartido) que permita navegar entre el Home y Resources con una transición suave.

## 2. Layout de Recursos: "The Engineering Grid"
- **Headline:** "RECURSOS / TOOLBOX" en `text-5xl` con tipografía mono.
- **Categorías:** Crea un sistema de filtrado simple o secciones fijas para:
    - `01. PROMPT_LIBRARY`: Una lista de prompts optimizados para Cursor (Copy-paste ready).
    - `02. DOT_FILES`: Configuraciones recomendadas para `.cursorrules`.
    - `03. STACK_QUITO`: Librerías y herramientas preferidas por el nodo local (Next.js, Tailwind, Supabase, etc.).

## 3. Diseño de Componentes (Resource Cards)
- Aunque evitamos las cards genéricas, aquí usaremos **"Technical Slots"**:
    - Bordes `border-white/5`.
    - Al hacer hover, el borde se ilumina sutilmente y muestra un botón de `[COPY_TO_CLIPBOARD]`.
    - Usa una fuente mono para los snippets de código y sans para las descripciones.

## 4. Interactividad & Vibe
- **Copy Utility:** Implementa una funcionalidad de "Click to Copy" para los prompts usando `navigator.clipboard`. Al copiar, debe aparecer un toast minimalista o un cambio de texto que diga `DONE`.
- **Search sutil:** Un input de búsqueda estilo `Cmd + K` en la parte superior (estético o funcional).

## 5. SEO & Metadata
- Actualiza los metadatos de esta página específica: `Title: Recursos | Cursor Quito`.
- Asegúrate de que los snippets de código tengan resaltado de sintaxis básico si es necesario.

---

## Contenido Sugerido (Placeholders Técnicos):
1. **Prompt:** "Vibe Coding System Prompt" - El sistema de reglas que estamos usando.
2. **Rule:** ".cursorrules for Next.js" - Configuración de reglas para el editor.
3. **Extension:** "Tailwind Fold" - Para limpiar el ruido visual de las clases.

**No expliques. Genera la página de recursos con el mismo nivel de pulido que el Hero.**