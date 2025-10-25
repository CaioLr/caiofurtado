import React from 'react'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

const InitialSection = () => {
  return (
    <section className='relative z-10 w-full h-screen flex items-center justify-center snap-center'>
        
        <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
        >
            <source src="/test.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos em HTML5.
        </video>

        <div className="absolute top-0 left-0 w-full h-full  bg-black/40" />

        <div className="relative z-10">
            <h1 className="bebas-neue-regular text-center text-white text-8xl font-bold ">Caio Furtado</h1>
            <p className="open-sans-light text-white text-center text-xl mt-4">A portfolio showcasing the work and passion of a dedicated software engineer.</p>
        </div>

        <div className='absolute z-10 bottom-20 animate-[updown_3s_ease-in-out_infinite]'>
          <Link to="projects" spy={true} smooth={true} offset={50} duration={600} containerId="main-container">
          <div className='flex flex-col items-center h-8'>
            
                <span className='oswald-regular text-white text-lg transition-transform duration-300 hover:scale-105'>Scroll Down</span>
                <img className='h-8' src="/arrowdown.png" alt="Scroll Down Arrow" />
           </div></Link>
        </div>
    </section>
  )
}

export default InitialSection