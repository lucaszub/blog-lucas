import { defineType, defineField } from "sanity";
import { CodeIcon } from "@sanity/icons";

export const codeBlockType = defineType({
  name: "codeBlock",
  title: "Bloc de code",
  type: "object",
  icon: CodeIcon,
  fields: [
    defineField({
      name: "language",
      title: "Langage",
      type: "string",
      options: {
        list: [
          { title: "Plain text", value: "text" },
          { title: "JavaScript", value: "javascript" },
          { title: "TypeScript", value: "typescript" },
          { title: "Python", value: "python" },
          { title: "SQL", value: "sql" },
          { title: "YAML", value: "yaml" },
          { title: "JSON", value: "json" },
          { title: "HTML", value: "html" },
          { title: "CSS", value: "css" },
          { title: "Bash", value: "bash" },
          { title: "Docker", value: "docker" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "code",
      title: "Code",
      type: "text",
      rows: 10,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "filename",
      title: "Nom du fichier",
      type: "string",
      description: "Nom du fichier (optionnel)",
    }),
    defineField({
      name: "highlightedLines",
      title: "Lignes surlignées",
      type: "array",
      of: [{ type: "number" }],
      description: "Numéros des lignes à surligner (optionnel)",
    }),
  ],
  preview: {
    select: {
      language: "language",
      filename: "filename",
      code: "code",
    },
    prepare(selection) {
      const { language, filename, code } = selection;
      const preview = code
        ? code.slice(0, 50) + (code.length > 50 ? "..." : "")
        : "Aucun code";
      return {
        title: filename || `Code ${language}`,
        subtitle: `${language} • ${preview}`,
        media: CodeIcon,
      };
    },
  },
});


