import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

interface HeroV1BoldProps {
  title: string
  description: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  stats?: Array<{ value: string; label: string }>
}

export function HeroV1Bold({ title, description, primaryCta, secondaryCta, stats }: HeroV1BoldProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center gap-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-4 py-1.5 text-sm backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              <span className="text-muted-foreground">Now Available</span>
            </div>

            <h1 className="text-balance text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">{title}</h1>

            <p className="text-pretty text-xl text-muted-foreground md:text-2xl">{description}</p>

            {(primaryCta || secondaryCta) && (
              <div className="flex flex-col items-center gap-4 sm:flex-row">
                {primaryCta && (
                  <Button size="lg" className="h-12 px-8 text-base" asChild>
                    <a href={primaryCta.href}>
                      {primaryCta.label}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                )}
                {secondaryCta && (
                  <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-transparent" asChild>
                    <a href={secondaryCta.href}>
                      <Play className="mr-2 h-5 w-5" />
                      {secondaryCta.label}
                    </a>
                  </Button>
                )}
              </div>
            )}

            {stats && stats.length > 0 && (
              <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4">
                {stats.map((stat, index) => (
                  <div key={index} className="flex flex-col gap-1">
                    <div className="text-3xl font-bold text-primary md:text-4xl">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
