import { CornerPositionOptions, PositionOptions } from "@/types"
import { z } from "zod"

import { absoluteUrl } from "@/lib/url"

import { backgroundSchema } from "./elements/background"
import { canvasSchema } from "./elements/canvas"
import { imageSchema } from "./elements/image"
import { textSchema } from "./elements/text"

export const tatvaIndiaSchema = z.object({
  name: z.literal("tatva-india"),
  params: z.object({
    title: textSchema,
    description: textSchema,
    highlightedText: z.object({
      text: z.string(),
      // apply defaults
      bgColor: textSchema.shape.color.default("#777777"),
      color: textSchema.shape.color.default("#ffffff"),
    }),
    logo: imageSchema,
    position: z.nativeEnum(PositionOptions).default(PositionOptions.BOTTOM),
    socialMedia: z.object({
      text: z.string(),
      // apply defaults
      position: z
        .nativeEnum(CornerPositionOptions)
        .default(CornerPositionOptions.NONE),
      color: z.string().default("#ffffff"),
    }),
    background: backgroundSchema.omit({ color: true }),
  }),
  canvas: canvasSchema,
})
export type TatvaIndia = z.infer<typeof tatvaIndiaSchema>

export const tatvaIndiaDefault: TatvaIndia = {
  name: "tatva-india",
  params: {
    title: {
      text: "Vercel: Your Complete Platform for the Web",
      fontFamily: "inter",
      fontWeight: 700,
      fontSize: 52,
      color: "#ffffff",
    },
    description: {
      text: "Build and deploy your web apps with the best developer experience.",
      fontFamily: "inter",
      fontWeight: 400,
      fontSize: 30,
      color: "#ffffff",
    },
    highlightedText: {
      text: "Vercel",
      bgColor: "#777777",
      color: "#ffffff",
    },
    logo: {
      url: absoluteUrl("/vercel.svg"),
      position: CornerPositionOptions.BOTTOM_LEFT,
    },
    position: PositionOptions.BOTTOM,
    socialMedia: {
      color: "#ffffff",
      position: CornerPositionOptions.TOP_RIGHT,
      text: "vercel",
    },
    background: {
      url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
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
