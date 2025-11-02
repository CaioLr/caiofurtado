import React from 'react'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

const InitialSection = () => {
  return (
    <section className='relative w-full h-screen flex flex-col items-center justify-start border-b border-black'>

      <div className='flex flex-col w-full h-1/4 justify-end gap-4 mt-14 lg:mt-20 p-10 lg:px-40 xl:px-60'>
          <p className='comic-neue-bold text-2xl md:text-4xl'>Hello! I'm Caio,</p>
          <p className='comic-neue-regular text-xl md:text-3xl'>This is a portfolio showcasing the work and passion of a software engineer.</p>
      </div>

      <div className='flex flex-col lg:flex-row w-full h-2/4 p-10 gap-4'>

        <div className='w-full h-3/4 lg:h-full'><video className='object-cover w-full h-full' autoPlay loop muted playsInline src="/videos/test.mp4"></video></div>
        <div className='w-full h-3/4 lg:h-full'><video className='object-cover w-full h-full' autoPlay loop muted playsInline src="/videos/videoexample.mp4"></video></div>

      </div>
   
    </section>
  )
}

export default InitialSection