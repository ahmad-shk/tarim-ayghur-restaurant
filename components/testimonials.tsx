"use client"

import { useLanguage } from "@/lib/language-context"
import { getTranslation } from "@/lib/translations"

export function Testimonials() {
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key as any)

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4">{t("testimonialsTitle")}</h2>
          <p className="text-lg text-foreground/60 font-light">{t("customerName")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              name: t("customerName"),
              text: t("testimonialReview"),
            },
            {
              name: "Sarah Mitchell",
              text: "The ambiance, the service, and most importantly, the food—everything was absolutely perfect. A true gem in the city.",
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-primary/5 border border-border rounded-lg p-8 space-y-4">
              <p className="text-lg text-foreground/80 font-light leading-relaxed italic">"{item.text}"</p>
              <p className="text-accent font-serif font-bold">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
