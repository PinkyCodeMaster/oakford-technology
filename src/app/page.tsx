import { GlobalHeader } from "@/components/global-header"
import { GlobalFooter } from "@/components/global-footer"
import { HeroCentered } from "@/components/hero-centered"
import { HeroSplit } from "@/components/hero-split"
import { HeroMinimal } from "@/components/hero-minimal"
import { CtaSection } from "@/components/cta-section"
import { InlineCta } from "@/components/inline-cta"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <GlobalHeader />

      <main className="flex-1">
        {/* Hero Centered Example */}
        <HeroCentered
          title="Oakford Group Design System"
          description="A unified component library and design foundation for all four Oakford divisions. Built with Next.js, TypeScript, and Tailwind CSS."
          primaryCta={{ label: "Explore Components", href: "#components" }}
          secondaryCta={{ label: "View Documentation", href: "#docs" }}
        />

        {/* Component Showcase Section */}
        <section className="py-16 md:py-24" id="components">
          <div className="container mx-auto px-4">
            <div className="mb-12 flex flex-col gap-4">
              <h2 className="text-balance">Component Library</h2>
              <p className="text-pretty text-lg text-muted-foreground">
                Explore the shared components available across all Oakford divisions.
              </p>
            </div>

            <div className="flex flex-col gap-16">
              {/* Hero Variants */}
              <div className="flex flex-col gap-6">
                <h3>Hero Components</h3>
                <div className="grid gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Hero Centered</CardTitle>
                      <CardDescription>Centered hero with dual CTAs, perfect for landing pages</CardDescription>
                    </CardHeader>
                    <CardContent className="border-t border-border bg-muted/20 p-0">
                      <div className="scale-75 origin-top">
                        <HeroCentered
                          title="Transform Your Business"
                          description="Comprehensive technology solutions designed to drive growth and innovation."
                          primaryCta={{ label: "Get Started", href: "#" }}
                          secondaryCta={{ label: "Learn More", href: "#" }}
                        />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Hero Split</CardTitle>
                      <CardDescription>Side-by-side layout with image and content</CardDescription>
                    </CardHeader>
                    <CardContent className="border-t border-border bg-muted/20 p-0">
                      <div className="scale-75 origin-top">
                        <HeroSplit
                          title="Innovative Solutions"
                          description="Partner with us to leverage cutting-edge technology and expert guidance for your digital transformation journey."
                          imageUrl="/modern-technology-office.jpg"
                          imageAlt="Modern technology workspace"
                          primaryCta={{ label: "Contact Us", href: "#" }}
                          imagePosition="right"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Hero Minimal</CardTitle>
                      <CardDescription>Simple, clean hero for internal pages</CardDescription>
                    </CardHeader>
                    <CardContent className="border-t border-border bg-muted/20 p-0">
                      <div className="scale-75 origin-top">
                        <HeroMinimal
                          title="About Oakford Group"
                          description="Leading the way in technology solutions since 2005."
                          primaryCta={{ label: "Our Story", href: "#" }}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* CTA Variants */}
              <div className="flex flex-col gap-6">
                <h3>Call-to-Action Components</h3>
                <div className="grid gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>CTA Section - Default</CardTitle>
                      <CardDescription>Primary branded CTA section</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <CtaSection
                        title="Ready to Get Started?"
                        description="Join hundreds of businesses that trust Oakford Group for their technology needs."
                        primaryCta={{ label: "Schedule a Demo", href: "#" }}
                        secondaryCta={{ label: "View Pricing", href: "#" }}
                        variant="default"
                      />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>CTA Section - Accent</CardTitle>
                      <CardDescription>Subtle accent variant</CardDescription>
                    </CardHeader>
                    <CardContent className="p-0">
                      <CtaSection
                        title="Need Expert Guidance?"
                        description="Our team of specialists is ready to help you find the perfect solution."
                        primaryCta={{ label: "Talk to an Expert", href: "#" }}
                        variant="accent"
                      />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Inline CTA</CardTitle>
                      <CardDescription>Compact inline call-to-action</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <InlineCta
                        text="Looking for a specific solution?"
                        ctaLabel="Browse Services"
                        ctaHref="#services"
                      />
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div className="flex flex-col gap-6">
                <h3>Contact Form</h3>
                <div className="mx-auto w-full max-w-2xl">
                  <ContactForm
                    title="Get in Touch"
                    description="Fill out the form below and our team will get back to you within 24 hours."
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Division Colors Demo */}
        <section className="border-t border-border bg-muted/20 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 flex flex-col gap-4">
              <h2 className="text-balance">Division Color System</h2>
              <p className="text-pretty text-lg text-muted-foreground">
                Each division has its own brand color while maintaining design consistency.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="division-technology">
                <CardHeader>
                  <div className="mb-4 h-24 w-full rounded-lg bg-primary" />
                  <CardTitle>Technology</CardTitle>
                  <CardDescription>Enterprise IT Solutions</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive technology solutions for modern businesses.
                  </p>
                </CardContent>
              </Card>

              <Card className="division-internet">
                <CardHeader>
                  <div className="mb-4 h-24 w-full rounded-lg bg-primary" />
                  <CardTitle>Internet Services</CardTitle>
                  <CardDescription>Connectivity & Cloud</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Reliable internet and cloud infrastructure services.</p>
                </CardContent>
              </Card>

              <Card className="division-integration">
                <CardHeader>
                  <div className="mb-4 h-24 w-full rounded-lg bg-primary" />
                  <CardTitle>Integration</CardTitle>
                  <CardDescription>Systems & Solutions</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Seamless integration of business systems and processes.
                  </p>
                </CardContent>
              </Card>

              <Card className="division-ecotech">
                <CardHeader>
                  <div className="mb-4 h-24 w-full rounded-lg bg-primary" />
                  <CardTitle>EcoTech</CardTitle>
                  <CardDescription>Sustainable Technology</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Environmentally responsible technology solutions.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <CtaSection
          title="Start Building with Oakford"
          description="Ready to leverage our unified design system for your division's website?"
          primaryCta={{ label: "Get Started", href: "#" }}
          secondaryCta={{ label: "Documentation", href: "#" }}
          variant="default"
        />
      </main>

      <GlobalFooter />
    </div>
  )
}
