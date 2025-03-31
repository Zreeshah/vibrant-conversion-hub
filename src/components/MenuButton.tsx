
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className="flex items-center justify-center p-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
        aria-label="Menu"
      >
        <span className="mr-1">Menu</span>
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-56 bg-white rounded-md shadow-lg z-50">
          <div className="py-1">
            <h3 className="px-4 py-2 text-sm font-semibold text-gray-700 border-b">Herramientas</h3>
            <Link
              to="/"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Pulgadas a CM / CM a Pulgadas
            </Link>
            <Link
              to="/pulgadas-a-mm"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Pulgadas a MM
            </Link>
            <Link
              to="/centimetros-a-pulgadas"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Centímetros a Pulgadas
            </Link>
          </div>
          <div className="py-1 border-t">
            <h3 className="px-4 py-2 text-sm font-semibold text-gray-700 border-b">Información</h3>
            <Link
              to="/contacto"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Contacto
            </Link>
            <Link
              to="/aviso-legal"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Aviso Legal
            </Link>
            <Link
              to="/politica-de-privacidad"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              Política de Privacidad
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuButton;
