import React, { useState } from 'react'
import { LuVibrate } from "react-icons/lu";
import { IoMail } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";
import { IoArrowUpOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {

  const [menuOpen,setMenuOpen] = useState(false)

  return (
    <>
    {/* info nav */}
    <div className='px-5 sticky top-0 bg-white z-50 py-3 border-b border-gray-200 flex md:flex-row flex-col items-center justify-center md:justify-between gap-3'>
      <div className='flex md:flex-row flex-col gap-3 md:gap-5'>
        <div className='flex flex-row gap-2 items-center justify-center md:justify-start relative'>
          <div className='h-2 w-2 bg-gradient-to-b from-green-500 border border-black to-white absolute start-5.5 md:start-2'></div>
          <LuVibrate size={25} />
          <a href="tel:+91 72040 38237">+91 72040 38237</a> 
        </div>
        <div className='flex flex-row gap-2 items-center'>
          <IoMail size={20} className='text-green-800' /> 
          <a href="mailto:connect@cloudi5.com">connect@cloudi5.com</a>
        </div>
      </div>
      <div className='flex flex-row items-center gap-3'>
        <div className='flex flex-row gap-2 items-center cursor-pointer text-green-800'><FaFacebookSquare size={20} /> <span className='text-black'>Fa .</span></div>
        <div className='flex flex-row gap-2 items-center cursor-pointer text-green-800'><RiInstagramFill size={20} /> <span className='text-black'>Ins .</span></div>
        <div className='flex flex-row gap-2 items-center cursor-pointer text-green-800'><FaLinkedin size={20} /> <span className='text-black'>in .</span></div>
        <div className='flex flex-row gap-2 items-center cursor-pointer text-green-800'><FaYoutube size={20} /> <span className='text-black'>You </span> </div>
      </div>
    </div>

    {/* main nav */}
    <div className='px-5 sticky top-30 md:top-12 z-50 bg-white py-3 flex flex-row items-center justify-between border-b border-gray-200'>
      <h3 className='text-3xl font-bold text-blue-950'>Cloud<span className='text-red-700'>i5</span></h3>
      <div className='hidden md:flex flex-row gap-5 xl:gap-12 items-center'>
        <div className='hover:text-green-800'><Link to='/'>Home</Link></div>
        <div className='hover:text-green-800'><Link to='/about'>About Us</Link></div>
        <div className='hover:text-green-800'><Link to='/service'>Services</Link></div>
        <div className='hover:text-green-800 flex flex-row items-center gap-3'><Link to='/product'>Products </Link><IoIosArrowDown /></div>
        <div className='hover:text-green-800'><Link to='/contact'>Contact Us</Link></div>
        <div className='bg-green-800 text-white px-3 py-2 rounded-4xl flex flex-row gap-4 items-center'>Get In Touch <span className='bg-white text-green-800 px-2 py-2 rounded-4xl rotate-45'><IoArrowUpOutline  size={20} /></span></div>
      </div>
      <div className='md:hidden' onClick={()=>setMenuOpen(!menuOpen)}>{!menuOpen ? <TiThMenu className='text-green-800' size={30} /> : <RxCross2 className='text-green-800' size={30} />}</div>
    </div>

    {/* menu open */}
    {menuOpen && (
      <div style={{backgroundColor: "#e7f0e6"}} className={`flex md:hidden flex-col gap-5 xl:gap-12 justify-center items-center 
           p-3 transition-all duration-300 ease-in-out 
          ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className='hover:text-green-800'><Link to='/'>Home</Link></div>
        <div className='hover:text-green-800'><Link to='/about'>About Us</Link></div>
        <div className='hover:text-green-800'><Link to='/service'>Services</Link></div>
        <div className='hover:text-green-800 flex flex-row items-center gap-3'><Link to='/product'>Products </Link><IoIosArrowDown /></div>
        <div className='hover:text-green-800'><Link to='/contact'>Contact Us</Link></div>
        <div className='bg-green-800 text-white px-3 py-2 rounded-4xl flex flex-row gap-4 items-center'>
          Get In Touch <span className='bg-white text-green-800 px-2 py-2 rounded-4xl rotate-45'><IoArrowUpOutline size={20} /></span>
        </div>
      </div>
    )}
    </>
  )
}

export default Navbar