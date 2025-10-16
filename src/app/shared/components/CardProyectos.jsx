import '../style/cardProyectosStyle.css'
import { Boton } from './Boton'


export function CardProyectos({titulo,tecnologia,imagen,git,proyectoLink,descripcion}){
    
    function renderBtn(){
        if(git==''){
            return(
                <>
                    <Boton texto={'ver Proyecto'} type={'link'} link={proyectoLink}/>
                </>
            )
        }
        if(proyectoLink!=''){
            return(
                <>
                    <Boton texto={'Github'} type={'git'} link={git} />
                    <Boton texto={'ver Proyecto'} type={'link'} link={proyectoLink}/>
                </>
            )
        }
        else{    
            return(
                <>
                    <Boton texto={'Github'} type={'git'} link={git} />
                </>
            )
        }
    }

    return(
        <div className="card">
            <div className="tools">
                <div className="circle">
                    <span className="red box"></span>
                </div>
                <div className="circle">
                    <span className="yellow box"></span>
                </div>
                <div className="circle">
                    <span className ="green box"></span>
                </div>
            </div>
            <div className="card__content">
                <div className='imagenProyecto'>
                    <img src={imagen} alt={titulo} />
                </div>
                <p className='tituloProyecto'>{titulo}</p>
                <p className='descripcion'>{descripcion} </p>
                <span className='subTitulo'>Tecnologias:</span>
                <div className='contenedorTecnologias'>
                    {tecnologia.map((e,i)=>{
                        return(
                            <div className='tecnologia' key={i}><span>{e}</span></div>
                        )
                    })}
                </div>
                <div className='contenedorLinks'>
                    {renderBtn()}                
                </div>
            </div>
        </div>
    )
}
//<Boton texto={'Github'} type={'git'} link={git} />
//<Boton texto={'ver Proyecto'} type={'link'} link={proyectoLink}/>