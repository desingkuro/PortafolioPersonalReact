import './style/headerStyle.css'
import logo from './assets/logoKurowhite.png'
import { Home } from './pages/Home'
import { Contacto } from './components/Contacto'
import { Sobremi } from './pages/Sobremi'
import { Division } from './components/Division'
import { Proyectos } from './pages/Proyectos'
import { ContextoProveedor } from '../context/contexto'
import { BtnContacto } from './components/BtnContanto'

function App() {
  return (
    <>
      <header className='header'>
        <nav>
          <figure>
            <img src={logo} alt="Logotipo de Kuro" className='logo'/>
            <span>KuroDev</span>
          </figure>
          <div className='containerIcons'>
            <BtnContacto redSocial={'Instagram'}/>
            <BtnContacto redSocial={'Linkedin'}/>
            <BtnContacto redSocial={'GitHub'}/>
          </div>
        </nav>
      </header>
      <ContextoProveedor>
        <Home/>
        <Division simbolo={'~>'}/>
        <Sobremi/>
        <Division simbolo={'~>'}/>
        <Proyectos/>
      </ContextoProveedor>
    </>
  )
}

export default App
