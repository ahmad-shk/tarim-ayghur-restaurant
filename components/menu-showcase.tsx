"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { getTranslation } from "@/lib/translations"

export function MenuShowcase() {
  const [selectedView, setSelectedView] = useState<string | null>(null)
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key as any)

  const menuItems = [
    { name: "Patatas Bravas", price: "$5.00", description: "Crispy potatoes with signature sauce" },
    { name: "Paella de Mariscos", price: "$18.00", description: "Seafood paella with saffron rice" },
    { name: "Chuletón de Buey", price: "$30.00", description: "Premium beef steak" },
    { name: "Cocido Madrileño", price: "$16.00", description: "Traditional Madrid stew" },
  ]

  return (
    <section id="menu" className="py-20 bg-primary/5">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground">{t("sliceOfHeaven")}</h2>
          <p className="text-lg text-foreground/60 font-light">{t("essenceOfFlavors")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item, idx) => (
            <div key={idx} className="bg-background border border-border rounded-lg p-6 hover:shadow-lg transition">
              <div className="mb-4 h-40 bg-gradient-to-br from-accent/20 to-primary/10 rounded-lg flex items-center justify-center">
                <img
                  src={`/.jpg?height=200&width=200&query=${item.name}`}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-serif font-bold text-foreground mb-2">{item.name}</h3>
              <p className="text-sm text-foreground/60 font-light mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-accent font-bold">{item.price}</span>
                <button className="text-accent hover:text-accent/80 transition font-light">{t("viewMenu")}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
