import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface InlineCtaProps {
  text: string
  ctaLabel: string
  ctaHref: string
}

export function InlineCta({ text, ctaLabel, ctaHref }: InlineCtaProps) {
  return (
    <div className="flex flex-col items-center justify-between gap-4 rounded-lg border border-border bg-card p-6 md:flex-row">
      <p className="text-lg font-medium text-card-foreground">{text}</p>
      <Button asChild>
        <a href={ctaHref}>
          {ctaLabel}
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>
  )
}
