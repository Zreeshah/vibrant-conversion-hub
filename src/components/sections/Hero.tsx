
import React from 'react';

const Hero = () => {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
          Convierte Pulgadas a Centímetros Fácilmente
        </h1>
        <p className="mt-4 text-xl sm:text-2xl max-w-2xl mx-auto font-medium">
          Nuestra calculadora online te permite convertir pulgadas a centímetros de forma rápida y precisa. ¡Ideal para tus proyectos y cálculos diarios!
        </p>
        <div className="mt-8 flex justify-center">
          <a href="#calculadoras" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 sm:px-8">
            Comienza a Convertir
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
