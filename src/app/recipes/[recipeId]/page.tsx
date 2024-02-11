"use client";
import { useParams } from "next/navigation";
import { Id } from "../../../../convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import Image from "next/image";
import { getImageUrl } from "@/lib/utils";
import { RecipeData } from "@/utils/types/types";
export default function RecipeDetails() {
  const params = useParams<{ recipeId: Id<"recipes"> }>();

  const recipeId = params.recipeId;
  const recipe = useQuery(api.recipe.getRecipe, {
    recipeId,
  });

  if (!recipe) {
    return <div>Loading...</div>;
  }
  const ingredients = recipe.ingredients;
  console.log(ingredients);
  return (
    <div className='w-full py-6 space-y-6'>
      <div className='container px-4 space-y-4'>
        <div className='space-y-2'>
          <div className='space-y-2'>
            <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl'>
              {recipe.title}
            </h1>
            <p className='text-gray-500 dark:text-gray-400'>
              {recipe.description}
            </p>
          </div>
          <div className='flex flex-col gap-1 min-[400px]:flex-row'>
            <div className='flex items-center gap-1 text-sm'>
              <ClockIcon className='w-4 h-4 flex-shrink-0' />
              <span className='font-semibold'>Prep time:</span>
              <span>10 min</span>
            </div>
            <div className='flex items-center gap-1 text-sm'>
              <ClockIcon className='w-4 h-4 flex-shrink-0' />
              <span className='font-semibold'>Cook time:</span>
              <span>12 min</span>
            </div>
            <div className='flex items-center gap-1 text-sm'>
              <ClockIcon className='w-4 h-4 flex-shrink-0' />
              <span className='font-semibold'>Total time:</span>
              <span>22 min</span>
            </div>
          </div>
        </div>
        <div className='mx-auto max-w-3xl'>
          <Image
            priority={false}
            width='1100'
            height='550'
            alt='Picture of recipe'
            className='object-contain h-[550px] w-[1100px] m-2 rounded'
            src={getImageUrl(recipe.image)}
          />
        </div>
      </div>
      <div className='bg-gray-100 dark:bg-gray-800'>
        <div className='container px-4 py-6 space-y-4'>
          <div className='space-y-2'>
            <h2 className='text-2xl font-bold tracking-tighter sm:text-3xl'>
              Ingredients
            </h2>
            <p className='text-gray-500 dark:text-gray-400'>
              You&apos;ll need the following ingredients to make this recipe.
            </p>
          </div>
          <div className='grid gap-4 md:grid-cols-2'>
            <ul className='list-disc pl-4 space-y-2'>
              {ingredients.map((ingredient: any) => {
                return (
                  <li key={ingredient.name}>
                    {ingredient.quantity} {ingredient.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className='container px-4 py-6 space-y-4'>
        <div className='space-y-2'>
          <h2 className='text-2xl font-bold tracking-tighter sm:text-3xl'>
            Directions
          </h2>
          <p className='text-gray-500 dark:text-gray-400'>
            Follow these steps to make the perfect chocolate chip cookies.
          </p>
        </div>
        <ol className='list-decimal pl-4 space-y-4'>
          {recipe.directions.map((direction: string[], idx: number) => {
            return <li key={idx}>{direction}</li>;
          })}
        </ol>
      </div>
    </div>
  );
}

function ClockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <circle cx='12' cy='12' r='10' />
      <polyline points='12 6 12 12 16 14' />
    </svg>
  );
}
