import React, { useState } from 'react';
import './pablo.css';
import logoFlex from '@/assets/pablo/logoFlex.png'
import AnimFlix from '@/assets/pablo/Animflix.png'
import imagenDatos from '@/assets/pablo/python-powerbi-data-science-1024x404.jpg'
import ponencia from '@/assets/pablo/ponencia.jpg'
import mockups from '@/assets/pablo/mockUps.png'

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  category: string;
}

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [selectedCategory] = useState('all');

  const skills: Skill[] = [
    { name: 'React', level: 90, category: 'Frontend' },
    { name: 'TypeScript', level: 75, category: 'Frontend' },
    { name: 'JavaScript', level: 85, category: 'Frontend' },
    { name: 'HTML/CSS', level: 80, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 80, category: 'Frontend' },
    { name: 'Node.js', level: 80, category: 'Backend' },
    { name: 'Nest.js', level: 75, category: 'Backend' },
    { name: 'Express', level: 70, category: 'Backend' },
    { name: 'MongoDB', level: 60, category: 'Database' },
    { name: 'PostgreSQL', level: 65, category: 'Database' },
    { name: 'Git', level: 85, category: 'Tools' },
    { name: 'Python', level: 65, category: 'IA y Machine Learning' },
    { name: 'pandas', level: 75, category: 'IA y Machine Learning' },
    { name: 'scikit-learn', level: 75, category: 'IA y Machine Learning' },
    { name: 'Ollama', level: 85, category: 'IA y Machine Learning' },
    { name: 'power Bi', level: 75, category: 'Backend' },

  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Flex Drive',
      description: 'Colaboracion en la creacion de una plataforma de arrendamiento vehicular. a lo largo del proyecto colabore con la documentacion y creacion de modelos RAG para las preferencias de usuarios.',
      technologies: ['Python', 'Selenium', 'Sickit-learn', 'Pandas', 'Tensorflow'],
      image: logoFlex,
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/JorgeDanielRamirezNieves/Flex-Drive',
      category: 'Automatizacion/IA'
    },
    {
      id: 2,
      title: 'AnimFlix',
      description: 'colaboracion de la creacion de una API en la plataforma Animflix',
      technologies: ['React', 'Express'],
      image: AnimFlix,
      demoUrl: 'https://tasks.example.com',
      githubUrl: 'https://github.com/RichardMolano/Animaflix',
      category: 'backend'
    },
    {
      id: 3,
      title: 'Tratamiento de datos de empresas',
      description: 'se pidio una colaboracion con el tratamiento de datos de cobro de empresas de las regiones de Boyaca, Cundinamarca, Santander y Norte de Santander',
      technologies: ['Excel', 'Pandas','Numpy','Power Bi'],
      image: imagenDatos,
      demoUrl: 'https://github.com/usuario/api',
      category: 'backend'
    },
    {
      id: 4,
      title: 'Multiples Ponencias',
      description: 'se realizo una serie de ponencias sobre temas de tecnologia y desarrollo de software en diversas universidades.',
      technologies: ['React', 'Node.js', 'JWT'],
      image: ponencia,
      githubUrl: 'https://drive.google.com/drive/folders/1bkMZHl63Yu_1C61YVJECaZ_QlSLQYMQR?usp=drive_link',
      category: 'Investigacion'
    }
    ,
    {
      id: 5,
      title: 'multi trabajo en la gobernacion de Boyaca',
      description: 'a lo largo de 4 meses realize la practica laborar en la gobernacion del departamento de boyaca',
      technologies: ['Python', 'Linux', 'JavaScript'],
      image: mockups,
      category: 'Investigacion'
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">
            <h2>Pablo Aguilar</h2>
            <span>Full Stack Developer</span>
          </div>
          <ul className="nav-menu">
            {[
              { id: 'about', name: 'Sobre Mí' },
              { id: 'skills', name: 'Habilidades' },
              { id: 'projects', name: 'Proyectos' },
              { id: 'contact', name: 'Contacto' }
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Hola, soy <span className="highlight">Pablo Aguilar</span>
            </h1>
            <h2>Full Stack Developer</h2>
            <p>
              Apasionado por la tecnología y la creatividad. Me especializo en desarrollo de big data, Machine Learning y IA, creando experiencias digitales excepcionales sempre dispuesto a aprender.
            </p>
            <div className="hero-buttons">
              <button onClick={() => scrollToSection('projects')} className="btn-primary">
                Ver Proyectos
              </button>
              <button onClick={() => scrollToSection('contact')} className="btn-secondary">
                Contactar
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">
              
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">Sobre Mí</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Soy un desarrollador Full Stack con una fuerte pasión por crear aplicaciones web 
                modernas y eficientes. Mi experiencia abarca desde el desarrollo de inteligencia artificial, big data y Machine Learning,
              </p>
              <p>
                Me encanta resolver problemas complejos y transformar ideas en soluciones digitales 
                innovadoras. Siempre estoy buscando aprender nuevas tecnologías y mejorar mis habilidades.
              </p>
              <div className="stats">
                <div className="stat">
                  <h3>1+</h3>
                  <p>Años de Experiencia</p>
                </div>
                <div className="stat">
                  <h3>5+</h3>
                  <p>Proyectos Completados</p>
                </div>
                <div className="stat">
                  <h3>6+</h3>
                  <p>Tecnologías Dominadas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="container">
          <h2 className="section-title">Habilidades</h2>
          <div className="skills-content">
            {Object.entries(groupedSkills).map(([category, categorySkills]) => (
              <div key={category} className="skill-category">
                <h3 className="category-title">{category}</h3>
                <div className="skills-grid">
                  {categorySkills.map((skill) => (
                    <div key={skill.name} className="skill-item">
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
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <h2 className="section-title">Proyectos</h2>
          
         

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                     {/*  {project.demoUrl && (
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                          Demo
                        </a>
                      )} */}
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Contacto</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>¡Hablemos!</h3>
              <p>
                Estoy siempre abierto a discutir nuevas oportunidades, 
                proyectos interesantes, nuevos lenguajes o estrategias de aprendizaje.
              </p>
              <div className="contact-methods">
                <div className="contact-method">
                  <span className="contact-icon">📧</span>
                  <span>aguilarchinomepablonicolas@email.com</span>
                </div>
                <div className="contact-method">
                  <span className="contact-icon">📱</span>
                  <span>+57 310 858 4466</span>
                </div>
                <div className="contact-method">
                  <span className="contact-icon">📍</span>
                  <span>Colombia</span>
                </div>
              </div>
              <div className="social-links">
                <a href="https://github.com/pabno5" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Asunto</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Mensaje</label>
                <textarea id="message" name="message" rows={5} required></textarea>
              </div>
              <button type="submit" className="btn-primary">Enviar Mensaje</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Pablo Aguilar. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
