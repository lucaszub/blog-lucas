import { PortableText } from "@portabletext/react";

const components = {
  block: {
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">{children}</h2>
    ),
    normal: ({ children }: any) => (
      <p className="text-zinc-700 leading-relaxed mb-4">{children}</p>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-emerald-600 hover:text-emerald-700 underline"
      >
        {children}
      </a>
    ),
  },
};

interface PortableTextRendererProps {
  value: any;
}

export default function PortableTextRenderer({
  value,
}: PortableTextRendererProps) {
  return <PortableText value={value} components={components} />;
}

