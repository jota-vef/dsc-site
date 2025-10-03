import React, { useState } from 'react';
import { Send, Mail, Clock, Linkedin, Instagram } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    timeline: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        project: '',
        timeline: '',
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="dsc-section dsc-gradient-bg">
        <div className="dsc-container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="dsc-card">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                ¡Mensaje enviado con éxito!
              </h2>
              <p className="text-gray-600">
                Gracias por contactarnos. Normalmente respondemos en un plazo de 24 horas.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="dsc-section dsc-gradient-bg">
      <div className="dsc-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              ¿Listo para comenzar su proyecto?
            </h2>
            <p className="text-lg text-gray-600">
              Cuéntenos sobre su idea y creemos algo increíble juntos
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="dsc-card">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Su nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="correo@empresa.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Nombre de su empresa"
                  />
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">
                    Descripción del proyecto *
                  </label>
                  <textarea
                    id="project"
                    name="project"
                    required
                    rows={4}
                    value={formData.project}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Cuéntenos sobre su proyecto, objetivos y cualquier requisito específico..."
                  />
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferencia de contacto
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Seleccione una preferencia</option>
                    <option value="email">Correo electrónico</option>
                    <option value="call">Llamada telefónica</option>
                    <option value="video">Videollamada</option>
                    <option value="any">Cualquier método</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full dsc-btn-primary text-lg py-4 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Enviar mensaje</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="dsc-card">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Correo electrónico
                    </h3>
                    <p className="text-gray-600 mb-1">adm.digitalsolutionscompany@gmail.com</p>
                    <p className="text-sm text-gray-500">
                      Normalmente respondemos en un plazo de 24 horas
                    </p>
                  </div>
                </div>
              </div>

              <div className="dsc-card">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Horarios de respuesta
                    </h3>
                    <p className="text-gray-600 mb-1">Lunes a Viernes</p>
                    <p className="text-sm text-gray-500">
                      9:00 AM - 6:00 PM (GMT-3)
                    </p>
                  </div>
                </div>
              </div>

              <div className="dsc-card">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Síguenos en redes sociales
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6 text-blue-500" />
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6 text-blue-500" />
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center w-12 h-12 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                    aria-label="TikTok"
                  >
                    <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;