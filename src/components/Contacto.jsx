import { useState } from 'react';
import '../style/contactoStyle.css'
import { BiDownArrowAlt, BiUpArrowAlt} from "react-icons/bi";

export const Contacto =()=>{
    const [abrirContacto,cerrarContacto] = useState("contenedorBorde");
    
    const toogleFlecha = ()=>{
        if(abrirContacto == "contenedorBorde"){
            return <BiDownArrowAlt size={30} onClick={toggleContacto} className='flechaContacto'/>
        }
        return <BiUpArrowAlt size={30} onClick={toggleContacto} className='flechaContacto'/>
    }

    const toggleContacto = ()=>{
        abrirContacto == "contenedorBorde" ? cerrarContacto("contenedorAbierto") : cerrarContacto("contenedorBorde" )
    }
    const contenedroPorDefecto = "contenedorDefecto";
    return(
        <div className={`${abrirContacto} ${contenedroPorDefecto}`}>
            <header className='cabecera'>
                <span className='textoCabecera'>Redes Sociales</span>
                <span className='textoCabecera'>
                    Contactame
                    {toogleFlecha()}
                </span>
            </header>
            <main>
                <h2>hola compae sisas </h2>
            </main>
        </div>
    )
}