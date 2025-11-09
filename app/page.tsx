import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { WhereUghurMeetsCuisine } from "@/components/where-culture-meets-cuisine"
import { MenuShowcase } from "@/components/menu-showcase"
import { OurPromise } from "@/components/our-promise"
import { Ambience } from "@/components/ambience"
import { Testimonials } from "@/components/testimonials"
import { Reservation } from "@/components/reservation"
import { Map } from "@/components/map"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <WhereUghurMeetsCuisine />
      <MenuShowcase />
      <OurPromise />
      <Ambience />
      <Testimonials />
      <Reservation />
      <Map />
      <Footer />
    </main>
  )
}
