"use client"

import Image from "next/image"

interface Client {
  name: string
  logo: string
  description: string
}

interface LogosV3Props {
  title?: string
  subtitle?: string
  clients?: Client[]
}

export function LogosV3Cards({
  title = "Our Clients",
  subtitle = "We're proud to partner with innovative companies across industries",
  clients = [
    {
      name: "TechCorp Global",
      logo: "/techcorp-logo.png",
      description: "Leading technology solutions provider",
    },
    {
      name: "InnovateLabs",
      logo: "/innovate-logo.png",
      description: "Research and development pioneer",
    },
    {
      name: "Digital Dynamics",
      logo: "/digital-logo.png",
      description: "Digital transformation experts",
    },
    {
      name: "CloudFirst Inc",
      logo: "/abstract-cloud-logo.png",
      description: "Cloud infrastructure specialists",
    },
    {
      name: "DataFlow Systems",
      logo: "/dataflow-logo.jpg",
      description: "Big data analytics platform",
    },
    {
      name: "SecureNet",
      logo: "/secure-logo.jpg",
      description: "Cybersecurity solutions leader",
    },
  ],
}: LogosV3Props) {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">{title}</h2>
          <p className="text-xl text-muted-foreground text-pretty">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((client, index) => (
            <div key={index} className="bg-card border rounded-lg p-8 text-center hover:shadow-md transition-shadow">
              <div className="flex items-center justify-center mb-4 h-20">
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  width={160}
                  height={80}
                  className="max-w-full h-auto"
                />
              </div>
              <h3 className="font-semibold mb-2">{client.name}</h3>
              <p className="text-sm text-muted-foreground">{client.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
