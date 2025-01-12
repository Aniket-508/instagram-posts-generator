"use client"

import { useTemplateStore } from "@/providers/template-store-provider"
import { CornerPositionOptions, PositionOptions } from "@/types"

import {
  CarouselParams,
  VignetteParams,
} from "@/lib/templates/elements/background"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ImageSelector } from "@/components/image-selector"

export default function BackgroundForm() {
  const template = useTemplateStore((state) => state)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Background Properties</CardTitle>
        <CardDescription>
          Set a custom background for your image.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="backgroundImage">Background Image URL</Label>
          <ImageSelector
            id="backgroundImage"
            onChange={(v) =>
              template.setBackground({
                ...template.background,
                url: v ?? "",
              })
            }
            initialFileName={
              template.background.url
                ? template.background.url.split("/").pop()
                : undefined
            }
          />
        </div>

        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="vignette">Vignette</Label>
          <div className="flex space-x-2">
            <Input
              id="vignette"
              type="color"
              value={template.background.vignette.color}
              onChange={(e) =>
                template.setBackground({
                  ...template.background,
                  vignette: {
                    ...template.background.vignette,
                    color: e.target.value,
                  },
                })
              }
            />
            <Select
              value={template.background.vignette.position}
              onValueChange={(v: VignetteParams["position"]) =>
                template.setBackground({
                  ...template.background,
                  vignette: {
                    ...template.background.vignette,
                    position: v,
                  },
                })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Position" />
              </SelectTrigger>
              <SelectContent>
                {Object.values(PositionOptions).map((pos) => (
                  <SelectItem key={pos} value={pos}>
                    {pos}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="is-carousel">Carousel</Label>
          <div className="flex space-x-2">
            <Input
              id="is-carousel"
              type="color"
              value={template.background.carousel.color}
              onChange={(e) => {
                template.setBackground({
                  ...template.background,
                  carousel: {
                    ...template.background.carousel,
                    color: e.target.value,
                  },
                })
              }}
            />
            <Select
              value={template.background.carousel.position}
              onValueChange={(v: CarouselParams["position"]) => {
                template.setBackground({
                  ...template.background,
                  carousel: {
                    ...template.background.carousel,
                    position: v,
                  },
                })
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Position" />
              </SelectTrigger>
              <SelectContent>
                {Object.values(CornerPositionOptions).map((pos) => (
                  <SelectItem key={pos} value={pos}>
                    {pos.replace("-", " ")}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
