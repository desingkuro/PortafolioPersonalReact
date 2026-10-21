import { motion } from "motion/react"
import { Link } from "react-router"
import type { ProjectsInterface } from "../interfaces/contextInterfaces"

export interface ProjectCardProps {
    project: ProjectsInterface;
    featured?: boolean;
    onImageLoad?: () => void;
}

export default function ProjectCard({ project, featured = false, onImageLoad }: ProjectCardProps) {
    const { id, title, img, tecnologies, category, experience } = project
    const visibleTech = tecnologies.slice(0, 3)
    const extraTech = tecnologies.length - visibleTech.length

    return (
        <motion.article
            layoutId={`project-card-${id}`}
            style={{ viewTransitionName: `project-image-${id}` }}
            className={`
                group relative w-full overflow-hidden rounded-2xl
                border border-white/10 bg-neutral-900
                shadow-[0_18px_50px_-20px_rgba(0,0,0,0.9)]
                transition-colors duration-300 hover:border-white/25
                ${featured ? "aspect-[16/9] sm:aspect-[21/9]" : "aspect-[16/10]"}
            `}
        >
            <img
                onLoad={onImageLoad}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                src={img[0]}
                alt={`Captura del proyecto ${title}`}
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/5" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <span
                className={`
                    absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full
                    px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.16em]
                    backdrop-blur-md border
                    ${category === "experience"
                        ? "bg-black/60 text-[#ffb3b3] border-[#ff5555]/50"
                        : "bg-black/60 text-white/90 border-white/20"}
                `}
            >
                <span
                    className={`h-1.5 w-1.5 rounded-full ${category === "experience" ? "bg-[#ff5555]" : "bg-emerald-400"}`}
                />
                {category === "experience" ? experience?.company ?? "Experiencia" : "Proyecto personal"}
            </span>

            <Link
                to={`/projects/${id}`}
                aria-label={`Ver detalles de ${title}`}
                className="absolute inset-0 z-20 flex flex-col justify-end !p-5 sm:!p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950"
            >
                <div className="translate-y-1 transition-transform duration-300 group-hover:translate-y-0">
                    {category === "experience" && experience && (
                        <p className="!mb-1 text-[0.7rem] uppercase tracking-[0.18em] text-white/60">
                            {experience.role} · {experience.period}
                        </p>
                    )}

                    <div className="flex items-end justify-between !gap-4">
                        <h3 className={`neue-machina-ultraBold leading-tight text-white ${featured ? "text-2xl sm:text-4xl" : "text-xl sm:text-2xl"}`}>
                            {title}
                        </h3>
                        <span
                            aria-hidden="true"
                            className="shrink-0 text-xl text-white/70 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white"
                        >
                            →
                        </span>
                    </div>

                    <ul className="!mt-3 flex flex-wrap gap-1.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                        {visibleTech.map((tech) => (
                            <li
                                key={tech}
                                className="rounded-full border border-white/15 bg-black/40 px-2.5 py-1 text-[0.68rem] font-medium text-white/80 backdrop-blur-sm"
                            >
                                {tech}
                            </li>
                        ))}
                        {extraTech > 0 && (
                            <li className="rounded-full border border-white/15 bg-black/40 px-2.5 py-1 text-[0.68rem] font-medium text-white/80 backdrop-blur-sm">
                                +{extraTech}
                            </li>
                        )}
                    </ul>
                </div>
            </Link>
        </motion.article>
    )
}
