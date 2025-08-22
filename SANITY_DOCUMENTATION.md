# 📚 Documentation Sanity CMS - Blog Lucas Zubiarrain

## 🎯 Vue d'ensemble

Ce projet utilise **Sanity CMS** pour gérer le contenu du blog. Sanity est un CMS headless moderne qui s'intègre parfaitement avec Next.js.

## 🚀 Démarrage rapide

### 1. Accéder à l'interface d'administration

```bash
npm run dev
# Puis aller sur : http://localhost:3007/studio
```

### 2. Créer votre premier article

- Cliquez sur **"Create"** → **"Article"**
- Remplissez tous les champs obligatoires
- Cliquez sur **"Publish"**

## 📝 Structure des articles

### Champs obligatoires

| Champ                   | Type          | Description                  | Validation                    |
| ----------------------- | ------------- | ---------------------------- | ----------------------------- |
| **Titre**               | Texte         | Titre principal de l'article | Max 100 caractères            |
| **Slug**                | Slug          | URL unique                   | Généré automatiquement        |
| **Description**         | Texte         | Résumé court                 | Max 200 caractères            |
| **Image de couverture** | Image         | Image principale             | Avec alt text                 |
| **Catégorie**           | Sélection     | Catégorie principale         | 7 options disponibles         |
| **Date de publication** | Date/Heure    | Date de publication          | Format ISO                    |
| **Temps de lecture**    | Sélection     | Temps estimé                 | 2, 3, 5, 7, 10, 15, 20 min    |
| **Auteur**              | Texte         | Nom de l'auteur              | Pré-rempli "Lucas Zubiarrain" |
| **Contenu**             | Contenu riche | Corps de l'article           | Éditeur Portable Text         |

### Champs optionnels

| Champ                  | Type    | Description                       |
| ---------------------- | ------- | --------------------------------- |
| **Avatar de l'auteur** | Image   | Photo de profil                   |
| **Tags**               | Array   | Mots-clés (séparés par virgules)  |
| **Extrait**            | Texte   | Résumé long pour aperçus          |
| **Article en vedette** | Booléen | Mettre en avant                   |
| **Titre SEO**          | Texte   | Titre optimisé pour Google        |
| **Description SEO**    | Texte   | Description optimisée pour Google |

## 🏷️ Catégories disponibles

1. **Data Engineering** - Pipelines, ETL/ELT, architectures
2. **Data Analytics** - Analyse, dashboards, métriques
3. **Machine Learning** - ML, IA, modèles prédictifs
4. **Tools & Technologies** - Outils, frameworks, technologies
5. **Best Practices** - Bonnes pratiques, méthodologies
6. **Career & Learning** - Carrière, apprentissage, formation
7. **Case Studies** - Études de cas, retours d'expérience

## ✍️ Éditeur de contenu riche

### Styles de texte

- **Normal** - Texte standard
- **H1** - Titre principal
- **H2** - Titre de section
- **H3** - Sous-titre
- **H4** - Sous-sous-titre
- **Quote** - Citation
- **Code** - Code inline

### Formatage

- **Gras** - Texte important
- **Italique** - Emphase
- **Code inline** - Snippets de code courts
- **Souligné** - Texte souligné
- **Barré** - Texte supprimé

### Listes

- **À puces** - Liste non ordonnée
- **Numérotée** - Liste ordonnée

### Liens

- **URL externe** - Liens vers d'autres sites
- **Lien interne** - Référence vers d'autres articles
- **Nouvel onglet** - Option pour ouvrir dans un nouvel onglet

### Images

- **Hotspot** - Ajuster le cadrage
- **Alt text** - Description pour l'accessibilité (obligatoire)
- **Légende** - Texte sous l'image

## 💻 Blocs de code

### Langages supportés

- Plain text, JavaScript, TypeScript
- Python, SQL, YAML, JSON
- HTML, CSS, Bash, Docker

### Fonctionnalités

- **Nom de fichier** - Optionnel
- **Lignes surlignées** - Numéros des lignes à mettre en évidence
- **Coloration syntaxique** - Automatique selon le langage

## 💬 Callouts

### Types disponibles

- **ℹ️ Info** - Information générale
- **⚠️ Warning** - Avertissement
- **❌ Error** - Erreur ou problème
- **✅ Success** - Succès ou validation
- **💡 Tip** - Conseil ou astuce

