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
      "Plataforma web para visibilizar la riqueza turística, cultural, gastronómica e informativa de Tepexi de Rodríguez, Puebla. Integra catálogo de lugares, gastronomía local, agenda de eventos, galería dinámica y mapas interactivos para impulsar la identidad local.",
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
      "API REST desarrollada como parte de Oracle Next Education para replicar el funcionamiento backend de un foro. Incluye gestión de tópicos, autenticación con JWT, seguridad con Spring Security y persistencia de datos relacional.",
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
      "Aplicación full stack desarrollada como proyecto de cierre del programa Oracle Next Education (ONE) G9 durante un hackathon en la plataforma No Country. Esta solución fintech es un asistente inteligente de salud financiera diseñado para empoderar a los usuarios a comprender sus hábitos, organizar sus gastos y tomar decisiones financieras consistentes.",
    techStack: ["Java", "Spring Boot", "React", "TypeScript", "Vite", "Docker"],
    githubUrl: "https://github.com/No-Country-simulation/team-23-g9-money-buddy",
    liveUrl: "https://money-buddy-frontend-lyart.vercel.app/",
    imageUrl: "/projects/moneybuddy.png",
    imageKey: "money-buddy",
    featured: true,
    tags: ["Full Stack", "Fintech", "Trabajo en Equipo", "Docker"],
    imageAlt: "Representación de Money Buddy, dashboard financiero full stack desarrollado en equipo",
  },
];
