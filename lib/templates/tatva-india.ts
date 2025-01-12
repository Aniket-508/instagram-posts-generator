import { z } from "zod"

import { absoluteUrl } from "@/lib/url"

import { backgroundSchema } from "./elements/background"
import { canvasSchema } from "./elements/canvas"
import { imageSchema } from "./elements/image"
import { textSchema } from "./elements/text"

export const tatvaIndiaSchema = z.object({
  name: z.literal("tatva-india"),
  params: z.object({
    title: textSchema.merge(
      z.object({
        // apply defaults
        fontWeight: textSchema.shape.fontWeight.default(700),
        fontSize: textSchema.shape.fontSize.default(52),
      })
    ),
    description: textSchema.merge(
      z.object({
        // apply defaults
        fontSize: textSchema.shape.fontSize.default(30),
      })
    ),
    logo: imageSchema,
  }),
  background: backgroundSchema,
  canvas: canvasSchema,
})
export type TatvaIndia = z.infer<typeof tatvaIndiaSchema>

export const tatvaIndiaDefault: TatvaIndia = {
  name: "tatva-india",
  params: {
    title: {
      text: "Vercel",
      fontFamily: "inter",
      fontWeight: 700,
      fontSize: 52,
      color: "#030712",
    },
    description: {
      text: "The Frontend Cloud",
      fontFamily: "inter",
      fontWeight: 400,
      fontSize: 30,
      color: "#030712",
    },
    logo: {
      url: absoluteUrl("/vercel.svg"),
    },
  },
  background: {
    url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    color: "#000000",
    vignette: {
      color: "#000000",
      position: "bottom",
    },
    carousel: {
      position: "none",
    },
  },
  canvas: {
    width: 1080,
    height: 1350,
  },
}
