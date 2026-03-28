# Task: Performance & Polish Pass (The 1% Details)

La estructura está completa. Ahora vamos a pulir la landing para que se sienta como una pieza de software de élite. Aplica el `motion-performance-skill` y tus skills previas.

## 1. Optimizaciones de Three.js (Performance)
- Modifica el componente `NeuralField.tsx` para que el canvas de Three.js se ponga en pausa o se "desmonte" cuando el usuario haga scroll más allá del Hero (usa `Intersection Observer` o un hook de scroll).
- Asegúrate de que las partículas tengan `frustumCulled={true}` para ahorrar recursos.

## 2. Transiciones de Sección (Framer Motion)
- Implementa un `ScrollReveal` suave en todas las secciones (`Manifesto`, `CommunityLog`). Los elementos deben entrar con un `y: 20` y `opacity: 0` hacia su estado original.
- Añade un **Cursor Personalizado** (Custom Cursor) minimalista que sea un pequeño círculo de luz que reaccione al hacer hover sobre botones y elementos interactivos.

## 3. Micro-interacciones de Tailwind
- En el `CommunityLog`, haz que las líneas de log tengan un efecto de "highlight" al pasar el mouse, con una transición de color muy sutil.
- Añade un efecto de "Grain" (ruido digital) muy fino sobre toda la página usando un pseudo-elemento fijo con un PNG de ruido y `opacity-[0.03]`. Esto le da una textura analógica premium.

## 4. Tipografía y Refinado de Espacios
- Revisa los `tracking` y `leading`. En los headlines grandes, usa `tracking-[-0.05em]`.
- Asegúrate de que el espaciado entre secciones sea generoso (`py-40` o más) para que el diseño respire.

## 5. Mobile Optimization
- Verifica que el Headline del Hero no se corte en pantallas pequeñas usando `text-[clamp(...)]`.
- Desactiva el cursor personalizado en dispositivos táctiles.

**No expliques. Simplemente eleva la calidad del código y asegúrate de que el resultado sea impecable.**