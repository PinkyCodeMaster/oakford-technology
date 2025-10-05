import Link from "next/link"
import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react"
import { divisions, navigationLinks, socialLinks } from "@/lib/oakford-config"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function FooterV3Expanded() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/20">
      <div className="container mx-auto px-4 py-16">
        {/* Newsletter Section */}
        <div className="mb-12 rounded-lg border border-border bg-background p-8">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
            <h3 className="text-xl font-semibold">Stay Updated</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to our newsletter for the latest updates and insights from all Oakford divisions.
            </p>
            <form className="flex w-full max-w-md gap-2">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <span className="text-2xl font-bold">O</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold leading-none">Oakford Group</span>
                <span className="text-xs text-muted-foreground">Unified Technology Solutions</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              A comprehensive technology group delivering specialized solutions across four divisions: Technology,
              Internet Services, Integration, and EcoTech.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>123 Business Street, Suite 100, City, State 12345</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <Link href="tel:+1234567890" className="hover:text-foreground">
                  +1 (234) 567-890
                </Link>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <Link href="mailto:info@oakford.com" className="hover:text-foreground">
                  info@oakford.com
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold">Company</h3>
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
              <Link href="/careers" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Careers
              </Link>
              <Link href="/blog" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Blog
              </Link>
            </nav>
          </div>

          {/* Divisions */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold">Divisions</h3>
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

          {/* Resources */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold">Resources</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="/documentation"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Documentation
              </Link>
              <Link href="/support" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Support Center
              </Link>
              <Link href="/api" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                API Reference
              </Link>
              <Link
                href="/case-studies"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Case Studies
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">&copy; {currentYear} Oakford Group. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href={socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Terms
            </Link>
            <Link href="/cookies" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
