# 📊 Vercel Analytics - Configuration & Utilisation

## 🎯 Vue d'ensemble

Vercel Analytics a été intégré à votre projet pour le suivi des performances et des métriques de votre site `lucaszubiarrain.com`.

## 🚀 Installation

Le package `@vercel/analytics` a été installé automatiquement :

```bash
npm install @vercel/analytics
```

## ⚙️ Configuration

### 1. **Composant principal**

Le composant `VercelAnalytics` est intégré dans `app/layout.tsx` et s'active automatiquement en production.

### 2. **Variables d'environnement**

Ajoutez ces variables dans votre `.env.local` et Vercel :

```bash
# Vercel Analytics
NEXT_PUBLIC_ANALYTICS_DEBUG=false
VERCEL_ANALYTICS_ID=votre_id_analytics
```

## 📈 Métriques collectées

### **Métriques automatiques**

- **Pages vues** - Chaque visite de page
- **Temps de chargement** - Performance des pages
- **Géolocalisation** - Pays/région des visiteurs
- **Appareils** - Desktop, mobile, tablette
- **Navigateurs** - Chrome, Firefox, Safari, etc.

### **Événements personnalisés**

- **`blog_loaded`** - Chargement du blog
- **`page_performance`** - Métriques de performance détaillées

## 🔍 Dashboard Vercel

### **Accéder aux analytics**

1. Allez sur [vercel.com](https://vercel.com)
2. Sélectionnez votre projet `lucaszubiarrain`
3. Cliquez sur **"Analytics"** dans le menu

### **Métriques disponibles**

- **Visiteurs** - Nombre de visiteurs uniques
- **Pages vues** - Total des pages consultées
- **Temps moyen** - Temps passé sur le site
- **Taux de rebond** - Pourcentage de visiteurs qui partent
- **Top pages** - Pages les plus populaires
- **Top pays** - Géolocalisation des visiteurs

## 🛠️ Personnalisation

### **Ajouter des événements personnalisés**

Utilisez la fonction `window.va()` dans vos composants :

```typescript
// Dans un composant React
useEffect(() => {
  if (typeof window !== "undefined" && window.va) {
    window.va("event", "article_read", {
      article_title: "Mon Article",
      category: "Data Engineering",
      reading_time: "5 min",
    });
  }
}, []);
```

### **Tracker les interactions utilisateur**

```typescript
// Clic sur un bouton
const handleButtonClick = () => {
  if (window.va) {
    window.va("event", "button_click", {
      button_name: "contact",
      page: window.location.pathname,
    });
  }
};
```

## 📱 Intégration avec le blog

### **Tracker les articles**

- **Lecture d'articles** - Temps passé, catégorie
- **Partage social** - Plateformes utilisées
- **Recherche** - Mots-clés recherchés
- **Navigation** - Parcours des utilisateurs

### **Métriques de contenu**

- **Articles populaires** - Plus lus, partagés
- **Catégories préférées** - Data Engineering, ML, etc.
- **Temps de lecture** - Engagement des visiteurs

## 🔒 Confidentialité

### **Conformité RGPD**

- **Aucune donnée personnelle** collectée
- **Cookies anonymes** uniquement
- **Respect de la vie privée** des utilisateurs

### **Options de désactivation**

Les utilisateurs peuvent désactiver le tracking via :

- Extensions de navigateur
- Paramètres de confidentialité
- Mode navigation privée

## 📊 Exemples d'utilisation

### **Suivi des performances**

```typescript
// Mesurer le temps de chargement
window.addEventListener("load", () => {
  const loadTime = performance.now();
  if (window.va) {
    window.va("event", "page_load_time", {
      duration: loadTime,
      page: window.location.pathname,
    });
  }
});
```

### **Suivi des conversions**

```typescript
// Formulaire de contact
const handleContactSubmit = () => {
  if (window.va) {
    window.va("event", "contact_form_submit", {
      form_type: "contact",
      page: window.location.pathname,
    });
  }
};
```

## 🚀 Déploiement

### **Vercel (Recommandé)**

1. **Connectez** votre repo GitHub
2. **Configurez** les variables d'environnement
3. **Déployez** - Analytics s'active automatiquement

### **Autres plateformes**

- **Netlify** - Compatible avec Vercel Analytics
- **VPS** - Configuration manuelle requise

## 📈 Optimisation

### **Améliorer les métriques**

- **Core Web Vitals** - LCP, FID, CLS
- **Temps de chargement** - Optimisation des images
- **UX** - Navigation intuitive, contenu engageant

### **Analyser les données**

- **Tendances** - Évolution du trafic
- **Comportement** - Parcours utilisateur
- **Performance** - Pages lentes à optimiser

## 🔧 Dépannage

### **Problèmes courants**

1. **Analytics ne fonctionne pas** - Vérifiez les variables d'environnement
2. **Données manquantes** - Attendez 24-48h pour les premières données
3. **Erreurs console** - Vérifiez la version de Next.js

### **Support**

- **Documentation Vercel** : [vercel.com/docs/analytics](https://vercel.com/docs/analytics)
- **GitHub** : [github.com/vercel/analytics](https://github.com/vercel/analytics)

## 🎉 Résultat

Avec Vercel Analytics, vous obtenez :

- ✅ **Métriques en temps réel** de votre site
- ✅ **Analyses détaillées** du comportement utilisateur
- ✅ **Suivi des performances** et optimisation
- ✅ **Dashboard intégré** dans Vercel
- ✅ **Conformité RGPD** et respect de la vie privée

---

**Votre site est maintenant équipé d'analytics professionnels ! 🚀**
