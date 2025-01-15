import { CornerPositionOptions, PositionOptions } from "@/types"
import { z } from "zod"

import { absoluteUrl } from "../url"
import { backgroundSchema } from "./elements/background"
import { canvasSchema } from "./elements/canvas"
import { imageSchema } from "./elements/image"
import { textSchema } from "./elements/text"

export const pubitySchema = z.object({
  name: z.literal("pubity"),
  params: z.object({
    title: textSchema,
    logo: imageSchema,
    background: backgroundSchema.pick({
      url: true,
      carousel: true,
    }),
  }),
  canvas: canvasSchema,
})
export type Pubity = z.infer<typeof pubitySchema>

export const pubityDefault: Pubity = {
  name: "pubity",
  params: {
    title: {
      text: "This is lucy and she has a selfie of herself on her ear",
      fontFamily: "inter",
      fontWeight: 300,
      fontSize: 80,
      color: "#ffffff",
    },
    logo: {
      url: absoluteUrl("/vercel.svg"),
      position: PositionOptions.BOTTOM,
    },
    background: {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT7r8aJPdkPbofitMy0tgXy27fZpp3ow0HAw&s",
      carousel: {
        color: "#ffffff",
        position: CornerPositionOptions.TOP_RIGHT,
      },
    },
  },
  canvas: {
    width: 1080,
    height: 1080,
  },
}
