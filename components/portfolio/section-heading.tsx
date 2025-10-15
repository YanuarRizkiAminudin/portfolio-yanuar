export function SectionHeading({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  return (
    <div className="mb-6 md:mb-8">
      <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
      {subtitle ? <p className="text-muted-foreground mt-1">{subtitle}</p> : null}
    </div>
  )
}
