import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Blogs from './blogs/Blogs'
import About from './pages/About'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsAndConditions from './pages/TermsAndConditions'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/aboutus' element={<About/>} />
        <Route path='/contactus' element={<Contact/>} />
        <Route path='/privacypolicy' element={<PrivacyPolicy/>} />
        <Route path='/termsandconditions' element={<TermsAndConditions/>} />
        <Route path='/blogs' element={<Blogs/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App