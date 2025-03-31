
import React from 'react';
import { Helmet } from 'react-helmet';
import NavBar from '@/components/NavBar';

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Aviso Legal - Pulgadas a CM</title>
        <meta name="description" content="Aviso legal de Pulgadas a CM. Información sobre los términos y condiciones de uso de nuestro sitio web." />
        <link rel="canonical" href="https://pulgadas-a-cm.com/aviso-legal" />
      </Helmet>
      
      <NavBar />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Aviso Legal</h1>
          
          <p className="text-gray-700 mb-4">
            Fecha de última actualización: {new Date().toLocaleDateString('es-ES')}
          </p>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Información General</h2>
          <p className="text-gray-700 mb-4">
            Este sitio web, Pulgadas a CM (en adelante, "el Sitio"), ofrece herramientas de conversión entre unidades de medida, específicamente entre pulgadas y centímetros. El acceso a este sitio implica la aceptación de los términos y condiciones que se establecen a continuación.
          </p>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Precisión de la Información</h2>
          <p className="text-gray-700 mb-4">
            Aunque nos esforzamos por proporcionar información precisa y actualizada, no garantizamos la exactitud, integridad o idoneidad de la información y los materiales encontrados u ofrecidos en este Sitio para ningún propósito en particular. La información proporcionada es meramente orientativa.
          </p>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Limitación de Responsabilidad</h2>
          <p className="text-gray-700 mb-4">
            En ningún caso seremos responsables por cualquier pérdida o daño, incluyendo, sin limitación, pérdidas o daños indirectos o consecuentes, o cualquier pérdida o daño que surja de la pérdida de datos o beneficios derivados de, o en conexión con, el uso de este Sitio.
          </p>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4. Propiedad Intelectual</h2>
          <p className="text-gray-700 mb-4">
            Todos los derechos de propiedad intelectual en relación con este Sitio y su contenido (incluyendo, pero no limitado a, texto, imágenes, diseño, gráficos y código) son propiedad de Pulgadas a CM o de sus licenciantes. El usuario puede ver, imprimir o descargar extractos del Sitio para su uso personal, no comercial.
          </p>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5. Enlaces a Terceros</h2>
          <p className="text-gray-700 mb-4">
            Nuestro Sitio puede contener enlaces a sitios web operados por terceros. No tenemos control sobre estos sitios web y no somos responsables de su contenido o de sus políticas de privacidad.
          </p>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6. Modificaciones</h2>
          <p className="text-gray-700 mb-4">
            Nos reservamos el derecho de modificar, suspender o discontinuar cualquier aspecto del Sitio en cualquier momento, incluyendo la disponibilidad de cualquier característica, base de datos o contenido. También podemos imponer límites en ciertas características y servicios o restringir su acceso a partes o a todo el Sitio sin previo aviso ni responsabilidad.
          </p>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">7. Ley Aplicable</h2>
          <p className="text-gray-700 mb-4">
            Este Aviso Legal se rige por la legislación española. Cualquier disputa que pueda surgir en relación con este Aviso Legal estará sujeta a la jurisdicción exclusiva de los tribunales de España.
          </p>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">8. Contacto</h2>
          <p className="text-gray-700 mb-4">
            Si tiene alguna pregunta sobre este Aviso Legal, por favor contáctenos a través de info@pulgadas-a-cm.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
