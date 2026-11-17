# DOFA — Primera vista del portafolio

Alcance: la vista inicial (`src/pages/oscar/OscarPortafolio.tsx`, grid bento) antes de abrir cualquier modal.
Pregunta guía: ¿un reclutador entiende en 5–10 s **quién es Oscar, qué hace y cómo contactarlo**?

## Matriz

| | Positivo | Negativo |
|---|---|---|
| **Interno** | **Fortalezas** | **Debilidades** |
| | F1. Identidad visual propia y coherente (paleta "Vintage Cafeteria", bento, tipografía retro). | D1. **No hay propuesta de valor visible.** El H1 es solo el nombre; el rol ("Desarrollador Fullstack") sólo aparece en el reverso de la foto. `headerRole` y `headerPitch` existen en el diccionario pero **no se usan**. |
| | F2. Bilingüe ES/EN + modo oscuro. | D2. El texto principal (tagline) es genérico: "Siempre en busca de nuevos desafíos…" no dice qué hace. |
| | F3. Microinteracciones cuidadas (intro de foto, flip, acordeón, glow) y respeto a `prefers-reduced-motion`. | D3. **Bug en Contacto:** el texto grande "Contáctame" es `<a href="#">` con `stopPropagation` → al hacer clic justo en el CTA no pasa nada. Copy "¿Tienes alguna duda?" no invita a contratar. |
| | F4. Contenido real y verificable: experiencia en Opieka con clientes y links en vivo, Quyca con repos, hackathons. | D4. Proyectos: cada fila del acordeón muestra sólo el título sobre un color plano. Sin rol, sin stack, sin imagen (hay capturas de Quyca en `public/Proyectos/Quyca` sin usar). Sin título de sección. |
| | F5. Responsive con orden de tarjetas pensado para móvil. | D5. "Sobre mí" es un muro de texto estilo CV-ATS recortado a 9 líneas; en escritorio no tiene título. |
| | | D6. Accesibilidad: tarjetas clicables (`<section onClick>`) no son alcanzables con teclado (sin `tabIndex`, `role`, ni Enter/Espacio). |
| | | D7. SEO / compartir: `<html lang="en">` con contenido en español, `<title>Portafolio</title>`, favicon de Vite, sin `meta description` ni `og:title/og:image` → la vista previa en LinkedIn/WhatsApp sale vacía. |
| **Externo** | **Oportunidades** | **Amenazas** |
| | O1. Reclutadores escanean en segundos: un titular claro (rol + pitch) convierte mucho mejor. | A1. Saturación de portafolios con estética bento/plantilla: sin mensaje claro se ve "uno más". |
| | O2. Credenciales diferenciadoras ya disponibles (ganador de hackathons, ponente, intercambio en Corea, Azure) que pueden resumirse en chips. | A2. Filtros de reclutamiento rápidos: si el rol no está en la primera pantalla, se pierde el candidato. |
| | O3. Assets existentes (capturas de Quyca, foto) reutilizables sin producir nada nuevo. | A3. Compartir el link en LinkedIn sin metadatos OG da una vista previa pobre. |
| | O4. Detectar el idioma del navegador para que visitantes en inglés vean EN de entrada. | A4. Teléfono y correo en texto plano en el reverso de la foto → scraping/spam. |
| | | A5. Links de clientes externos que se caigan restan credibilidad (fuera de nuestro control). |

## Plan de mejora (priorizado)

Restricciones: cambios mínimos, reutilizar lo existente (diccionario `dict`, clases CSS, assets en `public/`), **no tocar ni revertir el trabajo sin commit** (`moreHint`, `aboutHeading`, fuente `Ultra` en móvil), sin dependencias nuevas.

### P1 — Propósito: decir qué hace en la primera pantalla (D1, D2, O1, A1, A2)
- Header: debajo/al lado del nombre mostrar `t.headerRole` (texto pequeño, `--color-text-muted`). En móvil puede ir debajo del nombre.
- Tarjeta de frase: el texto grande pasa a ser `t.headerPitch` (propuesta de valor). Encima, un "eyebrow" pequeño con `t.headerRole` si no se puso en el header (elegir uno, no duplicar). `t.tagline` sigue pasando al modal personal (`PersonalContent`) sin cambios.

### P2 — Contacto que funcione y convierta (D3)
- Quitar el `<a href="#">` con `stopPropagation`: el CTA debe abrir el modal de contacto como el resto de la tarjeta (usar `<span className="cta">`).
- Copy: ES "¿Construimos / algo juntos?" · EN "Let's build / something together".

### P3 — Proyectos escaneables (D4, O3)
- En cada fila del acordeón mostrar título + una línea pequeña con el `stack` (visible al menos cuando la fila está abierta).
- Campo opcional `image?: string` en `WorkItem`; Quyca usa `/Proyectos/Quyca/1.png` como fondo (`background-size: cover` + el degradado actual del label para legibilidad). Las demás siguen con su color.

### P4 — "Sobre mí" breve y con credenciales (D5, O2)
- Nueva clave `bioShort` (2–3 líneas) en ES/EN, p. ej. "Ingeniero de Sistemas (USTA) enfocado en desarrollo fullstack, datos y cloud." + fila de chips con 3 credenciales: "Ganador de hackathons", "Ponente en congresos", "Intercambio en Corea del Sur" (EN equivalentes). Reusar estilo `.tag` o uno compacto.
- Mostrar `aboutHeading` también en escritorio. La bio completa sigue en el modal.

### P5 — Accesibilidad de tarjetas clicables (D6)
- En las `<section>` de frase, sobre mí y contacto: `role="button"`, `tabIndex={0}`, `aria-label`, y `onKeyDown` (Enter/Espacio → abrir). Un helper pequeño compartido, no tres copias.
- `:focus-visible` con outline del acento en `.magicCard`.

### P6 — SEO y vista previa al compartir (D7, A3, O4)
- `index.html`: `lang="es"`, `<title>Oscar Cardozo — Desarrollador Fullstack</title>`, `meta description`, `og:title`, `og:description`, `og:image` (URL absoluta a `/photo.jpg`), `og:type=website`, `twitter:card=summary_large_image`. Favicon: quitar `/vite.svg` (no existe en `public/`) por un SVG inline simple (iniciales "OC" con la paleta) como data URI.
- Sincronizar `document.documentElement.lang` con el estado `lang`.
- Idioma inicial: `navigator.language` empieza con "es" → es; si no → en.

### Fuera de alcance (anotado, no se ejecuta)
- A4: quitar teléfono del reverso de la foto — decisión personal del dueño.
- A5: monitoreo de links externos.
- Rendimiento de animaciones / peso del bundle.

## Verificación
- `npm run build` y `npm run lint` sin errores nuevos.
- Revisión manual: escritorio (>1200px), laptop (901–1200px) y móvil (≤900px), ES/EN, claro/oscuro, navegación con Tab + Enter.
