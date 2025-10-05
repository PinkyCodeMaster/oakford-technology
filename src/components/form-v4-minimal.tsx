"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface FormV4MinimalProps {
  title?: string
  onSubmit?: (data: any) => void | Promise<void>
}

export function FormV4Minimal({ title = "Get in Touch", onSubmit }: FormV4MinimalProps) {
  const [formData, setFormData] = useState({ email: "", message: "" })
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
      setFormData({ email: "", message: "" })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-xl">
          {title && <h2 className="mb-8 text-center text-3xl font-bold">{title}</h2>}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              type="email"
              placeholder="Your email address"
              value={formData.email}
              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
              required
              className="h-12"
            />
            <Textarea
              placeholder="Your message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
              required
            />
            {submitStatus === "success" && (
              <div className="rounded-md bg-oakford-success/10 p-3 text-center text-sm text-oakford-success">
                Sent successfully!
              </div>
            )}
            {submitStatus === "error" && (
              <div className="rounded-md bg-oakford-error/10 p-3 text-center text-sm text-oakford-error">
                Failed to send.
              </div>
            )}
            <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Sending..." : "Send"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
