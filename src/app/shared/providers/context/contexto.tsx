import { createContext } from "react";
import { FaReact, FaPython, FaNodeJs, FaAngular } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import tesla from "../../../../assets/img/projects/Tesla/tesla.png"
import photoDetectionLogin from "../../../../assets/img/projects/photoDetection/login.png"
import photoDetectionhome from "../../../../assets/img/projects/photoDetection/home.png"
import photoDetectionhome1 from "../../../../assets/img/projects/photoDetection/home1.png"
import ticketsHome from "../../../../assets/img/projects/Ticket/ticketHome.jpeg"
import ticketsCreate from "../../../../assets/img/projects/Ticket/ticketCreate.jpeg"
import ticketsList from "../../../../assets/img/projects/Ticket/TicketList.jpeg"
import pucPlayStore from "../../../../assets/img/projects/Puc/playStorePuc.png"

import {
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaMailBulk,
} from "react-icons/fa";
import { type SocialMediaProps } from "../../components/SocialMedia";
import { BiLike } from "react-icons/bi";

import { SiNestjs } from "react-icons/si";
import type { ContactItemProps } from "../../components/ContactItem";
import type { ContextoPrincipal, ContextoProveedorProps, ProjectsInterface, SkillsInterface } from "../../interfaces/contextInterfaces";

export const contextoPrincipal = createContext<ContextoPrincipal>({
  projects: [],
  skills: [],
  data: [],
  contactItems: [],
});


export function ContextoProveedor({ children }: ContextoProveedorProps) {
  const logosSobremiSize = 50;
  //const colorSkills = "rgba(255, 255, 255, 0.74)";
  const colorSkills = "#ff5555";

  const projects: ProjectsInterface[] = [
    {
      id: 1,
      title: "App Puc (Plan unico de cuentas)",
      tecnologies: ["React Native"],
      img: [pucPlayStore],
      git: "https://github.com/desingkuro/puc.git",
      //'link':'https://puc.uptodown.com/android',
      link: [
        { name: "Page", url: "https://puc-app-mobile.netlify.app/" },
        { name: "PlayStore", url: "https://play.google.com/store/apps/details?id=com.yeiler2209.puc&hl=es_CO" },
        { name: "Repositorio", url: "https://github.com/desingkuro/puc" }
      ],
      description:
        "App móvil desarrollada en React Native para realizar búsquedas de cuentas o códigos de contabilidad. Enfocada en el aprendizaje de los estudiantes en proceso de formación en tecnicos enfocados en contabilidad.",
    },
    {
      id: 2,
      title: "Foto Detección",
      description: "Plataforma desarrollada para la administracion yy gestion de infracciones realizadas por camaras de foto multas, la cual tiene la finalidad de poder validar la veracidad de las mismas, dando la opcion de asignar como verificada o rechazda por el agente de transito, ademas de poder administrar de manera completa el despliegue de las camaras, su asignacion entre uchas otras tareas.",
      git: "",
      img: [photoDetectionLogin, photoDetectionhome, photoDetectionhome1],
      tecnologies: ["Angular 18", "Module Federation", "Compodoc", "Jest"],
      link: null
    },
    {
      id: 3,
      title: "Landin page de Tesla",
      tecnologies: ["Astro", "HTML", "Tailwind", "TypeScript"],
      img: [tesla],
      git: "https://github.com/desingkuro/tesla-landing-copy.git",
      link: [{ name: "Page", url: "https://tesla-landing-copy.netlify.app/", }, { name: "Repo", url: "https://github.com/desingkuro/tesla-landing-copy.git" }],
      description:
        "Landing Page basada en la página oficial de Tesla y midudev.",
    },
    {
      id: 4,
      title: "Tickets",
      tecnologies: ["React", "Firebase", "Tailwind", "TypeScript", "Redux"],
      img: [ticketsHome, ticketsCreate, ticketsList],
      git: "",
      link: null,
      description: "Plataforma desarrollada para la administracion y gestion de tickets, la cual tiene la finalidad de poder validar la veracidad de las mismas, dando la opcion de asignar como verificada o rechazda por el agente de transito, ademas de poder administrar de manera completa el despliegue de las camaras, su asignacion entre uchas otras tareas.",
    }
  ];

  const socialMedia: SocialMediaProps[] = [
    {
      url: "https://www.linkedin.com/in/andres-licona-machado/",
      icon: <FaLinkedin color="#0e76a8" />,
      name: "LinkedIn",
    },
    {
      url: "https://github.com/desingkuro",
      icon: <FaGithub color="#333" />,
      name: "GitHub",
    },
    {
      url: "https://www.instagram.com/and_licona/",
      icon: <FaInstagram color="#e1306c" />,
      name: "Instagram",
    },
    {
      url: "https://wa.me/573215082539",
      icon: <FaWhatsapp color="#25D366" />,
      name: "WhatsApp",
    },
  ];

  const contactItems: ContactItemProps[] = [
    {
      socialMedia: null,
      firstText: "Address",
      secondText: "Barrio Buenos Aires, Santa Marta, Colombia",
      icon: <FaMapMarkerAlt size={30} />,
      index: 0,
    },
    {
      socialMedia: null,
      firstText: "Phone",
      secondText: "+57 321 508 2539",
      icon: <FaPhone size={30} />,
      index: 1,
    },
    {
      socialMedia: null,
      firstText: "Email",
      secondText: "andresmauricio745@gmail.com",
      icon: <FaMailBulk size={30} />,
      index: 2,
    },
    {
      socialMedia,
      firstText: "Follow me",
      icon: <BiLike size={30} />,
      index: 3,
    },
  ];

  const skills: SkillsInterface[] = [
    {
      item: <FaReact size={logosSobremiSize} color={colorSkills} />,
      nombre: "React js",
      color: colorSkills,
    },
    {
      item: <FaAngular size={logosSobremiSize} color={colorSkills} />,
      nombre: "Angular",
      color: colorSkills,
    },
    {
      item: <FaReact size={logosSobremiSize} color={colorSkills} />,
      nombre: "React Native",
      color: colorSkills,
    },
    {
      item: <SiNestjs size={logosSobremiSize} color={colorSkills} />,
      nombre: "Nest js",
      color: colorSkills,
    },
    {
      item: <BiLogoPostgresql size={logosSobremiSize} color={colorSkills} />,
      nombre: "PostGres",
      color: colorSkills,
    },
    {
      item: <FaNodeJs size={logosSobremiSize} color={colorSkills} />,
      nombre: "Node Js",
      color: colorSkills,
    },
    {
      item: <FaPython size={logosSobremiSize} color={colorSkills} />,
      nombre: "Python",
      color: colorSkills,
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
    <contextoPrincipal.Provider value={{ projects, skills, data, contactItems }}>
      {children}
    </contextoPrincipal.Provider>
  );
}
