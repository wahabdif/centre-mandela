/// <reference path="./type/index.ts" />

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { Toaster } from '@/components/ui/toaster';

// ⬇️ Import obligatoire pour initialiser la traduction
import '@/lib/i18n';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Root container introuvable');
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
    <Toaster />
  </React.StrictMode>,
);
