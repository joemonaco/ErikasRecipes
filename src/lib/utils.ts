import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function getImageUrl(imageId: string) {
  return `${process.env.NEXT_PUBLIC_CONVEX_URL}/api/storage/${imageId}`;
}

export function useActivePath(): (path: string) => boolean {
  const pathname = usePathname();

  const checkActivePath = (path: string) => {
    if (path === "/" && pathname !== path) {
      return false;
    }
    return pathname.startsWith(path);
  };

  return checkActivePath;
}

export function checkPassword(pw: string) {
  if (`${process.env.NEXT_PUBLIC_ADD_RECIPE_PASSWORD}` === pw) {
    return true;
  }
  else return false;
}
