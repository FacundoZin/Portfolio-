"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { getDictionary, type Locale, type Dictionary } from "./i18n"

interface LanguageContextType {
  locale: Locale
  dict: Dictionary
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("es")

  const toggleLanguage = () => {
    setLocale((prev) => (prev === "es" ? "en" : "es"))
  }

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
