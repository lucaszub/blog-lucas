import { getAllPosts } from "../lib/sanity";
import { urlFor } from "../../sanity/lib/client";
import Image from "next/image";

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
};

export default async function BlogPage() {
  // Récupérer tous les articles depuis Sanity
  const allArticles = await getAllPosts();

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-zinc-900 text-white py-14 sm:py-20 mb-10">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-60 w-60 rounded-full bg-emerald-400/20 blur-2xl"></div>
          <div className="absolute -bottom-20 right-0 h-44 w-44 rounded-full bg-sky-500/20 blur-2xl"></div>
        </div>
        <div className="max-w-3xl mx-auto px-4 flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 bg-zinc-800/60 ring-1 ring-zinc-700 text-emerald-300 px-3 py-1.5 rounded-full text-xs font-medium mb-4">
            <svg
              data-lucide="book-open"
              className="lucide w-4 h-4"
              strokeWidth="1.5"
            ></svg>
            Blog
          </span>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
            Mon partage sur mes découvertes technologiques
          </h1>
          <p className="text-base sm:text-lg text-zinc-200 max-w-xl">
            Articles, réflexions et tutoriels sur la data engineering,
            l&apos;analytics et les outils modernes. Mes apprentissages et
            découvertes du moment.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl lg:px-8 mr-auto ml-auto pr-6 pl-6">
        <section className="pt-20 pb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.13] text-zinc-900">
              Tous mes articles
            </h2>
            <p className="mt-6 text-lg text-zinc-600">
              Découvrez mes derniers articles et tutoriels sur la data.
            </p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allArticles.map((article: SanityPost) => (
              <a
                key={article._id}
                href={`/blog/${article.slug.current}`}
                className="group block overflow-hidden rounded-xl bg-white ring-1 ring-zinc-200 hover:-translate-y-0.5 hover:shadow-md transition"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-zinc-100">
                  <Image
                    src={
                      article.coverImage?.asset?._ref
                        ? urlFor(article.coverImage).url()
                        : "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
                    }
                    alt={article.coverImage?.alt || article.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    width={1200}
                    height={675}
                  />
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5"></div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100 px-2 py-0.5 text-[11px]">
                      {article.category}
                    </span>
                    <span className="text-xs text-zinc-500 inline-flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        data-lucide="calendar"
                        className="lucide lucide-calendar h-3.5 w-3.5"
                      >
                        <path d="M8 2v4"></path>
                        <path d="M16 2v4"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <path d="M3 10h18"></path>
                      </svg>
                      {new Date(article.publishedAt).toLocaleDateString(
                        "fr-FR",
                        { day: "numeric", month: "short", year: "numeric" }
                      )}
                      <span className="mx-1">•</span>
                      {article.readingTime}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-zinc-900">
                    {article.title}
                  </p>
                  <p className="mt-1 text-sm text-zinc-600 truncate">
                    {article.description}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1 text-xs text-zinc-600 group-hover:text-zinc-900 transition">
                    <span>Lire l&apos;article</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      data-lucide="arrow-right"
                      className="lucide lucide-arrow-right h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
