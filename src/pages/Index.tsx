
import React from 'react';
import ConversorCalculator from '@/components/ConversorCalculator';
import ConversionTable from '@/components/ConversionTable';
import NavBar from '@/components/NavBar';

const Index = () => {
  // 1 inch = 2.54 cm
  const inchToCmFactor = 2.54;
  
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-2">
            Conversor de Pulgadas a Centímetros
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Convierte fácilmente entre pulgadas y centímetros con nuestras calculadoras gratuitas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
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
              fromUnit="Pulgadas" 
              toUnit="Centímetros" 
              conversionFactor={inchToCmFactor} 
              reverse={true}
              placeholder="Ingresa centímetros"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6" id="como-convertir">¿Cómo convertir pulgadas a cm?</h2>
          <p className="text-gray-700 mb-4">
            Convertir pulgadas a centímetros es muy sencillo: sólo multiplica el valor en pulgadas por 2.54 para obtener el equivalente en centímetros. Esta conversión se basa en la definición estándar de que 1 pulgada equivale exactamente a 2.54 centímetros.
          </p>
          <p className="text-gray-700 mb-4">
            Por ejemplo, para convertir 5 pulgadas a centímetros:
          </p>
          <p className="text-gray-700 mb-4 font-semibold">
            5 pulgadas × 2.54 = 12.7 centímetros
          </p>
          <p className="text-gray-700">
            Nuestra calculadora hace este cálculo automáticamente: sólo ingresa el valor en pulgadas y obtendrás al instante su equivalente en centímetros.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6" id="tabla-conversion">Tabla de conversión de pulgadas a centímetros</h2>
          <ConversionTable 
            fromUnit="Pulgada" 
            toUnit="Centímetro" 
            conversionFactor={inchToCmFactor} 
            maxRows={10}
          />
        </div>

        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6" id="cuantos-cm">¿Cuántos cm tiene una pulgada?</h2>
          <p className="text-gray-700 mb-4">
            <strong>1 pulgada equivale exactamente a 2.54 centímetros.</strong> Esta es una conversión estándar reconocida internacionalmente.
          </p>
          <p className="text-gray-700 mb-4">
            La pulgada (símbolo: in) es una unidad de longitud del sistema imperial que se utiliza principalmente en Estados Unidos, Reino Unido y Canadá. El centímetro (símbolo: cm) pertenece al sistema métrico y es utilizado en la mayoría de los países del mundo.
          </p>
          <p className="text-gray-700">
            Conocer esta equivalencia (1 in = 2.54 cm) es esencial para convertir correctamente entre estos dos sistemas de medida diferentes.
          </p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6" id="cm-a-pulgadas">Convertir centímetros a pulgadas fácilmente</h2>
          <p className="text-gray-700 mb-4">
            Para convertir de centímetros a pulgadas, simplemente divide el valor en centímetros entre 2.54. Esta operación te dará el equivalente en pulgadas.
          </p>
          <p className="text-gray-700 mb-4">
            Por ejemplo, para convertir 20 centímetros a pulgadas:
          </p>
          <p className="text-gray-700 mb-4 font-semibold">
            20 cm ÷ 2.54 = 7.87 pulgadas
          </p>
          <p className="text-gray-700 mb-4">
            Nuestra calculadora de "Centímetros a Pulgadas" automatiza este cálculo para ti. Solo necesitas ingresar el valor en centímetros y obtendrás instantáneamente su equivalente en pulgadas.
          </p>
          <p className="text-gray-700">
            Esta conversión es útil cuando necesitas medir elementos diseñados con el sistema métrico pero necesitas las dimensiones en el sistema imperial, o viceversa.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Tabla de conversión de centímetros a pulgadas</h2>
          <ConversionTable 
            fromUnit="Pulgada" 
            toUnit="Centímetro" 
            conversionFactor={inchToCmFactor} 
            maxRows={10}
            reverse={true}
          />
        </div>
      </div>
      
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Conversor de Unidades | Todas las conversiones son precisas según estándares internacionales
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
