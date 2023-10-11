import { CardProyectos } from '../components/CardProyectos'
import '../style/ProyectosStyle.css'
import imagen from'../assets/prueba.jpg'

export function Proyectos(){
    return(
        <section className='contenedorProyectos'>
            {proyectos.map(e,i=>{
                return(
                    <CardProyectos imagen={e.img} titulo={e.titulo} key={i} tecnologia={e.tecnologias}/>
                )
            })}
        </section>
    )
}

const proyectos = [
    {
        'titulo':'App Puc (Plan unico de cuentas)',
        'subTitulo':'Tecnologias',
        'tecnologias':[['React Native','Flask','Mongo']],
        'img':imagen
    },
]