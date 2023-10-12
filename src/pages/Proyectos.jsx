import { useContext } from 'react'
import { CardProyectos } from '../components/CardProyectos'
import '../style/ProyectosStyle.css'
import { contextoPrincipal } from '../../context/contexto';

export function Proyectos(){
    
    const {proyectos} = useContext(contextoPrincipal);

    return(
        <section className='contenedorProyectos'>
            {
                proyectos.map((e,i)=>{
                    return(
                        <CardProyectos tecnologia={e.tecnologias} titulo={e.titulo} imagen={e.img} key={i} git={e.git} proyectoLink={e.link}/>
                    )
                })
            }
        </section>
    )
}