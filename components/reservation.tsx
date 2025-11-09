"use client"

import type React from "react"
import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { getTranslation } from "@/lib/translations"

export function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    guests: "2",
    date: "",
  })

  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key as any)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Reservation submitted:", formData)
    alert("Thank you for your reservation request!")
  }

  return (
    <section id="reservation" className="py-20 bg-primary/5">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground">{t("reservationTitle")}</h2>
            <p className="text-lg text-foreground/70 font-light">{t("reservationSubtitle")}</p>
            <p className="text-foreground/70 font-light leading-relaxed">{t("reservationDesc")}</p>

            <div className="space-y-3 pt-4">
              <div>
                <p className="text-sm font-light text-foreground/60 mb-1">{t("phoneLabel")}</p>
                <p className="text-2xl font-serif text-accent">{t("phoneValue")}</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-background border border-border rounded-lg p-8 space-y-6">
            <div>
              <label className="block text-sm font-light text-foreground/70 mb-2">{t("nameLabel")}</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder={t("nameLabel")}
              />
            </div>

            <div>
              <label className="block text-sm font-light text-foreground/70 mb-2">{t("phoneLabel")}</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="+43 ..."
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-light text-foreground/70 mb-2">{t("guestLabel")}</label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option>1 Person</option>
                  <option>2 Person</option>
                  <option>3 Person</option>
                  <option>4 Person</option>
                  <option>5+ Person</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-light text-foreground/70 mb-2">{t("dateLabel")}</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 bg-accent text-accent-foreground font-serif font-semibold hover:opacity-90 transition"
            >
              {t("bookNow")}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
