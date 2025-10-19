import React from 'react'
import LanguageSelector from './LanguageSelector'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

const Nav = () => {
  return (
    <>
        <nav className='absolute h-[72px] z-20 w-full bg-black/90 border-b border-black'>
            <ul className='bebas-neue-regular text-white flex flex-row w-full h-full  items-center justify-center gap-20 text-2xl font-medium'>
                <li><a href="/projects"><p className='hover:text-indigo-700 transition-transform duration-300 hover:scale-105'>Projects</p></a></li>
                <li><Link to="about" spy={true} smooth={true} offset={50} duration={600} containerId="main-container"><p className='hover:text-indigo-700 transition-transform duration-300 hover:scale-105'>About</p></Link></li>
                <li><Link to="contact" spy={true} smooth={true} offset={50} duration={600} containerId="main-container"><p className='hover:text-indigo-700 transition-transform duration-300 hover:scale-105'>Contact</p></Link></li>
                <li className='absolute right-20 text-lg'><LanguageSelector /></li>
            </ul>
        </nav>

    </>
  )
}

export default Nav