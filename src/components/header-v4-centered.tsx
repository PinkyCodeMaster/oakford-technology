"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { divisions, navigationLinks } from "@/lib/oakford-config"
import { useDivision } from "@/lib/division-context"

export function HeaderV4Centered() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { currentDivision, setDivision } = useDivision()
  const currentDivisionConfig = divisions[currentDivision]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex min-h-20 flex-col items-center justify-center gap-3 py-3 md:flex-row md:justify-between">
          {/* Logo - Centered on mobile, left on desktop */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <span className="text-2xl font-bold">O</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold leading-none">Oakford Group</span>
              <span className="text-xs text-muted-foreground">{currentDivisionConfig.fullName}</span>
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden items-center gap-8 md:flex">
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

          {/* CTA & Division Switcher */}
          <div className="flex items-center gap-3">
            <select
              value={currentDivision}
              onChange={(e) => setDivision(e.target.value as any)}
              className="hidden rounded-md border border-border bg-background px-3 py-1.5 text-sm md:block"
            >
              {Object.values(divisions).map((division) => (
                <option key={division.id} value={division.id}>
                  {division.name}
                </option>
              ))}
            </select>
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
                  className="text-center text-sm font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 border-t border-border pt-4">
                <span className="mb-3 block text-center text-xs font-semibold uppercase text-muted-foreground">
                  Switch Division
                </span>
                <div className="flex flex-col gap-2">
                  {Object.values(divisions).map((division) => (
                    <button
                      key={division.id}
                      onClick={() => {
                        setDivision(division.id)
                        setMobileMenuOpen(false)
                      }}
                      className="rounded p-2 text-center text-sm hover:bg-accent"
                    >
                      {division.fullName}
                    </button>
                  ))}
                </div>
              </div>
              <Button className="mt-2 w-full">Get Started</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
