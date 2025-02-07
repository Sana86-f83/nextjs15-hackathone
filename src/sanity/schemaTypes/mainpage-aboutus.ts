import { defineType, defineField } from "sanity";

export const mainpageAbout = defineType({
  name: "mainPageAbout",
  title: "Main Page About Section",
  type: "document",
  fields: [
    // Title Section
    defineField({
      name: "title1",
      title: "Title1",
      type: "string",
      description: "Main heading of the about section",
    }),
        // Title Section
        defineField({
          name: "title2",
          title: "Title2",
          type: "string",
          description: "Main heading of the about section",
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
      name: 'highlightedText',
      title: 'Highlighted Text',
      type: 'string',
      description: 'The text to be highlighted in the heading.',
    }),

    // Subheading or Paragraph
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Text content about the company",
    }),
    // List of Features with Icons
    defineField({
      name: "features",
      title: "Features",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "icon",
              title: "Feature Icon",
              type: "image",
              description: "Icon for the feature",
            }),
            defineField({
              name: "text",
              title: "Feature Text",
              type: "string",
            }),
          ],
        },
      ],
    }),
    // Button
    defineField({
      name: "ctaButton",
      title: "Call to Action Button",
      type: "object",
      fields: [
        defineField({
          name: "label",
          title: "Button Label",
          type: "string",
          description: "Text displayed on the button",
        }),
        defineField({
          name: "link",
          title: "Button Link",
          type: "string",
          description: "URL the button points to",
        }),
      ],
    }),
    // Images
    defineField({
      name: "images",
      title: "Images",
      type: "object",
      fields: [
        defineField({
          name: "mainImage",
          title: "Main Image",
          type: "image",
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: "eggSandwichImage",
          title: "Egg Sandwich Image",
          type: "image",
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: "snacksImage",
          title: "Snacks Image",
          type: "image",
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: "sandwichImage",
          title: "Sandwich Image",
          type: "image",
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
  ],
});
