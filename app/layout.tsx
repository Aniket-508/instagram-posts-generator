import type { Metadata } from "next"
import localFont from "next/font/local"
import { ThemeProvider } from "@/providers/theme-provider"

import { MAIN_METADATA } from "@/lib/meta"
import { Toaster } from "@/components/ui/sonner"

import "./globals.css"

import Link from "next/link"
import { TemplateStoreProvider } from "@/providers/template-store-provider"

import { BUY_ME_A_COFFEE_URL, PORTFOLIO_URL } from "@/lib/routes"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ModeToggle } from "@/components/mode-toggle"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: MAIN_METADATA.TITLE,
  description: MAIN_METADATA.DESCRIPTION,
  openGraph: {
    title: MAIN_METADATA.TITLE,
    description: MAIN_METADATA.DESCRIPTION,
    url: MAIN_METADATA.URL,
    siteName: MAIN_METADATA.TITLE,
    images: MAIN_METADATA.IMAGE,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: MAIN_METADATA.TITLE,
    description: MAIN_METADATA.DESCRIPTION,
    images: MAIN_METADATA.IMAGE,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background py-16 text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="absolute right-4 top-4">
            <ModeToggle />
          </div>

          <div className="mb-8 space-y-2 px-4 text-center">
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

          <main className="container mx-auto grid gap-4 p-4 lg:grid-cols-3">
            <TemplateStoreProvider>{children}</TemplateStoreProvider>
          </main>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
