// server/index.ts
import express from 'express';
import cors from 'cors';
import path from 'path';
import contactRoutes from './routes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// API routes
app.use('/api', contactRoutes);

// Static file serving for production
if (process.env.NODE_ENV === 'production') {
  const root = path.resolve(__dirname, '../client/dist');
  app.use(express.static(root));

  app.get('*', (_, res) => {
    res.sendFile(path.join(root, 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
