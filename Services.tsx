import { Globe, Smartphone, Monitor, Shield } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Développement Web',
    description: 'Création de sites web responsives pour entreprises et particuliers. Sites vitrines, e-commerce, plateformes interactives avec optimisation SEO, performance et sécurité.',
  },
  {
    icon: Smartphone,
    title: 'Applications Mobiles',
    description: 'Développement d\'applications Android et iOS avec UX/UI optimisée. Intégration de fonctionnalités avancées : paiement, notifications, géolocalisation.',
  },
  {
    icon: Monitor,
    title: 'Applications Desktop',
    description: 'Développement pour Windows, Mac et Linux. Logiciels métiers, outils de gestion, applications spécialisées avec interface intuitive et sécurisée.',
  },
  {
    icon: Shield,
    title: 'Cybersécurité',
    description: 'Audit de sécurité et protection des données. Analyse des vulnérabilités, mise en place de systèmes de sécurité et formation à la sécurité informatique.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#f3f5f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#004aad] mb-4">Nos Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des solutions complètes pour tous vos besoins digitaux
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#004aad] to-[#0056c7] rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
