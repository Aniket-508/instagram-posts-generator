import { z } from "zod"

import * as tatvaIndia from "./tatva-india"

export const templateNameSchema = z.literal("tatva-india")
export type TemplateName = z.infer<typeof templateNameSchema>

export const templateSchema = z.discriminatedUnion("name", [
  tatvaIndia.tatvaIndiaSchema,
])
export type Template = z.infer<typeof templateSchema>

export const templateDefaults: Record<TemplateName, Template> = {
  "tatva-india": tatvaIndia.tatvaIndiaDefault,
}
