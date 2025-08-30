import React from 'react';
import { Heart, Shield, Lightbulb, Award } from 'lucide-react';

const AboutSection: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Flexibilidad',
      description: 'Nos adaptamos a sus necesidades y forma de trabajar',
    },
    {
      icon: Shield,
      title: 'Transparencia',
      description: 'Comunicación clara y precios sin sorpresas',
    },
    {
      icon: Lightbulb,
      title: 'Cercanía',
      description: 'Relación directa con el equipo de desarrollo',
    },
    {
      icon: Award,
      title: 'Excelencia',
      description: 'Estándares técnicos de nivel internacional',
    },
  ];

  return (
    <section id="about" className="dsc-section bg-gray-50">
      <div className="dsc-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
              Conozca al equipo
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Tres fundadores con una visión compartida: hacer que el desarrollo web sea 
              accesible, transparente y orientado a los resultados para las empresas en crecimiento.
            </p>
            <p className="text-gray-600 mb-8">
              Desde Buenos Aires, combinamos la ventaja competitiva del mercado argentino 
              con estándares internacionales para ofrecer soluciones que realmente 
              impulsan el crecimiento de nuestros clientes.
            </p>
          </div>

          {/* Right Column - Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={value.title}
                  className={`dsc-card text-center dsc-fade-in dsc-animate-delay-${index + 1}`}
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;