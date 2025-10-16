import { useContext } from 'react'
import { CardProyectos } from '../shared/components/CardProyectos'
import '../shared/style/ProyectosStyle.css'
import { contextoPrincipal } from '../shared/providers/context/contexto';

export function Proyectos(){
    
    const {proyectos} = useContext(contextoPrincipal);

    return(
        
        <>
            <h2 className='tituloSectionProyecto'>Proyectos realizados</h2>
            <section className='contenedorProyectos'>
                {
                    proyectos.map((e,i)=>{
                        return(
                            <CardProyectos tecnologia={e.tecnologias} titulo={e.titulo} imagen={e.img} key={i} git={e.git} proyectoLink={e.link} descripcion={e.descripcion}/>
                        )
                    })
                }
            </section>
        </>
    )
}