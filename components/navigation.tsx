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
    <>
    <nav className="absolute top-0 w-full backdrop-blur lg:z-50 z-10 bg-[#F5E3BF]/70 py-[10px]">
      <div className="max-w-[1300px] mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-serif font-bold text-accent md:min-w-[200px]">
            <img src={'/logo/logo.svg'} />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-5 items-center tracking-wider">
            <Link href="#home" className="text-primary font-semibold hover:underline transition">
              {t("home")}
            </Link>
            <Link href="#menu" className="text-primary font-semibold hover:underline transition">
              {t("menu")}
            </Link>
            <Link href="#gallery" className="text-primary font-semibold hover:underline transition">
              {t("gallery")}
            </Link>
          </div>
          <div className="flex items-center gap-2 md:min-w-[200px]">
            <a
              href="#reservation"
              className="btn btn-primary hover:opacity-90 transition"
            >
              {t("contact")}
            </a>

            <LanguageSwitcher />

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </nav>
    {/* Mobile Dropdown */}
    {isOpen && (
      <div className="md:hidden gap-8 pb-4 text-sm font-light tracking-wider fixed bg-primary primary-text-color w-full h-full left-0 top-0 z-10 flex items-center justify-center flex-col z-50">
        <span className="absolute right-5 top-7" onClick={() => setIsOpen(!isOpen)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10.03 8.97a.75.75 0 0 0-1.06 1.06L10.94 12l-1.97 1.97a.75.75 0 1 0 1.06 1.06L12 13.06l1.97 1.97a.75.75 0 0 0 1.06-1.06L13.06 12l1.97-1.97a.75.75 0 1 0-1.06-1.06L12 10.94z"/><path fill="currentColor" fill-rule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12S17.937 1.25 12 1.25M2.75 12a9.25 9.25 0 1 1 18.5 0a9.25 9.25 0 0 1-18.5 0" clip-rule="evenodd"/></svg></span>
        <Link href="#home" className="block hover:text-accent transition">
          {t("home")}
        </Link>
        {/* <Link href="#restaurant" className="block hover:text-accent transition">
          {t("restaurant")}
        </Link> */}
        <Link href="#menu" className="block hover:text-accent transition">
          {t("menu")}
        </Link>
        <Link href="#gallery" className="block hover:text-accent transition">
          {t("gallery")}
        </Link>
      </div>
    )}
    </>
  )
}
