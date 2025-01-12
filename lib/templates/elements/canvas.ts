import { z } from "zod"

const DEFAULT_WIDTH = 1080
const DEFAULT_HEIGHT = 1350

export const canvasSchema = z.object({
  width: z.number().default(DEFAULT_WIDTH),
  height: z.number().default(DEFAULT_HEIGHT),
})
export type CanvasParams = z.infer<typeof canvasSchema>

export const canvasDefault: CanvasParams = {
  width: DEFAULT_WIDTH,
  height: DEFAULT_HEIGHT,
}
