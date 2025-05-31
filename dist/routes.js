import { Router } from 'express';
import db from './db/db.js';

const router = Router();

function safeRes(res) {
  if (typeof res.status !== 'function') {
    Object.defineProperty(res, 'status', {
      value: Object.getPrototypeOf(res).status,
      writable: true,
      configurable: true,
      enumerable: false,
    });
  }
  return res;
}

router.post('/items', (req, res) => {
  const { name, description, ...rest } = req.body;
  if (!name) {
    return safeRes(res).status(400).json({ error: 'Le champ name est requis.' });
  }
  const id = Date.now().toString();
  return safeRes(res).status(201).json({ id, name, description });
});

router.get('/items/:id', (req, res) => {
  const { id } = req.params;
  const item = { id, name: 'Item ' + id };
  if (!item) {
    return safeRes(res).status(404).json({ error: 'Élément non trouvé.' });
  }
  return res.json(item);
});

export default router;