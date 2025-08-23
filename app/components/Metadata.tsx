import { siteConfig } from "../lib/site-config";

interface MetadataProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export default function Metadata({
  title = siteConfig.title,
  description = siteConfig.description,
  image = siteConfig.og.image,
  url = siteConfig.url,
  type = siteConfig.og.type,
}: MetadataProps) {
  return (
    <>
      {/* Métadonnées principales */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content={siteConfig.seo.author} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteConfig.og.siteName} />

      {/* Twitter */}
      <meta property="twitter:card" content={siteConfig.twitter.card} />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      {siteConfig.twitter.creator && (
        <meta property="twitter:creator" content={siteConfig.twitter.creator} />
      )}

      {/* Autres métadonnées */}
      <meta name="keywords" content={siteConfig.seo.keywords} />
      <meta name="robots" content={siteConfig.seo.robots} />
      <meta name="language" content={siteConfig.seo.language} />
      <meta name="revisit-after" content={siteConfig.seo.revisitAfter} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </>
  );
}
