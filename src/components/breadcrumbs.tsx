import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  showHome?: boolean
}

export function Breadcrumbs({ items, showHome = true }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center gap-2 text-sm">
        {showHome && (
          <>
            <li>
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
              >
                <Home className="w-4 h-4" />
                <span className="sr-only">Home</span>
              </Link>
            </li>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </>
        )}

        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li key={index} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link href={item.href} className="text-muted-foreground hover:text-foreground transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "text-foreground font-medium" : "text-muted-foreground"}>{item.label}</span>
              )}

              {!isLast && <ChevronRight className="w-4 h-4 text-muted-foreground" />}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
