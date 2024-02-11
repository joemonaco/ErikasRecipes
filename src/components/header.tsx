/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/wrnkkpMad09
 */
"use client";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
// import { SearchIcon, MenuIcon, XIcon } from "@heroicons/react/outline"; // Make sure to install @heroicons/react
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { useActivePath } from "@/lib/utils";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", name: "Home" },
    { href: "/recipes", name: "Recipes" },
    { href: "/favorites", name: "Favorites" },
    { href: "/about", name: "About" },
  ];

  const checkActivePath = useActivePath();

  const classActive =
    "py-4 px-2 text-pink-500 border-b-4 hover:text-pink-500 border-pink-500 font-semibold";
  const classInActive =
    "py-4 px-2 text-black-500 hover:text-pink-500 border-pink-500 font-semibold";

  return (
    <nav className="bg-pink-300 shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              {/* Logo or brand name */}
              <Link href="/" className="flex items-center py-4 px-2">
                <span className="font-semibold text-black-500 text-lg">
                  Erika's Recipes
                </span>
              </Link>
            </div>
            {/* Primary Navbar items */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={
                      checkActivePath(item.href) ? classActive : classInActive
                    }
                  >
                    {item.name}
                  </Link>
                );
              })}

              {/* <Link
                href="/"
                className="py-4 px-2 text-black-500 border-b-4 hover:text-pink-500 border-pink-500 font-semibold "
              >
                Home
              </Link>
              <Link
                href="/recipes/add"
                className="py-4 px-2 text-black-500 font-semibold hover:text-pink-500 transition duration-300"
              >
                Recipes
              </Link>
              <Link
                href="/favorites"
                className="py-4 px-2 text-black-500 font-semibold hover:text-pink-500 transition duration-300"
              >
                Favorites
              </Link>
              <Link
                href="/about"
                className="py-4 px-2 text-black-500 font-semibold hover:text-pink-500 transition duration-300"
              >
                About
              </Link> */}
            </div>
          </div>
          {/* Secondary Navbar Items */}
          <div className="hidden md:flex items-center space-x-3 ">
            <div className="relative">
              <MagnifyingGlassIcon className="w-5 h-5 absolute top-2.5 left-2 text-black-400" />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 p-2 border rounded-md focus:outline-none focus:border-pink-500"
              />
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              className="outline-none  bg-pink-500"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <Link
          href="/"
          className="block text-sm px-2 py-4 text-black-700 hover:bg-pink-500 transition duration-300"
        >
          Home
        </Link>
        <Link
          href="/recipes/add"
          className="block text-sm px-2 py-4 text-black-700 hover:bg-pink-500 transition duration-300"
        >
          Recipes
        </Link>
        <Link
          href="/favorites"
          className="block text-sm px-2 py-4 text-black-700 hover:bg-pink-500 transition duration-300"
        >
          Favorites
        </Link>
        <Link
          href="/about"
          className="block text-sm px-2 py-4 text-black-700 hover:bg-pink-500 transition duration-300"
        >
          About
        </Link>
        <div className="px-4 py-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search"
              className="pl-10 p-2 border rounded-md focus:outline-none focus:border-pink-500"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}