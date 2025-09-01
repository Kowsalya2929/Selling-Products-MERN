import React from 'react'
import serviceLogo from '../assets/services.png'
import productDevelopement from '../assets/productDevelopement.png'
import technicalConsulting from '../assets/technicalConsulting.png'
import engineeringService from '../assets/engineeringService.png'
import service2 from '../assets/service2.png'
import { IoArrowUpOutline } from 'react-icons/io5'

const Services = () => {
  return (
    <>
    <div className='p-5 md:p-12' style={{backgroundColor: "#e7f0e6"}}>
      <div className='flex flex-row justify-center gap-2 items-center text-green-800 font-serif'>
        <img src={serviceLogo} alt="service" className='h-5 w-5' />
        Our Services
      </div>
      <p className='text-2xl md:text-4xl text-center mt-3 font-bold'>Innovative Services For <br /> Smarter Products</p>
      <div className='grid grid-cols-1 place-items-center mt-8 md:grid-cols-3 space-5 gap-5'>
        <div className='flex flex-row p-5 bg-gradient-to-r from-green-500 to-green-700 gap-3 text-xl text-white rounded-xl'>
          <img src={engineeringService} alt="engineering service" className='w-20 h-15' />
          Engineering <br /> Services
        </div>
        <div className='flex flex-row p-5 bg-white gap-3 text-xl text-black rounded-xl'>
          <img src={productDevelopement} alt="product development" className='w-20 h-15' />
          Product <br /> Development
        </div>
        <div className='flex flex-row p-5 bg-white gap-3 text-xl text-black rounded-xl'>
          <img src={technicalConsulting} alt="engineering service" className='w-20 h-15' />
          Technical <br /> Consulting
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 place-items-center mt-10 md:mt-20 px-5 md:px-10'>
        <img src={service2} alt="service img" className='xl:h-70 xl:w-120' />
        <div className='flex flex-col gap-5 mt-8 md:mt-0'>
          <h3 className='font-medium text-2xl md:text-3xl'>Engineering Services</h3>
          <p className='text-sm font-medium text-justify md:text-start'>We provide full-cycle engineering services covering embedded firmware, motor control algorithms, IoT integration, and power electronics design. Our expertise ensures scalable, real-time, and energy- efficient solutions for industrial, commercial, and consumer applications</p>
          <div className='bg-green-800 text-white px-3 py-2 rounded-4xl flex flex-row gap-4 items-center w-38.5 mt-8'>Read More <span className='bg-white text-green-800 px-2 py-2 rounded-4xl rotate-45'><IoArrowUpOutline  size={20} /></span></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Services