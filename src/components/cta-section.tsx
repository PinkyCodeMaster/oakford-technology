import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface CtaSectionProps {
  title: string
  description: string
  primaryCta: {
    label: string
    href: string
  }
  secondaryCta?: {
    label: string
    href: string
  }
  variant?: "default" | "accent" | "minimal"
}

export function CtaSection({ title, description, primaryCta, secondaryCta, variant = "default" }: CtaSectionProps) {
  const variantStyles = {
    default: "bg-primary text-primary-foreground",
    accent: "bg-accent text-accent-foreground",
    minimal: "bg-muted/30 text-foreground",
  }

  return (
    <section className={`py-16 md:py-24 ${variantStyles[variant]}`}>
      <div className="container mx-auto px-4">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
          <h2 className="text-balance">{title}</h2>
          <p className="text-pretty text-lg leading-relaxed opacity-90">{description}</p>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <Button
              size="lg"
              variant={variant === "default" ? "secondary" : "default"}
              asChild
              className={variant === "default" ? "bg-background text-foreground hover:bg-background/90" : ""}
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
                className={
                  variant === "default"
                    ? "border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                    : ""
                }
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
