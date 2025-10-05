"use client"

import type React from "react"

import { Zap, Shield, Users, TrendingUp } from "lucide-react"

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

interface FeaturesV1Props {
  title?: string
  subtitle?: string
  features?: Feature[]
}

export function FeaturesV1Grid({
  title = "Why Choose Us",
  subtitle = "Discover the advantages that set us apart from the competition",
  features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Lightning Fast",
      description: "Experience unparalleled speed and performance with our cutting-edge technology solutions.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security measures to protect your data and ensure business continuity.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Support",
      description: "24/7 dedicated support from our team of experienced professionals ready to assist you.",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Scalable Growth",
      description: "Solutions that grow with your business, from startup to enterprise scale.",
    },
  ],
}: FeaturesV1Props) {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">{title}</h2>
          <p className="text-xl text-muted-foreground text-pretty">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10 text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-pretty">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
