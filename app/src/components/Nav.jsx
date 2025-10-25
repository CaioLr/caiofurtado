import React from 'react'
import LanguageSelector from './LanguageSelector'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

const Nav = () => {
  return (
    <>
        {/* Web */}
        <nav className='hidden lg:flex lg:absolute h-[72px] z-20 w-full bg-black/90 border-b border-black'>
            <ul className='bebas-neue-regular text-white flex flex-row w-full h-full  items-center justify-center gap-20 text-2xl font-medium'>
                <li><a href="/projects"><p className='hover:text-sky-700'>Projects</p></a></li>
                <li><Link to="about" spy={true} smooth={true} offset={50} duration={500} containerId="main-container"><p className='hover:text-sky-700'>About</p></Link></li>
                <li><Link to="contact" spy={true} smooth={true} offset={50} duration={500} containerId="main-container"><p className='hover:text-sky-700'>Contact</p></Link></li>
                <li className='absolute right-20 text-lg'><LanguageSelector /></li>
            </ul>
        </nav>

        {/* Mobile */}
        <nav className='flex lg:hidden absolute h-[72px] z-20 w-full bg-black/90 border-b border-black'>

            
           
        </nav>


    </>
  )
}

export default Nav