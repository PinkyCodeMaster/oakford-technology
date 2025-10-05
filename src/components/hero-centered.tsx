import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface HeroCenteredProps {
  title: string
  description: string
  primaryCta?: {
    label: string
    href: string
  }
  secondaryCta?: {
    label: string
    href: string
  }
}

export function HeroCentered({ title, description, primaryCta, secondaryCta }: HeroCenteredProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background to-muted/20 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
          <h1 className="text-balance">{title}</h1>
          <p className="text-pretty text-lg text-muted-foreground md:text-xl">{description}</p>
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              {primaryCta && (
                <Button size="lg" asChild>
                  <a href={primaryCta.href}>
                    {primaryCta.label}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
              {secondaryCta && (
                <Button size="lg" variant="outline" asChild>
                  <a href={secondaryCta.href}>{secondaryCta.label}</a>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
