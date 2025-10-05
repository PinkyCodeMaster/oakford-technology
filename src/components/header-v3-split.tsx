"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { divisions, navigationLinks } from "@/lib/oakford-config"
import { useDivision } from "@/lib/division-context"

export function HeaderV3Split() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { currentDivision, setDivision } = useDivision()
  const currentDivisionConfig = divisions[currentDivision]

  return (
    <>
      {/* Top Bar with Division Info */}
      <div className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex h-10 items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-foreground">Current Division:</span>
              <span className="text-muted-foreground">{currentDivisionConfig.fullName}</span>
            </div>
            <div className="hidden items-center gap-4 md:flex">
              {Object.values(divisions).map((division) => (
                <button
                  key={division.id}
                  onClick={() => setDivision(division.id)}
                  className={`transition-colors hover:text-foreground ${
                    division.id === currentDivision ? "font-semibold text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {division.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <span className="text-xl font-bold">O</span>
              </div>
              <span className="text-lg font-bold">Oakford Group</span>
            </Link>

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
              <Button size="sm" variant="outline" className="hidden md:inline-flex bg-transparent">
                Contact Us
              </Button>
              <Button size="sm" className="hidden md:inline-flex">
                Get Started
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
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
                    className="text-sm font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-2 border-t border-border pt-4">
                  <span className="mb-2 text-xs font-semibold uppercase text-muted-foreground">Divisions</span>
                  <div className="mt-2 flex flex-col gap-2">
                    {Object.values(divisions).map((division) => (
                      <button
                        key={division.id}
                        onClick={() => {
                          setDivision(division.id)
                          setMobileMenuOpen(false)
                        }}
                        className="rounded p-2 text-left text-sm hover:bg-accent"
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
    </>
  )
}
