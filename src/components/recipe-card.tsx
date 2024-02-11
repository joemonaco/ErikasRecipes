/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/Kb8c9kKCRua
 */
import { RecipeData } from "@/utils/types/types";
import Link from "next/link";
import Image from "next/image";
import { getImageUrl } from "@/lib/utils";
import { timeFrom } from "@/lib/time-from";
import { useRouter } from "next/navigation";

export function RecipeCard({ recipe }: { recipe: any }) {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push(`/recipes/${recipe._id}`);
      }}
      className="relative group overflow-hidden rounded-lg border border-pink-500 hover:scale-105 transition-color duration-200"
    >
      <Link className="absolute inset-0 focus:outline-none z-10" href="#">
        <span className="sr-only">View</span>
      </Link>
      <div className="flex justify-center items-center">
        <Image
          priority={false}
          width="400"
          height="225"
          alt="Picture of recipe"
          className="object-contain h-[225px] w-[400px] m-2 rounded"
          src={getImageUrl(recipe.image)}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold leading-none line-clamp-2 group-hover:underline">
          {recipe.title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Posted {timeFrom(recipe._creationTime)}
        </p>
      </div>
    </div>
  );
}
