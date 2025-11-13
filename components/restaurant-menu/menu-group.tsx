"use client"

import { useState } from "react"
import MenuItem from "./menu-item"
import Image from "next/image"
import ImageModal from "./images-gallery"
import { Dialog, DialogClose, DialogContent } from "../ui/dialog"


import menuData from "./menu-data.json"

interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image: string
  isSpicy: boolean
}

interface MenuSection {
  id: string
  items: MenuItem[]
}

interface MenuCategory {
  id: string
  name: string
  categoryImage: string
  sections: MenuSection[]
}



export default function MenuGroup() {
  const [showMore, setShowMore] = useState(false)
  // const displayItems = showMore ? items : items.slice(0, 4)

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
    <main>
      {(menuData.categories as MenuCategory[]).map((category) => (
        <section key={category.id} className="py-5 md:py-10 px-4" id={category.id}>
          <h2 className="aboreto-text text-secondary text-center text-[35px] mb-[50px]">{category.name}</h2>

          <div className="space-y-10">
            {category.sections.map((section, sectionIndex) => (
              <div
                key={section.id}
                className={`item-row flex flex-col ${
                  sectionIndex % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-6 lg:gap-12`}
              >
                <div className="image rounded-md overflow-hidden" onClick={() => setIsModalOpen(true)}>
                  <Image
                    src={category.categoryImage || "/placeholder.svg"}
                    width="400"
                    height="431"
                    alt={`${category.name} category`}
                  />
                </div>
                <ul className="space-y-8 flex-1 w-full">
                  {section.items.map((item) => (
                    <li key={item.id} className="md:flex items-center justify-between gap-5">
                      <div className="item flex items-center gap-3">
                        <div className="image rounded-sm min-w-[120px] w-[120px]">
                          <Image src={item.image || "/placeholder.svg"} width="120" height="82" alt={item.name} />
                        </div>
                        <div className="info text-black dark:text-color-secondary">
                          <h5 className="aboreto-text text-xl lg:text-3xl flex items-center gap-2">
                            {item.name}
                            {item.isSpicy && (
                              <span className="text-color-primary dark:text-color-primary">
                                <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M13.5224 0.35261C13.739 0.569206 13.8606 0.862934 13.8606 1.1692C13.8606 1.47547 13.739 1.7692 13.5224 1.98579L8.56399 6.94424H11.0727L17.6643 0.35261C17.7708 0.242295 17.8983 0.154304 18.0392 0.0937714C18.1801 0.0332386 18.3317 0.00137628 18.485 4.36093e-05C18.6384 -0.00128906 18.7905 0.0279346 18.9324 0.0860094C19.0744 0.144084 19.2033 0.229847 19.3118 0.338294C19.4202 0.446741 19.506 0.575699 19.5641 0.717646C19.6221 0.859592 19.6514 1.01168 19.65 1.16504C19.6487 1.31841 19.6168 1.46997 19.5563 1.61088C19.4958 1.7518 19.4078 1.87925 19.2975 1.98579L14.339 6.94424H19.5643C19.8457 6.94432 20.1175 7.04717 20.3285 7.23348C20.5395 7.41979 20.6751 7.67673 20.71 7.95603C20.991 10.1848 20.5423 12.4447 19.4313 14.3972C18.3202 16.3496 16.6066 17.8896 14.5469 18.7865L14.9812 20.5248C15.0237 20.695 15.0268 20.8727 14.9903 21.0443C14.9539 21.2159 14.8788 21.377 14.7708 21.5153C14.6628 21.6535 14.5248 21.7654 14.3671 21.8423C14.2094 21.9193 14.0363 21.9593 13.8609 21.9593H6.93081C6.75536 21.9593 6.58224 21.9193 6.42457 21.8423C6.2669 21.7654 6.12883 21.6535 6.02084 21.5153C5.91285 21.377 5.83778 21.2159 5.80133 21.0443C5.76487 20.8727 5.76799 20.695 5.81045 20.5248L6.24473 18.7865C4.1851 17.8896 2.47145 16.3496 1.3604 14.3972C0.249348 12.4447 -0.19931 10.1848 0.0816121 7.95603C0.116514 7.67673 0.252201 7.41979 0.463181 7.23348C0.674161 7.04717 0.945912 6.94432 1.22738 6.94424H5.29763L11.8893 0.35261C12.1058 0.13608 12.3996 0.0144397 12.7058 0.0144397C13.0121 0.0144397 13.3058 0.13608 13.5224 0.35261ZM2.31078 9.25425C2.31013 10.9738 2.85774 12.6488 3.87405 14.0358C4.89036 15.4229 6.32243 16.4498 7.96223 16.9674C8.24291 17.0557 8.47929 17.2479 8.62311 17.5046C8.76693 17.7613 8.80733 18.0633 8.73608 18.3488L8.40922 19.6493H12.3801L12.0556 18.3488C11.9843 18.0633 12.0247 17.7613 12.1685 17.5046C12.3124 17.2479 12.5487 17.0557 12.8294 16.9674C14.4692 16.4498 15.9013 15.4229 16.9176 14.0358C17.9339 12.6488 18.4815 10.9738 18.4809 9.25425H2.31078Z" fill="currentColor"/>
                                </svg>
                              </span>
                            )}
                          </h5>
                          <p className="text-xs dark:text-white">{item.description}</p>
                        </div>
                      </div>
                      <span className="aboreto-text text-xl md:text-3xl text-black dark:text-color-secondary block text-end">
                        ${item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="flex justify-center">
              <button className="aboreto-text px-8 py-3 rounded-full border-2 border-color-primary text-white transition-all duration-300 tracking-wide bg-color-primary dark:bg-color-secondary dark:text-color-primary hover:opacity-70">
                See more
              </button>
            </div>
          </div>
        </section>
      ))}
    </main>

    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen} >
      <DialogContent className="modal-content lg:max-w-[1240px] bg-white dark:bg-color-primary px-6 lg:px-[92px] block max-h-[calc(100vh-10px)] overflow-auto">
        <DialogClose className="close-button" onClick={() => setIsModalOpen(false)} />
        <div className="w-full max-w-full mx-auto">
          <div className="flex items-center justify-between mb-11">
            <div>
              <h3 className="aboreto-text text-2xl lg:text-4xl text-color-primary dark:text-color-secondary flex items-center gap-2.5">
                Patatas Bravas
                <svg width="47" height="49" viewBox="0 0 47 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M27.553 10.1427C27.8393 10.429 28.0001 10.8173 28.0001 11.2222C28.0001 11.627 27.8393 12.0153 27.553 12.3017L20.9981 18.8566H24.3145L33.0284 10.1427C33.1693 9.99682 33.3377 9.8805 33.524 9.80048C33.7103 9.72045 33.9107 9.67833 34.1134 9.67657C34.3162 9.67481 34.5172 9.71344 34.7049 9.79022C34.8925 9.86699 35.063 9.98036 35.2064 10.1237C35.3497 10.2671 35.4631 10.4376 35.5399 10.6252C35.6166 10.8129 35.6553 11.0139 35.6535 11.2167C35.6518 11.4194 35.6096 11.6198 35.5296 11.806C35.4496 11.9923 35.3333 12.1608 35.1874 12.3017L28.6325 18.8566H35.5401C35.9122 18.8567 36.2715 18.9927 36.5504 19.239C36.8293 19.4853 37.0087 19.8249 37.0548 20.1941C37.4262 23.1406 36.8331 26.128 35.3643 28.7091C33.8955 31.2902 31.6301 33.326 28.9074 34.5117L29.4815 36.8097C29.5376 37.0347 29.5417 37.2696 29.4935 37.4965C29.4453 37.7233 29.3461 37.9362 29.2033 38.119C29.0606 38.3018 28.878 38.4497 28.6696 38.5514C28.4612 38.6531 28.2323 38.706 28.0004 38.7061H18.8391C18.6071 38.706 18.3783 38.6531 18.1698 38.5514C17.9614 38.4497 17.7789 38.3018 17.6361 38.119C17.4934 37.9362 17.3941 37.7233 17.3459 37.4965C17.2977 37.2696 17.3019 37.0347 17.358 36.8097L17.9321 34.5117C15.2093 33.326 12.9439 31.2902 11.4752 28.7091C10.0064 26.128 9.41328 23.1406 9.78465 20.1941C9.83079 19.8249 10.0102 19.4853 10.2891 19.239C10.568 18.9927 10.9272 18.8567 11.2993 18.8566H16.6801L25.394 10.1427C25.6803 9.85641 26.0686 9.6956 26.4735 9.6956C26.8784 9.6956 27.2667 9.85641 27.553 10.1427ZM12.7315 21.9104C12.7307 24.1835 13.4546 26.3978 14.7981 28.2315C16.1417 30.0651 18.0348 31.4227 20.2026 32.1069C20.5736 32.2237 20.8861 32.4777 21.0762 32.8171C21.2664 33.1565 21.3198 33.5556 21.2256 33.933L20.7935 35.6523H26.0429L25.6139 33.933C25.5197 33.5556 25.5731 33.1565 25.7632 32.8171C25.9533 32.4777 26.2658 32.2237 26.6369 32.1069C28.8046 31.4227 30.6978 30.0651 32.0413 28.2315C33.3849 26.3978 34.1088 24.1835 34.1079 21.9104H12.7315Z" fill="currentColor"/>
                </svg>
              </h3>
              <p className="text-sm lg:text-base font-normal text-black dark:text-white">Crispy potatoes topped with spicy tomato sauce and aioli for a perfect snack.</p>
            </div>
            <span className="aboreto-text text-xl md:text-3xl lg:text-[55px] text-color-primary dark:text-color-secondary">$10</span>
          </div>
          <ImageModal/>
        </div>
      </DialogContent>
    </Dialog>
    </>
  )
}
