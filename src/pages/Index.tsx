
import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import IntroText from '@/components/IntroText';
import Hero from '@/components/sections/Hero';
import CalculatorsSection from '@/components/sections/CalculatorsSection';
import ConversionInfoSection from '@/components/sections/ConversionInfoSection';
import FAQSection from '@/components/sections/FAQSection';

// Lazy load non-critical components
const ComprehensiveConversionTable = lazy(() => import('@/components/ComprehensiveConversionTable'));

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Helmet>
        <title>Conversor de Pulgadas a Centímetros - Calculadora Online</title>
        <meta name="description" content="Convierte pulgadas a cm fácilmente con nuestra calculadora online gratuita. Conversiones precisas e instantáneas para todos tus proyectos." />
        <link rel="canonical" href="https://pulgadas-a-cm.net/" />
      </Helmet>
      
      <NavBar />
      
      <main className="flex-grow">
        <Hero />

        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg mx-auto max-w-4xl">
              <p className="text-lg font-medium leading-relaxed mb-4">
                La conversión de pulgadas a centímetros es esencial para diversos campos, como la educación, la construcción, la sastrería y los proyectos de bricolaje.
              </p>
            </div>
            <IntroText />
          </div>
        </section>

        <CalculatorsSection />
        <ConversionInfoSection />
        
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
            <Suspense fallback={<div className="h-96 bg-gray-100 rounded-md animate-pulse"></div>}>
              <ComprehensiveConversionTable conversionFactor={2.54} />
            </Suspense>
          </div>
        </section>

        <FAQSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
