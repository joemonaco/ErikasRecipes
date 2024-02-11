export interface Ingredient {
  name: string;
  quantity: string;
}

export interface RecipeData {
  title: string;
  prepTime: string;
  cookTime: string;
  image: string;
  description: string;
  directions: string[];
  ingredients: Ingredient[];
}
