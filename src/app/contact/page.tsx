import type { Metadata } from "next"
import { GlobalHeader } from "@/components/global-header"
import { GlobalFooter } from "@/components/global-footer"
import { HeroMinimal } from "@/components/hero-minimal"
import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <GlobalHeader />

      <main className="flex-1">
        <HeroMinimal
          title="Contact EcoTech"
          description="Tell us about your objectives. We’ll respond within one business day."
          primaryCta={{ label: "Call +1 (234) 567-890", href: "tel:+1234567890" }}
        />

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto w-full max-w-2xl">
              <ContactForm title="Get in touch" description="We just need a few details." />
            </div>
          </div>
        </section>
      </main>

      <GlobalFooter />
    </div>
  )
}

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Oakford EcoTech. Share your objectives; we’ll respond within one business day.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Oakford EcoTech",
    description:
      "Speak with EcoTech specialists about sustainable technology initiatives.",
    url: "/contact",
  },
}


