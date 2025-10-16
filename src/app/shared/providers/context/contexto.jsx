import imagen from "../../../../assets/prueba.jpg";
import puc from "../../../../assets/puc.jpg";
import tesla from "../../../../assets/tesla.png";
import encriptador from "../../../../assets/encriptador.jpg";
import barbie from "../../../../assets/barbie.png";
import { createContext } from "react";
import { FaReact, FaPython, FaNodeJs } from "react-icons/fa";
import { BiLogoFlask, BiLogoPostgresql } from "react-icons/bi";

export const contextoPrincipal = createContext();

export function ContextoProveedor({ children }) {
  const logosSobremiSize = 130;
  const colorSkills = "rgba(255, 255, 255, 0.74)";
  const proyectos = [
    {
      titulo: "App Puc (Plan unico de cuentas)",
      tecnologias: ["React Native"],
      img: puc,
      git: "https://github.com/desingkuro/Puc-App.git",
      //'link':'https://puc.uptodown.com/android',
      link: "https://puc-app-mobile.netlify.app/",
      descripcion:
        "App móvil desarrollada en React Native para realizar búsquedas de cuentas o códigos de contabilidad.",
    },
    {
      titulo: "App Votaciones (Institucion Educativa, personeria)",
      tecnologias: ["React Native"],
      img: imagen,
      git: "https://github.com/desingkuro/App-Voto-React-native.git",
      link: "",
      descripcion:
        "App móvil desarrollada en React Native para realizar votación de estudiantes a personería en institución publica en Ciénaga Magdalena.",
    },
    {
      titulo: "Encriptador de texto (Alura Challenge)",
      tecnologias: ["Html", "Css", "Js"],
      img: encriptador,
      git: "https://github.com/desingkuro/page.github.io.git",
      link: "https://desingkuro.github.io/page.github.io/",
      descripcion: "Encriptador web basado en diseño de Alura Latam.",
    },
    {
      titulo: "Pagina para pelicula (Barbie Movie Page)",
      tecnologias: ["Html", "Css", "React"],
      img: barbie,
      git: "",
      link: "https://barbiemovieonline.netlify.app/",
      descripcion: "One Page de Película de Barbie Life Action.",
    },
    {
      titulo: "Landin page de Tesla",
      tecnologias: ["Astro", "JavaScript"],
      img: tesla,
      git: "https://github.com/desingkuro/tesla-landing-copy.git",
      link: "https://tesla-landing-copy.netlify.app/",
      descripcion:
        "Landing Page basada en la página oficial de Tesla y midudev.",
    },
  ];
  const skills = [
    {
      item: <FaReact size={logosSobremiSize} color={colorSkills} />,
      nombre: "React",
    },
    {
      item: <FaReact size={logosSobremiSize} color={colorSkills} />,
      nombre: "React Native",
    },
    {
      item: <FaPython size={logosSobremiSize} color={colorSkills} />,
      nombre: "Python",
    },
    {
      item: <BiLogoFlask size={logosSobremiSize} color={colorSkills} />,
      nombre: "Flask",
    },
    {
      item: <BiLogoPostgresql size={logosSobremiSize} color={colorSkills} />,
      nombre: "PostGres",
    },
    {
      item: <FaNodeJs size={logosSobremiSize} color={colorSkills} />,
      nombre: "Node Js",
    },
    {
      item: <FaReact size={logosSobremiSize} color={colorSkills} />,
      nombre: "React",
    },
    {
      item: <FaReact size={logosSobremiSize} color={colorSkills} />,
      nombre: "React Native",
    },
    {
      item: <FaPython size={logosSobremiSize} color={colorSkills} />,
      nombre: "Python",
    },
    {
      item: <BiLogoFlask size={logosSobremiSize} color={colorSkills} />,
      nombre: "Flask",
    },
    {
      item: <BiLogoPostgresql size={logosSobremiSize} color={colorSkills} />,
      nombre: "PostGres",
    },
    {
      item: <FaNodeJs size={logosSobremiSize} color={colorSkills} />,
      nombre: "Node Js",
    },
  ];
  const data = [
    {
      type: "Formaciones",
      items: [
        {
          title: "Ingenieria de Sistemas",
          institution: "Universidad del Magdalena",
          date: "Febrero 2020 – Presente",
        },
      ],
    },
    {
      type: "Cursos",
      items: [
        {
          title: "Programación Basica",
          institution: "Platzi",
          date: "Noviembre 2019 – Noviembre 2019",
        },
        {
          title: "React: desarrollando con JavaScript",
          institution: "Alura Latam",
          date: "Junio 2023 – Junio 2023",
        },
        {
          title: "JS en la Web: Manipulación del DOM con JavaScript",
          institution: "Alura Latam",
          date: "Mayo 2023 – Mayo 2023",
        },
        {
          title: "React Router: Navegación en una SPA",
          institution: "Alura Latam",
          date: "Mayo 2023 – Mayo 2023",
        },
        {
          title: "Git y GitHub: controle y comparta su código",
          institution: "Alura Latam",
          date: "Abril 2023 – Abril 2023",
        },
        {
          title: "Gestión ágil: Liderando el cambio en un ambiente de agilidad",
          institution: "Alura Latam",
          date: "Abril 2023 – Abril 2023",
        },
      ],
    },
  ];
  return (
    <contextoPrincipal.Provider value={{ proyectos, skills, data }}>
      {children}
    </contextoPrincipal.Provider>
  );
}
