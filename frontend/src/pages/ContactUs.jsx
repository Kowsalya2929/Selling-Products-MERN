import React, { useState } from 'react'
import reachUs from '../assets/reachUs.png'
import { BsPhone } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { IoMailOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux'
import axiosInstance from '../api/axiosInstance.jsx'
import { postContacts } from '../redux/contactSclice.jsx'
import toast from 'react-hot-toast'

const ContactUs = () => {

  const [contactDetails,setContactDetails] = useState({username:"",email:"",phone:"",services:"",msg:""})

  const dispatch = useDispatch()

  const handlePostContact = async(contactDetails) => {
    try{
      const {data} = await axiosInstance.post('/contact',contactDetails)
      dispatch(postContacts(data))
      toast.success(data.message)
      setContactDetails({username:"",email:"",phone:"",services:"",msg:""})
    }catch(err){
      if(err?.response?.data?.message){
        toast.error(err.response.data.message)
      }
    }
  }

  return (
    <>
    {/* contact */}
    <div className='md:m-15 m-5 font-sans flex flex-col lg:flex-row gap-5 justify-between'>
      <div className='bg-green-800 md:px-10 md:py-7 p-7 w-[100%] lg:w-[40%] rounded-4xl'>
        <div className='flex flex-row gap-2 items-center text-white text-sm'>
          <img src={reachUs} alt="reach us" className='h-5 w-5' />
          Reach Us
        </div>
        <h2 className='text-3xl mt-3 text-white'>Start Your Smart </h2>
        <h2 className='text-3xl mt-3 text-white'>Project Today</h2>
        <p className='text-sm text-white mt-10'>Need embedded solutions or support? Connect with us <br /> to explore smart innovations together.</p>
        <div className='flex flex-col gap-3 mt-10'>
            <div className='flex flex-row gap-4'>
              <div className='bg-white p-3 h-11 rounded-4xl'>
                <BsPhone size={20} className='text-green-700' />
              </div>
              <div className='flex flex-col gap-2 text-white'>
                <h5 className='text-gray-400'>Phone Number</h5>
                <h5>+91 98765 43210</h5>
              </div>
            </div>
            <hr className='my-3 text-gray-500' />
            <div className='flex flex-row gap-4'>
              <div className='bg-white p-3 h-11 rounded-4xl'>
                <IoMailOutline size={20} className='text-green-700' />
              </div>
              <div className='flex flex-col gap-2 text-white'>
                <h5 className='text-gray-400'>Email</h5>
                <h5>connect@cloudi5.com</h5>
              </div>
            </div>
            <hr className='my-3 text-gray-500' />
            <div className='flex flex-row gap-4'>
              <div className='bg-white p-3 h-11 rounded-4xl'>
                <CiLocationOn size={20} className='text-green-700' />
              </div>
              <div className='flex flex-col gap-2 text-white'>
                <h5 className='text-gray-400'>Office Address</h5>
                <h5>2/7-6-1,2, west street, Ganapathy,<br /> Coimbatore- 641035</h5>
              </div>
            </div>
        </div>
      </div>
      <div className='bg-white md:px-10 md:py-8 p-7 w-[100%] lg:w-[55%] rounded-4xl border-2 border-gray-200'>
        <div className='flex flex-col gap-2'>
          <label htmlFor="na" className='ml-1 text-gray-700 font-medium'>Name</label>
          <input type="text" id='na' value={contactDetails?.username} onChange={(e)=>setContactDetails({...contactDetails,username: e.target.value})} placeholder='Enter Your Name' className='p-3 border border-gray-200 bg-gray-100 rounded-xl' />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
          <div>
            <label htmlFor="em" className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              id='em'
              value={contactDetails?.email} onChange={(e)=>setContactDetails({...contactDetails,email: e.target.value})}
              placeholder='Enter Your Email'
              className="w-full p-3 bg-gray-100 rounded-xl border border-gray-200"
            />
          </div>
          <div>
            <label htmlFor="pn" className="block mb-1 font-medium text-gray-700">Phone Number</label>
            <input
              type="number"
              id="pn"
              value={contactDetails?.phone} onChange={(e)=>setContactDetails({...contactDetails,phone: e.target.value})}
              placeholder="Enter Your Phone Number"
              className="w-full p-3 bg-gray-100 rounded-xl border border-gray-200"
            />
          </div>
        </div>
        <div className='flex flex-col gap-2 mt-5'>
          <label htmlFor="sv" className='ml-1 text-gray-700 font-medium'>Select Services</label>
          <select id="sv" className='p-3 border border-gray-200 bg-gray-100 rounded-xl' value={contactDetails?.services} onChange={(e)=>setContactDetails({...contactDetails,services: e.target.value})}>
            <option value="">Select Services</option>
            <option value="Engineering Services">Engineering Services</option>
            <option value="Product Development">Product Development</option>
            <option value="Technical Consulting">Technical Consulting</option>
          </select>
        </div>
        <div className='flex flex-col gap-2 mt-5'>
          <label htmlFor="ta" className='ml-1 text-gray-700 font-medium'>Your Message</label>
          <textarea id="ta" rows={3} value={contactDetails?.msg} onChange={(e)=>setContactDetails({...contactDetails,msg: e.target.value})} className='bg-gray-100 border border-gray-200 rounded-xl p-3' wrap='off' placeholder='Type Your Message' />
        </div>
        <button type='button' onClick={()=>handlePostContact(contactDetails)} className='bg-green-800 cursor-pointer p-4 w-full mt-5 rounded-xl text-white font-medium'>Submit</button>
      </div>
    </div>
    </>
  )
}

export default ContactUs