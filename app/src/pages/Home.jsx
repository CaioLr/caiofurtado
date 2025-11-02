import React, { useRef } from 'react'
import Nav from '../components/Nav'
import AboutSection from '../sections/AboutSection'
import InitialSection from '../sections/InitialSection'
import ProjectsSection from '../sections/ProjectsSection'
import ContactSection from '../sections/ContactSection'

const Home = () => {
  return (
    <div id="main-container" className='h-screen w-screen overflow-x-hidden overflow-y-scroll snap-y snap-mandatory scroll-smooth'>
      <Nav />
      <InitialSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />

    </div>
  )
} 
export default Home