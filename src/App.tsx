import { RouterProvider } from 'react-router/dom'
import { HelmetProvider } from "react-helmet-async";
import router from './app/router/Router'
import { ContextoProveedor } from './app/shared/providers/context/contexto'
import { LayoutGroup } from "motion/react";
import JsonLd from './app/shared/components/JsonLd';

function App() {
  return (
    <HelmetProvider>
      <LayoutGroup>
        <ContextoProveedor>
          <JsonLd />
          <RouterProvider router={router} />
        </ContextoProveedor>
      </LayoutGroup>
    </HelmetProvider>
  )
}

export default App
