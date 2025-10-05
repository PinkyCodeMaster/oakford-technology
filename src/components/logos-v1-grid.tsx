"use client"

import Image from "next/image"

interface LogosV1Props {
  title?: string
  logos?: string[]
}

export function LogosV1Grid({
  title = "Trusted by Leading Companies",
  logos = [
    "/abstract-logo-1.png",
    "/abstract-logo-geometric.png",
    "/abstract-logo-design-3.png",
    "/abstract-logo-4.png",
    "/abstract-logo-5.png",
    "/company-logo-6.png",
  ],
}: LogosV1Props) {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-semibold text-center mb-12 text-muted-foreground">{title}</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
            >
              <Image
                src={logo || "/placeholder.svg"}
                alt={`Client logo ${index + 1}`}
                width={120}
                height={60}
                className="max-w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
