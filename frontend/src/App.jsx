import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Products from './pages/Products.jsx'
import Services from './pages/Services.jsx'
import ContactUs from './pages/ContactUs.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<AboutUs />} />
      <Route path='/product' element={<Products />} />
      <Route path='/service' element={<Services />} />
      <Route path='/contact' element={<ContactUs />} />
      <Route path='*' element={<Navigate to='/' />} />
    </Routes>
    <Footer />
    <Toaster />
    </>
  )
}

export default App