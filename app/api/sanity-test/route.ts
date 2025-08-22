import { NextResponse } from "next/server";
import { client } from "../../../sanity/lib/client";

export async function GET() {
  try {
    // Test simple de connexion Sanity
    const testQuery = `*[_type == "post"][0...3] {
      _id,
      title,
      slug,
      status,
      content,
      description,
      coverImage,
      category,
      publishedAt,
      readingTime,
      author
    }`;

    const posts = await client.fetch(testQuery);

    return NextResponse.json({
      success: true,
      message: "Connexion Sanity réussie",
      posts: posts,
      count: posts.length,
    });
  } catch (error) {
    console.error("Erreur Sanity:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Erreur de connexion Sanity",
        error: error instanceof Error ? error.message : "Erreur inconnue",
      },
      { status: 500 }
    );
  }
}
