"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Sparkles } from "lucide-react"

export function NewsletterV3Split() {
  const [email, setEmail] = useState("")
  const [agreed, setAgreed] = useState(false)
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setStatus("success")
    setEmail("")
    setAgreed(false)
    setTimeout(() => setStatus("idle"), 3000)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Join 10,000+ Subscribers
            </div>
            <h2 className="text-4xl font-bold mb-4">Get Industry Insights</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Subscribe to our newsletter for expert tips, industry trends, and exclusive content delivered weekly.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                Weekly industry insights and analysis
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                Exclusive case studies and success stories
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                Early access to new features and updates
              </li>
            </ul>
          </div>

          <div className="bg-background p-8 rounded-lg shadow-lg border">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="flex items-start gap-2">
                <Checkbox
                  id="terms"
                  checked={agreed}
                  onCheckedChange={(checked) => setAgreed(checked as boolean)}
                  required
                />
                <label htmlFor="terms" className="text-sm text-muted-foreground leading-tight">
                  I agree to receive marketing emails and accept the privacy policy
                </label>
              </div>

              <Button type="submit" disabled={status === "loading" || !agreed} className="w-full" size="lg">
                {status === "loading" ? "Subscribing..." : "Subscribe to Newsletter"}
              </Button>

              {status === "success" && (
                <p className="text-sm text-green-600 text-center">
                  Success! Check your email to confirm your subscription.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
