"use client"

import { useLanguage } from "@/lib/language-context"
import { getTranslation } from "@/lib/translations"

export function OurPromise() {
  const { language } = useLanguage()
  const t = (key: string) => getTranslation(language, key as any)

  return (
    <section className="md:pt-20 md:pb-24 py-12 bg-background" style={{background: 'url(/image/our-promise.jpg) center center no-repeat', backgroundSize: 'cover'}}>
      <div className="max-w-[1300px] mx-auto px-4">
        
        <div className="flex justify-end items-end">
          <div className="md:w-6/12 md:text-left text-center">
            <h2 className="aboreto-text text-secondary 2xl:text-[60px] xl:text-[50px] text-[28px] 2xl:mb-[45px] mb-[30px]">{t("ourPromiseTitle")}</h2>

            <div className="space-y-4">
              <div>
                <h3 className="2xl:text-[35px] xl:text-[30px] text-[24px] text-secondary mb-[40px]">{t("ourPromiseSubtitle")}</h3>
                <p className="text-white 2xl:text-[20px]">{t("ourPromiseDesc")}</p>
              </div>
            </div>
            <div className="mt-[35px]">
              <a href="#" className="btn bg-[#F5E3BF]">{t("ourPromiseCta")}</a>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}
