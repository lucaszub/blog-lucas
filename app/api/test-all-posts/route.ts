import { NextResponse } from "next/server";
import { getAllPosts } from "../../lib/sanity";

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
  content?: string;
};

export async function GET() {
  try {
    console.log("Test de getAllPosts...");
    
    const allPosts = await getAllPosts();
    console.log("Nombre d'articles récupérés:", allPosts.length);
    
    // Afficher tous les slugs récupérés
    const allSlugs = allPosts.map((post: SanityPost) => ({
      title: post.title,
      slug: post.slug.current,
      slugLength: post.slug.current.length
    }));
    
    console.log("Tous les slugs:", allSlugs);
    
    // Chercher l'article spécifique
    const targetSlug = "l'ia-apprentissage-du-code";
    const article = allPosts.find((art: SanityPost) => art.slug.current === targetSlug);
    
    console.log("Article trouvé:", article ? "OUI" : "NON");
    if (article) {
      console.log("Titre:", article.title);
      console.log("Slug:", article.slug.current);
      console.log("Has content:", !!article.content);
      console.log("Has coverImage:", !!article.coverImage);
      console.log("Has authorAvatar:", !!article.authorAvatar);
    }
    
    return NextResponse.json({
      success: true,
      totalPosts: allPosts.length,
      allSlugs: allSlugs,
      targetSlug: targetSlug,
      targetSlugLength: targetSlug.length,
      articleFound: !!article,
      article: article ? {
        title: article.title,
        slug: article.slug.current,
        hasContent: !!article.content,
        hasCoverImage: !!article.coverImage,
        hasAuthorAvatar: !!article.authorAvatar
      } : null
    });
    
  } catch (error) {
    console.error("Erreur getAllPosts:", error);
    
    return NextResponse.json({
      success: false,
      message: "Erreur getAllPosts",
      error: error instanceof Error ? error.message : "Erreur inconnue"
    }, { status: 500 });
  }
}
