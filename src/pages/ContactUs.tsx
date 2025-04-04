
import React from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Helmet>
        <title>Contacto - Pulgadas a CM</title>
        <meta name="description" content="Contáctanos para cualquier consulta sobre nuestras herramientas de conversión de pulgadas a centímetros y viceversa." />
        <link rel="canonical" href="https://pulgadas-a-cm.net/contacto" />
      </Helmet>
      
      <NavBar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Contacto</h1>
          
          <p className="text-gray-700 mb-6">
            Agradecemos tu interés en Pulgadas a CM. Si tienes alguna pregunta, sugerencia o comentario, no dudes en contactarnos utilizando la información a continuación:
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Información de Contacto</h2>
            
            <div className="mb-4">
              <p className="text-gray-700 font-medium">Correo Electrónico:</p>
              <p className="text-gray-700">info@pulgadas-a-cm.com</p>
            </div>
            
            <div className="mb-4">
              <p className="text-gray-700 font-medium">Horario de Atención:</p>
              <p className="text-gray-700">Lunes a Viernes: 9:00 AM - 6:00 PM (Hora Central Europea)</p>
            </div>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Formulario de Contacto</h2>
          <p className="text-gray-700 mb-4">
            También puedes enviarnos un mensaje utilizando el siguiente formulario:
          </p>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Tu nombre"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="tu@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Asunto</label>
              <input
                type="text"
                id="subject"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Asunto de tu mensaje"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
              <textarea
                id="message"
                rows={5}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Escribe tu mensaje aquí..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
            >
              Enviar Mensaje
            </button>
          </form>
          
          <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-3">Respuesta</h2>
          <p className="text-gray-700 mb-4">
            Nos esforzamos por responder a todas las consultas dentro de las 24-48 horas siguientes a su recepción. Gracias por tu paciencia y por usar nuestros servicios.
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ContactUs;
