// Skills data — single source of truth for the skills section
const SKILL_LEVEL = {
  MASTERED: "mastered",
  LEARNING: "learning",
} as const;

export type SkillLevel = (typeof SKILL_LEVEL)[keyof typeof SKILL_LEVEL];

const SKILL_CATEGORY = {
  BACKEND: "backend",
  FRONTEND: "frontend",
  TOOLS: "tools",
  DATABASES: "databases",
  CLOUD: "cloud",
} as const;

export type SkillCategory = (typeof SKILL_CATEGORY)[keyof typeof SKILL_CATEGORY];

export interface Skill {
  name: string;
  icon: string; // icon component name (e.g., 'Java', 'SpringBoot')
  level: SkillLevel;
  category: SkillCategory;
}

export const skills: Skill[] = [
  // Backend — mastered
  { name: "Java", icon: "Java", level: "mastered", category: "backend" },
  { name: "Spring Boot", icon: "SpringBoot", level: "mastered", category: "backend" },
  { name: "REST APIs", icon: "", level: "mastered", category: "backend" },
  { name: "JPA / Hibernate", icon: "", level: "mastered", category: "backend" },
  { name: "Spring Security", icon: "SpringBoot", level: "mastered", category: "backend" },
  { name: "Next.js", icon: "NextJS", level: "learning", category: "backend"},

  // Frontend
  { name: "HTML / CSS", icon: "", level: "mastered", category: "frontend" },
  { name: "JavaScript", icon: "", level: "mastered", category: "frontend" },
  { name: "TypeScript", icon: "", level: "learning", category: "frontend" },
  { name: "Tailwind CSS", icon: "", level: "learning", category: "frontend" },
  { name: "React", icon: "", level: "learning", category: "frontend" },

  // Tools — mastered
  { name: "Git", icon: "", level: "mastered", category: "tools" },
  { name: "Maven", icon: "", level: "mastered", category: "tools" },
  { name: "Docker", icon: "", level: "mastered", category: "tools" },
  { name: "kubernetes", icon: "", level: "learning", category: "tools" },

  // Databases — mastered
  { name: "PostgreSQL", icon: "", level: "mastered", category: "databases" },
  { name: "MySQL", icon: "", level: "mastered", category: "databases" },

  // Cloud — learning
  { name: "Oracle Cloud", icon: "Oracle", level: "mastered", category: "cloud" },
  { name: "AWS", icon: "", level: "learning", category: "cloud" },
];

// Category display metadata
export interface SkillCategoryMeta {
  key: SkillCategory;
  label: string;
  description: string;
}

export const skillCategories: SkillCategoryMeta[] = [
  { key: "backend", label: "Backend", description: "Desarrollo del lado del servidor" },
  { key: "frontend", label: "Frontend", description: "Interfaces de usuario" },
  { key: "tools", label: "Herramientas", description: "Desarrollo y DevOps" },
  { key: "databases", label: "Bases de Datos", description: "Almacenamiento y consultas" },
  { key: "cloud", label: "Cloud / DevOps", description: "Nube e infraestructura" },
];
