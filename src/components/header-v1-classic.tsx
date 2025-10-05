"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { divisions, navigationLinks } from "@/lib/oakford-config"
import { useDivision } from "@/lib/division-context"

export function HeaderV1Classic() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { currentDivision, setDivision } = useDivision()
  const currentDivisionConfig = divisions[currentDivision]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <span className="text-xl font-bold">O</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold leading-none text-foreground">Oakford Group</span>
                <span className="text-xs text-muted-foreground">{currentDivisionConfig.name}</span>
              </div>
            </Link>
          </div>

          <nav className="hidden items-center gap-6 md:flex">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="hidden md:flex bg-transparent">
                  Switch Division
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {Object.values(divisions).map((division) => (
                  <DropdownMenuItem
                    key={division.id}
                    onClick={() => setDivision(division.id)}
                    className="flex flex-col items-start gap-1 py-3"
                  >
                    <span className="font-semibold">{division.fullName}</span>
                    <span className="text-xs text-muted-foreground">{division.tagline}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button size="sm" className="hidden md:inline-flex">
              Get Started
            </Button>

            <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-border py-4 md:hidden">
            <nav className="flex flex-col gap-4">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 flex flex-col gap-2 border-t border-border pt-4">
                <span className="text-xs font-semibold uppercase text-muted-foreground">Switch Division</span>
                {Object.values(divisions).map((division) => (
                  <button
                    key={division.id}
                    onClick={() => {
                      setDivision(division.id)
                      setMobileMenuOpen(false)
                    }}
                    className="flex flex-col items-start gap-1 rounded-md p-2 text-left transition-colors hover:bg-accent"
                  >
                    <span className="text-sm font-semibold">{division.fullName}</span>
                    <span className="text-xs text-muted-foreground">{division.tagline}</span>
                  </button>
                ))}
              </div>
              <Button className="mt-2 w-full">Get Started</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
