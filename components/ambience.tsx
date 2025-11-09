"use client"

import { useLanguage } from "@/lib/language-context"
import { getTranslation } from "@/lib/translations"

export function Ambience() {
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key as any)

  return (
    <section className="py-20 bg-primary/5">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4">{t("ambienceTitle")}</h2>
          <p className="text-xl text-foreground/60 font-light">{t("ambienceSubtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Elegant Design", desc: "Modern luxury meets traditional aesthetics" },
            { title: "Intimate Spaces", desc: "Perfect for every occasion and celebration" },
            { title: "Cultural Heritage", desc: "Surrounded by authentic Silk Road artistry" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-background border border-border rounded-lg p-8 text-center space-y-4 hover:shadow-lg transition"
            >
              <img
                src={`/.jpg?height=200&width=200&query=${item.title}`}
                alt={item.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-2xl font-serif font-bold text-accent">{item.title}</h3>
              <p className="text-foreground/70 font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
