# 📋 Instrucciones de Limpieza del Repositorio Portafolio

## 📌 Descripción General del Proyecto

Este es un **portafolio académico colaborativo** desarrollado en React + TypeScript + Vite. Es una actividad para la materia DevOps que aloja varios portafolios personales de diferentes estudiantes.

**Stack Tecnológico:**
- React 19 + TypeScript
- Vite (build tool)
- Tailwind CSS 4
- React Router (navegación)
- Lucide React (iconos)

**Composición del Repositorio:**
- CSS: 51%
- TypeScript: 47.7%
- Otros: 1.3%

---

## 🎯 Objetivo de la Limpieza

El objetivo es mantener **únicamente el portafolio de Oscar Cardozo** en el repositorio, eliminando todos los portafolios de otros estudiantes (Manuel, Pablo, Eliana) y consolidar la gestión de colores en el archivo `tailwind.config.ts`.

---

## 🗑️ CARPETAS Y ARCHIVOS A ELIMINAR

Estas carpetas contienen portafolios de otros estudiantes y **DEBEN SER ELIMINADAS**:

### En `src/pages/`:
- ❌ **`/pages/manuel/`** - Portafolio de Manuel Silva
  - ManuelPortafolio.tsx
  - ManuelPortafolio.css
  
- ❌ **`/pages/pablo/`** - Portafolio de Pablo
  - pablo.tsx
  - pablo.css (si existe)

- ❌ **`/pages/eliana/`** - Portafolio de Eliana
  - portfolioEliana.tsx
  - portfolioEliana.css (si existe)

- ❌ **`/pages/home/`** - Página home que enlaza a todos los portafolios
  - home.tsx
  - home.css

### En `src/assets/`:
- ❌ **`/assets/home/`** - Imágenes comunes del home
  - Perfil-Silva.jpg
  - Waikiki-imagen.png
  - Lyna.png
  - (y otros assets no usados por Oscar)

- ❌ **`/assets/manuel/`** - Todas las imágenes de Manuel

- ❌ **`/assets/pablo/`** - Todas las imágenes de Pablo

- ❌ **`/assets/eliana/`** - Todas las imágenes de Eliana

### En `src/`:
- ⚠️ **`App.tsx`** - MODIFICAR (no eliminar)
  - Eliminar las importaciones de: `Home`, `ManuelPage`, `PabloPage`, `ElianaPage`
  - Eliminar las rutas: `/pablo`, `/manuel`, `/eliana`, `/` (que apunta a Home)
  - Dejar solo: `/oscar` y `/` (que apunta a OscarPage)
  
- ⚠️ **`App.css`** - REVISAR y limpiar si contiene estilos globales no usados por Oscar

---

## ✅ CARPETAS Y ARCHIVOS A MANTENER

### Estructura que DEBE permanecer:

```
src/
├── pages/oscar/               ✅ MANTENER COMPLETO
│   ├── OscarPortafolio.tsx
│   ├── OscarPortafolio.css
│   └── grid.css
├── assets/oscar/              ✅ MANTENER COMPLETO
│   ├── Opieka.png
│   ├── Beneficiate.png
│   ├── CuidameTech.png
│   ├── Prodomotic.png
│   ├── mandala.png
│   ├── pincel.png
│   ├── arrow.png
│   └── portafolioImg.png
├── main.tsx                   ✅ MANTENER
├── index.css                  ✅ MANTENER (o limpiar si es necesario)
└── vite-env.d.ts             ✅ MANTENER

Raíz del proyecto:
├── package.json              ✅ MANTENER
├── package-lock.json         ✅ MANTENER
├── tsconfig.json            ✅ MANTENER
├── tsconfig.node.json       ✅ MANTENER
├── vite.config.ts           ✅ MANTENER
├── tailwind.config.ts        ✅ MANTENER (CRÍTICO - MEJORAR)
├── eslint.config.js         ✅ MANTENER
├── .gitignore               ✅ MANTENER
└── index.html               ✅ MANTENER
```

---

## 🎨 Gestión de Colores con Tailwind

**IMPORTANTE:** Todos los colores personalizados **DEBEN estar centralizados en `tailwind.config.ts`**

### Estructura recomendada de `tailwind.config.ts`:

```typescript
import type { Config } from 'tailwindcss';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Colores personalizados de Oscar
        primary: '#COLOR_HEX',
        secondary: '#COLOR_HEX',
        accent: '#COLOR_HEX',
        dark: '#COLOR_HEX',
        light: '#COLOR_HEX',
        // ... más colores según sea necesario
      },
      fontFamily: {
        // Fuentes personalizadas si las hay
      },
      spacing: {
        // Espaciados personalizados si los hay
      },
    },
  },
  plugins: [],
} satisfies Config;
```

