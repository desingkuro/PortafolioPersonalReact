import { useState, useEffect, useMemo, useRef } from "react";
import type { ProjectsInterface } from "../interfaces/contextInterfaces";

export default function ProjectCarousel({ project }: { project: ProjectsInterface }) {
    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);
    const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const images = useMemo(() => project?.img || [], [project?.img]);

    useEffect(() => {
        if (images.length <= 1 || paused) return;
        intervalRef.current = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [images.length, paused]);

    // Precarga la siguiente captura para que el cambio del carrusel no quede en blanco.
    useEffect(() => {
        if (images.length <= 1) return;
        const nextImage = new Image();
        nextImage.src = images[(current + 1) % images.length];
    }, [current, images]);

    return (
        <figure
            className="w-full h-full flex overflow-hidden relative bg-neutral-950"
            style={{ viewTransitionName: `project-image-${project?.id}` }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
        >
            <div
                aria-hidden="true"
                className="absolute inset-0 animate-pulse bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-950"
            />

            {images.map((img: string, index: number) => (
                <img
                    key={index}
                    src={img}
                    alt={`${project?.title || "Proyecto"} — captura ${index + 1}`}
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "low"}
                    decoding="async"
                    onLoad={() => {
                        setLoadedImages((prev) =>
                            prev[index] ? prev : { ...prev, [index]: true }
                        );
                    }}
                    className={`w-full h-full object-contain transition-opacity duration-700 absolute top-0 left-0
            ${index === current && loadedImages[index] ? "opacity-100 z-10" : "opacity-0 z-0"}
          `}
                />
            ))}
            {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/10 bg-black/40 !px-2.5 !py-1.5 backdrop-blur-sm">
                    {images.map((_: string, idx: number) => (
                        <span
                            key={idx}
                            className={`h-1.5 rounded-full transition-all duration-300 ${idx === current ? "w-5 bg-white" : "w-1.5 bg-white/40"}`}
                        />
                    ))}
                </div>
            )}
        </figure>
    );
}
