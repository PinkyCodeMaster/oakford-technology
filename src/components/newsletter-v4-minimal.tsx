"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

export function NewsletterV4Minimal() {
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
    <section className="py-12 border-y">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-1">Stay in the loop</h3>
            <p className="text-muted-foreground text-sm">Get updates on our latest projects and insights</p>
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2 w-full md:w-auto min-w-[320px]">
            <Input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" disabled={status === "loading"} size="icon">
              <ArrowRight className="w-4 h-4" />
            </Button>
          </form>

          {status === "success" && (
            <p className="text-sm text-green-600 md:absolute md:mt-16">Subscribed successfully!</p>
          )}
        </div>
      </div>
    </section>
  )
}
