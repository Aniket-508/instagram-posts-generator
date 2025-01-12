import { MetadataRoute } from "next"

import { MAIN_METADATA } from "@/lib/meta"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: MAIN_METADATA.TITLE,
    short_name: MAIN_METADATA.TITLE,
    description: MAIN_METADATA.DESCRIPTION,
    start_url: "/",
    display: "standalone",
  }
}
