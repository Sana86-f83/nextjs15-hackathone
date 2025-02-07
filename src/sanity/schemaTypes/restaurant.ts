import { defineType, defineField, defineArrayMember } from "sanity";

export const restaurantPage = defineType({
  name: "restaurantPage",
  type: "document",
  title: "Restaurant Page",
  fields: [
    defineField({
      name: "heroSection",
      type: "object",
      title: "Hero Section",
      fields: [
        defineField({
          name: "backgroundImage",
          type: "image",
          title: "Hero Background Image",
        }),
        defineField({
          name: "image",
          type: "image",
          title: "Product Image",
          options: {
            hotspot: true, // Enables cropping and focal point selection
          },
        }),

        defineField({
          name: "mainImage",
          type: "image",
          title: "Main Display Image",
        }),
        defineField({
          name: "verticalImage",
          type: "image",
          title: "Vertical Side Image",
        }),
      ],
    }),
    defineField({
      name: "contentSection",
      type: "object",
      title: "Content Section",
      fields: [
        defineField({
          name: "taglineImage",
          type: "image",
          title: "Tagline Image",
        }),
        defineField({
          name: "headings",
          type: "array",
          title: "Headings",
          of: [
            defineArrayMember({
              type: "string",
              title: "Heading Text",
            }),
          ],
        }),
        defineField({
          name: "description",
          type: "string",
          title: "Description Text",
        }),
        defineField({
          name: "ctaButton",
          type: "object",
          title: "Call to Action Button",
          fields: [
            defineField({
              name: "text",
              type: "string",
              title: "Button Text",
            }),
            defineField({
              name: "link",
              type: "string",
              title: "Button Link",
            }),
          ],
        }),
      ],
    }),
  ],
});
