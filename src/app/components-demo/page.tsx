import { Breadcrumbs } from "@/components/breadcrumbs"
import { Tabs } from "@/components/tabs"
import { Accordion } from "@/components/accordion"
import { NewsletterV1Inline } from "@/components/newsletter-v1-inline"
import { NewsletterV2Card } from "@/components/newsletter-v2-card"
import { NewsletterV3Split } from "@/components/newsletter-v3-split"
import { NewsletterV4Minimal } from "@/components/newsletter-v4-minimal"
import { QuoteRequestV1 } from "@/components/quote-request-v1"
import { QuoteRequestV2 } from "@/components/quote-request-v2"
import { ImageCarousel } from "@/components/image-carousel"
import { VideoSectionV1 } from "@/components/video-section-v1"
import { VideoSectionV2 } from "@/components/video-section-v2"
import { GalleryGrid } from "@/components/gallery-grid"

export default function ComponentsDemo() {
  const carouselImages = [
    {
      src: "/modern-office.png",
      alt: "Modern office",
      caption: "Our state-of-the-art facilities",
    },
    {
      src: "/team-collaboration.png",
      alt: "Team working",
      caption: "Collaborative work environment",
    },
    {
      src: "/technology-innovation.jpg",
      alt: "Innovation",
      caption: "Cutting-edge technology",
    },
  ]

  const galleryImages = [
    { src: "/project-1.jpg", alt: "Project 1", title: "Enterprise Solution" },
    { src: "/project-2.jpg", alt: "Project 2", title: "Cloud Migration" },
    { src: "/project-3.jpg", alt: "Project 3", title: "Data Analytics" },
    { src: "/project-4.jpg", alt: "Project 4", title: "Mobile App" },
    { src: "/project-5.jpg", alt: "Project 5", title: "IoT Integration" },
    { src: "/project-6.jpg", alt: "Project 6", title: "AI Platform" },
  ]

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs items={[{ label: "Components", href: "/components-demo" }, { label: "Additional Components" }]} />

        <h1 className="text-4xl font-bold mb-4">Additional Components Showcase</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Forms, navigation, and media components for the Oakford design system
        </p>

        {/* Newsletter Forms */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Newsletter Forms</h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Version 1: Inline</h3>
              <NewsletterV1Inline />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Version 2: Card</h3>
              <NewsletterV2Card />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Version 3: Split Layout</h3>
              <NewsletterV3Split />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Version 4: Minimal</h3>
              <NewsletterV4Minimal />
            </div>
          </div>
        </section>

        {/* Quote Request Forms */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Quote Request Forms</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Version 1: Single Page</h3>
              <QuoteRequestV1 />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Version 2: Multi-Step</h3>
              <QuoteRequestV2 />
            </div>
          </div>
        </section>

        {/* Navigation Components */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Navigation Components</h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Tabs</h3>
              <Tabs
                tabs={[
                  {
                    id: "overview",
                    label: "Overview",
                    content: (
                      <div className="prose max-w-none">
                        <p>
                          This is the overview tab content. Tabs are great for organizing related content into separate
                          views.
                        </p>
                      </div>
                    ),
                  },
                  {
                    id: "features",
                    label: "Features",
                    content: (
                      <div className="prose max-w-none">
                        <p>Features tab content goes here. You can include any React components or content.</p>
                      </div>
                    ),
                  },
                  {
                    id: "pricing",
                    label: "Pricing",
                    content: (
                      <div className="prose max-w-none">
                        <p>Pricing information and details can be displayed in this tab.</p>
                      </div>
                    ),
                  },
                ]}
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Accordion</h3>
              <Accordion
                items={[
                  {
                    id: "faq1",
                    title: "What services do you offer?",
                    content: (
                      <p>
                        We offer a comprehensive range of technology solutions including consulting, implementation,
                        integration, and ongoing support services.
                      </p>
                    ),
                  },
                  {
                    id: "faq2",
                    title: "How long does a typical project take?",
                    content: (
                      <p>
                        Project timelines vary based on scope and complexity, ranging from a few weeks for small
                        implementations to several months for enterprise solutions.
                      </p>
                    ),
                  },
                  {
                    id: "faq3",
                    title: "Do you provide ongoing support?",
                    content: (
                      <p>
                        Yes, we offer comprehensive support packages including maintenance, updates, and 24/7 technical
                        assistance for all our solutions.
                      </p>
                    ),
                  },
                ]}
              />
            </div>
          </div>
        </section>

        {/* Media Components */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Media Components</h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Image Carousel</h3>
              <ImageCarousel images={carouselImages} />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Video Section V1</h3>
              <VideoSectionV1
                videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
                thumbnailUrl="/video-thumbnail.png"
                title="See Our Solutions in Action"
                description="Watch how we transform businesses with innovative technology"
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Video Section V2 (Modal)</h3>
              <VideoSectionV2
                videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
                thumbnailUrl="/video-thumbnail-2.png"
                title="Discover Our Approach"
                description="Learn about our proven methodology and success stories"
                features={[
                  "Comprehensive planning and strategy",
                  "Agile implementation process",
                  "Continuous optimization and support",
                ]}
              />
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Gallery Grid</h3>
              <GalleryGrid images={galleryImages} columns={3} />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
