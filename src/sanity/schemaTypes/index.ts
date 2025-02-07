import { type SchemaTypeDefinition } from "sanity";
import { restaurantPage } from "./restaurant";
import { mainpageAbout } from "./mainpage-aboutus";
import { foodCategory } from "./food-category";
import { food } from "./foods";
import { chefs } from "./chefs";
import { order } from "./order";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [restaurantPage, mainpageAbout, foodCategory, food, chefs,order],
};
