"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

import { authClient } from "@/lib/auth-client"
import { ROUTES } from "@/lib/routes"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const { data: session, isPending } = authClient.useSession()

  useEffect(() => {
    if (!session && !isPending) {
      router.push(ROUTES.LOGIN)
    }
  }, [session, isPending, router])

  if (isPending) {
    return <div>Loading...</div>
  }

  if (!session) {
    return null
  }

  return <>{children}</>
}
