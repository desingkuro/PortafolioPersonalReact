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

export interface DataInterface {
    type: string;
    items: any[];
}

export interface ContextoPrincipal {
    projects: ProjectsInterface[];
    skills: any[];
    data: any[];
    contactItems: ContactItemProps[];
}

export interface ContextoProveedorProps {
    children: React.ReactNode;
}