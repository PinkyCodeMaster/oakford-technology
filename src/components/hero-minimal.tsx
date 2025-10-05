import { Button } from "@/components/ui/button"

interface HeroMinimalProps {
  title: string
  description?: string
  primaryCta?: {
    label: string
    href: string
  }
}

export function HeroMinimal({ title, description, primaryCta }: HeroMinimalProps) {
  return (
    <section className="relative overflow-hidden border-b border-border py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto flex max-w-3xl flex-col gap-6">
          <h1 className="text-balance">{title}</h1>
          {description && <p className="text-pretty text-lg text-muted-foreground">{description}</p>}
          {primaryCta && (
            <div>
              <Button size="lg" asChild>
                <a href={primaryCta.href}>{primaryCta.label}</a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
