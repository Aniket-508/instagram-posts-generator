"use client"

import React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { ROUTES } from "@/lib/routes"
import { Logo } from "@/components/common/logo"

import BetterAuth, { type BetterAuthProps } from "../better-auth"

const menuItems = [
  { name: "Features", href: ROUTES.FEATURES },
  { name: "Docs", href: ROUTES.DOCS },
  { name: "About", href: ROUTES.ABOUT },
]

export const HeroHeader = ({ userEmail }: BetterAuthProps) => {
  const [menuState, setMenuState] = React.useState(false)

  return (
    <header className="fixed z-20 w-full border-b bg-white/80 backdrop-blur-sm dark:bg-black/80 lg:border-x">
      <nav
        data-state={menuState && "active"}
        className="view-container group relative flex flex-wrap items-center justify-between gap-6 border-x p-3 lg:gap-0 lg:p-4"
      >
        <div className="flex w-full justify-between lg:w-auto">
          <Link href="/" aria-label="home">
            <Logo />
          </Link>

          <button
            onClick={() => setMenuState(!menuState)}
            aria-label={menuState == true ? "Close Menu" : "Open Menu"}
            className="relative z-20 -my-2.5 -mr-3 block cursor-pointer p-2.5 lg:hidden"
          >
            <Menu className="m-auto size-6 duration-200 group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0" />
            <X className="absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200 group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100" />
          </button>
        </div>

        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
          <ul className="flex gap-8 text-sm">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="block text-muted-foreground duration-150 hover:text-accent-foreground"
                >
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-3 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border bg-background p-6 shadow-2xl shadow-neutral-300/20 group-data-[state=active]:block dark:shadow-none md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none lg:group-data-[state=active]:flex dark:lg:bg-transparent">
          <div className="lg:hidden">
            <ul className="space-y-6 text-base">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="block text-muted-foreground duration-150 hover:text-accent-foreground"
                  >
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <BetterAuth userEmail={userEmail} />
        </div>
      </nav>
    </header>
  )
}
