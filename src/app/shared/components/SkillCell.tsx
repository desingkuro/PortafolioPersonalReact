import type { SkillsInterface } from "../interfaces/contextInterfaces"

export default function SkillCell({ skill, bg }: { skill: SkillsInterface, bg?: string }) {
    return (
        <div
            className={
                "sm:w-auto w-full min-w-[280px] flex flex-col items-start !p-2 justify-between h-[200px] " +
                bg
            }
        >
            <figure
                className={
                    "w-[70px] h-[70px] rounded-full flex items-center justify-center " +
                    "hover:rotate-y-180 hover:scale-115 transition-all duration-500 " +
                    (bg === "bg-primary" ? "bg-secondary" : "bg-primary")
                }
            >
                {skill.item}
            </figure>
            <p className="text-4xl">{skill.nombre}</p>
        </div>
    );
}
