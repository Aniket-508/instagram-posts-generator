import { z } from "zod"

import { backgroundSchema } from "./elements/background"
import { canvasSchema } from "./elements/canvas"
import { textSchema } from "./elements/text"

export const tdtSchema = z.object({
  name: z.literal("tdt"),
  params: z.object({
    title: textSchema,
    username: textSchema,
    shortName: textSchema,
    fullName: textSchema,
    background: backgroundSchema.pick({
      color: true,
    }),
  }),
  canvas: canvasSchema,
})
export type TDT = z.infer<typeof tdtSchema>

export const tdtDefault: TDT = {
  name: "tdt",
  params: {
    title: {
      text: "Basically dating is about watching your favourite person turn into a life lesson",
      fontFamily: "inter",
      fontWeight: 300,
      fontSize: 52,
      color: "#ffffff",
    },
    username: {
      text: "tdtinsta",
      fontFamily: "inter",
      fontWeight: 200,
      fontSize: 30,
      color: "#ffffff",
    },
    shortName: {
      text: "tdt",
      fontFamily: "inter",
      fontWeight: 200,
      fontSize: 30,
      color: "#ffffff",
    },
    fullName: {
      text: "terribly dank tales",
      fontFamily: "inter",
      fontWeight: 200,
      fontSize: 30,
      color: "#ffffff",
    },
    background: {
      color: "#1a1a1a",
    },
  },
  canvas: {
    width: 1080,
    height: 1080,
  },
}
