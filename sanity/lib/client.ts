import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

// Configuration par défaut si les variables d'environnement ne sont pas définies
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "7xwbkfl9";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-12-19";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_TOKEN, // Pour les opérations d'écriture
});

// Builder pour les images Sanity
const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Configuration pour les images
export const imageConfig = {
  // Formats supportés
  formats: ["webp", "avif", "jpg", "png"],
  // Tailles par défaut
  sizes: {
    thumbnail: "300x200",
    small: "600x400",
    medium: "800x600",
    large: "1200x800",
    hero: "1920x1080",
  },
  // Qualité par défaut
  quality: 80,
};
