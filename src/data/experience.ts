// Experience data — single source of truth for the experience section
export interface ExperienceGroup {
  heading: string;
  bullets: string[];
}

export interface ExperienceItem {
  id: string;
  label: string;
  title: string;
  period: string;
  groups: ExperienceGroup[];
}

export const experienceItems: ExperienceItem[] = [
  {
    id: "education",
    label: "Formación",
    title: "Formación académica y programas de desarrollo",
    period: "",
    groups: [
      {
        heading: "Formación académica",
        bullets: [
          "Licenciatura en Ciencias de la Computación en BUAP — último año de carrera.",
        ],
      },
      {
        heading: "Programas de formación",
        bullets: [
          "Oracle Next Education (ONE) G9 y G10 — formación completada.",
        ],
      },
    ],
  },
  {
    id: "freelance",
    label: "Freelance",
    title: "Desarrollo Freelance",
    period: "",
    groups: [
      {
        heading: "Sistema de gestión de credenciales",
        bullets: [
          "Desarrollo integral de un sistema web para administrar las credenciales de los usuarios de una empresa.",
          "Panel administrativo para registrar, consultar, actualizar y eliminar credenciales.",
          "Generación de códigos QR para credenciales físicas, vinculados a una página de consulta de la información del usuario.",
        ],
      },
    ],
  },
  {
    id: "community-and-events",
    label: "Comunidad y eventos",
    title: "Participación en comunidades y eventos",
    period: "",
    groups: [
      {
        heading: "Hackathons",
        bullets: [
          "Hackathon ONE G9 — LATAM.",
          "Hackathon ONE G10 — LATAM.",
        ],
      },
      {
        heading: "Comunidad",
        bullets: [
          "Participación en el AWS Student Builder Group (SBG) de la BUAP."
        ]
      },
      {
        heading: "Congreso",
        bullets: [
          "Participación como staff en Cyber Security Global Congress BUAP 2026.",
        ],
      },
      {
        heading: "Eventos y Conferencias",
        bullets: [
          "Asistencia a AWS Summit CDMX 2026.",
          "Asistencia a FePro BUAP 2026.",
          "Asistencia a PyDay México 2026.",
        ]
      },
    ],
  },
  {
    id: "open-source",
    label: "Open Source",
    title: "Contribuciones Open Source",
    period: "",
    groups: [
      {
        heading: "Gentle-ai",
        bullets: [
          "Reporte de errores mediante issues en el repositorio de Gentle AI.",
        ],
      },
    ],
  },
];
