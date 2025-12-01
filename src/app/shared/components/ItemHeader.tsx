import { Link } from "react-router"

export default function ItemHeader({to, name}: {to: string, name: string}) {
    return (
        <li className='text-white sm:text-xl text-xs  neue-machina-ligth relative after:absolute after:w-0 hover:after:w-full after:h-1 after:bg-white after:bottom-0 after:left-0 after:transition-all duration-300'>
            <Link to={to}>
                {name}
            </Link>
        </li>
    )
}