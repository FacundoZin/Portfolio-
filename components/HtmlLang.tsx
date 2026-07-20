"use client"

import { useLanguage } from "../lib/language-context"
import { useEffect } from "react"

export default function HtmlLang() {
  const { locale } = useLanguage()

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  return null
}
