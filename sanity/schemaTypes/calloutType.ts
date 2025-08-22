import { defineType, defineField } from "sanity";
import { AddCommentIcon } from "@sanity/icons";

export const calloutType = defineType({
  name: "callout",
  title: "Callout",
  type: "object",
  icon: AddCommentIcon,
  fields: [
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Info", value: "info" },
          { title: "Warning", value: "warning" },
          { title: "Error", value: "error" },
          { title: "Success", value: "success" },
          { title: "Tip", value: "tip" },
        ],
      },
      initialValue: "info",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Titre",
      type: "string",
      description: "Titre du callout (optionnel)",
    }),
    defineField({
      name: "content",
      title: "Contenu",
      type: "array",
      of: [{ type: "block" }],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      type: "type",
      content: "content",
    },
    prepare(selection) {
      const { title, type, content } = selection;
      const icons: Record<string, string> = {
        info: "ℹ️",
        warning: "⚠️",
        error: "❌",
        success: "✅",
        tip: "💡",
      };
      const preview =
        content && content[0]
          ? content[0].children?.[0]?.text?.slice(0, 50) + "..."
          : "Aucun contenu";
      return {
        title: title || `Callout ${type}`,
        subtitle: `${icons[type] || "ℹ️"} ${type} • ${preview}`,
        media: AddCommentIcon,
      };
    },
  },
});
