import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

export function render(url: string) {
  const appHtml = renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );

  return `
    <!DOCTYPE html>
    <html lang="fr">
      <head>
        <meta charset="UTF-8" />
        <title>Centre Mandela</title>
      </head>
      <body>
        <div id="root">${appHtml}</div>
        <script type="module" src="/assets/main.js"></script>
      </body>
    </html>
  `;
}
