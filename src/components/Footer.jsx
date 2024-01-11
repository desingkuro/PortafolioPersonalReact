import '../style/Footer.css';
import { BtnContacto } from './BtnContanto';
import Particles from 'react-tsparticles';
import { particulas } from '../particulas/particlesjs-config';
import { useCallback } from 'react';
import { loadFull } from 'tsparticles';

export function Footer() {
    const particesInit = useCallback((engine) => {
        loadFull(engine)
    }, [])
    return(
        <footer>
            <div className="container-info">
                <h1 className="title">Andres Mauricio Licona Machado</h1>
            <h2>Redes Sociales</h2>
            <span>@anmalima60</span>
            <div className="icon-container">
                <BtnContacto redSocial={'GitHub'}/>
                <BtnContacto redSocial={'Instagram'}/>
                <BtnContacto redSocial={'Linkedin'}/>
            </div>
            </div>
            <Particles
                className='particles'
                options={particulas}
                init={particesInit}
            />
        </footer>
    )
}