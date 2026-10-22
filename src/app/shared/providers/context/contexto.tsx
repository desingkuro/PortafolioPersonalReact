import {
  SiAngular,
  SiAstro,
  SiCss3,
  SiExpo,
  SiExpress,
  SiFirebase,
  SiFlask,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJetpackcompose,
  SiKotlin,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiRabbitmq,
  SiReact,
  SiReactivex,
  SiRedux,
  SiScikitlearn,
  SiSequelize,
  SiSpringboot,
  SiTailwindcss,
  SiTensorflow,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import {
  TbApi,
  TbArrowsExchange,
  TbBoxMultiple,
  TbBrandReactNative,
  TbTopologyStar3,
} from "react-icons/tb";
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
import auraMain from "../../../../assets/img/projects/Aura/aura-main.webp"

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
      item: <SiReact size={logosSobremiSize} color={colorSkills} />,
      nombre: "React",
      color: colorSkills,
      category: "frontend",
      description: "Interfaces con componentes, hooks y estado global con Redux Toolkit.",
      featured: true,
      projectIds: [4, 6],
    },
    {
      item: <SiAngular size={logosSobremiSize} color={colorSkills} />,
      nombre: "Angular",
      color: colorSkills,
      category: "frontend",
      description: "SPA empresariales con Angular Material, RxJS y Module Federation.",
      featured: true,
      projectIds: [2],
    },
    {
      item: <SiVuedotjs size={logosSobremiSize} color={colorSkills} />,
      nombre: "Vue.js",
      color: colorSkills,
      category: "frontend",
      description: "Interfaces progresivas con componentes reutilizables.",
    },
    {
      item: <SiTypescript size={logosSobremiSize} color={colorSkills} />,
      nombre: "TypeScript",
      color: colorSkills,
      category: "frontend",
      description: "Tipado estático para aplicaciones frontend y backend.",
      featured: true,
      projectIds: [2, 3, 4, 6],
    },
    {
      item: <SiJavascript size={logosSobremiSize} color={colorSkills} />,
      nombre: "JavaScript",
      color: colorSkills,
      category: "frontend",
      description: "Base del desarrollo web moderno y la lógica de aplicaciones.",
      projectIds: [1, 4, 6],
    },
    {
      item: <SiHtml5 size={logosSobremiSize} color={colorSkills} />,
      nombre: "HTML5",
      color: colorSkills,
      category: "frontend",
      description: "Maquetación semántica, accesible y responsive.",
      projectIds: [3],
    },
    {
      item: <SiCss3 size={logosSobremiSize} color={colorSkills} />,
      nombre: "CSS3",
      color: colorSkills,
      category: "frontend",
      description: "Estilos, animaciones y sistemas visuales responsive.",
      projectIds: [3, 6],
    },
    {
      item: <SiTailwindcss size={logosSobremiSize} color={colorSkills} />,
      nombre: "Tailwind CSS",
      color: colorSkills,
      category: "frontend",
      description: "Sistemas de diseño utilitarios y responsive.",
      projectIds: [3, 4, 6],
    },
    {
      item: <SiAstro size={logosSobremiSize} color={colorSkills} />,
      nombre: "Astro",
      color: colorSkills,
      category: "frontend",
      description: "Landing pages rápidas con islas interactivas.",
      projectIds: [3],
    },
    {
      item: <SiRedux size={logosSobremiSize} color={colorSkills} />,
      nombre: "Redux Toolkit",
      color: colorSkills,
      category: "frontend",
      description: "Gestión de estado global predecible.",
      projectIds: [4],
    },
    {
      item: <SiReactivex size={logosSobremiSize} color={colorSkills} />,
      nombre: "RxJS",
      color: colorSkills,
      category: "frontend",
      description: "Programación reactiva y manejo de observables.",
      projectIds: [2],
    },
    {
      item: <SiNestjs size={logosSobremiSize} color={colorSkills} />,
      nombre: "NestJS",
      color: colorSkills,
      category: "backend",
      description: "APIs RESTful modulares y microservicios.",
      featured: true,
    },
    {
      item: <SiNodedotjs size={logosSobremiSize} color={colorSkills} />,
      nombre: "Node.js",
      color: colorSkills,
      category: "backend",
      description: "Entorno de ejecución para servicios backend.",
      featured: true,
    },
    {
      item: <SiExpress size={logosSobremiSize} color={colorSkills} />,
      nombre: "Express.js",
      color: colorSkills,
      category: "backend",
      description: "APIs ligeras y servicios HTTP.",
    },
    {
      item: <SiFlask size={logosSobremiSize} color={colorSkills} />,
      nombre: "Flask",
      color: colorSkills,
      category: "backend",
      description: "Servicios y prototipos backend con Python.",
    },
    {
      item: <SiSpringboot size={logosSobremiSize} color={colorSkills} />,
      nombre: "Spring Boot",
      color: colorSkills,
      category: "backend",
      description: "APIs empresariales con Java.",
    },
    {
      item: <TbApi size={logosSobremiSize} color={colorSkills} />,
      nombre: "REST APIs",
      color: colorSkills,
      category: "backend",
      description: "Diseño e integración de servicios HTTP.",
      projectIds: [2, 4],
    },
    {
      item: <SiRabbitmq size={logosSobremiSize} color={colorSkills} />,
      nombre: "RabbitMQ",
      color: colorSkills,
      category: "backend",
      description: "Mensajería asíncrona entre microservicios.",
    },
    {
      item: <TbBrandReactNative size={logosSobremiSize} color={colorSkills} />,
      nombre: "React Native",
      color: colorSkills,
      category: "mobile",
      description: "Apps móviles multiplataforma publicadas en Google Play.",
      featured: true,
      projectIds: [1],
    },
    {
      item: <SiExpo size={logosSobremiSize} color={colorSkills} />,
      nombre: "Expo",
      color: colorSkills,
      category: "mobile",
      description: "Desarrollo y despliegue ágil de apps React Native.",
      projectIds: [1],
    },
    {
      item: <SiKotlin size={logosSobremiSize} color={colorSkills} />,
      nombre: "Kotlin",
      color: colorSkills,
      category: "mobile",
      description: "Aplicaciones de escritorio con Compose Multiplatform.",
      projectIds: [7],
    },
    {
      item: <SiJetpackcompose size={logosSobremiSize} color={colorSkills} />,
      nombre: "Compose Multiplatform",
      color: colorSkills,
      category: "mobile",
      description: "UI declarativa para aplicaciones de escritorio.",
      projectIds: [7],
    },
    {
      item: <SiPostgresql size={logosSobremiSize} color={colorSkills} />,
      nombre: "PostgreSQL",
      color: colorSkills,
      category: "database",
      description: "Modelado relacional, consultas y transacciones atómicas.",
      featured: true,
    },
    {
      item: <SiFirebase size={logosSobremiSize} color={colorSkills} />,
      nombre: "Firebase",
      color: colorSkills,
      category: "database",
      description: "Autenticación, Firestore y sincronización en tiempo real.",
      projectIds: [4],
    },
    {
      item: <SiSequelize size={logosSobremiSize} color={colorSkills} />,
      nombre: "Sequelize",
      color: colorSkills,
      category: "database",
      description: "ORM para PostgreSQL y gestión de persistencia.",
    },
    {
      item: <SiPython size={logosSobremiSize} color={colorSkills} />,
      nombre: "Python",
      color: colorSkills,
      category: "data",
      description: "Análisis de datos, scripting y machine learning.",
      featured: true,
      projectIds: [5],
    },
    {
      item: <SiTensorflow size={logosSobremiSize} color={colorSkills} />,
      nombre: "TensorFlow",
      color: colorSkills,
      category: "data",
      description: "Entrenamiento de modelos de clasificación.",
      projectIds: [5],
    },
    {
      item: <SiScikitlearn size={logosSobremiSize} color={colorSkills} />,
      nombre: "Scikit-learn",
      color: colorSkills,
      category: "data",
      description: "Modelos, métricas y evaluación de machine learning.",
      projectIds: [5],
    },
    {
      item: <TbTopologyStar3 size={logosSobremiSize} color={colorSkills} />,
      nombre: "Microservicios",
      color: colorSkills,
      category: "architecture",
      description: "Arquitectura desacoplada por dominios.",
    },
    {
      item: <TbArrowsExchange size={logosSobremiSize} color={colorSkills} />,
      nombre: "Mensajería asíncrona",
      color: colorSkills,
      category: "architecture",
      description: "Comunicación entre servicios con RabbitMQ.",
    },
    {
      item: <TbBoxMultiple size={logosSobremiSize} color={colorSkills} />,
      nombre: "Arquitectura modular",
      color: colorSkills,
      category: "architecture",
      description: "Código mantenible y separado por responsabilidades.",
    },
    {
      item: <SiGit size={logosSobremiSize} color={colorSkills} />,
      nombre: "Git",
      color: colorSkills,
      category: "tools",
      description: "Control de versiones y trabajo colaborativo.",
    },
    {
      item: <SiGithub size={logosSobremiSize} color={colorSkills} />,
      nombre: "GitHub",
      color: colorSkills,
      category: "tools",
      description: "Repositorios, pull requests y flujos de trabajo.",
    },
    {
      item: <SiJest size={logosSobremiSize} color={colorSkills} />,
      nombre: "Jest",
      color: colorSkills,
      category: "tools",
      description: "Pruebas unitarias para aplicaciones frontend.",
      projectIds: [2],
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
