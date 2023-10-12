import imagen from'../src/assets/prueba.jpg'
import { createContext } from "react";

export const contextoPrincipal = createContext();

export function ContextoProveedor({children}){
    const proyectos = [
        {
            'titulo':'App Puc (Plan unico de cuentas)',
            'tecnologias':['React Native','Flask','Mongo'],
            'img':imagen,
            'git':'https://github.com/desingkuro/Puc-App.git',
            'link':'https://puc.uptodown.com/android'
        },
    ]
    return(
        <contextoPrincipal.Provider value={{proyectos}}>
            {children}
        </contextoPrincipal.Provider>
    )
}