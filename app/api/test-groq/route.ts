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

    console.log("Test GROQ avec le slug:", slug);

    // Test 1: Requête simple sans filtre status
    const test1 = await client.fetch(
      `*[_type == "post" && slug.current == $slug][0]`,
      { slug }
    );
    console.log("Test 1 (sans status):", test1);

    // Test 2: Requête avec filtre status
    const test2 = await client.fetch(
      `*[_type == "post" && slug.current == $slug && status == "published"][0]`,
      { slug }
    );
    console.log("Test 2 (avec status):", test2);

    // Test 3: Tous les posts pour voir leur status
    const allPosts = await client.fetch(`*[_type == "post"] {
      _id,
      title,
      slug,
      status
    }`);
    console.log("Tous les posts:", allPosts);

    return NextResponse.json({
      success: true,
      slug: slug,
      test1: test1,
      test2: test2,
      allPosts: allPosts,
    });
  } catch (error) {
    console.error("Erreur GROQ:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Erreur GROQ",
        error: error instanceof Error ? error.message : "Erreur inconnue",
      },
      { status: 500 }
    );
  }
}


