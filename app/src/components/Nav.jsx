import React from 'react'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

const Nav = () => {
  return (
    <>
      {/* Web */}
      <nav className='hidden lg:flex z-10 bg-white/50 items-center absolute top-0 w-full h-[92px] px-20 justify-end'>
        <ul className='flex flex-row items-center gap-10 px-10'> 
          <li><p className='bebas-neue-regular text-3xl'>Projects</p></li>
          <li><p className='bebas-neue-regular text-3xl'>About</p></li>
        </ul>


        <div className='flex flex-row items-center justify-center w-38 gap-4 h-10 mx-14'>
          <div className='w-1/3 h-full flex items-center justify-center'>
            <a className='h-full flex items-center justify-center' href="https://www.youtube.com/@CaioFurtadoLr" target="_blank" rel="noopener noreferrer"><img className='object-scale-down' src="/others/youtubelogo.png" alt="Youtube" /></a></div>
          <div className='w-1/3 h-full flex items-center justify-center'>
            <a className='h-full flex items-center justify-center' href="https://github.com/CaioLr" target="_blank" rel="noopener noreferrer"><img className='object-scale-down h-4/5' src="/others/githublogo.png" alt="Github" /></a></div>
          <div className='w-1/3 h-full flex items-center justify-center'>
            <a className='h-full flex items-center justify-center' href="https://www.linkedin.com/in/caio-furtado-ramos/" target="_blank" rel="noopener noreferrer"><img className='object-scale-down h-4/5' src="/others/linkedinlogo.png" alt="LinkedIn" /></a></div>
        </div>

      </nav>

      {/* Mobile */}
      <nav className='flex lg:hidden'>

      </nav>
    </>
  )
}

export default Nav