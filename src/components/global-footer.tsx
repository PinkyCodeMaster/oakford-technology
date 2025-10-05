import Link from "next/link"
import { Facebook, Linkedin, Twitter } from "lucide-react"
import { divisions, navigationLinks, socialLinks } from "@/lib/oakford-config"

export function GlobalFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <span className="text-xl font-bold">O</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold leading-none">Oakford Group</span>
                <span className="text-xs text-muted-foreground">Unified Solutions</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Delivering comprehensive technology solutions across four specialized divisions.
            </p>
            <div className="flex items-center gap-3">
              <Link
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background transition-colors hover:bg-accent"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background transition-colors hover:bg-accent"
              >
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background transition-colors hover:bg-accent"
              >
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Divisions */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold">Our Divisions</h3>
            <nav className="flex flex-col gap-2">
              {Object.values(divisions).map((division) => (
                <Link
                  key={division.id}
                  href={division.url}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {division.fullName}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold">Contact</h3>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <p>123 Business Street</p>
              <p>Suite 100</p>
              <p>City, State 12345</p>
              <Link href="tel:+1234567890" className="transition-colors hover:text-foreground">
                +1 (234) 567-890
              </Link>
              <Link href="mailto:info@oakford.com" className="transition-colors hover:text-foreground">
                info@oakford.com
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">&copy; {currentYear} Oakford Group. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
