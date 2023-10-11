import '../style/botonStyle.css'
import {FaGithub} from 'react-icons/fa'
import {BiLinkExternal} from 'react-icons/bi'

export function Boton({texto,type}){
    return(
        <button class="Btn">
            {texto != null ? texto : 'boton' }
            {type == 'git' ? <FaGithub/> : <BiLinkExternal/>}
        </button>       
    )
}