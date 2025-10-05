import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface CtaV4MinimalProps {
  title: string
  primaryCta: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
}

export function CtaV4Minimal({ title, primaryCta, secondaryCta }: CtaV4MinimalProps) {
  return (
    <section className="border-y border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <h2 className="text-balance text-2xl font-bold md:text-3xl">{title}</h2>
          <div className="flex flex-col gap-3 sm:flex-row">
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
