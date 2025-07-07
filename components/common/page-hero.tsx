interface PageHeroProps {
  route: string
  title: string
  description?: string
  children?: React.ReactNode
}

export default function PageHero({
  route,
  title,
  description,
  children,
}: PageHeroProps) {
  return (
    <div className="border-b px-3 py-12 md:px-4 md:py-[120px]">
      <div className="max-w-[584px]">
        <span className="text-sm text-muted-foreground">{route}</span>
        <h1 className="my-6 text-balance text-5xl font-semibold">{title}</h1>
        {description && <p className="text-balance text-lg">{description}</p>}
        {children}
      </div>
    </div>
  )
}
