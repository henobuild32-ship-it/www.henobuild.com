import { MapPin, Cpu, ShieldCheck, Headphones } from 'lucide-react';

const reasons = [
  {
    icon: MapPin,
    title: 'Expertise Locale',
    description: 'Une équipe basée en RDC qui comprend les besoins spécifiques du marché local et international.',
  },
  {
    icon: Cpu,
    title: 'Technologie Avancée',
    description: 'Utilisation des dernières technologies et frameworks pour des solutions modernes et performantes.',
  },
  {
    icon: ShieldCheck,
    title: 'Sécurité Garantie',
    description: 'Protection optimale de vos données avec notre expertise en cybersécurité et audit de sécurité.',
  },
  {
    icon: Headphones,
    title: 'Support Réactif',
    description: 'Assistance technique disponible 24/7 et accompagnement continu pour tous vos projets.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#004aad] mb-4">Pourquoi nous choisir</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des raisons concrètes de nous faire confiance pour vos projets digitaux
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:bg-[#f3f5f8] transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#ff4b5c] to-[#e63946] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Icon className="text-white" size={36} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
