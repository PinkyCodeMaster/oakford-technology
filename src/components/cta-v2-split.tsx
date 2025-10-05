import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface CtaV2SplitProps {
  title: string
  description: string
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export function CtaV2Split({ title, description, primaryCta, secondaryCta }: CtaV2SplitProps) {
  return (
    <section className="border-y border-border bg-muted/30 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-12">
          <div className="flex flex-1 flex-col gap-4">
            <h2 className="text-balance text-3xl font-bold md:text-4xl">{title}</h2>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">{description}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-shrink-0">
            <Button size="lg" asChild>
              <a href={primaryCta.href}>
                {primaryCta.label}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            {secondaryCta && (
              <Button size="lg" variant="outline" asChild>
                <a href={secondaryCta.href}>{secondaryCta.label}</a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
