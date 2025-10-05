"use client"

import Image from "next/image"

interface LogosV4Props {
  logos?: string[]
}

export function LogosV4Minimal({
  logos = [
    "/generic-brand-logo-1.png",
    "/generic-brand-logo-2.png",
    "/brand-logo-3.png",
    "/brand-logo-4.png",
    "/brand-logo-5.png",
  ],
}: LogosV4Props) {
  return (
    <section className="py-12 bg-background border-y">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logos.map((logo, index) => (
            <div key={index} className="opacity-40 hover:opacity-70 transition-opacity">
              <Image
                src={logo || "/placeholder.svg"}
                alt={`Logo ${index + 1}`}
                width={100}
                height={40}
                className="max-w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
