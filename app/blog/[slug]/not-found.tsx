import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-6xl font-bold text-zinc-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-zinc-800 mb-4">
          Article non trouvé
        </h2>
        <p className="text-zinc-600 mb-8">
          L&apos;article que vous recherchez n&apos;existe pas ou a été déplacé.
        </p>
        <div className="space-y-4">
          <Link
            href="/blog"
            className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Retour au blog
          </Link>
          <br />
          <Link
            href="/"
            className="inline-block text-emerald-600 hover:text-emerald-700 transition-colors"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
}


