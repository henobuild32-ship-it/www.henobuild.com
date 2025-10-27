import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
            <img src="/logo.png.webp" alt="HenoBuild Logo" className="h-12 w-12 object-contain" />
            <div>
              <h1 className="text-2xl font-bold text-[#004aad]">HenoBuild</h1>
              <p className="text-xs text-gray-600 hidden sm:block">Innovation, Développement et Cybersécurité en RDC</p>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-[#ff4b5c] transition-colors duration-200 font-medium"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-[#ff4b5c] transition-colors duration-200 font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('why-us')}
              className="text-gray-700 hover:text-[#ff4b5c] transition-colors duration-200 font-medium"
            >
              Pourquoi nous choisir
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-[#ff4b5c] transition-colors duration-200 font-medium"
            >
              Contact
            </button>
          </nav>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col space-y-4 px-4 py-6">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-[#ff4b5c] transition-colors duration-200 font-medium text-left"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-[#ff4b5c] transition-colors duration-200 font-medium text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('why-us')}
              className="text-gray-700 hover:text-[#ff4b5c] transition-colors duration-200 font-medium text-left"
            >
              Pourquoi nous choisir
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-[#ff4b5c] transition-colors duration-200 font-medium text-left"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
