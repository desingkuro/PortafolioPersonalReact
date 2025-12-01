import { motion } from "framer-motion";
import Btn from "../../shared/components/Btn";

export default function NotFoundPage() {
    return (
        <motion.main
            className="
        relative
        min-h-screen w-full
        flex items-center justify-center
        overflow-hidden
     text-white
      "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            {/* Si tienes una clase para tu fondo, sustitúyela por bg-black arriba */}
            {/* Círculo/halo animado de fondo */}
            <motion.div
                className="pointer-events-none absolute -top-32 -right-32 w-80 h-80 rounded-full bg-white/5 blur-3xl"
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: [0.9, 1.1, 0.9], opacity: 1, rotate: [0, 12, -8, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Contenido principal */}
            <section className="relative z-10 flex flex-col items-center text-center !px-4">
                <motion.p
                    className="text-sm tracking-[0.3em] uppercase !mb-4 text-white/60"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    KuroDev // 404
                </motion.p>

                <motion.h1
                    className="font-bold leading-none tracking-tight text-5xl sm:text-7xl md:text-8xl lg:text-9xl !mb-4"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    Lost in the void
                </motion.h1>

                <motion.p
                    className="text-base sm:text-lg text-white/70 max-w-md !mb-8"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                >
                    The page you&apos;re looking for doesn&apos;t exist.
                    Let&apos;s get you back to something cool.
                </motion.p>
                <Btn type="home" route="/">
                    Back home
                </Btn>
            </section>
        </motion.main>
    );
}
