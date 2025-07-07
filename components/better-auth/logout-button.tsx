"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { LoaderCircleIcon } from "lucide-react"

import { authClient } from "@/lib/auth-client"
import { Button } from "@/components/ui/button"

export default function LogoutButton() {
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

  const handleLogout = async () => {
    setIsLoading(true)
    await authClient.signOut()
    router.replace("/")
  }

  return (
    <Button
      size="sm"
      variant="ghost"
      disabled={isLoading}
      onClick={handleLogout}
    >
      {isLoading && <LoaderCircleIcon className="animate-spin" />}
      Sign out
    </Button>
  )
}
