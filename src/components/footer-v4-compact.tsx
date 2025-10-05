import Link from "next/link"
import { divisions } from "@/lib/oakford-config"

export function FooterV4Compact() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded bg-primary text-primary-foreground">
                <span className="text-sm font-bold">O</span>
              </div>
              <span className="text-sm font-semibold">Oakford Group</span>
            </Link>
            <span className="text-xs text-muted-foreground">&copy; {currentYear}</span>
          </div>

          {/* Divisions */}
          <div className="flex flex-wrap items-center justify-center gap-3">
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

          {/* Legal Links */}
          <div className="flex items-center gap-3">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link href="/contact" className="text-xs text-muted-foreground hover:text-foreground">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
