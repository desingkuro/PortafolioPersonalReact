import { Link } from 'react-router'
import icon from '../../../assets/img/logoKurowhite.png'
import ItemHeader from './ItemHeader'

export default function Header() {
    return (
        <header className='w-full h-20 flex'>
            <nav className='w-full h-full flex justify-between items-center !px-4'>
                <div className='w-auto max-h-full overflow-hidden'>
                    <ul className='sm:gap-4 gap-2 flex justify-center items-center'>
                        <ItemHeader to="/about" name="About" />
                        <ItemHeader to="/skills" name="Skills" />
                    </ul>
                </div>
                <div className='w-auto h-full overflow-hidden gap-2 flex justify-center items-center'>
                    <figure className='h-full sm:w-8 w-6 overflow-hidden gap-2 flex justify-center items-center'>
                        <img src={icon} className='sm:h-8 sm:w-8 h-6 w-6' alt="Logo de KuroDev" />
                    </figure>
                    <div className='h-full flex items-center justify-center w-auto'>
                        <Link to="/" className='neue-machina-ultraBold text-white sm:text-3xl text-2xl'>KuroDev</Link>
                    </div>
                </div>
                <div className='w-auto h-full overflow-hidden gap-2 flex justify-center items-center'>
                    <ul className='sm:gap-4 gap-2 flex justify-center items-center'>
                        <ItemHeader to="/projects" name="Projects" />
                        <ItemHeader to="/contact" name="Contact" />
                    </ul>
                </div>
            </nav>
        </header>
    )
}
