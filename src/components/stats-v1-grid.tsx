"use client"

interface Stat {
  value: string
  label: string
  description?: string
}

interface StatsV1Props {
  title?: string
  stats?: Stat[]
}

export function StatsV1Grid({
  title = "Our Impact in Numbers",
  stats = [
    {
      value: "500+",
      label: "Clients Served",
      description: "Businesses trust us worldwide",
    },
    {
      value: "99.9%",
      label: "Uptime Guarantee",
      description: "Reliable service you can count on",
    },
    {
      value: "24/7",
      label: "Support Available",
      description: "Always here when you need us",
    },
    {
      value: "15+",
      label: "Years Experience",
      description: "Industry expertise and knowledge",
    },
  ],
}: StatsV1Props) {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center text-balance">{title}</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-xl font-semibold mb-1">{stat.label}</div>
              {stat.description && <div className="text-sm text-primary-foreground/80">{stat.description}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
