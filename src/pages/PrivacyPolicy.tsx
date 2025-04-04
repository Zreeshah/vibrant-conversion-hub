import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Helmet>
        <title>Política de Privacidad - Pulgadas a CM</title>
        <meta name="description" content="Política de privacidad de Pulgadas a CM. Información sobre cómo manejamos tus datos personales." />
        <link rel="canonical" href="https://pulgadas-a-cm.com/politica-de-privacidad" />
      </Helmet>
      
      <NavBar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Política de Privacidad</h1>
          
          <p className="text-gray-700 mb-4">
            Fecha de última actualización: {new Date().toLocaleDateString('es-ES')}
          </p>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Introducción</h2>
          <p className="text-gray-700 mb-4">
            Bienvenido a Pulgadas a CM. Valoramos y respetamos su privacidad. Esta Política de Privacidad describe cómo recopilamos, utilizamos y compartimos su información personal cuando visita nuestro sitio web.
          </p>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Información que Recopilamos</h2>
          <p className="text-gray-700 mb-4">
            <strong>Información de uso:</strong> Cuando visita nuestro sitio web, recopilamos automáticamente cierta información sobre su dispositivo, incluida información sobre su navegador web, dirección IP, zona horaria y algunas de las cookies que están instaladas en su dispositivo.
          </p>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Cómo Utilizamos Su Información</h2>
          <p className="text-gray-700 mb-4">
            Utilizamos la información que recopilamos para:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Proporcionar, operar y mantener nuestro sitio web</li>
            <li className="mb-2">Mejorar, personalizar y ampliar nuestro sitio web</li>
            <li className="mb-2">Comprender y analizar cómo utiliza nuestro sitio web</li>
            <li className="mb-2">Desarrollar nuevos productos, servicios, características y funcionalidades</li>
          </ul>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4. Cookies</h2>
          <p className="text-gray-700 mb-4">
            Las cookies son archivos de datos que se colocan en su dispositivo o computadora y a menudo incluyen un identificador único anónimo. Para más información sobre las cookies y cómo desactivarlas, visite <a href="http://www.allaboutcookies.org" className="text-blue-600 hover:underline">http://www.allaboutcookies.org</a>.
          </p>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">5. Compartir Su Información Personal</h2>
          <p className="text-gray-700 mb-4">
            No compartimos su información personal con terceros, excepto en las siguientes circunstancias:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li className="mb-2">Para cumplir con leyes o normativas aplicables</li>
            <li className="mb-2">Para proteger los derechos, la propiedad o la seguridad de nosotros, nuestros usuarios u otros</li>
          </ul>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">6. Sus Derechos</h2>
          <p className="text-gray-700 mb-4">
            Si usted es residente europeo, tiene derecho a acceder a la información personal que tenemos sobre usted y a solicitar que su información personal sea corregida, actualizada o eliminada.
          </p>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">7. Cambios</h2>
          <p className="text-gray-700 mb-4">
            Podemos actualizar esta política de privacidad de vez en cuando para reflejar, por ejemplo, cambios en nuestras prácticas o por otras razones operativas, legales o reglamentarias.
          </p>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">8. Contáctenos</h2>
          <p className="text-gray-700 mb-4">
            Para más información sobre nuestras prácticas de privacidad, si tiene preguntas o si desea presentar una queja, póngase en contacto con nosotros por correo electrónico a info@pulgadas-a-cm.com.
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
