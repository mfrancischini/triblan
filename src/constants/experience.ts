import type { Experience } from "../types/experience";

export const experience: Experience[] = [
  {
    title: 'Fullstack Web Developer',
    company: 'Freelance',
    link: 'https://github.com/Chencho34',
    modality: 'Remoto',
    period: '01 / 2025 - Presente',
    currentJob: true,
    exp: [
      'Desarrollé soluciones web fullstack para 4 clientes de distintos sectores, cubriendo el ciclo completo: relevamiento de requerimientos, desarrollo iterativo y despliegue en Vercel/Netlify.',
      'Construí landing pages con Astro (SSG), TypeScript y TailwindCSS aplicando SEO técnico completo: metadatos estructurados, Open Graph, JSON-LD Schema.org y sitemap automatizado, alcanzando puntuaciones Lighthouse superiores a 95 en Performance y Accessibility.',
      'Implementé SPAs con React y TypeScript integrando validación de formularios con React Hook Form + Zod, animaciones con Framer Motion y consumo de APIs externas.',
      'Desarrollé APIs RESTful con Node.js, autenticación por roles y gestión de bases de datos relacionales y no relacionales según requerimientos de cada proyecto.',
      'Desarrollé un chatbot para agendamiento de citas vía WhatsApp integrando la API de Twilio con Node.js, TypeScript y Express sobre arquitectura REST reduciendo en un 60% las llamadas telefónicas y habilitando atención al cliente 24/7 de forma autoservicio.',
    ],
    technologies: ['React', 'Astro', 'TypeScript', 'Node.js', 'TailwindCSS', 'Docker', 'Vercel', 'Netlify'],
  },
  {
    title: 'FullStack Developer',
    company: 'Center - Soft',
    link: 'https://centersoft.com.mx/',
    location: 'CDMX',
    modality: 'Remoto',
    period: '12 / 2023 - 12 / 2024',
    currentJob: false,
    exp: [
      'Desarrollé 5+ módulos de la plataforma en producción: bolsa de trabajo, simuladores de examen, sistema de autenticación multi-rol y panel de administración, cubriendo desde el diseño de UI hasta la integración con API.',
      'Implementé el frontend con Next.js 14 (App Router), TypeScript y TailwindCSS, estructurando capas públicas, de estudiante y administrativas con middleware de autenticación y rutas protegidas.',
      'Optimicé el rendimiento del frontend mediante code splitting, lazy loading y optimización de assets, aprovechando las optimizaciones nativas de Next.js, logrando una mejora del 80% en tiempos de carga y +98 en Lighthouse.',
      'Colaboré al desarrollo backend con Java 17 + Spring Boot 3 + MySQL, exponiendo 15+ endpoints REST con autenticación JWT, control de acceso por roles (Spring Security) y documentación automática con Swagger.',
      'Colaboré en code reviews contribuyendo a la reducción de errores en producción en un 35%.',
      'Colaboré desde la definición de requerimientos funcionales hasta el despliegue en producción, adquiriendo experiencia en el ciclo de vida completo del desarrollo de software bajo metodologías SCRUM (sprints, daily, retrospectivas).',
    ],
    technologies: ['Next.js', 'TailwindCSS', 'Framer Motion', 'Java', 'Spring Boot', 'MySQL', 'Git', 'SCRUM'],
  }
]
