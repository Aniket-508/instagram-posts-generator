import { z } from "zod"

import * as gag from "./9gag"
import * as pubity from "./pubity"
import * as tatvaIndia from "./tatva-india"
import * as tdt from "./tdt"

export const templateNameSchema = z.union([
  z.literal("tatva-india"),
  z.literal("tdt"),
  z.literal("9gag"),
  z.literal("pubity"),
])
export type TemplateName = z.infer<typeof templateNameSchema>

export const templateSchema = z.discriminatedUnion("name", [
  tatvaIndia.tatvaIndiaSchema,
  tdt.tdtSchema,
  gag.gagSchema,
  pubity.pubitySchema,
])
export type Template = z.infer<typeof templateSchema>

export const templateDefaults: Record<TemplateName, Template> = {
  "tatva-india": tatvaIndia.tatvaIndiaDefault,
  tdt: tdt.tdtDefault,
  "9gag": gag.gagDefault,
  pubity: pubity.pubityDefault,
}
