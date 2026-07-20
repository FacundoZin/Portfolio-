"use client"

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react"
import { getDictionary, type Locale, type Dictionary } from "./i18n"

const STORAGE_KEY = "portfolio-locale"

interface LanguageContextType {
  locale: Locale
  dict: Dictionary
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("es")

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === "es" || saved === "en") {
      setLocale(saved)
    }
  }, [])

  const toggleLanguage = useCallback(() => {
    setLocale((prev) => {
      const next = prev === "es" ? "en" : "es"
      localStorage.setItem(STORAGE_KEY, next)
      return next
    })
  }, [])

  const dict = getDictionary(locale)

  return (
    <LanguageContext.Provider value={{ locale, dict, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
