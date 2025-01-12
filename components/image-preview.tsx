import React from "react"
import Image from "next/image"
import {
  HighlightConfig,
  Position,
  SocialMedia,
  SocialMediaConfig,
  SubtitleConfig,
  TitleConfig,
} from "@/types"
import { Download, Lock, MoveRight } from "lucide-react"

import { cn, getPositionClasses } from "@/lib/utils"

import { AspectRatio } from "./ui/aspect-ratio"
import { Button } from "./ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"

interface ImagePreviewProps {
  imageRef: React.RefObject<HTMLDivElement>
  backgroundImage: string
  title: TitleConfig
  subtitle: SubtitleConfig
  vignetteColor: string
  vignettePosition: "top" | "bottom" | "none"
  highlight: HighlightConfig
  logoUrl: string
  logoPosition: Position
  socialMedia: SocialMedia[]
  socialMediaSettings: SocialMediaConfig
  isCarousel: boolean
  carouselPosition: Position
  handleDownload: () => void
}

export function ImagePreview({
  imageRef,
  backgroundImage,
  title,
  subtitle,
  vignetteColor,
  vignettePosition,
  highlight,
  logoUrl,
  logoPosition,
  socialMedia,
  socialMediaSettings,
  isCarousel,
  carouselPosition,
  handleDownload,
}: ImagePreviewProps) {
  const getVignetteGradient = () => {
    if (vignettePosition === "none") return "none"
    if (vignettePosition === "top") {
      return `linear-gradient(to bottom, ${vignetteColor} 0%, transparent 70%)`
    }
    return `linear-gradient(to top, ${vignetteColor} 0%, transparent 70%)`
  }

  const renderHighlightedTitle = () => {
    if (!highlight.text) return title.text
    const parts = title.text.split(highlight.text)
    return (
      <>
        {parts.map((part, i) => (
          <React.Fragment key={i}>
            {part}
            {i < parts.length - 1 && (
              <span
                style={{
                  backgroundColor: highlight.bgColor,
                  color: highlight.color,
                }}
              >
                {highlight.text}
              </span>
            )}
          </React.Fragment>
        ))}
      </>
    )
  }

  return (
    <div className="order-first lg:order-last lg:col-span-2">
      <div className="sticky top-0">
        <Card>
          <CardContent className="p-2 md:p-4">
            <div className="overflow-hidden">
              <AspectRatio ref={imageRef} className="bg-black" ratio={4 / 5}>
                <Image
                  src={backgroundImage}
                  alt="preview"
                  fetchPriority="high"
                  width={1080}
                  height={1350}
                  className="h-full w-full object-contain"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: getVignetteGradient() }}
                />

                {logoPosition !== "none" && logoUrl && (
                  <Image
                    src={logoUrl}
                    alt="Logo"
                    width={48}
                    height={48}
                    className={`absolute h-14 w-14 object-contain ${getPositionClasses(
                      logoPosition
                    )}`}
                  />
                )}

                {isCarousel && carouselPosition !== "none" && (
                  <div
                    className={cn(
                      "absolute",
                      carouselPosition === "top-left" && "left-8 top-2",
                      carouselPosition === "top-right" && "right-8 top-2",
                      carouselPosition === "bottom-left" && "bottom-2 left-8",
                      carouselPosition === "bottom-right" && "bottom-2 right-8"
                    )}
                  >
                    <MoveRight className="h-24 w-24 text-white" />
                  </div>
                )}

                <div
                  className={cn(
                    "absolute left-0 right-0 p-8",
                    title.position === "top" && "top-0 pt-24",
                    title.position === "bottom" && "bottom-0 pb-24"
                  )}
                >
                  <h2
                    className="font-bold leading-tight"
                    style={{
                      color: title.color,
                      fontSize: `${title.fontSize}px`,
                      fontWeight: title.fontWeight,
                      fontFamily: `var(--font-${title.fontFamily})`,
                    }}
                  >
                    {renderHighlightedTitle()}
                  </h2>
                  <p
                    className="mt-1 text-lg"
                    style={{
                      color: subtitle.color,
                      fontSize: `${subtitle.fontSize}px`,
                      fontWeight: subtitle.fontWeight,
                      fontFamily: `var(--font-${subtitle.fontFamily})`,
                    }}
                  >
                    {subtitle.text}
                  </p>
                </div>

                {socialMediaSettings.position !== "none" &&
                  socialMedia.length > 0 && (
                    <div
                      className={cn(
                        `absolute flex gap-4 [writing-mode:vertical-lr]`,
                        socialMediaSettings.position === "top-left" &&
                          "left-2 top-4",
                        socialMediaSettings.position === "top-right" &&
                          "right-2 top-4",
                        socialMediaSettings.position === "bottom-left" &&
                          "bottom-4 left-2",
                        socialMediaSettings.position === "bottom-right" &&
                          "bottom-4 right-2 rotate-180"
                      )}
                    >
                      {socialMedia.map(({ platform, handle }) => (
                        <span
                          key={platform}
                          className="text-xl"
                          style={{
                            color: socialMediaSettings.color,
                          }}
                        >
                          @{handle}
                        </span>
                      ))}
                    </div>
                  )}
              </AspectRatio>
            </div>
          </CardContent>
        </Card>
        <Tabs defaultValue="account" className="mt-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Save Image</TabsTrigger>
            <TabsTrigger value="password" disabled>
              <Lock className="mr-2 h-4 w-4" />
              API Request
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader className="flex-row items-center justify-between space-y-0">
                <div>
                  <CardTitle>Save Image</CardTitle>
                  <CardDescription className="mt-1">
                    Export the image as a PNG.
                  </CardDescription>
                </div>
                <Button onClick={handleDownload}>
                  <Download />
                  Download
                </Button>
              </CardHeader>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
