import "../style/SobremiStyle.css";
import logo from "../assets/logoKurowhite.png";
import { FaReact, FaPython, FaNodeJs } from "react-icons/fa";
import { BiLogoFlask, BiLogoPostgresql } from "react-icons/bi";
import { ItemSkills } from "../components/ItemSkill";
import { useContext } from "react";
import { contextoPrincipal } from "../../context/contexto";

export const Sobremi = () => {
  const { skills, data } = useContext(contextoPrincipal);

  return (
    <section className="sobremiContainer">
      <main className="contenidoPrincipal">
        <section className="sectionSobremi">
          {skills.map((e, i) => {
            return <ItemSkills key={i} item={e} />;
          })}
        </section>
        <section className="sectionSobremi">
          <img src={logo} alt="Logotipo de Kuro" className="logoSobremi" />
          <h2 className="tituloSobremi">Mas sobre mi</h2>
          <p>
            Soy un desarrollador Front-End, enfocado en el diseño estético, la
            usabilidad y el rendimiento. También cuento con buenas habilidades
            de comunicación, edición y diseño, así como conocimientos de
            diferentes lenguajes. Si buscas una mente creativa y hábil en
            desarrollo frontend para tu próximo proyecto, estás en el lugar
            correcto.
          </p>
        </section>
        <section className="sectionSobremi">
          <div className="estudios">
            {data.map((section, index) => (
              <section className="formaciones" key={index}>
                <h2>{section.type}</h2>
                <ul>
                  {section.items.map((item, index) => (
                    <li key={index}>
                      <h3>
                        {item.title},{" "}
                        <span className="resaltadoFormaciones">
                          {item.institution}
                        </span>
                      </h3>
                      <span>{item.date}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>
      </main>
    </section>
  );
};
