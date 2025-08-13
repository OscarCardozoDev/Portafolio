import React from "react";

const Home: React.FC = () => {

  const portfolioItems = [
    {
      id: 1,
      title: "MOTOCICLETAS",
      description: "Creamos valor desarrollando y regularmente renovando estrategias en la venta de vehículos de dos ruedas.",
      category: "Automotive",
      image: "/api/placeholder/300/200",
      color: "from-blue-900 to-blue-800"
    },
    {
      id: 2,
      title: "MUSICAL",
      description: "Compartimos tu pasión, creatividad y performance musical de alto nivel.",
      category: "Entertainment",
      image: "/api/placeholder/300/200",
      color: "from-purple-900 to-purple-800"
    },
    {
      id: 3,
      title: "YAMAHA SERVICIOS FINANCIEROS",
      description: "Cuenta en quien confiar para hacer realidad tus planes de tener una Yamaha ahora en Colombia.",
      category: "Financial Services",
      image: "/api/placeholder/300/200",
      color: "from-red-900 to-red-800"
    },
    {
      id: 4,
      title: "BICICLETAS YAMAHA",
      description: "Venimos las mejores como marca japonesa y mantenemos de liderazgo brindando experiencias integrales que respondan a nuestros clientes.",
      category: "Bicycles",
      image: "/api/placeholder/300/200",
      color: "from-gray-900 to-gray-800"
    }
  ];

  return (
    <div style={{"overflowX": "hidden"}} className="min-h-screen min-w-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">

      {/* Main Content */}
      <main className="container mx-auto py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Mis Proyectos
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Explora una selección de mis trabajos más destacados en diferentes industrias y tecnologías.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="flex justify-center items-center">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl"
            >
              {/* Background with gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-90`}></div>
              
              {/* Dotted pattern overlay */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }}
              ></div>

              {/* Content */}
              <div className="relative z-10 p-8 h-80 flex flex-col justify-between">
                {/* Category tag */}
                <div className="inline-block">
                  <span className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-white text-sm font-medium">
                    {item.category}
                  </span>
                </div>

                {/* Main content */}
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-white text-opacity-90 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Action button */}
                <div className="flex justify-center">
                  <button className="group-hover:bg-white group-hover:text-gray-900 border-2 border-white text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform group-hover:scale-105">
                    ENTRAR
                  </button>
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Listo para colaborar?
          </h2>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">
            Si tienes un proyecto en mente o quieres saber más sobre mi trabajo, no dudes en contactarme.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            Contáctame
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 mt-20 border-t border-blue-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-blue-200 mb-4 md:mb-0">
            © 2025 Mi Portafolio. Todos los derechos reservados.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-blue-200 hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors">
              GitHub
            </a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;