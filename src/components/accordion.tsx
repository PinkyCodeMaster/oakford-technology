"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface AccordionItem {
  id: string
  title: string
  content: React.ReactNode
}

interface AccordionProps {
  items: AccordionItem[]
  allowMultiple?: boolean
}

export function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
    } else {
      setOpenItems((prev) => (prev.includes(id) ? [] : [id]))
    }
  }

  return (
    <div className="divide-y border rounded-lg">
      {items.map((item) => {
        const isOpen = openItems.includes(item.id)

        return (
          <div key={item.id}>
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
            >
              <span className="font-medium">{item.title}</span>
              <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>

            {isOpen && <div className="px-6 py-4 bg-muted/30">{item.content}</div>}
          </div>
        )
      })}
    </div>
  )
}
