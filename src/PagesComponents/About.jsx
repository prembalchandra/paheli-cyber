import React from 'react'
import HeroBanner from '../Components/HeroBanner/HeroBanner'
import AboutUs from '../Components/AboutUs/AboutUs'
import Projects from '../Components/Projects/Projects'
import Faq from '../Components/Faq/Faq'
import Testimonial from '../Components/Testimonial/Testimonial'
function About() {
  return (
     <React.Fragment>
      <HeroBanner/>
      <AboutUs/>
      <Projects/>
      <Faq/>
      <Testimonial/>
     </React.Fragment>
  )
}

export default About
