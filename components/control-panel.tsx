import {
  HighlightConfig,
  Position,
  SocialMedia,
  SocialMediaConfig,
  SubtitleConfig,
  TitleConfig,
} from "@/types"
import {
  Droplets,
  Frame,
  Highlighter,
  Image as ImageIcon,
  Pin,
  Settings2,
  Share2,
  Type,
} from "lucide-react"

import { fontFamilies, fontWeight } from "@/lib/fonts"

import { Button } from "./ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"
import { Checkbox } from "./ui/checkbox"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { Separator } from "./ui/separator"

interface ControlPanelProps {
  backgroundImage: string
  setBackgroundImage: (url: string) => void
  title: TitleConfig
  setTitle: (title: TitleConfig) => void
  subtitle: SubtitleConfig
  setSubtitle: (subtitle: SubtitleConfig) => void
  vignetteColor: string
  setVignetteColor: (color: string) => void
  vignettePosition: "top" | "bottom" | "none"
  setVignettePosition: (position: "top" | "bottom" | "none") => void
  highlight: HighlightConfig
  setHighlight: (config: HighlightConfig) => void
  logoUrl: string
  setLogoUrl: (url: string) => void
  logoPosition: Position
  setLogoPosition: (position: Position) => void
  socialMedia: SocialMedia[]
  setSocialMedia: (social: SocialMedia[]) => void
  socialMediaSettings: SocialMediaConfig
  setSocialMediaSettings: (config: SocialMediaConfig) => void
  isCarousel: boolean
  setIsCarousel: (isCarousel: boolean) => void
  carouselPosition: Position
  setCarouselPosition: (position: Position) => void
}

const positionOptions: Position[] = [
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
  "none",
]

const socialPlatforms = [
  "social",
  // "twitter",
  // "instagram",
  // "facebook",
  // "linkedin",
  // "github",
]

