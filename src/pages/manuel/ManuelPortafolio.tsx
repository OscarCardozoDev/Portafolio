import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';
import './ManuelPortafolio.css';
import ManuelImage from "../../assets/home/Perfil-Silva.jpg"

const Portfolio = () => {

    return (
        <div className="portfolio">
      {/* Header/Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <div className="profile-image">
            <img 
              src= {ManuelImage}
              alt="Foto de perfil"
              className="profile-img"
            />
          </div>
          <div className="hero-text">
            <h1 className="hero-title">Manuel Silva</h1>
            <h2 className="hero-subtitle">Desarrollador en formación</h2>
            <p className="hero-description">
              Profesional en formación con experiencia en desarrollo de aplicaciones 
              móviles y servicios web. He trabajado con tecnologías como Xamarin Forms, 
              ASP.NET Core y SQL Server en Azure y tego conocimiento el modelado 3D y en redes y comunicaciones.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Contactar</a>
              <a href="#projects" className="btn btn-secondary">Ver Proyectos</a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">Sobre Mí</h2>
          <div className="about-content">
            <p className="about-text">
              Me enfoco en la integración de aplicaciones con bases de datos en la nube y en la 
              implementación de buenas prácticas de arquitectura de software. Caracterizado por la 
              capacidad de resolución de problemas, el interes constante en aprender nuevas tecnologías 
              y la habilidad para llevar proyectos desde la fase de diseño hasta la implementación.
              Me apasiona resolver problemas complejos y crear aplicaciones que impacten 
              positivamente en la vida de las personas. Siempre estoy buscando aprender nuevas tecnologías 
              y mejorar mis habilidades.
            </p>
            <p className="about-text">
              Cuando no estoy programando, disfruto investigar sobre nuevas 
              tendencias en tecnología y hacer deporte. Creo firmemente en el poder de la colaboración 
              y el aprendizaje continuo.
            </p>
          </div>
        </div>
      </section>
      /</div>
    );
};

export default Portfolio;
