"use client"

interface Testimonial {
  quote: string
  author: string
  company: string
}

interface TestimonialsV4Props {
  testimonials?: Testimonial[]
}

export function TestimonialsV4Minimal({
  testimonials = [
    {
      quote: "Oakford transformed our entire infrastructure. Couldn't be happier with the results.",
      author: "Alex Morgan",
      company: "TechStart Inc",
    },
    {
      quote: "Professional, efficient, and always available. The perfect technology partner.",
      author: "Sam Rivera",
      company: "CloudFirst Solutions",
    },
    {
      quote: "Their innovative approach solved problems we didn't even know we had.",
      author: "Jordan Kim",
      company: "DataFlow Systems",
    },
  ],
}: TestimonialsV4Props) {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-center">
                <p className="text-lg mb-4 text-pretty">"{testimonial.quote}"</p>
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.company}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
