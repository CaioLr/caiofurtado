import React from 'react'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

const InitialSection = () => {
  return (
    <section className='relative w-full h-screen flex flex-col items-center justify-start'>

      <div className='flex flex-col w-full h-1/4 justify-end gap-4 mt-14 lg:mt-20 px-10 py-6 lg:px-40 xl:px-60'>
          <p className='comic-neue-bold text-2xl md:text-3xl lg:text-4xl'>Hello! I'm Caio,</p>
          <p className='comic-neue-regular text-xl md:text-2xl lg:text-3xl'>This is a portfolio showcasing the work and passion of a software engineer.</p>
      </div>

      <div className='flex flex-col lg:flex-row w-full h-2/4 px-10 sm:p-10 gap-4'>

        <div className='w-full h-3/4 lg:h-full border-2'><video className='object-cover w-full h-full' autoPlay loop muted playsInline src="/videos/test.mp4"></video></div>
        <div className='w-full h-3/4 lg:h-full border-2'><video className='object-cover w-full h-full' autoPlay loop muted playsInline src="/videos/videoexample.mp4"></video></div>

      </div>


      <div className='absolute z-10 bottom-20 animate-[updown_3s_ease-in-out_infinite]'>
          <Link to="projects" spy={true} smooth={true} offset={50} duration={600} containerId="main-container">
          <div className='flex flex-col items-center h-8'>
            
                <span className='comic-neue-regular text-lg transition-transform duration-300 hover:scale-105'>Scroll Down</span>
                <img className='h-8' src="/others/arrowdown-black.png" alt="Scroll Down Arrow" />
           </div></Link>
        </div>
   
    </section>
  )
}

export default InitialSection