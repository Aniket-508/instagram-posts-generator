import {
  Inter,
  Open_Sans,
  Noto_Sans,
  Noto_Sans_JP,
  Noto_Sans_TC,
  Noto_Sans_SC,
  Roboto,
  Poppins,
  Montserrat,
  Lato,
  Manrope,
  Ubuntu,
  Figtree,
  Fira_Sans,
  Fira_Code,
  Fira_Mono,
  Source_Code_Pro,
  IBM_Plex_Mono,
  JetBrains_Mono,
} from "next/font/google";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

export const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  variable: "--font-noto-sans-tc",
});

export const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  variable: "--font-noto-sans-sc",
});

export const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
});

export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ubuntu",
});

export const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});

export const firaSans = Fira_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-sans",
});

export const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const firaMono = Fira_Mono({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-mono",
});

export const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code-pro",
});

export const ibmPlexMono = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibm-plex-mono",
});

export const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const fontFamilies = {
  geistSans: "Geist Sans",
  inter: "Inter",
  "open-sans": "Open Sans",
  "noto-sans": "Noto Sans",
  "noto-sans-jp": "Noto Sans JP",
  "noto-sans-tc": "Noto Sans TC",
  "noto-sans-sc": "Noto Sans SC",
  roboto: "Roboto",
  poppins: "Poppins",
  montserrat: "Montserrat",
  lato: "Lato",
  manrope: "Manrope",
  ubuntu: "Ubuntu",
  figtree: "Figtree",
  "fira-sans": "Fira Sans",
  "fira-code": "Fira Code",
  "fira-mono": "Fira Mono",
  "source-code-pro": "Source Code Pro",
  "ibm-plex-mono": "IBM Plex Mono",
  "jetbrains-mono": "JetBrains Mono",
};

export const fontWeight = {
  100: "Thin",
  200: "ExtraLight",
  300: "Light",
  400: "Regular",
  500: "Medium",
  600: "SemiBold",
  700: "Bold",
  800: "ExtraBold",
  900: "Black",
};
