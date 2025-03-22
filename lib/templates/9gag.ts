import { AlignmentOptions, PositionOptions } from "@/types"
import { z } from "zod"

import { absoluteUrl } from "../url"
import { backgroundSchema } from "./elements/background"
import { canvasSchema } from "./elements/canvas"
import { textSchema } from "./elements/text"

export const gagSchema = z.object({
  name: z.literal("9gag"),
  params: z.object({
    title: textSchema.merge(
      z.object({
        bgColor: z.string(),
        alignment: z.nativeEnum(AlignmentOptions),
      })
    ),
    background: backgroundSchema.pick({
      url: true,
    }),
    position: z.nativeEnum(PositionOptions),
  }),
  canvas: canvasSchema,
})
export type GAG = z.infer<typeof gagSchema>

export const gagDefault: GAG = {
  name: "9gag",
  params: {
    title: {
      text: "Your post title goes here",
      fontFamily: "inter",
      fontWeight: 600,
      fontSize: 52,
      color: "#ffffff",
      bgColor: "#000000",
      alignment: AlignmentOptions.CENTER,
    },
    background: {
      url: absoluteUrl("/9gag-bg.png"),
    },
    position: PositionOptions.TOP,
  },
  canvas: {
    width: 1080,
    height: 1080,
  },
}
