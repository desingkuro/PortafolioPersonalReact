import SkillCell from "../../shared/components/SkillCell";
import { useContext } from "react";
import { type SkillsInterface } from "../../shared/interfaces/contextInterfaces";
import { motion } from "framer-motion";
import { contextoPrincipal } from "../../shared/providers/context/contexto";

export default function Skills() {
    const { skills } = useContext(contextoPrincipal);

    return (
        <div className="flex-1 flex sm:h-full h-auto justify-center items-center !px-2 !pb-10 !pt-4">
            <motion.main
                className="
                    grid
                    grid-cols-[repeat(auto-fit,minmax(280px,1fr))]
                    w-full sm:w-[90%]
                    max-w-[1400px]   // 280px * 5
                    auto-rows-auto
                    gap-0
                "


                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
            >
                {/* Título */}
                <section className="bg-primary flex items-center justify-center col-span-full lg:col-span-2 h-[200px]">
                    <h1 className="sm:text-8xl text-6xl sm:mb-0 !mb-10">Skills</h1>
                </section>

                {/* Celdas */}
                {skills.map((skill: SkillsInterface, index: number) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className="w-full h-full"
                    >
                        <SkillCell
                            skill={skill}
                            bg={index % 2 === 0 ? "bg-primary" : "bg-secondary"}
                        />
                    </motion.div>
                ))}
            </motion.main>
        </div>
    );
}

