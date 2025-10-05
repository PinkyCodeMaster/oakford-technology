"use client"

import Image from "next/image"

interface LogosV2Props {
  title?: string
  logos?: string[]
}

export function LogosV2Marquee({
  title = "Powering Innovation for Industry Leaders",
  logos = [
    "/abstract-tech-logo-1.png",
    "/abstract-tech-logo-2.png",
    "/tech-company-logo-abstract-network.png",
    "/tech-company-logo-abstract-network.png",
    "/tech-company-logo-abstract-network.png",
    "/tech-company-logo-abstract-hexagon.png",
    "/tech-company-logo-7.png",
    "/tech-company-logo-8.png",
  ],
}: LogosV2Props) {
  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <h3 className="text-xl font-semibold text-center mb-8 text-muted-foreground">{title}</h3>
        <div className="flex gap-12 items-center justify-center flex-wrap">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity"
            >
              <Image
                src={logo || "/placeholder.svg"}
                alt={`Partner logo ${index + 1}`}
                width={100}
                height={50}
                className="max-w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
