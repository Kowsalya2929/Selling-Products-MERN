import React from 'react'
import tureLogo from '../assets/true.png'
import smileLogo from '../assets/smile.png'
import precorLogo from '../assets/precor.png'
import cybexLogo from '../assets/cybex.png'
import mockupLogo from '../assets/mockup.png'

const Client = () => {
  return (
    <div className='flex flex-col gap-5 mt-15'>
      <div className="flex items-center justify-center space-x-3">
        <hr className='text-gray-300 w-full' />
        <h4 className="text-center whitespace-nowrap text-sm text-black font-serif">
          We have satisfied <span className="text-green-800">clients</span> from different fields
        </h4>
        <hr className='text-gray-300 w-full' />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 my-5 place-items-center gap-5">
        <img src={tureLogo} alt="true" className='w-25 h-15' />
        <img src={precorLogo} alt="precor" className='w-25 h-15' />
        <img src={mockupLogo} alt="mockup" className='w-25 h-15' />
        <img src={cybexLogo} alt="cybex" className='w-25 h-15' />
        <img src={smileLogo} alt="smile" className='w-25 h-15' />
      </div>
      <div>
        <hr className='text-gray-300 w-full' />
      </div>
    </div>
  )
}

export default Client