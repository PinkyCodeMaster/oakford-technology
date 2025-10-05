"use client"

import Image from "next/image"

interface TeamMember {
  name: string
  role: string
  image: string
}

interface TeamV3Props {
  title?: string
  members?: TeamMember[]
}

export function TeamV3Minimal({
  title = "Our Team",
  members = [
    {
      name: "Alex Morgan",
      role: "Product Manager",
      image: "/professional-person-1.png",
    },
    {
      name: "Sam Rivera",
      role: "Lead Developer",
      image: "/professional-person-2.png",
    },
    {
      name: "Jordan Kim",
      role: "UX Designer",
      image: "/professional-person-3.png",
    },
    {
      name: "Taylor Brooks",
      role: "Marketing Director",
      image: "/professional-person-4.png",
    },
    {
      name: "Casey Parker",
      role: "Sales Manager",
      image: "/professional-person-5.png",
    },
    {
      name: "Morgan Lee",
      role: "Support Lead",
      image: "/professional-person-6.png",
    },
  ],
}: TeamV3Props) {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-balance">{title}</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {members.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative aspect-square rounded-full overflow-hidden mb-3 mx-auto max-w-[120px]">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="font-semibold text-sm">{member.name}</h3>
              <p className="text-xs text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
