"use client"

import { useLanguage } from "@/lib/language-context"
import { getTranslation } from "@/lib/translations"

export function Hero() {
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key as any)

  return (
    <section
      id="home"
      className="relative md:flex items-center justify-center overflow-hidden aspect-16/6 !bg-cover relative pt-[94px] lg:px-12"
      style={{background: 'url(/image/resturant/banner.png) center center no-repeat'}}
    >
      <div className="bg-[#66282C]/60 absolute inset-0 w-full h-full z-1"></div>
      <div style={{zIndex: '99'}} className="absolute lg:block hidden right-0 top-0 h-full">
        <img className="h-full" src={'/image/banner-layer.png'} />
      </div>
      <div style={{zIndex: '99'}} className="absolute lg:block hidden left-0 top-0 h-full transform rotate-180">
        <img className="h-full" src={'/image/banner-layer.png'} />
      </div>
      <div className="relative z-2">
        <h1 className="aboreto-text 2xl:text-[60px] xl:text-[50px] text-[38px] text-secondary leading-[1.1] text-balance whitespace-pre-line">
          Restaurant Menu
        </h1>
      </div>
    </section>
  )
}
