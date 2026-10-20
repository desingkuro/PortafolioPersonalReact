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
import pucDetail from "../../../../assets/img/projects/Puc/detailPuc.png"
import pucPage from "../../../../assets/img/projects/Puc/pucPage.png"
import ml from "../../../../assets/img/projects/ML/image.png"
import ml1 from "../../../../assets/img/projects/ML/image1.png"
import ml2 from "../../../../assets/img/projects/ML/image2.png"
import ml3 from "../../../../assets/img/projects/ML/image3.png"
import memoryImg from "../../../../assets/img/projects/MemoryGame/img.png"
import memoryImg2 from "../../../../assets/img/projects/MemoryGame/img2.png"
import memoryImg3 from "../../../../assets/img/projects/MemoryGame/img3.png"
import auraMain from "../../../../assets/img/projects/Aura/aura-main.png"

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
import type { ContextoProveedorProps, ProjectsInterface, SkillsInterface, DataBlock } from "../../interfaces/contextInterfaces";
import { contextoPrincipal } from "./context";


export function ContextoProveedor({ children }: ContextoProveedorProps) {
  const logosSobremiSize = 50;
  //const colorSkills = "rgba(255, 255, 255, 0.74)";
  const colorSkills = "#ff5555";

  const projects: ProjectsInterface[] = [
    {
      id: 1,
      title: "App PUC — Plan Único de Cuentas",
      tecnologies: ["React Native"],
      img: [pucPlayStore,pucDetail,pucPage],
      git: "https://github.com/desingkuro/puc.git",
      //'link':'https://puc.uptodown.com/android',
      link: [
        { name: "Page", url: "https://puc-app-mobile.netlify.app/" },
        { name: "PlayStore", url: "https://play.google.com/store/apps/details?id=com.yeiler2209.puc&hl=es_CO" },
        { name: "Repositorio", url: "https://github.com/desingkuro/puc" }
      ],
      description:
        "App móvil desarrollada en React Native para consultar cuentas y códigos del Plan Único de Cuentas (PUC). Diseñada para apoyar el aprendizaje de estudiantes de contabilidad.",
      category: "project",
    },
    {
      id: 2,
      title: "FotoMulta",
      description: "Plataforma para administrar y gestionar las infracciones detectadas por cámaras de fotomultas. Permite validar la veracidad de cada infracción, marcarla como verificada o rechazada por el agente de tránsito y administrar el despliegue de cámaras y su asignación.",
      git: "",
      img: [photoDetectionLogin, photoDetectionhome, photoDetectionhome1],
      tecnologies: ["Angular 18", "Module Federation", "Compodoc", "Jest"],
      link: null,
      category: "experience",
      experience: {
        company: "ServiConnect",
        role: "Desarrollador Full-Stack",
        period: "Nov 2023 — Sep 2025",
      },
    },
    {
      id: 3,
      title: "Landing page de Tesla",
      tecnologies: ["Astro", "HTML", "Tailwind", "TypeScript"],
      img: [tesla],
      git: "https://github.com/desingkuro/tesla-landing-copy.git",
      link: [{ name: "Page", url: "https://tesla-landing-copy.netlify.app/", }, { name: "Repo", url: "https://github.com/desingkuro/tesla-landing-copy.git" }],
      description:
        "Landing page inspirada en la página oficial de Tesla, construida con Astro, Tailwind CSS y TypeScript.",
      category: "project",
    },
    {
      id: 4,
      title: "Tickets",
      tecnologies: ["React", "Firebase", "Tailwind", "TypeScript", "Redux"],
      img: [ticketsHome, ticketsCreate, ticketsList],
      git: "",
      link: null,
      description: "Sistema de gestión de tickets desarrollado con React y Firebase. Permite la creación, asignación, seguimiento y cierre de incidencias, con autenticación de usuarios y almacenamiento en tiempo real.",
      category: "experience",
      experience: {
        company: "ServiConnect",
        role: "Desarrollador Full-Stack",
        period: "Nov 2023 — Sep 2025",
      },
    },
    {
      id: 5,
      title: 'Trabajo Final ML — Clasificación de caracteres japoneses',
      tecnologies: ['Python 3.12', 'TensorFlow', 'Keras', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'SciPy', 'OpenCV', 'Jupyter Notebook'],
      img: [ml, ml1, ml2, ml3],
      git: 'https://github.com/desingkuro/ML-Python-Analicis-de-caracteres-japoneses.git',
      link: [{ name: "Repo", url: "https://github.com/desingkuro/ML-Python-Analicis-de-caracteres-japoneses.git" }],
      description: 'Trabajo final de Machine Learning: clasificación de 10 caracteres hiragana a partir de imágenes de 28×28 píxeles. Incluye análisis exploratorio, preprocesamiento y entrenamiento de modelos con Python, TensorFlow y Scikit-learn.',
      category: "project",
    },
    {
      id: 6,
      title: "Memory Game — Rick & Morty",
      tecnologies: ["React", "TypeScript", "CSS Animations", "Rick and Morty API"],
      img: [memoryImg, memoryImg2, memoryImg3],
      git: "https://github.com/desingkuro/Memory-Game.git",
      link: [
        { name: "Page", url: "https://memorygamerickandmorty.netlify.app/" },
        { name: "Repo", url: "https://github.com/desingkuro/Memory-Game.git" }
      ],
      description: "Juego de memoria temático de Rick and Morty. Consume la API pública de la serie para obtener personajes, los voltea aleatoriamente y el jugador debe encontrar las parejas. Incluye animaciones 3D de card-flip, contador de movimientos y temporizador.",
      category: "project",
    },
    {
      id: 7,
      title: "Aura SDDM Manager",
      tecnologies: ["Kotlin", "Compose Multiplatform", "Gradle KTS", "Clean Architecture", "PolicyKit"],
      img: [auraMain],
      git: "https://github.com/desingkuro/Aura-SDDM-Manager.git",
      link: [
        { name: "Repo", url: "https://github.com/desingkuro/Aura-SDDM-Manager" }
      ],
      description: "Aplicación de escritorio para Linux que permite gestionar los fondos de pantalla de SDDM. Importa imágenes y videos, genera miniaturas con ffmpeg, previsualiza el tema con sddm-greeter y aplica el fondo con permisos de administrador mediante pkexec. Incluye respaldos automáticos y restauración de la configuración anterior.",
      category: "project",
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

  const data: DataBlock[] = [
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
