import { BASE_URL } from "./routes"

export function absoluteUrl(path: string) {
  const absoluteUrl = new URL(path, BASE_URL)
  return absoluteUrl.toString()
}
