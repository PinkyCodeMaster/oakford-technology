"use client"

import Image from "next/image"

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  image: string
}

interface TestimonialsV3Props {
  title?: string
  testimonials?: Testimonial[]
}

export function TestimonialsV3Grid({
  title = "Trusted by Industry Leaders",
  testimonials = [
    {
      quote: "The best decision we made was partnering with Oakford. Their solutions are innovative and reliable.",
      author: "Jennifer Lee",
      role: "VP of Technology",
      company: "InnovateTech",
      image: "/business-executive.png",
    },
    {
      quote: "Exceptional service and support. They truly understand our business needs and deliver accordingly.",
      author: "Robert Taylor",
      role: "Managing Director",
      company: "Global Systems",
      image: "/corporate-leader.jpg",
    },
    {
      quote: "Outstanding results and professional team. Highly recommend for any business transformation project.",
      author: "Amanda White",
      role: "Chief Innovation Officer",
      company: "FutureCorp",
      image: "/tech-executive.png",
    },
    {
      quote: "Their expertise has been invaluable. We've seen significant improvements across all our operations.",
      author: "James Anderson",
      role: "Head of IT",
      company: "Enterprise Solutions",
      image: "/it-director.jpg",
    },
    {
      quote: "A true partner in every sense. They go above and beyond to ensure our success.",
      author: "Lisa Thompson",
      role: "Operations Manager",
      company: "TechVentures",
      image: "/operations-manager-meeting.png",
    },
    {
      quote: "Impressive technology and even more impressive people. A winning combination.",
      author: "Mark Wilson",
      role: "CEO",
      company: "Digital Dynamics",
      image: "/ceo-portrait.png",
    },
  ],
}: TestimonialsV3Props) {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center text-balance">{title}</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <p className="mb-6 text-pretty">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-sm">{testimonial.author}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
