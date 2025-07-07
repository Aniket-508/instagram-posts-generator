"use client"

import { useState } from "react"
import Link from "next/link"
import { LoaderCircleIcon } from "lucide-react"

import { MAIN_METADATA } from "@/lib/meta"
import { ROUTES } from "@/lib/routes"

import { LogoIcon } from "../common/logo"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"

interface AuthFormProps {
  variant: "login" | "signup"
  onSubmit: (email: string, password: string) => void
  isLoading: boolean
}

const formDetails = {
  ["login"]: {
    title: `Sign in to ${MAIN_METADATA.TITLE}`,
    description: "Welcome back! Sign in to continue",
    prompt: "Don't have an account?",
    promptButton: "Create account",
    promptLink: ROUTES.SIGNUP,
    button: "Sign in",
  },
  ["signup"]: {
    title: `Create ${MAIN_METADATA.TITLE} Account`,
    description: "Welcome! Create an account to get started",
    prompt: "Already have an account?",
    promptButton: "Sign in",
    promptLink: ROUTES.LOGIN,
    button: "Continue",
  },
}

export default function AuthForm({
  variant,
  onSubmit,
  isLoading,
}: AuthFormProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleEmailPassword = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(email, password)
  }

  return (
    <form
      onSubmit={handleEmailPassword}
      className="w-full max-w-sm overflow-hidden rounded-[calc(var(--radius)+.125rem)] border bg-muted shadow-md shadow-neutral-950/5 dark:[--color-muted:var(--color-neutral-900)]"
    >
      <div className="-m-px rounded-[calc(var(--radius)+.125rem)] border bg-card p-8 pb-6">
        <div className="text-center">
          <Link href="/" aria-label="go home" className="mx-auto block w-fit">
            <LogoIcon />
          </Link>
          <h1 className="mb-1 mt-4 text-xl font-semibold">
            {formDetails[variant].title}
          </h1>
          <p className="text-sm">{formDetails[variant].description}</p>
        </div>

        <div className="mt-6 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="block text-sm">
              Email
            </Label>
            <Input
              type="email"
              required
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="space-y-0.5">
            <div className="flex items-center justify-between">
              <Label htmlFor="pwd" className="block text-sm">
                Password
              </Label>
              {/* <Button asChild variant="link" size="sm">
                <Link
                  href="#"
                  className="link intent-info variant-ghost text-sm"
                >
                  Forgot your Password ?
                </Link>
              </Button> */}
            </div>
            <Input
              type="password"
              required
              name="pwd"
              id="pwd"
              className="input sz-md variant-mixed"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading && <LoaderCircleIcon className="animate-spin" />}
            {formDetails[variant].button}
          </Button>
        </div>

        {/* <div className="my-6 grid grid-cols-[1fr_auto_1fr] items-center gap-3">
          <hr className="border-dashed" />
          <span className="text-xs text-muted-foreground">
            Or continue with
          </span>
          <hr className="border-dashed" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Button type="button" variant="outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="0.98em"
              height="1em"
              viewBox="0 0 256 262"
            >
              <path
                fill="#4285f4"
                d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
              ></path>
              <path
                fill="#34a853"
                d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
              ></path>
              <path
                fill="#fbbc05"
                d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"
              ></path>
              <path
                fill="#eb4335"
                d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
              ></path>
            </svg>
            <span>Google</span>
          </Button>
          <Button type="button" variant="outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 256 256"
            >
              <path fill="#f1511b" d="M121.666 121.666H0V0h121.666z"></path>
              <path fill="#80cc28" d="M256 121.666H134.335V0H256z"></path>
              <path
                fill="#00adef"
                d="M121.663 256.002H0V134.336h121.663z"
              ></path>
              <path fill="#fbbc09" d="M256 256.002H134.335V134.336H256z"></path>
            </svg>
            <span>Microsoft</span>
          </Button>
        </div> */}
      </div>

      <div className="p-3">
        <p className="text-center text-sm text-accent-foreground">
          {formDetails[variant].prompt}
          <Button asChild variant="link" className="px-2">
            <Link href={formDetails[variant].promptLink}>
              {formDetails[variant].promptButton}
            </Link>
          </Button>
        </p>
      </div>
    </form>
  )
}
