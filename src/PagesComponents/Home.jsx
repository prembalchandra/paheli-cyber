import React from 'react'
import HomeHeroBanner from '../Components/HeroBanner/HomeHeroBanner'
import AboutUs from '../Components/AboutUs/AboutUs'
import Projects from '../Components/Projects/Projects'
import Testimonial from '../Components/Testimonial/Testimonial'
import Counter from '../Components/Counter/Counter'
import Faq from '../Components/Faq/Faq'
import Choose from '../Components/Choose/Choose'
import Blog from '../Components/Blog/Blog'
function Home() {
  return (
    <div>
    <HomeHeroBanner/>
    <AboutUs/>
    <Choose/>
    <Projects/>
    <Faq/>
    <Testimonial/>
    <Counter/>
    <Blog/>
    </div>
  )
}

export default Home
