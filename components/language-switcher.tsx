"use client"

import { useLanguage } from "@/lib/language-context"
import type { Language } from "@/lib/translations"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const languages: { code: Language; label: string }[] = [
    { code: "de", label: "Deutsch" },
    { code: "en", label: "English" },
    { code: "zh", label: "中文" },
  ]

  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
            language === lang.code
              ? "bg-accent text-accent-foreground"
              : "bg-muted text-muted-foreground hover:bg-secondary"
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  )
}
