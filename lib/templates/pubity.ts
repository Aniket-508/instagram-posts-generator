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
      text: "Your post title goes here",
      fontFamily: "inter",
      fontWeight: 800,
      fontSize: 80,
      color: "#ffffff",
    },
    logo: {
      url: absoluteUrl("/vercel.svg"),
      position: PositionOptions.TOP,
      width: 32,
      height: 32,
    },
    background: {
      url: absoluteUrl("/pubity-bg.jpeg"),
      carousel: {
        color: "#ffffff",
        position: CornerPositionOptions.TOP_RIGHT,
      },
    },
  },
  canvas: {
    width: 1080,
    height: 1350,
  },
}
