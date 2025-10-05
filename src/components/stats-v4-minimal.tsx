"use client"

interface Stat {
  value: string
  label: string
}

interface StatsV4Props {
  stats?: Stat[]
}

export function StatsV4Minimal({
  stats = [
    { value: "500+", label: "Clients" },
    { value: "99.9%", label: "Uptime" },
    { value: "24/7", label: "Support" },
    { value: "15+", label: "Years" },
  ],
}: StatsV4Props) {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-x-16 gap-y-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
