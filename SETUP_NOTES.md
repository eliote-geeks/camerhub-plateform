# Camerhub Platform – Setup Notes

## Stack
- Laravel 12 + Inertia.js + React 19
- TypeScript + Vite + Tailwind CSS 4
- Icons: lucide-react

## Installation Steps Executed
1. `composer create-project laravel/laravel camerhub-platform`
2. `cd camerhub-platform`
3. `composer require inertiajs/inertia-laravel laravel/sanctum`
4. `npm install`
5. `npm install @inertiajs/react @inertiajs/progress react react-dom`
6. `npm install -D typescript @types/react @types/react-dom @types/node @vitejs/plugin-react`
7. `npm install lucide-react`

## Configuration Highlights
- Added Inertia middleware in `bootstrap/app.php`
- Created root view `resources/views/app.blade.php`
- Set `APP_NAME=Camerhub` in `.env` and `config/app.php`
- `.env.example` configure désormais MySQL par défaut (`DB_CONNECTION=mysql`).
- Updated Vite config (`vite.config.js`) with React plugin, Tailwind and `@` alias
- Added TypeScript config (`tsconfig.json`) and axios global definition (`resources/js/types/global.d.ts`)
- Updated Tailwind content sources in `resources/css/app.css`

## Front-end Entry
- Created Inertia entry `resources/js/app.tsx`
- Converted bootstrap script to TypeScript `resources/js/bootstrap.ts`

## Pages
- Implemented landing page `resources/js/Pages/Home.tsx` avec sections : Hero, Services, Differentiators, Method, Use Cases, Offers, Accelerators, Contact

## Routes
- Home route now returns Inertia page (`routes/web.php`)

## Scripts
- Added `npm run type-check`
- `npm run build` succeeds (artifacts currently in `public/build/`)

## Pending
- `npm audit` still reports high severity issues due à `@inertiajs/progress` → requires upstream fix/alternative.
- Initialize Git if needed (`git init`).
- Déploiement GitHub Actions disponible (`.github/workflows/deploy.yml`). Renseigner les secrets `FTP_SERVER`, `FTP_PORT` (optionnel), `FTP_USERNAME`, `FTP_PASSWORD`, `FTP_PATH`. Le workflow exécute `composer install` / `npm run build`, puis pousse les fichiers vers `htdocs/` via FTPS. **Attention :** créez ou mettez à jour `.env` directement sur le serveur après déploiement ; les variables sensibles ne transitent pas via GitHub Actions. Les commandes Artisan (`migrate`, caches) restent à lancer manuellement depuis l’hébergement faute d’accès SSH.
