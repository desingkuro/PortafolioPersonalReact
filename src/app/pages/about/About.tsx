import { useContext } from "react";
import { motion } from "framer-motion";
import { contextoPrincipal } from "../../shared/providers/context/contexto";

const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, staggerChildren: 0.08 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function AboutPage() {
    const { skills, data } = useContext(contextoPrincipal);

    const aboutBlock = data.find((block: any) => block.type === "Formaciones");
    const coursesBlock = data.find((block: any) => block.type === "Cursos");

    return (
        <motion.main
            className="flex-1 w-full min-h-screen flex items-center justify-center !px-4 !py-16 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
        >
            <div className="w-full max-w-5xl !space-y-10">
                {/* Card: Más sobre mí */}
                <motion.section
                    className="
                        relative
                        rounded-3xl border border-white/10
                        bg-white/5 backdrop-blur-md
                        !px-6 sm:!px-10 !py-10
                        shadow-xl
                    "
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    <motion.div
                        className="flex flex-col items-center text-center !space-y-4"
                        variants={itemVariants}
                    >
                        <div className="flex items-center !gap-3 text-sm tracking-[0.25em] uppercase text-purple-300/80">
                            <span className="text-lg">✦</span>
                            <span>Más sobre mí</span>
                            <span className="text-lg">✦</span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                            Full Stack Developer
                        </h2>

                        <p className="max-w-3xl text-sm sm:text-base text-white/70">
                            Desarrollador enfocado en crear interfaces limpias, fluidas y
                            performantes, cuidando tanto la experiencia visual como la
                            arquitectura del código. Me interesa especialmente el ecosistema
                            JavaScript/TypeScript y la construcción de productos con impacto.
                        </p>
                    </motion.div>
                </motion.section>

                {/* Skills */}
                <motion.section
                    className="
                        rounded-3xl border border-white/10
                        bg-white/5 backdrop-blur-md
                        !px-5 sm:!px-8 !py-6
                        shadow-xl
                    "
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    <motion.header
                        className="flex items-center justify-between !mb-4"
                        variants={itemVariants}
                    >
                        <h3 className="text-lg sm:text-xl font-semibold">Stack principal</h3>
                        <span className="text-xs sm:text-sm text-white/50">
                            Herramientas que uso a diario
                        </span>
                    </motion.header>

                    <motion.div
                        className="
                            grid
                            grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
                            !gap-3 sm:!gap-4
                        "
                        variants={containerVariants}
                    >
                        {skills.map((skill: any, index: number) => (
                            <div
                                key={skill.nombre + index}

                                className="
                                    flex flex-col items-start justify-between
                                    rounded-2xl bg-black/30 border border-white/10
                                    !px-3 !py-3 sm:!px-4 sm:!py-4 hover:bg-black/50 transition-all duration-300 hover:scale-105
                                "
                            >
                                <div className="!mb-3">{skill.item}</div>
                                <p className="text-sm sm:text-base font-medium">
                                    {skill.nombre}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </motion.section>

                {/* Formaciones + Cursos */}
                <motion.section
                    className="
                        rounded-3xl border border-white/10
                        bg-white/5 backdrop-blur-md
                        !px-5 sm:!px-8 !py-8
                        shadow-xl
                    "
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 !gap-8"
                        variants={containerVariants}
                    >
                        {/* Formaciones */}
                        <motion.div variants={itemVariants}>
                            <h3 className="text-lg sm:text-2xl font-semibold !mb-4">
                                Formaciones
                            </h3>
                            <ul className="!space-y-4 text-sm sm:text-base">
                                {aboutBlock?.items.map((item: any, idx: number) => (
                                    <li key={item.title + idx}>
                                        <p className="font-medium">{item.title}</p>
                                        <p className="text-purple-300 text-sm">
                                            {item.institution}
                                        </p>
                                        <p className="text-xs sm:text-sm text-white/60">
                                            {item.date}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Cursos */}
                        <motion.div variants={itemVariants}>
                            <h3 className="text-lg sm:text-2xl font-semibold !mb-4">
                                Cursos
                            </h3>
                            <ul className="!space-y-4 text-sm sm:text-base max-h-[380px] md:max-h-none overflow-y-auto !pr-1">
                                {coursesBlock?.items.map((item: any, idx: number) => (
                                    <li key={item.title + idx}>
                                        <p className="font-medium">{item.title}</p>
                                        <p className="text-purple-300 text-sm">
                                            {item.institution}
                                        </p>
                                        <p className="text-xs sm:text-sm text-white/60">
                                            {item.date}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </motion.div>
                </motion.section>
            </div>
        </motion.main>
    );
}
