import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

export function render(url: string) {
  // React Router côté serveur : on passe l'URL à StaticRouter
  const appHtml = renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );

  // Retourne une page HTML complète (tu peux adapter le head / styles / scripts)
  return `
    <!DOCTYPE html>
    <html lang="fr">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Mon App SSR</title>
        <link rel="stylesheet" href="/assets/main.css" />
        <!-- Ajoute ici les meta, favicon, etc. -->
      </head>
      <body>
        <div id="root">${appHtml}</div>
        <script type="module" src="/assets/main.js"></script>
      </body>
    </html>
  `;
}
