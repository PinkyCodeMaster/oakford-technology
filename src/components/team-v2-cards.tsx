"use client"

import Image from "next/image"
import { Linkedin, Twitter, Mail } from "lucide-react"

interface TeamMember {
  name: string
  role: string
  image: string
  bio: string
  linkedin?: string
  twitter?: string
  email?: string
}

interface TeamV2Props {
  title?: string
  members?: TeamMember[]
}

export function TeamV2Cards({
  title = "Leadership Team",
  members = [
    {
      name: "Jennifer Lee",
      role: "Chief Executive Officer",
      image: "/executive-woman.png",
      bio: "Jennifer brings over 25 years of experience in technology leadership, having previously served as VP at Fortune 500 companies.",
      linkedin: "#",
      twitter: "#",
      email: "jennifer@oakford.com",
    },
    {
      name: "Robert Taylor",
      role: "Chief Technology Officer",
      image: "/executive-man-tech.jpg",
      bio: "Robert is a visionary technologist with a track record of building scalable systems that serve millions of users.",
      linkedin: "#",
      twitter: "#",
      email: "robert@oakford.com",
    },
    {
      name: "Amanda White",
      role: "Chief Operating Officer",
      image: "/executive-woman-operations.jpg",
      bio: "Amanda specializes in operational excellence and has transformed organizations through strategic process improvements.",
      linkedin: "#",
      twitter: "#",
      email: "amanda@oakford.com",
    },
  ],
}: TeamV2Props) {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center text-balance">{title}</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div key={index} className="bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-square">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>
                <p className="text-muted-foreground mb-4 text-pretty">{member.bio}</p>
                <div className="flex gap-3">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${member.name} Twitter`}
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  )}
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="h-5 w-5" />
                    </a>
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
