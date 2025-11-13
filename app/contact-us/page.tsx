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
     <Reservation />
      <Map />
    
      <Footer />
    </main>
  )
}
