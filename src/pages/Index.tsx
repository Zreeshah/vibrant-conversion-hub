
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
        <section className="bg-blue-600 text-white py-20">
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

        {/* Introduction section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg mx-auto">
              <p>La conversión de pulgadas a centímetros es esencial para diversos campos, como la educación, la construcción, la sastrería y los proyectos de bricolaje. Tanto si está trabajando en una tarea de mejora del hogar, comprando productos internacionales o completando una tarea escolar, disponer de una herramienta de conversión precisa y fiable puede ahorrarle tiempo y evitar errores.</p>
              <p>Nuestro conversor gratuito en línea de Pulgadas a CM proporciona resultados instantáneos y precisos, eliminando la necesidad de realizar cálculos manuales. Con una interfaz fácil de usar, esta herramienta garantiza que cualquiera -estudiantes, profesionales o usuarios cotidianos- pueda convertir fácilmente pulgadas a centímetros en sólo unos clics. Pruébelo ahora y simplifique sus conversiones de medidas.</p>
            </div>
          </div>
        </section>

        {/* Calculators section */}
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
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg mx-auto max-w-4xl">
              <h2>Conversor online de Pulgadas a CM</h2>
              <p>Nuestro conversor de Pulgadas a CM es una herramienta sencilla y eficaz diseñada para proporcionar conversiones rápidas y precisas. Tanto si necesita convertir pulgadas a centímetros para uso académico, profesional o personal, esta calculadora le garantiza resultados precisos al instante.</p>
              <ul>
                <li>
                  <p>Cómo utilizar el Conversor de Pulgadas a CM:</p>
                </li>
                <li>
                  <p>Introduzca el valor en pulgadas en el cuadro de entrada.</p>
                </li>
                <li>
                  <p>Haga clic en el botón «Convertir» para obtener el resultado.</p>
                </li>
                <li>
                  <p>Visualice el resultado en centímetros al instante.</p>
                </li>
              </ul>
              <h3 className="text-gray-700">Ejemplo de conversión:</h3>
              <ul>
                <li>
                  <p>10 pulgadas = 25,4 cm</p>
                </li>
                <li>
                  <p>25 pulgadas = 63,5 cm</p>
                </li>
                <li>
                  <p>50 pulgadas = 127 cm</p>
                </li>
              </ul>
              <p>Pruebe ahora nuestra calculadora gratuita de pulgadas a cm y simplifique sus conversiones sin esfuerzo.</p>
              
              <h2>Fórmula de conversión de Pulgadas a CM</h2>
              <p>Convertir pulgadas a centímetros es muy sencillo utilizando la fórmula de conversión estándar:</p>
              <p className="text-xl font-semibold">Centímetros = Pulgadas × 2.54</p>
              
              <h3 className="text-gray-700">Ejemplo de cálculo:</h3>
              <ul>
                <li>
                  <p>5 pulgadas × 2,54 = 12,7 cm</p>
                </li>
                <li>
                  <p>12 pulgadas × 2,54 = 30,48 cm</p>
                </li>
                <li>
                  <p>20 pulgadas × 2,54 = 50,8 cm</p>
                </li>
              </ul>
              <p>Esta fórmula garantiza conversiones precisas para varias medidas, facilitando el cambio entre pulgadas y centímetros para cualquier aplicación.</p>
              
              <h2>Aplicaciones comunes de la conversión de pulgadas a centímetros</h2>
              <p>La conversión de pulgadas a centímetros se utiliza ampliamente en diversas industrias y tareas cotidianas. He aquí algunas aplicaciones comunes:</p>
              
              <h3 className="text-gray-700">1. Educación y estudios académicos</h3>
              <ul>
                <li>
                  <p>Se utiliza en tareas de matemáticas, física e ingeniería.</p>
                </li>
                <li>
                  <p>Imprescindible para aprender sistemas de medida y conversiones de unidades.</p>
                </li>
              </ul>
              
              <h3 className="text-gray-700">2. Mejoras en el hogar y proyectos de bricolaje</h3>
              <ul>
                <li>
                  <p>Medición de las dimensiones de muebles para la decoración y renovación del hogar.</p>
                </li>
                <li>
                  <p>Garantizar cortes precisos en proyectos de carpintería y construcción.</p>
                </li>
              </ul>
              
              <h3 className="text-gray-700">3. Moda y sastrería</h3>
              <ul>
                <li>
                  <p>Conversión de medidas de ropa entre diferentes estándares de tallaje.</p>
                </li>
                <li>
                  <p>Útil para modistas, diseñadores y compradores en línea.</p>
                </li>
              </ul>
              
              <h3 className="text-gray-700">4. Deporte y forma física</h3>
              <ul>
                <li>
                  <p>Medición de la estatura, la envergadura de los brazos y otras dimensiones corporales.</p>
                </li>
                <li>
                  <p>Estandarización de tallas de equipamiento (por ejemplo, raquetas de tenis, palos de golf).</p>
                </li>
              </ul>
              
              <h3 className="text-gray-700">5. Viajes y compras internacionales</h3>
              <ul>
                <li>
                  <p>Conocer las restricciones de tamaño del equipaje en los distintos países.</p>
                </li>
                <li>
                  <p>Comparar las dimensiones de los productos al comprar por Internet en todo el mundo.</p>
                </li>
              </ul>
              
              <p>Tanto si eres estudiante, aficionado al bricolaje, deportista o viajero, la conversión de pulgadas a centímetros ayuda a garantizar la precisión de las medidas en diversos campos. Pruebe nuestra calculadora gratuita de pulgadas a centímetros para obtener resultados instantáneos.</p>
            </div>
          </div>
        </section>

        {/* Comprehensive table */}
        <section className="py-12 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-blue-600 sm:text-4xl">
                Tabla de Conversión Completa
              </h2>
              <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
                Encuentra rápidamente la conversión que necesitas en nuestra tabla detallada de pulgadas a centímetros.
              </p>
            </div>
            <ComprehensiveConversionTable conversionFactor={inchToCmFactor} />
          </div>
        </section>
        
        {/* FAQ section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg mx-auto max-w-4xl">
              <h2>FAQs - Conversión de Pulgadas a CM</h2>
              
              <h3 className="text-gray-700">1. ¿Qué entendemos por «pulgada»?</h3>
              <p>Una pulgada es una unidad de longitud en los sistemas de medida imperial y consuetudinario de Estados Unidos. Se utiliza habitualmente en Estados Unidos, Canadá y Reino Unido para medir distancias pequeñas, tamaños de pantalla y objetos.</p>
              <p>La pulgada se abrevia como «in» o se representa con el símbolo doble primo ("). Por ejemplo, 12 pulgadas puede escribirse como 12 in o 12″.</p>
              <p>Una pulgada se define oficialmente como 2,54 centímetros (cm) en el sistema métrico decimal.</p>
              
              <h3 className="text-gray-700">2. ¿Cómo puedo convertir pulgadas en centímetros?</h3>
              <p>Convertir pulgadas a centímetros es sencillo utilizando la fórmula estándar:</p>
              <p><strong>Centímetros = Pulgadas × 2,54</strong></p>
              <p>Por ejemplo:</p>
              <ul>
                <li>
                  <p>5 pulgadas × 2,54 = 12,7 cm</p>
                </li>
                <li>
                  <p>10 pulgadas × 2,54 = 25,4 cm</p>
                </li>
                <li>
                  <p>20 pulgadas × 2,54 = 50,8 cm</p>
                </li>
              </ul>
              
              <p>Para facilitar las conversiones, puedes utilizar una calculadora online de pulgadas a cm para obtener resultados instantáneos.</p>
              
              <h3 className="text-gray-700">3. Las pulgadas en alemán se llaman «Inch» y «Zoll». ¿Son realmente lo mismo?</h3>
              <p>Sí, en alemán, el término «Zoll» se refiere a una pulgada. La palabra «Inch» se utiliza a veces en contextos anglófonos en Alemania, pero «Zoll» es el término tradicional.</p>
              <p>Tanto «Zoll» como «Inch» representan la misma medida: 1 Zoll = 1 Inch = 2,54 cm. El término «Zoll» se utiliza habitualmente en los países de habla alemana para referirse a tamaños de pantallas (televisores, monitores), diámetros de tuberías y herramientas industriales.</p>
              
              <h3 className="text-gray-700">4. ¿Qué se entiende por «centímetro»?</h3>
              <p>Un centímetro (cm) es una unidad de longitud del sistema métrico decimal, ampliamente utilizado en todo el mundo excepto en Estados Unidos y otros pocos países que siguen las medidas imperiales.</p>
              <p>Un centímetro equivale a 0,3937 pulgadas, y se utiliza habitualmente para medir objetos, dimensiones corporales y distancias en la vida cotidiana.</p>
              
              <h3 className="text-gray-700">5. Conversión de pulgadas a otras unidades</h3>
              <p>Las pulgadas pueden convertirse a diferentes unidades utilizando los siguientes tipos de conversión:</p>
              <ul>
                <li>
                  <p>Pulgadas a centímetros: 1 pulgada = 2,54 cm</p>
                </li>
                <li>
                  <p>Pulgadas a milímetros: 1 pulgada = 25,4 mm</p>
                </li>
                <li>
                  <p>Pulgadas a pies: 1 pulgada = 0,0833 pies</p>
                </li>
                <li>
                  <p>Pulgadas a metros 1 pulgada = 0,0254 metros</p>
                </li>
                <li>
                  <p>Pulgadas a yardas: 1 pulgada = 0,0278 yardas</p>
                </li>
              </ul>
              
              <h3 className="text-gray-700">6. ¿Dónde se siguen utilizando las pulgadas?</h3>
              <p>Aunque la mayoría de los países utilizan el sistema métrico decimal, las pulgadas se siguen utilizando habitualmente en:</p>
              <ul>
                <li>
                  <p>Estados Unidos, Canadá y Reino Unido: Se utilizan en medidas de altura, tamaños de papel y dimensiones de pantallas.</p>
                </li>
                <li>
                  <p>Ingeniería y construcción: Muchos planos y herramientas aún utilizan las pulgadas.</p>
                </li>
                <li>
                  <p>Tecnología y pantallas: Los tamaños de las pantallas de televisores, portátiles y móviles se miden en pulgadas en todo el mundo.</p>
                </li>
                <li>
                  <p>Aviación: La altitud de los aviones y las dimensiones de las pistas a veces utilizan pulgadas en algunos países.</p>
                </li>
              </ul>
              
              <h3 className="text-gray-700">7. ¿Dónde podemos encontrar el término «pulgada»?</h3>
              <p>El término «pulgada» se encuentra habitualmente en varios contextos, entre ellos:</p>
              <p><strong>Tamaños de pantalla</strong>: Ordenadores portátiles, televisores y pantallas de teléfonos inteligentes.</p>
              <p><strong>Construcción:</strong> Planos, carpintería y herramientas.</p>
              <p><strong>Ropa y moda</strong>: Tallas de cintura en pantalones y vaqueros.</p>
              <p><strong>Fotografía</strong>: Tamaños de los sensores de las cámaras.</p>
              <p><strong>Impresión:</strong> Dimensiones del papel (por ejemplo, tamaño del papel 8,5« × 11»).</p>
              
              <h3 className="text-gray-700">8. Historia de la pulgada</h3>
              <p>La pulgada tiene una larga historia y se originó a partir de diferentes sistemas de medición utilizados en distintas civilizaciones.</p>
              <ul>
                <li>
                  <p>En la Inglaterra medieval, la pulgada se definía como la anchura del pulgar de un hombre.</p>
                </li>
                <li>
                  <p>Más tarde, se estandarizó como tres granos de cebada colocados uno al lado del otro.</p>
                </li>
                <li>
                  <p>En 1959, la pulgada internacional fue definida oficialmente como 2,54 cm por el International Yard and Pound Agreement.</p>
                </li>
              </ul>
              
              <h3 className="text-gray-700">9. Significado y origen del término «pulgada»</h3>
              <p>La palabra «pulgada» procede del latín «uncia», que significa la doceava parte de una unidad. Originalmente se refería a la doceava parte de un pie romano. Con el tiempo, la pulgada evolucionó hasta su definición moderna y sigue siendo una de las medidas imperiales más utilizadas en la actualidad.</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
