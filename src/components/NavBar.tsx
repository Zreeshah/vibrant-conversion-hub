
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  
  return (
    <nav className="bg-gradient-to-r from-primary to-secondary shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-16">
          <div className="flex space-x-8">
            <Link
              to="/"
              className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium h-full ${
                location.pathname === '/' 
                  ? 'border-white text-white' 
                  : 'border-transparent text-white/80 hover:text-white hover:border-white/50'
              }`}
            >
              Pulgadas a CM / CM a Pulgadas
            </Link>
            <Link
              to="/pulgadas-a-mm"
              className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium h-full ${
                location.pathname === '/pulgadas-a-mm' 
                  ? 'border-white text-white' 
                  : 'border-transparent text-white/80 hover:text-white hover:border-white/50'
              }`}
            >
              Pulgadas a MM
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
