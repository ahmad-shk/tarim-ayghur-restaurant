"use client"

import { useLanguage } from "@/lib/language-context"
import { getTranslation } from "@/lib/translations"

export function OurPromise() {
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key as any)

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 order-2 md:order-1">
            <img
              src="/authentic-uyghur-cuisine-traditional-dishes.jpg"
              alt="Authentic Uyghur cuisine"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground">{t("ourPromiseTitle")}</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-serif font-bold text-accent mb-2">Authenticity.</h3>
                <p className="text-foreground/70 font-light">Every recipe passed down through generations</p>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-accent mb-2">Quality.</h3>
                <p className="text-foreground/70 font-light">Halal-certified ingredients sourced with care</p>
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-accent mb-2">Excellence.</h3>
                <p className="text-foreground/70 font-light">Impeccable presentation and refined service</p>
              </div>
            </div>

            <p className="text-foreground/70 font-light leading-relaxed">{t("ourPromiseDesc")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
