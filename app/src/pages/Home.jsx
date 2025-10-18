import React, { useRef } from 'react'
import Nav from '../components/Nav.jsx'
import AboutSection from '../sections/AboutSection.jsx'
import InitialSection from '../sections/InitialSection.jsx'
import ProjectsSection from '../sections/ProjectsSection.jsx'
import ContactSection from '../sections/ContactSection.jsx'

const Home = () => {
  return (
    <div className='h-screen w-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth'>
      <Nav />
      <InitialSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />

    </div>
  )
} 
export default Home