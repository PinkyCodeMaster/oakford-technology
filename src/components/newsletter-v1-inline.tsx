"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function NewsletterV1Inline() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setStatus("success")
    setEmail("")

    setTimeout(() => setStatus("idle"), 3000)
  }

  return (
    <div className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Mail className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
          <p className="text-primary-foreground/80 mb-6">Get the latest news and updates delivered to your inbox</p>

          <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-background text-foreground"
            />
            <Button type="submit" disabled={status === "loading"} variant="secondary">
              {status === "loading" ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>

          {status === "success" && (
            <p className="text-sm mt-4 text-primary-foreground/90">
              Thanks for subscribing! Check your email to confirm.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
