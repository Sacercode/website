# Sacercode - Site Web d'Entreprise

Site web de Sacercode, une entreprise de conseil et formation en informatique.

## À propos

Sacercode est spécialisée dans le conseil et la formation informatique. Ce site web est actuellement en construction.

## Technologies utilisées

- **Next.js 15** - Framework React pour le développement web
- **TypeScript** - Pour un code plus robuste et maintenable
- **TailwindCSS** - Framework CSS utilitaire pour le design
- **App Router** - Nouveau système de routage de Next.js

## Développement

Pour lancer le serveur de développement :

```bash
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000) (ou un autre port disponible).

## Déploiement GitHub Pages

### Configuration automatique
Ce projet est configuré pour être déployé automatiquement sur GitHub Pages via GitHub Actions.

### Configuration GitHub Pages
1. Poussez votre code vers GitHub
2. Allez dans Settings > Pages de votre repository
3. Sélectionnez "Deploy from a branch"
4. Choisissez la branche `main` et le dossier `/ (root)` si vous utilisez GitHub Actions
5. Ou choisissez le dossier `docs` si vous préférez le build manuel

Le site sera accessible à l'adresse : `https://[votre-username].github.io/sacercode/`

## Structure du projet

```
src/
  app/
    layout.tsx    # Layout principal de l'application
    page.tsx      # Page d'accueil avec hero section
    globals.css   # Styles globaux
```

## Fonctionnalités actuelles

- ✅ Hero section avec le nom de l'entreprise "Sacercode"
- ✅ Message "Site web en construction"
- ✅ Champ email désactivé pour future newsletter
- ✅ Design responsive (mobile et desktop)
- ✅ Support du mode sombre/clair
- ✅ Interface professionnelle et moderne
- ✅ Configuration GitHub Pages

## Prochaines étapes

- Ajouter des pages de contenu (services, à propos, contact)
- Intégrer un système de newsletter
- Ajouter des animations et interactions
- Optimiser le SEO

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!