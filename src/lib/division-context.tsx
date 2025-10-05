"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import type { Division } from "./oakford-config"

interface DivisionContextType {
  currentDivision: Division
  setDivision: (division: Division) => void
}

const DivisionContext = createContext<DivisionContextType | undefined>(undefined)

export function DivisionProvider({
  children,
  initialDivision = "technology",
}: {
  children: ReactNode
  initialDivision?: Division
}) {
  const [currentDivision, setCurrentDivision] = useState<Division>(initialDivision)

  const setDivision = (division: Division) => {
    setCurrentDivision(division)
    // Apply division class to body for theming
    document.body.className = document.body.className.replace(/division-\w+/g, "")
    document.body.classList.add(`division-${division}`)
  }

  return <DivisionContext.Provider value={{ currentDivision, setDivision }}>{children}</DivisionContext.Provider>
}

export function useDivision() {
  const context = useContext(DivisionContext)
  if (!context) {
    throw new Error("useDivision must be used within DivisionProvider")
  }
  return context
}
