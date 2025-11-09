"use client"

import { useLanguage } from "@/lib/language-context"
import { getTranslation } from "@/lib/translations"

export function Footer() {
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key as any)

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-serif font-bold mb-4">TARIM</h3>
            <p className="text-sm font-light opacity-80">{t("footerAbout")}</p>
          </div>
          <div>
            <h4 className="font-serif font-bold mb-3 text-sm">MENU</h4>
            <ul className="space-y-2 text-sm font-light opacity-80">
              <li>
                <a href="#menu" className="hover:opacity-100 transition">
                  Appetizers
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:opacity-100 transition">
                  Main Courses
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:opacity-100 transition">
                  Desserts
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif font-bold mb-3 text-sm">CONNECT</h4>
            <ul className="space-y-2 text-sm font-light opacity-80">
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif font-bold mb-3 text-sm">HOURS</h4>
            <p className="text-sm font-light opacity-80">Tue - Sun: 5PM - 11PM</p>
            <p className="text-sm font-light opacity-80">Closed Mondays</p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm font-light opacity-70">
            copyright © 2025 TARIM Uyghur Restaurant | {t("allRightsReserved")}
          </p>
        </div>
      </div>
    </footer>
  )
}
