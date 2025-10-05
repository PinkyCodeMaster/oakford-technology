"use client"

interface Stat {
  value: string
  label: string
}

interface StatsV3Props {
  title?: string
  description?: string
  stats?: Stat[]
}

export function StatsV3Split({
  title = "Delivering Excellence Since 2008",
  description = "We've built our reputation on consistent results, innovative solutions, and unwavering commitment to our clients' success. Our track record speaks for itself.",
  stats = [
    { value: "500+", label: "Enterprise Clients" },
    { value: "99.9%", label: "Service Uptime" },
    { value: "24/7", label: "Expert Support" },
    { value: "15+", label: "Years in Business" },
    { value: "50+", label: "Countries Served" },
    { value: "1000+", label: "Team Members" },
  ],
}: StatsV3Props) {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-balance">{title}</h2>
            <p className="text-lg text-muted-foreground text-pretty">{description}</p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 border rounded-lg">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
