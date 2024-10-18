import React from 'react'

function FeatureCard({img, alt, description}) {
  return (
    <div className='flex items-center 
      px-4 sm:px-5 
      w-full sm:w-[300px] md:w-[320px] lg:w-[340px] 
      h-[100px] sm:h-[110px] md:h-[120px] 
      rounded-lg 
      primary-bg 
      border-2 border-gray-200 
      gap-4 sm:gap-6 md:gap-8 
      primary-text 
      transition-all duration-300 ease-in 
      hover:text-white hover:bg-[#2c295f] 
      shadow-md hover:shadow-lg
      hover:scale-105 sm:hover:scale-110
     '>
        <div className='flex justify-center items-center 
          w-[50px] h-[50px] 
          sm:w-[60px] sm:h-[60px] 
          md:w-[70px] md:h-[70px] 
          rounded-full 
          secondary-bg 
          p-1'>
            <img 
              src={img} 
              alt={alt} 
              className='w-full h-full object-contain p-2'
            />
        </div>
        <div className='text-sm sm:text-base md:text-md lg:text-lg flex-1'>
          {description}
        </div>
    </div>
  )
}

export default FeatureCard