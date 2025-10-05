"use client"

import Image from "next/image"
import { Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TeamMember {
  name: string
  role: string
  image: string
  bio: string
  specialties: string[]
  linkedin?: string
  email?: string
  phone?: string
}

interface TeamV4Props {
  title?: string
  member?: TeamMember
}

export function TeamV4Featured({
  title = "Featured Team Member",
  member = {
    name: "Dr. Patricia Anderson",
    role: "Chief Innovation Officer",
    image: "/professional-executive-portrait.png",
    bio: "Dr. Anderson leads our innovation initiatives with over 30 years of experience in technology and business transformation. She holds a Ph.D. in Computer Science from MIT and has been recognized as one of the top 50 technology leaders globally.",
    specialties: ["Digital Transformation", "AI & Machine Learning", "Strategic Planning", "Innovation Management"],
    linkedin: "#",
    email: "patricia@oakford.com",
    phone: "+1 (555) 123-4567",
  },
}: TeamV4Props) {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center text-balance">{title}</h2>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-2">{member.name}</h3>
              <p className="text-xl text-primary font-semibold mb-6">{member.role}</p>
              <p className="text-lg text-muted-foreground mb-6 text-pretty">{member.bio}</p>

              <div className="mb-6">
                <h4 className="font-semibold mb-3">Areas of Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((specialty, index) => (
                    <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {member.linkedin && (
                  <Button variant="outline" asChild>
                    <a href={member.linkedin}>
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                )}
                {member.email && (
                  <Button variant="outline" asChild>
                    <a href={`mailto:${member.email}`}>
                      <Mail className="mr-2 h-4 w-4" />
                      Email
                    </a>
                  </Button>
                )}
                {member.phone && (
                  <Button variant="outline" asChild>
                    <a href={`tel:${member.phone}`}>
                      <Phone className="mr-2 h-4 w-4" />
                      Call
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
