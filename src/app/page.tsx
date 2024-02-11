import { RecipeCard } from "@/components/recipe-card";
import RecipePage from "./recipes/page";
import { Link } from "lucide-react";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center my-8">Erika's Recipes</h1>
      <h2 className="text-xl text-center my-8">
        A place for all my recipes curated by me! Click{" "}
        <a href="/recipes" className="text-pink-500">
          Here
        </a>{" "}
        to see them all!
      </h2>
    </>
  );
}
