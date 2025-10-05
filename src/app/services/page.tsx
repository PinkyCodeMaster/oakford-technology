import type { Metadata } from "next"
import { GlobalHeader } from "@/components/global-header"
import { GlobalFooter } from "@/components/global-footer"
import { HeroSplit } from "@/components/hero-split"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CtaSection } from "@/components/cta-section"

const services = [
  {
    title: "Sustainable Infrastructure",
    description: "Design and migrate to low-carbon, energy-efficient platforms.",
  },
  {
    title: "Green Cloud Optimization",
    description: "Reduce cloud emissions with workload right-sizing and region selection.",
  },
  {
    title: "Lifecycle Assessments",
    description: "Data-driven assessments of product and platform environmental impact.",
  },
  {
    title: "Carbon Reporting",
    description: "Automated measurement and transparent reporting aligned to standards.",
  },
]

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <GlobalHeader />

      <main className="flex-1">
        <HeroSplit
          title="Services built for measurable impact"
          description="Practical engagements that reduce emissions while improving reliability and cost."
          imageUrl="/modern-technology-office.jpg"
          imageAlt="Sustainable technology operations"
          primaryCta={{ label: "Get a proposal", href: "/contact" }}
          imagePosition="right"
        />

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {services.map((svc) => (
                <Card key={svc.title} className="h-full">
                  <CardHeader>
                    <CardTitle>{svc.title}</CardTitle>
                    <CardDescription>{svc.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-inside list-disc text-sm text-muted-foreground">
                      <li>Assessment & roadmap</li>
                      <li>Implementation sprints</li>
                      <li>Training & enablement</li>
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <CtaSection
          title="Let’s scope your project"
          description="Tell us about your goals and constraints; we’ll propose pragmatic options."
          primaryCta={{ label: "Contact sales", href: "/contact" }}
          secondaryCta={{ label: "About EcoTech", href: "/about" }}
          variant="default"
        />
      </main>

      <GlobalFooter />
    </div>
  )
}

export const metadata: Metadata = {
  title: "Services",
  description:
    "EcoTech services: sustainable infrastructure, green cloud optimization, lifecycle assessments, carbon reporting.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "EcoTech Services",
    description:
      "Practical engagements for measurable environmental impact and efficiency.",
    url: "/services",
  },
}


