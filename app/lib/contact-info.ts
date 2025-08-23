export const contactInfo = {
  // Informations personnelles
  name: "Lucas Zubiarrain",
  title: "Data Engineer & Développeur Web",
  location: "France",

  // Contact direct
  email: "zubiarrainlucas@gmail.com",
  phone: "+33 6 19 44 91 33",
  phoneFormatted: "+33 6 19 44 91 33",

  // Réseaux sociaux professionnels
  linkedin: {
    url: "https://www.linkedin.com/in/lucaszubiarrain",
    username: "lucaszubiarrain",
    displayName: "lucaszubiarrain",
  },

  // Autres réseaux (à ajouter si vous en avez)
  github: {
    url: "https://github.com/lucaszubiarrain",
    username: "lucaszubiarrain",
    displayName: "lucaszubiarrain",
  },

  twitter: {
    url: "https://twitter.com/lucaszubiarrain",
    username: "lucaszubiarrain",
    displayName: "@lucaszubiarrain",
  },

  // Informations professionnelles
  profession: "Data Engineer",
  specialization: "Data Engineering, Analytics & Web Development",
  background: "École de commerce",

  // Disponibilité
  availability: "Disponible pour des opportunités",
  freelance: "Ouvert aux projets freelance",
  collaboration: "Ouvert aux collaborations",

  // Services proposés
  services: [
    "Data Engineering",
    "Data Analytics",
    "Machine Learning",
    "Développement Web",
    "Consulting Data",
    "Formation & Mentoring",
  ],

  // Compétences techniques
  technicalSkills: [
    "Python",
    "SQL",
    "JavaScript/TypeScript",
    "Apache Spark",
    "Airflow",
    "Pandas",
    "Next.js",
    "React",
    "Node.js",
    "Docker",
    "AWS",
    "Git",
  ],

  // Langues
  languages: [
    { name: "Français", level: "Langue maternelle" },
    { name: "Anglais", level: "Courant" },
    { name: "Espagnol", level: "Intermédiaire" },
  ],
};

export const getContactMethod = (
  type: "email" | "phone" | "linkedin" | "github" | "twitter"
) => {
  switch (type) {
    case "email":
      return {
        label: "Email",
        value: contactInfo.email,
        href: `mailto:${contactInfo.email}`,
        icon: "mail",
      };
    case "phone":
      return {
        label: "Téléphone",
        value: contactInfo.phoneFormatted,
        href: `tel:${contactInfo.phone}`,
        icon: "phone",
      };
    case "linkedin":
      return {
        label: "LinkedIn",
        value: contactInfo.linkedin.displayName,
        href: contactInfo.linkedin.url,
        icon: "linkedin",
      };
    case "github":
      return {
        label: "GitHub",
        value: contactInfo.github.displayName,
        href: contactInfo.github.url,
        icon: "github",
      };
    case "twitter":
      return {
        label: "Twitter",
        value: contactInfo.twitter.displayName,
        href: contactInfo.twitter.url,
        icon: "twitter",
      };
    default:
      return null;
  }
};
