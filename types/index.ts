import { fontFamilies } from "@/lib/fonts";

export type Position =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "none";

export type SocialPlatform =
  | "twitter"
  | "instagram"
  | "facebook"
  | "linkedin"
  | "github";

export interface SocialMedia {
  platform: SocialPlatform;
  handle: string;
}

export interface SocialMediaConfig {
  position: Position;
  color: string;
}

export interface TitleConfig {
  text: string;
  color: string;
  fontSize: string;
  fontWeight: string;
  fontFamily: FontFamily;
  position: "top" | "bottom";
}

export type SubtitleConfig = Omit<TitleConfig, "position">;

export interface HighlightConfig {
  text: string;
  color: string;
}

export type FontFamily = keyof typeof fontFamilies;
