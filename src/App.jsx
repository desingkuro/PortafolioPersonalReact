import './style/headerStyle.css'
import logo from './assets/logoKurowhite.png'
import { Home } from './pages/Home'
import { Contacto } from './components/Contacto'
import { Sobremi } from './pages/Sobremi'
import { Division } from './components/Division'
import { Proyectos } from './pages/Proyectos'

function App() {
  return (
    <>
      <header className='header'>
        <nav>
          <img src={logo} alt="Logotipo de Kuro" className='logo'/>
          <p>KuroDev</p>
        </nav>
      </header>
      <Home/>
      <Division simbolo={'~>'}/>
      <Sobremi/>
      <Division simbolo={'~>'}/>
      <Proyectos/>
      <Contacto/>
    </>
  )
}

export default App
