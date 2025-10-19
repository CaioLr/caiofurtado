import React from 'react'

const ProjectsSection = () => {
  return (
    <section id="projects" className='w-full h-screen flex flex-col items-center gap-8 justify-center snap-center'>
        <div className='flex flex-row mt-24 w-3/4 h-3/5 gap-4'>
            {/* Project 1 */}
            <div className='flex flex-col h-full w-3/5 rounded-lg shadow-sm shadow-black/30 '>
              <div className='h-[82%] w-full bg-sky-800 rounded-t-lg shadow-sm shadow-black/30'>

              </div>
              <div className='flex flex-row h-[18%] w-full items-center justify-start'>
                <p className='open-sans-regular text-sm text-black p-1 ml-4 text-start'>Title of the Project One:</p>
                <p className='open-sans-regular text-xs text-black p-1 text-start'>A quick description of the project.</p>
              </div>
              
            </div>

            {/* Learn More */}
            <div className='flex flex-col h-full w-2/5 rounded-lg shadow-sm shadow-black/30 justify-center'>
                <p className='bebas-neue-regular text-4xl px-10 py-4'>Take a look at my other projects and explore the details of my major works.</p>
                <p className='open-sans-regular text-md px-10 pb-4'>Visit my projects page to learn more about the challenges and technologies I’ve worked with. There you’ll find more details about the concepts, planning stages, and development processes of the projects I’ve been involved in.</p>
                <button className='bg-transparent hover:bg-sky-600 font-semibold text-sky-600 hover:text-white  w-2/4 mx-10 my-4 p-2 border border-sky-600 hover:border-transparent rounded' onClick={() => window.location.href='/projects'}>Click here to visit the projects page.</button>
            </div>
        </div>

        <div className='flex flex-row mb-20 w-3/4 h-2/5 gap-4'>
            {/* Project 2 */}
            <div className='flex flex-col h-full w-2/6 rounded-lg shadow-sm shadow-black/30'>
                <div className='h-[82%] w-full bg-sky-800 rounded-t-lg shadow-sm shadow-black/30'>
                    <img className='w-full h-full object-cover rounded-t-lg' src="/projects/oversees2.png" alt="" />
                </div>
                <div className='flex flex-row h-[18%] w-full items-center justify-start'>
                  <p className='oswald-regular text-sm text-black p-1 ml-4 text-start'>Desktop application for advanced hardware and system processes monitoring.</p>
                </div>
            </div>

            {/* Project 3 */}
            <div className='flex flex-col h-full w-2/6 rounded-lg shadow-sm shadow-black/30'>

              <div className='h-[82%] w-full bg-sky-800 rounded-t-lg shadow-sm shadow-black/30'>
                <img className='w-full h-full object-cover rounded-t-lg' src="/projects/usedlanguages.png" alt="" />
              </div>

              <div className='flex flex-row h-[18%] w-full items-center justify-start'>
                <p className='oswald-regular text-sm text-black p-1 ml-4 text-start'>Customized GitHub Used Languages dynamic image to use in your README profile.</p>
              </div>

            </div>

            {/* Project 4 */}
            <div className='flex flex-col h-full w-2/6 rounded-lg shadow-sm shadow-black/30'>
              <div className='h-[82%] w-full bg-sky-800 rounded-t-lg shadow-sm shadow-black/30'>
                <img className='w-full h-full object-cover rounded-t-lg' src="/projects/qrcodecontroller.png" alt="" />
              </div>
              <div className='flex flex-row h-[18%] w-full items-center justify-start'>
                <p className='oswald-regular text-sm text-black p-1 ml-4 text-start'>Establishing a WebSocket connection in Python Flask using a QR code.</p>
              </div>
            </div>

        </div>
    </section>
  )
}

export default ProjectsSection