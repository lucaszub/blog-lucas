import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Article",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      title: "Titre",
      type: "string",
      validation: (Rule) => Rule.required().max(100),
      description: "Titre principal de l'article",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, "")
            .slice(0, 96),
      },
      validation: (Rule) => Rule.required(),
      description: "URL unique de l'article (généré automatiquement)",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
      description: "Résumé court de l'article (visible dans les listes)",
    }),
    defineField({
      name: "coverImage",
      title: "Image de couverture",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Texte alternatif",
          description: "Description de l'image pour l'accessibilité",
        }),
      ],
      validation: (Rule) => Rule.required(),
      description: "Image principale de l'article",
    }),
    defineField({
      name: "category",
      title: "Catégorie",
      type: "string",
      options: {
        list: [
          { title: "Data Engineering", value: "Data Engineering" },
          { title: "Data Analytics", value: "Data Analytics" },
          { title: "Machine Learning", value: "Machine Learning" },
          { title: "Tools & Technologies", value: "Tools & Technologies" },
          { title: "Best Practices", value: "Best Practices" },
          { title: "Career & Learning", value: "Career & Learning" },
          { title: "Case Studies", value: "Case Studies" },
        ],
      },
      validation: (Rule) => Rule.required(),
      description: "Catégorie principale de l'article",
    }),
    defineField({
      name: "publishedAt",
      title: "Date de publication",
      type: "datetime",
      validation: (Rule) => Rule.required(),
      description: "Date de publication de l'article",
    }),
    defineField({
      name: "readingTime",
      title: "Temps de lecture",
      type: "string",
      options: {
        list: [
          { title: "2 min", value: "2 min" },
          { title: "3 min", value: "3 min" },
          { title: "5 min", value: "5 min" },
          { title: "7 min", value: "7 min" },
          { title: "10 min", value: "10 min" },
          { title: "15 min", value: "15 min" },
          { title: "20 min", value: "20 min" },
        ],
      },
      validation: (Rule) => Rule.required(),
      description: "Temps estimé de lecture",
    }),
    defineField({
      name: "author",
      title: "Auteur",
      type: "string",
      initialValue: "Lucas Zubiarrain",
      validation: (Rule) => Rule.required(),
      description: "Nom de l'auteur de l'article",
    }),
    defineField({
      name: "authorAvatar",
      title: "Avatar de l'auteur",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Texte alternatif",
          description: "Description de l'avatar pour l'accessibilité",
        }),
      ],
      description: "Photo de profil de l'auteur (optionnel)",
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      description: "Mots-clés pour organiser et rechercher l'article",
    }),
    defineField({
      name: "content",
      title: "Contenu de l'article",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
      description: "Contenu principal de l'article avec formatage riche",
    }),
    defineField({
      name: "excerpt",
      title: "Extrait",
      type: "text",
      rows: 4,
      description: "Extrait court pour les aperçus (optionnel)",
    }),
    defineField({
      name: "featured",
      title: "Article en vedette",
      type: "boolean",
      initialValue: false,
      description: "Marquer comme article en vedette",
    }),
    defineField({
      name: "seoTitle",
      title: "Titre SEO",
      type: "string",
      description: "Titre optimisé pour les moteurs de recherche (optionnel)",
    }),
    defineField({
      name: "seoDescription",
      title: "Description SEO",
      type: "text",
      rows: 2,
      description:
        "Description optimisée pour les moteurs de recherche (optionnel)",
    }),
    defineField({
      name: "status",
      title: "Statut",
      type: "string",
      options: {
        list: [
          { title: "Brouillon", value: "draft" },
          { title: "En révision", value: "review" },
          { title: "Publié", value: "published" },
        ],
      },
      initialValue: "draft",
      validation: (Rule) => Rule.required(),
      description: "Statut de publication de l'article",
    }),
  ],
  preview: {
    select: {
      title: "title",
      category: "category",
      media: "coverImage",
      publishedAt: "publishedAt",
      status: "status",
    },
    prepare(selection) {
      const { category, publishedAt, status } = selection;
      const date = publishedAt
        ? new Date(publishedAt).toLocaleDateString("fr-FR")
        : "Non publié";
      const statusText =
        status === "published"
          ? "✅ Publié"
          : status === "review"
            ? "🔄 En révision"
            : "📝 Brouillon";
      return {
        ...selection,
        subtitle: `${category} • ${date} • ${statusText}`,
      };
    },
  },
  orderings: [
    {
      title: "Date de publication, récent",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
    {
      title: "Date de publication, ancien",
      name: "publishedAtAsc",
      by: [{ field: "publishedAt", direction: "asc" }],
    },
    {
      title: "Titre, A-Z",
      name: "titleAsc",
      by: [{ field: "title", direction: "asc" }],
    },
    {
      title: "Statut",
      name: "statusAsc",
      by: [{ field: "status", direction: "asc" }],
    },
  ],
});
