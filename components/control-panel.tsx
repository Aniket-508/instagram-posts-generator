import {
  Image as ImageIcon,
  Type,
  Droplets,
  Highlighter,
  Frame,
  Share2,
  Settings2,
} from "lucide-react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Position, SocialMedia, HighlightConfig } from "@/types";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { fontFamily, fontWeight } from "@/lib/fonts";

interface ControlPanelProps {
  backgroundImage: string;
  setBackgroundImage: (url: string) => void;
  title: string;
  setTitle: (title: string) => void;
  subtitle: string;
  setSubtitle: (subtitle: string) => void;
  textColor: string;
  setTextColor: (color: string) => void;
  fontSize: number;
  setFontSize: (size: number) => void;
  vignetteColor: string;
  setVignetteColor: (color: string) => void;
  vignettePosition: "top" | "bottom" | "none";
  setVignettePosition: (position: "top" | "bottom" | "none") => void;
  highlight: HighlightConfig;
  setHighlight: (config: HighlightConfig) => void;
  logoUrl: string;
  setLogoUrl: (url: string) => void;
  logoPosition: Position;
  setLogoPosition: (position: Position) => void;
  socialMedia: SocialMedia[];
  setSocialMedia: (social: SocialMedia[]) => void;
  socialPosition: Position;
  setSocialPosition: (position: Position) => void;
  isCarousel: boolean;
  setIsCarousel: (isCarousel: boolean) => void;
  carouselPosition: Position;
  setCarouselPosition: (position: Position) => void;
}

const positionOptions: Position[] = [
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
  "none",
];

const socialPlatforms = [
  "social",
  // "twitter",
  // "instagram",
  // "facebook",
  // "linkedin",
  // "github",
];

export function ControlPanel({
  backgroundImage,
  setBackgroundImage,
  title,
  setTitle,
  subtitle,
  setSubtitle,
  textColor,
  setTextColor,
  fontSize,
  setFontSize,
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
  socialPosition,
  setSocialPosition,
  isCarousel,
  setIsCarousel,
  carouselPosition,
  setCarouselPosition,
}: ControlPanelProps) {
  const handleSocialMediaChange = (platform: string, handle: string) => {
    const updatedSocial = socialMedia.find((s) => s.platform === platform)
      ? socialMedia.map((s) => (s.platform === platform ? { ...s, handle } : s))
      : [
          ...socialMedia,
          { platform: platform as SocialMedia["platform"], handle },
        ];
    setSocialMedia(updatedSocial);
  };

  return (
    <div className="space-y-4">
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
              <Type className="h-4 w-4" />
              Title
            </Label>
            <div className="flex items-center gap-2">
              <Input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
                        <Select>
                          <SelectTrigger className="col-span-2">
                            <SelectValue placeholder="Geist Sans" />
                          </SelectTrigger>
                          <SelectContent>
                            {Object.entries(fontFamily).map(
                              ([key, description]) => (
                                <SelectItem key={key} value={key}>
                                  {description}
                                </SelectItem>
                              )
                            )}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4 font-">
                        <Label htmlFor="font-weight">Font weight</Label>
                        <Select>
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
                          value={fontSize}
                          onChange={(e) => setFontSize(Number(e.target.value))}
                        />
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="text-color">Text color</Label>
                        <Input
                          type="color"
                          className="col-span-2"
                          value={textColor}
                          onChange={(e) => setTextColor(e.target.value)}
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
              <Highlighter className="h-4 w-4" />
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
                        <Label htmlFor="font-family">Font Family</Label>
                        <Select>
                          <SelectTrigger className="col-span-2">
                            <SelectValue placeholder="Geist Sans" />
                          </SelectTrigger>
                          <SelectContent>
                            {Object.entries(fontFamily).map(
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
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Type className="h-4 w-4" />
              Subtitle
            </Label>
            <div className="flex items-center gap-2">
              <Input
                type="text"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
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
                        <Select>
                          <SelectTrigger className="col-span-2">
                            <SelectValue placeholder="Geist Sans" />
                          </SelectTrigger>
                          <SelectContent>
                            {Object.entries(fontFamily).map(
                              ([key, description]) => (
                                <SelectItem key={key} value={key}>
                                  {description}
                                </SelectItem>
                              )
                            )}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4 font-">
                        <Label htmlFor="font-weight">Font weight</Label>
                        <Select>
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
                          value={fontSize}
                          onChange={(e) => setFontSize(Number(e.target.value))}
                        />
                      </div>
                      <div className="grid grid-cols-3 items-center gap-4">
                        <Label htmlFor="text-color">Text color</Label>
                        <Input
                          type="color"
                          className="col-span-2"
                          value={textColor}
                          onChange={(e) => setTextColor(e.target.value)}
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
              <Frame className="h-4 w-4" />
              Logo
            </Label>
            <div className="flex items-center space-x-2">
              <Input
                id="picture"
                type="file"
                onChange={(e) => {
                  if (e.target.files) {
                    console.log();
                    setLogoUrl(URL.createObjectURL(e.target.files[0]));
                  }
                }}
                placeholder="Logo URL"
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
              <Share2 className="h-4 w-4" />
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
                          value={socialPosition}
                          onValueChange={setSocialPosition}
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
              <ImageIcon className="h-4 w-4" />
              Background Image URL
            </Label>
            <Input
              type="text"
              value={backgroundImage}
              onChange={(e) => setBackgroundImage(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Droplets className="h-4 w-4" />
              Vignette
            </Label>
            <div className="grid grid-cols-2 gap-4">
              <Input
                type="color"
                value={vignetteColor}
                onChange={(e) => setVignetteColor(e.target.value)}
              />
              <div className="flex gap-2">
                <Button
                  variant={vignettePosition === "top" ? "default" : "outline"}
                  onClick={() => setVignettePosition("top")}
                  className="flex-1"
                >
                  Top
                </Button>
                <Button
                  variant={
                    vignettePosition === "bottom" ? "default" : "outline"
                  }
                  onClick={() => setVignettePosition("bottom")}
                  className="flex-1"
                >
                  Bottom
                </Button>
                <Button
                  variant={vignettePosition === "none" ? "default" : "outline"}
                  onClick={() => setVignettePosition("none")}
                  className="flex-1"
                >
                  None
                </Button>
              </div>
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
  );
}
