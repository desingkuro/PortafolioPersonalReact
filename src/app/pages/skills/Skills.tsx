import SkillCell from "../../shared/components/SkillCell";
import { useContext } from "react";
import { type SkillsInterface } from "../../shared/interfaces/contextInterfaces";
import { motion } from "motion/react";
import { contextoPrincipal } from "../../shared/providers/context/context";
import SEOHelmet from "../../shared/components/SEOHelmet";

export default function Skills() {
    const { skills } = useContext(contextoPrincipal);

    return (
        <div className="flex w-full flex-col items-center !px-4 !pt-6 !pb-16 sm:!px-6">
            <SEOHelmet
                title="Habilidades"
                description="Stack tecnológico de Andrés Licona: React, Angular, TypeScript, Node.js, PostgreSQL, Python, React Native y NestJS."
            />

            <header className="w-full max-w-5xl !mb-8">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.24em] text-[#ff5555]">
                    Herramientas
                </p>
                <div className="!mt-1 flex flex-wrap items-end justify-between gap-3">
                    <h1 className="text-4xl leading-none sm:text-5xl neue-machina-ultraBold">
                        Skills
                    </h1>
                    <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/60">
                        {skills.length} tecnologías
                    </span>
                </div>
                <p className="!mt-2 max-w-xl text-sm text-white/55">
                    Las herramientas con las que construyo productos de punta a punta,
                    desde la interfaz hasta la base de datos.
                </p>
            </header>

            <motion.ul
                className="grid w-full max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4"
                initial="hidden"
                animate="show"
                variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.06 } },
                }}
            >
                {skills.map((skill: SkillsInterface) => (
                    <motion.li
                        key={skill.nombre}
                        className="h-full"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            show: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                            },
                        }}
                    >
                        <SkillCell skill={skill} />
                    </motion.li>
                ))}
            </motion.ul>
        </div>
    );
}
