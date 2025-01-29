import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Header from '../Components/Header/Header'
import Home from '../PagesComponents/Home'
import About from '../PagesComponents/About'
import Blog from '../PagesComponents/Blog'
import Contact from '../PagesComponents/Contact'
import Login from '../PagesComponents/Login'
import Footer from '../Components/Footer/Footer'
import Register from '../PagesComponents/Register'
import BlogDetails from '../PagesComponents/BlogDetails'
import PrivacyPolicys from '../PagesComponents/PrivacyPolicys'
import TermsConditions from '../PagesComponents/TermsConditions'
function UiComponent() {
    return (
           <React.Fragment>
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/About' element={<About />} />
                    <Route path='/Blog' element={<Blog />} />
                    <Route path='/BlogDetails' element={<BlogDetails/>} />
                    <Route path='/Contact' element={<Contact />} />
                    <Route path='/Login' element={<Login />} />
                    <Route path='/Register' element={<Register/>} />
                    <Route path='/PrivacyPolicys' element={<PrivacyPolicys/>} />
                    <Route path='/TermsConditions' element={<TermsConditions/>} />
                </Routes>
            </BrowserRouter>
            <Footer/>
           </React.Fragment>
    )
}

export default UiComponent
