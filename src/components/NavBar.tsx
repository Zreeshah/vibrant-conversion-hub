
import React from 'react';
import { Link } from 'react-router-dom';
import MenuButton from './MenuButton';
import OptimizedImage from './OptimizedImage';

const NavBar = () => {
  return (
    <nav className="bg-blue-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <OptimizedImage 
                src="/lovable-uploads/2fd0f4b8-0f3e-4825-b93e-586b6602da69.png" 
                alt="Pulgadas a CM Logo" 
                className="h-10 w-auto sm:h-12"
                width={48}
                height={48}
                priority={true}
              />
            </Link>
          </div>
          <div className="flex items-center">
            <MenuButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
