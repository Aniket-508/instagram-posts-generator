import type { Metadata } from "next"
import localFont from "next/font/local"
import { ThemeProvider } from "@/providers/theme-provider"

import { MAIN_METADATA } from "@/lib/meta"
import { Toaster } from "@/components/ui/sonner"

import "./globals.css"

import Script from "next/script"
import { TemplateStoreProvider } from "@/providers/template-store-provider"

import Navbar from "@/components/navbar"

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          <main className="container mx-auto min-h-screen p-4">
            <TemplateStoreProvider>{children}</TemplateStoreProvider>
          </main>
        </ThemeProvider>
        <Toaster />
      </body>
      <Script
        src="https://sdk.feedback.one/v0/core.min.js"
        data-project-id="01945a76-4e22-74f1-9a0c-e06025de1755"
        defer
      />
    </html>
  )
}
