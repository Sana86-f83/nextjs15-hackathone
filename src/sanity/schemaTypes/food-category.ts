import { defineType, defineField } from "sanity";

export const foodCategory = defineType({
  name: "foodCategory",
  title: "Food Category",
  type: "document",
  fields: [
    defineField({
      name: "titleImage",
      title: "Title Image",
      type: "image",
      description: "Image displayed as the title logo.",
      options: {
        hotspot: true,
      },
      
    }),
    defineField({
      name: "backgroundImage",
      title: "Background Image",
      type: "image",
      description: "Background image for the section.",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      description: "The main heading text.",
    }),
    defineField({
      name: "highlightedText",
      title: "Highlighted Text",
      type: "string",
      description: "The text to be highlighted in the heading.",
    }),
    defineField(
      {
        name: 'image',
        type: 'image',
        title: 'Product Image',
        options: {
          hotspot: true // Enables cropping and focal point selection
        }
  
    }),
    defineField({
      name: "foodItems",
      title: "Food Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              description: "Image of the food item.",
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: "altText",
              title: "Alt Text",
              type: "string",
              description: "Alternative text for the image.",
            }),
          ],
        },
      ],
    }),
  ],
});
