import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Position } from "@/types";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getSocialPositionClasses = (position: Position) => {
  switch (position) {
    case "top-left":
      return "top-4 left-2";
    case "top-right":
      return "top-4 right-2 ";
    case "bottom-left":
      return "bottom-4 left-2";
    case "bottom-right":
      return "bottom-4 right-2 rotate-180";
    default:
      return "";
  }
};

export const getPositionClasses = (position: Position) => {
  switch (position) {
    case "top-left":
      return "top-4 left-4";
    case "top-right":
      return "top-4 right-4";
    case "bottom-left":
      return "bottom-4 left-4";
    case "bottom-right":
      return "bottom-4 right-4";
    default:
      return "";
  }
};
