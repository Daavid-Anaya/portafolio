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
          "Licenciatura en Ciencias de la Computación en BUAP.",
        ],
      },
      {
        heading: "Programas de formación",
        bullets: [
          "Bootcamp de desarrollo con IA en Big School.",
          "Oracle Next Education G9 y G10.",
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
        heading: "Sistema de gestión de licencias",
        bullets: [
          "Acceso a información en tiempo real mediante QR.",
          "Panel administrativo para la gestión de licencias.",
        ],
      },
    ],
  },
  {
    id: "community-and-events",
    label: "Comunidad y eventos",
    title: "Participación en hackathons y eventos",
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
        heading: "Congreso",
        bullets: [
          "Participación como staff en Cyber Security Global Congress BUAP 2026.",
        ],
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
          "Contribuciones al repositorio Gentle-ai.",
        ],
      },
    ],
  },
];
