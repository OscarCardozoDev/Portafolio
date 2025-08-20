import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import OscarImage from "../assets/home/Oscar.jpg";
import mifoto from "./../assets/home/mifoto.png";
import elianaFoto from "../../assets/home/eliana.png";

const Home: React.FC = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "PABLO AGUILAR",
      description: "Especialzado en machine learning, el tratamiento de datos y el entrenamiento de inteligencias artificiales especializadas",
      category: "Machine Learning",
      image: mifoto,
      color: "gray",
      path: "/PabloPage"
    },
    {
      id: 2,
      title: "OSCAR CARDOZO",
      description: "Un apasionado por la tecnología y la creatividad. Me enfoco en el frontend, especializado en React y Nest.js.",
      category: "Creativo",
      image: OscarImage,
      color: "blue",
      path: "/OscarPage"
    },
    {
      id: 3,
      title: "YAMAHA SERVICIOS FINANCIEROS",
      description: "Cuenta en quien confiar para hacer realidad tus planes de tener una Yamaha ahora en Colombia.",
      category: "Financial Services",
      image: "/api/placeholder/300/200",
      color: "red"
    },
    {
      id: 4,
      title: "ELIANA REYES",
      description: "Estudiante de Ingeniería de Sistemas apasionada por la gestión de proyectos y el desarrollo de soluciones tecnológicas innovadoras.",
      category: "Project Management",
      image: elianaFoto,
      color: "purple",
      path: "/ElianaPage"
    }
  ];

  return (
    <div className="home-container">
      {/* Portfolio Grid - 4 sections horizontally */}
      <main className="portfolio-grid">
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            className={`portfolio-card ${item.color}`}
          >
            {/* Image Backgorund */}
            <div className="image-container">
              <img
                src={item.image}
                alt={item.title}
                className={`card-image ${item.id === 1 ? 'circular' : ''}`}
              />
            </div>


            {/* Dotted pattern overlay */}
            <div className="dotted-overlay"></div>

            {/* Content */}
            <div className="card-content">
              {/* Category tag */}
              <div className="category-container">
                <span className="category-tag">
                  {item.category}
                </span>
              </div>

              {/* Main content */}
              <div className="main-content">
                <h3 className="card-title">
                  {item.title}
                </h3>
                <p className="card-description">
                  {item.description}
                </p>
              </div>

              {/* Action button */}
              <div className="button-container">
                  <Link to={`${item.path}`} className="enter-button">
                    ENTRAR
                  </Link>
                )
              </div>
            </div>

            {/* Hover effect overlay */}
            <div className="hover-overlay"></div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Home;