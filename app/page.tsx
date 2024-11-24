"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import html2canvas from "html2canvas";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ImagePreview } from "@/components/image-preview";
import { ControlPanel } from "@/components/control-panel";
import { Position, SocialMedia, HighlightConfig } from "@/types";
import { ModeToggle } from "@/components/mode-toggle";
import { BUY_ME_A_COFFEE_URL, PORTFOLIO_URL } from "@/lib/routes";

function App() {
  const [backgroundImage, setBackgroundImage] = useState(
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
  );
  const [title, setTitle] = useState("Add your headline here");
  const [subtitle, setSubtitle] = useState("Add a subtitle or description");
  const [textColor, setTextColor] = useState("#ffffff");
  const [fontSize, setFontSize] = useState(48);
  const [vignetteColor, setVignetteColor] = useState("#000000");
  const [vignettePosition, setVignettePosition] = useState<
    "top" | "bottom" | "none"
  >("bottom");
  const [highlight, setHighlight] = useState<HighlightConfig>({
    text: "Add your",
    color: "#368c47",
  });
  const [logoUrl, setLogoUrl] = useState("");
  const [logoPosition, setLogoPosition] = useState<Position>("none");
  const [socialMedia, setSocialMedia] = useState<SocialMedia[]>([]);
  const [socialPosition, setSocialPosition] = useState<Position>("none");
  const [isCarousel, setIsCarousel] = useState(false);
  const [carouselPosition, setCarouselPosition] = useState<Position>("none");

  const imageRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!imageRef.current) return;

    const canvas = await html2canvas(imageRef.current);
    const link = document.createElement("a");
    link.download = "generated-image.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-16">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>

      <div className="text-center mb-8 space-y-2 px-4">
        <h1 className="text-4xl font-bold">The Tatva India Generator</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Generate 👊 news / 😜 posts for your socials similar to{" "}
          <Button asChild variant="link" className="px-0.5 py-0">
            <Link
              href={"https://www.instagram.com/thetatvaindia/"}
              target="_blank"
            >
              The Tatva India
            </Link>
          </Button>{" "}
          with a few clicks
        </p>
        <div className="flex h-5 items-center justify-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <Link
            href={PORTFOLIO_URL}
            target="_blank"
            className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
          >
            made by aniket
          </Link>
          <Separator orientation="vertical" />
          <Link
            href={BUY_ME_A_COFFEE_URL}
            target="_blank"
            className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
          >
            buy aniket a coffee
          </Link>
        </div>
      </div>

      <main className="container mx-auto p-4 grid lg:grid-cols-3 gap-4 mt-8">
        <ControlPanel
          backgroundImage={backgroundImage}
          setBackgroundImage={setBackgroundImage}
          title={title}
          setTitle={setTitle}
          subtitle={subtitle}
          setSubtitle={setSubtitle}
          textColor={textColor}
          setTextColor={setTextColor}
          fontSize={fontSize}
          setFontSize={setFontSize}
          vignetteColor={vignetteColor}
          setVignetteColor={setVignetteColor}
          vignettePosition={vignettePosition}
          setVignettePosition={setVignettePosition}
          highlight={highlight}
          setHighlight={setHighlight}
          logoUrl={logoUrl}
          setLogoUrl={setLogoUrl}
          logoPosition={logoPosition}
          setLogoPosition={setLogoPosition}
          socialMedia={socialMedia}
          setSocialMedia={setSocialMedia}
          socialPosition={socialPosition}
          setSocialPosition={setSocialPosition}
          isCarousel={isCarousel}
          setIsCarousel={setIsCarousel}
          carouselPosition={carouselPosition}
          setCarouselPosition={setCarouselPosition}
        />

        <ImagePreview
          imageRef={imageRef}
          backgroundImage={backgroundImage}
          title={title}
          subtitle={subtitle}
          textColor={textColor}
          fontSize={fontSize}
          vignetteColor={vignetteColor}
          vignettePosition={vignettePosition}
          highlight={highlight}
          logoUrl={logoUrl}
          logoPosition={logoPosition}
          socialMedia={socialMedia}
          socialPosition={socialPosition}
          isCarousel={isCarousel}
          carouselPosition={carouselPosition}
          handleDownload={handleDownload}
        />
      </main>
    </div>
  );
}

export default App;
