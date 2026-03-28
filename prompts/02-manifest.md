# Paso 2: El Manifiesto del "Product Engineer" (Deep Dive)

El Hero está listo. Ahora necesitamos la sección de soporte que defina qué es Cursor Quito. Siguiendo las reglas de **vibe coding**, esta sección debe ser minimalista, basada en tipografía y con un scroll que se sienta "pesado" y premium.

## 0. Tus Skills en Acción
- **Frontend Skill:** Cero cards. Usa un layout de columnas asimétricas o una lista técnica limpia.
- **Tech Copy & Tone Skill:** Escribe frases cortas, directas. "Code as Art", "AI as an Extension", "Quito as a Hub".
- **Tailwind Utility Skill:** Usa `sticky` positioning para que el título de la sección se quede anclado mientras el contenido hace scroll.
- **Community Skill:** Enfócate en el talento local. No somos una empresa, somos un nodo de ingenieros.

---

## 1. Tarea: Componente `Manifesto.tsx` e Integración

### A. Estructura de la Sección (Cardless Layout)
- Crea una sección con un `max-w-7xl` y mucho padding vertical (`py-32`).
- A la izquierda (o arriba en mobile), un título sutil: `02 / MANIFIESTO`.
- A la derecha, una serie de 3 a 4 "Bloques de Pensamiento" que definan a la comunidad.

### B. Contenido (Copy Técnico)
Escribe el copy basado en estos pilares (puedes refinarlos):
1. **The Tooling:** "No solo usamos Cursor; hackeamos el flujo de trabajo. El editor es nuestra extensión cognitiva."
2. **The Local Node:** "Quito no es la periferia. Es un centro de alta disponibilidad para el desarrollo de producto global."
3. **The Philosophy:** "Vibe coding no es programar menos, es iterar más rápido. Calidad sobre volumen de commits."

### C. Motion & Polish
- Implementa una animación de entrada usando `framer-motion` (si está disponible) o transiciones CSS de Tailwind. Los textos deben aparecer con un fade-up suave al entrar en el viewport (`scroll-reveal`).
- Usa bordes ultra finos (`border-white/5`) para separar los bloques si es necesario, pero evita las cajas cerradas.

---

## 2. Tarea Extra: Onboarding Social
- Debajo del manifiesto, añade un componente simple de "Active Nodes" que muestre:
  - `STATUS: AGGREGATING`
  - `TOTAL_MEMBERS: [X]`
  - `NEXT_SYNC: [FECHA_MEETUP]` (Usa tipografía Mono).

---

## 3. Instrucciones de Ejecución
- Importa y coloca el componente `Manifesto` debajo del `Hero` en la `page.tsx`.
- Asegúrate de que el fondo `#050505` se mantenga consistente.
- No uses colores brillantes, solo blancos, grises y el glow neón sutil que definimos en la tesis visual.

**Procede con la implementación del Manifesto.**