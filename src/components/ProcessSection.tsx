import React from 'react';
import { Monitor, FileText, Code, Rocket } from 'lucide-react';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      icon: Monitor,
      number: '01',
      title: 'Primera conversación de descubrimiento',
      description: 'Comprender sus necesidades específicas y objetivos de negocio',
    },
    {
      icon: FileText,
      number: '02',
      title: 'Propuesta y planificación',
      description: 'Plazos transparentes y precios sin sorpresas',
    },
    {
      icon: Code,
      number: '03',
      title: 'Desarrollo',
      description: 'Actualizaciones periódicas y comunicación directa durante todo el proceso',
    },
    {
      icon: Rocket,
      number: '04',
      title: 'Lanzamiento y asistencia',
      description: 'Colaboración continua para asegurar el éxito de su proyecto',
    },
  ];

  return (
    <section id="process" className="dsc-section">
      <div className="dsc-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Cómo trabajamos juntos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Un proceso transparente y eficiente diseñado para su tranquilidad
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.number}
                  className={`dsc-card relative dsc-fade-in dsc-animate-delay-${index + 1}`}
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">{step.number}</span>
                  </div>

                  <div className="flex items-start space-x-4 ml-4">
                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-blue-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;