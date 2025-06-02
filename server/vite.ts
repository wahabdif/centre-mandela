import { createServer } from 'http';
import { parse } from 'url';
import { readFileSync } from 'fs';
import { join } from 'path';

// Chemins ajustés pour correspondre à la structure du projet
const distDir = join(__dirname, '../dist/server'); // Correspond à `dist/server` depuis la racine
const entryServerPath = join(distDir, 'entry-server.js');

async function startServer() {
  try {
    // Import dynamique du fichier `entry-server.js`
    const entryServer = await import(entryServerPath);

    // Création du serveur HTTP
    const server = createServer((req, res) => {
      const parsedUrl = parse(req.url || '', true);
      const { pathname } = parsedUrl;

      // Route principale pour le rendu
      if (pathname === '/') {
        const html = entryServer.render('/');
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(html);
      }
      // Route pour les fichiers statiques
      else if (pathname && pathname.startsWith('/static/')) {
        const filePath = join(distDir, pathname.replace('/static/', ''));
        try {
          const fileContent = readFileSync(filePath);
          res.writeHead(200, { 'Content-Type': 'application/octet-stream' });
          res.end(fileContent);
        } catch (error) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('Fichier non trouvé.');
        }
      }
      // Route non trouvée
      else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Route non trouvée.');
      }
    });

    // Lancement du serveur
    server.listen(3000, () => {
      console.log('Serveur démarré sur http://localhost:3000');
    });
  } catch (error) {
    console.error('Erreur : fichier entry-server.js introuvable ou non valide.', error);
  }
}

startServer();
