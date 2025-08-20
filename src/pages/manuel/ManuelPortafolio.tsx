import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';
import './ManuelPortafolio.css';
import ManuelImage from "../../assets/home/Perfil-Silva.jpg"
import waikiki from '../../assets/home/Waikiki-imagen.png'
import Lyna from '../../assets/home/Lyna.png'

const Portfolio = () => {

    const skills = [
    { name: 'Java', level: 90 },
    { name: 'C#', level: 80 },
    { name: 'Python', level: 65 },
    { name: 'SQL Server', level: 85 },
    { name: 'Blender', level: 75 },
    { name: 'Unity', level: 70 },
    { name: 'Redes', level: 65 },
    { name: 'Xamarin Forms', level: 70},
    { name: 'ASP.NET Core', level: 65}
  ];

  const projects = [
    {
      title: 'Gestion de Cuentas',
      description: 'App movil que apoya en la gestion de cuentas y clientes, desarrollada con Xamarin forms e integración de base de datos SQL Server en Azure.',
      image: 'https://porcobrar.com/wp-content/uploads/2020/09/Gestio%CC%81n-de-cuentas-por-cobrar_Interior.webp',
      tech: ['Xamarin Forms', 'ASP.NET Core', 'C#', 'SQL Server'],
      demo: '#',
      github: '#'
    },
    {
      title: 'Asistente Virtual 3D',
      description: 'un asistente virtual 3D inteligente, diseñado para acompañar, guiar y organizar la vida académica del estudiante de forma personalizada, inclusiva y humana.',
      image: Lyna,
      tech: ['Blender', 'Unity', 'C#'],
      demo: '#',
      github: '#'
    },
    {
      title: 'Gestion de pedidos y reservas en un restaurante',
      description: 'Pagina web para un restaurante, que permite realizar la gestion del negocio tanto como la reserva y los pedidos del cliente',
      image: waikiki,
      tech: ['HTML', 'JavaScrip', 'CSS', 'MySql'],
      demo: '#',
      github: '#'
    }
  ];
    
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

        {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <h2 className="section-title">Habilidades</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">Proyectos</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.demo} className="project-link">
                        <ExternalLink size={20} />
                      </a>
                      <a href={project.github} className="project-link">
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      /</div>
    );
};

export default Portfolio;
