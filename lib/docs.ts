export const RATE_LIMITING_HEADERS = {
  "X-RateLimit-Limit": "Requests allowed per window",
  "X-RateLimit-Remaining": "Requests remaining in window",
  "X-RateLimit-Reset": "Time when the rate limit resets",
}

export const PAYLOAD_FIELDS_MAP = {
  name: "Name of the template (string)",
  canvas: "Canvas parameters {width: number, height: number} (object)",
}

export const ERROR_CODES_MAP = {
  200: "Success",
  429: "Too Many Requests - Rate limit exceeded",
  500: "Internal Server Error",
}
