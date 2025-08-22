"use client";

import Link from "next/link";

export default function ArticleNavbar() {
  return (
    <header>
      <nav className="max-w-3xl mx-auto pt-6 pb-4 px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative grid place-items-center h-9 w-9 rounded-xl bg-zinc-900 text-zinc-50 shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              data-lucide="sparkles"
              className="lucide h-5 w-5"
            >
              <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
              <path d="M20 3v4"></path>
              <path d="M22 5h-4"></path>
              <path d="M4 17v2"></path>
              <path d="M5 18H3"></path>
            </svg>
          </span>
          <span className="text-lg font-semibold tracking-tight">
            Lucas Zubiarrain
          </span>
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          <Link
            href="/"
            className="font-medium text-zinc-700 hover:text-zinc-900"
          >
            Qui je suis
          </Link>
          <Link
            href="/blog"
            className="font-medium text-zinc-900 underline underline-offset-4 decoration-2 decoration-emerald-300"
          >
            Blog
          </Link>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-zinc-900 text-zinc-50 px-4 py-2 shadow-sm ring-1 ring-zinc-900/10 hover:-translate-y-0.5 hover:shadow-md transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              data-lucide="calendar"
              className="lucide h-4 w-4 text-emerald-300"
            >
              <path d="M8 2v4"></path>
              <path d="M16 2v4"></path>
              <rect width="18" height="18" x="3" y="4" rx="2"></rect>
              <path d="M3 10h18"></path>
            </svg>
            <span className="font-medium">Contact</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              data-lucide="arrow-right"
              className="lucide h-4 w-4 transition-transform group-hover:translate-x-0.5"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </nav>
    </header>
  );
}
