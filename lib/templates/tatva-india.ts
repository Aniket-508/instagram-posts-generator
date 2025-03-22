import { CornerPositionOptions, PositionOptions } from "@/types"
import { z } from "zod"

import { absoluteUrl } from "@/lib/url"

import { backgroundSchema } from "./elements/background"
import { canvasSchema } from "./elements/canvas"
import { imageSchema } from "./elements/image"
import { textSchema } from "./elements/text"

export const tatvaIndiaSchema = z.object({
  name: z.literal("thetatvaindia"),
  params: z.object({
    title: textSchema,
    description: textSchema,
    highlightedText: z.object({
      text: z.string(),
      // apply defaults
      bgColor: textSchema.shape.color,
      color: textSchema.shape.color,
    }),
    logo: imageSchema,
    position: z.nativeEnum(PositionOptions).default(PositionOptions.BOTTOM),
    socialMedia: z.object({
      text: z.string(),
      // apply defaults
      position: z
        .nativeEnum(CornerPositionOptions)
        .default(CornerPositionOptions.NONE),
      color: z.string(),
    }),
    background: backgroundSchema.omit({ color: true }),
  }),
  canvas: canvasSchema,
})
export type TatvaIndia = z.infer<typeof tatvaIndiaSchema>

export const tatvaIndiaDefault: TatvaIndia = {
  name: "thetatvaindia",
  params: {
    title: {
      text: "Highlight: Your post title goes here",
      fontFamily: "inter",
      fontWeight: 700,
      fontSize: 52,
      color: "#ffffff",
    },
    description: {
      text: "Your post description goes here",
      fontFamily: "inter",
      fontWeight: 400,
      fontSize: 30,
      color: "#ffffff",
    },
    highlightedText: {
      text: "Highlight",
      bgColor: "#777777",
      color: "#ffffff",
    },
    logo: {
      url: absoluteUrl("/vercel.svg"),
      position: CornerPositionOptions.BOTTOM_LEFT,
      width: 64,
      height: 64,
    },
    position: PositionOptions.BOTTOM,
    socialMedia: {
      color: "#ffffff",
      position: CornerPositionOptions.TOP_RIGHT,
      text: "socials",
    },
    background: {
      url: absoluteUrl("/tatva-bg.jpeg"),
      vignette: {
        color: "#000000",
        position: PositionOptions.BOTTOM,
      },
      carousel: {
        color: "#ffffff",
        position: CornerPositionOptions.BOTTOM_RIGHT,
      },
    },
  },
  canvas: {
    width: 1080,
    height: 1350,
  },
}
