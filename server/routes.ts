const http = require('http');
const url = require('url');
const qs = require('querystring');
const db = require('./db/db.js'); // Assurez-vous que db.js est compatible avec votre implémentation.

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const method = req.method;
  const path = parsedUrl.pathname;

  if (method === 'GET' && path.startsWith('/items/')) {
    const id = path.split('/')[2];

    try {
      const item = db.prepare('SELECT * FROM items WHERE id = ?').get(id);

      if (!item) {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Item non trouvé.' }));
        return;
      }

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(item));
    } catch (error) {
      console.error('Erreur lors de la récupération de l\'élément:', error);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Erreur interne du serveur.' }));
    }
  } else if (method === 'POST' && path === '/items') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const { name, description } = JSON.parse(body);

      if (!name) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Le champ name est requis.' }));
        return;
      }

      try {
        const id = Date.now().toString();
        db.prepare('INSERT INTO items (id, name, description) VALUES (?, ?, ?)').run(id, name, description);

        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ id, name, description }));
      } catch (error) {
        console.error('Erreur lors de l\'insertion de l\'élément:', error);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Erreur interne du serveur.' }));
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Route non trouvée.' }));
  }
});

server.listen(3000, () => {
  console.log('Serveur démarré sur http://localhost:3000');
});