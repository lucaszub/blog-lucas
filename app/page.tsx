import Image from "next/image";
import Script from "next/script";
import { getRecentPosts } from "./lib/sanity";
import { urlFor } from "../sanity/lib/client";

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

export default async function Home() {
  // Récupérer les articles récents depuis Sanity
  const recentArticles = await getRecentPosts(3);

  return (
    <>
      {/* Subtle background accents */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-tr from-emerald-300/40 to-sky-300/40 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-sky-200/40 to-emerald-200/40 blur-3xl"></div>
      </div>

      {/* Hero */}
      <section className="relative bg-zinc-900 text-white py-14 sm:py-20 mb-10">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-60 w-60 rounded-full bg-emerald-400/20 blur-2xl"></div>
          <div className="absolute -bottom-20 right-0 h-44 w-44 rounded-full bg-sky-500/20 blur-2xl"></div>
        </div>
        <div className="max-w-3xl mx-auto px-4 flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 bg-zinc-800/60 ring-1 ring-zinc-700 text-emerald-300 px-3 py-1.5 rounded-full text-xs font-medium mb-4">
            <svg
              data-lucide="sparkles"
              className="lucide w-4 h-4"
              strokeWidth="1.5"
            ></svg>
            Data Engineering & Web Development
          </span>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">
            Data Engineer passionné par la technologie et l&apos;innovation
          </h1>
          <p className="text-base sm:text-lg text-zinc-200 max-w-xl">
            Après une école de commerce, j&apos;ai plongé dans le monde de la
            data. Spécialisé en data engineering, analytics et développement
            web. J&apos;aime apprendre, partager et créer des solutions
            innovantes.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl lg:px-8 mr-auto ml-auto pr-6 pl-6">
        {/* Recent posts */}
        <section
          id="recent-posts"
          aria-labelledby="recent-posts-heading"
          className="reveal transition-all duration-700 opacity-100 translate-y-0 mt-8"
          data-delay="480"
        >
          <h3
            id="recent-posts-heading"
            className="text-lg font-semibold tracking-tight text-zinc-900"
          >
            Mes derniers articles sur la data
          </h3>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto text-left">
            {recentArticles.map((article: SanityPost) => (
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
                    alt={article.coverImage.alt || article.title}
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

        {/* Experience */}
        <section
          id="experience"
          aria-labelledby="experience-heading"
          className="reveal transition-all duration-700 opacity-100 mt-10 translate-y-0"
          data-delay="520"
        >
          <h3
            id="experience-heading"
            className="text-lg font-semibold tracking-tight text-zinc-900"
          >
            Mon expérience
          </h3>
          {/* Timeline container */}
          <div className="mt-8 relative">
            {/* Ligne verticale verte */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 via-emerald-500 to-emerald-600"></div>

            <div className="space-y-8">
              {/* Experience item 1 */}
              <div className="relative flex items-start gap-6">
                {/* Icône sur la timeline */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-lucide="briefcase"
                    className="text-white"
                  >
                    <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                  </svg>
                </div>

                {/* Contenu de la carte */}
                <div className="flex-1 relative rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl">
                  {/* Effet de verre avec backdrop-blur */}
                  <div className="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-2xl border border-white/40 shadow-lg"></div>

                  <div className="relative z-10 p-6">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h4 className="text-lg font-semibold text-zinc-900">
                        Freelance — Création de websites
                      </h4>
                      <span className="inline-flex items-center gap-1 text-sm text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                        2025
                      </span>
                    </div>
                    <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                      Développement de sites web pour artisans et PME. Création
                      d&apos;interfaces modernes et responsives, optimisation
                      SEO et accompagnement technique personnalisé.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex rounded-full bg-emerald-500/20 text-emerald-700 ring-1 ring-emerald-500/30 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
                        Next.js
                      </span>
                      <span className="inline-flex rounded-full bg-emerald-500/20 text-emerald-700 ring-1 ring-emerald-500/30 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
                        React
                      </span>
                      <span className="inline-flex rounded-full bg-emerald-500/20 text-emerald-700 ring-1 ring-emerald-500/30 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
                        Tailwind CSS
                      </span>
                      <span className="inline-flex rounded-full bg-emerald-500/20 text-emerald-700 ring-1 ring-emerald-500/30 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
                        SEO
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience item 2 */}
              <div className="relative flex items-start gap-6">
                {/* Icône sur la timeline */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-lucide="building"
                    className="text-white"
                  >
                    <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12"></path>
                    <path d="M9 12v2"></path>
                    <path d="M15 12v2"></path>
                    <path d="M7 12h10"></path>
                    <path d="M7 16h10"></path>
                    <path d="M7 8h10"></path>
                  </svg>
                </div>

                {/* Contenu de la carte */}
                <div className="flex-1 relative rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl">
                  {/* Effet de verre avec backdrop-blur */}
                  <div className="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-2xl border border-white/40 shadow-lg"></div>

                  <div className="relative z-10 p-6">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h4 className="text-lg font-semibold text-zinc-900">
                        POLARYS — Consultant Data
                      </h4>
                      <span className="inline-flex items-center gap-1 text-sm text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                        Oct 2023 - Mars 2025
                      </span>
                    </div>
                    <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                      Ingénierie et automatisation des données pour le secteur
                      bancaire. Conception de workflows ETL complexes avec
                      Alteryx, maintenance de 40+ flux automatisés et
                      développement d&apos;un dashboard Power BI pour le
                      monitoring temps réel.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex rounded-full bg-emerald-500/20 text-emerald-700 ring-1 ring-emerald-500/30 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
                        Alteryx
                      </span>
                      <span className="inline-flex rounded-full bg-emerald-500/20 text-emerald-700 ring-1 ring-emerald-500/30 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
                        Power BI
                      </span>
                      <span className="inline-flex rounded-full bg-emerald-500/20 text-emerald-700 ring-1 ring-emerald-500/30 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
                        Oracle
                      </span>
                      <span className="inline-flex rounded-full bg-emerald-500/20 text-emerald-700 ring-1 ring-emerald-500/30 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
                        ETL
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience item 3 */}
              <div className="relative flex items-start gap-6">
                {/* Icône sur la timeline */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-lucide="cloud"
                    className="text-white"
                  >
                    <path d="M17.5 19A4.5 4.5 0 0 0 22 14.5c0-1.77-1.02-3.25-2.5-4-1.5-.75-3.5-1.5-5.5-1.5s-4 .75-5.5 1.5C7.02 11.25 6 12.73 6 14.5A4.5 4.5 0 0 0 10.5 19c1.5 0 2.5-.5 3.5-1.5s2-.5 3.5.5 2 .5 3.5-.5"></path>
                  </svg>
                </div>

                {/* Contenu de la carte */}
                <div className="flex-1 relative rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl">
                  {/* Effet de verre avec backdrop-blur */}
                  <div className="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-2xl border border-white/40 shadow-lg"></div>

                  <div className="relative z-10 p-6">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h4 className="text-lg font-semibold text-zinc-900">
                        Développeur Data Cloud
                      </h4>
                      <span className="inline-flex items-center gap-1 text-sm text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                        Sept 2023 - Sept 2024
                      </span>
                    </div>
                    <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                      Conception d&apos;une plateforme cloud pour
                      l&apos;exploitation des données automobiles. Interface
                      Streamlit pour requêtes SQL complexes sur Snowflake,
                      automatisation Azure et déploiement sécurisé avec Key
                      Vault.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex rounded-full bg-emerald-500/20 text-emerald-700 ring-1 ring-emerald-500/30 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
                        Snowflake
                      </span>
                      <span className="inline-flex rounded-full bg-emerald-500/20 text-emerald-700 ring-1 ring-emerald-500/30 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
                        Streamlit
                      </span>
                      <span className="inline-flex rounded-full bg-emerald-500/20 text-emerald-700 ring-1 ring-emerald-500/30 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
                        Azure
                      </span>
                      <span className="inline-flex rounded-full bg-emerald-500/20 text-emerald-700 ring-1 ring-emerald-500/30 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
                        FastAPI
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Experience item 4 */}
              <div className="relative flex items-start gap-6">
                {/* Icône sur la timeline */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    data-lucide="bar-chart-3"
                    className="text-white"
                  >
                    <path d="M3 3v18h18"></path>
                    <path d="M18 17V9"></path>
                    <path d="M13 17V5"></path>
                    <path d="M8 17v-3"></path>
                  </svg>
                </div>

                {/* Contenu de la carte */}
                <div className="flex-1 relative rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl">
                  {/* Effet de verre avec backdrop-blur */}
                  <div className="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-2xl border border-white/40 shadow-lg"></div>

                  <div className="relative z-10 p-6">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h4 className="text-lg font-semibold text-zinc-900">
                        SYSTEME U — Analyste Data
                      </h4>
                      <span className="inline-flex items-center gap-1 text-sm text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                        Mai 2020 - Août 2022
                      </span>
                    </div>
                    <p className="text-sm text-zinc-600 leading-relaxed mb-4">
                      Optimisation des performances opérationnelles et gestion
                      des stocks. Analyse des ventes, suivi des niveaux de
                      stock, reporting opérationnel avec Excel et identification
                      d&apos;actions correctives basées sur les données.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex rounded-full bg-emerald-500/20 text-emerald-700 ring-1 ring-emerald-500/30 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
                        Excel
                      </span>
                      <span className="inline-flex rounded-full bg-emerald-500/20 text-emerald-700 ring-1 ring-emerald-500/30 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
                        KPIs
                      </span>
                      <span className="inline-flex rounded-full bg-emerald-500/20 text-emerald-700 ring-1 ring-emerald-500/30 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
                        Analyse
                      </span>
                      <span className="inline-flex rounded-full bg-emerald-500/20 text-emerald-700 ring-1 ring-emerald-500/30 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
                        Gestion
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Script
        id="lucide-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Initialize icons if needed
            if (window.lucide && lucide.createIcons) {
              lucide.createIcons();
            }
            // Year
            const y = document.getElementById('year');
            if (y) y.textContent = new Date().getFullYear();
          `,
        }}
      />
    </>
  );
}
