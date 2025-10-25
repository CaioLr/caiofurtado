import React from 'react'

const ProjectsSection = () => {
  return (
    <section id="projects" className='relative w-full h-screen flex flex-col items-center gap-8 justify-center snap-center'>

        <div className='absolute z-10 h-3/4 lg:w-[35%] left-0 flex flex-col lg:justify-center'>
            <p className='Oswald text-3xl lg:text-4xl px-4 lg:px-10 py-1 lg:py-4 mb-2 lg:mb-8'>Take a look at my projects and explore the details of it in my projects page.</p>
            <p className='hidden lg:flex open-sans-regular text-lg px-2 lg:px-10 pb-2 lg:pb-4'>Visit my projects page to learn more about the challenges and technologies I’ve worked with. There you’ll find more details about the concepts, planning stages, and development processes of the projects I’ve been involved in.</p>
            <button className='bg-sky-600 lg:bg-transparent hover:bg-sky-600 font-semibold text-white lg:text-sky-600 hover:text-white  w-2/4 mx-4 lg:mx-10 m-2 lg:my-4 p-2 border border-sky-600 hover:border-transparent rounded' onClick={() => window.location.href='/projects'}>Click here to visit the projects page.</button>
        </div>

        <div className='absolute  rotate-x-30 rotate-z-20 -right-80 lg:-right-60 -bottom-20 lg:-bottom-35  h-[80%] lg:h-[120%] w-[200%] lg:w-[75%] rounded-2xl border border-stone-500  p-12 '>
        <div className='relative h-full w-full flex flex-col justify-center items-center bg-stone-100 rounded-2xl shadow-xl shadow-black/50'>
            
            <div className='flex w-full h-[10%] justify-center items-center'>
                    <p className='pt-10  bebas-neue-regular mb-8 text-gray-300 text-4xl lg:text-6xl'>PROJECTS</p>
            </div>
             

             <div className='flex flex-col  h-[90%] w-full p-2 lg:p-10'>

                <div className='flex flex-row h-2/4 w-full gap-4 lg:gap-8 p-5 lg:p-10'>

                        <div className='relative h-full w-2/4 bg-sky-800 rounded-lg shadow-xl shadow-black/50'>
                                    
                            <div className='absolute w-full h-full flex justify-center items-center rounded-lg hover:bg-black/60 opacity-0 hover:opacity-100 transition-opacity'>
                                <span className='open-sans-regular text-lg text-white text-center p-6'></span></div>

                        </div>

                        <div className='relative h-full w-2/4 bg-sky-800 rounded-lg shadow-xl shadow-black/50'>
                            
                                <img className='absolute w-full h-full object-cover rounded-lg' src="/projects/oversees.png" alt="" />

                                <div className='absolute w-full h-full flex justify-center items-center rounded-lg hover:bg-black/60 opacity-0 hover:opacity-100 transition-opacity'>
                                <span className='open-sans-regular text-lg text-white text-center p-6'>Desktop application for advanced hardware and system processes monitoring.</span></div>
            
                        </div>

                </div>

                <div className='flex flex-row h-2/4 w-full gap-4 lg:gap-8 p-5 lg:p-10'>

                            <div className='relative h-full w-2/4 bg-sky-800 rounded-lg shadow-xl shadow-black/30'>

                                <img className='absolute w-full h-full object-cover rounded-lg' src="/projects/usedlanguages.png" alt="" />

                                <div className='absolute w-full h-full flex justify-center items-center rounded-lg hover:bg-black/60 opacity-0 hover:opacity-100 transition-opacity'>
                                <span className='open-sans-regular text-lg text-white text-center p-6'>Customized GitHub Used Languages dynamic image to use in your README profile.</span></div>

                            </div>

                            <div className='relative h-full w-2/4 bg-sky-800 rounded-lg shadow-xl shadow-black/30'>

                                <img className='absolute w-full h-full object-cover rounded-lg' src="/projects/qrcodecontroller.png" alt="" />

                                <div className='absolute w-full h-full flex justify-center items-center rounded-lg hover:bg-black/60 opacity-0 hover:opacity-100 transition-opacity'>
                                <span className='open-sans-regular text-lg text-white text-center p-6'>Establishing a WebSocket connection in Python Flask using a QR code.</span></div>

                            </div>
                    
                </div>

             </div>

        </div>
        </div>

    </section>
  )
}

export default ProjectsSection