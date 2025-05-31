import http from 'http';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config(); // Charger les variables d'environnement

const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

// Fonction pour gérer les requêtes HTTP
const requestHandler = (req: http.IncomingMessage, res: http.ServerResponse) => {
  if (req.url?.startsWith('/api')) {
    // Exemple d'API simple
    if (req.url === '/api/test') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Hello, API!' }));
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'API non trouvée' }));
    }
  } else if (req.url === '/' || req.url?.endsWith('.html')) {
    // Servir des fichiers HTML
    const filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

    fs.readFile(filePath, (err, data) => {
      if (err) {
        if (err.code === 'ENOENT') {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('Fichier non trouvé.');
        } else {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Erreur serveur.');
        }
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else if (req.url?.endsWith('.css') || req.url?.endsWith('.js')) {
    // Servir des fichiers statiques (CSS, JS)
    const filePath = path.join(__dirname, 'public', req.url);

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Fichier non trouvé.');
      } else {
        const ext = path.extname(filePath);
        const contentType = ext === '.css' ? 'text/css' : 'application/javascript';
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Route non trouvée.');
  }
};

// Créer le serveur HTTP
const server = http.createServer(requestHandler);

// Démarrer le serveur
server.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});