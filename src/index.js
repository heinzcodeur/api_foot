import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Logger } from './logger';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Capture des erreurs JS non interceptées
window.onerror = function (message, source, lineno, colno, error) {
  Logger.error('Erreur JavaScript non interceptée', error || message);
};

// Capture des erreurs non catchées dans les Promises
window.onunhandledrejection = function (event) {
  Logger.error('Erreur Promise non catchée', event.reason);
};

reportWebVitals();