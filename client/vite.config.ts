import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Charger les variables d'environnement depuis .env, .env.[mode]
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    define: {
      // Exemple : exposer VITE_API_URL pour le code client
      'process.env': {
        VITE_API_URL: env.VITE_API_URL,
      },
    },
    server: {
      host: true, // permet l'accès réseau (utile sur Render ou Docker)
      port: Number(env.PORT) || 3000,
    },
    build: {
      sourcemap: mode === 'development',
    },
    resolve: {
      alias: {
        // Exemple d'alias si besoin (facultatif)
        '@': '/src',
      },
    },
    css: {
      // Configuration Tailwind éventuelle si besoin
      postcss: './postcss.config.js',
    },
  };
});
