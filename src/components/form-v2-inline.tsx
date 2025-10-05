"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface FormV2InlineProps {
  title?: string
  description?: string
  onSubmit?: (data: any) => void | Promise<void>
}

export function FormV2Inline({ title = "Contact Us", description, onSubmit }: FormV2InlineProps) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      if (onSubmit) {
        await onSubmit(formData)
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1000))
      }
      setSubmitStatus("success")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="border-y border-border bg-muted/20 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl">
          {(title || description) && (
            <div className="mb-8 text-center">
              {title && <h2 className="mb-3 text-3xl font-bold">{title}</h2>}
              {description && <p className="text-lg text-muted-foreground">{description}</p>}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  required
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                placeholder="How can we help you?"
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                required
              />
            </div>
            {submitStatus === "success" && (
              <div className="rounded-md bg-oakford-success/10 p-4 text-center text-sm text-oakford-success">
                Message sent successfully!
              </div>
            )}
            {submitStatus === "error" && (
              <div className="rounded-md bg-oakford-error/10 p-4 text-center text-sm text-oakford-error">
                Failed to send message. Please try again.
              </div>
            )}
            <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
