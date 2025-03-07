import { clsx, type ClassValue } from "clsx"
import { Sofia } from "next/font/google"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const sofia = Sofia({
  variable:"--font-sofia",
  subsets:["latin"],
  weight:[
    "400"
  ]
})