import { CornerPositionOptions, PositionOptions } from "@/types"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const getPositionClasses = (
  position: `${CornerPositionOptions | PositionOptions}`,
  fromY: "sm" | "base" = "base",
  fromX: "sm" | "base" = "base"
) => {
  const top = fromY === "sm" ? "top-0" : "top-8"
  const bottom = fromY === "sm" ? "bottom-0" : "bottom-8"
  const left = fromX === "sm" ? "left-4" : "left-8"
  const right = fromX === "sm" ? "right-4" : "right-8"
  switch (position) {
    case CornerPositionOptions.TOP_LEFT:
      return `${top} ${left}`
    case CornerPositionOptions.TOP_RIGHT:
      return `${top} ${right}`
    case CornerPositionOptions.BOTTOM_LEFT:
      return `${bottom} ${left}`
    case CornerPositionOptions.BOTTOM_RIGHT:
      return `${bottom} ${right}`
    default:
      return ""
  }
}

export const getVignetteGradient = (
  position: PositionOptions,
  color: string
) => {
  if (position === PositionOptions.NONE) return "none"
  if (position === PositionOptions.TOP) {
    return `linear-gradient(to bottom, ${color} 0%, transparent 70%)`
  }
  return `linear-gradient(to top, ${color} 0%, transparent 70%)`
}

export const getSocialMediaRotation = (position: CornerPositionOptions) => {
  if (
    position === CornerPositionOptions.TOP_RIGHT ||
    position === CornerPositionOptions.BOTTOM_RIGHT
  ) {
    return "rotate(270deg)"
  } else {
    return "rotate(90deg)"
  }
}
