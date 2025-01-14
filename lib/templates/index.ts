import { z } from "zod"

import * as tatvaIndia from "./tatva-india"
import * as tdt from "./tdt"

export const templateNameSchema = z.union([
  z.literal("tatva-india"),
  z.literal("tdt"),
])
export type TemplateName = z.infer<typeof templateNameSchema>

export const templateSchema = z.discriminatedUnion("name", [
  tatvaIndia.tatvaIndiaSchema,
  tdt.tdtSchema,
])
export type Template = z.infer<typeof templateSchema>

export const templateDefaults: Record<TemplateName, Template> = {
  "tatva-india": tatvaIndia.tatvaIndiaDefault,
  tdt: tdt.tdtDefault,
}
