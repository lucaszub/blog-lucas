import { PortableText } from "@portabletext/react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const components: any = {
  block: {
    h2: ({ children }: { children: React.ReactNode }) => (
      <h2 className="text-2xl font-bold text-zinc-900 mt-8 mb-4">{children}</h2>
    ),
    normal: ({ children }: { children: React.ReactNode }) => (
      <p className="text-zinc-700 leading-relaxed mb-4">{children}</p>
    ),
  },
  marks: {
    link: ({
      children,
      value,
    }: {
      children: React.ReactNode;
      value: { href?: string };
    }) => (
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PortableTextRenderer({ value }: { value: any }) {
  return <PortableText value={value} components={components} />;
}
