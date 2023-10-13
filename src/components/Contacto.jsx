import { useState } from 'react';
import '../style/contactoStyle.css'
import { BiDownArrowAlt, BiUpArrowAlt} from "react-icons/bi";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram} from "react-icons/ai";

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
            <main className='contenedorContactos'>
                <div className="light-button">
                    <button className="bt" onClick={()=>{window.open('https://github.com/desingkuro','_blank')}}>
                        <div className="light-holder">
                            <div className="dot"></div>
                            <div className="light"></div>
                        </div>
                        <div className="button-holder">
                            <AiFillGithub size={60}/>
                            <p>Github</p>
                        </div>
                    </button>
                </div>
                <div className="light-button">
                    <button className="bt" onClick={()=>{window.open('https://www.linkedin.com/in/andr%C3%A9s-licona-machado','_blank')}}>
                        <div className="light-holder">
                            <div className="dot"></div>
                            <div className="light"></div>
                        </div>
                        <div className="button-holder">
                        <AiFillLinkedin size={60}/>
                            <p>Linkedi</p>
                        </div>
                    </button>
                </div>
                <div className="light-button">
                    <button className="bt" onClick={()=>{window.open('https://www.instagram.com/and_licona/','_blank')}}>
                        <div className="light-holder">
                            <div className="dot"></div>
                            <div className="light"></div>
                        </div>
                        <div className="button-holder">
                            <AiFillInstagram size={60}/>
                            <p>Intagram</p>
                        </div>
                    </button>
                </div>
            </main>
        </div>
    )
}