"use client";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { RecipeData } from "@/utils/types/types";
import { RecipeCard } from "@/components/recipe-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function RecipePage() {
  const recipes = useQuery(api.recipe.getRecipes);

  return (
    <div className="flex">
      <div>
        <Button className="bg-pink-500 hover:bg-pink-400">
          <Link href="/recipes/add">Add Recipe</Link>
        </Button>
      </div>
      <div>
        <h1 className="text-3xl font-bold text-center my-8">Erika's Recipes</h1>
        <h2 className="text-xl text-center my-8">
          All my recipes can be found here!
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {recipes?.map((recipe) => {
            return <RecipeCard key={recipe._id} recipe={recipe} />;
          })}
        </div>
      </div>
    </div>
  );
}
