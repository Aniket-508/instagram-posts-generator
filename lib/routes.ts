export const BASE_URL =
  process.env.NODE_ENV === "development" ||
  !process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL
    ? "http://localhost:3000"
    : `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`

export const API_BASE_URL = `${BASE_URL}/api`

export const PORTFOLIO_URL = "https://aniket-pawar.vercel.app/"

export const BUY_ME_A_COFFEE_URL = "https://www.buymeacoffee.com/aniketpawar508"
