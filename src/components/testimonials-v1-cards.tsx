"use client"

import { Star } from "lucide-react"
import Image from "next/image"

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  image: string
  rating: number
}

interface TestimonialsV1Props {
  title?: string
  subtitle?: string
  testimonials?: Testimonial[]
}

export function TestimonialsV1Cards({
  title = "What Our Clients Say",
  subtitle = "Don't just take our word for it - hear from businesses we've helped succeed",
  testimonials = [
    {
      quote:
        "Working with Oakford has transformed our business operations. Their expertise and dedication are unmatched.",
      author: "Sarah Johnson",
      role: "CEO",
      company: "TechCorp Industries",
      image: "/professional-woman-diverse.png",
      rating: 5,
    },
    {
      quote: "The level of support and innovation we've received has exceeded all expectations. Truly a game-changer.",
      author: "Michael Chen",
      role: "CTO",
      company: "Digital Solutions Inc",
      image: "/professional-man.jpg",
      rating: 5,
    },
    {
      quote:
        "Outstanding service and results. They understood our needs and delivered beyond what we imagined possible.",
      author: "Emily Rodriguez",
      role: "Director of Operations",
      company: "Global Enterprises",
      image: "/confident-business-woman.png",
      rating: 5,
    },
  ],
}: TestimonialsV1Props) {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">{title}</h2>
          <p className="text-xl text-muted-foreground text-pretty">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border rounded-lg p-8">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg mb-6 text-pretty">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
