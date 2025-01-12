import { CornerPositionOptions } from "@/types"
import { z } from "zod"

export const imageSchema = z.object({
  url: z.string().url(),
  position: z.nativeEnum(CornerPositionOptions),
})
export type Image = z.infer<typeof imageSchema>
