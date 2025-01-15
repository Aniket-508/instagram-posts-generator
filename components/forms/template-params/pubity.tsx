import { useTemplateStore } from "@/providers/template-store-provider"
import { CornerPositionOptions, PositionOptions } from "@/types"
import { Settings2 } from "lucide-react"

import { CarouselParams } from "@/lib/templates/elements/background"
import { Pubity } from "@/lib/templates/pubity"
import { Button } from "@/components/ui/button"
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
import { ResponsivePopover } from "@/components/responsive-popover"

import { TextSettings } from "../text-settings"

export function Form() {
  const template = useTemplateStore((state) => state)
  const params = template.params as Pubity["params"]

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Template Properties</CardTitle>
          <CardDescription>
            Customize your image by changing the properties.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="title">Title</Label>
            <div className="flex space-x-2">
              <Input
                id="title"
                value={params.title.text}
                onChange={(e) =>
                  template.updateParams({
                    title: {
                      ...params.title,
                      text: e.target.value,
                    },
                  })
                }
              />

              <ResponsivePopover
                title="Font Settings"
                description="Customize the title font."
                trigger={
                  <Button variant="outline" size="icon">
                    <Settings2 className="h-4 w-4" />
                  </Button>
                }
              >
                <TextSettings
                  fontFamily={params.title.fontFamily}
                  fontSize={params.title.fontSize}
                  fontWeight={params.title.fontWeight}
                  color={params.title.color}
                  onChangeFontFamily={(fontFamily) =>
                    template.updateParams({
                      title: {
                        ...params.title,
                        fontFamily,
                      },
                    })
                  }
                  onChangeFontSize={(fontSize) =>
                    template.updateParams({
                      title: {
                        ...params.title,
                        fontSize,
                      },
                    })
                  }
                  onChangeFontWeight={(fontWeight) =>
                    template.updateParams({
                      title: {
                        ...params.title,
                        fontWeight,
                      },
                    })
                  }
                  onChangeColor={(color) =>
                    template.updateParams({
                      title: {
                        ...params.title,
                        color,
                      },
                    })
                  }
                />
              </ResponsivePopover>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Background Properties</CardTitle>
          <CardDescription>
            Set a custom background for your image.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="logo">Logo</Label>
            <div className="flex">
              <ImageSelector
                id="logo"
                onChange={(v) =>
                  template.updateParams({
                    logo: {
                      ...params.logo,
                      url: v ?? "",
                    },
                  })
                }
                initialFileName={
                  params.logo.url ? params.logo.url.split("/").pop() : undefined
                }
              />
              <div className="ml-2">
                <ResponsivePopover
                  title="Logo Settings"
                  description="Customize the logo."
                  trigger={
                    <Button variant="outline" size="icon">
                      <Settings2 className="h-4 w-4" />
                    </Button>
                  }
                >
                  <div className="grid gap-2">
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="position">Position</Label>
                      <Select
                        value={params.logo.position}
                        onValueChange={(val: PositionOptions) =>
                          template.updateParams({
                            ...params,
                            logo: {
                              ...params.logo,
                              position: val,
                            },
                          })
                        }
                      >
                        <SelectTrigger className="col-span-2">
                          <SelectValue placeholder="Position" />
                        </SelectTrigger>
                        <SelectContent>
                          {[PositionOptions.TOP, PositionOptions.BOTTOM].map(
                            (pos) => (
                              <SelectItem key={pos} value={pos}>
                                {pos.replace("-", " ")}
                              </SelectItem>
                            )
                          )}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </ResponsivePopover>
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="backgroundImage">Background Image URL</Label>
            <ImageSelector
              id="backgroundImage"
              onChange={(v) =>
                template.updateParams({
                  ...params,
                  background: {
                    ...params.background,
                    url: v ?? "",
                  },
                })
              }
              initialFileName={
                params.background.url
                  ? params.background.url.split("/").pop()
                  : undefined
              }
            />
          </div>

          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="is-carousel">Carousel</Label>
            <div className="flex space-x-2">
              <Input
                id="is-carousel"
                type="color"
                value={params.background.carousel.color}
                onChange={(e) => {
                  template.updateParams({
                    ...params,
                    background: {
                      ...params.background,
                      carousel: {
                        ...params.background.carousel,
                        color: e.target.value,
                      },
                    },
                  })
                }}
              />
              <Select
                value={params.background.carousel.position}
                onValueChange={(v: CarouselParams["position"]) => {
                  template.updateParams({
                    ...params,
                    background: {
                      ...params.background,
                      carousel: {
                        ...params.background.carousel,
                        position: v,
                      },
                    },
                  })
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Position" />
                </SelectTrigger>
                <SelectContent>
                  {[
                    CornerPositionOptions.TOP_LEFT,
                    CornerPositionOptions.TOP_RIGHT,
                    CornerPositionOptions.NONE,
                  ].map((pos) => (
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
    </>
  )
}
