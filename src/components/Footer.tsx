
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Conversores</h3>
            <ul className="space-y-2">
              <li><Link to="/pulgadas-a-mm" className="text-blue-100 hover:text-white transition-colors">Pulgadas a MM</Link></li>
              <li><Link to="/centimetros-a-pulgadas" className="text-blue-100 hover:text-white transition-colors">Centímetros a Pulgadas</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Información</h3>
            <ul className="space-y-2">
              <li><Link to="/contacto" className="text-blue-100 hover:text-white transition-colors">Contacto</Link></li>
              <li><Link to="/politica-de-privacidad" className="text-blue-100 hover:text-white transition-colors">Política de Privacidad</Link></li>
              <li><Link to="/aviso-legal" className="text-blue-100 hover:text-white transition-colors">Aviso Legal</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Acerca de</h3>
            <p className="text-blue-100 mb-4">
              Herramienta gratuita para convertir entre pulgadas y centímetros. 
              Conversión precisa y fácil de usar con tablas de referencia.
            </p>
          </div>
        </div>
        
        <div className="border-t border-blue-700 mt-8 pt-6 text-center text-blue-200">
          <p>© {currentYear} Conversor Pulgadas a CM. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
