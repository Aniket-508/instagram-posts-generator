import React from "react";
import Image from "next/image";
import { MoveRight, Download } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { Button } from "./ui/button";
import { getPositionClasses, getSocialPositionClasses } from "@/lib/utils";
import { Position, SocialMedia, HighlightConfig } from "@/types";

interface ImagePreviewProps {
  imageRef: React.RefObject<HTMLDivElement>;
  backgroundImage: string;
  title: string;
  subtitle: string;
  textColor: string;
  fontSize: number;
  vignetteColor: string;
  vignettePosition: "top" | "bottom" | "none";
  highlight: HighlightConfig;
  logoUrl: string;
  logoPosition: Position;
  socialMedia: SocialMedia[];
  socialPosition: Position;
  isCarousel: boolean;
  carouselPosition: Position;
  handleDownload: () => void;
}

export function ImagePreview({
  imageRef,
  backgroundImage,
  title,
  subtitle,
  textColor,
  fontSize,
  vignetteColor,
  vignettePosition,
  highlight,
  logoUrl,
  logoPosition,
  socialMedia,
  socialPosition,
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
    if (!highlight.text) return title;
    const parts = title.split(highlight.text);
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
    <div className="">
      <div className="sticky top-0">
        <Card>
          <CardContent className="p-2 md:p-4">
            <div className="relative">
              <div
                ref={imageRef}
                className="aspect-[4/3] w-full relative overflow-hidden rounded-lg shadow-xl"
                style={{ backgroundColor: "#000" }}
              >
                <Image
                  src={backgroundImage}
                  alt="Background"
                  priority
                  fill
                  sizes="100%"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: getVignetteGradient() }}
                />

                {logoPosition !== "none" && logoUrl && (
                  <Image
                    src={logoUrl}
                    alt="Logo"
                    width={64}
                    height={64}
                    className={`absolute w-16 h-16 object-contain ${getPositionClasses(
                      logoPosition
                    )}`}
                  />
                )}

                {isCarousel && carouselPosition !== "none" && (
                  <div
                    className={`absolute ${getPositionClasses(
                      carouselPosition
                    )}`}
                  >
                    <MoveRight className="w-8 h-8 text-white" />
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h2
                    className="font-bold mb-4 leading-tight"
                    style={{ color: textColor, fontSize: `${fontSize}px` }}
                  >
                    {renderHighlightedTitle()}
                  </h2>
                  <p className="text-lg" style={{ color: textColor }}>
                    {subtitle}
                  </p>
                </div>

                {socialPosition !== "none" && socialMedia.length > 0 && (
                  <div
                    className={`absolute flex gap-4 [writing-mode:vertical-lr] ${getSocialPositionClasses(
                      socialPosition
                    )}`}
                  >
                    {socialMedia.map(({ platform, handle }) => (
                      <span key={platform} className="text-white text-sm">
                        @{handle}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
        <Tabs defaultValue="account" className="mt-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account">Save Image</TabsTrigger>
            <TabsTrigger value="password">API Request</TabsTrigger>
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
