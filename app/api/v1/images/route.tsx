import { ImageResponse } from "next/og"
import { NextResponse, type NextRequest } from "next/server"

import { getFontsFromTemplate, getFontUrl } from "@/lib/fonts"
import { ratelimit } from "@/lib/rate-limit"
import { templateSchema } from "@/lib/templates"
import { templates } from "@/components/templates"

export const runtime = "edge"

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get("x-forwarded-for") ?? "127.0.0.1"
    const { success, limit, reset, remaining } = await ratelimit.limit(ip)

    if (!success) {
      return new NextResponse("Too Many Requests", {
        status: 429,
        headers: {
          "X-RateLimit-Limit": limit.toString(),
          "X-RateLimit-Remaining": remaining.toString(),
          "X-RateLimit-Reset": reset.toString(),
        },
      })
    }

    const body = await request.json()

    const template = templateSchema.parse(body)
    const fonts = getFontsFromTemplate(template.params)
    const fontsResponses = await Promise.all(
      fonts.map((f) =>
        // Next.js automatically caches fetch requests
        fetch(getFontUrl({ family: f.family, weight: f.weight }))
      )
    )
    const fontBuffers = await Promise.all(
      fontsResponses.map((res) => res.arrayBuffer())
    )

    const { Template } = templates[template.name]

    return new ImageResponse(<Template template={template} />, {
      width: template.canvas.width,
      height: template.canvas.height,
      fonts: fonts.map((f, i) => {
        return {
          name: f.family,
          weight: f.weight,
          data: fontBuffers[i],
          style: "normal",
        }
      }),
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
