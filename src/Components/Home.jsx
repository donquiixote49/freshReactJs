import React from 'react'
import FeaturedProduct from './FeaturedProduct'
import CategoriesSlider from './CategoriesSlider'
import MainSlider from './MainSlider'

export default function Home() {
  return (
    <div>
      <MainSlider></MainSlider>
      <CategoriesSlider></CategoriesSlider>
      <FeaturedProduct></FeaturedProduct>
    </div>
  )
}

