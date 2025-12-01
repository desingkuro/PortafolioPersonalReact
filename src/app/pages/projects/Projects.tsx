import ProjectCard from "../../shared/components/ProjectCard"
import { useContext } from "react"
import { contextoPrincipal } from "../../shared/providers/context/contexto"
import { motion } from "motion/react"
import { useState } from "react"

export default function Projects() {
    const { projects } = useContext(contextoPrincipal)
    const [loadimage, setLoadimage] = useState<boolean>(false)
    return (
        <div className="w-full flex flex-col !px-2">
            <header className="w-full flex flex-row items-center justify-center h-[80px] gap-2">
                <p className="text-[3rem] neue-machina-ultraBold">My</p>
                <p className="text-[3rem] gallery font-bold">Projects</p>
            </header>
            <main className="w-full flex items-center justify-center !py-6">
                <section className="flex flex-wrap sm:gap-4 gap-8 md:w-[90%] sm:w-[95%] !py-2 min-w-[320px] items-center justify-center">
                    {projects.map((project, index) => {
                        const isFullWidth = index % 3 === 0;
                        return (
                            <motion.div
                                key={project.id}
                                className={`${isFullWidth ? "w-full" : "sm:w-[calc(50%-10px)] w-full"} flex items-center justify-center`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={loadimage ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.5, ease: "easeInOut", delay: index * 0.1 }}
                                viewport={{ amount: 0.5, once: true }}
                            >
                                <ProjectCard
                                    title={project.title}
                                    image={project.img[0]}
                                    id={project.id}
                                    setLoadimage={setLoadimage}
                                />
                            </motion.div>
                        );
                    })}
                </section>
            </main>
        </div>
    )
}