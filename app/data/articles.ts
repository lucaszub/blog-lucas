// Types pour les articles
export interface Article {
  slug: string;
  title: string;
  description: string;
  content: string;
  author: string;
  authorAvatar: string;
  publishedAt: string;
  readingTime: string;
  category: string;
  coverImage: string;
  tags: string[];
}

// Données des articles (en production, cela viendrait d'une base de données ou CMS)
export const articles: Record<string, Article> = {
  "orchestrer-pipelines-dbt-airflow": {
    slug: "orchestrer-pipelines-dbt-airflow",
    title: "Orchestrer des pipelines de données avec dbt + Airflow",
    description:
      "Une approche pragmatique pour structurer vos modèles, gérer les dépendances et automatiser les déploiements.",
    content: `
      <p>
        <strong>Automatiser, fiabiliser, documenter.</strong> Orchestrer ses
        pipelines de données est devenu indispensable pour toute équipe data
        qui souhaite scaler sans sacrifier la qualité. Voici une approche
        pragmatique pour coupler <span class="text-zinc-900/90 font-medium">dbt</span> et <span class="text-zinc-900/90 font-medium">Airflow</span> dans
        vos workflows quotidiens.
      </p>

      <blockquote>
        <p>
          «&nbsp;Tout ce qui peut être automatisé doit l&apos;être.&nbsp;»
        </p>
      </blockquote>

      <h2 id="pourquoi-orchestrer">Pourquoi orchestrer ses pipelines ?</h2>
      <p>
        À mesure que les flux de données se complexifient, les dépendances,
        l&apos;ordre d&apos;exécution, la gestion des échecs et la
        documentation deviennent critiques. Orchestrer, c&apos;est :
      </p>
      <ul>
        <li>
          Gérer l&apos;ordre et la fréquence d&apos;exécution des jobs
        </li>
        <li>Monitorer les erreurs et les performances</li>
        <li>Centraliser la configuration et la documentation</li>
      </ul>

      <h2 id="dbt-pour-les-transformations">
        dbt pour les transformations
      </h2>
      <p>
        <strong>dbt (data build tool)</strong> permet de versionner, tester
        et documenter vos modèles de données SQL. Il s&apos;intègre
        parfaitement dans des pipelines modernes grâce à sa simplicité et sa
        puissance :
      </p>
      <ol>
        <li>Définition des modèles comme du code</li>
        <li>Tests de qualité intégrés</li>
        <li>Documentation automatique</li>
      </ol>

      <h2 id="airflow-pour-l-orchestration">
        Airflow pour l&apos;orchestration
      </h2>
      <p>
        Utiliser <span class="text-zinc-900/90 font-medium">Airflow</span> permet
        de planifier et surveiller l&apos;exécution de chaque étape. Son
        atout principal : la gestion des dépendances et des retries.
      </p>
      <pre><code class="language-python">
from airflow import DAG
from airflow.operators.bash import BashOperator

with DAG("dbt_pipeline", schedule_interval="@daily") as dag:
    run_dbt = BashOperator(
        task_id="run_dbt_models",
        bash_command="cd /app/dbt && dbt run"
    )
      </code></pre>

      <h2 id="tips">Tips pour une intégration propre</h2>
      <ul>
        <li>Versionner vos scripts dbt et vos DAGs Airflow ensemble</li>
        <li>Utiliser des variables d&apos;environnement pour la config</li>
        <li>Automatiser les tests à chaque build</li>
      </ul>

      <h2 id="conclusion">Conclusion</h2>
      <p>
        L&apos;association <strong>dbt + Airflow</strong> offre une base
        solide pour des pipelines robustes, testés, documentés, et
        facilement audités. N&apos;hésitez pas à partager vos retours
        d&apos;expérience ou à poser des questions en commentaire&nbsp;!
      </p>
    `,
    author: "Lucas Zubiarrain",
    authorAvatar:
      "https://ui-avatars.com/api/?name=Lucas+Zubiarrain&background=10b981&color=fff&size=40",
    publishedAt: "12 nov. 2024",
    readingTime: "7 min",
    category: "Guide",
    coverImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    tags: ["dbt", "Airflow", "pipelines", "orchestration"],
  },
  "etl-vs-elt-modern-data-stack": {
    slug: "etl-vs-elt-modern-data-stack",
    title:
      "ETL vs ELT : choisir la meilleure approche pour votre modern data stack",
    description:
      "Découvrez les différences fondamentales entre ETL et ELT, et comment choisir la stratégie la plus adaptée à vos besoins data.",
    content: `
      <p>
        <strong>ETL ou ELT ?</strong> Cette question fondamentale se pose à toute équipe data qui souhaite construire un pipeline moderne et efficace.
      </p>

      <h2 id="definitions">Définitions</h2>
      <p>
        <strong>ETL (Extract, Transform, Load)</strong> : Les données sont transformées avant d&apos;être chargées dans la destination finale.
      </p>
      <p>
        <strong>ELT (Extract, Load, Transform)</strong> : Les données sont d&apos;abord chargées, puis transformées dans la destination.
      </p>

      <h2 id="avantages-inconvenients">Avantages et inconvénients</h2>
      <h3>ETL</h3>
      <ul>
        <li>✅ Contrôle total sur les transformations</li>
        <li>✅ Optimisation des performances</li>
        <li>❌ Complexité de mise en place</li>
        <li>❌ Moins de flexibilité</li>
      </ul>

      <h3>ELT</h3>
      <ul>
        <li>✅ Flexibilité maximale</li>
        <li>✅ Simplicité de mise en place</li>
        <li>❌ Coûts de stockage</li>
        <li>❌ Dépendance aux capacités de la destination</li>
      </ul>

      <h2 id="conclusion">Quand choisir quoi ?</h2>
      <p>
        <strong>Choisissez ETL si :</strong> Vous avez des contraintes de performance strictes et des transformations complexes.
      </p>
      <p>
        <strong>Choisissez ELT si :</strong> Vous voulez de la flexibilité et que votre destination (data warehouse) supporte bien les transformations.
      </p>
    `,
    author: "Lucas Zubiarrain",
    authorAvatar:
      "https://ui-avatars.com/api/?name=Lucas+Zubiarrain&background=10b981&color=fff&size=40",
    publishedAt: "28 oct. 2024",
    readingTime: "6 min",
    category: "Astuce",
    coverImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop",
    tags: ["ETL", "ELT", "modern data stack", "pipeline"],
  },
  "monitoring-data-pipelines": {
    slug: "monitoring-data-pipelines",
    title: "Monitoring de pipelines data : outils et bonnes pratiques",
    description:
      "Apprenez à surveiller la santé de vos pipelines grâce à des outils open source et des alertes pertinentes.",
    content: `
      <p>
        <strong>Le monitoring des pipelines de données</strong> est crucial pour maintenir la qualité et la fiabilité de vos données.
      </p>

      <h2 id="pourquoi-monitorer">Pourquoi monitorer ?</h2>
      <ul>
        <li>Détecter les échecs rapidement</li>
        <li>Surveiller les performances</li>
        <li>Maintenir la qualité des données</li>
        <li>Optimiser les coûts</li>
      </ul>

      <h2 id="outils-essentiels">Outils essentiels</h2>
      <h3>Monitoring de base</h3>
      <ul>
        <li><strong>Airflow</strong> : Interface web intégrée</li>
        <li><strong>Grafana</strong> : Dashboards et alertes</li>
        <li><strong>Prometheus</strong> : Métriques et alertes</li>
      </ul>

      <h3>Qualité des données</h3>
      <ul>
        <li><strong>Great Expectations</strong> : Tests de qualité</li>
        <li><strong>dbt tests</strong> : Tests intégrés</li>
        <li><strong>Monte Carlo</strong> : Détection automatique</li>
      </ul>

      <h2 id="bonnes-pratiques">Bonnes pratiques</h2>
      <ol>
        <li>Définir des métriques clés (KPIs)</li>
        <li>Configurer des alertes pertinentes</li>
        <li>Documenter les procédures de résolution</li>
        <li>Réviser régulièrement les seuils</li>
      </ol>
    `,
    author: "Lucas Zubiarrain",
    authorAvatar:
      "https://ui-avatars.com/api/?name=Lucas+Zubiarrain&background=10b981&color=fff&size=40",
    publishedAt: "5 nov. 2024",
    readingTime: "5 min",
    category: "Pratique",
    coverImage:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600&auto=format&fit=crop",
    tags: ["monitoring", "pipelines", "alertes", "qualité"],
  },
  "dbt-tests-qualite": {
    slug: "dbt-tests-qualite",
    title: "Tests de qualité avec dbt : comment les configurer efficacement",
    description:
      "Découvrez comment automatiser les tests de vos modèles dbt pour sécuriser vos transformations de données.",
    content: `
      <p>
        <strong>Les tests de qualité dans dbt</strong> sont essentiels pour garantir la fiabilité de vos données.
      </p>

      <h2 id="types-de-tests">Types de tests dbt</h2>
      <h3>Tests génériques</h3>
      <ul>
        <li><strong>not_null</strong> : Vérifie qu&apos;une colonne n&apos;est jamais vide</li>
        <li><strong>unique</strong> : Vérifie l&apos;unicité des valeurs</li>
        <li><strong>accepted_values</strong> : Vérifie que les valeurs sont dans une liste</li>
        <li><strong>relationships</strong> : Vérifie les clés étrangères</li>
      </ul>

      <h3>Tests personnalisés</h3>
      <p>
        Créez vos propres tests SQL pour des cas spécifiques à votre métier.
      </p>

      <h2 id="configuration">Configuration des tests</h2>
      <p>
        Configurez vos tests dans le fichier <code>schema.yml</code> de chaque modèle :
      </p>
      <pre><code class="language-yaml">
version: 2

models:
  - name: my_model
    columns:
      - name: id
        tests:
          - not_null
          - unique
      - name: status
        tests:
          - accepted_values:
              values: ['active', 'inactive', 'pending']
      </code></pre>

      <h2 id="execution">Exécution des tests</h2>
      <p>
        Lancez vos tests avec la commande :
      </p>
      <pre><code class="language-bash">
dbt test
      </code></pre>

      <h2 id="integration">Intégration dans vos pipelines</h2>
      <p>
        Intégrez les tests dans vos workflows Airflow ou autres orchestrateurs pour une validation automatique.
      </p>
    `,
    author: "Lucas Zubiarrain",
    authorAvatar:
      "https://ui-avatars.com/api/?name=Lucas+Zubiarrain&background=10b981&color=fff&size=40",
    publishedAt: "14 sept. 2024",
    readingTime: "4 min",
    category: "Qualité",
    coverImage:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?q=80&w=600&auto=format&fit=crop",
    tags: ["dbt", "tests", "qualité", "validation"],
  },
};


