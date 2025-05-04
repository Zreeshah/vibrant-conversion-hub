
import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// Use a more robust approach to ensure the app renders
const renderApp = () => {
  const rootElement = document.getElementById('root');
  
  if (!rootElement) {
    console.error('Root element not found - trying again in 100ms');
    setTimeout(renderApp, 100);
    return;
  }
  
  const app = (
    <React.StrictMode>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );

  try {
    // Use hydration for SSR in production
    if (import.meta.env.PROD) {
      hydrateRoot(rootElement, app);
      console.log('App successfully hydrated');
    } else {
      const root = createRoot(rootElement);
      root.render(app);
      console.log('App successfully rendered in development mode');
    }
  } catch (error) {
    console.error('Error rendering app:', error);
  }
};

// Use requestIdleCallback for non-critical initialization
if ('requestIdleCallback' in window) {
  window.requestIdleCallback(() => {
    if (document.readyState !== 'loading') {
      renderApp();
    } else {
      document.addEventListener('DOMContentLoaded', renderApp);
    }
  });
} else {
  if (document.readyState !== 'loading') {
    renderApp();
  } else {
    document.addEventListener('DOMContentLoaded', renderApp);
  }
}
