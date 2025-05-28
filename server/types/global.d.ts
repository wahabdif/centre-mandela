// server/types/global.d.ts

// Déclarations globales personnalisées (si besoin)

// Exemple : déclaration globale pour Node.js (optionnel, souvent déjà inclus dans @types/node)
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    PORT?: string;
    // ajoute ici tes variables d'environnement spécifiques si nécessaire
  }
}

// Tu peux ajouter ici d'autres déclarations globales si besoin, sinon ce fichier peut rester vide.
