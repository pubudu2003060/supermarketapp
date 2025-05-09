import React from 'react'
import HeroSection from '../components/home/HeroSection'
import DiscountProducts from '../components/home/DiscountProducts'
import MiddleBar from '../components/home/MiddleBar'
import BeatSelling from '../components/home/BestSelling'
import ShopByBrand from '../components/home/ShopByBrand'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <DiscountProducts></DiscountProducts>
      <MiddleBar></MiddleBar>
      <BeatSelling></BeatSelling>
      <ShopByBrand></ShopByBrand>
    </>
  )
}

export default Home
