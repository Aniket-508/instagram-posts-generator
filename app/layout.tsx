import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
import { MAIN_METADATA } from "@/lib/meta";
import {
  inter,
  openSans,
  notoSans,
  notoSansJP,
  notoSansSC,
  notoSansTC,
  roboto,
  poppins,
  montserrat,
  lato,
  manrope,
  ubuntu,
  figtree,
  firaSans,
  firaCode,
  firaMono,
  sourceCodePro,
  ibmPlexMono,
  jetBrainsMono,
} from "@/lib/fonts";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${openSans.variable} ${notoSans.variable} ${notoSansJP.variable} ${notoSansSC.variable} ${notoSansTC.variable} ${roboto.variable} ${poppins.variable} ${montserrat.variable} ${lato.variable} ${manrope.variable} ${ubuntu.variable} ${figtree.variable} ${firaSans.variable} ${firaCode.variable} ${firaMono.variable} ${sourceCodePro.variable} ${ibmPlexMono.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
