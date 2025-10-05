"use client"

import type React from "react"

import { Zap, Shield, Users, TrendingUp, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
  link?: string
}

interface FeaturesV2Props {
  title?: string
  subtitle?: string
  features?: Feature[]
}

export function FeaturesV2Cards({
  title = "Our Core Services",
  subtitle = "Comprehensive solutions tailored to your business needs",
  features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Cloud Infrastructure",
      description: "Build and scale your applications with our robust cloud infrastructure solutions.",
      link: "#",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Cybersecurity",
      description: "Protect your business with advanced security measures and threat detection.",
      link: "#",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Consulting Services",
      description: "Expert guidance to help you navigate digital transformation and growth.",
      link: "#",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Analytics & Insights",
      description: "Make data-driven decisions with powerful analytics and reporting tools.",
      link: "#",
    },
  ],
}: FeaturesV2Props) {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">{title}</h2>
          <p className="text-xl text-muted-foreground text-pretty">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-card border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4 text-pretty">{feature.description}</p>
                  {feature.link && (
                    <Button variant="link" className="p-0 h-auto">
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
