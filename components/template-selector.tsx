"use client"

import { useTemplateStore } from "@/providers/template-store-provider"

import type { Template } from "@/lib/templates"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { skeletons } from "@/components/template-skeletons"

const templates = [
  {
    name: "9gag",
    skeleton: skeletons["9gag"],
  },
  {
    name: "pubity",
    skeleton: skeletons["pubity"],
  },
  {
    name: "thetatvaindia",
    skeleton: skeletons["thetatvaindia"],
  },
  {
    name: "tdtinsta",
    skeleton: skeletons.tdtinsta,
  },
]

export default function TemplateSelector() {
  const template = useTemplateStore((state) => state)

  return (
    <div className="space-y-4">
      <h2 className="sr-only text-sm font-medium">Choose a template</h2>

      <Carousel
        opts={{
          align: "start",
          dragFree: true,
        }}
      >
        <RadioGroup
          value={template.name}
          onValueChange={(v) => template.setTemplate(v as Template["name"])}
        >
          <CarouselContent>
            {templates.map((t) => (
              <CarouselItem
                key={t.name}
                className="basis-40 md:basis-64 lg:basis-1/5"
              >
                <RadioGroupItem
                  id={t.name}
                  value={t.name}
                  className="peer sr-only"
                />
                <Label
                  htmlFor={t.name}
                  className="flex aspect-video max-h-24 items-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary sm:max-h-32 [&:has([data-state=checked])]:border-primary"
                >
                  <t.skeleton />
                </Label>
              </CarouselItem>
            ))}
          </CarouselContent>
        </RadioGroup>

        {/* NOTE: hiding the buttons for large screens for now since we only have 5 templates */}
        <CarouselPrevious className="left-2 lg:hidden" variant="secondary" />
        <CarouselNext className="right-2 lg:hidden" variant="secondary" />
      </Carousel>
    </div>
  )
}
