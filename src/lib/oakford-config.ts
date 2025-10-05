export type Division = "technology" | "internet" | "integration" | "ecotech"

export interface DivisionConfig {
  id: Division
  name: string
  fullName: string
  tagline: string
  description: string
  color: string
  url: string
}

export const divisions: Record<Division, DivisionConfig> = {
  technology: {
    id: "technology",
    name: "Technology",
    fullName: "Oakford Technology",
    tagline: "Enterprise IT Solutions",
    description: "Comprehensive technology solutions for modern businesses",
    color: "oakford-technology",
    url: "/technology",
  },
  internet: {
    id: "internet",
    name: "Internet Services",
    fullName: "Oakford Internet Services",
    tagline: "Connectivity & Cloud",
    description: "Reliable internet and cloud infrastructure services",
    color: "oakford-internet",
    url: "/internet",
  },
  integration: {
    id: "integration",
    name: "Integration",
    fullName: "Oakford Integration",
    tagline: "Systems & Solutions",
    description: "Seamless integration of business systems and processes",
    color: "oakford-integration",
    url: "/integration",
  },
  ecotech: {
    id: "ecotech",
    name: "EcoTech",
    fullName: "Oakford EcoTech",
    tagline: "Sustainable Technology",
    description: "Environmentally responsible technology solutions",
    color: "oakford-ecotech",
    url: "/ecotech",
  },
}

export const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
]

export const socialLinks = {
  linkedin: "https://linkedin.com/company/oakford",
  twitter: "https://twitter.com/oakford",
  facebook: "https://facebook.com/oakford",
}
