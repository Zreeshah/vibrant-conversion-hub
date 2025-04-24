
import React from 'react';

const FAQSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg mx-auto max-w-4xl">
          <h2>FAQs - Conversión de Pulgadas a CM</h2>
          
          <h3 className="text-gray-700">1. ¿Qué entendemos por «pulgada»?</h3>
          <p>Una pulgada es una unidad de longitud en los sistemas de medida imperial y consuetudinario de Estados Unidos. Se utiliza habitualmente en Estados Unidos, Canadá y Reino Unido para medir distancias pequeñas, tamaños de pantalla y objetos.</p>
          <p>La pulgada se abrevia como «in» o se representa con el símbolo doble primo ("). Por ejemplo, 12 pulgadas puede escribirse como 12 in o 12″.</p>
          <p>Una pulgada se define oficialmente como 2,54 centímetros (cm) en el sistema métrico decimal.</p>
          
          {/* Rest of FAQ content */}
          
          <h3 className="text-gray-700">9. Significado y origen del término «pulgada»</h3>
          <p>La palabra «pulgada» procede del latín «uncia», que significa la doceava parte de una unidad. Originalmente se refería a la doceava parte de un pie romano. Con el tiempo, la pulgada evolucionó hasta su definición moderna y sigue siendo una de las medidas imperiales más utilizadas en la actualidad.</p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
