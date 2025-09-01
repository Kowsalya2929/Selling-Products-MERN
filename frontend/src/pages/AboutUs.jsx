import React from 'react'
import aboutLogo from '../assets/aboutLogo.png'
import about1 from '../assets/about1.png'
import about2 from '../assets/about2.png'
import about3 from '../assets/about3.jpg'
import about21 from '../assets/about21.png'
import about22 from '../assets/about22.png'
import about23 from '../assets/about23.png'
import { IoArrowUpOutline } from 'react-icons/io5'

const AboutUs = () => {
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-2 place-items-center bg-white md:px-10 px-6 gap-0 xl:gap-5'>
      <div className='xl:mb-[-80px] xl:mt-[-60px]'>
        <img src={about1} alt="about1" className='w-30 h-20 xl:w-40 xl:h-30 rounded-3xl border-6 border-white relative top-10 end-10 xl:top-35 xl:end-20' />
        <img src={about2} alt="about2" className='w-60 h-50 xl:w-100 xl:h-90 rounded-3xl' />
        <img src={about3} alt="about3" className='w-35 h-25 xl:w-60 xl:h-40 rounded-3xl border-6 border-white relative bottom-10 xl:bottom-45 start-35 xl:start-70' />
      </div>
      <div className='flex flex-col xl:mt-[-50px]'>
        <div className='flex flex-row text-green-800 items-center gap-2 justify-center md:justify-start'>
          <img src={aboutLogo} alt="about logo" className='w-5 h-5' />
          About Us
        </div>
        <h2 className='text-xl xl:text-3xl font-medium text-center md:text-start mt-2 md:mt-0'>Empowering The Future With <br /> Embedded Intelligence</h2>
        <p className='text-justify mt-5 md:text-left md:text-sm'>At the core of our work lies a commitment to innovation and intelligence. We develop advanced embedded solutions that drive smart devices, connect industries, and enable digital transformation</p>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 place-items-center xl:place-items-stretch mt-5 md:2'>
          <div className='flex flex-row gap-3 items-center'>
            <img src={about21} alt="about21" className='h-10 w-13 rounded-full' />
            <span className='font-medium'><span className='text-green-800'>15+</span> Years <br /> Experience</span>
          </div>
          <div className='flex flex-row gap-3 items-center'>
            <img src={about22} alt="about22" className='h-10 w-13 rounded-full' />
            <span className='font-medium'>Timely Project <br /> Delivery</span>
          </div>
          <div className='flex flex-row gap-3 items-center'>
            <img src={about23} alt="about23" className='h-10 w-13 rounded-full' />
            <span className='font-medium'>Technical <br /> Team</span>
          </div>
        </div>
        <div className='bg-green-800 text-white px-3 py-2 rounded-4xl flex flex-row mx-auto xl:mx-0 gap-4 items-center w-40.5 mt-8 mb-5 xl:mb-0'>About More <span className='bg-white text-green-800 px-2 py-2 rounded-4xl rotate-45'><IoArrowUpOutline  size={20} /></span></div>
      </div>
    </div>
    </>
  )
}

export default AboutUs