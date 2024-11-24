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

export interface HighlightConfig {
  text: string;
  color: string;
}
