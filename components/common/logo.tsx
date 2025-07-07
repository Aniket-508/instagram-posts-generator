import React from "react"
import Image from "next/image"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"

interface LogoProps extends React.ComponentProps<"div"> {
  asChild?: boolean
}

export const LogoIcon = ({
  height = 24,
  width = 24,
}: {
  height?: number
  width?: number
}) => {
  return (
    <Image
      unoptimized
      src="/icon.svg"
      alt="Logo"
      width={width}
      height={height}
    />
  )
}

export const Logo = React.forwardRef<HTMLDivElement, LogoProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div"

    return (
      <Comp
        ref={ref}
        className={cn("flex items-center gap-2", className)}
        {...props}
      >
        <LogoIcon />
        <span className="hidden font-semibold text-primary lg:inline">
          OpenPosts
        </span>
      </Comp>
    )
  }
)
