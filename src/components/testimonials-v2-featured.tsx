"use client"

import { Quote } from "lucide-react"
import Image from "next/image"

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  image: string
}

interface TestimonialsV2Props {
  testimonial?: Testimonial
}

export function TestimonialsV2Featured({
  testimonial = {
    quote:
      "Oakford has been instrumental in our digital transformation journey. Their innovative solutions and unwavering support have helped us achieve results we never thought possible. The team's expertise and commitment to our success is truly exceptional.",
    author: "David Martinez",
    role: "Chief Technology Officer",
    company: "Fortune 500 Enterprise",
    image: "/executive-portrait.png",
  },
}: TestimonialsV2Props) {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="h-12 w-12 mx-auto mb-8 opacity-50" />
          <blockquote className="text-2xl md:text-3xl font-medium mb-12 text-balance">"{testimonial.quote}"</blockquote>
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-primary-foreground/20">
              <Image
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.author}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="text-xl font-semibold">{testimonial.author}</div>
              <div className="text-primary-foreground/80">{testimonial.role}</div>
              <div className="text-primary-foreground/60">{testimonial.company}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
