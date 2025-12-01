import { RouterProvider } from 'react-router/dom'
import './App.css'
import router from './app/router/Router'
import { ContextoProveedor } from './app/shared/providers/context/contexto'
import { LayoutGroup } from "motion/react";


function App() {

  return (
    <LayoutGroup>
      <ContextoProveedor>
        <RouterProvider router={router} />
      </ContextoProveedor>
    </LayoutGroup>
  )
}

export default App
