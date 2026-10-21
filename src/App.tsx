import { RouterProvider } from 'react-router/dom'
import { HelmetProvider } from "react-helmet-async";
import router from './app/router/Router'
import { ContextoProveedor } from './app/shared/providers/context/contexto'
import { LayoutGroup, MotionConfig } from "motion/react";
import JsonLd from './app/shared/components/JsonLd';

function App() {
  return (
    <HelmetProvider>
      <MotionConfig reducedMotion="user">
        <LayoutGroup>
          <ContextoProveedor>
            <JsonLd />
            <RouterProvider router={router} />
          </ContextoProveedor>
        </LayoutGroup>
      </MotionConfig>
    </HelmetProvider>
  )
}

export default App
