import React from 'react'
import HeroBanner from '../Components/HeroBanner/HeroBanner'
import BlogList from '../Components/Blog/BlogList'
import Testimonial from '../Components/Testimonial/Testimonial'
import Counter from '../Components/Counter/Counter'
import Projects from '../Components/Projects/Projects'
import Faq from '../Components/Faq/Faq'

function Blog() {
  return (
    <React.Fragment>
    <HeroBanner/>
    <BlogList/>
    <Counter/>
    <Projects/>
    <Faq/>
    <Testimonial/>
   </React.Fragment>
  )
}

export default Blog
