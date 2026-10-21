import { useContext } from "react"
import { contextoPrincipal } from "../../shared/providers/context/context"
import { Link, useParams } from "react-router"
import { BiArrowBack } from "react-icons/bi"
import { motion } from "motion/react"
import ProjectCarousel from "../../shared/components/ProjectCarrucel"
import SectionDetail from "../../shared/components/SectionDetail"
import SEOHelmet from "../../shared/components/SEOHelmet"

export default function DetailProject() {
    const { id } = useParams()
    const { projects } = useContext(contextoPrincipal)
    const project = projects.find((project) => project.id === Number(id))
    const projectTitle = project?.title || "Proyecto no encontrado"
    const projectDescription = project?.description?.slice(0, 160) || "Detalle del proyecto de Andrés Licona."
    const isExperience = project?.category === "experience"

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <SEOHelmet title={projectTitle} description={projectDescription} />
            <div className="flex w-full max-w-6xl flex-col gap-5 !px-4">
                <Link
                    to="/projects"
                    aria-label="Volver a proyectos"
                    className="inline-flex min-h-11 w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 !px-4 text-sm text-white/70 transition-colors duration-200 hover:border-white/25 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#141414]"
                >
                    <BiArrowBack aria-hidden="true" className="h-5 w-5" />
                    Volver
                </Link>

                <motion.header
                    className="w-full flex flex-row items-center justify-center gap-2 h-auto rounded-[20px] overflow-hidden aspect-video"
                    layoutId={`project-card-${project?.id}`}
                    initial={{ opacity: 0.8 }}
                    animate={{ opacity: 1 }}
                    transition={{ layout: { duration: 0.5, ease: "easeInOut" }, opacity: { duration: 0.5, ease: "easeInOut" } }}
                >
                    <ProjectCarousel project={project!} />
                </motion.header>

                <main className="w-full flex flex-col justify-center !pt-4 !pb-16">
                    <div className="flex flex-wrap items-center gap-3">
                        <span
                            className={`
                                inline-flex items-center gap-1.5 rounded-full border px-3 py-1
                                text-[0.68rem] font-bold uppercase tracking-[0.16em]
                                ${isExperience
                                    ? "bg-[#ff5555]/15 text-[#ffb3b3] border-[#ff5555]/40"
                                    : "bg-white/10 text-white/80 border-white/20"}
                            `}
                        >
                            <span className={`h-1.5 w-1.5 rounded-full ${isExperience ? "bg-[#ff5555]" : "bg-emerald-400"}`} />
                            {isExperience ? "Experiencia laboral" : "Proyecto personal"}
                        </span>
                        {isExperience && project?.experience && (
                            <span className="text-sm text-white/55">
                                {project.experience.company} · {project.experience.role}
                            </span>
                        )}
                    </div>

                    <h1 className="!mt-4 text-[2.2rem] sm:text-[3rem] leading-tight neue-machina-ultraBold">
                        {projectTitle}
                    </h1>

                    {isExperience && project?.experience && (
                        <p className="!mt-1 text-sm uppercase tracking-[0.18em] text-white/45">
                            {project.experience.period}
                        </p>
                    )}

                    <section className="!mt-5 flex flex-wrap gap-4 md:w-[90%] sm:w-[95%] !py-2 min-w-[300px] items-center">
                        <p className="leading-relaxed text-white/75">{project?.description}</p>
                    </section>

                    {project?.tecnologies && <SectionDetail
                        title="Tecnologías"
                        listItems={project?.tecnologies || []}
                        type="tecnologies"
                    />}
                    {project?.link && <SectionDetail
                        title="Enlaces"
                        listItems={project?.link || []}
                        type="links"
                    />}
                </main>
            </div>
        </div>
    )
}
