//import imgPresetation from '';
import "./OscarPortafolio.css";

export default function OscarPortafolio(): React.ReactElement {
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
        <img src="src/assets/oscar/mandala.png" alt="mandala" className="mandalaImg"/>
        <p>Siempre en busca de nuevos desafios que me obliguen a mejorar como ingeniero y persona</p>
      </section>

      <section className="card div2">2</section>

      <section className="card socialMedia">
        <nav>
          <a href="https://www.linkedin.com/in/oscar-javier-cardozo-diaz-baa952205/">Linkedin</a>
          <a href="https://github.com/OscarCardozoDev">GitHub</a>
          <a href="https://www.instagram.com/tipodelmonton/?hl=es-la">Instagram</a>
        </nav>
      </section>

      <section className="card div4">4</section>

      <section className="card div5">5</section>

      <section className="card imageContainer">
        <img src="src/assets/oscar/portafolioImg.png" alt="Oscar Cardozo" className="image" />
      </section>
    </div>
  );
}
