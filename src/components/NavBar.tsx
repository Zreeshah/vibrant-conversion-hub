
import React from 'react';
import { Link } from 'react-router-dom';
import MenuButton from './MenuButton';

const NavBar = () => {
  return (
    <nav className="bg-gradient-to-r from-primary to-secondary shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/0e133287-abe7-4fe8-bc77-9f7dbc1978ad.png" 
                alt="Pulgadas a CM Logo" 
                className="h-8 w-auto sm:h-10 mr-2"
              />
              <span className="text-xl font-bold text-white hidden sm:inline">Pulgadas a CM</span>
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
