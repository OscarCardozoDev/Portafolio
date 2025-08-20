import React from 'react';
import './portfolioEliana.css';

const ElianaPortfolio: React.FC = () => {
  return (
    <div className="portfolio-container">
      <header className="header">
        <div className="profile-section">
          <div className="profile-image">
            <img 
              src="/src/assets/home/foto_eliana.png" 
              alt="Eliana Yesmid Reyes Cardenas" 
              className="profile-photo"
            />
          </div>
          <div className="profile-info">
            <h1 className="name">Eliana Yesmid Reyes Cardenas</h1>
            <h2 className="title">Ingeniera de Sistemas</h2>
            <p className="location">📍 Tunja, Boyacá, Colombia</p>
          </div>
        </div>
        
        <div className="back-button">
          <button onClick={() => window.location.href = '/'} className="back-btn">
            ← Volver al inicio
          </button>
        </div>
      </header>

      <section className="section about-section">
        <h3 className="section-title">Presentación</h3>
        <div className="about-content">
          <p>
            Estudiante de Ingeniería de Sistemas con enfoque en gestión de proyectos y análisis de 
            requerimientos, con formación en metodologías ágiles (Scrum/Kanban). Destaco por mi 
            capacidad analítica y comprensión del ciclo de vida de proyectos, utilizando herramientas 
            colaborativas como Jira.
            Experiencia en levantamiento y documentación de requerimientos, con habilidades de 
            comunicación efectiva. Complemento mis conocimientos en desarrollo web y bases de datos 
            que fortalecen mi comprensión de proyectos tecnológicos.
          </p>      
        </div>
      </section>

      {/* 3. Habilidades */}
      <section className="section skills-section">
        <h3 className="section-title">Habilidades</h3>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Lenguajes</h4>
            <div className="skills-list">
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">TypeScript</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h4>Frontend</h4>
            <div className="skills-list">
              <span className="skill-tag">React</span>
              <span className="skill-tag">React Native</span>
              <span className="skill-tag">HTML5</span>
              <span className="skill-tag">CSS3</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h4>Backend y Bases de Datos</h4>
            <div className="skills-list">
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">MySQL</span>
              <span className="skill-tag">PostgreSQL</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h4>Gestión de Proyectos</h4>
            <div className="skills-list">
              <span className="skill-tag">Scrum</span>
              <span className="skill-tag">Kanban</span>
              <span className="skill-tag">Jira</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h4>Herramientas</h4>
            <div className="skills-list">
              <span className="skill-tag">Visual Studio Code</span>
              <span className="skill-tag">IntelliJ IDEA</span>
              <span className="skill-tag">WordPress</span>
              <span className="skill-tag">Elementor</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h4>Habilidades Blandas</h4>
            <div className="skills-list">
              <span className="skill-tag">Trabajo en equipo</span>
              <span className="skill-tag">Comunicación efectiva</span>
              <span className="skill-tag">Resolución de problemas</span>
              <span className="skill-tag">Proactividad</span>
              <span className="skill-tag">Manejo del tiempo</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Proyectos */}
      <section className="section projects-section">
        <h3 className="section-title">Proyectos</h3>
        <div className="projects-grid">

        <div className="project-card">
            <div className="project-image">
              <div className="project-placeholder">💼</div>
            </div>
            <div className="project-content">
              <h4>Proyectos de Práctica - Universidad Santo Tomás</h4>
              <p>
                Implementación de mesa de ayuda con Help Desk para Planta Física. 
                Desarrollo de micrositio de laboratorios Santoto Services con 
                WordPress, Elementor y diseño responsive.
              </p>
              <div className="project-tech">
                <span className="tech-tag">WordPress</span>
                <span className="tech-tag">Elementor</span>
                <span className="tech-tag">Help Desk</span>
                <span className="tech-tag">Responsive</span>
              </div>
            </div>
          </div>

        <div className="project-card">
            <div className="project-image">
              <div className="project-placeholder">📱</div>
            </div>
            <div className="project-content">
              <h4>Sistema de Votación Representantes Estudiantiles</h4>
              <p>
                App móvil para votaciones estudiantiles en la Universidad Santo Tomás. 
                Sistema multi-rol con estadísticas en tiempo real y gestión completa 
                del proceso electoral estudiantil.
              </p>
              <div className="project-tech">
                <span className="tech-tag">React Native</span>
                <span className="tech-tag">Multi-rol</span>
                <span className="tech-tag">2025</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <div className="project-placeholder">🔒</div>
            </div>
            <div className="project-content">
              <h4>Sistema de Seguridad de la Información - Alcaldía de Tunja</h4>
              <p>
                Sistema web con API RESTful para gestión de usuarios y roles. 
                Implementación de metodologías ágiles Scrum y Kanban para 
                optimizar el desarrollo y garantizar la seguridad.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">MySQL</span>
                <span className="tech-tag">API RESTful</span>
                <span className="tech-tag">Jira</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <div className="project-placeholder">🎓</div>
            </div>
            <div className="project-content">
              <h4>App de Tutorías Especializadas</h4>
              <p>
                Arquitectura de sistema para gestión eficiente de roles y permisos 
                en plataforma educativa. Diseñada para docentes, estudiantes y 
                administradores con interfaz intuitiva.
              </p>
              <div className="project-tech">
                <span className="tech-tag">React.js</span>
                <span className="tech-tag">MUI Components</span>
                <span className="tech-tag">VS Code</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <div className="project-placeholder">📊</div>
            </div>
            <div className="project-content">
              <h4>Análisis de Eficiencia en Preparación de Pedidos</h4>
              <p>
                Simulación en Python para modelar y analizar la productividad 
                del personal en diferentes momentos del día laboral, optimizando 
                la eficiencia operativa mediante datos.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Google Colab</span>
                <span className="tech-tag">Simulación</span>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <div className="project-placeholder">🏥</div>
            </div>
            <div className="project-content">
              <h4>Sitio Web para Servicios de Clínicas Veterinarias</h4>
              <p>
                Sistema integral para clínicas veterinarias con módulos de 
                agendamiento, historias clínicas, resultados de exámenes y 
                seguimiento de tratamientos post-procedimiento.
              </p>
              <div className="project-tech">
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">CSS</span>
                <span className="tech-tag">PostgreSQL</span>
                <span className="tech-tag">IntelliJ IDEA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contacto */}
      <section className="section contact-section">
        <h3 className="section-title">Contacto</h3>
        <div className="contact-content">
          
          <div className="contact-grid">
            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div className="contact-info">
                <h4>Email</h4>
                <a href="mail:eliana.reyesc@usantoto.edu.co">eliana.reyesc@usantoto.edu.co</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <div className="contact-info">
                <h4>Teléfono</h4>
                <a href="tel:+573227064954">+57 322-706-4954</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">💼</div>
              <div className="contact-info">
                <h4>LinkedIn</h4>
                <a href="https://www.linkedin.com/in/eliana-yesmid-reyes-cardenas-68010b37b/s" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/eliana-reyes
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">🐙</div>
              <div className="contact-info">
                <h4>GitHub</h4>
                <a href="https://github.com/Eliana-27" target="_blank" rel="noopener noreferrer">
                  github.com/Eliana-27
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ElianaPortfolio;