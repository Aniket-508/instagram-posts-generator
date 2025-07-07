import GridLines from "./grid-lines"
import { HeroHeader } from "./header"

export default function HomeLayout({
  userEmail,
  children,
}: {
  userEmail?: string
  children?: React.ReactNode
}) {
  return (
    <>
      <HeroHeader userEmail={userEmail} />
      <main className="view-container relative mt-[48px] grow border-x p-4 lg:mt-[66px]">
        <GridLines />
        {children}
      </main>
    </>
  )
}
