import { useState } from 'react';
import '../style/contactoStyle.css'
import { AiFillGithub, AiFillLinkedin, AiFillInstagram} from "react-icons/ai";


export function BtnContacto({redSocial}) {
    const TAMAÑO_ICONO = 30;

    function linkRedirection(){
        switch(redSocial){
            case 'Instagram':{
                window.open('https://www.instagram.com/and_licona/','_blank')
                break;
            }
            case 'GitHub':{
                window.open('https://github.com/desingkuro','_blank')
                break;
            }
            case 'Linkedin':{
                window.open('https://www.linkedin.com/in/andr%C3%A9s-licona-machado','_blank')
                break;
            }
            case 'WhatsApp':{
                window.open('https://github.com/desingkuro','_blank')
                break;
            }
        }
    }
    
    function renderIcon(){
        switch(redSocial){
            case 'Instagram':{
                return <AiFillInstagram className='icon' size={TAMAÑO_ICONO}/>
            }
            case 'GitHub':{
                return <AiFillGithub className='icon' size={TAMAÑO_ICONO}/>
            }
            case 'Linkedin':{
                return <AiFillLinkedin className='icon' size={TAMAÑO_ICONO}/>
            }
            case 'WhatsApp':{
                return <AiFillGithub className='icon' size={TAMAÑO_ICONO}/>
            }
            default :{
                break;
            }
        }
    }

    return(
        <div className="buttonSocial">
            <button className="bt" onClick={linkRedirection}>
                {renderIcon()}
            </button>
        </div>
    )
}