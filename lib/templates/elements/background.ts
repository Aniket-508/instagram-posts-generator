import { CornerPositionOptions, PositionOptions } from "@/types"
import { z } from "zod"

export const vignetteSchema = z.object({
  color: z.string(),
  position: z.nativeEnum(PositionOptions),
})
export type VignetteParams = z.infer<typeof vignetteSchema>

export const carouselSchema = z.object({
  color: z.string(),
  position: z.nativeEnum(CornerPositionOptions),
})
export type CarouselParams = z.infer<typeof carouselSchema>

export const backgroundSchema = z.object({
  color: z.string(),
  url: z.string().url(),
  vignette: vignetteSchema,
  carousel: carouselSchema,
})
export type BackgroundParams = z.infer<typeof backgroundSchema>
