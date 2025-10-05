"use client"

import type React from "react"

import { TrendingUp, Users, Award, Zap } from "lucide-react"

interface Stat {
  icon: React.ReactNode
  value: string
  label: string
  change?: string
}

interface StatsV2Props {
  stats?: Stat[]
}

export function StatsV2Cards({
  stats = [
    {
      icon: <Users className="h-8 w-8" />,
      value: "10,000+",
      label: "Active Users",
      change: "+25% this year",
    },
    {
      icon: <Award className="h-8 w-8" />,
      value: "50+",
      label: "Industry Awards",
      change: "Recognition for excellence",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      value: "1M+",
      label: "Projects Completed",
      change: "Successful deliveries",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      value: "98%",
      label: "Client Satisfaction",
      change: "Consistently high ratings",
    },
  ],
}: StatsV2Props) {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-card border rounded-lg p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-lg bg-primary/10 text-primary mb-4">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg font-semibold mb-1">{stat.label}</div>
              {stat.change && <div className="text-sm text-muted-foreground">{stat.change}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
