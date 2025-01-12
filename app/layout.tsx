import type { Metadata } from "next"
import localFont from "next/font/local"
import { ThemeProvider } from "@/providers/theme-provider"

import { MAIN_METADATA } from "@/lib/meta"
import { Toaster } from "@/components/ui/sonner"

import "./globals.css"

import { TemplateStoreProvider } from "@/providers/template-store-provider"

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
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <nav className="absolute right-4 top-4">
            <ModeToggle />
          </nav>

          <main className="container mx-auto min-h-[calc(100dvh-84px)] p-4">
            <TemplateStoreProvider>{children}</TemplateStoreProvider>
          </main>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
