
# Triblan

Sitio web corporativo para **Triblan Estudio Jurídico**. Diseño elegante y sobrio con acentos dorados, optimizado para SEO, accesibilidad y rendimiento.


## Características
 
- **Content Collections** con schema tipado — proyectos en Markdown con `image()` para optimización automática
- **Imágenes responsive** con `widths` y `sizes` — genera múltiples versiones webp por imagen
- **SEO completo** — Open Graph, Twitter Card y meta tags dinámicos por página de proyecto
- **Accesibilidad** — roles ARIA semánticos, `sr-only` en links de íconos, contraste WCAG AA
- **View Transitions** — navegación fluida entre páginas con `transition:name`
- **Grain texture** + **hero glow** — efectos de atmósfera sin dependencias externas
- **Fuentes preloaded** — `<link rel="preload">` para eliminar render-blocking
- **Dark theme** único — variables CSS globales consistentes en todo el proyecto

## Stack
 
| Categoría | Tecnología |
|---|---|
| Framework | Astro 5 |
| Estilos | TailwindCSS v4 |
| Lenguaje | TypeScript |
| Contenido | Astro Content Collections |
| Imágenes | astro:assets + Sharp |
| Fuentes | Outfit Variable + IBM Plex Mono (Fontsource) |
| Animaciones | View Transitions (ClientRouter) |
| Deploy | Vercel |

## Estructura del proyecto
 
```bash
src/
├── content/
│   ├── config.ts                  ← schema de la colección projects
│   └── projects/
│       ├── e-comerce-ui/
│       │   ├── index.md
│       │   └── cover.webp
│       ├── e-comerce-backend/
│       │   ├── index.md
│       │   └── cover.webp
│       └── ...                    ← 7 proyectos en total
│
├── components/
│   ├── ui/                        ← BaseHead, Nav, Badge, CtaButton...
│   ├── project/                   ← ProjectHero, ProjectMeta, ProjectGallery...
│   └── icons/
│
├── layouts/
│   └── BaseLayout.astro
│
├── pages/
│   ├── index.astro                ← home
│   └── project/
│       └── [id].astro             ← detalle dinámico de proyecto
│
└── styles/
    └── global.css                 ← @theme, keyframes, utilidades
```
 
## Colección de proyectos
 
Cada proyecto vive en su propia carpeta con un `index.md` y un `cover.webp`:
 
 
## Instalación
 
```bash

# Instalar dependencias
pnpm install

# Desarrollo
pnpm dev
 
# Build
pnpm build
 
# Preview del build
pnpm preview
```
 
> Requiere **Node.js 18+** y **pnpm**.
 
## Agregar un proyecto
 
1. Crea una carpeta en `src/content/projects/nombre-del-proyecto/`
2. Agrega `index.md` con el frontmatter completo
3. Agrega `cover.webp` en la misma carpeta (recomendado: `1200×630px`)
4. Si es `featured: true` aparece en la sección principal del home
 
## SEO
 
- `og:image` y `twitter:image` se generan automáticamente desde `image()` usando `new URL(image.src, Astro.site)`
- `og:image:width` y `og:image:height` se incluyen con las dimensiones reales del archivo
- Imagen OG por defecto: `/public/previewpage.jpg` para páginas sin imagen específica
- Sitemap generado automáticamente con `@astrojs/sitemap`

 
## Performance
 
Optimizaciones aplicadas:
 
- `<link rel="preload">` para fuentes críticas (Outfit + IBM Plex Mono)
- `font-display: swap` en todas las fuentes
- Imágenes con `widths={[320, 640, 960]}` y `sizes` responsive
- `fetchpriority="high"` en imágenes hero (LCP)
- `loading="lazy"` en galería e imágenes below the fold
- `quality={75}` en imágenes de cards
 
## Contacto

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/armando-cr/) [![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:armandocrescencio343@gmail.com) [![Portfolio](https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://chencho-dev.vercel.app)