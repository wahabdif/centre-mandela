import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App'; // Assurez-vous que le fichier `App.tsx` existe dans `client/src`.

export function render(url: string) {
  return renderToString(<App />);
}
