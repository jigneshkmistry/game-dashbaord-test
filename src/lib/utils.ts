import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getBadgeColor(badge: string) {
  switch (badge) {
    case "Explorer":
      return "bg-[#61D2FF]"
    case "Creator":
      return "bg-[#FFE175]"
    case "Designer":
      return "bg-[#00FFF0]"
    case "Visionary":
      return "bg-[#FAADFF]"
    default:
      return "bg-gray-500/80"
  }
}