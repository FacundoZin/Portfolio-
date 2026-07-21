export type Locale = "es" | "en";

export interface LinkField {
  url: string;
  label: string;
  type: "github" | "external";
}

export interface ExperienceItem {
  year: string;
  role: string;
  company: string;
  type: "employment" | "project";
  description: string;
  tech: readonly string[];
  link?: LinkField;
  image?: string;
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  location: string;
  status: string;
  description: string;
}

export interface PostItem {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  link: string;
}

interface DictionaryFields {
  portfolio: string;
  subtitle: string;
  scalable: string;
  llms: string;
  llmsHighlight: string;
  andBuild: string;
  enterprise: string;
  activeSearch: string;
  country: string;
  downloadCV: string;
  downloadCVEN: string;
  currently: string;
  softwareEngineer: string;
  currentCompany: string;
  present: string;
  stack: string;
  experienceTitle: string;
  experienceYears: string;
  employment: string;
  project: string;
  experiences: readonly ExperienceItem[];
  githubActivity: string;
  viewProfile: string;
  contributions: string;
  recentActivity: string;
  educationTitle: string;
  educationYears: string;
  completed: string;
  inProgress: string;
  education: readonly EducationItem[];
  postsTitle: string;
  posts: readonly PostItem[];
  readOnLinkedIn: string;
  letsTalk: string;
  openToOpportunities: string;
  findMeOn: string;
  footerRights: string;
  footerDesigned: string;
  aiNative: string;
  terminalTooltip: string;
  terminalClickLabel: string;
  terminalWelcome1: string;
  terminalWelcome2: string;
  terminalNotFound: string;
}

