// Project data — add new projects here without touching any component
export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  imageKey: string;
  featured: boolean;
  tags: string[];
  imageAlt: string;
}

export const projects: Project[] = [
  {
    id: "tepexi-digital",
    title: "Tepexi Digital — Plataforma Turística y Cultural",
    description:
      "Desarrollé de forma integral una plataforma web para difundir la riqueza turística, cultural y gastronómica de Tepexi de Rodríguez, Puebla. Incluye un catálogo de lugares, gastronomía local, agenda de eventos, galería dinámica y mapas interactivos.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS", "Leaflet", "Vercel"],
    githubUrl: "https://github.com/Daavid-Anaya/tepexi-digital",
    liveUrl: "https://tepexidigital.com.mx/",
    imageUrl: "/projects/tepexi-digital.jpg",
    imageKey: "tepexi-digital",
    featured: true,
    tags: ["Full Stack", "Turismo", "CMS", "Mapas Interactivos"],
    imageAlt: "Captura de pantalla de Tepexi Digital, plataforma turística y cultural de Tepexi de Rodríguez",
  },
  {
    id: "forohub",
    title: "ForoHub — API REST con Spring Boot",
    description:
      "Desarrollé una API REST como parte de Oracle Next Education para gestionar los tópicos de un foro. Incluye autenticación con JWT, seguridad con Spring Security y persistencia de datos en MySQL.",
    techStack: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL", "Maven"],
    githubUrl: "https://github.com/Daavid-Anaya/challenge-forohub",
    liveUrl: undefined,
    imageKey: "forohub",
    featured: true,
    tags: ["Backend", "REST API", "Seguridad", "Oracle ONE"],
    imageAlt: "Representación de ForoHub, API REST de foro desarrollada con Spring Boot",
  },
  {
    id: "money-buddy",
    title: "Money Buddy — Dashboard Financiero",
    description:
      "Desarrollé el backend de Money Buddy, una aplicación de gestión financiera creada en equipo durante un hackathon de Oracle Next Education (ONE) G9 en No Country. La plataforma está orientada a ayudar a los usuarios a organizar sus gastos y comprender sus hábitos financieros.",
    techStack: ["Java", "Spring Boot", "React", "TypeScript", "Vite", "Docker"],
    githubUrl: "https://github.com/No-Country-simulation/team-23-g9-money-buddy",
    liveUrl: "https://money-buddy-frontend-lyart.vercel.app/",
    imageUrl: "/projects/moneybuddy.png",
    imageKey: "money-buddy",
    featured: true,
    tags: ["Full Stack", "Fintech", "Trabajo en Equipo", "Docker"],
    imageAlt: "Representación de Money Buddy, dashboard financiero full stack desarrollado en equipo",
  },
  {
    id: "gestion-credenciales",
    title: "Sistema de gestión de credenciales",
    description:
      "Desarrollé de forma integral un sistema web para gestionar las credenciales de los usuarios de una empresa. Incluye un panel administrativo para registrar, consultar, actualizar y eliminar credenciales, y una página de consulta de la información del usuario mediante códigos QR en las credenciales físicas.",
    techStack: ["Next.js 16", "React 19", "TypeScript 5", "Tailwind CSS 4", "Supabase Auth", "Supabase PostgreSQL", "qrcode", "Zod 4"],
    imageKey: "gestion-credenciales",
    featured: false,
    tags: ["Full Stack", "Freelance", "Gestión de credenciales", "QR"],
    imageAlt: "Representación de un sistema de gestión de credenciales con panel administrativo y consulta mediante códigos QR",
  },
];
