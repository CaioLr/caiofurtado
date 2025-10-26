import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Sector, Tooltip } from "recharts";


const AboutSection = () => {

  const anoAtual = new Date().getFullYear();

  const studyYears = anoAtual - 2019;
  const workYears = anoAtual - 2022;

  return (
    <section id="about" className='relative z-10 w-full h-screen flex flex-col items-center justify-center snap-center'>


        <div className='flex flex-row w-[83.76rem] h-[8.32rem] lg:w-[104.7rem] lg:h-[10.4rem] 2xl:w-[119rem] 2xl:h-[11.8rem] mb-8 gap-4 items-center justify-center'>

          <div className='flex flex-col h-full w-[6rem] lg:w-[12rem] 2xl:w-[17rem] text-center justify-center items-center bg-stone-100 rounded-lg shadow-lg shadow-black/50'>
              <p className='bebas-neue-regular text-4xl lg:text-6xl text-gray-500'>{studyYears} +</p>
              <p className='Oswald text-sm lg:text-md 2xl:text-2xl px-4 text-gray-500'> Years studying software engineering</p>
          </div>
          <div className='flex flex-col h-full w-[6rem] lg:w-[12rem] 2xl:w-[17rem] text-center justify-center items-center bg-stone-100 rounded-lg shadow-lg shadow-black/50'>
              <p className='bebas-neue-regular text-4xl lg:text-6xl text-gray-500'>{workYears} +</p>
              <p className='Oswald text-sm lg:text-md 2xl:text-2xl px-4 text-gray-500'> Years working experience in tech</p>
          </div>
          <div className='flex flex-col h-full w-[6rem] lg:w-[12rem] 2xl:w-[17rem] text-center justify-center items-center bg-stone-100 rounded-lg shadow-lg shadow-black/50'>
              <p className='bebas-neue-regular text-4xl lg:text-6xl text-gray-500'>3</p>
              <p className='Oswald text-sm lg:text-md 2xl:text-2xl px-4 text-gray-500'>Different countries worked in</p>
          </div>
          <div className='flex flex-col h-full w-[6rem] lg:w-[12rem] 2xl:w-[17rem] text-center justify-center items-center bg-stone-100 rounded-lg shadow-lg shadow-black/50'>
            <img className='object-scale-down h-1/5 lg:h-2/5' src="/about/diploma.svg" alt="" />
              <p className='Oswald text-sm lg:text-md 2xl:text-2xl px-4 text-gray-500'>Bachelor's degree in Information Systems</p>
          </div>

        </div>

        <div className='relative z-10 flex flex-row justify-center items-center mt-8 w-[33.32rem] h-[16.52rem] lg:w-[47.6rem] lg:h-[23.6rem] 2xl:w-[59.5rem] 2xl:h-[29.5rem]'>

          <div
            tabIndex="0"
            className='absolute w-[10.24rem] h-[16rem] lg:w-[12.8rem] lg:h-[20rem] 2xl:w-[16rem] 2xl:h-[25rem] flex justify-center items-center left-0 -bottom-5 -rotate-z-15  bg-gray-100 shadow-sm shadow-black/30 text-center rounded-md hover:mb-12
            focus:z-20 focus:left-auto focus:bottom-auto focus:rotate-z-0 focus:shadow-2xl focus:shadow-black/50'
          >
            <div className='flex flex-col h-[95%] w-[90%] justify-center gap-2 items-center border-2 border-gray-500 rounded-md'>
              <div className='flex items-center justify-center w-full h-2/4 gap-2'>
                <img className='object-scale-down w-[35%]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" />
                <img className='object-scale-down w-[35%]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" />
              </div>

              <div className='flex w-full h-2/4'>
                  <p className='Oswald text-xs lg:text-sm 2xl:text-md px-4 text-gray-500'>I have experience in designing and maintaining relational databases, and MongoDB for non-relational databases.</p>
              </div>

              
            </div>
          </div>

          <div
            tabIndex="0"
            className='absolute w-[10.24rem] h-[16rem] lg:w-[12.8rem] lg:h-[20rem] 2xl:w-[16rem] 2xl:h-[25rem] flex justify-center items-center left-22.5 lg:left-40 bottom-2.5 -rotate-z-5 bg-gray-100 shadow-sm shadow-black/30 text-center rounded-md hover:mb-12
            focus:z-20 focus:left-auto focus:bottom-auto focus:rotate-z-0 focus:shadow-2xl focus:shadow-black/50'
          >
            <div className='flex flex-col h-[95%] w-[90%] justify-center gap-2 items-center border-2 border-gray-500 rounded-md'>

              <div className='flex items-center justify-center w-full h-2/4'>
                <img className='object-scale-down w-[35%]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />
              </div>

              <div className='flex w-full h-2/4'>
                  <p className='Oswald text-xs lg:text-sm 2xl:text-md px-4 text-gray-500'>AWS is the cloud computing platform I’ve had the most experience with.</p>
              </div>
              
        
            </div>
            
          
          </div>

          <div
            tabIndex="0"
            className='absolute w-[10.24rem] h-[16rem] lg:w-[12.8rem] lg:h-[20rem] 2xl:w-[16rem] 2xl:h-[25rem] flex justify-center items-center bottom-5  bg-gray-100 shadow-sm shadow-black/30 text-center rounded-md hover:mb-12
            focus:z-20 focus:left-auto focus:bottom-auto focus:rotate-z-0 focus:shadow-2xl focus:shadow-black/50'
          >
            <div className='flex flex-col h-[95%] w-[90%] justify-center gap-2 items-center border-2 border-gray-500 rounded-md'>

              <div className='flex items-center justify-center w-full h-2/4'>
                <img className='object-scale-down w-[35%]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
              </div>

              <div className='flex w-full h-2/4'>
                  <p className='Oswald text-xs lg:text-sm 2xl:text-md px-4 text-gray-500'>I usually use JavaScript for front-end development in my projects, most often together with React and Tailwind CSS.</p>
              </div>
              
        
            </div>
          </div>

          <div
            tabIndex="0"
            className='absolute w-[10.24rem] h-[16rem] lg:w-[12.8rem] lg:h-[20rem] 2xl:w-[16rem] 2xl:h-[25rem] flex justify-center items-center right-22.5 lg:right-40 bottom-2.5 rotate-z-5 bg-gray-100 shadow-sm shadow-black/30 text-center rounded-md hover:mb-12
            focus:z-20 focus:right-auto focus:bottom-auto focus:rotate-z-0 focus:shadow-2xl focus:shadow-black/50'
          >
            <div className='flex flex-col h-[95%] w-[90%] justify-center gap-2 items-center border-2 border-gray-500 rounded-md'>

              <div className='flex items-center justify-center w-full h-2/4'>
                <img className='object-scale-down w-[35%]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" />
                <img className='object-scale-down w-[35%]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg" />
              </div>

              <div className='flex w-full h-2/4'>
                  <p className='Oswald text-xs lg:text-sm 2xl:text-md px-4 text-gray-500'>Python and Go are my favorite languages for developing scripts, APIs, and back-end systems.</p>
              </div>

            
            </div>




          </div>

          <div
            tabIndex="0"
            className='absolute w-[10.24rem] h-[16rem] lg:w-[12.8rem] lg:h-[20rem] 2xl:w-[16rem] 2xl:h-[25rem] flex justify-center items-center right-0 -bottom-5  rotate-z-15 bg-gray-100 shadow-sm shadow-black/30 text-center rounded-md hover:mb-12
            focus:z-20 focus:right-auto focus:bottom-auto focus:rotate-z-0 focus:shadow-4xl focus:shadow-black/50'
          >
            
            <div className='flex flex-col h-[95%] w-[90%] justify-center gap-2 items-center border-2 border-gray-500 rounded-md'>

              <div className='flex items-center justify-center w-full h-2/4 gap-4'>
                <img className='object-scale-down w-[35%]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg" />
                <img className='object-scale-down w-[35%]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original-wordmark.svg" />
              </div>

              <div className='flex w-full h-2/4'>
                  <p className='Oswald text-xs lg:text-sm 2xl:text-md px-4 text-gray-500'>I use Terraform and Docker/Kubernetes to apply cloud engineering concepts in my projects.</p>
              </div>

              
            </div>
          </div>

        </div>


         <div className='absolute hidden 2xl:flex rotate-x-30 rotate-z-20  -bottom-65 -left-40 w-[46rem] h-[32rem] rounded-2xl border border-stone-500  p-12'>

          <div className='relative h-full w-full flex flex-col justify-center items-center bg-gray-50 rounded-2xl shadow-xl shadow-black/50'>
              <img className='h-2/5 -rotate-z-20 object-scale-down' src="/gopng.png" alt="" />
          </div>
        </div>
      
        
    </section>
  )
}

export default AboutSection