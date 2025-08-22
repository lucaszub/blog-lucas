import { groq } from "next-sanity";

// Requête pour récupérer tous les articles publiés
export const allPostsQuery = groq`
  *[_type == "post" && status == "published"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    coverImage,
    category,
    publishedAt,
    readingTime,
    author,
    authorAvatar,
    tags,
    excerpt,
    featured,
    content
  }
`;

// Requête pour récupérer un article par slug
export const postBySlugQuery = groq`
  *[_type == "post" && string(slug.current) == $slug && status == "published"][0] {
    _id,
    title,
    slug,
    description,
    coverImage,
    category,
    publishedAt,
    readingTime,
    author,
    authorAvatar,
    tags,
    excerpt,
    featured,
    content
  }
`;

// Requête pour récupérer les articles en vedette
export const featuredPostsQuery = groq`
  *[_type == "post" && featured == true && status == "published"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    coverImage,
    category,
    publishedAt,
    readingTime,
    author,
    authorAvatar,
    tags,
    excerpt
  }
`;

// Requête pour récupérer les articles par catégorie
export const postsByCategoryQuery = groq`
  *[_type == "post" && category == $category && status == "published"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    description,
    coverImage,
    category,
    publishedAt,
    readingTime,
    author,
    authorAvatar,
    tags,
    excerpt
  }
`;

// Requête pour récupérer les articles récents (limite)
export const recentPostsQuery = groq`
  *[_type == "post" && status == "published"] | order(publishedAt desc)[0...$limit] {
    _id,
    title,
    slug,
    description,
    coverImage,
    category,
    publishedAt,
    readingTime,
    author,
    authorAvatar,
    tags,
    excerpt
  }
`;

// Requête pour récupérer les articles suggérés (excluant l'article actuel)
export const suggestedPostsQuery = groq`
  *[_type == "post" && status == "published" && slug.current != $currentSlug] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    description,
    coverImage,
    category,
    publishedAt,
    readingTime,
    author,
    authorAvatar,
    tags,
    excerpt
  }
`;

// Requête pour récupérer les catégories avec le nombre d'articles
export const categoriesWithCountQuery = groq`
  {
    "categories": *[_type == "post" && status == "published"] {
      category
    },
    "counts": {
      "total": count(*[_type == "post" && status == "published"]),
      "byCategory": {
        "Data Engineering": count(*[_type == "post" && category == "Data Engineering" && status == "published"]),
        "Data Analytics": count(*[_type == "post" && category == "Data Analytics" && status == "published"]),
        "Machine Learning": count(*[_type == "post" && category == "Machine Learning" && status == "published"]),
        "Tools & Technologies": count(*[_type == "post" && category == "Tools & Technologies" && status == "published"]),
        "Best Practices": count(*[_type == "post" && category == "Best Practices" && status == "published"]),
        "Career & Learning": count(*[_type == "post" && category == "Career & Learning" && status == "published"]),
        "Case Studies": count(*[_type == "post" && category == "Case Studies" && status == "published"])
      }
    }
  }
`;
