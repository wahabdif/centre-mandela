import { defineConfig } from 'vite'

export default defineConfig({
  
  server: {
    port: 3000,
    open: true,
  },

  build: {
    outDir: 'dist',
    sourcemap: true,
  },

  preview: {
    allowedHosts: ['centre-mandela-qscm.onrender.com'],
  },

  // Ajoutez ici d’autres configurations si nécessaire
})
