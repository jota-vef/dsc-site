import React from 'react';
import { HandHeart, Search, TrendingUp } from 'lucide-react';

const WhyChooseSection: React.FC = () => {
  const features = [
    {
      icon: HandHeart,
      title: 'Flexibilidad',
      description: 'Nos adaptamos a sus necesidades y forma de trabajar',
      highlight: 'Metodología ágil',
    },
    {
      icon: Search,
      title: 'Transparencia',
      description: 'Comunicación clara y precios sin sorpresas',
      highlight: 'Sin intermediarios',
    },
    {
      icon: HandHeart,
      title: 'Cercanía',
      description: 'Relación directa con el equipo de desarrollo',
      highlight: 'Calidad global',
    },
    {
      icon: TrendingUp,
      title: 'Enfoque en el crecimiento',
      description: 'Soluciones que se adaptan al crecimiento de su negocio',
      highlight: 'Escalabilidad',
    },
  ];

  return (
    <section className="dsc-section bg-gray-50">
      <div className="dsc-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Por qué nos eligen
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Combinamos excelencia técnica con un enfoque humano y transparente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.title}
                className={`dsc-card flex items-start space-x-6 dsc-fade-in dsc-animate-delay-${index + 1}`}
              >
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                      {feature.highlight}
                    </span>
                  </div>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;