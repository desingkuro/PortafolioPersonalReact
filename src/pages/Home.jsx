import '../style/Home.css'
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useCallback, useState } from 'react';
import { particulas } from '../particulas/particlesjs-config';
import foto from '../assets/photo.jpeg'

export function Home() {
    const particesInit = useCallback((engine) => {
        loadFull(engine)
    }, [])

    const [palabra,setPalabra] = useState('Desarrollador FrontEnd');    

    return (
        <main className='contenedor'>
            <section className='presentacion'>
                <main className='principalDiv'>
                    <img src={foto} alt="" className='fotoPerfil'/>
                    <div className='tarjetaPresentacion'>
                        <h1 className='titulo'>{'Andres Licona'}</h1>
                        <h2>{palabra}</h2>
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

