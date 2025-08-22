import { NextResponse } from "next/server";
import { getPostBySlug } from "../../lib/sanity";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    if (!slug) {
      return NextResponse.json(
        {
          success: false,
          message: "Slug manquant",
        },
        { status: 400 }
      );
    }

    console.log("Recherche de l'article avec le slug:", slug);

    const article = await getPostBySlug(slug);

    console.log("Article trouvé:", article);

    if (!article) {
      return NextResponse.json(
        {
          success: false,
          message: "Article non trouvé",
          slug: slug,
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Article trouvé",
      article: article,
    });
  } catch (error) {
    console.error("Erreur lors de la recherche:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Erreur lors de la recherche",
        error: error instanceof Error ? error.message : "Erreur inconnue",
      },
      { status: 500 }
    );
  }
}


