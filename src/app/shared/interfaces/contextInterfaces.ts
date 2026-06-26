import type { ContactItemProps } from "../components/ContactItem";

export interface ProjectsInterface {
    id: number;
    title: string;
    tecnologies: string[];
    img: string[];
    git?: string;
    link?: { name: string, url: string }[] | null;
    description: string;
}

export interface SkillsInterface {
    item: React.ReactNode;
    nombre: string;
    color: string;
}

export interface EducationItem {
    title: string;
    institution: string;
    date: string;
}

export interface DataBlock {
    type: string;
    items: EducationItem[];
}

export interface ContextoPrincipal {
    projects: ProjectsInterface[];
    skills: SkillsInterface[];
    data: DataBlock[];
    contactItems: ContactItemProps[];
}

export interface ContextoProveedorProps {
    children: React.ReactNode;
}
