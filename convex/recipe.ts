import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { RecipeData } from "../src/utils/types/types";

export const addRecipe = mutation(
  async (ctx, args: { recipeData: RecipeData }) => {
    const { db } = ctx;
    const { recipeData } = args;

    console.log(recipeData);
    const result = await db.insert("recipes", {
      title: recipeData.title,
      image: recipeData.image,
      prepTime: recipeData.prepTime,
      cookTime: recipeData.cookTime,
      description: recipeData.description,
      directions: recipeData.directions,
      ingredients: recipeData.ingredients,
    });
    return result;
  }
);

export const getRecipes = query({
  args: {},
  handler: async (ctx, args) => {
    return await ctx.db.query("recipes").collect();
  },
});

export const getRecipe = query({
  args: { recipeId: v.id("recipes") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.recipeId);
  },
});
