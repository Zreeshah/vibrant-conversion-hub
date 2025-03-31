
import React from 'react';
import { Helmet } from 'react-helmet';
import ConversorCalculator from '@/components/ConversorCalculator';
import ConversionTable from '@/components/ConversionTable';
import NavBar from '@/components/NavBar';

const CentimetrosAPulgadas = () => {
  // 1 cm = 0.393701 inches
  const cmToInchFactor = 0.393701;
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Conversión de Centímetros a Pulgadas - Calculadora Online Gratis</title>
        <meta name="description" content="Convierte centímetros a pulgadas fácilmente con nuestra calculadora online gratuita. Conversiones precisas e instantáneas de cm a pulgadas para todos tus proyectos." />
        <link rel="canonical" href="https://pulgadas-a-cm.com/centimetros-a-pulgadas" />
      </Helmet>
      
      <NavBar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-2">
            Conversión de Centímetros a Pulgadas
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bienvenido a nuestra calculadora de <strong>cm a pulgadas</strong>. Si necesitas <strong>convertir cm a pulgadas</strong> de forma sencilla y exacta, estás en el lugar correcto. Introduce tus centímetros y obtén el resultado en pulgadas al instante. ¡Perfecto para proyectos, medidas o cálculos diarios!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-xl font-semibold mb-4 text-center">Calculadora de Centímetros a Pulgadas</h2>
            <ConversorCalculator 
              fromUnit="Centímetros" 
              toUnit="Pulgadas" 
              conversionFactor={cmToInchFactor} 
              placeholder="Ingresa centímetros"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4 text-center">Pulgadas a Centímetros</h2>
            <ConversorCalculator 
              fromUnit="Pulgadas" 
              toUnit="Centímetros" 
              conversionFactor={1/cmToInchFactor} 
              reverse={true}
              placeholder="Ingresa pulgadas"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Calculadora de Centímetros a Pulgadas</h2>
          <p className="text-gray-700 mb-4">
            Usa esta herramienta gratuita para <strong>convertir centímetros a pulgadas</strong> en segundos. Solo ingresa el valor en cm y obtén la equivalencia en pulgadas automáticamente. Nuestra calculadora está diseñada para ser rápida, precisa y fácil de usar, ideal para cualquier persona que necesite realizar conversiones de <strong>cm a pulgadas</strong> sin complicaciones.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Cómo Usar la Calculadora</h3>
          <p className="text-gray-700 mb-4">
            Para que tu experiencia sea lo más sencilla posible, hemos creado una interfaz intuitiva. Aquí están los elementos clave:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">
              <strong>Campo de Entrada: "Ingresa los centímetros (cm)"</strong><br />
              Escribe el valor numérico en centímetros que deseas convertir. Por ejemplo, si quieres saber cuántas pulgadas son 25 cm, simplemente introduce "25".
            </li>
            <li className="mb-2">
              <strong>Botón: "Convertir"</strong><br />
              Haz clic en este botón para procesar tu solicitud. En un instante, la herramienta transformará tus <strong>centímetros a pulgadas</strong> con total precisión.
            </li>
            <li className="mb-2">
              <strong>Campo de Salida: "Resultado en pulgadas"</strong><br />
              Aquí aparecerá el resultado de la conversión. Por ejemplo, si ingresaste 25 cm, verás algo como "9.8425 pulgadas".
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Ventajas de Nuestra Herramienta</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2"><strong>Rapidez:</strong> Obtén resultados al momento, sin esperar.</li>
            <li className="mb-2"><strong>Precisión:</strong> Basada en la fórmula estándar (1 cm = 0.393701 pulgadas), garantizamos exactitud en cada conversión de <strong>cm a pulgadas</strong>.</li>
            <li className="mb-2"><strong>Accesibilidad:</strong> Disponible desde cualquier dispositivo, ya sea móvil, tablet o computadora.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Ejemplo Práctico</h3>
          <p className="text-gray-700 mb-4">
            Supongamos que necesitas <strong>convertir cm a pulgadas</strong> para medir una tela de 50 cm. Ingresa "50" en el campo de entrada, haz clic en "Convertir" y el resultado será aproximadamente 19.685 pulgadas. ¡Así de fácil es usar nuestra calculadora de <strong>centímetros a pulgadas</strong>!
          </p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6" id="como-convertir">¿Cómo Convertir CM a Pulgadas con Nuestra Calculadora?</h2>
          <p className="text-gray-700 mb-4">
            Aquí te explicamos paso a paso cómo usar nuestra herramienta para <strong>convertir cm a pulgadas</strong> de manera rápida y sin complicaciones. Sigue estas instrucciones y transforma tus medidas en segundos.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-3">Paso 1: Ingresa el Valor</h3>
          <p className="text-gray-700 mb-4">
            En el campo de entrada etiquetado como "Ingresa los centímetros (cm)", escribe el número de centímetros que deseas convertir. Por ejemplo, si tienes 15 cm, simplemente introduce "15".
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-3">Paso 2: Haz Clic en "Convertir"</h3>
          <p className="text-gray-700 mb-4">
            Una vez que hayas ingresado el valor, presiona el botón "Convertir". Nuestra calculadora procesará automáticamente la conversión de <strong>cm a pulgadas</strong> y te mostrará el resultado al instante.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-3">Paso 3: Revisa el Resultado</h3>
          <p className="text-gray-700 mb-4">
            El resultado aparecerá en el campo de salida "Resultado en pulgadas". Por ejemplo, si ingresaste 15 cm, verás aproximadamente "5.9055 pulgadas". ¡Así de simple es <strong>convertir centímetros a pulgadas</strong> con nosotros!
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-3">Consejo Adicional</h3>
          <p className="text-gray-700 mb-4">
            Si necesitas realizar varias conversiones, no hace falta recargar la página. Solo borra el valor anterior, ingresa uno nuevo y vuelve a hacer clic en "Convertir". ¡Perfecto para trabajar con múltiples medidas de <strong>cm a pulgadas</strong> sin interrupciones!
          </p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6" id="formula">Fórmula para Convertir Centímetros a Pulgadas</h2>
          <p className="text-gray-700 mb-4">
            Si prefieres hacerlo manualmente o quieres entender cómo funciona la conversión de <strong>cm a pulgadas</strong>, te explicamos todo lo que necesitas saber. A continuación, encontrarás la fórmula básica y ejemplos prácticos para que puedas <strong>convertir centímetros a pulgadas</strong> sin depender de una calculadora.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-3">La Fórmula Básica</h3>
          <p className="text-gray-700 mb-4">
            La conversión de centímetros a pulgadas se basa en una relación matemática sencilla: <strong>1 cm = 0.393701 pulgadas</strong>. Para <strong>convertir cm a pulgadas</strong>, simplemente multiplica el número de centímetros por este factor. Es una fórmula universal y fácil de aplicar.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-3">Cálculo Paso a Paso</h3>
          <p className="text-gray-700 mb-4">
            Así es como puedes hacerlo manualmente:
          </p>
          <ol className="list-decimal pl-6 mb-4 text-gray-700">
            <li className="mb-2">Toma el valor en centímetros que deseas convertir. Por ejemplo, 10 cm.</li>
            <li className="mb-2">Multiplica ese valor por 0.393701: 10 × 0.393701 = 3.93701 pulgadas.</li>
            <li className="mb-2">¡Listo! El resultado es 3.93701 pulgadas.</li>
          </ol>
          <p className="text-gray-700 mb-4">
            Con esta técnica, puedes transformar cualquier medida de <strong>cm a pulgadas</strong> con precisión.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-3">Ejemplos Prácticos</h3>
          <p className="text-gray-700 mb-4">
            Veamos algunos casos comunes para que entiendas cómo <strong>convertir cm a pulgadas</strong>:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2"><strong>5 cm:</strong> 5 × 0.393701 = 1.9685 pulgadas.</li>
            <li className="mb-2"><strong>20 cm:</strong> 20 × 0.393701 = 7.87402 pulgadas.</li>
            <li className="mb-2"><strong>100 cm:</strong> 100 × 0.393701 = 39.3701 pulgadas.</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Estos ejemplos te ayudarán a familiarizarte con la conversión de <strong>centímetros a pulgadas</strong>.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-3">¿Por Qué Conocer la Fórmula?</h3>
          <p className="text-gray-700 mb-4">
            Aunque nuestra calculadora hace el trabajo por ti, aprender la fórmula te da independencia. Es útil en situaciones sin acceso a internet o para verificar resultados. Además, entender cómo se transforma <strong>cm a pulgadas</strong> puede ser valioso en proyectos escolares, trabajos manuales o diseño.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6" id="tabla-conversion">Tabla de Conversión de CM a Pulgadas</h2>
          <p className="text-gray-700 mb-4">
            Consulta esta tabla práctica para convertir rápidamente <strong>centímetros a pulgadas</strong> sin necesidad de calcular. Te ofrecemos una lista de valores comunes que te ahorrarán tiempo al realizar conversiones de <strong>cm a pulgadas</strong> en tus proyectos o tareas diarias.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-3">Tabla de Referencia Rápida</h3>
          <ConversionTable 
            fromUnit="Centímetro" 
            toUnit="Pulgada" 
            conversionFactor={cmToInchFactor} 
            maxRows={10}
          />
          <p className="text-gray-700 mt-4 mb-4">
            Estos valores son aproximados para facilitar su uso. Si necesitas mayor precisión, utiliza nuestra calculadora de <strong>cm a pulgadas</strong>.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-3">¿Cómo Usar la Tabla?</h3>
          <p className="text-gray-700 mb-4">
            Es muy sencillo: busca el valor en centímetros que necesitas convertir y lee su equivalencia en pulgadas al lado. Por ejemplo, si tienes 20 cm, la tabla te indica que son 7.87 pulgadas. ¡Ideal para referencias rápidas de <strong>centímetros a pulgadas</strong>!
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-3">Beneficios de la Tabla</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2"><strong>Ahorro de Tiempo:</strong> No necesitas hacer cálculos para medidas comunes.</li>
            <li className="mb-2"><strong>Practicidad:</strong> Perfecta para consultas rápidas en el trabajo o en casa.</li>
            <li className="mb-2"><strong>Complemento:</strong> Úsala junto a nuestra herramienta para verificar o agilizar tus conversiones de <strong>cm a pulgadas</strong>.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-3">¿Necesitas Otros Valores?</h3>
          <p className="text-gray-700 mb-4">
            Si tu medida no está en la tabla, no te preocupes. Ingresa cualquier valor en nuestra calculadora y obtén la conversión exacta de <strong>centímetros a pulgadas</strong> al instante. Esta tabla es solo una ayuda inicial para los casos más frecuentes.
          </p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6" id="faqs">Preguntas Frecuentes</h2>
          <p className="text-gray-700 mb-4">
            Vamos a sumergirnos en el mundo de las medidas con tus preguntas sobre pulgadas y centímetros. Lo desglosaré paso a paso y daré una respuesta detallada y atractiva a cada parte.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-3">Origen y definición de la pulgada</h3>
          <p className="text-gray-700 mb-4">
            La pulgada tiene una historia fascinante que hunde sus raíces en la antigüedad. El término «pulgada» procede del inglés antiguo <i>ynce</i>, que a su vez deriva del latín <i>uncia</i>, que significa «una doceava parte», un guiño a su definición original como la doceava parte de un pie. Históricamente, la pulgada se basaba en medidas humanas, como la anchura del pulgar de un hombre o la longitud de tres granos de cebada colocados uno al lado del otro (una norma codificada en Inglaterra en el siglo XIV bajo el reinado de Eduardo II). Con el tiempo, esta medida algo imprecisa se estandarizó. Hoy en día, una pulgada se define con precisión como <b>2,54 centímetros</b> en el sistema internacional, un valor establecido por acuerdo en 1959 para alinear los sistemas imperial y métrico. Es una unidad pequeña pero poderosa, profundamente arraigada en las culturas de habla inglesa y todavía muy utilizada en Estados Unidos, Reino Unido y partes de Canadá.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-3">Relación entre pulgadas y centímetros</h3>
          <p className="text-gray-700 mb-4">
            Las pulgadas y los centímetros son unidades de longitud, pero pertenecen a sistemas de medida diferentes: las pulgadas al sistema imperial y los centímetros al sistema métrico decimal. La relación clave es su factor de conversión exacto: <b>1 pulgada = 2,54 centímetros</b>. Esta equivalencia exacta se estableció para crear un puente entre los dos sistemas y facilitar las conversiones. Piense en ello como un tipo de cambio fijo entre dos monedas de longitud: una pulgada siempre vale 2,54 centímetros, independientemente de lo que esté midiendo.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-3">Origen y definición del centímetro</h3>
          <p className="text-gray-700 mb-4">
            El centímetro surgió del sistema métrico decimal, que nació durante la Revolución Francesa a finales del siglo XVIII como una alternativa racional, basada en el sistema decimal, a la mezcolanza de medidas locales entonces en uso. La palabra «centímetro» procede del latín <i>centum</i> (centena) y del griego <i>metron</i> (medida), y significa «la centésima parte de un metro». Un centímetro se define exactamente como <b>1/100 de un metro</b>, y como el propio metro se define ahora por la distancia que recorre la luz en el vacío en 1/299.792.458 segundos, el centímetro hereda esa precisión. Es una unidad limpia y lógica, ampliamente adoptada en todo el mundo por su sencillez y coherencia.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-3">Fórmulas de conversión</h3>
          <p className="text-gray-700 mb-4">
            Convertir entre pulgadas y centímetros es sencillo gracias a esa relación fija. He aquí las fórmulas:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">
              <b>De pulgadas a centímetros</b>: Multiplica el número de pulgadas por 2,54.<br />
              <i>Fórmula</i>: cm = pulgadas × 2.54
            </li>
            <li className="mb-2">
              <b>De centímetros a pulgadas</b>: Divide el número de centímetros por 2,54 (o multiplícalo por su recíproco, aproximadamente 0,393701).<br />
              <i>Fórmula</i>: pulgadas = cm ÷ 2,54 o pulgadas = cm × 0,393701
            </li>
          </ul>
          <p className="text-gray-700 mb-4">
            Por ejemplo:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">5 pulgadas = 5 × 2,54 = 12,7 cm</li>
            <li className="mb-2">10 cm = 10 ÷ 2,54 ≈ 3,937 pulgadas</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CentimetrosAPulgadas;
