import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="dsc-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/logo-ithertech.svg" 
                alt="Ithertech Logo" 
                className="w-8 h-8"
              />
              <span className="text-xl font-bold">Ithertech</span>
            </div>
            <p className="text-gray-300 mb-4">
              Ithertech - Desarrollo web personalizado para startups y pymes.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Buenos Aires, Argentina</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-gray-300">
                <Mail className="w-4 h-4" />
                <span>adm.digitalsolutionscompany@gmail.com</span>
              </div>
              <p className="text-sm text-gray-400">
                Respuesta en 24 horas o menos
              </p>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Ithertech. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;