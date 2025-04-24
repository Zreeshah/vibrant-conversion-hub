
import React from 'react';
import OptimizedImage from '@/components/OptimizedImage';

const ConversionInfoSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg mx-auto max-w-4xl">
          <h2>Conversor online de Pulgadas a CM</h2>
          
          <div className="my-8 flex justify-center">
            <OptimizedImage 
              src="/lovable-uploads/85d71a65-46b3-46e9-b27c-1e6632a8103d.png"
              alt="Pulgadas a CM" 
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
              priority={false}
            />
          </div>
          
          <p>Nuestro conversor de Pulgadas a CM es una herramienta sencilla y eficaz diseñada para proporcionar conversiones rápidas y precisas. Tanto si necesita convertir pulgadas a centímetros para uso académico, profesional o personal, esta calculadora le garantiza resultados precisos al instante.</p>
          <ul>
            <li><p>Cómo utilizar el Conversor de Pulgadas a CM:</p></li>
            <li><p>Introduzca el valor en pulgadas en el cuadro de entrada.</p></li>
            <li><p>Haga clic en el botón «Convertir» para obtener el resultado.</p></li>
            <li><p>Visualice el resultado en centímetros al instante.</p></li>
          </ul>
          <h3 className="text-gray-700">Ejemplo de conversión:</h3>
          <ul>
            <li><p>10 pulgadas = 25,4 cm</p></li>
            <li><p>25 pulgadas = 63,5 cm</p></li>
            <li><p>50 pulgadas = 127 cm</p></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ConversionInfoSection;
