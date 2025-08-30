import React from 'react';
import { Code, ShoppingCart, Layers, Wrench } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Desarrollo web personalizado',
      description: 'Soluciones a medida para las necesidades específicas de su negocio.',
    },
    {
      icon: ShoppingCart,
      title: 'Plataformas de comercio electrónico',
      description: 'Tiendas online escalables que convierten visitantes en clientes.',
    },
    {
      icon: Layers,
      title: 'Aplicaciones web',
      description: 'Funcionalidades complejas con experiencias de usuario sencillas.',
    },
    {
      icon: Wrench,
      title: 'Mantenimiento y soporte',
      description: 'Colaboración continua para el crecimiento de su plataforma.',
    },
  ];

  return (
    <section id="services" className="dsc-section">
      <div className="dsc-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Lo que creamos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Desarrollamos soluciones tecnológicas que impulsan el crecimiento de su negocio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.title}
                className={`dsc-card text-center dsc-fade-in dsc-animate-delay-${index + 1}`}
              >
                <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;