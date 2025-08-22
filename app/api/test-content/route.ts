import { NextResponse } from "next/server";
import { getAllPosts } from "../../lib/sanity";

export async function GET() {
  try {
    const allPosts = await getAllPosts();

    if (allPosts.length === 0) {
      return NextResponse.json({
        success: false,
        message: "Aucun article trouvé",
      });
    }

    const article = allPosts[0]; // Premier article

    return NextResponse.json({
      success: true,
      article: {
        title: article.title,
        slug: article.slug.current,
        hasContent: !!article.content,
        contentType: typeof article.content,
        contentValue: article.content,
        hasCoverImage: !!article.coverImage,
        hasAuthorAvatar: !!article.authorAvatar,
      },
    });
  } catch (error) {
    console.error("Erreur test content:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Erreur test content",
        error: error instanceof Error ? error.message : "Erreur inconnue",
      },
      { status: 500 }
    );
  }
}
