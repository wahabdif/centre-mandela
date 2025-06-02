# README - Centre d’Imagerie Benameur

---

## Présentation

**Centre d’Imagerie Benameur** est une application web complète destinée à un cabinet de radiologie situé à Oran, Algérie.  
Elle propose un site professionnel, multilingue (français, arabe, anglais), responsive, avec un frontend moderne React + Vite, un backend Express TypeScript, et une gestion de base de données via Drizzle ORM.

---

## Fonctionnalités principales

- Site web professionnel présentant le cabinet et ses services
- Multilingue (français, arabe, anglais) avec traduction complète du contenu
- Formulaire de contact fonctionnel avec validation avancée (React Hook Form + Zod)
- Backend Express REST API pour la gestion des demandes et données
- Gestion sécurisée des sessions avec Express-Session et Passport.js
- Intégration d’une base de données via Drizzle ORM (PostgreSQL compatible)
- Utilisation de Tailwind CSS avec animations, thèmes sombres/clairs
- Composants UI Radix et animations Framer Motion
- Optimisation SEO et responsive design mobile/tablette/desktop
- Carousel, graphiques (Recharts), gestion des dates (date-fns)
- Stockage sécurisé des sessions avec connect-pg-simple et memorystore
- Scripts pour développement, build, et déploiement

---

## Structure du projet

```
/
├── server/                 # Backend Express TypeScript
│   ├── index.ts            # Point d'entrée backend
│   ├── routes/             # Routes API REST
│   ├── controllers/        # Logique métier backend
│   ├── db/                 # Configuration Drizzle ORM et migrations
│   └── middleware/         # Middlewares Express (auth, sessions, etc.)
│
├── client/                 # Frontend React + Vite + Tailwind
│   ├── src/
│   │   ├── components/     # Composants React
│   │   ├── hooks/          # Hooks personnalisés
│   │   ├── pages/          # Pages multilingues
│   │   ├── styles/         # Tailwind + CSS
│   │   ├── translations/   # JSON fichiers de traduction (fr, ar, en)
│   │   └── App.tsx         # Root React + configuration multilingue
│
├── dist/                   # Build backend (output esbuild)
├── public/                 # Fichiers statiques et assets
├── package.json            # Configuration scripts, dépendances
├── tsconfig.json           # Configuration TypeScript
├── tailwind.config.js      # Configuration Tailwind CSS
└── vite.config.ts          # Configuration Vite + plugins
```

---

## Installation

### Prérequis

- Node.js v18+
- PostgreSQL (ou autre compatible) configuré pour la base de données
- Git

---

### Étapes

1. Cloner le dépôt

   ```bash
   git clone <URL_DU_DEPOT>
   cd <nom-du-projet>
   ```

2. Installer les dépendances

   ```bash
   npm install
   ```

3. Configurer les variables d’environnement dans `.env` (à créer à la racine)  
   Exemple :

   ```
   DATABASE_URL=postgres://user:password@localhost:5432/benameurdb
   SESSION_SECRET=tonsecret
   PORT=3000
   ```

4. Initialiser la base de données

   ```bash
   npm run db:push
   ```

5. Lancer le serveur en mode développement

   ```bash
   npm run dev
   ```

6. Ouvrir le frontend en mode développement (dans un autre terminal)
   ```bash
   cd client
   npm run dev
   ```

---

## Scripts utiles

| Commande          | Description                                 |
| ----------------- | ------------------------------------------- |
| `npm run dev`     | Démarre le backend en mode développement    |
| `npm run build`   | Compile le frontend et bundle le backend    |
| `npm start`       | Lance l’application en mode production      |
| `npm run check`   | Vérifie les types TypeScript                |
| `npm run db:push` | Applique les migrations Drizzle sur la base |

---

## Multilingue

- Utilisation de fichiers JSON de traduction (fr.json, ar.json, en.json) dans `client/src/translations/`
- Composants React adaptés avec `react-i18next` ou solution similaire
- Switch de langue dynamique dans l’interface utilisateur

---

## Technologies utilisées

- **Backend** : Node.js, Express, TypeScript, Drizzle ORM, PostgreSQL
- **Frontend** : React 18, Vite, TypeScript, Tailwind CSS, Radix UI, Framer Motion
- **Gestion formulaire** : React Hook Form, Zod
- **Authentification** : Passport.js local strategy
- **Session** : express-session + connect-pg-simple + memorystore
- **Autres** : Wouter (routing), Recharts (charts), date-fns, clsx, lucide-react (icônes)

---

## Déploiement

- Compiler le projet
  ```bash
  npm run build
  ```
- Lancer le backend compilé
  ```bash
  npm start
  ```
- Déployer le dossier `dist` (backend) et `client/dist` (frontend compilé) sur un serveur web ou service cloud (Render, Vercel, etc.)

---

## Contact

Dr. Cherif Benameur  
Centre D’imagerie Benameur  
32 Boulevard Hammou Boutlelis, Oran, Algérie  
Téléphone : 0661598132  
Email : cherif.benameur@gmail.com
