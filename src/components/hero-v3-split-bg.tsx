import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface HeroV3SplitBgProps {
  title: string
  subtitle?: string
  description: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export function HeroV3SplitBg({ title, subtitle, description, primaryCta, secondaryCta }: HeroV3SplitBgProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Split Background */}
      <div className="absolute inset-0 flex">
        <div className="w-1/2 bg-primary"></div>
        <div className="w-1/2 bg-background"></div>
      </div>

      {/* Content */}
      <div className="relative">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border border-border bg-background p-8 shadow-2xl md:p-12 lg:p-16">
              <div className="flex flex-col gap-6 text-center">
                {subtitle && (
                  <div className="text-sm font-semibold uppercase tracking-wider text-primary">{subtitle}</div>
                )}

                <h1 className="text-balance text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">{title}</h1>

                <p className="text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">{description}</p>

                {(primaryCta || secondaryCta) && (
                  <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
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
          </div>
        </div>
      </div>
    </section>
  )
}
