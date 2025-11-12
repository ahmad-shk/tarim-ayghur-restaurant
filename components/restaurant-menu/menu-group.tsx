"use client"

import { useState } from "react"
import MenuItem from "./menu-item"


interface MenuItemType {
  id: string
  name: string
  description: string
  price: string
  image: string
  vegetarian?: boolean
}

interface MenuGroupProps {
  category: string
  items: MenuItemType[]
}

export default function MenuGroup({ category, items }: MenuGroupProps) {
  const [showMore, setShowMore] = useState(false)
  const displayItems = showMore ? items : items.slice(0, 4)

  return (
    <section className="py-12 md:py-16">
      <h2 className="aboreto-text text-secondary text-center text-[35px] mb-[50px] mt-5">
        {category}
      </h2>

      <div className="mb-8">
        {displayItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>

      {items.length > 4 && (
        <div className="flex justify-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-8 py-3 rounded-full border-2 border-primarys text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium tracking-wide"
          >
            {showMore ? "SEE LESS" : "SEE MORE"}
          </button>
        </div>
      )}
    </section>
  )
}
