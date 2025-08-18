import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home: React.FC = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "MUSICAL",
      description: "Compartimos tu pasión, creatividad y performance musical de alto nivel.",
      category: "Entertainment",
      image: "/api/placeholder/300/200",
      color: "purple"
    },
    {
      id: 2,
      title: "OSCAR CARDOZO",
      description: "Un apasionado por la tecnología y la creatividad. Me enfoco en el frontend, especializado en React y Nest.js.",
      category: "Creativo",
      route: "oscar",
      image: "src/assets/home/Oscar.jpg",
      color: "blue"
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
      title: "BICICLETAS YAMAHA",
      description: "Venimos las mejores como marca japonesa y mantenemos de liderazgo brindando experiencias integrales que respondan a nuestros clientes.",
      category: "Bicycles",
      image: "/api/placeholder/300/200",
      color: "gray"
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
                className="card-image"
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
                <button className="enter-button">
                  <Link to={`/${item.route}`}>
                    ENTRAR
                  </Link>
                </button>
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