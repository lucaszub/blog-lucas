# 🚀 Lucas Zubiarrain - Portfolio & Blog

**Data Engineer passionné par la technologie et l'innovation**

## 👨‍💻 À propos de moi

Après une école de commerce, j'ai plongé dans le monde de la data. Spécialisé en **data engineering**, **analytics** et **développement web**, j'aime apprendre, partager et créer des solutions innovantes.

## 🛠️ Technologies & Compétences

### Data Engineering

- **Python** - Pandas, NumPy, Scikit-learn
- **SQL** - PostgreSQL, MySQL, BigQuery
- **Big Data** - Apache Spark, Hadoop
- **Orchestration** - Apache Airflow, Luigi
- **Cloud** - AWS, GCP, Azure

### Développement Web

- **Frontend** - React, Next.js, TypeScript
- **Backend** - Node.js, Python (FastAPI, Django)
- **CMS** - Sanity CMS
- **Styling** - Tailwind CSS, CSS Modules

### Outils & DevOps

- **Versioning** - Git, GitHub
- **Conteneurisation** - Docker, Kubernetes
- **CI/CD** - GitHub Actions, Vercel
- **Monitoring** - Prometheus, Grafana

## 📚 Blog & Contenu

Ce site présente mes articles sur :

- 🗄️ **Data Engineering** - Pipelines, ETL/ELT, architectures
- 📊 **Data Analytics** - Dashboards, métriques, visualisation
- 🤖 **Machine Learning** - ML, IA, modèles prédictifs
- 💻 **Développement Web** - Frameworks, bonnes pratiques
- 🎯 **Études de cas** - Projets concrets, retours d'expérience

## 🌐 Site Web

- **URL** : [lucaszubiarrain.com](https://lucaszubiarrain.com)
- **Studio CMS** : [lucaszubiarrain.com/studio](https://lucaszubiarrain.com/studio)
- **Blog** : [lucaszubiarrain.com/blog](https://lucaszubiarrain.com/blog)

## 📞 Contact

- **Email** : zubiarrainlucas@gmail.com
- **Téléphone** : +33 6 19 44 91 33
- **LinkedIn** : [lucaszubiarrain](https://www.linkedin.com/in/lucaszubiarrain)
- **GitHub** : [lucaszubiarrain](https://github.com/lucaszubiarrain)

## 🚀 Démarrage rapide

### Prérequis

- Node.js 18+
- npm ou yarn
- Compte Sanity

### Installation

```bash
# Cloner le projet
git clone https://github.com/lucaszubiarrain/portfolio-blog.git
cd portfolio-blog

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env.local
# Remplir avec vos informations Sanity

# Démarrer le serveur de développement
npm run dev
```

### Variables d'environnement

```bash
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=votre_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-08-22

# Tokens d'API
SANITY_API_TOKEN=votre_token_editor
SANITY_READ_TOKEN=votre_token_viewer

# Sécurité
NEXT_PUBLIC_SANITY_USE_CDN=true
SANITY_PREVIEW_SECRET=votre_secret_preview
```

## 🏗️ Architecture

- **Framework** : Next.js 14 (App Router)
- **CMS** : Sanity v3
- **Styling** : Tailwind CSS
- **Déploiement** : Vercel
- **Base de données** : Sanity (Headless CMS)

## 📁 Structure du projet

```
app/
├── components/          # Composants réutilisables
├── lib/                # Utilitaires et configuration
├── blog/               # Pages du blog
├── studio/             # Interface Sanity CMS
└── globals.css         # Styles globaux

sanity/
├── schemaTypes/        # Schémas de contenu
├── structure/          # Structure du studio
└── env.ts             # Configuration Sanity
```

## 🎨 Personnalisation

### Modifier les informations personnelles

Éditez les fichiers de configuration :

- `app/lib/site-config.ts` - Configuration générale du site
- `app/lib/contact-info.ts` - Informations de contact
- `app/lib/blog-categories.ts` - Catégories du blog

### Modifier le design

- `app/globals.css` - Styles globaux
- `tailwind.config.js` - Configuration Tailwind
- Composants dans `app/components/`

## 📝 Ajouter du contenu

1. **Accéder au studio** : `/studio`
2. **Créer un article** : "Create" → "Article"
3. **Remplir les champs** : Titre, description, contenu, catégorie
4. **Publier** : Cliquer sur "Publish"

## 🚀 Déploiement

### Vercel (Recommandé)

1. Connecter votre repo GitHub à Vercel
2. Configurer les variables d'environnement
3. Déployer automatiquement

### Autres plateformes

- **Netlify** : Compatible Next.js
- **Railway** : Déploiement simple
- **VPS** : Configuration manuelle

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

- 🐛 Signaler des bugs
- 💡 Proposer des améliorations
- 📝 Améliorer la documentation
- 🎨 Suggérer des améliorations UI/UX

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 🙏 Remerciements

- **Sanity** pour le CMS headless
- **Next.js** pour le framework React
- **Tailwind CSS** pour le styling
- **Vercel** pour l'hébergement

---

**Connectons-nous !** 🚀

[Email](mailto:zubiarrainlucas@gmail.com) • [LinkedIn](https://www.linkedin.com/in/lucaszubiarrain) • [GitHub](https://github.com/lucaszubiarrain)
