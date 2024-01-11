import logo from '../assets/logoKurowhite.png'
import { BtnContacto } from './BtnContanto'
import '../style/headerStyle.css'

export function Header() {
    return(
        <header className='header'>
            <nav>
                <figure>
                    <img src={logo} alt="Logotipo de Kuro" className='logo'/>
                    <span>KuroDev</span>
                </figure>
                <div className='containerIcons'>
                    <BtnContacto redSocial={'Instagram'}/>
                    <BtnContacto redSocial={'Linkedin'}/>
                    <BtnContacto redSocial={'GitHub'}/>
                </div>
            </nav>
        </header>
    )
}
