import { Mail, Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-[#002f73] to-[#004aad] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src="/logo.png.webp" alt="HenoBuild Logo" className="h-10 w-10 object-contain" />
              <h3 className="text-xl font-bold">HenoBuild</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Innovation, Développement et Cybersécurité en RDC. Transformons vos idées en solutions digitales performantes et sécurisées.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Liens Rapides</h4>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection('home')}
                className="block text-gray-300 hover:text-[#ff4b5c] transition-colors duration-200"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block text-gray-300 hover:text-[#ff4b5c] transition-colors duration-200"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('why-us')}
                className="block text-gray-300 hover:text-[#ff4b5c] transition-colors duration-200"
              >
                Pourquoi nous choisir
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-gray-300 hover:text-[#ff4b5c] transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="tel:+243979241694"
                className="flex items-center space-x-3 text-gray-300 hover:text-[#ff4b5c] transition-colors duration-200"
              >
                <Phone size={20} />
                <span>+243 979 241 694</span>
              </a>
              <a
                href="https://wa.me/243979241694"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-[#25D366] transition-colors duration-200"
              >
                <MessageCircle size={20} />
                <span>WhatsApp</span>
              </a>
              <a
                href="mailto:henockaduma2@gmail.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-[#ff4b5c] transition-colors duration-200"
              >
                <Mail size={20} />
                <span>henockaduma2@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-8 text-center">
          <p className="text-gray-300">
            Copyright &copy; {currentYear} HenoBuild. Tous droits réservés.
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Innovation, Développement et Cybersécurité en RDC
          </p>
        </div>
      </div>
    </footer>
  );
}
