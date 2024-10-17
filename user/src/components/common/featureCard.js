import React from 'react'

function FeatureCard({img, alt, description}) {
  return (
    <div className='flex items-center px-5 w-[340px] h-[120px] rounded-lg primary-bg border-2 border-gray-200 gap-8 primary-text transition-all duration-300 ease-in hover:text-white hover:bg-[#2c295f] shadow-lg hover:scale-110'>
        <div className='flex justify-center items-center w-[70px] h-[70px] rounded-[50%] secondary-bg p-1]'>
            <img src={img}
             alt={alt} className='w-full h-full object-contain'/>
        </div>
        <div className='text-md'>{description}</div>
    </div>
  )
}

export default FeatureCard