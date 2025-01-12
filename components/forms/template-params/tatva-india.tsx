import { useTemplateStore } from "@/providers/template-store-provider"
import { CornerPositionOptions, PositionOptions } from "@/types"
import { Settings2 } from "lucide-react"

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
import { Separator } from "@/components/ui/separator"
import { TextSettings } from "@/components/forms/text-settings"
import { ImageSelector } from "@/components/image-selector"
import { ResponsivePopover } from "@/components/responsive-popover"

export function Form() {
  const template = useTemplateStore((state) => state)
  const params = template.params

  return (
    <Card>
      <CardHeader>
        <CardTitle>Template Properties</CardTitle>
        <CardDescription>
          Customize your image by changing the properties.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
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

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="highlightText">Highlight Text</Label>
              <div className="flex space-x-2">
                <Input
                  id="highlightText"
                  value={params.highlightedText.text}
                  onChange={(e) =>
                    template.updateParams({
                      highlightedText: {
                        ...params.highlightedText,
                        text: e.target.value,
                      },
                    })
                  }
                />

                <ResponsivePopover
                  title="Font Settings"
                  description="Customize the highlighted text font."
                  trigger={
                    <Button variant="outline" size="icon">
                      <Settings2 className="h-4 w-4" />
                    </Button>
                  }
                >
                  <TextSettings
                    fontFamily={params.highlightedText.fontFamily}
                    fontSize={params.highlightedText.fontSize}
                    fontWeight={params.highlightedText.fontWeight}
                    color={params.highlightedText.color}
                    bgColor={params.highlightedText.bgColor}
                    onChangeFontFamily={(fontFamily) =>
                      template.updateParams({
                        highlightedText: {
                          ...params.highlightedText,
                          fontFamily,
                        },
                      })
                    }
                    onChangeFontSize={(fontSize) =>
                      template.updateParams({
                        highlightedText: {
                          ...params.highlightedText,
                          fontSize,
                        },
                      })
                    }
                    onChangeFontWeight={(fontWeight) =>
                      template.updateParams({
                        highlightedText: {
                          ...params.highlightedText,
                          fontWeight,
                        },
                      })
                    }
                    onChangeColor={(color) =>
                      template.updateParams({
                        highlightedText: {
                          ...params.highlightedText,
                          color,
                        },
                      })
                    }
                    onChangeBgColor={(color) =>
                      template.updateParams({
                        highlightedText: {
                          ...params.highlightedText,
                          bgColor: color,
                        },
                      })
                    }
                  />
                </ResponsivePopover>
              </div>
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="description">Description</Label>
              <div className="flex space-x-2">
                <Input
                  id="description"
                  value={params.description.text}
                  onChange={(e) =>
                    template.updateParams({
                      description: {
                        ...params.description,
                        text: e.target.value,
                      },
                    })
                  }
                />

                <ResponsivePopover
                  title="Font Settings"
                  description="Customize the description font."
                  trigger={
                    <Button variant="outline" size="icon">
                      <Settings2 className="h-4 w-4" />
                    </Button>
                  }
                >
                  <TextSettings
                    fontFamily={params.description.fontFamily}
                    fontSize={params.description.fontSize}
                    fontWeight={params.description.fontWeight}
                    color={params.description.color}
                    onChangeFontFamily={(fontFamily) =>
                      template.updateParams({
                        description: {
                          ...params.description,
                          fontFamily,
                        },
                      })
                    }
                    onChangeFontSize={(fontSize) =>
                      template.updateParams({
                        description: {
                          ...params.description,
                          fontSize,
                        },
                      })
                    }
                    onChangeFontWeight={(fontWeight) =>
                      template.updateParams({
                        description: {
                          ...params.description,
                          fontWeight,
                        },
                      })
                    }
                    onChangeColor={(color) =>
                      template.updateParams({
                        description: {
                          ...params.description,
                          color,
                        },
                      })
                    }
                  />
                </ResponsivePopover>
              </div>
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label>Position</Label>
              <Select
                value={template.params.position}
                onValueChange={(val: PositionOptions) =>
                  template.updateParams({
                    ...template.params,
                    position: val,
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

            <Separator />

            <div className="grid w-full max-w-sm items-center gap-1.5">
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
                    params.logo.url
                      ? params.logo.url.split("/").pop()
                      : undefined
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
                          value={template.params.logo.position}
                          onValueChange={(val: CornerPositionOptions) =>
                            template.updateParams({
                              ...template.params,
                              logo: {
                                ...template.params.logo,
                                position: val,
                              },
                            })
                          }
                        >
                          <SelectTrigger className="col-span-2">
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
                  </ResponsivePopover>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="social-media">Social Media</Label>
              <div className="flex space-x-2">
                <Input
                  id="social-media"
                  type="text"
                  value={template.params.socialMedia.text}
                  onChange={(e) =>
                    template.updateParams({
                      ...template.params,
                      socialMedia: {
                        ...template.params.socialMedia,
                        text: e.target.value,
                      },
                    })
                  }
                />
                <ResponsivePopover
                  title="Social Media Settings"
                  description="Customize the social media."
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
                        value={template.params.socialMedia.position}
                        onValueChange={(val: CornerPositionOptions) =>
                          template.updateParams({
                            ...template.params,
                            socialMedia: {
                              ...template.params.socialMedia,
                              position: val,
                            },
                          })
                        }
                      >
                        <SelectTrigger className="col-span-2">
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
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="text-color">Text color</Label>
                      <Input
                        type="color"
                        className="col-span-2"
                        value={template.params.socialMedia.color}
                        onChange={(e) =>
                          template.updateParams({
                            ...template.params,
                            socialMedia: {
                              ...template.params.socialMedia,
                              color: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                  </div>
                </ResponsivePopover>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
