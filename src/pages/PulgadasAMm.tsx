
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ConversorCalculator from '@/components/ConversorCalculator';
import ConversionTable from '@/components/ConversionTable';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const PulgadasAMm = () => {
  // 1 inch = 25.4 mm
  const inchToMmFactor = 25.4;
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Helmet>
        <title>Conversor de Pulgadas a Milímetros</title>
        <meta name="description" content="Convierte fácilmente pulgadas a milímetros con nuestra calculadora gratuita." />
        <link rel="canonical" href="https://pulgadas-a-cm.net/pulgadas-a-mm" />
      </Helmet>
      <NavBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-2">
            Conversor de Pulgadas a Milímetros
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Convierte fácilmente pulgadas a milímetros con nuestra calculadora gratuita.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-center">Pulgadas a Milímetros</h2>
            <ConversorCalculator 
              fromUnit="Pulgadas" 
              toUnit="Milímetros" 
              conversionFactor={inchToMmFactor} 
              placeholder="Ingresa pulgadas"
            />
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4 text-center">Milímetros a Pulgadas</h2>
            <ConversorCalculator 
              fromUnit="Milímetros" 
              toUnit="Pulgadas" 
              conversionFactor={1/inchToMmFactor} 
              placeholder="Ingresa milímetros"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6" id="como-convertir-mm">¿Cómo convertir pulgadas a mm?</h2>
          <p className="text-gray-700 mb-4">
            Convertir pulgadas a milímetros es un proceso sencillo: multiplica el valor en pulgadas por 25.4 para obtener el equivalente en milímetros. Esta conversión se basa en la definición estándar de que 1 pulgada equivale exactamente a 25.4 milímetros.
          </p>
          <p className="text-gray-700 mb-4">
            Por ejemplo, para convertir 3 pulgadas a milímetros:
          </p>
          <p className="text-gray-700 mb-4 font-semibold">
            3 pulgadas × 25.4 = 76.2 milímetros
          </p>
          <p className="text-gray-700">
            Nuestra calculadora hace este cálculo automáticamente: sólo ingresa el valor en pulgadas y obtendrás instantáneamente su equivalente en milímetros.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6" id="tabla-conversion-mm">Tabla de conversión de pulgadas a milímetros</h2>
          <ConversionTable 
            fromUnit="Pulgada" 
            toUnit="Milímetro" 
            conversionFactor={inchToMmFactor} 
            maxRows={10}
          />
        </div>

        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6" id="cuantos-mm">¿Cuántos mm tiene una pulgada?</h2>
          <p className="text-gray-700 mb-4">
            <strong>1 pulgada equivale exactamente a 25.4 milímetros.</strong> Esta es una conversión estándar reconocida internacionalmente.
          </p>
          <p className="text-gray-700 mb-4">
            El milímetro (símbolo: mm) es una unidad de longitud en el sistema métrico, mientras que la pulgada (símbolo: in) pertenece al sistema imperial utilizado principalmente en países como Estados Unidos y Reino Unido.
          </p>
          <p className="text-gray-700">
            Esta equivalencia precisa (1 in = 25.4 mm) es fundamental para realizar conversiones exactas entre el sistema métrico y el sistema imperial.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6" id="tabla-conversion-inversa">Tabla de conversión de milímetros a pulgadas</h2>
          <ConversionTable 
            fromUnit="Milímetro" 
            toUnit="Pulgada" 
            conversionFactor={inchToMmFactor} 
            maxRows={10}
            reverse={true}
          />
        </div>

        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6" id="convertir-facil">Convertir pulgadas a milímetros fácilmente</h2>
          <p className="text-gray-700 mb-4">
            La conversión de pulgadas a milímetros es especialmente útil en áreas como la ingeniería, carpintería, manufactura y diseño, donde a menudo se trabaja con medidas precisas entre diferentes sistemas de unidades.
          </p>
          <p className="text-gray-700 mb-4">
            Para convertir cualquier medida en pulgadas a milímetros, usa la siguiente fórmula:
          </p>
          <p className="text-gray-700 mb-4 font-semibold">
            Milímetros = Pulgadas × 25.4
          </p>
          <p className="text-gray-700 mb-4">
            Ejemplos prácticos:
          </p>
          <ul className="list-disc pl-5 text-gray-700 mb-4">
            <li className="mb-2">1/4 pulgada = 0.25 × 25.4 = 6.35 mm</li>
            <li className="mb-2">1/2 pulgada = 0.5 × 25.4 = 12.7 mm</li>
            <li className="mb-2">3/4 pulgada = 0.75 × 25.4 = 19.05 mm</li>
            <li>1 pulgada = 1 × 25.4 = 25.4 mm</li>
          </ul>
          <p className="text-gray-700">
            Nuestra calculadora elimina la necesidad de hacer estos cálculos manualmente, proporcionando resultados precisos instantáneos.
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PulgadasAMm;
