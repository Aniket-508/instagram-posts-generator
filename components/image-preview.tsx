import React from "react";
import Image from "next/image";
import { MoveRight, Download, Lock } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { Button } from "./ui/button";
import { AspectRatio } from "./ui/aspect-ratio";
import { cn, getPositionClasses, getSocialPositionClasses } from "@/lib/utils";
import {
  Position,
  SocialMedia,
  HighlightConfig,
  TitleConfig,
  SubtitleConfig,
  SocialMediaConfig,
} from "@/types";

interface ImagePreviewProps {
  imageRef: React.RefObject<HTMLDivElement>;
  backgroundImage: string;
  title: TitleConfig;
  subtitle: SubtitleConfig;
  vignetteColor: string;
  vignettePosition: "top" | "bottom" | "none";
  highlight: HighlightConfig;
  logoUrl: string;
  logoPosition: Position;
  socialMedia: SocialMedia[];
  socialMediaSettings: SocialMediaConfig;
  isCarousel: boolean;
  carouselPosition: Position;
  handleDownload: () => void;
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
    if (vignettePosition === "none") return "none";
    if (vignettePosition === "top") {
      return `linear-gradient(to bottom, ${vignetteColor} 0%, transparent 70%)`;
    }
    return `linear-gradient(to top, ${vignetteColor} 0%, transparent 70%)`;
  };

  const renderHighlightedTitle = () => {
    if (!highlight.text) return title.text;
    const parts = title.text.split(highlight.text);
    return (
      <>
        {parts.map((part, i) => (
          <React.Fragment key={i}>
            {part}
            {i < parts.length - 1 && (
              <span style={{ backgroundColor: highlight.color }}>
                {highlight.text}
              </span>
            )}
          </React.Fragment>
        ))}
      </>
    );
  };

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
                    className={`absolute w-14 h-14 object-contain ${getPositionClasses(
                      logoPosition
                    )}`}
                  />
                )}

                {isCarousel && carouselPosition !== "none" && (
                  <div
                    className={cn(
                      "absolute",
                      carouselPosition === "top-left" && "top-2 left-8",
                      carouselPosition === "top-right" && "top-2 right-8",
                      carouselPosition === "bottom-left" && "bottom-2 left-8",
                      carouselPosition === "bottom-right" && "bottom-2 right-8"
                    )}
                  >
                    <MoveRight className="w-24 h-24 text-white" />
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-8 pb-32">
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
                    className="text-lg mt-1"
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
                      className={`absolute flex gap-4 [writing-mode:vertical-lr] ${getSocialPositionClasses(
                        socialMediaSettings.position
                      )}`}
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
              <Lock className="h-4 w-4 mr-2" />
              API Request
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader className="flex-row justify-between items-center space-y-0">
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
  );
}