const dictionaries: Record<Locale, DictionaryFields> = {
  es: {
    portfolio: "PORTFOLIO / 2026",
    subtitle: "Software Engineer enfocado en el desarrollo de sistemas",
    scalable: " escalables",
    llms: " integración de",
    llmsHighlight: " LLMs",
    andBuild: " y construcción de aplicaciones y",
    enterprise: " Sistemas Empresariales",
    activeSearch: "Búsqueda activa de nuevas oportunidades",
    country: "Argentina",
    downloadCV: "Descargar CV (ES)",
    downloadCVEN: "Descargar CV (EN)",
    currently: "ACTUALMENTE",
    softwareEngineer: "Software Engineer",
    currentCompany: "Syntrax Software",
    present: "2025 — Presente",
    stack: "STACK",
    experienceTitle: "Experiencia & Proyectos",
    experienceYears: "2024 — 2026",
    employment: "empleo",
    project: "proyecto",
    experiences: [
      {
        year: "2025",
        role: "Software Engineer",
        company: "Syntrax Software",
        type: "employment",
        description:
          "Lidero el ciclo de vida completo de proyectos: desde el relevamiento hasta producción. Diseño arquitecturas modulares con DDD, implemento CI/CD con Docker y GitHub Actions, y aplico metodologías AINative como SDD para acelerar el desarrollo sin comprometer la calidad.",
        tech: ["C#", ".NET", "Docker", "GitHub Actions", "DDD", "SDD"],
        image: "/LogoSyntrax.png",
      },
      {
        year: "2025",
        role: "AI Integrator",
        company: "SSI Technologies",
        type: "employment",
        description:
          "Diseñé y desarrollé agentes de IA para automatización de flujos productivos con n8n. Implementé bases de datos vectoriales (Pinecone), ingeniería avanzada de prompts y flujos integrados con webhooks, Firestore y cloud functions.",
        tech: ["n8n", "Pinecone", "LLMs", "Prompt Engineering", "RAG"],
        image: "/ssiTechnologies.jpg",
      },
      {
        year: "2025",
        role: "Becario de Sistemas",
        company: "UTN",
        type: "employment",
        description:
          "Desarrollé un sistema web para la gestión integral de convenios institucionales. Relevé requisitos con stakeholders, implementé gestión documental, alertas de vencimiento y flujos de actualización de datos.",
        tech: ["TypeScript", "NestJS", "React", "PostgreSQL"],
        image: "/imagenUTN.jpg",
      },
      {
        year: "2025",
        role: "ASOCIARG",
        company: "Producto SaaS",
        type: "project",
        description:
          "Plataforma para la gestión integral de asociaciones civiles. Módulos de socios, viajes, cobros, reservas, portal de pagos e integración con Mercado Pago, WhatsApp y ARCA. Arquitectura monolítica y modular lista para deploy en VPS con Docker.",
        tech: ["C#", ".NET", "DDD", "Docker", "Mercado Pago", "Multi-tenant"],
        link: {
          url: "https://www.asociarg.cloud/",
          label: "Sitio Web",
          type: "external",
        },
        image: "/iconoasociarg.png",
      },
      {
        year: "2025",
        role: "AFRelay",
        company: "Contribución Open Source",
        type: "project",
        description:
          "Diseñé e implementé una arquitectura multi-client y persistencia en base de datos para este middleware de facturación de ARCA. Reemplacé el almacenamiento de certificados en firestore por PostgreSQL con cifrado para claves privadas, y refactoricé los endpoints para la resolución dinámica de credenciales por CUIT.",
        tech: [
          "Python",
          "PostgreSQL",
          "SQLAlchemy",
          "Alembic",
          "Docker",
          "Cryptography",
        ],
        link: {
          url: "https://github.com/FacundoZin/AFRelay",
          label: "GitHub",
          type: "github",
        },
      },
      {
        year: "2024",
        role: "Rappi Delivery App",
        company: "Proyecto académico",
        type: "project",
        description:
          "Backend monolítico y modular para la materia Metodología de Sistemas 2. Incluye autenticación, roles, gestión de restaurantes, pedidos, carrito y soporte. Documentado con diagramas UML.",
        tech: ["TypeScript", "NestJS", "PostgreSQL", "JWT", "UML"],
        link: {
          url: "https://github.com/FacundoZin/TP-Rappi-Metodolog-aDeSistemas-",
          label: "GitHub",
          type: "github",
        },
      },
    ],
    githubActivity: "Actividad en GitHub",
    viewProfile: "VER PERFIL →",
    contributions: "Contribuciones",
    recentActivity: "Actividad Reciente",
    educationTitle: "Educación",
    educationYears: "2022 — Presente",
    completed: "Completado",
    inProgress: "En curso",
    education: [
      {
        period: "2024 — 2026",
        degree: "Tecnicatura Universitaria en Programación",
        institution: "Universidad Tecnológica Nacional",
        location: "San Francisco, Córdoba",
        status: "Completado",
        description:
          "Formación técnica universitaria con énfasis en desarrollo de software, bases de datos, arquitectura de sistemas y metodologías de desarrollo. Actualmente realizando el trabajo final integrador de la carrera.",
      },
      {
        period: "Presente",
        degree: "Ingeniería en Sistemas",
        institution: "Universidad Tecnológica Nacional",
        location: "San Francisco, Córdoba",
        status: "En curso",
        description:
          "Carrera universitaria con enfoque en el diseño, desarrollo y gestión de sistemas de información. Integrando conocimientos de organización y negocios con arquitectura de software, bases de datos, inteligencia artificial y metodologías de desarrollo.",
      },
    ],
    postsTitle: "Publicaciones",
    posts: [
      {
        title:
          "Arquitectura Multi-tenant en SaaS: ¿Aislamiento por Software o por Infraestructura?",
        excerpt:
          "Una decisión de arquitectura clave en ASOCIARG fue cómo diseñar el multi-tenancy. Analizo las ventajas y desventajas de las distintas estrategias de aislamiento de datos.",
        date: "Hace 1 hora",
        readTime: "3 min",
        link: "https://www.linkedin.com/posts/facundozin_softwarearchitecture-multitenant-saas-share-7484280636321513472-GbNW/",
      },
      {
        title:
          "Gentle AI: Potenciando el Desarrollo Asistido por Agentes de IA",
        excerpt:
          "Descubrí cómo estructurar y potenciar el flujo de desarrollo con agentes de IA usando Gentle AI, Spec-Driven Development (SDD), Engram y CodeGraph.",
        date: "Hace 4 días",
        readTime: "4 min",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7483529244657061888/",
      },
      {
        title: "Integración automática con Mercado Pago dentro de ASOCIARG",
        excerpt:
          "Implementamos el flujo OAuth de Mercado Pago para lograr una vinculación de cuentas al instante, eliminando configuraciones manuales complejas para los usuarios.",
        date: "Hace 2 meses",
        readTime: "2 min",
        link: "https://www.linkedin.com/posts/asociarg_mercadopago-fintech-asociarg-ugcPost-7452339909484322816-B-vy/",
      },
      {
        title: "El camino de seguir actualizando e impulsando ASOCIARG",
        excerpt:
          "Emprender en tecnología es aceptar que nada está terminado. Comparto mis aprendizajes y la convicción detrás de la evolución de esta plataforma para instituciones civiles.",
        date: "Hace 4 meses",
        readTime: "2 min",
        link: "https://www.linkedin.com/posts/facundozin_saas-startups-construyendo-ugcPost-7438335200511737856-SRqx/",
      },
    ],
    readOnLinkedIn: "Leer en LinkedIn",
    letsTalk: "Hablemos",
    openToOpportunities:
      "Abierto a nuevas oportunidades, proyectos y conversaciones.",
    findMeOn: "ENCUENTRAME EN",
    footerRights: "© 2026 Facundo Zin. Todos los derechos reservados.",
    footerDesigned: "Diseñado y desarrollado por Facundo Zin",
    aiNative: "AI Native",
    terminalTooltip: "Terminal interactiva",
    terminalClickLabel: "Clickeá:",
    terminalWelcome1: "Bienvenido al shell interactivo de Facundo Zin.",
    terminalWelcome2: "Escribí 'help' para ver los comandos disponibles.",
    terminalNotFound:
      "comando no encontrado: {cmd}. Escribí 'help' para más opciones.",
  },
  en: {
    portfolio: "PORTFOLIO / 2026",
    subtitle: "Software Engineer focused on systems development",
    scalable: " scalable",
    llms: " integration of",
    llmsHighlight: " LLMs",
    andBuild: " and building applications and",
    enterprise: " Enterprise Systems",
    activeSearch: "Actively seeking new opportunities",
    country: "Argentina",
    downloadCV: "Download CV (ES)",
    downloadCVEN: "Download CV (EN)",
    currently: "CURRENTLY",
    softwareEngineer: "Software Engineer",
    currentCompany: "Syntrax Software",
    present: "2025 — Present",
    stack: "STACK",
    experienceTitle: "Experience & Projects",
    experienceYears: "2024 — 2026",
    employment: "employment",
    project: "project",
    experiences: [
      {
        year: "2025",
        role: "Software Engineer",
        company: "Syntrax Software",
        type: "employment",
        description:
          "I lead the complete project lifecycle: from requirements gathering to production. I design modular architectures with DDD, implement CI/CD with Docker and GitHub Actions, and apply AINative methodologies like SDD to accelerate development without compromising quality.",
        tech: ["C#", ".NET", "Docker", "GitHub Actions", "DDD", "SDD"],
        image: "/LogoSyntrax.png",
      },
      {
        year: "2025",
        role: "AI Integrator",
        company: "SSI Technologies",
        type: "employment",
        description:
          "Designed and developed AI agents for productive workflow automation with n8n. Implemented vector databases (Pinecone), advanced prompt engineering and integrated flows with webhooks, Firestore and cloud functions.",
        tech: ["n8n", "Pinecone", "LLMs", "Prompt Engineering", "RAG"],
        image: "/ssiTechnologies.jpg",
      },
      {
        year: "2025",
        role: "Systems Intern",
        company: "UTN",
        type: "employment",
        description:
          "Developed a web system for comprehensive management of institutional agreements. Gathered requirements with stakeholders, implemented document management, expiration alerts and data update workflows.",
        tech: ["TypeScript", "NestJS", "React", "PostgreSQL"],
        image: "/imagenUTN.jpg",
      },
      {
        year: "2025",
        role: "ASOCIARG",
        company: "SaaS Product",
        type: "project",
        description:
          "Platform for comprehensive management of civil associations. Modules for members, trips, payments, bookings, payment portal and integration with Mercado Pago, WhatsApp and ARCA. Monolithic and modular architecture ready for VPS deployment with Docker.",
        tech: ["C#", ".NET", "DDD", "Docker", "Mercado Pago", "Multi-tenant"],
        link: {
          url: "https://www.asociarg.cloud/",
          label: "Website",
          type: "external",
        },
        image: "/iconoasociarg.png",
      },
      {
        year: "2025",
        role: "AFRelay",
        company: "Open Source Contribution",
        type: "project",
        description:
          "Designed and implemented a multi-client architecture and database persistence for this ARCA billing middleware. Replaced certificate storage in Firestore with PostgreSQL with encryption for private keys, and refactored endpoints for dynamic credential resolution by CUIT.",
        tech: [
          "Python",
          "PostgreSQL",
          "SQLAlchemy",
          "Alembic",
          "Docker",
          "Cryptography",
        ],
        link: {
          url: "https://github.com/FacundoZin/AFRelay",
          label: "GitHub",
          type: "github",
        },
      },
      {
        year: "2024",
        role: "Rappi Delivery App",
        company: "Academic project",
        type: "project",
        description:
          "Modular monolithic backend for the Methodology of Systems 2 course. Includes authentication, roles, restaurant management, orders, cart and support. Documented with UML diagrams.",
        tech: ["TypeScript", "NestJS", "PostgreSQL", "JWT", "UML"],
        link: {
          url: "https://github.com/FacundoZin/TP-Rappi-Metodolog-aDeSistemas-",
          label: "GitHub",
          type: "github",
        },
      },
    ],
    githubActivity: "GitHub Activity",
    viewProfile: "VIEW PROFILE →",
    contributions: "Contributions",
    recentActivity: "Recent Activity",
    educationTitle: "Education",
    educationYears: "2022 — Present",
    completed: "Completed",
    inProgress: "In Progress",
    education: [
      {
        period: "2024 — 2026",
        degree: "University Technician in Programming",
        institution: "Universidad Tecnologica Nacional",
        location: "San Francisco, Cordoba",
        status: "Completed",
        description:
          "University technical education focused on software development, databases, systems architecture and development methodologies. Currently completing the final integrated project of the degree.",
      },
      {
        period: "Present",
        degree: "Systems Engineering",
        institution: "Universidad Tecnologica Nacional",
        location: "San Francisco, Cordoba",
        status: "In Progress",
        description:
          "University degree focused on the design, development and management of information systems. Integrating organization and business knowledge with software architecture, databases, artificial intelligence and development methodologies.",
      },
    ],
    postsTitle: "Publications",
    posts: [
      {
        title:
          "Multi-tenant Architecture in SaaS: Software or Infrastructure Isolation?",
        excerpt:
          "A key architecture decision in ASOCIARG was how to design multi-tenancy. I analyze the advantages and disadvantages of different data isolation strategies.",
        date: "1 hour ago",
        readTime: "3 min",
        link: "https://www.linkedin.com/posts/facundozin_softwarearchitecture-multitenant-saas-share-7484280636321513472-GbNW/",
      },
      {
        title: "Gentle AI: Powering AI Agent-Assisted Development",
        excerpt:
          "Discover how to structure and enhance the development flow with AI agents using Gentle AI, Spec-Driven Development (SDD), Engram and CodeGraph.",
        date: "4 days ago",
        readTime: "4 min",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7483529244657061888/",
      },
      {
        title: "Automatic Integration with Mercado Pago in ASOCIARG",
        excerpt:
          "We implemented Mercado Pago's OAuth flow to achieve instant account linking, eliminating complex manual configurations for users.",
        date: "2 months ago",
        readTime: "2 min",
        link: "https://www.linkedin.com/posts/asociarg_mercadopago-fintech-asociarg-ugcPost-7452339909484322816-B-vy/",
      },
      {
        title: "The Journey of Continuously Updating and Driving ASOCIARG",
        excerpt:
          "Entrepreneurship in technology means accepting that nothing is ever finished. I share my learnings and the conviction behind the evolution of this platform for civil institutions.",
        date: "4 months ago",
        readTime: "2 min",
        link: "https://www.linkedin.com/posts/facundozin_saas-startups-construyendo-ugcPost-7438335200511737856-SRqx/",
      },
    ],
    readOnLinkedIn: "Read on LinkedIn",
    letsTalk: "Let's Talk",
    openToOpportunities:
      "Open to new opportunities, projects and conversations.",
    findMeOn: "FIND ME ON",
    footerRights: "© 2026 Facundo Zin. All rights reserved.",
    footerDesigned: "Designed and developed by Facundo Zin",
    aiNative: "AI Native",
    terminalTooltip: "Interactive terminal",
    terminalClickLabel: "Click:",
    terminalWelcome1: "Welcome to Facundo Zin's interactive shell.",
    terminalWelcome2: "Type 'help' to see all available commands.",
    terminalNotFound: "command not found: {cmd}. Type 'help' for options.",
  },
};

export type Dictionary = DictionaryFields;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
