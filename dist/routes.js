import { Router } from 'express';
const router = Router();
// Exemple route GET avec paramètre
router.get('/items/:id', (req, res) => {
    const id = req.params.id;
    // Simuler une récupération d'élément
    const item = { id, name: 'Item ' + id };
    res.json(item);
});
router.post('/items', (req, res) => {
    const body = req.body;
    if (!body?.name) {
        return res.status(400).json({ error: 'Le champ name est requis.' });
    }
    // Simuler création d'item avec ID aléatoire
    const newItem = { id: Date.now().toString(), ...body };
    res.status(201).json(newItem);
});
export default router;
