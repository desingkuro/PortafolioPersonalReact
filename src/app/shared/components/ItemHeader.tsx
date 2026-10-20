import { NavLink } from "react-router"

export default function ItemHeader({ to, name }: { to: string, name: string }) {
    return (
        <li className="relative">
            <NavLink
                to={to}
                className={({ isActive }) =>
                    [
                        "relative inline-flex min-h-11 items-center !px-1 text-sm transition-colors duration-200 sm:text-lg neue-machina-ligth",
                        "after:absolute after:bottom-1 after:left-0 after:h-0.5 after:bg-[#ff5555] after:transition-all after:duration-300",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#141414]",
                        isActive
                            ? "text-white after:w-full"
                            : "text-white/65 after:w-0 hover:text-white hover:after:w-full",
                    ].join(" ")
                }
            >
                {name}
            </NavLink>
        </li>
    )
}