### Requisitos obligatorios:
- ✅ NO usar colores hardcodeados en los archivos CSS
- ✅ NO usar valores hexadecimales o RGB inline en `.css` files
- ✅ Utilizar clases de Tailwind: `bg-primary`, `text-secondary`, `text-accent`, etc.
- ✅ Si hay estilos complejos que Tailwind no cubre, crear clases en `src/index.css` usando las variables de color de Tailwind
- ✅ Los archivos `OscarPortafolio.css` y `grid.css` deben referirse SOLO a estructura, no a colores

### Ejemplo de migración correcta:

**❌ Antes (incorrecto):**
```css
/* OscarPortafolio.css */
.headerOscar {
  background-color: #1a1a2e;
  color: #eee;
}

.card {
  border-color: #00d4ff;
}
```

**✅ Después (correcto):**
```css
/* OscarPortafolio.css - solo estructura */
.headerOscar {
  padding: 2rem;
  border-radius: 0.5rem;
}

.card {
  border-width: 1px;
}
```

```tsx
/* OscarPortafolio.tsx - usar clases de Tailwind */
<header className="card headerOscar bg-primary text-light">
  <h1><span>Oscar</span> <span>Cardozo</span></h1>
</header>

<section className="card border-accent">
  {/* contenido */}
</section>
```

```typescript
/* tailwind.config.ts */
colors: {
  primary: '#1a1a2e',
  light: '#eee',
  accent: '#00d4ff',
}
```

---

## 📝 Modificaciones Necesarias en `App.tsx`

### Archivo actual:
```typescript
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import OscarPage from './pages/oscar/OscarPortafolio'
import ManuelPage from './pages/manuel/ManuelPortafolio'
import PabloPage from './pages/pablo/pablo'
import ElianaPage from './pages/eliana/portfolioEliana';
import './App.css'

//Fusione lo mejor de ambos cambios
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oscar" element={<OscarPage />} />
        <Route path="/pablo" element={<PabloPage />} />
        <Route path="/manuel" element={<ManuelPage />} />
        <Route path="/eliana" element={<ElianaPage />} />
      </Routes>
    </Router>
  )
}

export default App;
```

### Archivo después de la limpieza:
```typescript
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import OscarPage from './pages/oscar/OscarPortafolio'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OscarPage />} />
        <Route path="/oscar" element={<OscarPage />} />
      </Routes>
    </Router>
  )
}

export default App;
```

### Cambios específicos:
1. ❌ Eliminar: `import Home from './pages/home/home'`
2. ❌ Eliminar: `import ManuelPage from './pages/manuel/ManuelPortafolio'`
3. ❌ Eliminar: `import PabloPage from './pages/pablo/pablo'`
4. ❌ Eliminar: `import ElianaPage from './pages/eliana/portfolioEliana'`
5. ✅ Mantener: `import OscarPage from './pages/oscar/OscarPortafolio'`
6. ✅ Mantener: `import './App.css'`
7. ❌ Eliminar: `<Route path="/" element={<Home />} />`
8. ✅ Cambiar: `<Route path="/" element={<OscarPage />} />`
9. ❌ Eliminar: `<Route path="/pablo" element={<PabloPage />} />`
10. ❌ Eliminar: `<Route path="/manuel" element={<ManuelPage />} />`
11. ❌ Eliminar: `<Route path="/eliana" element={<ElianaPage />} />`

---

## ✨ Checklist Completo de Limpieza

### Fase 1: Eliminar carpetas
- [ ] Eliminar carpeta `/src/pages/manuel/` completamente
- [ ] Eliminar carpeta `/src/pages/pablo/` completamente
- [ ] Eliminar carpeta `/src/pages/eliana/` completamente
- [ ] Eliminar carpeta `/src/pages/home/` completamente
- [ ] Eliminar carpeta `/src/assets/home/` completamente
- [ ] Eliminar carpeta `/src/assets/manuel/` completamente
- [ ] Eliminar carpeta `/src/assets/pablo/` completamente
- [ ] Eliminar carpeta `/src/assets/eliana/` completamente

### Fase 2: Actualizar archivos
- [ ] Modificar `src/App.tsx` según especificación
- [ ] Revisar `src/App.css` - limpiar estilos no usados
- [ ] Revisar `src/index.css` - limpiar estilos globales no usados

