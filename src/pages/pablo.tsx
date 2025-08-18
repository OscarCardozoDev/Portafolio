import React, { useState } from 'react';
import './pablo.css';

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
  const [selectedCategory, setSelectedCategory] = useState('all');

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
      title: 'E-commerce Platform',
      description: 'Una plataforma de e-commerce completa con React, Node.js y MongoDB. Incluye carrito de compras, autenticación y panel de administración.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
      image: '/api/placeholder/400/250',
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/usuario/proyecto',
      category: 'fullstack'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Aplicación de gestión de tareas con drag & drop, notificaciones en tiempo real y colaboración en equipo.',
      technologies: ['React', 'TypeScript', 'Socket.io', 'PostgreSQL'],
      image: '/api/placeholder/400/250',
      demoUrl: 'https://tasks.example.com',
      githubUrl: 'https://github.com/usuario/tasks',
      category: 'frontend'
    },
    {
      id: 3,
      title: 'API REST Microservices',
      description: 'Arquitectura de microservicios con Nest.js, implementando autenticación, autorización y documentación con Swagger.',
      technologies: ['Nest.js', 'TypeScript', 'Docker', 'PostgreSQL', 'Redis'],
      image: '/api/placeholder/400/250',
      githubUrl: 'https://github.com/usuario/api',
      category: 'backend'
    },
    {
      id: 4,
      title: 'Dashboard Analytics',
      description: 'Dashboard interactivo para análisis de datos con gráficos dinámicos y filtros avanzados.',
      technologies: ['React', 'D3.js', 'Chart.js', 'TailwindCSS'],
      image: '/api/placeholder/400/250',
      demoUrl: 'https://analytics.example.com',
      category: 'frontend'
    },
    {
      id: 5,
      title: 'Mobile App React Native',
      description: 'Aplicación móvil multiplataforma para delivery de comida con geolocalización y pagos integrados.',
      technologies: ['React Native', 'Expo', 'Firebase', 'Stripe'],
      image: '/api/placeholder/400/250',
      category: 'mobile'
    },
    {
      id: 6,
      title: 'DevOps CI/CD Pipeline',
      description: 'Pipeline de integración y despliegue continuo con Docker, GitHub Actions y AWS.',
      technologies: ['Docker', 'GitHub Actions', 'AWS', 'Kubernetes'],
      image: '/api/placeholder/400/250',
      githubUrl: 'https://github.com/usuario/devops',
      category: 'devops'
    }
  ];

  const categories = [
    { id: 'all', name: 'Todos', count: projects.length },
    { id: 'frontend', name: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
    { id: 'backend', name: 'Backend', count: projects.filter(p => p.category === 'backend').length },
    { id: 'fullstack', name: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
    { id: 'mobile', name: 'Mobile', count: projects.filter(p => p.category === 'mobile').length },
    { id: 'devops', name: 'DevOps', count: projects.filter(p => p.category === 'devops').length },
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
              Apasionado por la tecnología y la creatividad. Me especializo en desarrollo frontend con React 
              y backend con Node.js/Nest.js, creando experiencias digitales excepcionales.
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
              <span>👨‍💻</span>
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
                modernas y eficientes. Mi experiencia abarca desde el desarrollo frontend con React 
                y TypeScript hasta el backend con Node.js y Nest.js.
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
          
          {/* Category Filter */}
          <div className="project-filters">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      {project.demoUrl && (
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                          Demo
                        </a>
                      )}
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
                proyectos interesantes o simplemente conversar sobre tecnología.
              </p>
              <div className="contact-methods">
                <div className="contact-method">
                  <span className="contact-icon">📧</span>
                  <span>oscar.cardozo@email.com</span>
                </div>
                <div className="contact-method">
                  <span className="contact-icon">📱</span>
                  <span>+57 123 456 7890</span>
                </div>
                <div className="contact-method">
                  <span className="contact-icon">📍</span>
                  <span>Colombia</span>
                </div>
              </div>
              <div className="social-links">
                <a href="https://github.com/OscarCardozoDev" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com/in/oscar-cardozo" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://twitter.com/oscar_cardozo" target="_blank" rel="noopener noreferrer">Twitter</a>
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
