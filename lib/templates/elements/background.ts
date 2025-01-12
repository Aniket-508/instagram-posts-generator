import { z } from "zod"

export enum PositionOptions {
  TOP = "top",
  BOTTOM = "bottom",
  NONE = "none",
}
export const vignetteSchema = z.object({
  color: z.string(),
  position: z.nativeEnum(PositionOptions),
})
export type VignetteParams = z.infer<typeof vignetteSchema>

export enum CornerPositionOptions {
  TOP_LEFT = "top-left",
  TOP_RIGHT = "top-right",
  BOTTOM_LEFT = "bottom-left",
  BOTTOM_RIGHT = "bottom-right",
  NONE = "none",
}
export const carouselSchema = z.object({
  color: z.string(),
  position: z.nativeEnum(CornerPositionOptions),
})
export type CarouselParams = z.infer<typeof carouselSchema>

export const backgroundSchema = z.object({
  url: z.string().url(),
  vignette: vignetteSchema,
  carousel: carouselSchema,
})
export type BackgroundParams = z.infer<typeof backgroundSchema>
