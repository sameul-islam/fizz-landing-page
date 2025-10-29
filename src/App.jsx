import React from 'react'
import Hero from './components/Hero'
import ScrollToTopButton from './components/ScrollToTopButton'
import Products from './components/Products/Products'
import Banner from './components/Banner/Banner'
import BannerText from './components/Banner/BannerText'
import Blogs from './components/Blog/Blogs'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer'
import OurStory from './components/OurStory/OurStory'

const App = () => {
  return (
    <main className='overflow-hidden font-Roboto'>
      <Hero/>
      <Products/>
      <Banner/>
      <BannerText/>
      <Blogs/>
      <OurStory/>
      <FAQ/>
      <Footer/>


      <ScrollToTopButton/>
    </main>
  )
}

export default App
