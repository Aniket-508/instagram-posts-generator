import { headers } from "next/headers"

import { auth } from "@/lib/auth"
import HomeLayout from "@/components/home/layout"

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth.api.getSession({
    headers: await headers(),
  })
  const userEmail = session?.user?.email

  return <HomeLayout userEmail={userEmail}>{children}</HomeLayout>
}
