import '../style/Home.css'
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';
import { particulas } from '../particulas/particlesjs-config';
import foto from '../assets/photo.jpeg'

export function Home() {
    const particesInit = useCallback((engine) => {
        loadFull(engine)
    }, [])

    function separarPalabra(palabra) {
        return palabra.split('');
    }

    return (
        <main className='contenedor'>
            <section className='presentacion'>
                <main className='principalDiv'>
                    <img src={foto} alt="" className='fotoPerfil'/>
                    <div className='tarjetaPresentacion'>
                        <h1 className='titulo'>{'Andres Licona'}</h1>
                        <h2>{'Desarrollador FrontEnd'}</h2>
                    </div>
                </main>
            </section>
            <Particles
                options={particulas}
                init={particesInit}
            />
        </main>
    )
}

