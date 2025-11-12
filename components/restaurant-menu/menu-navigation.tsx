"use client"

type MenuCategory = "breakfast" | "lunch" | "dinner" | "desserts"

const categories: { id: MenuCategory; label: string }[] = [
  { id: "breakfast", label: "BREAKFAST" },
  { id: "lunch", label: "LUNCH" },
  { id: "dinner", label: "DINNER" },
  { id: "desserts", label: "DESSERTS" },
]

interface MenuNavigationProps {
  activeCategory: MenuCategory
  onCategoryChange: (category: MenuCategory) => void
}

export default function MenuNavigation({ activeCategory, onCategoryChange }: MenuNavigationProps) {
  return (
    <nav className="py-4">
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`px-6 py-2 rounded-full text-sm cursor-pointer font-medium tracking-wide transition-all duration-300 ${
              activeCategory === category.id
                ? "bg-[#F5E3BF] text-primary"
                : "bg-white/20"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </nav>
  )
}
