"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { FileText } from "lucide-react"

export function QuoteRequestV2() {
  const [step, setStep] = useState(1)
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      setStatus("loading")
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setStatus("success")
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <FileText className="w-10 h-10" />
        </div>
        <h3 className="text-3xl font-bold mb-3">Request Submitted!</h3>
        <p className="text-lg text-muted-foreground max-w-md mx-auto">
          We've received your quote request and will respond within 1 business day.
        </p>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center flex-1">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  s <= step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}
              >
                {s}
              </div>
              {s < 3 && <div className={`flex-1 h-1 mx-2 ${s < step ? "bg-primary" : "bg-muted"}`} />}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-sm">
          <span className={step >= 1 ? "text-foreground font-medium" : "text-muted-foreground"}>Contact Info</span>
          <span className={step >= 2 ? "text-foreground font-medium" : "text-muted-foreground"}>Project Details</span>
          <span className={step >= 3 ? "text-foreground font-medium" : "text-muted-foreground"}>Requirements</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 1 && (
          <>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input id="fullName" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" type="tel" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input id="company" />
              </div>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h3 className="text-xl font-bold mb-4">Project Details</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="projectType">Project Type *</Label>
                <select id="projectType" required className="w-full px-3 py-2 border rounded-md bg-background">
                  <option value="">Select project type</option>
                  <option value="new">New Project</option>
                  <option value="upgrade">System Upgrade</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="consulting">Consulting</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="timeline">Desired Timeline *</Label>
                <select id="timeline" required className="w-full px-3 py-2 border rounded-md bg-background">
                  <option value="">Select timeline</option>
                  <option value="urgent">Urgent (1-2 weeks)</option>
                  <option value="short">Short-term (1-3 months)</option>
                  <option value="medium">Medium-term (3-6 months)</option>
                  <option value="long">Long-term (6+ months)</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="budget2">Budget Range *</Label>
                <select id="budget2" required className="w-full px-3 py-2 border rounded-md bg-background">
                  <option value="">Select budget</option>
                  <option value="small">$5,000 - $15,000</option>
                  <option value="medium">$15,000 - $50,000</option>
                  <option value="large">$50,000 - $100,000</option>
                  <option value="enterprise">$100,000+</option>
                </select>
              </div>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h3 className="text-xl font-bold mb-4">Project Requirements</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="description">Project Description *</Label>
                <Textarea id="description" rows={6} placeholder="Describe your project in detail..." required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="goals">Key Goals & Objectives</Label>
                <Textarea id="goals" rows={4} placeholder="What are you hoping to achieve?" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="challenges">Current Challenges</Label>
                <Textarea id="challenges" rows={4} placeholder="What problems are you trying to solve?" />
              </div>
            </div>
          </>
        )}

        <div className="flex gap-4">
          {step > 1 && (
            <Button type="button" variant="outline" onClick={() => setStep(step - 1)} className="flex-1">
              Back
            </Button>
          )}
          <Button type="submit" disabled={status === "loading"} className="flex-1">
            {status === "loading" ? "Submitting..." : step === 3 ? "Submit Request" : "Continue"}
          </Button>
        </div>
      </form>
    </div>
  )
}
