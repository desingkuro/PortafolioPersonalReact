import '../style/botonStyle.css'
import {FaGithub} from 'react-icons/fa'
import {BiLinkExternal} from 'react-icons/bi'

export function Boton({texto,type,link}){
    return(
        <button className="Btn" onClick={()=>{window.open(link,'_blank')}}>
            {texto != null ? texto : 'boton' }
            {type == 'git' ? <FaGithub/> : <BiLinkExternal/>}
        </button>       
    )
}