import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

import { ModeToggle } from "./mode-toggle"

export default function Navbar() {
  return (
    <nav className="container mx-auto flex items-center justify-between space-x-4 p-4">
      <Link className="flex items-center space-x-2" href="/">
        <Image unoptimized src="/icon.svg" alt="Logo" width={32} height={32} />
        <span className="text-lg font-semibold text-primary">
          Instagram Posts Generator
        </span>
      </Link>

      <div className="flex items-center space-x-4">
        <Button variant="link" asChild>
          <Link href="/about">About</Link>
        </Button>

        <Button variant="link" asChild>
          <Link href="/docs">Docs</Link>
        </Button>

        <ModeToggle />
      </div>
    </nav>
  )
}
