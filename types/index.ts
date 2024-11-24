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

export interface TitleConfig {
  text: string;
  color: string;
  fontSize: string;
  fontWeight: string;
  fontFamily: string;
  position: "top" | "bottom";
}

export type SubtitleConfig = Omit<TitleConfig, "position">;

export interface HighlightConfig {
  text: string;
  color: string;
}
