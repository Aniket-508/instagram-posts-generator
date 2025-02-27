import { CornerPositionOptions, PositionOptions } from "@/types"
import { z } from "zod"

export const imageSchema = z.object({
  url: z.string().url(),
  width: z.number(),
  height: z.number(),
  position: z.union([
    z.nativeEnum(CornerPositionOptions),
    z.nativeEnum(PositionOptions),
  ]),
})
export type Image = z.infer<typeof imageSchema>
