"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

import { authClient } from "@/lib/auth-client"
import { ROUTES } from "@/lib/routes"
import AuthForm from "@/components/better-auth/auth-form"

export default function AuthPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleSignUp = async (email: string, password: string) => {
    await authClient.signUp.email(
      {
        name: email,
        email,
        password,
      },
      {
        onResponse: () => {
          setIsLoading(false)
        },
        onRequest: () => {
          setIsLoading(true)
        },
        onSuccess: () => {
          router.push(ROUTES.HOME)
        },
        onError: (ctx) => {
          toast.error(ctx.error.message)
        },
      }
    )
  }

  return (
    <AuthForm variant="signup" onSubmit={handleSignUp} isLoading={isLoading} />
  )
}
