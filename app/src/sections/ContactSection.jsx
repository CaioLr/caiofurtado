import React from 'react'

const ContactSection = () => {
  return (
    <section id='contact' className='relative w-full h-screen flex flex-col items-center justify-center snap-center'>
        <p className='bebas-neue-regular mb-8 text-gray-300 text-6xl'>Contact</p>

        <p className='open-sans-regular text-black mb-8'>These are my social networks, where you can follow me or get in touch.</p>
        
        <div className='flex flex-row h-1/4 w-2/4 gap-8 items-center justify-center'>
            <div className='flex w-1/6 aspect-square items-center justify-center bg-gray-50 shadow-sm shadow-black/30 rounded-full'><a className='w-full h-full flex items-center justify-center' href="https://www.linkedin.com/in/caio-furtado-ramos/" target="_blank">
                <img className='w-2/4 object-cover' src="/linkedinlogo.png" alt="LinkedIn" />
            </a></div>

            <div className='flex w-1/6 aspect-square items-center justify-center bg-gray-50 shadow-sm shadow-black/30 rounded-full'> <a className='w-full h-full flex items-center justify-center' href="https://www.youtube.com/@CaioFurtadoLr" target="_blank">
                <img className='w-4/4 object-cover' src="/youtubelogo.png" alt="YouTube" />
            </a></div>

            <div className='flex w-1/6 aspect-square items-center justify-center bg-gray-50 shadow-sm shadow-black/30 rounded-full'><a className='w-full h-full flex items-center justify-center' href="https://github.com/CaioLr" target="_blank">
                <img className='w-2/4 object-cover' src="/githublogo.png" alt="GitHub" />
            </a></div>

        </div>



        <div className='absolute bottom-4 w-full flex flex-col items-center justify-center'>
            <div className='flex w-full h-0.5'>
                <div className='w-full h-full mx-4 bg-gray-200'></div>
            </div>
            <div className='text-xs pl-8 mx-2 my-2'>
                <p><b>Version 3.0</b></p>
                <p>Developed and designed by: Caio Furtado   |   Illustration on About section by: Wellington Furtado</p>
            </div>
        </div>



    </section>
  )
}

export default ContactSection