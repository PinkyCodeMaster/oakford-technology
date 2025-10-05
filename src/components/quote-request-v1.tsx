"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"

export function QuoteRequestV1() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setStatus("success")
  }

  if (status === "success") {
    return (
      <Card className="p-8 text-center">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2">Quote Request Received!</h3>
        <p className="text-muted-foreground mb-6">
          Thank you for your interest. Our team will review your request and get back to you within 24 hours.
        </p>
        <Button onClick={() => setStatus("idle")}>Submit Another Request</Button>
      </Card>
    )
  }

  return (
    <Card className="p-8">
      <h3 className="text-2xl font-bold mb-2">Request a Quote</h3>
      <p className="text-muted-foreground mb-6">
        Fill out the form below and we'll get back to you with a customized quote
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name *</Label>
            <Input id="firstName" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name *</Label>
            <Input id="lastName" required />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input id="email" type="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" type="tel" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="company">Company Name</Label>
          <Input id="company" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="service">Service Interested In *</Label>
          <select id="service" required className="w-full px-3 py-2 border rounded-md bg-background">
            <option value="">Select a service</option>
            <option value="consulting">Consulting</option>
            <option value="implementation">Implementation</option>
            <option value="support">Support & Maintenance</option>
            <option value="custom">Custom Solution</option>
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="budget">Estimated Budget</Label>
          <select id="budget" className="w-full px-3 py-2 border rounded-md bg-background">
            <option value="">Select budget range</option>
            <option value="under-10k">Under $10,000</option>
            <option value="10k-25k">$10,000 - $25,000</option>
            <option value="25k-50k">$25,000 - $50,000</option>
            <option value="50k-100k">$50,000 - $100,000</option>
            <option value="over-100k">Over $100,000</option>
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="details">Project Details *</Label>
          <Textarea id="details" rows={5} placeholder="Tell us about your project requirements..." required />
        </div>

        <Button type="submit" disabled={status === "loading"} className="w-full" size="lg">
          {status === "loading" ? "Submitting..." : "Request Quote"}
        </Button>
      </form>
    </Card>
  )
}
