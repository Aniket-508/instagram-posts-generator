import Link from "next/link"

import { ROUTES } from "@/lib/routes"
import { Button } from "@/components/ui/button"

import AuthButtons from "./auth-buttons"
import LogoutButton from "./logout-button"

export interface BetterAuthProps {
  userEmail?: string
}

export default function BetterAuth({ userEmail }: BetterAuthProps) {
  const isLoggedIn = !!userEmail

  if (isLoggedIn) {
    return (
      <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
        <Button asChild size="sm">
          <Link href={ROUTES.DASHBOARD}>
            <span>Dashboard</span>
          </Link>
        </Button>
        <LogoutButton />
      </div>
    )
  }

  return <AuthButtons />
}
