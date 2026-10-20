import { Link } from 'react-router'
import icon from '../../../assets/img/logoKurowhite.png'
import ItemHeader from './ItemHeader'

export default function Header() {
    return (
        <header className='w-full shrink-0 border-b border-white/5 bg-[#141414]/20 backdrop-blur-[2px]'>
            <nav className='mx-auto flex w-full max-w-7xl items-center justify-between gap-2 !px-3 !py-2 sm:!px-6'>
                <ul className='flex items-center gap-1 sm:gap-4'>
                    <ItemHeader to="/about" name="About" />
                    <ItemHeader to="/skills" name="Skills" />
                </ul>

                <Link
                    to="/"
                    aria-label="Ir al inicio"
                    className='flex shrink-0 items-center gap-2 transition-opacity duration-200 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#141414]'
                >
                    <img
                        src={icon}
                        className='h-7 w-7 sm:h-8 sm:w-8'
                        alt="Logo de KuroDev"
                    />
                    <span className='hidden neue-machina-ultraBold text-2xl text-white sm:inline sm:text-3xl'>
                        KuroDev
                    </span>
                </Link>

                <ul className='flex items-center gap-1 sm:gap-4'>
                    <ItemHeader to="/projects" name="Projects" />
                    <ItemHeader to="/contact" name="Contact" />
                </ul>
            </nav>
        </header>
    )
}
