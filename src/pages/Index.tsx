
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
              fromUnit="Centímetros" 
              toUnit="Pulgadas" 
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
            fromUnit="Centímetro" 
            toUnit="Pulgada" 
            conversionFactor={inchToCmFactor} 
            maxRows={10}
            reverse={true}
          />
        </div>

        {/* Nuevo contenido desde Google Docs */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6" id="origen-pulgada">El origen de la pulgada: historia y evolución</h2>
          <p className="text-gray-700 mb-4">
            La <strong>pulgada</strong> tiene un origen fascinante que se remonta a la antigüedad. Inicialmente, en la Inglaterra medieval, se definía como <strong>la longitud de tres granos de cebada colocados de punta a punta</strong>. Con el tiempo, esta medida se estandarizó de diferentes formas hasta que en 1959, mediante un acuerdo internacional, se estableció definitivamente que <strong>una pulgada equivale exactamente a 2.54 centímetros</strong>.
          </p>
          <p className="text-gray-700 mb-4">
            La palabra "pulgada" deriva del latín "<em>uncia</em>", que representaba la duodécima parte de un pie romano. Este origen explica por qué en muchos idiomas el término para pulgada está relacionado con el número doce o con fracciones:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">En inglés: "<em>inch</em>" (del antiguo inglés "<em>ynce</em>")</li>
            <li className="mb-2">En español: "pulgada" (relacionada con el pulgar)</li>
            <li className="mb-2">En alemán: "<em>Zoll</em>" (relacionada con peaje o aduana)</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6" id="uso-pulgada">Usos comunes de las pulgadas en la actualidad</h2>
          <p className="text-gray-700 mb-4">
            Aunque el sistema métrico predomina globalmente, las <strong>pulgadas</strong> siguen siendo ampliamente utilizadas en diversos contextos:
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-3">Electrónica y tecnología</h3>
          <p className="text-gray-700 mb-4">
            Las pantallas de dispositivos electrónicos se miden comúnmente en pulgadas. Por ejemplo:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Televisores: 32", 43", 55", 65", etc.</li>
            <li className="mb-2">Monitores: 24", 27", 32", etc.</li>
            <li className="mb-2">Tablets y smartphones: 6.7", 10.9", 12.9", etc.</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-3">Construcción y bricolaje</h3>
          <p className="text-gray-700 mb-4">
            En países como Estados Unidos, Canadá y Reino Unido, los materiales de construcción se dimensionan en pulgadas:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Tablones de madera: 2×4", 2×6", etc.</li>
            <li className="mb-2">Tuberías: 1/2", 3/4", 1", etc.</li>
            <li className="mb-2">Tornillos y clavos: 1", 2", 3", etc.</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-3">Neumáticos y llantas</h3>
          <p className="text-gray-700 mb-4">
            El diámetro de las llantas de vehículos se expresa en pulgadas en todo el mundo:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Neumáticos: 15", 17", 19", etc.</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6" id="fracciones-pulgada">Fracciones de pulgada y su conversión a centímetros</h2>
          <p className="text-gray-700 mb-4">
            En el sistema imperial, es común expresar las medidas en <strong>fracciones de pulgada</strong>. Esto es particularmente frecuente en herramientas, tornillería y carpintería. A continuación, presentamos una tabla con las conversiones más utilizadas:
          </p>
          
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm mb-6">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="py-3 px-3 text-center text-sm font-semibold border-r border-gray-200">Fracción de pulgada</th>
                  <th className="py-3 px-3 text-center text-sm font-semibold border-r border-gray-200">Decimal (pulgadas)</th>
                  <th className="py-3 px-3 text-center text-sm font-semibold">Centímetros</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white">
                  <td className="py-2 px-3 text-center border-r border-gray-200">1/16"</td>
                  <td className="py-2 px-3 text-center border-r border-gray-200">0.0625"</td>
                  <td className="py-2 px-3 text-center">0.159 cm</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-3 text-center border-r border-gray-200">1/8"</td>
                  <td className="py-2 px-3 text-center border-r border-gray-200">0.125"</td>
                  <td className="py-2 px-3 text-center">0.318 cm</td>
                </tr>
                <tr className="bg-white">
                  <td className="py-2 px-3 text-center border-r border-gray-200">1/4"</td>
                  <td className="py-2 px-3 text-center border-r border-gray-200">0.25"</td>
                  <td className="py-2 px-3 text-center">0.635 cm</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-3 text-center border-r border-gray-200">3/8"</td>
                  <td className="py-2 px-3 text-center border-r border-gray-200">0.375"</td>
                  <td className="py-2 px-3 text-center">0.953 cm</td>
                </tr>
                <tr className="bg-white">
                  <td className="py-2 px-3 text-center border-r border-gray-200">1/2"</td>
                  <td className="py-2 px-3 text-center border-r border-gray-200">0.5"</td>
                  <td className="py-2 px-3 text-center">1.27 cm</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-3 text-center border-r border-gray-200">5/8"</td>
                  <td className="py-2 px-3 text-center border-r border-gray-200">0.625"</td>
                  <td className="py-2 px-3 text-center">1.588 cm</td>
                </tr>
                <tr className="bg-white">
                  <td className="py-2 px-3 text-center border-r border-gray-200">3/4"</td>
                  <td className="py-2 px-3 text-center border-r border-gray-200">0.75"</td>
                  <td className="py-2 px-3 text-center">1.905 cm</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-2 px-3 text-center border-r border-gray-200">1"</td>
                  <td className="py-2 px-3 text-center border-r border-gray-200">1.0"</td>
                  <td className="py-2 px-3 text-center">2.54 cm</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-gray-700 mb-4">
            Para convertir cualquier fracción de pulgada a centímetros, puedes seguir estos pasos:
          </p>
          <ol className="list-decimal pl-6 mb-4 text-gray-700">
            <li className="mb-2">Convierte la fracción a su equivalente decimal (divide el numerador entre el denominador)</li>
            <li className="mb-2">Multiplica el resultado por 2.54 para obtener el valor en centímetros</li>
          </ol>
          <p className="text-gray-700">
            Por ejemplo, para convertir 5/16 de pulgada a centímetros: (5÷16) × 2.54 = 0.3125 × 2.54 = 0.794 cm
          </p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6" id="pulgadas-cm-vida-diaria">Pulgadas vs centímetros en la vida diaria</h2>
          <p className="text-gray-700 mb-4">
            La preferencia por el uso de <strong>pulgadas</strong> o <strong>centímetros</strong> varía según el país y el contexto. Mientras que en <strong>Estados Unidos</strong> las pulgadas son la medida estándar, en la mayoría de países del mundo se utiliza el <strong>sistema métrico</strong> con los centímetros como unidad principal para dimensiones pequeñas.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-3">Ventajas del sistema métrico (cm)</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Es <strong>decimal</strong>, lo que facilita los cálculos</li>
            <li className="mb-2">Es más <strong>consistente</strong> y fácil de convertir entre unidades</li>
            <li className="mb-2">Es el estándar en <strong>ciencia y medicina</strong> en todo el mundo</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-3">Ventajas del sistema imperial (pulgadas)</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Las medidas son <strong>más intuitivas</strong> para algunos tipos de estimaciones</li>
            <li className="mb-2">Se divide fácilmente en <strong>fracciones</strong> (mitades, cuartos, octavos)</li>
            <li className="mb-2">Está <strong>establecido</strong> en sectores específicos como la tecnología y la aviación</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6" id="pulgada-sectores-profesionales">La pulgada en sectores profesionales</h2>
          <p className="text-gray-700 mb-4">
            Varios sectores profesionales mantienen el uso de <strong>pulgadas</strong> como unidad de medida estándar, incluso en países donde el sistema métrico es predominante:
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-3">Tecnología</h3>
          <p className="text-gray-700 mb-4">
            En el mundo de la tecnología, las pantallas se miden universalmente en pulgadas, midiendo la diagonal de la pantalla:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Un iPhone 14 Pro Max tiene una pantalla de <strong>6.7 pulgadas</strong> (17.02 cm)</li>
            <li className="mb-2">Un iPad Pro grande tiene <strong>12.9 pulgadas</strong> (32.77 cm)</li>
            <li className="mb-2">Los monitores se ofrecen en tamaños como <strong>24", 27", 32"</strong></li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-3">Fontanería y tuberías</h3>
          <p className="text-gray-700 mb-4">
            El diámetro de tuberías y accesorios de fontanería se especifica habitualmente en pulgadas:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Tuberías domésticas: <strong>1/2", 3/4", 1"</strong></li>
            <li className="mb-2">Desagües: <strong>1-1/4", 1-1/2", 2"</strong></li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-3">Aviación</h3>
          <p className="text-gray-700 mb-4">
            La industria aeronáutica utiliza pulgadas para muchas especificaciones:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">La posición de los asientos (pitch): <strong>30" a 32"</strong> en clase turista</li>
            <li className="mb-2">Componentes estructurales y mecánicos</li>
          </ul>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-3">Impresión y papel</h3>
          <p className="text-gray-700">
            Los formatos de papel en EE.UU. se basan en pulgadas, a diferencia del estándar internacional ISO:
            <strong>Carta (8.5" × 11")</strong> vs. A4 (210 mm × 297 mm)
          </p>
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
