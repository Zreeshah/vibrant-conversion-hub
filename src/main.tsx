
import React from 'react';
import { createRoot } from 'react-dom/client';
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
  
  try {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log('App successfully rendered');
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
