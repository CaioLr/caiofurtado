import React from 'react'
import LanguageSelector from './LanguageSelector'

const Nav = () => {
  return (
    <>
        <nav className='absolute h-[72px] z-20 w-full bg-black/90 border-b border-black'>
            <ul className='bebas-neue-regular text-white flex flex-row w-full h-full  items-center justify-center gap-20 text-2xl font-medium'>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Contact</a></li>
                <li className='absolute right-20 text-lg'><LanguageSelector /></li>
            </ul>
        </nav>

    </>
  )
}

export default Nav