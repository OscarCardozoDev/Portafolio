import React, { useState, useEffect, useEffect } from "react";
import "./OscarPortafolio.css";

const myWork = [
  {
    id: 1,
    title: "Opieka",
    path: "src/assets/oscar/opieka.png",
    url: "https://www.opieka.com/",
    select: "selected",
  },
  {
    id: 2,
    title: "Beneficiate",
    path: "src/assets/oscar/beneficiate.png",
    url: "https://beneficiate.co/",
    select: "",
  },
  {
    id: 3,
    title: "Cuidame Tech",
    path: "src/assets/oscar/cuidameTech.png",
    url: "https://cuidamehealth.com/",
    select: "",
  },
  {
    id: 4,
    title: "Prodomotic",
    path: "src/assets/oscar/opieka.png",
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
          <div className="title">
            <h1>Mi trabajo</h1>
          </div>

          {myWork.map((item) => (
            <div className={`workItem ${item.select}`} key={item.id}>
              <div className="titleContainer">
                <h2>{item.title}</h2>
                <i></i>
              </div>
              <div className="imgContainer">
                <img src={item.path} alt={item.title} className="workImg" />
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

      <section className="card div4">4</section>

      <section className="card div5">5</section>

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
