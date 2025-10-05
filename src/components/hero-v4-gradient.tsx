import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

interface HeroV4GradientProps {
  title: string
  description: string
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  badges?: string[]
}

export function HeroV4Gradient({ title, description, primaryCta, secondaryCta, badges }: HeroV4GradientProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20 md:py-32">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(white,transparent_85%)]"></div>
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/20 blur-3xl"></div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
          {badges && badges.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-2">
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium backdrop-blur"
                >
                  <Sparkles className="h-3 w-3 text-primary" />
                  {badge}
                </div>
              ))}
            </div>
          )}

          <h1 className="text-balance text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">{title}</h1>

          <p className="text-pretty text-xl leading-relaxed text-muted-foreground md:text-2xl">{description}</p>

          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              {primaryCta && (
                <Button size="lg" className="h-12 px-8 text-base shadow-lg" asChild>
                  <a href={primaryCta.href}>
                    {primaryCta.label}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              )}
              {secondaryCta && (
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 border-2 bg-background/80 px-8 text-base backdrop-blur"
                  asChild
                >
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
