import { Sobremi } from './pages/Sobremi'
import { Division } from './components/Division'
import { Proyectos } from './pages/Proyectos'
import { ContextoProveedor } from '../context/contexto'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Header/>
      <ContextoProveedor>
        <Home/>
        <Division simbolo={'~>'}/>
        <Proyectos/>
        <Division simbolo={'~>'}/>
        <Sobremi/>
        <Footer/>
      </ContextoProveedor>
    </>
  )
}

export default App
