import imagen from'../src/assets/prueba.jpg'
import { createContext } from "react";

export const contextoPrincipal = createContext();

export function ContextoProveedor({children}){
    const proyectos = [
        {
            'titulo':'App Puc (Plan unico de cuentas)',
            'tecnologias':['React Native'],
            'img':imagen,
            'git':'https://github.com/desingkuro/Puc-App.git',
            'link':'https://puc.uptodown.com/android'
        },
        {
            'titulo':'App Votaciones (Institucion Educativa, personeria)',
            'tecnologias':['React Native'],
            'img':imagen,
            'git':'https://github.com/desingkuro/App-Voto-React-native.git',
            'link':''
        },
        {
            'titulo':'Encriptador de texto (Alura Challenge)',
            'tecnologias':['Html','Css','Js'],
            'img':imagen,
            'git':'https://github.com/desingkuro/page.github.io.git',
            'link':'https://desingkuro.github.io/page.github.io/'
        },
        {
            'titulo':'Pagina para pelicula (Barbie Movie Page)',
            'tecnologias':['Html','Css','React'],
            'img':imagen,
            'git':'',
            'link':'https://barbiemovieonline.netlify.app/'
        },
    ]
    return(
        <contextoPrincipal.Provider value={{proyectos}}>
            {children}
        </contextoPrincipal.Provider>
    )
}