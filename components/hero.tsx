"use client"

import { useLanguage } from "@/lib/language-context"
import { getTranslation } from "@/lib/translations"

export function Hero() {
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key as any)

  return (
    <section
      id="home"
      className="relative h-screen bg-gradient-to-b from-primary/20 to-background pt-16 flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-700/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-8">
        <h1 className="text-6xl md:text-7xl font-serif font-bold text-foreground leading-tight text-balance whitespace-pre-line">
          {t("welcomeTitle")}
        </h1>

        <p className="text-lg md:text-xl text-foreground/80 font-light max-w-2xl mx-auto leading-relaxed text-balance">
          {t("welcomeDesc")}
        </p>

        <div className="flex gap-4 justify-center">
          <a
            href="#reservation"
            className="px-8 py-3 bg-accent text-accent-foreground font-serif font-semibold hover:opacity-90 transition"
          >
            {t("contact")}
          </a>
          <a
            href="#menu"
            className="px-8 py-3 border-2 border-accent text-accent font-serif font-semibold hover:bg-accent/10 transition"
          >
            EXPLORE MENU
          </a>
        </div>
      </div>
    </section>
  )
}
