import React from 'react'

const AboutSection = () => {
  return (
    <section className=' w-full h-screen flex items-center justify-center snap-center'>
        
        <div className='flex flex-row h-3/4 w-3/4 bg-gray-300 rounded-lg shadow-md shadow-black/30'>

          <div className='h-full w-2/4'>

          </div>

          <div className='flex flex-col h-full w-2/4 items-center justify-center'>

            <div className='flex w-2/4 aspect-square border rounded-full'>
              <img className='flex h-full  object-scale-down' src="/BG-Transparente.gif" alt="About" />
            </div>

            <div className='flex h-[30%] w-full'>
            </div>
            
          </div>

        </div>
      
        
    </section>
  )
}

export default AboutSection