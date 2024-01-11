import '../style/SobremiStyle.css'
import logo from '../assets/logoKurowhite.png'
import {FaReact,FaPython,FaNodeJs} from 'react-icons/fa'
import {BiLogoFlask,BiLogoPostgresql} from 'react-icons/bi'
import { ItemSkills } from '../components/ItemSkill'

export const Sobremi=()=>{
    const logosSobremiSize=130;
    const colorSkills='rgba(255, 255, 255, 0.74)';
    const skills=[
        {
            'item':<FaReact size={logosSobremiSize} color={colorSkills}/>,
            'nombre':'React'
        },
        {
            'item':<FaReact size={logosSobremiSize} color={colorSkills}/>,
            'nombre':'React Native'
        },
        {
            'item':<FaPython size={logosSobremiSize} color={colorSkills}/>  ,
            'nombre':'Python'
        },
        {
            'item':<BiLogoFlask size={logosSobremiSize} color={colorSkills}/>,
            'nombre':'Flask'
        },
        {
            'item':<BiLogoPostgresql size={logosSobremiSize} color={colorSkills}/>,
            'nombre':'PostGres'
        },
        {
            'item':<FaNodeJs size={logosSobremiSize} color={colorSkills}/> ,
            'nombre':'Node Js'
        },
        {
            'item':<FaReact size={logosSobremiSize} color={colorSkills}/>,
            'nombre':'React'
        },
        {
            'item':<FaReact size={logosSobremiSize} color={colorSkills}/>,
            'nombre':'React Native'
        },
        {
            'item':<FaPython size={logosSobremiSize} color={colorSkills}/>  ,
            'nombre':'Python'
        },
        {
            'item':<BiLogoFlask size={logosSobremiSize} color={colorSkills}/>,
            'nombre':'Flask'
        },
        {
            'item':<BiLogoPostgresql size={logosSobremiSize} color={colorSkills}/>,
            'nombre':'PostGres'
        },
        {
            'item':<FaNodeJs size={logosSobremiSize} color={colorSkills}/> ,
            'nombre':'Node Js'
        }
    ]
    return(
        <section className="sobremiContainer">
            <main className='contenidoPrincipal'>
                <section className="sectionSobremi">
                    {skills.map((e,i)=>{
                        return(
                            <ItemSkills key={i} item={e}/>
                        )
                    })}
                </section>
                <section className="sectionSobremi">
                    <img src={logo} alt="Logotipo de Kuro" className='logoSobremi'/>
                    <h2 className='tituloSobremi'>Mas sobre mi</h2>
                    <p>
                        Soy un desarrollador Front-End, enfocado en el diseño estético, 
                        la usabilidad y el rendimiento. También cuento con buenas habilidades de comunicación,
                        edición y diseño, así como conocimientos de diferentes lenguajes. Si buscas una mente creativa y hábil en desarrollo 
                        frontend para tu próximo proyecto, estás en el lugar correcto.
                    </p>
                </section>
                <section className="sectionSobremi">
                    <div className='estudios'>
                        <section className='formaciones'>
                            <h2>Formaciones</h2>
                            <ul>
                                <li>
                                    <h3>Ingenieria de Sistemas,<span className='resaltadoFormaciones'> Universidad del Magdalena</span></h3>
                                    <span>Febrero 2020 – Presente</span>
                                </li>
                            </ul>
                        </section>
                        <section className='formaciones'>
                            <h2>Cursos</h2>
                            <ul>
                                <li>
                                    <h3>Programación Basica, <span className='resaltadoFormaciones'>Platzi</span></h3>
                                    <span>Noviembre 2019 – Noviembre 2019</span>
                                </li>
                                <li>
                                    <h3>React: desarrollando con JavaScript, <span className='resaltadoFormaciones'>Alura Latam</span></h3>
                                    <span>Junio 2023 – Junio 2023</span>
                                </li>
                                <li>
                                    <h3>JS en la Web: Manipulación del DOM con JavaS cript,<span className='resaltadoFormaciones'>Alura Latam</span></h3>
                                    <span>Mayo 2023 – Mayo 2023</span>
                                </li>
                                <li>
                                    <h3>Git y GitHub: controle y comparta su código,<span className='resaltadoFormaciones'>Alura Latam</span></h3>
                                    <span>Abril 2023 – Abril 2023</span>
                                </li>
                            </ul>
                        </section>
                    </div>
                </section>
            </main>
        </section>
    )
}