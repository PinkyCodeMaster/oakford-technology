"use client"

import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { divisions, navigationLinks } from "@/lib/oakford-config"
import { useDivision } from "@/lib/division-context"

export function HeaderV2Minimal() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [divisionMenuOpen, setDivisionMenuOpen] = useState(false)
  const { currentDivision, setDivision } = useDivision()
  const currentDivisionConfig = divisions[currentDivision]

  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-primary-foreground">
              <span className="text-lg font-bold">O</span>
            </div>
            <span className="text-sm font-bold">Oakford</span>
            <span className="hidden text-xs text-muted-foreground md:inline">/ {currentDivisionConfig.name}</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navigationLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-foreground/70 hover:text-foreground">
                {link.label}
              </Link>
            ))}
            <div className="relative">
              <button
                onClick={() => setDivisionMenuOpen(!divisionMenuOpen)}
                className="flex items-center gap-1 text-sm text-foreground/70 hover:text-foreground"
              >
                Divisions
                <ChevronDown className="h-3 w-3" />
              </button>
              {divisionMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 rounded-lg border border-border bg-background p-2 shadow-lg">
                  {Object.values(divisions).map((division) => (
                    <button
                      key={division.id}
                      onClick={() => {
                        setDivision(division.id)
                        setDivisionMenuOpen(false)
                      }}
                      className="w-full rounded p-3 text-left hover:bg-accent"
                    >
                      <div className="text-sm font-semibold">{division.fullName}</div>
                      <div className="text-xs text-muted-foreground">{division.tagline}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="flex items-center gap-2">
            <Button size="sm" variant="ghost" className="hidden md:inline-flex">
              Contact
            </Button>
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
            <nav className="flex flex-col gap-3">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-foreground/70"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 border-t border-border pt-3">
                {Object.values(divisions).map((division) => (
                  <button
                    key={division.id}
                    onClick={() => {
                      setDivision(division.id)
                      setMobileMenuOpen(false)
                    }}
                    className="w-full rounded p-2 text-left hover:bg-accent"
                  >
                    <div className="text-sm font-semibold">{division.fullName}</div>
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
