import Link from "next/link"

import { ROUTES } from "@/lib/routes"
import { Button } from "@/components/ui/button"

export default function AuthButtons() {
  return (
    <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
      <Button asChild variant="outline" size="sm">
        <Link href={ROUTES.LOGIN}>
          <span>Login</span>
        </Link>
      </Button>
      <Button asChild size="sm">
        <Link href={ROUTES.SIGNUP}>
          <span>Sign Up</span>
        </Link>
      </Button>
    </div>
  )
}
