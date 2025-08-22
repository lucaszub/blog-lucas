import { NextResponse } from "next/server";
import { client } from "../../../sanity/lib/client";

export async function GET() {
  try {
    const exactSlug = "l'ia-apprentissage-du-code";
    console.log("Test avec le slug exact:", exactSlug);

    // Test 1: Comparaison directe
    const test1 = await client.fetch(
      `*[_type == "post" && slug.current == $slug][0]`,
      {
        slug: exactSlug,
      }
    );
    console.log("Test 1 (comparaison directe):", test1);

    // Test 2: Récupérer tous les slugs pour debug
    const allSlugs = await client.fetch(`*[_type == "post"] {
      _id,
      title,
      "slugString": string(slug.current),
      slug
    }`);
    console.log("Tous les slugs:", allSlugs);

    // Test 3: Test avec le slug comme string
    const test3 = await client.fetch(
      `*[_type == "post" && string(slug.current) == $slug][0]`,
      {
        slug: exactSlug,
      }
    );
    console.log("Test 3 (string conversion):", test3);

    // Test 4: Test avec une requête plus simple
    const test4 = await client.fetch(
      `*[_type == "post" && slug.current == "l'ia-apprentissage-du-code"][0]`
    );
    console.log("Test 4 (slug en dur):", test4);

    return NextResponse.json({
      success: true,
      exactSlug: exactSlug,
      test1: test1,
      test3: test3,
      test4: test4,
      allSlugs: allSlugs,
    });
  } catch (error) {
    console.error("Erreur test slug:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Erreur test slug",
        error: error instanceof Error ? error.message : "Erreur inconnue",
      },
      { status: 500 }
    );
  }
}
