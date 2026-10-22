import { useContext, useMemo, useState } from "react";
import { motion } from "motion/react";
import { FiSearch, FiX } from "react-icons/fi";
import SkillCell from "../../shared/components/SkillCell";
import SEOHelmet from "../../shared/components/SEOHelmet";
import { contextoPrincipal } from "../../shared/providers/context/context";
import { SKILL_CATEGORIES, getSkillCategory } from "../../shared/constants/skillCategories";
import type { SkillCategory, SkillsInterface } from "../../shared/interfaces/contextInterfaces";

function normalize(value: string) {
    return value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
}

export default function Skills() {
    const { skills, projects } = useContext(contextoPrincipal);
    const [activeCategory, setActiveCategory] = useState<SkillCategory | "all">("all");
    const [query, setQuery] = useState("");

    const categoryCounts = useMemo(() => {
        const counts = new Map<SkillCategory, number>();

        skills.forEach((skill: SkillsInterface) => {
            counts.set(skill.category, (counts.get(skill.category) ?? 0) + 1);
        });

        return counts;
    }, [skills]);

    const filteredSkills = useMemo(() => {
        const normalizedQuery = normalize(query.trim());

        return skills.filter((skill: SkillsInterface) => {
            const matchesCategory =
                activeCategory === "all" || skill.category === activeCategory;
            const matchesQuery =
                !normalizedQuery ||
                normalize(skill.nombre).includes(normalizedQuery) ||
                normalize(getSkillCategory(skill.category).label).includes(normalizedQuery);

            return matchesCategory && matchesQuery;
        });
    }, [skills, activeCategory, query]);

    const groupedSkills = useMemo(
        () =>
            SKILL_CATEGORIES.map((category) => ({
                ...category,
                skills: filteredSkills.filter(
                    (skill: SkillsInterface) => skill.category === category.value
                ),
            })).filter((group) => group.skills.length > 0),
        [filteredSkills]
    );

    const hasFilters = activeCategory !== "all" || query.trim().length > 0;
    const clearFilters = () => {
        setActiveCategory("all");
        setQuery("");
    };

    return (
        <div className="flex w-full flex-col items-center !px-4 !pt-6 !pb-16 sm:!px-6">
            <SEOHelmet
                title="Habilidades"
                description="Stack tecnológico de Andrés Licona: React, Angular, TypeScript, NestJS, Node.js, PostgreSQL, Python, React Native y más. Explora por área, busca tecnologías y descubre proyectos relacionados."
            />

            <header className="w-full max-w-5xl !mb-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-[0.7rem] font-bold uppercase tracking-[0.24em] text-[#ff5555]">
                            Herramientas
                        </p>
                        <h1 className="!mt-1 text-4xl leading-none sm:text-5xl neue-machina-ultraBold">
                            Skills
                        </h1>
                        <p className="!mt-2 max-w-xl text-sm text-white/55">
                            Las herramientas con las que construyo productos de punta a
                            punta, desde la interfaz hasta la base de datos.
                        </p>
                    </div>

                    <dl className="flex shrink-0 gap-2">
                        <div className="rounded-2xl border border-white/10 bg-white/5 !px-4 !py-2">
                            <dt className="text-[0.6rem] uppercase tracking-[0.16em] text-white/40">
                                Tecnologías
                            </dt>
                            <dd className="text-lg font-semibold text-white">
                                {skills.length}
                            </dd>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/5 !px-4 !py-2">
                            <dt className="text-[0.6rem] uppercase tracking-[0.16em] text-white/40">
                                Áreas
                            </dt>
                            <dd className="text-lg font-semibold text-white">
                                {SKILL_CATEGORIES.length}
                            </dd>
                        </div>
                    </dl>
                </div>
            </header>

            <section
                aria-label="Filtrar habilidades"
                className="w-full max-w-5xl !mb-8 !space-y-4"
            >
                <div className="flex flex-wrap gap-2">
                    <button
                        type="button"
                        onClick={() => setActiveCategory("all")}
                        aria-pressed={activeCategory === "all"}
                        className={`inline-flex min-h-10 shrink-0 items-center gap-2 whitespace-nowrap rounded-full border !px-3.5 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#141414] ${
                            activeCategory === "all"
                                ? "border-[#ff5555]/60 bg-[#ff5555]/15 text-white"
                                : "border-white/10 bg-white/5 text-white/60 hover:border-white/25 hover:bg-white/10 hover:text-white"
                        }`}
                    >
                        Todas
                        <span
                            className={`rounded-full !px-1.5 !py-0.5 text-[0.65rem] font-semibold ${
                                activeCategory === "all"
                                    ? "bg-[#ff5555]/20 text-[#ff8a8a]"
                                    : "bg-white/5 text-white/40"
                            }`}
                        >
                            {skills.length}
                        </span>
                    </button>

                    {SKILL_CATEGORIES.map((category) => {
                        const count = categoryCounts.get(category.value) ?? 0;
                        const active = activeCategory === category.value;

                        return (
                            <button
                                key={category.value}
                                type="button"
                                onClick={() => setActiveCategory(category.value)}
                                aria-pressed={active}
                                className={`inline-flex min-h-10 shrink-0 items-center gap-2 whitespace-nowrap rounded-full border !px-3.5 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#141414] ${
                                    active
                                        ? "border-[#ff5555]/60 bg-[#ff5555]/15 text-white"
                                        : "border-white/10 bg-white/5 text-white/60 hover:border-white/25 hover:bg-white/10 hover:text-white"
                                }`}
                            >
                                <span
                                    aria-hidden="true"
                                    className={`h-1.5 w-1.5 rounded-full ${category.dot}`}
                                />
                                {category.label}
                                <span
                                    className={`rounded-full !px-1.5 !py-0.5 text-[0.65rem] font-semibold ${
                                        active
                                            ? "bg-[#ff5555]/20 text-[#ff8a8a]"
                                            : "bg-white/5 text-white/40"
                                    }`}
                                >
                                    {count}
                                </span>
                            </button>
                        );
                    })}
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p
                        aria-live="polite"
                        className="max-w-full break-words text-sm text-white/50"
                    >
                        {filteredSkills.length}{" "}
                        {filteredSkills.length === 1 ? "tecnología" : "tecnologías"}
                        {activeCategory !== "all" &&
                            ` en ${getSkillCategory(activeCategory).label}`}
                        {query.trim() && ` para “${query.trim()}”`}
                    </p>

                    <div role="search" className="relative w-full sm:max-w-xs">
                        <FiSearch
                            aria-hidden="true"
                            size={16}
                            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40"
                        />
                        <input
                            type="text"
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                            placeholder="Buscar tecnología..."
                            aria-label="Buscar tecnología"
                            className="h-11 w-full rounded-full border border-white/15 bg-white/5 pl-10 pr-10 text-sm text-white outline-none transition-colors duration-200 placeholder:text-white/35 focus:border-[#ff5555]/60 focus:bg-white/10 focus-visible:ring-2 focus-visible:ring-white/20"
                        />
                        {query.length > 0 && (
                            <button
                                type="button"
                                onClick={() => setQuery("")}
                                aria-label="Limpiar búsqueda"
                                className="absolute right-2.5 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-white/40 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                            >
                                <FiX aria-hidden="true" size={15} />
                            </button>
                        )}
                    </div>
                </div>
            </section>

            {filteredSkills.length === 0 ? (
                <div className="w-full max-w-5xl rounded-3xl border border-white/10 bg-white/5 !px-6 !py-12 text-center">
                    <p className="text-lg font-medium">
                        No encontré tecnologías con ese filtro.
                    </p>
                    <p className="!mt-1 text-sm text-white/55">
                        Prueba con otro término o limpia los filtros.
                    </p>
                    <button
                        type="button"
                        onClick={clearFilters}
                        className="!mt-5 inline-flex min-h-10 items-center justify-center rounded-full border border-[#ff5555]/40 bg-[#ff5555]/10 !px-5 text-sm font-medium text-[#ff8a8a] transition-colors duration-200 hover:bg-[#ff5555]/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#141414]"
                    >
                        Limpiar filtros
                    </button>
                </div>
            ) : (
                <motion.div layout className="w-full max-w-5xl !space-y-10">
                    {groupedSkills.map((group) => (
                        <motion.section
                            key={group.value}
                            layout
                            aria-labelledby={`skills-${group.value}`}
                        >
                            <header className="!mb-4 flex items-end justify-between gap-3">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <span
                                            aria-hidden="true"
                                            className={`h-2 w-2 rounded-full ${group.dot}`}
                                        />
                                        <h2
                                            id={`skills-${group.value}`}
                                            className="text-lg font-semibold sm:text-xl"
                                        >
                                            {group.label}
                                        </h2>
                                    </div>
                                    <p className="!mt-1 text-xs text-white/45 sm:text-sm">
                                        {group.description}
                                    </p>
                                </div>
                                <span className="shrink-0 rounded-full border border-white/10 bg-white/5 !px-2.5 !py-1 text-[0.65rem] font-semibold text-white/50">
                                    {group.skills.length}
                                </span>
                            </header>

                            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                {group.skills.map((skill: SkillsInterface) => (
                                    <motion.li
                                        key={skill.nombre}
                                        layout
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            ease: [0.16, 1, 0.3, 1],
                                        }}
                                        className="h-full"
                                    >
                                        <SkillCell skill={skill} projects={projects} />
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.section>
                    ))}
                </motion.div>
            )}

            {hasFilters && filteredSkills.length > 0 && (
                <button
                    type="button"
                    onClick={clearFilters}
                    className="!mt-10 inline-flex min-h-10 items-center justify-center rounded-full border border-white/15 bg-white/5 !px-5 text-sm text-white/60 transition-colors duration-200 hover:border-white/30 hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#141414]"
                >
                    Limpiar filtros
                </button>
            )}
        </div>
    );
}
