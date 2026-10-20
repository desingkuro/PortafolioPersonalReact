interface TagProps {
    children: React.ReactNode;
    className?: string;
    type: TypeTagProp
}

type TypeTagProp = "tecnology" | "links"

interface TypeTag {
    tecnology: string,
    links: string
}

export default function Tag({ children, className = "", type }: TagProps) {
    const typeTag: TypeTag = {
        tecnology: "inline-block !px-3 !py-1 rounded-full bg-neutral-100/70 dark:bg-neutral-800/70 text-neutral-800 dark:text-neutral-100 text-sm font-bold shadow-sm transition-colors hover:cursor-default",
        links: "inline-flex items-center !px-5 !py-3 rounded-xl border border-white/15 bg-white/5 text-[0.95rem] neue-machina-ultraBold text-white hover:border-[#ff5555]/50 hover:bg-[#ff5555]/10 hover:scale-[1.02] transition-all duration-300 ease-in-out"
    }
    return (
        <span
            className={`
                ${typeTag[type]}
                ${className}
            `}
        >
            {children}
        </span>
    );
}
