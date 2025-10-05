import type { Metadata } from "next"
import { GlobalHeader } from "@/components/global-header"
import { GlobalFooter } from "@/components/global-footer"
import { HeroMinimal } from "@/components/hero-minimal"
import { FeaturesV1Grid } from "@/components/features-v1-grid"
import { CtaSection } from "@/components/cta-section"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <GlobalHeader />

      <main className="flex-1">
        <HeroMinimal
          title="About Oakford EcoTech"
          description="Sustainable technology solutions driving measurable environmental impact."
          primaryCta={{ label: "Our Services", href: "/services" }}
        />

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 flex flex-col gap-4">
              <h2 className="text-balance">What we stand for</h2>
              <p className="text-pretty text-lg text-muted-foreground">
                We combine engineering rigor with environmental stewardship to help organizations decarbonize their digital operations.
              </p>
            </div>

            <FeaturesV1Grid />
          </div>
        </section>

        <CtaSection
          title="Ready to collaborate?"
          description="Partner with our EcoTech specialists to plan your roadmap."
          primaryCta={{ label: "Talk to an expert", href: "/contact" }}
          variant="accent"
        />
      </main>

      <GlobalFooter />
    </div>
  )
}

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Oakford EcoTech’s mission, approach, and environmental impact.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Oakford EcoTech",
    description:
      "Our mission, approach, and impact in sustainable technology.",
    url: "/about",
  },
}


