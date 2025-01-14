import { useTemplateStore } from "@/providers/template-store-provider"
import { Settings2 } from "lucide-react"

import { TDT } from "@/lib/templates/tdt"
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
import { TextSettings } from "@/components/forms/text-settings"
import { ResponsivePopover } from "@/components/responsive-popover"

export function Form() {
  const template = useTemplateStore((state) => state)
  const params = template.params as TDT["params"]

  return (
    <>
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
                <Label htmlFor="username">Username</Label>
                <div className="flex space-x-2">
                  <Input
                    id="username"
                    value={params.username.text}
                    onChange={(e) =>
                      template.updateParams({
                        username: {
                          ...params.username,
                          text: e.target.value,
                        },
                      })
                    }
                  />

                  <ResponsivePopover
                    title="Font Settings"
                    description="Customize the short name font."
                    trigger={
                      <Button variant="outline" size="icon">
                        <Settings2 className="h-4 w-4" />
                      </Button>
                    }
                  >
                    <TextSettings
                      fontFamily={params.username.fontFamily}
                      fontSize={params.username.fontSize}
                      fontWeight={params.username.fontWeight}
                      color={params.username.color}
                      onChangeFontFamily={(fontFamily) =>
                        template.updateParams({
                          username: {
                            ...params.username,
                            fontFamily,
                          },
                        })
                      }
                      onChangeFontSize={(fontSize) =>
                        template.updateParams({
                          username: {
                            ...params.username,
                            fontSize,
                          },
                        })
                      }
                      onChangeFontWeight={(fontWeight) =>
                        template.updateParams({
                          username: {
                            ...params.username,
                            fontWeight,
                          },
                        })
                      }
                      onChangeColor={(color) =>
                        template.updateParams({
                          username: {
                            ...params.username,
                            color,
                          },
                        })
                      }
                    />
                  </ResponsivePopover>
                </div>
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="shortName">Short Name</Label>
                <div className="flex space-x-2">
                  <Input
                    id="shortName"
                    value={params.shortName.text}
                    onChange={(e) =>
                      template.updateParams({
                        shortName: {
                          ...params.shortName,
                          text: e.target.value,
                        },
                      })
                    }
                  />

                  <ResponsivePopover
                    title="Font Settings"
                    description="Customize the short name font."
                    trigger={
                      <Button variant="outline" size="icon">
                        <Settings2 className="h-4 w-4" />
                      </Button>
                    }
                  >
                    <TextSettings
                      fontFamily={params.shortName.fontFamily}
                      fontSize={params.shortName.fontSize}
                      fontWeight={params.shortName.fontWeight}
                      color={params.shortName.color}
                      onChangeFontFamily={(fontFamily) =>
                        template.updateParams({
                          shortName: {
                            ...params.shortName,
                            fontFamily,
                          },
                        })
                      }
                      onChangeFontSize={(fontSize) =>
                        template.updateParams({
                          shortName: {
                            ...params.shortName,
                            fontSize,
                          },
                        })
                      }
                      onChangeFontWeight={(fontWeight) =>
                        template.updateParams({
                          shortName: {
                            ...params.shortName,
                            fontWeight,
                          },
                        })
                      }
                      onChangeColor={(color) =>
                        template.updateParams({
                          shortName: {
                            ...params.shortName,
                            color,
                          },
                        })
                      }
                    />
                  </ResponsivePopover>
                </div>
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="fullName">Full Name</Label>
                <div className="flex space-x-2">
                  <Input
                    id="fullName"
                    value={params.fullName.text}
                    onChange={(e) =>
                      template.updateParams({
                        fullName: {
                          ...params.fullName,
                          text: e.target.value,
                        },
                      })
                    }
                  />

                  <ResponsivePopover
                    title="Font Settings"
                    description="Customize the short name font."
                    trigger={
                      <Button variant="outline" size="icon">
                        <Settings2 className="h-4 w-4" />
                      </Button>
                    }
                  >
                    <TextSettings
                      fontFamily={params.fullName.fontFamily}
                      fontSize={params.fullName.fontSize}
                      fontWeight={params.fullName.fontWeight}
                      color={params.fullName.color}
                      onChangeFontFamily={(fontFamily) =>
                        template.updateParams({
                          fullName: {
                            ...params.fullName,
                            fontFamily,
                          },
                        })
                      }
                      onChangeFontSize={(fontSize) =>
                        template.updateParams({
                          fullName: {
                            ...params.fullName,
                            fontSize,
                          },
                        })
                      }
                      onChangeFontWeight={(fontWeight) =>
                        template.updateParams({
                          fullName: {
                            ...params.fullName,
                            fontWeight,
                          },
                        })
                      }
                      onChangeColor={(color) =>
                        template.updateParams({
                          fullName: {
                            ...params.fullName,
                            color,
                          },
                        })
                      }
                    />
                  </ResponsivePopover>
                </div>
              </div>
            </div>
          </form>
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
            <Label htmlFor="bgcolor">Background Color</Label>
            <Input
              id="bgcolor"
              type="color"
              value={params.background.color}
              onChange={(e) =>
                template.updateParams({
                  ...params,
                  background: {
                    ...params.background,
                    color: e.target.value,
                  },
                })
              }
            />
          </div>
        </CardContent>
      </Card>
    </>
  )
}