### Structure

- **Titre** - Optionnel
- **Contenu** - Texte riche avec formatage

## 🔄 Workflow de publication

### Statuts

1. **📝 Brouillon** - Article en cours de rédaction
2. **🔄 En révision** - Article prêt pour validation
3. **✅ Publié** - Article visible sur le site

### Processus recommandé

1. Créer l'article en mode **Brouillon**
2. Rédiger le contenu complet
3. Passer en **En révision** pour validation
4. Publier une fois validé

## 🖼️ Gestion des images

### Image de couverture

- **Format recommandé** : 16:9 (1200x675px)
- **Taille maximale** : 5MB
- **Formats supportés** : JPG, PNG, WebP, AVIF
- **Hotspot** : Cliquez sur l'image pour ajuster le cadrage

### Avatar de l'auteur

- **Format recommandé** : Carré (400x400px)
- **Taille maximale** : 2MB
- **Formats supportés** : JPG, PNG, WebP

### Images dans le contenu

- **Alt text obligatoire** - Pour l'accessibilité
- **Légende optionnelle** - Texte descriptif
- **Responsive** - S'adapte automatiquement aux écrans

## 🏗️ Architecture technique

### Fichiers de configuration

- `sanity.config.ts` - Configuration principale
- `sanity.cli.ts` - Configuration CLI
- `sanity/env.ts` - Variables d'environnement

### Schémas de contenu

- `postType.ts` - Structure des articles
- `blockContentType.ts` - Contenu riche
- `codeBlockType.ts` - Blocs de code
- `calloutType.ts` - Callouts
- `categoryType.ts` - Catégories
- `authorType.ts` - Auteurs

### Client et requêtes

- `client.ts` - Client Sanity configuré
- `queries.ts` - Requêtes GROQ prêtes à l'emploi

## 🔍 Requêtes GROQ disponibles

### Articles

- `allPostsQuery` - Tous les articles publiés
- `postBySlugQuery` - Article par slug
- `featuredPostsQuery` - Articles en vedette
- `recentPostsQuery` - Articles récents (limite)
- `suggestedPostsQuery` - Articles suggérés

### Catégories

- `postsByCategoryQuery` - Articles par catégorie
- `categoriesWithCountQuery` - Statistiques par catégorie

## 🚨 Bonnes pratiques

### Rédaction

- **Titre accrocheur** - Max 100 caractères
- **Description claire** - Max 200 caractères
- **Contenu structuré** - Utilisez les titres H2, H3, H4
- **Images optimisées** - Compressez avant upload
- **Alt text descriptif** - Pour l'accessibilité

### Organisation

- **Tags pertinents** - 3-5 tags par article
- **Catégorie appropriée** - Une seule catégorie principale
- **Temps de lecture réaliste** - Estimez correctement
- **Statut cohérent** - Suivez le workflow

### SEO

- **Titre SEO** - Optimisé pour les moteurs de recherche
- **Description SEO** - Résumé pour Google
- **Tags cohérents** - Mots-clés pertinents
- **Images optimisées** - Avec alt text descriptif

## 🛠️ Dépannage

### Problèmes courants

1. **Image ne s'affiche pas** - Vérifiez l'alt text
2. **Contenu non sauvegardé** - Cliquez sur "Publish"
3. **Slug invalide** - Le titre contient des caractères spéciaux
4. **Validation échoue** - Vérifiez les champs obligatoires

### Support

- **Documentation Sanity** : https://www.sanity.io/docs
- **GROQ Query Builder** : https://www.sanity.io/docs/groq
- **Portable Text** : https://portabletext.org

## 📱 Interface mobile

L'interface Sanity Studio est entièrement responsive et fonctionne sur :

- **Ordinateurs** - Interface complète
- **Tablettes** - Interface adaptée
- **Smartphones** - Interface mobile optimisée

## 🔐 Sécurité

- **Authentification** - Connexion requise
- **Permissions** - Contrôle d'accès par rôle
- **Validation** - Vérification des données
- **Backup** - Sauvegarde automatique

---

## 🎉 Prêt à commencer ?

1. **Démarrez** votre serveur de développement
2. **Accédez** à l'interface Sanity Studio
3. **Créez** votre premier article
4. **Publiez** et partagez votre contenu !

**Bonne rédaction ! 🚀**


