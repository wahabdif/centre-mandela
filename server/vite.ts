import { createServer } from 'http';
import { parse } from 'url';
import { readFileSync } from 'fs';
import { join } from 'path';

const distDir = join(__dirname, './dist/server');
const entryServerPath = join(distDir, 'entry-server.js');

// Vérifiez si le fichier existe
try {
  const entryServer = await import(entryServerPath);

  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url || '', true);
    const { pathname } = parsedUrl;

    if (pathname === '/') {
      const html = entryServer.render('/');
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Route non trouvée.');
    }
  });

  server.listen(3000, () => {
    console.log('Serveur démarré sur http://localhost:3000');
  });
} catch (error) {
  console.error('Erreur : fichier entry-server.js introuvable ou non valide.', error);
}