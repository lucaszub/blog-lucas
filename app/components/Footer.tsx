export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative border-t border-zinc-900/80 py-14 lg:py-20 bg-zinc-900 text-white mt-8"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-10 top-8 h-40 w-40 rounded-full bg-emerald-300/10 blur-3xl"></div>
        <div className="absolute right-10 bottom-8 h-40 w-40 rounded-full bg-sky-300/10 blur-3xl"></div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">
              Discutons ensemble
            </h2>
            <p className="mt-3 text-base sm:text-lg text-zinc-200 max-w-prose">
              Data engineer passionné par la data et le web en général. J’aime
              apprendre et partager, n’hésite pas à venir vers moi.
            </p>
          </div>
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a
                href="tel:+33619449133"
                className="group rounded-2xl bg-zinc-800 ring-1 ring-zinc-700 p-4 hover:-translate-y-1 hover:shadow-lg transition"
              >
                <div className="flex items-start gap-3">
                  <div className="grid h-8 w-8 place-items-center rounded-xl bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/20 flex-shrink-0">
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
                      data-lucide="phone"
                      className="lucide h-4 w-4"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium tracking-tight text-white">
                      Téléphone
                    </p>
                    <p className="mt-1 text-xs text-zinc-400 truncate">
                      +33 6 19 44 91 33
                    </p>
                  </div>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/lucaszubiarrain"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl bg-zinc-800 ring-1 ring-zinc-700 p-4 hover:-translate-y-1 hover:shadow-lg transition"
              >
                <div className="flex items-start gap-3">
                  <div className="grid h-8 w-8 place-items-center rounded-xl bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/20 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      data-lucide="linkedin"
                      className="lucide h-4 w-4"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium tracking-tight text-white">
                      LinkedIn
                    </p>
                    <p className="mt-1 text-xs text-zinc-400 truncate">
                      lucaszubiarrain
                    </p>
                  </div>
                </div>
              </a>
              <a
                href="mailto:zubiarrainlucas@gmail.com"
                className="group rounded-2xl bg-zinc-800 ring-1 ring-zinc-700 p-4 hover:-translate-y-1 hover:shadow-lg transition"
              >
                <div className="flex items-start gap-3">
                  <div className="grid h-8 w-8 place-items-center rounded-xl bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/20 flex-shrink-0">
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
                      data-lucide="mail"
                      className="lucide h-4 w-4"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium tracking-tight text-white">
                      Email
                    </p>
                    <p className="mt-1 text-xs text-zinc-400 truncate">
                      zubiarrainlucas@gmail.com
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-zinc-800 pt-6">
              <p className="text-sm text-zinc-400">
                © <span id="year"></span> Lucas Zubiarrain. Tous droits
                réservés.
              </p>
              <div className="inline-flex items-center gap-3">
                <a href="#" className="text-sm text-zinc-400 hover:text-white">
                  Mentions légales
                </a>
                <span className="h-4 w-px bg-zinc-700"></span>
                <a href="#" className="text-sm text-zinc-400 hover:text-white">
                  Politique de confidentialité
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
