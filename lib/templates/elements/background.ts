import { z } from "zod"

export const vignetteSchema = z.object({
  color: z.string(),
  position: z.enum(["top", "bottom", "none"]),
})
export type VignetteParams = z.infer<typeof vignetteSchema>

export const CarouselSchema = z.object({
  position: z.enum([
    "top-left",
    "top-right",
    "bottom-left",
    "bottom-right",
    "none",
  ]),
})

export const backgroundSchema = z.object({
  url: z.string().url(),
  color: z.string(),
  vignette: vignetteSchema,
  carousel: CarouselSchema,
})
export type BackgroundParams = z.infer<typeof backgroundSchema>
