"use client";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { RecipeCard } from "@/components/recipe-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { checkPassword } from "@/lib/utils";

export default function RecipePage() {
  const recipes = useQuery(api.recipe.getRecipes);
  const router = useRouter();
  const [addPw, setAddPw] = useState("");

  return (
    <div className='flex'>
      <div w-fill>
        <Dialog>
          <DialogTrigger>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 4.5v15m7.5-7.5h-15'
              />
            </svg>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Enter password to Continue</DialogTitle>
              <Input
                id='password'
                type='text'
                value={addPw}
                onChange={(e) => setAddPw(e.target.value)}
                placeholder='Password'
              />
              <Button
                className='bg-pink-500 hover:bg-pink-400'
                onClick={() => {
                  if (checkPassword(addPw)) {
                    router.push("/recipes/add");
                  } else {
                  }
                }}
              >
                Submit
              </Button>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div>
        <h1 className='text-3xl font-bold text-center my-8'>
          Erika&apos;s Recipes
        </h1>
        <h2 className='text-xl text-center my-8'>
          All my recipes can be found here!
        </h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {recipes?.map((recipe) => {
            return <RecipeCard key={recipe._id} recipe={recipe} />;
          })}
        </div>
      </div>
    </div>
  );
}
