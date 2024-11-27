import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Position } from "@/types";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getPositionClasses = (position: Position) => {
  switch (position) {
    case "top-left":
      return "top-4 left-8";
    case "top-right":
      return "top-4 right-8";
    case "bottom-left":
      return "bottom-4 left-8";
    case "bottom-right":
      return "bottom-4 right-8";
    default:
      return "";
  }
};
