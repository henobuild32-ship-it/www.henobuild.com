export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-[#004aad] via-[#0056c7] to-[#002f73] overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ff4b5c] rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Transformons vos idées en solutions digitales
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            HenoBuild crée des sites web, applications mobiles et desktop avec sécurité optimale et expertise en cybersécurité.
          </p>
          <button
            onClick={scrollToContact}
            className="bg-[#ff4b5c] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#e63946] transform hover:-translate-y-1 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Contactez-nous
          </button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-white animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div>
            <div className="text-3xl font-bold">100+</div>
            <div className="text-gray-200 mt-1">Projets réalisés</div>
          </div>
          <div>
            <div className="text-3xl font-bold">50+</div>
            <div className="text-gray-200 mt-1">Clients satisfaits</div>
          </div>
          <div>
            <div className="text-3xl font-bold">5+</div>
            <div className="text-gray-200 mt-1">Années d'expérience</div>
          </div>
          <div>
            <div className="text-3xl font-bold">24/7</div>
            <div className="text-gray-200 mt-1">Support disponible</div>
          </div>
        </div>
      </div>
    </section>
  );
}
