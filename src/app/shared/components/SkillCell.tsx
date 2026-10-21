import type { SkillsInterface } from "../interfaces/contextInterfaces"

export default function SkillCell({ skill }: { skill: SkillsInterface }) {
    return (
        <div
            className="
                group relative flex h-full min-h-[150px] flex-col justify-between gap-6
                overflow-hidden rounded-2xl border border-white/10 bg-[#1b1b1b] !p-4 sm:!p-5
                transition-all duration-300 ease-out
                hover:-translate-y-1 hover:border-[#ff5555]/40 hover:bg-[#202020]
                focus-within:border-[#ff5555]/40
            "
        >
            <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#ff5555]/0 blur-2xl transition-colors duration-500 group-hover:bg-[#ff5555]/10"
            />

            <figure className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#141414] ring-1 ring-white/10 transition-transform duration-500 ease-out group-hover:scale-105 group-hover:rotate-3">
                {skill.item}
            </figure>

            <p className="text-base leading-tight text-white/85 sm:text-lg">
                {skill.nombre}
            </p>
        </div>
    );
}
