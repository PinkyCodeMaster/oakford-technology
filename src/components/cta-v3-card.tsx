import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"

interface CtaV3CardProps {
  title: string
  description: string
  features: string[]
  primaryCta: { label: string; href: string }
}

export function CtaV3Card({ title, description, features, primaryCta }: CtaV3CardProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl rounded-2xl border border-border bg-gradient-to-br from-background to-muted/30 p-8 shadow-lg md:p-12">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4 text-center">
              <h2 className="text-balance text-3xl font-bold md:text-4xl">{title}</h2>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground">{description}</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" />
                  </div>
                  <span className="text-sm leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <Button size="lg" asChild>
                <a href={primaryCta.href}>
                  {primaryCta.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