### Fase 3: Configurar Tailwind
- [ ] Actualizar `tailwind.config.ts` con todos los colores personalizados de Oscar
- [ ] Migrar colores hardcodeados de `OscarPortafolio.css` a Tailwind
- [ ] Migrar colores hardcodeados de `grid.css` a Tailwind
- [ ] Dejar en los archivos CSS solo propiedades de estructura (padding, margin, border-width, etc.)

### Fase 4: Verificación
- [ ] Ejecutar `npm install` para verificar que no hay conflictos
- [ ] Ejecutar `npm run dev` y verificar que no hay errores
- [ ] Verificar que la ruta `/` carga el portafolio de Oscar
- [ ] Verificar que la ruta `/oscar` carga el portafolio de Oscar
- [ ] Verificar que todos los colores se muestran correctamente
- [ ] Verificar que todas las imágenes de Oscar se cargan correctamente
- [ ] Ejecutar `npm run build` para compilar sin errores
- [ ] Ejecutar `npm run lint` para verificar que no hay problemas de código

### Fase 5: Documentación
- [ ] Actualizar `README.md` del proyecto con información sobre el portafolio de Oscar
- [ ] Documentar los colores utilizados en `tailwind.config.ts`

---

## 🚀 Comandos para verificar la limpieza

Después de completar todos los pasos, ejecutar estos comandos:

```bash
# Instalar dependencias (por si acaso)
npm install

# Verificar que el servidor de desarrollo funciona
npm run dev

# Compilar el proyecto
npm run build

# Verificar que no hay errores de linting
npm run lint
```

### Resultado esperado:
```
✅ npm run dev: Servidor iniciado sin errores
✅ npm run build: Compilación exitosa
✅ npm run lint: Sin problemas de linting
```

---

## 📌 Notas Importantes

### Seguridad y Respaldo
- **Antes de eliminar**: Hacer un respaldo de las carpetas a eliminar (por si acaso)
- **Usar Git**: Hacer commits pequeños después de cada fase

### Sobre las imágenes de Oscar
- ✅ Las rutas de imágenes en `OscarPortafolio.tsx` usan `src/assets/oscar/` - mantener así
- ✅ Verificar que todas las imágenes existen después de la limpieza
- ⚠️ Si alguna imagen no se carga, revisar la ruta

### Sobre los estilos
- ✅ `grid.css` - Mantener completamente, revisar si tiene colores hardcodeados
- ✅ `OscarPortafolio.css` - Migrar colores a Tailwind, mantener estructura
- ✅ `App.css` - Limpiar cualquier estilo global no usado

### Sobre las dependencias
- ✅ `lucide-react` - NO SE USA en el portafolio de Oscar, pero NO eliminar del package.json (por si hay cambios futuros)
- ✅ `react-router-dom` - MANTENER para las rutas
- ✅ `tailwindcss` - CRÍTICO para los colores

### Estructura final esperada
```
Portafolio/
├── src/
│   ├── assets/oscar/          (solo Oscar)
│   ├── pages/oscar/           (solo Oscar)
│   ├── App.tsx                (actualizado)
│   ├── App.css                (limpiado)
│   ├── index.css              (limpiado)
│   ├── main.tsx               (sin cambios)
│   └── vite-env.d.ts          (sin cambios)
├── package.json               (sin cambios)
├── tailwind.config.ts         (MEJORADO con colores)
├── vite.config.ts             (sin cambios)
├── tsconfig.json              (sin cambios)
├── eslint.config.js           (sin cambios)
├── index.html                 (sin cambios)
├── .gitignore                 (sin cambios)
├── README.md                  (actualizado - opcional)
└── INSTRUCCIONES_LIMPIEZA.md  (este archivo)
```

---

## 🎓 Contexto del Proyecto

**Materia:** DevOps  
**Tipo:** Actividad de portafolio  
**Portafolios a mantener:** Oscar Cardozo  
**Portafolios a eliminar:** Manuel Silva, Pablo, Eliana  

Este repositorio será un portafolio personal de Oscar Cardozo con acceso directo desde `/` y `/oscar`.

---

## ✅ Conclusión

Una vez completados todos los pasos:
- ✅ El repositorio contendrá SOLO el portafolio de Oscar
- ✅ Los colores serán gestionados centralmente en Tailwind
- ✅ El proyecto será más limpio y fácil de mantener
- ✅ No habrá archivos ni carpetas huérfanas

**¡El repositorio estará listo para presentar como portafolio profesional!**
