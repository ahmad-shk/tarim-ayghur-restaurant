"use client"

import { useLanguage } from "@/lib/language-context"
import { getTranslation } from "@/lib/translations"

export function WhereUghurMeetsCuisine() {
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key as any)

  return (
    <section id="restaurant" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground whitespace-pre-line">
              {t("cultureMeetsTitle")}
            </h2>

            <p className="text-lg text-foreground/70 font-light leading-relaxed">{t("cultureMeetsDesc")}</p>

            <p className="text-lg text-foreground/70 font-light leading-relaxed">{t("chefsBlendDesc")}</p>

            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-accent text-accent-foreground font-serif font-semibold hover:opacity-90 transition"
            >
              {t("contact")}
            </a>
          </div>

          <div className="relative h-96">
            <img
              src="/luxury-restaurant-warm-lighting.png"
              alt="Tarim restaurant interior"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
