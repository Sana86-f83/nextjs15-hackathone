export const food = {
  name: "food",
  type: "document",
  title: "Food",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Food Name",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      description: "URL-friendly identifier for the food item",
      options: {
        source: "name", // Automatically generates the slug from the food name
        maxLength: 96, // Limit slug length if needed
      },
    },
    {
      name: "category",
      type: "string",
      title: "Category",
      description:
        "Category of the food item (e.g., Burger, Sandwich, Drink, etc.)",
    },
    {
      name: "price",
      type: "number",
      title: "Current Price",
    },
    {
      name:"inventory",
      title:'Inventory',
      type:"number",
    },
    {
      name: "originalPrice",
      type: "number",
      title: "Original Price",
      description: "Price before discount (if any)",
    },
    {
      name: "tags",
      type: "array",
      title: "Tags",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      description: "Tags for categorization (e.g., Best Seller, Popular, New)",
    },
    {
      name: "image",
      type: "image",
      title: "Food Image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "Short description of the food item",
    },
    {
      name: "available",
      type: "boolean",
      title: "Available",
      description: "Availability status of the food item",
    },
    
    {
      title: 'Block', 
      name: 'block',
      type: 'array', 
      of: [{type: 'block'}]
    }
    
    
  ],
};
