export default function BackGroundImage({children}: {children: React.ReactNode}) {
    return (
        <div className="relative h-full w-full overflow-hidden bg-[#141414]">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,85,85,0.12),transparent_42%),radial-gradient(circle_at_80%_75%,rgba(255,255,255,0.06),transparent_55%)]"
            />
            <div
                aria-hidden="true"
                className="app-background pointer-events-none absolute inset-0 scale-105 blur-xs"
            />
            <div className="absolute inset-0 flex flex-col">
                {children}
            </div>
        </div>
    )
}
