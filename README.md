# Boost Avis

Landing page statique HTML/CSS/JS pour presenter un service premium de collecte d'avis Google pour commerces locaux.

## Fichiers du site

- `index.html` : contenu de la page
- `styles.css` : design et responsive
- `script.js` : animations, slideshow et interactions

## Tester en local

Ouvrir `index.html` directement dans un navigateur, ou lancer :

```bash
node preview-server.mjs
```

Puis ouvrir :

```text
http://127.0.0.1:4173
```

## Deployer sur GitHub puis Vercel

1. Creer un nouveau repository GitHub.
2. Ajouter les fichiers du dossier a ce repository.
3. Aller sur Vercel.
4. Importer le repository GitHub.
5. Laisser les reglages par defaut :
   - Framework preset : Other
   - Build command : vide
   - Output directory : vide
6. Cliquer sur Deploy.

Le site utilise `index.html` comme page principale.
