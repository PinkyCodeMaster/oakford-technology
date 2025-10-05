"use client"

import type React from "react"

import { Zap, Shield, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
  image: string
  benefits: string[]
}

interface FeaturesV3Props {
  features?: Feature[]
}

export function FeaturesV3Alternating({
  features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Advanced Technology Stack",
      description:
        "Leverage cutting-edge technologies to build scalable, high-performance solutions that drive your business forward.",
      image: "/modern-tech-workspace.png",
      benefits: ["Cloud-native architecture", "Microservices design", "Real-time processing"],
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Enterprise Security",
      description:
        "Comprehensive security measures that protect your data, ensure compliance, and maintain business continuity.",
      image: "/cybersecurity-dashboard.png",
      benefits: ["End-to-end encryption", "Multi-factor authentication", "24/7 monitoring"],
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Dedicated Support Team",
      description:
        "Our expert team is available around the clock to ensure your systems run smoothly and your questions are answered.",
      image: "/professional-support-team.jpg",
      benefits: ["24/7 availability", "Expert technicians", "Proactive monitoring"],
    },
  ],
}: FeaturesV3Props) {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center mb-24 last:mb-0`}
          >
            <div className="flex-1">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary text-primary-foreground mb-4">
                {feature.icon}
              </div>
              <h2 className="text-3xl font-bold mb-4 text-balance">{feature.title}</h2>
              <p className="text-lg text-muted-foreground mb-6 text-pretty">{feature.description}</p>
              <ul className="space-y-3 mb-6">
                {feature.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg">Learn More</Button>
            </div>
            <div className="flex-1">
              <div className="relative aspect-[3/2] rounded-lg overflow-hidden">
                <Image src={feature.image || "/placeholder.svg"} alt={feature.title} fill className="object-cover" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
