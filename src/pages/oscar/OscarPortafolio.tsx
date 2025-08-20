import React, { useState, useEffect} from "react";
import "./OscarPortafolio.css";
import "./grid.css";


const myWork = [
  {
    id: 1,
    title: "Opieka",
    path: "src/assets/oscar/Opieka.png",
    url: "https://www.opieka.com/",
    select: "selected",
  },
  {
    id: 2,
    title: "Beneficiate",
    path: "src/assets/oscar/Beneficiate.png",
    url: "https://beneficiate.co/",
    select: "",
  },
  {
    id: 3,
    title: "Cuidame Tech",
    path: "src/assets/oscar/CuidameTech.png",
    url: "https://cuidamehealth.com/",
    select: "",
  },
  {
    id: 4,
    title: "Prodomotic",
    path: "src/assets/oscar/Prodomotic.png",
    url: "https://prodomotic.com/",
    select: "",
  },
];

export default function OscarPortafolio(): React.ReactElement {
  const [selected, setSelected] = useState<string>("selected");

  function hoverSelected(id: number) {
    setSelected(id.toString());

    myWork.forEach((item) => {
      if (item.id === id) {
        item.select = "selected";
      } else {
        item.select = "";
      }
    });
  }

  useEffect(() => {
    if (selected === "") {
      myWork.forEach((item) => {
        item.select = "";
      });
    }
  }, [selected]);

  return (
    <div className="parent">
      <header className="card header">
        <h1>Oscar Cardozo</h1>
        <nav>
          <a href="">Pablo</a>
          <a href="">Eliana</a>
          <a href="">Manuel</a>
        </nav>
      </header>

      <section className="card phraseContainer">
        <img
          src="src/assets/oscar/mandala.png"
          alt="mandala"
          className="mandalaImg"
        />
        <p>
          Siempre en busca de nuevos desafios que me obliguen a mejorar como
          ingeniero y persona
        </p>
      </section>

      <section className="card myWork">
        <div className="workContainer">
          {myWork.map((item) => (
            <div 
              className={`workItem ${item.select}`} 
              key={item.id}
              onMouseEnter={() => hoverSelected(item.id)}
            >
              <div className="titleContainer">
                <h2>{item.title}</h2>
                <i></i>
              </div>
              <div className="previewContainer" onClick={() => window.open(item.url)} >
                <img 
                  src={item.path} 
                  alt={item.title} 
                  className="workImg" 
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="card socialMedia">
        <nav>
          <a href="https://www.linkedin.com/in/oscar-javier-cardozo-diaz-baa952205/">
            Linkedin
          </a>
          <a href="https://github.com/OscarCardozoDev">GitHub</a>
          <a href="https://www.instagram.com/tipodelmonton/?hl=es-la">
            Instagram
          </a>
        </nav>
      </section>

      <section className="card contactMe">
        <div className="arriba">
          <h3>Tienes alguna<br/>duda?</h3>
          <img src="src/assets/oscar/arrow.png" alt="arrow" />
        </div>

        <div className="abajo">
          <h1>Contactame</h1>
        </div>
      </section>

      <section className="card aboutMe">
        <img src="src/assets/oscar/pincel.png" alt="decoration" />

        <h3>
          Soy un ingeniero en sistemas apasionado por crear experiencias web excepcionales. 
          Aunque mi especialidad es el frontend, manejo el stack completo de desarrollo. 
          Lo que me distingue es mi capacidad para generar ideas creativas que transforman 
          proyectos y agregan valor real a cada solución que desarrollo.
        </h3>
      </section>

      <section className="card imageContainer">
        <img
          src="src/assets/oscar/portafolioImg.png"
          alt="Oscar Cardozo"
          className="image"
        />
      </section>
    </div>
  );
}
