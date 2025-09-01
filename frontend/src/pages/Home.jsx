import React from 'react'
import ContactUs from './ContactUs.jsx'
import Client from './Client.jsx'
import Products from './Products.jsx'
import Services from './Services.jsx'
import AboutUs from './AboutUs.jsx'
import home1 from '../assets/home1.png'
import { IoArrowUpOutline } from 'react-icons/io5'

const Home = () => {
  return (
    <div >
    {/* home */}
    <div className='flex flex-row gap-8 xl:gap-20 text-white items-center py-15 md:py-30 md:px-15 px-5' 
     style={{
      backgroundImage:  `linear-gradient(to right, green, transparent),url(${home1})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '100vh',
      width: '100%',
    }}
    >
      <div className='flex flex-col gap-7 items-center'>
        <div className='border border-white rounded-4xl p-3'>
        <div className='w-2 h-2 bg-white rounded-4xl'></div></div>
        <div className='w-2 h-2 bg-gray-400 rounded-4xl'></div>
        <div className='w-2 h-2 bg-gray-400 rounded-4xl'></div>
      </div>
      <div className='flex flex-col gap-20'>
        <h2 className='xl:text-6xl text-xl md:text-5xl'>Full-Spectrum Engineering <br /> Services to Power <br /> Embedded Innovation</h2>
        <p className='text-sm'>We bring together electronics, firmware, and system-level design to create scalable <br /> and future-ready embedded platforms.</p>
        <div className='bg-yellow-300 text-green-800 px-3 py-2 rounded-4xl flex flex-row gap-4 items-center w-40'>Learn More <span className='bg-green-800 text-white px-2 py-2 rounded-4xl rotate-45'><IoArrowUpOutline  size={20} /></span></div>
      </div>
    </div>

    {/* about */}
    <AboutUs />

    {/* product */}
    <Products />

    {/* service */}
    <Services />    

    {/* client */}
    <Client />

    {/* contact */}
    <ContactUs />
    </div>
  )
}

export default Home