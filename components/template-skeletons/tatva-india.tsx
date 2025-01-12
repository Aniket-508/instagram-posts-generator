import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { useMediaQuery } from "@/hooks/use-media-query"

import { buttonVariants } from "../ui/button"

export function TatvaIndia() {
  const isDesktop = useMediaQuery("(min-width: 640px)")

  return (
    <div className="flex aspect-video h-full w-full flex-col items-center justify-center">
      <Image
        src="/tatva-india.jpg"
        alt="Tatva India"
        width={isDesktop ? 32 : 16}
        height={isDesktop ? 32 : 16}
        className="rounded-full"
      />
      <Link
        href="https://www.instagram.com/thetatvaindia/"
        className={buttonVariants({
          variant: "link",
          size: isDesktop ? "default" : "sm",
        })}
        target="_blank"
        onClick={(e) => e.stopPropagation()}
      >
        @thetatvaindia
        <ExternalLink className="!size-3 sm:!size-3.5" />
      </Link>
    </div>
  )
}
