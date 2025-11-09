"use client"

import { useState } from "react"
import Link from "next/link"
import { LanguageSwitcher } from "./language-switcher"
import { useLanguage } from "@/lib/language-context"
import { getTranslation } from "@/lib/translations"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key as any)

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-serif font-bold text-accent">
            TARIM
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center text-sm font-light tracking-wider">
            <Link href="#home" className="hover:text-accent transition">
              {t("home")}
            </Link>
            <Link href="#menu" className="hover:text-accent transition">
              {t("menu")}
            </Link>
            <Link href="#gallery" className="hover:text-accent transition">
              {t("gallery")}
            </Link>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3 text-sm font-light tracking-wider">
            <Link href="#home" className="block hover:text-accent transition">
              {t("home")}
            </Link>
            <Link href="#restaurant" className="block hover:text-accent transition">
              {t("restaurant")}
            </Link>
            <Link href="#menu" className="block hover:text-accent transition">
              {t("menu")}
            </Link>
            <Link href="#gallery" className="block hover:text-accent transition">
              {t("gallery")}
            </Link>
            <div className="mt-4">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
