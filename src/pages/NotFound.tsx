import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: Usuario intentó acceder a una ruta inexistente:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Helmet>
        <title>Página no encontrada - Pulgadas a CM</title>
        <meta name="description" content="Lo sentimos, la página que buscas no existe. Vuelve a nuestra calculadora de conversión de unidades para convertir pulgadas a centímetros." />
        <meta name="robots" content="noindex" />
        {/* No canonical on 404 pages */}
      </Helmet>
      <NavBar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-4">¡Ups! Página no encontrada</p>
          <Link to="/" className="text-blue-500 hover:text-blue-700 underline">
            Volver a Inicio
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
