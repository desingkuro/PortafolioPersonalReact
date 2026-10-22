export default function PageLoader() {
    return (
        <div
            role="status"
            aria-live="polite"
            className="w-full h-full flex flex-col items-center justify-center gap-4 !py-20"
        >
            <span
                aria-hidden="true"
                className="h-9 w-9 animate-spin rounded-full border-2 border-white/15 border-t-[#ff5555]"
            />
            <p className="text-sm text-white/50">Cargando...</p>
        </div>
    );
}
