export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
};

export const experience: ExperienceItem[] = [
  {
    company: "Cobli",
    role: "Visual Senior Designer",
    period: "Out 2025 — Atual",
  },
  {
    company: "Efí Bank",
    role: "Marketing Product Designer",
    period: "Out 2024 — Jun 2025",
  },
  {
    company: "Acerto",
    role: "Designer",
    period: "Jul 2022 — Out 2024",
  },
  {
    company: "Mercado Bitcoin",
    role: "Designer",
    period: "Abr 2021 — Jun 2022",
  },
  {
    company: "Hugny",
    role: "Designer",
    period: "Abr 2018 — Abr 2021",
  },
  {
    company: "Zooloja",
    role: "Web Designer",
    period: "Fev 2017 — Dez 2017",
  },
];

export type EducationItem = {
  course: string;
  institution: string;
  year: string;
};

export const education: EducationItem[] = [
  { course: "UI PRO", institution: "Curso especializado", year: "Dez 2024" },
  {
    course: "Design Circuit",
    institution: "Apparicio Junior",
    year: "Mai 2022",
  },
  {
    course: "Graduação em Design",
    institution: "Faculdade",
    year: "2014 — 2016",
  },
];

export const skills = [
  "UI/UX Design",
  "Design Visual",
  "Branding",
  "Direção de Arte",
  "Design Gráfico",
  "Design de Produto",
  "Prototipagem",
  "Design System",
  "Figma",
  "Adobe Creative Suite",
];
