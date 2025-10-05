import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

interface HeroSplitProps {
  title: string
  description: string
  imageUrl: string
  imageAlt: string
  primaryCta?: {
    label: string
    href: string
  }
  secondaryCta?: {
    label: string
    href: string
  }
  imagePosition?: "left" | "right"
}

export function HeroSplit({
  title,
  description,
  imageUrl,
  imageAlt,
  primaryCta,
  secondaryCta,
  imagePosition = "right",
}: HeroSplitProps) {
  return (
    <section className="relative overflow-hidden border-b border-border py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div
          className={`grid items-center gap-12 lg:grid-cols-2 ${imagePosition === "left" ? "lg:flex-row-reverse" : ""}`}
        >
          {/* Content */}
          <div className={`flex flex-col gap-6 ${imagePosition === "left" ? "lg:order-2" : ""}`}>
            <h1 className="text-balance">{title}</h1>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">{description}</p>
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

          {/* Image */}
          <div className={`relative ${imagePosition === "left" ? "lg:order-1" : ""}`}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-muted">
              <Image src={imageUrl || "/placeholder.svg"} alt={imageAlt} fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
