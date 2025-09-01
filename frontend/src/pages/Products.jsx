import React from 'react'
import tool from '../assets/tool.png'
import home from '../assets/home.png'
import door from '../assets/door.png'
import qt from '../assets/qt.png'
import bgProduct from '../assets/bg-product.png'
import product1 from '../assets/product1.png'
import { IoArrowForward } from "react-icons/io5";
import productLogo from '../assets/productLogo.png'

const Products = () => {
  return (
    <>
    <div className="p-8 h-[400px] bg-cover bg-center bg-blend-overlay" style={{ backgroundImage: `url(${bgProduct})`,backgroundColor: "#1a5731" }}>
      <div className='flex flex-row gap-3 mt-[-10px] text-white justify-center'>
        <img src={productLogo} alt="product logo" className='h-5 w-5' />
        Our Products
      </div>
      <p className='text-2xl md:text-4xl text-center mt-5 font-bold text-white'>Innovative Services for <br /> Smarter Products</p>
    </div>

    <div className='grid grid-cols-1 xl:grid-cols-3 mb-[-220px] bg-white p-6  place-items-center rounded-4xl mx-5 xl:mx-30 relative bottom-55'>
      <div className='flex flex-col gap-8 md:mt-[-50px]'>
        <div className='p-3 bg-green-800 w-14 rounded-full relative top-40 start-90 hidden md:block'>
          <img src={door} alt="door" className='h-7 w-10' />
        </div>
        <div className='bg-green-800 text-white p-6 flex flex-col gap-4 rounded-3xl'>
          <h3 className='text-xl font-bold'>Gate Controllers</h3>
          <p>Next-gen Smart Gate Controllers offer <br /> reliable, intelligent automation for all <br /> types of gate systems.</p>
          <h4 className='flex flex-row items-center gap-3'>Read More <IoArrowForward  /></h4>
        </div>
        <div className='bg-gray-200 text-black p-6 flex flex-col gap-4 rounded-3xl'>
          <h3 className='text-xl font-bold'>Cooling</h3>
          <p>Expert consulting for next-gen <br /> medical devices with precise cooling <br /> control.</p>
          <h4 className='flex flex-row items-center gap-3 text-green-700'>Read More <IoArrowForward  /></h4>
        </div>
        <div className='p-3 bg-green-800 w-14 rounded-full relative bottom-35 start-90 hidden md:block'>
          <img src={tool} alt="tool" className='h-7 w-10' />
        </div>
      </div>
      <div className='xl:flex justify-center items-center p-3 border rounded-full border-gray-300 hidden'>
        <img src={product1} alt="product" className='w-60 h-60' />
      </div>
      <div className='flex flex-col gap-8 md:mt-[-50px] mt-8'>
        <div className='p-3 bg-green-800 w-14 rounded-full relative top-40 end-25 hidden md:block'>
          <img src={qt} alt="qt" className='h-7 w-10' />
        </div>
        <div className='bg-gray-200 text-black p-6 flex flex-col gap-4 rounded-3xl '>
          <h3 className='text-xl font-bold'>Linux QT</h3>
          <p>Expert embedded Linux consulting <br /> with Qt-based UI/UX for advanced <br /> touch displays.</p>
          <h4 className='flex flex-row items-center gap-3 text-green-700'>Read More <IoArrowForward  /></h4>
        </div>
        <div className='bg-gray-200 text-black p-6 flex flex-col gap-4 rounded-3xl'>
          <h3 className='text-xl font-bold'>Home Automation</h3>
          <p>Experience the convenience of smart <br /> living with our advanced home <br /> automation solutions</p>
          <h4 className='flex flex-row items-center gap-3 text-green-700'>Read More <IoArrowForward  /></h4>
        </div>
        <div className='p-3 bg-green-800 w-14 rounded-full relative bottom-35 end-25 hidden md:block'>
          <img src={home} alt="home" className='h-7 w-10' />
        </div>
      </div>
    </div>
    </>
  )
}

export default Products

