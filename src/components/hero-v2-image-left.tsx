import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import Image from "next/image"

interface HeroV2ImageLeftProps {
  title: string
  description: string
  features?: string[]
  primaryCta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  imageSrc?: string
}

export function HeroV2ImageLeft({
  title,
  description,
  features,
  primaryCta,
  secondaryCta,
  imageSrc = "/modern-tech-workspace.png",
}: HeroV2ImageLeftProps) {
  return (
    <section className="border-b border-border py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-muted lg:order-1">
            <Image src={imageSrc || "/placeholder.svg"} alt="Hero image" fill className="object-cover" />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6 lg:order-2">
            <h1 className="text-balance text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">{title}</h1>

            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">{description}</p>

            {features && features.length > 0 && (
              <ul className="flex flex-col gap-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3 w-3" />
                    </div>
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            )}

            {(primaryCta || secondaryCta) && (
              <div className="flex flex-col gap-3 sm:flex-row">
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
    </section>
  )
}
