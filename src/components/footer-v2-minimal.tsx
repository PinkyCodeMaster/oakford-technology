import Link from "next/link"
import { divisions, navigationLinks } from "@/lib/oakford-config"

export function FooterV2Minimal() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground">
              <span className="text-lg font-bold">O</span>
            </div>
            <span className="text-sm font-bold">Oakford Group</span>
          </Link>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
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

          {/* Divisions */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {Object.values(divisions).map((division) => (
              <Link
                key={division.id}
                href={division.url}
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {division.name}
              </Link>
            ))}
          </div>

          {/* Legal & Copyright */}
          <div className="flex flex-col items-center gap-3 border-t border-border pt-6">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground">
                Privacy
              </Link>
              <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground">
                Terms
              </Link>
              <Link href="/cookies" className="text-xs text-muted-foreground hover:text-foreground">
                Cookies
              </Link>
            </div>
            <p className="text-xs text-muted-foreground">&copy; {currentYear} Oakford Group</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
