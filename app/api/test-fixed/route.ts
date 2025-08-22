import { NextResponse } from "next/server";
import { client } from "../../../sanity/lib/client";

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

    console.log("Test avec la requête GROQ modifiée, slug:", slug);

    // Test avec la requête modifiée (string(slug.current))
    const post = await client.fetch(
      `*[_type == "post" && string(slug.current) == $slug && status == "published"][0]`,
      {
        slug: slug,
      }
    );

    console.log("Post trouvé:", post);

    if (!post) {
      return NextResponse.json(
        {
          success: false,
          message: "Article non trouvé avec la requête modifiée",
          slug: slug,
        },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Article trouvé avec la requête modifiée !",
      post: post,
    });
  } catch (error) {
    console.error("Erreur requête modifiée:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Erreur requête modifiée",
        error: error instanceof Error ? error.message : "Erreur inconnue",
      },
      { status: 500 }
    );
  }
}