export function ControlPanel({
  setBackgroundImage,
  title,
  setTitle,
  subtitle,
  setSubtitle,
  vignetteColor,
  setVignetteColor,
  vignettePosition,
  setVignettePosition,
  highlight,
  setHighlight,
  setLogoUrl,
  logoPosition,
  setLogoPosition,
  socialMedia,
  setSocialMedia,
  socialMediaSettings,
  setSocialMediaSettings,
  isCarousel,
  setIsCarousel,
  carouselPosition,
  setCarouselPosition,
}: ControlPanelProps) {
  const handleTitleChange = (value: string, name: keyof TitleConfig) => {
    setTitle({ ...title, [name]: value })
  }

  const handleSubtitleChange = (value: string, name: keyof SubtitleConfig) => {
    setSubtitle({ ...subtitle, [name]: value })
  }

  const handleSocialPositionChange = (
    value: string,
    name: keyof SocialMediaConfig
  ) => {
    setSocialMediaSettings({ ...socialMediaSettings, [name]: value })
  }

  const handleSocialMediaChange = (platform: string, handle: string) => {
    const updatedSocial = socialMedia.find((s) => s.platform === platform)
      ? socialMedia.map((s) => (s.platform === platform ? { ...s, handle } : s))
      : [
          ...socialMedia,
          { platform: platform as SocialMedia["platform"], handle },
        ]
    setSocialMedia(updatedSocial)
  }

  return (
    <div className="order-last col-span-1 space-y-4 lg:order-first">
      <Card>
        <CardHeader>
          <CardTitle>Template Properties</CardTitle>
          <CardDescription>
            Customize your image by changing the properties.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Type className="h-4 w-4 flex-shrink-0" />
              Title
            </Label>
            <div className="flex items-center gap-2">
              <Input
                type="text"
                value={title.text}
                onChange={(e) => handleTitleChange(e.target.value, "text")}
              />
              <Popover>
                <PopoverTrigger asChild>
                  <Button size="icon" variant="outline">
                    <Settings2 />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">
                        Font Settings
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Customize the title font.
                      </p>
                    </div>
                    <div className="grid gap-2">
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="font-family">Font family</Label>
                        <Select
                          value={title.fontFamily}
                          onValueChange={(value) =>
                            handleTitleChange(value, "fontFamily")
                          }
                        >
                          <SelectTrigger className="col-span-2">
                            <SelectValue placeholder="Geist Sans" />
                          </SelectTrigger>
                          <SelectContent>
                            {Object.entries(fontFamilies).map(
                              ([key, description]) => (
                                <SelectItem key={key} value={key}>
                                  {description}
                                </SelectItem>
                              )
                            )}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="font- grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="font-weight">Font weight</Label>
                        <Select
                          value={title.fontWeight}
                          onValueChange={(value) =>
                            handleTitleChange(value, "fontWeight")
                          }
                        >
                          <SelectTrigger className="col-span-2">
                            <SelectValue placeholder="Regular" />
                          </SelectTrigger>
                          <SelectContent>
                            {Object.entries(fontWeight).map(
                              ([key, description]) => (
                                <SelectItem key={key} value={key}>
                                  {description}
                                </SelectItem>
                              )
                            )}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="font-size">Font size</Label>
                        <Input
                          type="number"
                          className="col-span-2"
                          value={title.fontSize}
                          onChange={(e) =>
                            handleTitleChange(e.target.value, "fontSize")
                          }
                        />
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="text-color">Text color</Label>
                        <Input
                          type="color"
                          className="col-span-2"
                          value={title.color}
                          onChange={(e) =>
                            handleTitleChange(e.target.value, "color")
                          }
                        />
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Highlighter className="h-4 w-4 flex-shrink-0" />
              Highlight Text
            </Label>
            <div className="flex items-center gap-2">
              <Input
                type="text"
                value={highlight.text}
                onChange={(e) =>
                  setHighlight({ ...highlight, text: e.target.value })
                }
                placeholder="Text to highlight"
              />
              <Popover>
                <PopoverTrigger asChild>
                  <Button size="icon" variant="outline">
                    <Settings2 />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">
                        Font Settings
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Customize the highlighted text font.
                      </p>
                    </div>
                    <div className="grid gap-2">
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="text-color">Text color</Label>
                        <Input
                          type="color"
                          value={highlight.color}
                          onChange={(e) =>
                            setHighlight({
                              ...highlight,
                              color: e.target.value,
                            })
                          }
                          className="col-span-2"
                        />
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="bg-color">Bg color</Label>
                        <Input
                          type="color"
                          value={highlight.bgColor}
                          onChange={(e) =>
                            setHighlight({
                              ...highlight,
                              bgColor: e.target.value,
                            })
                          }
                          className="col-span-2"
                        />
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Type className="h-4 w-4 flex-shrink-0" />
              Subtitle
            </Label>
            <div className="flex items-center gap-2">
              <Input
                type="text"
                value={subtitle.text}
                onChange={(e) => handleSubtitleChange(e.target.value, "text")}
              />
              <Popover>
                <PopoverTrigger asChild>
                  <Button size="icon" variant="outline">
                    <Settings2 />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">
                        Font Settings
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Customize the subtitle font.
                      </p>
                    </div>
                    <div className="grid gap-2">
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="font-family">Font family</Label>
                        <Select
                          value={subtitle.fontFamily}
                          onValueChange={(value) =>
                            handleSubtitleChange(value, "fontFamily")
                          }
                        >
                          <SelectTrigger className="col-span-2">
                            <SelectValue placeholder="Geist Sans" />
                          </SelectTrigger>
                          <SelectContent>
                            {Object.entries(fontFamilies).map(
                              ([key, description]) => (
                                <SelectItem key={key} value={key}>
                                  {description}
                                </SelectItem>
                              )
                            )}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="font- grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="font-weight">Font weight</Label>
                        <Select
                          value={subtitle.fontWeight}
                          onValueChange={(e) =>
                            handleSubtitleChange(e, "fontWeight")
                          }
                        >
                          <SelectTrigger className="col-span-2">
                            <SelectValue placeholder="Regular" />
                          </SelectTrigger>
                          <SelectContent>
                            {Object.entries(fontWeight).map(
                              ([key, description]) => (
                                <SelectItem key={key} value={key}>
                                  {description}
                                </SelectItem>
                              )
                            )}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="font-size">Font size</Label>
                        <Input
                          type="number"
                          className="col-span-2"
                          value={subtitle.fontSize}
                          onChange={(e) =>
                            handleSubtitleChange(e.target.value, "fontSize")
                          }
                        />
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="text-color">Text color</Label>
                        <Input
                          type="color"
                          className="col-span-2"
                          value={subtitle.color}
                          onChange={(e) =>
                            handleSubtitleChange(e.target.value, "color")
                          }
                        />
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Pin className="h-4 w-4 flex-shrink-0" />
              Position
            </Label>
            <Select
              value={title.position}
              onValueChange={(val) => handleTitleChange(val, "position")}
            >
              <SelectTrigger>
                <SelectValue placeholder="Position" />
              </SelectTrigger>
              <SelectContent>
                {["top", "bottom", "none"].map((pos) => (
                  <SelectItem key={pos} value={pos}>
                    {pos}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Separator />

          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Frame className="h-4 w-4 flex-shrink-0" />
              Logo
            </Label>
            <div className="flex items-center space-x-2">
              <Input
                id="picture"
                type="file"
                onChange={(e) => {
                  if (e.target.files) {
                    setLogoUrl(URL.createObjectURL(e.target.files[0]))
                  }
                }}
                placeholder="Upload here"
                className="col-span-3"
              />
              <Popover>
                <PopoverTrigger asChild>
                  <Button size="icon" variant="outline">
                    <Settings2 />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">
                        Logo Settings
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Customize the logo.
                      </p>
                    </div>
                    <div className="grid gap-2">
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="position">Position</Label>
                        <Select
                          value={logoPosition}
                          onValueChange={setLogoPosition}
                        >
                          <SelectTrigger className="col-span-2">
                            <SelectValue placeholder="Position" />
                          </SelectTrigger>
                          <SelectContent>
                            {positionOptions.map((pos) => (
                              <SelectItem key={pos} value={pos}>
                                {pos.replace("-", " ")}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Share2 className="h-4 w-4 flex-shrink-0" />
              Social Media
            </Label>
            <div className="flex items-center space-x-2">
              {socialPlatforms.map((platform) => (
                <Input
                  key={platform}
                  type="text"
                  value={
                    socialMedia.find((s) => s.platform === platform)?.handle ||
                    ""
                  }
                  onChange={(e) =>
                    handleSocialMediaChange(platform, e.target.value)
                  }
                  placeholder={"@john_doe"}
                  className="col-span-3"
                />
              ))}
              <Popover>
                <PopoverTrigger asChild>
                  <Button size="icon" variant="outline">
                    <Settings2 />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium leading-none">
                        Social Media Settings
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Customize the social media.
                      </p>
                    </div>
                    <div className="grid gap-2">
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="position">Position</Label>
                        <Select
                          value={socialMediaSettings.position}
                          onValueChange={(val) =>
                            handleSocialPositionChange(val, "position")
                          }
                        >
                          <SelectTrigger className="col-span-2">
                            <SelectValue placeholder="Position" />
                          </SelectTrigger>
                          <SelectContent>
                            {positionOptions.map((pos) => (
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
                          value={socialMediaSettings.color}
                          onChange={(e) =>
                            handleSocialPositionChange(e.target.value, "color")
                          }
                        />
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Background</CardTitle>
          <CardDescription>
            Set a custom background for your image.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <ImageIcon className="h-4 w-4 flex-shrink-0" />
              Background Image URL
            </Label>
            <Input
              id="background-image"
              type="file"
              onChange={(e) => {
                if (e.target.files) {
                  setBackgroundImage(URL.createObjectURL(e.target.files[0]))
                }
              }}
              placeholder="Upload here"
            />
          </div>

          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Droplets className="h-4 w-4 flex-shrink-0" />
              Vignette
            </Label>
            <div className="grid grid-cols-2 gap-4">
              <Input
                type="color"
                value={vignetteColor}
                onChange={(e) => setVignetteColor(e.target.value)}
              />
              <Select
                value={vignettePosition}
                onValueChange={setVignettePosition}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Position" />
                </SelectTrigger>
                <SelectContent>
                  {["top", "bottom", "none"].map((pos) => (
                    <SelectItem key={pos} value={pos}>
                      {pos}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Checkbox
                id="is-carousel"
                checked={isCarousel}
                onCheckedChange={(checked) => setIsCarousel(checked as boolean)}
              />
              <Label htmlFor="is-carousel">Is Carousel</Label>
            </div>
            {isCarousel && (
              <Select
                value={carouselPosition}
                onValueChange={setCarouselPosition}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Position" />
                </SelectTrigger>
                <SelectContent>
                  {positionOptions.map((pos) => (
                    <SelectItem key={pos} value={pos}>
                      {pos.replace("-", " ")}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
