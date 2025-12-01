import { useState, useEffect, useRef } from "react";
import type { ProjectsInterface } from "../interfaces/contextInterfaces";

export default function ProjectCarousel({ project }: { project: ProjectsInterface }) {
    const [current, setCurrent] = useState(0);
    const timeoutRef = useRef<any | null>(null);
    const images = project?.img || [];

    // Autoplay cada 3 segundos
    useEffect(() => {
        if (!images.length) return;
        timeoutRef.current = setTimeout(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearTimeout(timeoutRef.current);
    }, [current, images.length]);

    return (
        <figure
            className="w-full h-full flex overflow-hidden relative"
            style={{ viewTransitionName: `project-image-${project?.id}` }}
        >
            {images.map((img: string, index: number) => (
                <img
                    key={index}
                    src={img}
                    alt={project?.title || "Project image"}
                    className={`w-full h-full object-cover transition-opacity duration-700 absolute top-0 left-0
            ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}
          `}
                />
            ))}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {images.map((_:string, idx:number) => (
                    <span key={idx} className={`w-3 h-3 rounded-full bg-white/60 ${idx === current ? "bg-black/90" : ""}`}></span>
                ))}
            </div>
        </figure>
    );
}
