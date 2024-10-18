import React from 'react'

function WhyUsCard({img, title, desc, bgImg}) {
  return (
    <div 
      className='flex flex-col gap-2 w-full sm:w-[45%] lg:w-[25vw] min-h-[30vh] sm:min-h-[35vh] 
        py-6 sm:py-8 md:py-12 lg:py-[60px] 
        px-4 sm:px-6 md:px-8 lg:px-[30px] 
        border-2 border-gray-200 
        rounded-2xl sm:rounded-3xl lg:rounded-4xl
        hover:shadow-lg transition-all duration-300
        hover:-translate-y-5'
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className='w-16 sm:w-20 lg:w-[80px] mb-2 sm:mb-3 lg:mb-4'>
        <img 
          src={img} 
          alt={title} 
          className='object-contain w-full h-full'
        />
      </div>
      <div className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold primary-text'>
        {title}
      </div>
      <div className='text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700'>
        {desc}
      </div>
    </div>
  )
}

export default WhyUsCard