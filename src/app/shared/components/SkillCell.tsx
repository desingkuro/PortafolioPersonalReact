import { Link } from "react-router";
import type { ProjectsInterface, SkillsInterface } from "../interfaces/contextInterfaces";
import { getSkillCategory } from "../constants/skillCategories";

interface SkillCellProps {
    skill: SkillsInterface;
    projects: ProjectsInterface[];
}

export default function SkillCell({ skill, projects }: SkillCellProps) {
    const category = getSkillCategory(skill.category);
    const relatedProjects = (skill.projectIds ?? [])
        .map((id) => projects.find((project) => project.id === id))
        .filter((project): project is ProjectsInterface => Boolean(project));

    return (
        <article
            className="
                group relative flex h-full flex-col overflow-hidden rounded-2xl
                border border-white/10 bg-[#1b1b1b] !p-4
                transition-all duration-300 ease-out
                hover:-translate-y-1 hover:border-[#ff5555]/40 hover:bg-[#202020]
                focus-within:border-[#ff5555]/40 sm:!p-5
            "
        >
            <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#ff5555]/0 blur-2xl transition-colors duration-500 group-hover:bg-[#ff5555]/10"
            />

            <div className="relative flex items-start justify-between gap-3">
                <figure className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#141414] ring-1 ring-white/10 transition-transform duration-500 ease-out group-hover:scale-105 group-hover:rotate-3">
                    {skill.item}
                </figure>

                <span
                    className={`inline-flex items-center gap-1.5 whitespace-nowrap text-[0.6rem] font-semibold uppercase tracking-[0.16em] ${category.text}`}
                >
                    <span
                        aria-hidden="true"
                        className={`h-1.5 w-1.5 rounded-full ${category.dot}`}
                    />
                    {category.label}
                </span>
            </div>

            <h3 className="relative !mt-4 text-base leading-tight text-white/90 sm:text-lg">
                {skill.nombre}
            </h3>

            <p className="relative !mt-2 line-clamp-2 text-xs leading-relaxed text-white/50">
                {skill.description}
            </p>

            {relatedProjects.length > 0 && (
                <div className="relative !mt-4 flex flex-wrap gap-1.5 border-t border-white/5 !pt-3">
                    <span className="sr-only">Proyectos relacionados:</span>

                    {relatedProjects.slice(0, 2).map((project) => (
                        <Link
                            key={project.id}
                            to={`/projects/${project.id}`}
                            aria-label={`Ver proyecto ${project.title}`}
                            className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 !px-2.5 !py-1 text-[0.65rem] text-white/60 transition-colors duration-200 hover:border-[#ff5555]/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#141414]"
                        >
                            {project.title.split(" — ")[0]}
                            <span aria-hidden="true" className="text-[#ff8a8a]">
                                ↗
                            </span>
                        </Link>
                    ))}

                    {relatedProjects.length > 2 && (
                        <span className="inline-flex items-center rounded-full border border-white/5 !px-2.5 !py-1 text-[0.65rem] text-white/35">
                            +{relatedProjects.length - 2}
                        </span>
                    )}
                </div>
            )}
        </article>
    );
}
