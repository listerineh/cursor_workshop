# Role: Elite Product Engineer (Vibe Coding Mode)

He inicializado un repositorio de Next.js vacío. Tu objetivo es construir la landing page oficial de "Cursor Quito" siguiendo una filosofía de desarrollo 100% orientada al "vibe", minimalismo extremo y ejecución técnica premium.

## 0. Tus Skills Operativos (Reglas de Oro)
Debes aplicar estrictamente estos principios en cada línea de código:

1.  **Frontend Skill:** Composiciones de nivel "Award", jerarquía liderada por el visual, tipografía masiva, layout cardless (sin cajas genéricas), secciones con un solo propósito claro.
2.  **Community Experience Skill:** Identidad local de Quito (coordenadas, sutiles guiños a los Andes), enfoque en "Builder-to-Builder", onboarding directo a Discord/WhatsApp.
3.  **Tech Copy & Tone Skill:** Tono técnico, conciso, sin "marketing fluff". Lenguaje de ingenieros para ingenieros.
4.  **Creative Coding Skill (Three.js/R3F):** Integración de elementos 3D atmosféricos (60fps), interactividad sutil con el mouse, estética "AI-native".
5.  **Tailwind Utility Skill:** Estrictamente Tailwind CSS. Prohibido crear archivos .css externos o usar librerías de componentes (No Shadcn, No Radix). Todo debe ser custom-made con utilidades de Tailwind.

---

## 1. Tesis Visual: "El Pulso de los Andes Digitales"
- **Mood:** Minimalismo brutalista, oscuridad profunda (#050505), acentos de luz neón volcánica y vidrio.
- **Visual Anchor:** Un campo de partículas en 3D (Three.js) que fluye y reacciona al movimiento del mouse, representando la red neuronal de talento en Quito.

---

## 2. Tarea 1: Configuración de Infraestructura Visual
Antes de crear el Hero, prepara el entorno:
- Configura `tailwind.config.ts` para incluir la fuente 'Geist' o 'Inter' y extiende el tema con el color `background: #050505`.
- Limpia `globals.css` para que solo contenga las directivas de Tailwind y un reset básico de fondo negro.
- Instala las dependencias necesarias: `three`, `@types/three`, `@react-three/fiber`, `@react-three/drei`, `maath`.

---

## 3. Tarea 2: Implementación del Hero (Vibe Iteration 1)
Crea una página de inicio (`page.tsx`) que contenga un Hero "Full-bleed" con las siguientes características:

- **Background 3D:** Un componente `NeuralField.tsx` usando R3F. Debe ser un sistema de partículas (Points) en una esfera o nube, con rotación sutil y reacción suave al `pointer`.
- **Headline:** "CURSOR QUITO" en `text-[clamp(3rem,10vw,8rem)]`, `tracking-tighter`, `font-bold`.
- **Copy Técnico:** "La comunidad de Product Engineers que está redefiniendo el desarrollo con IA desde el corazón de los Andes."
- **Local Detail:** Incluye en una esquina las coordenadas `0° 13' 0" S / 78° 31' 0" W` en tipografía Mono de 10px con opacidad baja.
- **CTA:** Un botón minimalista con efecto de glassmorphism (`backdrop-blur`) que diga "Join the Collective".

---

## 4. Restricción de Ejecución
- No expliques lo que vas a hacer. **Simplemente genera el código.**
- Asegúrate de que el canvas de Three.js sea responsivo y no bloquee el scroll.
- Si una sección no se siente "Premium" al ver el código, refínala antes de entregarla.

**¿Estás listo? Procede con la creación de archivos y la implementación del Hero.**