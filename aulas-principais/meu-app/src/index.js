import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Arrays from './Arrays';
import Evento from './Eventos'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Arrays />
    <Evento />
  </React.StrictMode>
);

