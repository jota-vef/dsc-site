import React from 'react';
import { Award } from 'lucide-react';

const AboutSection: React.FC = () => {
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

          {/* Right Column - Excellence Card */}
          <div className="flex justify-center">
            <div className="dsc-card text-center max-w-sm dsc-fade-in">
              <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Excelencia
              </h3>
              <p className="text-gray-600">
                Estándares técnicos de nivel internacional
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;