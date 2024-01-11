import imagen from'../src/assets/prueba.jpg'
import puc from'../src/assets/puc.jpg'
import tesla from'../src/assets/tesla.png'
import encriptador from'../src/assets/encriptador.jpg'
import barbie from'../src/assets/barbie.png'
import { createContext } from "react";

export const contextoPrincipal = createContext();

export function ContextoProveedor({children}){
    const proyectos = [
        {
            'titulo':'App Puc (Plan unico de cuentas)',
            'tecnologias':['React Native'],
            'img':puc,
            'git':'https://github.com/desingkuro/Puc-App.git',
            'link':'https://puc.uptodown.com/android',
            'descripcion':'App móvil desarrollada en React Native para realizar búsquedas de cuentas o códigos de contabilidad.'
        },
        {
            'titulo':'App Votaciones (Institucion Educativa, personeria)',
            'tecnologias':['React Native'],
            'img':imagen,
            'git':'https://github.com/desingkuro/App-Voto-React-native.git',
            'link':'',
            'descripcion':'App móvil desarrollada en React Native para realizar votación de estudiantes a personería en institución publica en Ciénaga Magdalena.'
        },
        {
            'titulo':'Encriptador de texto (Alura Challenge)',
            'tecnologias':['Html','Css','Js'],
            'img':encriptador,
            'git':'https://github.com/desingkuro/page.github.io.git',
            'link':'https://desingkuro.github.io/page.github.io/',
            'descripcion':'Encriptador web basado en diseño de Alura Latam.'
        },
        {
            'titulo':'Pagina para pelicula (Barbie Movie Page)',
            'tecnologias':['Html','Css','React'],
            'img':barbie,
            'git':'',
            'link':'https://barbiemovieonline.netlify.app/',
            'descripcion':'One Page de Película de Barbie Life Action.'
        },
        {
            'titulo':'Landin page de Tesla',
            'tecnologias':['Astro','JavaScript'],
            'img':tesla,
            'git':'https://github.com/desingkuro/tesla-landing-copy.git',
            'link':'https://tesla-landing-copy.netlify.app/',
            'descripcion':'Landing Page basada en la página oficial de Tesla y midudev.'
        },
    ]
    return(
        <contextoPrincipal.Provider value={{proyectos}}>
            {children}
        </contextoPrincipal.Provider>
    )
}