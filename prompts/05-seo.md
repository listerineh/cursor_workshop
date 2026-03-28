# Task: Technical SEO & Metadata Infrastructure

Necesito que la landing de Cursor Quito sea perfectamente indexable y que sus "social previews" sean de nivel élite. Aplica el `technical-seo-skill` y estándares de Senior Engineer.

## 1. Configuración de Metadatos Globales (layout.tsx)
- Define un objeto de `metadata` robusto en el `layout.tsx` raíz.
- **Title:** "Cursor Quito | The AI-Native Community"
- **Description:** "Un nodo de Product Engineers en el centro de los Andes. Redefiniendo el flujo de trabajo con Cursor e IA."
- **OpenGraph:** Configura `title`, `description`, `url`, `siteName`, y `locale: 'es_EC'`.
- **Twitter Card:** Configura `card: 'summary_large_image'`, `site: '@CursorQuito'` (placeholder) y `creator: '@CursorQuito'`.

## 2. Archivos de Indexación (Metadata Routes)
- Crea un archivo `src/app/robots.ts` que genere un `robots.txt` permitiendo todo a los buscadores y apuntando al sitemap.
- Crea un archivo `src/app/sitemap.ts` que genere dinámicamente el `sitemap.xml` con la URL base del proyecto.

## 3. Favicons y Assets Visuales
- Crea una carpeta `public/` (si no existe) y prepara placeholders para `favicon.ico`, `apple-icon.png` y `opengraph-image.png`.
- **Importante:** Escribe un pequeño componente `JsonLd.tsx` que inyecte un `Schema.org` de tipo `Organization` o `Community` en el head, mencionando específicamente a Quito, Ecuador y la temática de Software Development.

## 4. Validación Semántica
- Revisa el `page.tsx` actual y asegúrate de que el Headline principal sea un `h1` y que las secciones `Manifesto` y `CommunityLog` usen etiquetas `<section>` con `aria-label` descriptivos.

**No expliques el proceso, solo genera la configuración y los archivos de metadatos.**