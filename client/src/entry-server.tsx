import React from 'react';
import { renderToString } from 'react-dom/server';
// import { StaticRouter } from 'react-router-dom/server'; // <-- Retiré comme demandé
import App from './App';

export function render(url: string) {
  // Rendu React côté serveur sans StaticRouter (à adapter selon ton routage)
  const appHtml = renderToString(
    <App />
  );

  // TODO : Ajouter ici la sérialisation sécurisée d’un état initial si besoin, par exemple avec
  // const initialState = {};
  // const serializedState = JSON.stringify(initialState).replace(/</g, '\\u003c');
  const serializedState = "";

  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Mon App SSR</title>
  <meta name="description" content="Application React avec rendu côté serveur (SSR)." />
  <link rel="icon" href="/favicon.ico" />
  <link rel="stylesheet" href="/assets/main.css" />
  <!-- Ajouter ici Open Graph, Twitter cards, etc. si nécessaire -->
</head>
<body>
  <div id="root">${appHtml}</div>
  <noscript>JavaScript est désactivé dans votre navigateur. Pour une expérience optimale, veuillez l’activer.</noscript>
  <!--
  <script>
    // window.__INITIAL_STATE__ = ${serializedState};
  </script>
  -->
  <script type="module" src="/assets/main.js"></script>
</body>
</html>`;
}