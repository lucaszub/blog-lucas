import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Lucas Zubiarrain",
  description:
    "Articles, retours d'expérience et outils pour data engineers, analysts et curieux de la data.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


