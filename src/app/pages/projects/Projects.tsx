import { useContext } from "react"
import { motion } from "motion/react"
import ProjectCard from "../../shared/components/ProjectCard"
import SEOHelmet from "../../shared/components/SEOHelmet"
import { contextoPrincipal } from "../../shared/providers/context/context"
import type { ProjectsInterface } from "../../shared/interfaces/contextInterfaces"

interface SectionHeadingProps {
    eyebrow: string;
    title: string;
    description: string;
    count: number;
    id: string;
}

function SectionHeading({ eyebrow, title, description, count, id }: SectionHeadingProps) {
    return (
        <header className="!mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.24em] text-[#ff5555]">
                    {eyebrow}
                </p>
                <h2 id={id} className="!mt-1 text-2xl sm:text-3xl neue-machina-ultraBold">
                    {title}
                </h2>
                <p className="!mt-1 max-w-xl text-sm text-white/55">{description}</p>
            </div>
            <span className="w-fit shrink-0 self-start rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/60 sm:self-auto">
                {count} {count === 1 ? "elemento" : "elementos"}
            </span>
        </header>
    )
}

function ProjectGrid({ items, featureFirst = false }: { items: ProjectsInterface[]; featureFirst?: boolean }) {
    return (
        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
            {items.map((project, index) => {
                const featured = featureFirst && index === 0
                return (
                    <motion.div
                        key={project.id}
                        className={featured ? "md:col-span-2" : ""}
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: index * 0.06 }}
                    >
                        <ProjectCard project={project} featured={featured} />
                    </motion.div>
                )
            })}
        </div>
    )
}

export default function Projects() {
    const { projects } = useContext(contextoPrincipal)
    const experience = projects.filter((project) => project.category === "experience")
    const personalProjects = projects.filter((project) => project.category === "project")

    return (
        <div className="w-full flex flex-col !px-3 sm:!px-6 !pb-20">
            <SEOHelmet
                title="Proyectos y experiencia"
                description="Experiencia laboral y proyectos de Andrés Licona: ServiConnect, App PUC, FotoMulta, Tickets, Tesla, Machine Learning, Memory Game y Aura SDDM Manager."
            />

            <header className="w-full flex flex-col items-center justify-center gap-2 !pt-4 !pb-8 text-center">
                <p className="text-[0.7rem] uppercase tracking-[0.3em] text-white/45">
                    Work &amp; Projects
                </p>
                <h1 className="flex flex-wrap items-baseline justify-center gap-3 text-[2.4rem] sm:text-[3.5rem] leading-none">
                    <span className="neue-machina-ultraBold">Mi</span>
                    <span className="gallery font-bold">Trabajo</span>
                </h1>
                <p className="max-w-2xl text-sm sm:text-base text-white/55">
                    Una selección de los productos en los que he trabajado y de los proyectos
                    que he construido por cuenta propia.
                </p>
            </header>

            <nav
                aria-label="Ir a secciones"
                className="mx-auto !mb-10 flex flex-wrap items-center justify-center gap-2"
            >
                <a
                    href="#experiencia"
                    className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-white/5 !px-5 text-sm text-white/75 transition-colors duration-200 hover:border-[#ff5555]/50 hover:bg-[#ff5555]/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#141414]"
                >
                    Experiencia laboral
                    <span className="text-[0.7rem] text-white/45">{experience.length}</span>
                </a>
                <a
                    href="#proyectos"
                    className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 bg-white/5 !px-5 text-sm text-white/75 transition-colors duration-200 hover:border-[#ff5555]/50 hover:bg-[#ff5555]/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#141414]"
                >
                    Proyectos
                    <span className="text-[0.7rem] text-white/45">{personalProjects.length}</span>
                </a>
            </nav>

            <section
                id="experiencia"
                aria-labelledby="experiencia-title"
                className="w-full scroll-mt-24 md:w-[92%] lg:w-[88%] mx-auto"
            >
                <SectionHeading
                    id="experiencia-title"
                    eyebrow="Trayectoria"
                    title="Experiencia laboral"
                    description="Productos desarrollados profesionalmente en ServiConnect, cubriendo frontend, estado y APIs."
                    count={experience.length}
                />
                <ProjectGrid items={experience} />
            </section>

            <div className="mx-auto !my-12 h-px w-full max-w-3xl bg-gradient-to-r from-transparent via-white/15 to-transparent" />

            <section
                id="proyectos"
                aria-labelledby="proyectos-title"
                className="w-full scroll-mt-24 md:w-[92%] lg:w-[88%] mx-auto"
            >
                <SectionHeading
                    id="proyectos-title"
                    eyebrow="Selección personal"
                    title="Proyectos"
                    description="Aplicaciones móviles, web, machine learning y herramientas de escritorio construidas de principio a fin."
                    count={personalProjects.length}
                />
                <ProjectGrid items={personalProjects} featureFirst />
            </section>
        </div>
    )
}
