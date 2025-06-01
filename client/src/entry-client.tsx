import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Hydratation côté client de l'application React.
// hydrateRoot est la méthode recommandée avec React 18+.

// Le root DOM où React va se "brancher" :
// Assurez-vous que votre serveur a rendu un <div id="root"> avec le HTML pré-rendu.
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element #root introuvable dans le DOM.');
}

hydrateRoot(
  rootElement,
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
