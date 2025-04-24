
import React, { Suspense, lazy } from 'react';

const ConversorCalculator = lazy(() => import('@/components/ConversorCalculator'));

const CalculatorsSection = () => {
  // 1 inch = 2.54 cm
  const inchToCmFactor = 2.54;

  return (
    <section id="calculadoras" className="py-12 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-blue-600 sm:text-4xl">
            Calculadoras de Conversión
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Herramientas precisas para convertir entre pulgadas y centímetros al instante.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Suspense fallback={<div className="h-60 bg-gray-100 rounded-md animate-pulse"></div>}>
            <div>
              <h2 className="text-xl font-semibold mb-4 text-center">Pulgadas a Centímetros</h2>
              <ConversorCalculator 
                fromUnit="Pulgadas" 
                toUnit="Centímetros" 
                conversionFactor={inchToCmFactor} 
                placeholder="Ingresa pulgadas"
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4 text-center">Centímetros a Pulgadas</h2>
              <ConversorCalculator 
                fromUnit="Centímetros" 
                toUnit="Pulgadas" 
                conversionFactor={1/inchToCmFactor} 
                placeholder="Ingresa centímetros"
              />
            </div>
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default CalculatorsSection;
