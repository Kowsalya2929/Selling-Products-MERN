import React from 'react'
import { BsPhone } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    {/* footer */}
    <div className='bg-gradient-to-r from-amber-50 via-white to-amber-50 w-[100%] p-5 flex flex-col border-b border-gray-200 lg:flex-row justify-center lg:justify-between gap-5'>
      <div className='flex flex-col gap-5 lg:w-[35%] items-center lg:items-start'>
        <div className='flex flex-col gap-7'>
          <h2 className='text-3xl font-bold text-blue-950 text-center lg:text-left'>Cloud<span className='text-red-700'>i5</span> Technologies</h2>
          <p className='text-justify lg:text-start'>At the core of our work lies a commitment to innovation and intelligence. We develop advanced embedded solutions that drive smart devices, connect industries, and enable digital transformation</p>
        </div>
        <div className='flex flex-col gap-4'>
          <h2 className='text-lg font-bold text-center lg:text-start'>Social Contact</h2>
          <div className='flex flex-row items-center gap-3'>
            <div className='flex flex-row gap-2 items-center cursor-pointer text-green-800'><FaFacebookSquare size={20} /> <span className='text-black'>Fa .</span></div>
            <div className='flex flex-row gap-2 items-center cursor-pointer text-green-800'><RiInstagramFill size={20} /> <span className='text-black'>Ins .</span></div>
            <div className='flex flex-row gap-2 items-center cursor-pointer text-green-800'><FaLinkedin size={20} /> <span className='text-black'>in .</span></div>
            <div className='flex flex-row gap-2 items-center cursor-pointer text-green-800'><FaYoutube size={20} /> <span className='text-black'>You </span> </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-5 lg:w-[20%] items-center'>
        <h2 className='text-lg font-bold'>Quick Links</h2>
        <div className='flex flex-col gap-5 items-center'>
          <div className='hover:text-green-800'><Link to='/'>Home</Link></div>
          <div className='hover:text-green-800'><Link to='/about'>About Us</Link></div>
          <div className='hover:text-green-800'><Link to='/service'>Services</Link></div>
          <div className='hover:text-green-800'><Link to='/product'>Products </Link></div>
          <div className='hover:text-green-800'><Link to='/contact'>Contact Us</Link></div>
        </div>
      </div>
      <div className='flex flex-col gap-5 lg:w-[20%] items-center'>
        <h2 className='text-lg font-bold'>Services</h2>
        <div className='flex flex-col gap-5 items-center'>
          <div className='hover:text-green-800'>Engineering Services</div>
          <div className='hover:text-green-800'>Product Development</div>
          <div className='hover:text-green-800'>Technical Consulting</div>
        </div>
      </div>
      <div className='flex flex-col gap-5 lg:w-[25%] items-center'>
        <h2 className='text-lg font-bold'>Contact</h2>
        <div className='flex flex-col gap-3'>
          <div className='flex flex-row gap-4'>
            <div className='bg-green-700 p-3 h-11 rounded-4xl'>
              <BsPhone size={20} className='text-white' />
            </div>
            <div className='flex flex-col gap-2'>
              <h5 className='font-bold'>Phone Number</h5>
              <h5 className='text-gray-600'>+91 98765 43210</h5>
            </div>
          </div>
          <div className='flex flex-row gap-4'>
            <div className='bg-green-700 p-3 h-11 rounded-4xl'>
              <IoMailOutline size={20} className='text-white' />
            </div>
            <div className='flex flex-col gap-2'>
              <h5 className='font-bold'>Email</h5>
              <h5 className='text-gray-600'>connect@cloudi5.com</h5>
            </div>
          </div>
          <div className='flex flex-row gap-4'>
            <div className='bg-green-700 p-3 h-11 rounded-4xl'>
              <CiLocationOn size={20} className='text-white' />
            </div>
            <div className='flex flex-col gap-2'>
              <h5 className='font-bold'>Location</h5>
              <h5 className='text-gray-600'>2/7-6-1,2, west street, Ganapathy, Coimbatore- 641035</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='bg-gradient-to-r from-amber-50 via-white to-amber-50 px-5 py-3 text-md flex flex-col md:flex-row justify-center md:justify-between gap-3'>
      <div className='text-center md:text-start'>
        All rights reserved. Developed by {" "}
        <span className='font-bold text-blue-950'>Cloud
          <span className='text-red-700'>i5</span> Technologies
        </span>
      </div>
      <div className='text-center md:text-end'>Privacy Policy | Terms and conditions</div>
    </div>
    </>
  )
}

export default Footer