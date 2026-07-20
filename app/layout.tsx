import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "../lib/language-context"
import HtmlLang from "../components/HtmlLang"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

export const metadata: Metadata = {
  title: "Facundo Zin - Software Engineer",
  description: "Software Engineer focused on scalable systems, LLM integration and enterprise applications.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${geist.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <LanguageProvider>
          <HtmlLang />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
