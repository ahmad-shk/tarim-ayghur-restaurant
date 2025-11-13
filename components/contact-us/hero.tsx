"use client"

import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function Hero() {
  
  const { language } = useLanguage()
  const t = translations[language] // ✅ correct reference

  return (
    <section
      id="home"
      className="relative flex justify-center md:items-start overflow-hidden md:aspect-16/6 aspect-16/9 !bg-cover relative mt-[92px] lg:px-12"
      style={{background: 'url(/image/contact-us.png) center center no-repeat'}}
    >
      <div style={{zIndex: '99'}} className="absolute lg:block hidden right-0 top-0 h-full">
        <img className="h-full" src={'/image/banner-layer.png'} />
      </div>
      <div style={{zIndex: '99'}} className="absolute lg:block hidden left-0 top-0 h-full transform rotate-180">
        <img className="h-full" src={'/image/banner-layer.png'} />
      </div>
      <div className="relative z-2 md:py-30 pt-8 text-center">
        <h1 className="aboreto-text 2xl:text-[60px] xl:text-[50px] text-[38px] text-secondary leading-[1.1] text-balance whitespace-pre-line">
          Contact Us
        </h1>
        <h3 className="text-white lg:text-[34px] text-[24px] mt-2">Essence of Traditional Flavors</h3>
      </div>
    </section>
  )
}
