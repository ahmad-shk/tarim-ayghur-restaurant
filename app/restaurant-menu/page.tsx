"use client"

import { Navigation } from "@/components/navigation";
import { Reservation } from "@/components/reservation";
import { Hero } from "@/components/restaurant-menu/hero";
import MenuGroup from "@/components/restaurant-menu/menu-group";
import MenuNavigation from "@/components/restaurant-menu/menu-navigation";
import { Testimonials } from "@/components/testimonials";
import { menuData } from "@/lib/translations";
import { useState } from "react";

import { Map } from "@/components/map"
import { Footer } from "@/components/footer"

type MenuCategory = "breakfast" | "lunch" | "dinner" | "desserts"

export default function ResturantMenu() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("breakfast")

  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <div className="bg-primary py-20 primary-text-color">
        <div className="max-w-[1300px] mx-auto">
          <h2 className="aboreto-text dark:text-secondary 2xl:text-[60px] xl:text-[50px] text-[28px] 2xl:mb-[45px] mb-[5px] text-center">Restaurant Menu</h2>
          <MenuNavigation activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
          {/* <MenuGroup category={activeCategory} items={menuData[activeCategory]} /> */}


        </div>
      </div>
      <Testimonials />
      <Footer />
    </main>
  )
}
