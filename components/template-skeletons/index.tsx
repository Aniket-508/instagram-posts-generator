import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { useMediaQuery } from "@/hooks/use-media-query"

import { buttonVariants } from "../ui/button"

function TemplateSkeleton({
  name,
  username,
  img,
}: {
  name: string
  username: string
  img: string
}) {
  const isDesktop = useMediaQuery("(min-width: 640px)")

  return (
    <div className="flex aspect-video h-full w-full flex-col items-center justify-center">
      <Image
        src={img}
        alt={name}
        width={isDesktop ? 32 : 16}
        height={isDesktop ? 32 : 16}
        className="rounded-full border"
      />
      <Link
        href={`https://www.instagram.com/${username}/`}
        className={buttonVariants({
          variant: "link",
          size: isDesktop ? "default" : "sm",
        })}
        target="_blank"
        onClick={(e) => e.stopPropagation()}
      >
        @{username}
        <ExternalLink className="!size-3 sm:!size-3.5" />
      </Link>
    </div>
  )
}

function TatvaIndia() {
  return (
    <TemplateSkeleton
      name="Tatva India"
      username="thetatvaindia"
      img="/tatva-india.jpg"
    />
  )
}

function TerriblyDankTales() {
  return (
    <TemplateSkeleton
      name="Terribly Dank Tales"
      username="tdtinsta"
      img="/tdt.jpg"
    />
  )
}

function GAG() {
  return <TemplateSkeleton name="9GAG" username="9gag" img="/9gag.jpg" />
}

function Pubity() {
  return <TemplateSkeleton name="Pubity" username="pubity" img="/pubity.jpg" />
}

export const skeletons = {
  thetatvaindia: TatvaIndia,
  tdtinsta: TerriblyDankTales,
  "9gag": GAG,
  pubity: Pubity,
}
