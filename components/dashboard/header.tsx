import { Separator } from "../ui/separator"
import { SidebarTrigger } from "../ui/sidebar"

export default function DashboardHeader() {
  return (
    <header className="flex h-12 shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator
        orientation="vertical"
        className="mr-2 data-[orientation=vertical]:h-4"
      />
    </header>
  )
}
