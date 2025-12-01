interface TagProps {
    children: React.ReactNode;
    className?: string;
}

export default function Tag({ children, className = "" }: TagProps) {
    return (
        <span
            className={`
        inline-block
        !px-3 !py-1
        rounded-full
        bg-neutral-100/70 dark:bg-neutral-800/70
        text-neutral-800 dark:text-neutral-100
        text-sm font-bold
        shadow-sm
        transition-colors
        hover:cursor-default
        ${className}
      `}
        >
            {children}
        </span>
    );
}
