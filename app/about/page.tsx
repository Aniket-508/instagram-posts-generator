import Image from "next/image"
import Link from "next/link"

import { MAIN_METADATA } from "@/lib/meta"
import { BUY_ME_A_COFFEE_URL, PORTFOLIO_URL } from "@/lib/routes"
import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">About {MAIN_METADATA.TITLE}</h1>
      <h2 className="text-lg">{MAIN_METADATA.DESCRIPTION}</h2>
      <p className="prose max-w-full text-muted-foreground dark:prose-invert">
        The developer behind this project is{" "}
        <Link href={PORTFOLIO_URL} target="_blank">
          Aniket
        </Link>
        , who’s likely lost in a sea of code, tackling yet another side project.
        If you’d like to make his day a little brighter (and his coffee cup a
        little fuller), feel free to{" "}
        <Link href={BUY_ME_A_COFFEE_URL} target="_blank">
          send some caffeine
        </Link>{" "}
        his way—it’s the perfect way to let him know his hard work is
        appreciated!
      </p>
      <div className="space-y-4 rounded border bg-accent p-6">
        <div className="flex items-center gap-4">
          <Image
            src="/cat.gif"
            alt="Cat"
            width={48}
            height={48}
            loading="lazy"
          />
          <h2 className="text-xl font-semibold">Want to contribute?</h2>
        </div>
        <p className="text-muted-foreground">
          We're always looking for ways to improve this project. If you have
          ideas for more templates or want to contribute, check out our GitHub
          repository!
        </p>
        <Button className="rounded-full">
          <Link
            href="https://github.com/Aniket-508/instagram-posts-generator"
            target="_blank"
          >
            View on GitHub
          </Link>
        </Button>
      </div>
    </div>
  )
}
