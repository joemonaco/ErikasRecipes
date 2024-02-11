"use client";
import { Ingredient, RecipeData } from "@/utils/types/types";
import { useMutation } from "convex/react";
import React, { useState } from "react";
import { api } from "../../../../convex/_generated/api";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { UploadButton, UploadFileResponse } from "@xixixao/uploadstuff/react";
import Image from "next/image";
import { getImageUrl } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";

export default function RecipeForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [directions, setDirections] = useState<string[]>([]);
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [recipeImage, setRecipeImage] = useState("");
  const [prepTime, setPrepTime] = useState("");
  const [cookTime, setCookTime] = useState("");
  const generateUploadUrl = useMutation(api.files.generateUploadUrl);
  const addRecipe = useMutation(api.recipe.addRecipe);
  const router = useRouter();
  // Handle ingredient changes
  const handleAddIngredient = () => {
    setIngredients([...ingredients, { name: "", quantity: "" }]);
  };

  const handleIngredientChange = (
    index: number,
    field: keyof Ingredient,
    value: string
  ) => {
    const newIngredients = ingredients.map((ingredient, i) =>
      i === index ? { ...ingredient, [field]: value } : ingredient
    );
    setIngredients(newIngredients);
  };

  const handleRemoveIngredient = (index: number) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };
  // Handle direction changes
  const handleAddDirection = () => {
    setDirections([...directions, ""]);
  };

  const handleDirectionChange = (index: number, value: string) => {
    const newDirections = directions.map((direction, i) =>
      i === index ? value : direction
    );
    setDirections(newDirections);
  };

  const handleRemoveDirection = (index: number) => {
    setDirections(directions.filter((_, i) => i !== index));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const recipeData: RecipeData = {
      title,
      image: recipeImage,
      prepTime,
      cookTime,
      description,
      directions: directions.filter((d) => d.trim() !== ""), // Remove empty directions
      ingredients: ingredients.filter(
        (i) => i.name.trim() !== "" && i.quantity.trim() !== ""
      ), // Remove empty ingredients
    };
    const recipeId = await addRecipe({ recipeData });
    router.push(`/recipes/${recipeId}`);
    // Reset form or provide feedback to the user
  };

  return (
    <div className='w-full max-w-lg p-6 space-y-4'>
      <div className='space-y-2'>
        <h1 className='text-2xl font-bold'>Add Recipe</h1>
        <p className='text-gray-500 dark:text-gray-400'>
          Enter the details of your recipe
        </p>
      </div>
      <form className='space-y-4' onSubmit={handleSubmit}>
        <div className='space-y-2'>
          {recipeImage && (
            <Image
              width='200'
              height='200'
              alt={title}
              src={getImageUrl(recipeImage)}
            />
          )}

          <Button type='button' className='bg-pink-500 hover:bg-pink-400'>
            <UploadButton
              uploadUrl={generateUploadUrl}
              fileTypes={["image/*"]}
              onUploadComplete={async (uploaded: UploadFileResponse[]) => {
                setRecipeImage((uploaded[0].response as any).storageId);
              }}
              onUploadError={(error: unknown) => {
                alert(`ERROR! ${error}`);
              }}
            />
          </Button>
        </div>
        <div className='space-y-2'>
          <Label htmlFor='name'>Name</Label>
          <Input
            id='name'
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Enter recipe name'
          />
        </div>
        <div className='space-y-2'>
          <Label htmlFor='prep'>Prep Time</Label>
          <Input
            id='prep'
            type='text'
            value={prepTime}
            onChange={(e) => setPrepTime(e.target.value)}
            placeholder='Enter Prep Time'
          />
        </div>
        <div className='space-y-2'>
          <Label htmlFor='cook'>Cook Time</Label>
          <Input
            id='cook'
            type='text'
            value={cookTime}
            onChange={(e) => setCookTime(e.target.value)}
            placeholder='Enter Prep Time'
          />
        </div>
        <div className='space-y-2'>
          <Label>Description</Label>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Description'
          />
        </div>
        <div className='space-y-2'>
          <Label htmlFor='ingredients'>Ingredients</Label>
          <ol className='list-decimal space-y-2'>
            {ingredients.map((ingredient, index) => (
              <li key={`ingredient-${index}`}>
                <div className='flex items-center gap-2'>
                  <Input
                    id='ingredients'
                    placeholder='Enter ingredient'
                    type='text'
                    value={ingredient.name}
                    onChange={(e) =>
                      handleIngredientChange(index, "name", e.target.value)
                    }
                  />
                  <Input
                    id='quantity'
                    placeholder='Enter quantity'
                    type='text'
                    value={ingredient.quantity}
                    onChange={(e) =>
                      handleIngredientChange(index, "quantity", e.target.value)
                    }
                  />
                  <Button
                    variant='outline'
                    type='button'
                    onClick={() => handleRemoveIngredient(index)}
                  >
                    <svg
                      className='h-6 w-6'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M6 18L18 6M6 6l12 12'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                      />
                    </svg>
                  </Button>
                </div>
              </li>
            ))}
          </ol>
          <Button variant='outline' type='button' onClick={handleAddIngredient}>
            Add Ingredient
          </Button>
        </div>
        <div className='space-y-2'>
          <Label htmlFor='directions'>Directions</Label>
          <ol className='list-decimal space-y-2'>
            {directions.map((direction, index) => (
              <li key={`direction-${index}`}>
                <div className='flex items-center gap-2'>
                  <Input
                    id='directions'
                    value={direction}
                    onChange={(e) =>
                      handleDirectionChange(index, e.target.value)
                    }
                    placeholder={`Step ${index + 1}`}
                  />
                  <Button
                    type='button'
                    variant='outline'
                    onClick={() => handleRemoveDirection(index)}
                  >
                    <svg
                      className='h-6 w-6'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M6 18L18 6M6 6l12 12'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                      />
                    </svg>
                  </Button>
                </div>
              </li>
            ))}
          </ol>
          <Button variant='outline' type='button' onClick={handleAddDirection}>
            Add Direction
          </Button>
        </div>
        <Button className='bg-pink-500' type='submit'>
          Submit
        </Button>
      </form>
    </div>
  );
}
