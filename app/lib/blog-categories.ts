export const blogCategories = [
  {
    id: "data-engineering",
    name: "Data Engineering",
    description:
      "Pipelines de données, ETL/ELT, architectures data, Apache Spark, Airflow",
    color: "emerald",
    icon: "database",
    slug: "data-engineering",
  },
  {
    id: "data-analytics",
    name: "Data Analytics",
    description:
      "Analyse de données, dashboards, métriques, visualisation, SQL",
    color: "blue",
    icon: "bar-chart-3",
    slug: "data-analytics",
  },
  {
    id: "machine-learning",
    name: "Machine Learning",
    description:
      "ML, IA, modèles prédictifs, scikit-learn, TensorFlow, PyTorch",
    color: "purple",
    icon: "brain",
    slug: "machine-learning",
  },
  {
    id: "web-development",
    name: "Développement Web",
    description:
      "Next.js, React, TypeScript, développement frontend et backend",
    color: "indigo",
    icon: "code",
    slug: "web-development",
  },
  {
    id: "tools-technologies",
    name: "Outils & Technologies",
    description: "Frameworks, bibliothèques, outils de développement, DevOps",
    color: "orange",
    icon: "wrench",
    slug: "tools-technologies",
  },
  {
    id: "best-practices",
    name: "Bonnes Pratiques",
    description: "Méthodologies, architecture, code quality, performance",
    color: "teal",
    icon: "check-circle",
    slug: "best-practices",
  },
  {
    id: "career-learning",
    name: "Carrière & Apprentissage",
    description: "Formation, évolution professionnelle, conseils carrière",
    color: "pink",
    icon: "graduation-cap",
    slug: "career-learning",
  },
  {
    id: "case-studies",
    name: "Études de Cas",
    description: "Projets concrets, retours d'expérience, solutions réelles",
    color: "red",
    icon: "folder-open",
    slug: "case-studies",
  },
];

export const getCategoryById = (id: string) => {
  return blogCategories.find((category) => category.id === id);
};

export const getCategoryBySlug = (slug: string) => {
  return blogCategories.find((category) => category.slug === slug);
};

export const getCategoryColor = (id: string) => {
  const category = getCategoryById(id);
  return category?.color || "gray";
};
