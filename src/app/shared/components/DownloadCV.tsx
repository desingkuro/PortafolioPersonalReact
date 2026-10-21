import { FiDownload, FiFileText } from "react-icons/fi";

const CV_HREF = "/cv/Andres-Licona-CV.pdf";
const CV_FILENAME = "Andres-Licona-CV.pdf";

interface DownloadCVProps {
    variant?: "section" | "button";
}

export default function DownloadCV({ variant = "section" }: DownloadCVProps) {
    if (variant === "button") {
        return (
            <a
                href={CV_HREF}
                download={CV_FILENAME}
                className="
                    group inline-flex items-center justify-center gap-2
                    rounded-lg border border-[#ff5555]/35 bg-[#ff5555]/10
                    !px-6 !py-4 text-sm uppercase tracking-wide text-white
                    transition-all duration-300
                    hover:border-[#ff5555]/70 hover:bg-[#ff5555]/15
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white
                    focus-visible:ring-offset-2 focus-visible:ring-offset-[#141414]
                "
            >
                <FiDownload
                    aria-hidden="true"
                    size={18}
                    className="text-[#ff8a8a] transition-transform duration-300 group-hover:translate-y-0.5"
                />
                Descargar CV
            </a>
        );
    }

    return (
        <section
            aria-labelledby="cv-title"
            className="
                relative overflow-hidden rounded-3xl
                border border-[#ff5555]/20
                bg-gradient-to-br from-[#ff5555]/10 via-white/[0.04] to-transparent
                !px-6 !py-8 shadow-xl sm:!px-10
            "
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#ff5555]/10 blur-3xl"
            />

            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#ff5555]/25 bg-[#ff5555]/10 text-[#ff8a8a]">
                        <FiFileText aria-hidden="true" size={26} />
                    </div>

                    <div>
                        <p className="text-[0.7rem] font-bold uppercase tracking-[0.25em] text-[#ff8a8a]">
                            Curriculum Vitae
                        </p>
                        <h2 id="cv-title" className="mt-1 text-xl font-semibold sm:text-2xl">
                            Descarga mi CV
                        </h2>
                        <p className="mt-2 max-w-xl text-sm text-white/70">
                            Si te interesa mi perfil, descarga mi CV en PDF con mi
                            experiencia, formación y habilidades técnicas.
                        </p>
                        <p className="mt-2 text-xs text-white/45">
                            PDF · 2 páginas · 42 KB
                        </p>
                    </div>
                </div>

                <a
                    href={CV_HREF}
                    download={CV_FILENAME}
                    className="
                        group inline-flex shrink-0 items-center justify-center gap-2
                        rounded-xl bg-[#ff5555] !px-5 !py-3 text-sm font-semibold text-white
                        shadow-lg shadow-[#ff5555]/20 transition-all duration-300
                        hover:bg-[#ff6b6b] hover:shadow-[#ff5555]/30
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white
                        focus-visible:ring-offset-2 focus-visible:ring-offset-[#141414]
                    "
                >
                    <FiDownload
                        aria-hidden="true"
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-y-0.5"
                    />
                    Descargar CV
                </a>
            </div>
        </section>
    );
}
