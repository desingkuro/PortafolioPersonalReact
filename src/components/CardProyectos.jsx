import '../style/cardProyectosStyle.css'
import { Boton } from './Boton'

export function CardProyectos({titulo,tecnologia,imagen}){
    return(
        <div class="card">
            <div class="tools">
                <div class="circle">
                    <span class="red box"></span>
                </div>
                <div class="circle">
                    <span class="yellow box"></span>
                </div>
                <div class="circle">
                    <span class="green box"></span>
                </div>
            </div>
            <div class="card__content">
                <div className='imagenProyecto'>
                    <img src={imagen} alt="" />
                </div>
                <p className='tituloProyecto'>{titulo}</p>
                <span className='subTitulo'>Tecnologias</span>
                <div className='contenedorTecnologias'>
                    {tecnologia.map(e=>{
                        return(
                            <div className='tecnologia'><span>{e}</span></div>
                        )
                    })}
                </div>
                <div className='contenedorLinks'>
                    <Boton texto={'Github'} type={'git'}/>
                    <Boton texto={'ver Proyecto'} type={'link'}/>
                </div>
            </div>
        </div>
    )
}