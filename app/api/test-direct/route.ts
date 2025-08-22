import { NextResponse } from "next/server";
import { client } from "../../../sanity/lib/client";

export async function GET() {
  try {
    console.log("Test direct du client Sanity...");

    // Test 1: Compter tous les posts
    const count = await client.fetch(`count(*[_type == "post"])`);
    console.log("Nombre total de posts:", count);

    // Test 2: Récupérer le premier post
    const firstPost = await client.fetch(`*[_type == "post"][0] {
      _id,
      title,
      slug,
      status
    }`);
    console.log("Premier post:", firstPost);

    // Test 3: Test avec le slug exact
    const exactSlug = "l'ia-apprentissage-du-code";
    console.log("Test avec le slug exact:", exactSlug);

    const postBySlug = await client.fetch(
      `*[_type == "post" && slug.current == $slug][0]`,
      {
        slug: exactSlug,
      }
    );
    console.log("Post trouvé par slug:", postBySlug);

    // Test 4: Test avec une requête plus simple
    const simpleQuery = await client.fetch(`*[_type == "post"] {
      _id,
      title,
      "slugValue": slug.current,
      status
    }`);
    console.log("Requête simple:", simpleQuery);

    return NextResponse.json({
      success: true,
      count: count,
      firstPost: firstPost,
      postBySlug: postBySlug,
      simpleQuery: simpleQuery,
    });
  } catch (error) {
    console.error("Erreur directe:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Erreur directe",
        error: error instanceof Error ? error.message : "Erreur inconnue",
      },
      { status: 500 }
    );
  }
}


