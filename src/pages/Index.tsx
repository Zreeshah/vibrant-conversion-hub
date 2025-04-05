import React from 'react';
import { Helmet } from 'react-helmet-async';
import ConversorCalculator from '@/components/ConversorCalculator';
import ConversionTable from '@/components/ConversionTable';
import ComprehensiveConversionTable from '@/components/ComprehensiveConversionTable';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const Index = () => {
  // 1 inch = 2.54 cm
  const inchToCmFactor = 2.54;
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Helmet>
        <title>Conversor de Pulgadas a Centímetros - Calculadora Online</title>
        <meta name="description" content="Convierte pulgadas a cm fácilmente con nuestra calculadora online gratuita. Conversiones precisas e instantáneas para todos tus proyectos." />
        <link rel="canonical" href="https://pulgadas-a-cm.net/" />
      </Helmet>
      
      <NavBar />
      
      {/* Main content */}
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-blue-500 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">
              Convierte Pulgadas a Centímetros Fácilmente
            </h1>
            <p className="mt-4 text-xl sm:text-2xl max-w-2xl mx-auto">
              Nuestra calculadora online te permite convertir pulgadas a centímetros de forma rápida y precisa. ¡Ideal para tus proyectos y cálculos diarios!
            </p>
            <div className="mt-8 flex justify-center">
              <a href="#calculadoras" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 sm:px-8">
                Comienza a Convertir
              </a>
            </div>
          </div>
        </section>

        {/* Calculators section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Calculadoras de Conversión
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
                Herramientas precisas para convertir entre pulgadas y centímetros al instante.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
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
            </div>
          </div>
        </section>

        {/* Content sections */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                ¿Por qué usar nuestra calculadora?
              </h2>
              <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
                Nuestra calculadora de pulgadas a centímetros ofrece precisión, rapidez y facilidad de uso. Ya sea para proyectos de bricolaje, diseño o educación, te proporcionamos las herramientas necesarias para realizar conversiones exactas.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Precisión garantizada</h3>
                <p className="text-gray-600">
                  Utilizamos la fórmula estándar para asegurar que cada conversión sea lo más precisa posible.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fácil de usar</h3>
                <p className="text-gray-600">
                  Nuestra interfaz intuitiva permite realizar conversiones con solo unos pocos clics, sin necesidad de conocimientos técnicos.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Resultados instantáneos</h3>
                <p className="text-gray-600">
                  Obtén tus conversiones al instante, ahorrando tiempo y esfuerzo en tus tareas diarias.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive table */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Tabla de Conversión Completa
              </h2>
              <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
                Encuentra rápidamente la conversión que necesitas en nuestra tabla detallada de pulgadas a centímetros.
              </p>
            </div>
            <ComprehensiveConversionTable conversionFactor={inchToCmFactor} />
          </div>
        </section>
        
        {/* FAQ section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Preguntas Frecuentes
              </h2>
              <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
                Resolvemos tus dudas más comunes sobre la conversión de pulgadas a centímetros.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">¿Cómo convierto pulgadas a centímetros?</h3>
                <p className="text-gray-600">
                  Multiplica el número de pulgadas por 2.54 para obtener el equivalente en centímetros.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">¿Es precisa la calculadora?</h3>
                <p className="text-gray-600">
                  Sí, nuestra calculadora utiliza la fórmula estándar y proporciona resultados precisos.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
