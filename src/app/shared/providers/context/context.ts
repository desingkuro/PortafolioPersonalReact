import { createContext } from "react";
import type { ContextoPrincipal } from "../../interfaces/contextInterfaces";

export const contextoPrincipal = createContext<ContextoPrincipal>({
    projects: [],
    skills: [],
    data: [],
    contactItems: [],
});
