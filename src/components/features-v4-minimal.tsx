"use client"

import type React from "react"

import { Zap, Shield, Users, TrendingUp, Globe, Lock } from "lucide-react"

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

interface FeaturesV4Props {
  title?: string
  features?: Feature[]
}

export function FeaturesV4Minimal({
  title = "What We Offer",
  features = [
    {
      icon: <Zap className="h-5 w-5" />,
      title: "High Performance",
      description: "Optimized solutions for maximum speed and efficiency",
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Secure by Default",
      description: "Built-in security measures to protect your business",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Expert Team",
      description: "Experienced professionals dedicated to your success",
    },
    {
      icon: <TrendingUp className="h-5 w-5" />,
      title: "Scalable Solutions",
      description: "Grow without limits with our flexible infrastructure",
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Global Reach",
      description: "Worldwide coverage with local expertise",
    },
    {
      icon: <Lock className="h-5 w-5" />,
      title: "Compliance Ready",
      description: "Meet industry standards and regulations effortlessly",
    },
  ],
}: FeaturesV4Props) {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-balance">{title}</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 text-primary mt-1">{feature.icon}</div>
              <div>
                <h3 className="font-semibold mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground text-pretty">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
