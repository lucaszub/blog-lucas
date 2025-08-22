import { NextResponse } from "next/server";
import { client } from "../../../sanity/lib/client";

export async function POST() {
  try {
    console.log("Création d'un article de test...");

    // Créer un article de test avec un slug simple
    const testPost = {
      _type: "post",
      title: "Article de test",
      slug: {
        _type: "slug",
        current: "article-test",
      },
      description: "Article de test pour diagnostiquer le problème",
      status: "published",
      category: "Data Engineering",
      publishedAt: new Date().toISOString(),
      readingTime: "2 min",
      author: "Lucas Zubiarrain",
      content: "<p>Contenu de test</p>",
    };

    const result = await client.create(testPost);

    console.log("Article de test créé:", result);

    return NextResponse.json({
      success: true,
      message: "Article de test créé",
      post: result,
    });
  } catch (error) {
    console.error("Erreur création article test:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Erreur création article test",
        error: error instanceof Error ? error.message : "Erreur inconnue",
      },
      { status: 500 }
    );
  }
}


