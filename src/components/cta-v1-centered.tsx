import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface CtaV1CenteredProps {
  title: string
  description: string
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export function CtaV1Centered({ title, description, primaryCta, secondaryCta }: CtaV1CenteredProps) {
  return (
    <section className="bg-primary py-16 text-primary-foreground md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
          <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">{title}</h2>
          <p className="text-pretty text-lg leading-relaxed opacity-90">{description}</p>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="bg-background text-foreground hover:bg-background/90"
            >
              <a href={primaryCta.href}>
                {primaryCta.label}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            {secondaryCta && (
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                <a href={secondaryCta.href}>{secondaryCta.label}</a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
