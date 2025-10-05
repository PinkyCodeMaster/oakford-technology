"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Bell } from "lucide-react"

export function NewsletterV2Card() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setStatus("success")
    setEmail("")
    setTimeout(() => setStatus("idle"), 3000)
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto p-8 border-2">
          <div className="flex items-start gap-6">
            <div className="bg-primary text-primary-foreground p-4 rounded-lg">
              <Bell className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">Newsletter Signup</h3>
              <p className="text-muted-foreground mb-6">
                Join our mailing list for exclusive updates, insights, and offers
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" disabled={status === "loading"} className="w-full">
                  {status === "loading" ? "Subscribing..." : "Subscribe Now"}
                </Button>
              </form>

              {status === "success" && (
                <p className="text-sm mt-4 text-green-600">Successfully subscribed! Welcome aboard.</p>
              )}

              <p className="text-xs text-muted-foreground mt-4">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
