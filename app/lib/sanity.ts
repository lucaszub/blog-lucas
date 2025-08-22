import { client } from "../../sanity/lib/client";
import {
  allPostsQuery,
  postBySlugQuery,
  recentPostsQuery,
} from "../../sanity/lib/queries";

// Type pour les articles Sanity
type SanityPost = {
  _id: string;
  title: string;
  slug: { current: string };
  description: string;
  coverImage: { asset: { _ref: string }; alt?: string };
  category: string;
  publishedAt: string;
  readingTime: string;
  author: string;
  authorAvatar?: { asset: { _ref: string }; alt?: string };
  tags?: string[];
  excerpt?: string;
  featured?: boolean;
};

// Récupérer tous les articles publiés
export async function getAllPosts() {
  try {
    const posts = await client.fetch(allPostsQuery);
    return posts || [];
  } catch (error) {
    console.error("Erreur lors de la récupération des articles:", error);
    return [];
  }
}

// Récupérer un article par slug
export async function getPostBySlug(slug: string) {
  try {
    const post = await client.fetch(postBySlugQuery, { slug });
    return post || null;
  } catch (error) {
    console.error(
      `Erreur lors de la récupération de l'article ${slug}:`,
      error
    );
    return null;
  }
}

// Récupérer les articles récents (limite)
export async function getRecentPosts(limit: number = 3) {
  try {
    const posts = await client.fetch(recentPostsQuery, { limit });
    return posts || [];
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des articles récents:",
      error
    );
    return [];
  }
}

// Récupérer les articles suggérés (excluant l'article actuel)
export async function getSuggestedPosts(
  currentSlug: string,
  limit: number = 3
) {
  try {
    const posts = await client.fetch(recentPostsQuery, { limit: limit + 3 });
    // Filtrer pour exclure l'article actuel et limiter le nombre
    const filteredPosts = posts
      .filter((post: SanityPost) => post.slug.current !== currentSlug)
      .slice(0, limit);
    return filteredPosts;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des articles suggérés:",
      error
    );
    return [];
  }
}
