import { useTemplateStore } from "@/providers/template-store-provider"
import { PositionOptions } from "@/types"
import { Settings2 } from "lucide-react"

import { GAG } from "@/lib/templates/9gag"
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
  const params = template.params as GAG["params"]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Template Properties</CardTitle>
        <CardDescription>
          Customize your image by changing the properties.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
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
                  bgColor={params.title.bgColor}
                  alignment={params.title.alignment}
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
                  onChangeAlignment={(alignment) =>
                    template.updateParams({
                      title: {
                        ...params.title,
                        alignment,
                      },
                    })
                  }
                  onChangeBgColor={(color) =>
                    template.updateParams({
                      title: {
                        ...params.title,
                        bgColor: color,
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
            <Label>Position</Label>
            <Select
              value={params.position}
              onValueChange={(val: PositionOptions) =>
                template.updateParams({
                  ...params,
                  position: val,
                })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Position" />
              </SelectTrigger>
              <SelectContent>
                {[PositionOptions.TOP, PositionOptions.BOTTOM].map((pos) => (
                  <SelectItem key={pos} value={pos}>
                    {pos}
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
