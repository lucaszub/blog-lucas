import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getSuggestedPosts } from "../../lib/sanity";
import { urlFor } from "../../../sanity/lib/client";
import PortableTextRenderer from "../../components/PortableTextRenderer";

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

// Fonction pour générer les métadonnées
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Décoder l'URL pour gérer les caractères spéciaux (apostrophes, etc.)
  const decodedSlug = decodeURIComponent(slug);

  // Approche alternative : récupérer tous les articles et filtrer par slug
  const allArticles = await getAllPosts();
  const article = allArticles.find(
    (art: SanityPost) => art.slug.current === decodedSlug
  );

  if (!article) {
    return {
      title: "Article non trouvé",
      description: "L'article demandé n'existe pas.",
    };
  }

  return {
    title: `${article.title} — Lucas Zubiarrain`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author],
      images: [urlFor(article.coverImage).url()],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [urlFor(article.coverImage).url()],
    },
  };
}

// Fonction pour générer les paramètres statiques
export async function generateStaticParams() {
  // Pour l'instant, on retourne un tableau vide car on ne peut pas pré-générer
  // les pages sans connaître tous les slugs disponibles
  return [];
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Décoder l'URL pour gérer les caractères spéciaux (apostrophes, etc.)
  const decodedSlug = decodeURIComponent(slug);

  // Approche alternative : récupérer tous les articles et filtrer par slug
  const allArticles = await getAllPosts();
  const article = allArticles.find(
    (art: SanityPost) => art.slug.current === decodedSlug
  );

  if (!article) {
    notFound();
  }

  // Récupérer les articles suggérés
  const suggestedArticles = await getSuggestedPosts(decodedSlug, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-zinc-900 text-white py-20 sm:py-20 mb-10">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-60 w-60 rounded-full bg-emerald-400/20 blur-2xl"></div>
          <div className="absolute -bottom-20 right-0 h-44 w-44 rounded-full bg-sky-500/20 blur-2xl"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 bg-zinc-800/60 ring-1 ring-zinc-700 text-emerald-300 px-3 py-1.5 rounded-full text-xs font-medium mb-4">
            <svg
              data-lucide="file-text"
              className="lucide w-4 h-4"
              strokeWidth="1.5"
            ></svg>
            {article.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
            {article.title}
          </h1>
          <p className="text-base sm:text-lg text-zinc-200 max-w-xl">
            {article.description}
          </p>
        </div>
      </section>

      {/* Article Content */}
      <main className="max-w-4xl mx-auto px-4 pb-20">
        {/* Cover */}
        <div className="relative aspect-[16/7] rounded-2xl overflow-hidden bg-zinc-100 my-5">
          <Image
            src={urlFor(article.coverImage).url()}
            alt={article.coverImage.alt || article.title}
            className="w-full h-full object-cover object-center"
            width={1200}
            height={525}
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5"></div>
        </div>

        {/* Meta */}
        <div className="mt-6 mb-10 flex flex-wrap items-center gap-4 text-sm text-zinc-500">
          <div className="inline-flex items-center gap-2">
            {article.authorAvatar && article.authorAvatar.asset ? (
              <Image
                src={urlFor(article.authorAvatar).url()}
                alt={article.authorAvatar.alt || article.author}
                className="w-8 h-8 rounded-full border border-white shadow-sm"
                width={32}
                height={32}
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                <span className="text-emerald-600 text-sm font-medium">
                  {article.author.charAt(0)}
                </span>
              </div>
            )}
            <span className="font-medium text-zinc-700">{article.author}</span>
          </div>
          <span className="hidden sm:inline">·</span>
          <span className="inline-flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              data-lucide="calendar"
              className="lucide w-4 h-4"
            >
              <path d="M8 2v4"></path>
              <path d="M16 2v4"></path>
              <rect width="18" height="18" x="3" y="4" rx="2"></rect>
              <path d="M3 10h18"></path>
            </svg>
            {new Date(article.publishedAt).toLocaleDateString("fr-FR")}
          </span>
          <span className="hidden sm:inline">·</span>
          <span className="inline-flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              data-lucide="clock"
              className="lucide w-4 h-4"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12,6 12,12 16,14"></polyline>
            </svg>
            {article.readingTime}
          </span>
          <span className="hidden sm:inline">·</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100 px-2 py-0.5 text-xs sm:text-xs">
            {article.category}
          </span>
        </div>

        <hr className="border-zinc-200 mb-10" />

        {/* Article Body */}
        <article className="prose prose-zinc prose-lg prose-img:rounded-xl prose-img:shadow-sm max-w-none">
          <PortableTextRenderer value={article.content} />
        </article>

        {/* Suggestion d'autres articles : 3 cards */}
        <section className="mt-16 pt-10 border-t border-zinc-200">
          <h3 className="text-lg font-semibold tracking-tight text-zinc-900 mb-6">
            Vous aimerez aussi
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {suggestedArticles.length > 0 ? (
              suggestedArticles.map((suggestedArticle: SanityPost) => (
                <Link
                  key={suggestedArticle.slug.current}
                  href={`/blog/${suggestedArticle.slug.current}`}
                  className="group relative flex flex-col min-w-0 rounded-2xl bg-white ring-1 ring-zinc-200 overflow-hidden transition hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="h-32 sm:h-36 overflow-hidden">
                    <Image
                      src={urlFor(suggestedArticle.coverImage).url()}
                      alt={
                        suggestedArticle.coverImage.alt ||
                        suggestedArticle.title
                      }
                      className="w-full h-full object-cover"
                      width={600}
                      height={400}
                    />
                  </div>
                  <div className="p-5 flex flex-col gap-2">
                    <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100 px-2 py-0.5 rounded-full text-xs font-medium w-max mb-2">
                      {suggestedArticle.category}
                    </span>
                    <h4 className="text-base font-semibold tracking-tight text-zinc-900 group-hover:text-emerald-700 transition">
                      {suggestedArticle.title}
                    </h4>
                    <p className="text-sm text-zinc-600 line-clamp-2">
                      {suggestedArticle.description}
                    </p>
                    <div className="mt-2 flex items-center gap-2 text-xs text-zinc-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        data-lucide="calendar"
                        className="lucide w-3.5 h-3.5"
                      >
                        <path d="M8 2v4"></path>
                        <path d="M16 2v4"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <path d="M3 10h18"></path>
                      </svg>
                      {new Date(
                        suggestedArticle.publishedAt
                      ).toLocaleDateString("fr-FR")}
                    </div>
                  </div>
                  <span className="absolute top-4 right-4 bg-white/80 rounded-full p-1 shadow-sm ring-1 ring-zinc-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      data-lucide="arrow-right"
                      className="lucide w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </span>
                </Link>
              ))
            ) : (
              <div className="col-span-3 text-center py-8 text-zinc-500">
                Aucun autre article disponible pour le moment.
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
