import type { SkillCategory } from "../interfaces/contextInterfaces";

export interface SkillCategoryMeta {
    value: SkillCategory;
    label: string;
    description: string;
    dot: string;
    text: string;
}

export const SKILL_CATEGORIES: SkillCategoryMeta[] = [
    {
        value: "frontend",
        label: "Frontend",
        description: "Interfaces, estado y experiencia de usuario.",
        dot: "bg-sky-400",
        text: "text-sky-300",
    },
    {
        value: "backend",
        label: "Backend",
        description: "APIs, servicios y mensajería.",
        dot: "bg-emerald-400",
        text: "text-emerald-300",
    },
    {
        value: "mobile",
        label: "Mobile & Desktop",
        description: "Aplicaciones nativas y de escritorio.",
        dot: "bg-violet-400",
        text: "text-violet-300",
    },
    {
        value: "database",
        label: "Bases de datos",
        description: "Persistencia, modelado y sincronización.",
        dot: "bg-amber-400",
        text: "text-amber-300",
    },
    {
        value: "data",
        label: "Data & ML",
        description: "Análisis de datos y machine learning.",
        dot: "bg-pink-400",
        text: "text-pink-300",
    },
    {
        value: "architecture",
        label: "Arquitectura",
        description: "Diseño de sistemas mantenibles y escalables.",
        dot: "bg-orange-400",
        text: "text-orange-300",
    },
    {
        value: "tools",
        label: "Herramientas",
        description: "Control de versiones, testing y flujo de trabajo.",
        dot: "bg-slate-400",
        text: "text-slate-300",
    },
];

export function getSkillCategory(value: SkillCategory): SkillCategoryMeta {
    return SKILL_CATEGORIES.find((category) => category.value === value) ?? SKILL_CATEGORIES[0];
}
