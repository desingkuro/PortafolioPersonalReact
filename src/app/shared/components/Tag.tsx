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
        links: "!px-6 !py-4 bg-neutral-800/70 text-[1rem] cursor-pointer neue-machina-ultraBold hover:opacity-80 hover:scale-110 transition-all duration-300 ease-in-out"
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
