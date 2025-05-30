import express from 'express';
import { createServer } from 'vite';
import fs from 'fs';
import path from 'path';
import { nanoid } from 'nanoid';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export async function setupVite(app, server) {
    const vite = await createServer({
        server: {
            middlewareMode: true,
            hmr: { server },
            allowedHosts: 'all',
        },
        appType: 'custom',
    });
    app.use(vite.middlewares);
    app.use('*', async (req, res, next) => {
        const url = req.originalUrl;
        try {
            const indexPath = path.resolve(__dirname, '..', 'client', 'index.html');
            let template = await fs.promises.readFile(indexPath, 'utf-8');
            template = template.replace(`src="/src/main.tsx"`, `src="/src/main.tsx?v=${nanoid()}"`);
            const html = await vite.transformIndexHtml(url, template);
            res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
        }
        catch (error) {
            vite.ssrFixStacktrace(error);
            next(error);
        }
    });
}
export function serveStatic(app) {
    const distPath = path.resolve(__dirname, '..', 'public');
    if (!fs.existsSync(distPath)) {
        throw new Error(`📦 Le dossier ${distPath} est introuvable. Lancez "npm run build" avant la mise en production.`);
    }
    app.use(express.static(distPath));
    app.use('*', (_req, res) => {
        res.sendFile(path.resolve(distPath, 'index.html'));
    });
}
