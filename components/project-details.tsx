import Link from "next/link"

import { MAIN_METADATA } from "@/lib/meta"
import { BUY_ME_A_COFFEE_URL, PORTFOLIO_URL } from "@/lib/routes"

import { Separator } from "./ui/separator"

export default function ProjectDetails() {
  return (
    <div className="space-y-4 text-center">
      <h1 className="text-4xl font-bold">{MAIN_METADATA.TITLE}</h1>
      <p className="text-gray-600 dark:text-gray-400">
        {MAIN_METADATA.DESCRIPTION}
      </p>
      <div className="flex h-5 items-center justify-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
        <Link
          href={PORTFOLIO_URL}
          target="_blank"
          className="transition-colors hover:text-gray-900 dark:hover:text-gray-200"
        >
          made by aniket
        </Link>
        <Separator orientation="vertical" />
        <Link
          href={BUY_ME_A_COFFEE_URL}
          target="_blank"
          className="transition-colors hover:text-gray-900 dark:hover:text-gray-200"
        >
          buy aniket a coffee
        </Link>
      </div>
    </div>
  )
}
