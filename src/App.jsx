import { Sobremi } from './app/pages/Sobremi'
import { Division } from './app/shared/components/Division'
import { Proyectos } from './app/pages/Proyectos'
import { ContextoProveedor } from './app/shared/providers/context/contexto'
import { Header } from './app/shared/components/Header'
import { Home } from './app/pages/Home'
import { Footer } from './app/shared/components/Footer'

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
