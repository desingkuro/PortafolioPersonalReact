import { useContext } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { contextoPrincipal } from "../../shared/providers/context/context";
import type { SkillsInterface, DataBlock, EducationItem, ProjectsInterface } from "../../shared/interfaces/contextInterfaces";
import SEOHelmet from "../../shared/components/SEOHelmet";
import DownloadCV from "../../shared/components/DownloadCV";

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
    const { skills, data, projects } = useContext(contextoPrincipal);

    const aboutBlock = data.find((block: DataBlock) => block.type === "Formaciones");
    const coursesBlock = data.find((block: DataBlock) => block.type === "Cursos");
    const experienceProjects = projects.filter(
        (project: ProjectsInterface) => project.category === "experience"
    );
    const personalProjects = projects.filter(
        (project: ProjectsInterface) => project.category === "project"
    );
    const experienceMeta = experienceProjects[0]?.experience;
    const coreSkills = skills.filter((skill: SkillsInterface) => skill.featured);

    return (
        <motion.main
            className="flex-1 w-full min-h-screen flex items-center justify-center !px-4 !py-16 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
        >
            <SEOHelmet
                title="Sobre mí"
                description="Conoce la experiencia laboral de Andrés Licona en ServiConnect, sus proyectos personales, formación y habilidades como desarrollador Full Stack."
            />
            <div className="w-full max-w-5xl !space-y-10">
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
                        <div className="flex items-center !gap-3 text-sm tracking-[0.25em] uppercase text-[#ff8a8a]">
                            <span className="text-lg">✦</span>
                            <span>Más sobre mí</span>
                            <span className="text-lg">✦</span>
                        </div>

                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                            Full Stack Developer
                        </h1>

                        <p className="max-w-3xl text-sm sm:text-base text-white/70">
                            Desarrollador Full-Stack con más de 2 años de experiencia
                            construyendo aplicaciones web escalables con Angular, React y
                            NestJS. Especializado en APIs RESTful, arquitecturas de
                            microservicios y mensajería asíncrona con RabbitMQ, con base
                            sólida en PostgreSQL y Firebase. Enfocado en código mantenible,
                            buenas prácticas y soluciones alineadas con el negocio.
                        </p>
                    </motion.div>
                </motion.section>

                {experienceMeta && (
                    <motion.section
                        id="experiencia"
                        aria-labelledby="about-experiencia-title"
                        className="
                            scroll-mt-24 rounded-3xl border border-white/10
                            bg-white/5 backdrop-blur-md
                            !px-5 sm:!px-8 !py-6
                            shadow-xl
                        "
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                    >
                        <motion.header
                            className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"
                            variants={itemVariants}
                        >
                            <div>
                                <p className="text-[0.7rem] font-bold uppercase tracking-[0.24em] text-[#ff5555]">
                                    Trayectoria
                                </p>
                                <h2
                                    id="about-experiencia-title"
                                    className="!mt-1 text-lg font-semibold sm:text-2xl"
                                >
                                    Experiencia laboral
                                </h2>
                                <p className="!mt-1 max-w-2xl text-sm text-white/55">
                                    Mi etapa profesional en ServiConnect, desarrollando
                                    productos para la gestión de infracciones y el soporte
                                    operativo.
                                </p>
                            </div>
                            <Link
                                to="/projects#experiencia"
                                className="group inline-flex w-fit items-center gap-1.5 text-sm font-medium text-[#ff8a8a] transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#141414]"
                            >
                                Ver experiencia completa
                                <span
                                    aria-hidden="true"
                                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                                >
                                    →
                                </span>
                            </Link>
                        </motion.header>

                        <div className="relative !mt-6 !border-l !border-white/10 !pl-6 sm:!pl-8">
                            <span
                                aria-hidden="true"
                                className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-[#ff5555] ring-4 ring-[#ff5555]/15"
                            />
                            <motion.div variants={itemVariants}>
                                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                                    <div>
                                        <h3 className="text-base font-semibold sm:text-lg">
                                            {experienceMeta.company}
                                        </h3>
                                        <p className="text-sm text-[#ff8a8a]">
                                            {experienceMeta.role}
                                        </p>
                                    </div>
                                    <p className="text-xs text-white/45 sm:text-sm">
                                        {experienceMeta.period}
                                    </p>
                                </div>

                                <p className="!mt-3 max-w-3xl text-sm text-white/65">
                                    Desarrollé interfaces y servicios para FotoMulta
                                    (Angular) y Tickets (React), cubriendo estado global,
                                    autenticación y sincronización en tiempo real. También
                                    participé en PCentral (NestJS, RabbitMQ y PostgreSQL),
                                    aportando a la capa de APIs y persistencia.
                                </p>

                                <ul className="!mt-4 grid gap-3 sm:grid-cols-2">
                                    {experienceProjects.map((project: ProjectsInterface) => (
                                        <li key={project.id}>
                                            <Link
                                                to={`/projects/${project.id}`}
                                                className="
                                                    group flex h-full flex-col rounded-2xl
                                                    border border-white/10 bg-black/25 !p-4
                                                    transition-colors duration-200
                                                    hover:border-[#ff5555]/40 hover:bg-black/40
                                                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white
                                                    focus-visible:ring-offset-2 focus-visible:ring-offset-[#141414]
                                                "
                                            >
                                                <span className="flex items-start justify-between gap-2">
                                                    <span className="font-medium">
                                                        {project.title}
                                                    </span>
                                                    <span
                                                        aria-hidden="true"
                                                        className="text-[#ff8a8a] transition-transform duration-200 group-hover:translate-x-0.5"
                                                    >
                                                        →
                                                    </span>
                                                </span>
                                                <span className="!mt-1 line-clamp-2 text-xs leading-relaxed text-white/55">
                                                    {project.description}
                                                </span>
                                                <span className="!mt-3 flex flex-wrap gap-1.5">
                                                    {project.tecnologies
                                                        .slice(0, 3)
                                                        .map((tech: string) => (
                                                            <span
                                                                key={tech}
                                                                className="rounded-full border border-white/10 bg-white/5 !px-2.5 !py-0.5 text-[0.65rem] text-white/55"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    </motion.section>
                )}

                <motion.section
                    id="proyectos"
                    aria-labelledby="about-proyectos-title"
                    className="
                        scroll-mt-24 rounded-3xl border border-white/10
                        bg-white/5 backdrop-blur-md
                        !px-5 sm:!px-8 !py-6
                        shadow-xl
                    "
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    <motion.header
                        className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"
                        variants={itemVariants}
                    >
                        <div>
                            <p className="text-[0.7rem] font-bold uppercase tracking-[0.24em] text-[#ff5555]">
                                Selección personal
                            </p>
                            <h2
                                id="about-proyectos-title"
                                className="!mt-1 text-lg font-semibold sm:text-2xl"
                            >
                                Proyectos personales
                            </h2>
                            <p className="!mt-1 max-w-2xl text-sm text-white/55">
                                Aplicaciones que he construido de principio a fin para
                                explorar móvil, web, machine learning y escritorio.
                            </p>
                        </div>
                        <Link
                            to="/projects#proyectos"
                            className="group inline-flex w-fit items-center gap-1.5 text-sm font-medium text-[#ff8a8a] transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#141414]"
                        >
                            Ver todos los proyectos
                            <span
                                aria-hidden="true"
                                className="transition-transform duration-200 group-hover:translate-x-0.5"
                            >
                                →
                            </span>
                        </Link>
                    </motion.header>

                    <motion.div
                        className="!mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
                        variants={containerVariants}
                    >
                        {personalProjects.map((project: ProjectsInterface) => (
                            <motion.div
                                key={project.id}
                                variants={itemVariants}
                                className="h-full"
                            >
                                <Link
                                    to={`/projects/${project.id}`}
                                    className="
                                        group flex h-full flex-col rounded-2xl
                                        border border-white/10 bg-black/25 !p-4
                                        transition-all duration-200
                                        hover:-translate-y-0.5 hover:border-[#ff5555]/40 hover:bg-black/40
                                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white
                                        focus-visible:ring-offset-2 focus-visible:ring-offset-[#141414]
                                    "
                                >
                                    <div className="flex items-start justify-between gap-3">
                                        <div>
                                            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#ff8a8a]">
                                                {project.tecnologies[0]}
                                            </span>
                                            <h3 className="!mt-1 font-medium">
                                                {project.title}
                                            </h3>
                                        </div>
                                        <span
                                            aria-hidden="true"
                                            className="text-[#ff8a8a] transition-transform duration-200 group-hover:translate-x-0.5"
                                        >
                                            →
                                        </span>
                                    </div>
                                    <p className="!mt-2 line-clamp-2 text-xs leading-relaxed text-white/55">
                                        {project.description}
                                    </p>
                                    <div className="!mt-3 flex flex-wrap gap-1.5">
                                        {project.tecnologies
                                            .slice(0, 3)
                                            .map((tech: string) => (
                                                <span
                                                    key={tech}
                                                    className="rounded-full border border-white/10 bg-white/5 !px-2.5 !py-0.5 text-[0.65rem] text-white/55"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.section>

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
                        className="flex items-center justify-between gap-3 !mb-4"
                        variants={itemVariants}
                    >
                        <h2 className="text-lg sm:text-xl font-semibold">Stack principal</h2>
                        <div className="flex items-center gap-3">
                            <span className="hidden text-xs text-white/50 sm:inline">
                                Herramientas que uso a diario
                            </span>
                            <Link
                                to="/skills"
                                className="group inline-flex items-center gap-1 text-xs font-medium text-[#ff8a8a] transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#141414] sm:text-sm"
                            >
                                Ver todas
                                <span
                                    aria-hidden="true"
                                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                                >
                                    →
                                </span>
                            </Link>
                        </div>
                    </motion.header>

                    <motion.div
                        className="
                            grid
                            grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4
                            !gap-3 sm:!gap-4
                        "
                        variants={containerVariants}
                    >
                        {coreSkills.map((skill: SkillsInterface) => (
                            <div
                                key={skill.nombre}

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
                        <motion.div variants={itemVariants}>
                            <h2 className="text-lg sm:text-2xl font-semibold !mb-4">
                                Formaciones
                            </h2>
                            <ul className="!space-y-4 text-sm sm:text-base">
                                {aboutBlock?.items.map((item: EducationItem) => (
                                    <li key={item.title}>
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

                        <motion.div variants={itemVariants}>
                            <h2 className="text-lg sm:text-2xl font-semibold !mb-4">
                                Cursos
                            </h2>
                            <ul className="!space-y-4 text-sm sm:text-base max-h-[380px] md:max-h-none overflow-y-auto !pr-1">
                                {coursesBlock?.items.map((item: EducationItem) => (
                                    <li key={item.title}>
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

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    <DownloadCV />
                </motion.div>
            </div>
        </motion.main>
    );
}
