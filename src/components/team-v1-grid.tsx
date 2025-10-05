"use client"

import Image from "next/image"
import { Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TeamMember {
  name: string
  role: string
  image: string
  bio?: string
  linkedin?: string
  email?: string
}

interface TeamV1Props {
  title?: string
  subtitle?: string
  members?: TeamMember[]
}

export function TeamV1Grid({
  title = "Meet Our Team",
  subtitle = "Experienced professionals dedicated to your success",
  members = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      image: "/professional-woman-ceo.png",
      bio: "20+ years leading technology companies",
      linkedin: "#",
      email: "sarah@oakford.com",
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      image: "/professional-man-cto.jpg",
      bio: "Expert in cloud architecture and innovation",
      linkedin: "#",
      email: "michael@oakford.com",
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Operations",
      image: "/professional-woman-operations.png",
      bio: "Streamlining processes for optimal efficiency",
      linkedin: "#",
      email: "emily@oakford.com",
    },
    {
      name: "David Martinez",
      role: "Head of Customer Success",
      image: "/professional-man-customer-success.jpg",
      bio: "Ensuring client satisfaction and growth",
      linkedin: "#",
      email: "david@oakford.com",
    },
  ],
}: TeamV1Props) {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">{title}</h2>
          <p className="text-xl text-muted-foreground text-pretty">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative aspect-square rounded-lg overflow-hidden mb-4">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-muted-foreground mb-2">{member.role}</p>
              {member.bio && <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>}
              <div className="flex justify-center gap-2">
                {member.linkedin && (
                  <Button variant="ghost" size="icon" asChild>
                    <a href={member.linkedin} aria-label={`${member.name} LinkedIn`}>
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                )}
                {member.email && (
                  <Button variant="ghost" size="icon" asChild>
                    <a href={`mailto:${member.email}`} aria-label={`Email ${member.name}`}>
                      <Mail className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
