import { useContext } from "react"
import { contextoPrincipal } from "../../shared/providers/context/contexto"
import { useParams } from "react-router"
import { BiArrowBack } from "react-icons/bi"
import { useNavigate } from "react-router"
import { motion } from "motion/react"
import ProjectCarousel from "../../shared/components/ProjectCarrucel"
import Tag from "../../shared/components/Tag"
import SectionDetail from "../../shared/components/SectionDetail"

export default function DetailProject() {
    const navigate = useNavigate()
    const { id } = useParams()
    const { projects } = useContext(contextoPrincipal)
    const project = projects.find((project) => project.id === Number(id))

    return (
        <div className="w-full flex flex-col items-center justify-center">
            <div className=" flex w-[90%] flex-col gap-4">
                <BiArrowBack
                    onClick={() => navigate("/projects")}
                    className="w-10 h-10 cursor-pointer hover:opacity-80 hover:scale-110 transition-all duration-300 ease-in-out"
                />
                <motion.header
                    className="w-full flex flex-row items-center justify-center gap-2 h-auto rounded-[20px] overflow-hidden aspect-video"
                    layoutId={`project-card-${project?.id}`}
                    initial={{ opacity: 0.8 }}
                    animate={{ opacity: 1 }}
                    transition={{ layout: { duration: 0.5, ease: "easeInOut" }, opacity: { duration: 0.5, ease: "easeInOut" } }}
                >
                    <ProjectCarousel project={project!} />
                </motion.header>
                <main className="w-full flex flex-col justify-center !pt-6 !pb-12">
                    <h1 className="text-[3rem] neue-machina-ultraBold">{project?.title}</h1>
                    <section className="flex flex-wrap gap-4 md:w-[90%] sm:w-[95%] !py-2 min-w-[300px] items-center">
                        <p>{project?.description}</p>
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