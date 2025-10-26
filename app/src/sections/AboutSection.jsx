import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Sector, Tooltip } from "recharts";


const AboutSection = () => {

  const data = [
    { name: "Python", value: 3, color: "#1F4E79" },       // Azul escuro
    { name: "JavaScript", value: 2, color: "#BFB13A" },   // Amarelo escuro
    { name: "Go", value: 1, color: "#007A99" },           // Azul petróleo
    { name: "AWS", value: 3, color: "#B46900" },          // Laranja escuro
    { name: "Kubernetes", value: 2, color: "#2B3A3F" },  // Cinza azulado escuro
    { name: "Terraform", value: 2, color: "#5C2E8A" },   // Roxo escuro
    { name: "Relational DB", value: 2, color: "#A76A00" },// Laranja queimado
    { name: "MongoDB", value: 1, color: "#2E6C30" },     // Verde escuro
  ];

  const anoAtual = new Date().getFullYear();

  const studyYears = anoAtual - 2019;
  const workYears = anoAtual - 2022;

  return (
    <section id="about" className='relative z-10 w-full h-screen flex flex-col items-center justify-center snap-center'>


        <div className='flex flex-row w-full h-1/5 mb-8 gap-4 items-center justify-center'>

          <div className='flex flex-col h-full w-1/7 text-center justify-center items-center bg-stone-100 rounded-lg shadow-lg shadow-black/50'>
              <p className='bebas-neue-regular text-6xl text-gray-500'>{studyYears} +</p>
              <p className='Oswald text-2xl px-4 text-gray-500'> Years studying software engineering</p>
          </div>
          <div className='flex flex-col h-full w-1/7 text-center justify-center items-center bg-stone-100 rounded-lg shadow-lg shadow-black/50'>
              <p className='bebas-neue-regular text-6xl text-gray-500'>{workYears} +</p>
              <p className='Oswald text-2xl px-4 text-gray-500'> Years working experience in tech</p>
          </div>
          <div className='flex flex-col h-full w-1/7 text-center justify-center items-center bg-stone-100 rounded-lg shadow-lg shadow-black/50'>
              <p className='bebas-neue-regular text-6xl text-gray-500'>3</p>
              <p className='Oswald text-2xl px-4 text-gray-500'>Different countries worked in</p>
          </div>
          <div className='flex flex-col h-full w-1/7 text-center justify-center items-center bg-stone-100 rounded-lg shadow-lg shadow-black/50'>
            <img className='object-scale-down h-2/5' src="/about/diploma.svg" alt="" />
              <p className='Oswald text-2xl px-4 text-gray-500'>Bachelor's degree in Information Systems</p>
          </div>

        </div>

        <div className='relative z-10 flex flex-row justify-center items-center mt-8 w-2/4 h-2/4'>

          <div
            tabIndex="0"
            className='absolute w-[16rem] h-[25rem] flex justify-center items-center left-0 -bottom-5 -rotate-z-15  bg-gray-100 shadow-sm shadow-black/30 text-center rounded-md hover:mb-12
            focus:z-20 focus:left-auto focus:bottom-auto focus:rotate-z-0 focus:shadow-2xl focus:shadow-black/50'
          >
            <div className='flex flex-col h-[95%] w-[90%] justify-center gap-2 items-center border-2 border-gray-500 rounded-md'>
              <div className='flex items-center justify-center w-full h-2/4 gap-2'>
                <img className='object-scale-down w-[35%]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" />
                <img className='object-scale-down w-[35%]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" />
              </div>

              <div className='flex w-full h-2/4'>
                  <p className='Oswald text-md px-4 text-gray-500'>I have experience in designing and maintaining relational databases, and MongoDB for non-relational databases.</p>
              </div>

              
            </div>
          </div>
          <div
            tabIndex="0"
            className='absolute w-[16rem] h-[25rem] flex justify-center items-center left-40 bottom-2.5 -rotate-z-5 bg-gray-100 shadow-sm shadow-black/30 text-center rounded-md hover:mb-12
            focus:z-20 focus:left-auto focus:bottom-auto focus:rotate-z-0 focus:shadow-2xl focus:shadow-black/50'
          >
            <div className='flex flex-col h-[95%] w-[90%] justify-center gap-2 items-center border-2 border-gray-500 rounded-md'>

              <div className='flex items-center justify-center w-full h-2/4'>
                <img className='object-scale-down w-[35%]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />
              </div>

              <div className='flex w-full h-2/4'>
                  <p className='Oswald text-md px-4 text-gray-500'>AWS is the cloud computing platform I’ve had the most experience with.</p>
              </div>
              
        
            </div>
            
          
          </div>
          <div
            tabIndex="0"
            className='absolute w-[16rem] h-[25rem] flex justify-center items-center bottom-5  bg-gray-100 shadow-sm shadow-black/30 text-center rounded-md hover:mb-12
            focus:z-20 focus:left-auto focus:bottom-auto focus:rotate-z-0 focus:shadow-2xl focus:shadow-black/50'
          >
            <div className='flex flex-col h-[95%] w-[90%] justify-center gap-2 items-center border-2 border-gray-500 rounded-md'>

              <div className='flex items-center justify-center w-full h-2/4'>
                <img className='object-scale-down w-[35%]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
              </div>

              <div className='flex w-full h-2/4'>
                  <p className='Oswald text-md px-4 text-gray-500'>I usually use JavaScript for front-end development in my projects, most often together with React and Tailwind CSS.</p>
              </div>
              
        
            </div>
          </div>
          <div
            tabIndex="0"
            className='absolute w-[16rem] h-[25rem] flex justify-center items-center right-40 bottom-2.5 rotate-z-5 bg-gray-100 shadow-sm shadow-black/30 text-center rounded-md hover:mb-12
            focus:z-20 focus:right-auto focus:bottom-auto focus:rotate-z-0 focus:shadow-2xl focus:shadow-black/50'
          >
            <div className='flex flex-col h-[95%] w-[90%] justify-center gap-2 items-center border-2 border-gray-500 rounded-md'>

              <div className='flex items-center justify-center w-full h-2/4'>
                <img className='object-scale-down w-[35%]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" />
                <img className='object-scale-down w-[35%]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg" />
              </div>

              <div className='flex w-full h-2/4'>
                  <p className='Oswald text-md px-4 text-gray-500'>Python and Go are my favorite languages for developing scripts, APIs, and back-end systems.</p>
              </div>

            
            </div>




          </div>
          <div
            tabIndex="0"
            className='absolute w-[16rem] h-[25rem] flex justify-center items-center right-0 -bottom-5  rotate-z-15 bg-gray-100 shadow-sm shadow-black/30 text-center rounded-md hover:mb-12
            focus:z-20 focus:right-auto focus:bottom-auto focus:rotate-z-0 focus:shadow-4xl focus:shadow-black/50'
          >
            
            <div className='flex flex-col h-[95%] w-[90%] justify-center gap-2 items-center border-2 border-gray-500 rounded-md'>

              <div className='flex items-center justify-center w-full h-2/4 gap-4'>
                <img className='object-scale-down w-[35%]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg" />
                <img className='object-scale-down w-[35%]' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original-wordmark.svg" />
              </div>

              <div className='flex w-full h-2/4'>
                  <p className='Oswald text-md px-4 text-gray-500'>I use Terraform and Docker/Kubernetes to apply cloud engineering concepts in my projects.</p>
              </div>

              
            </div>
          </div>

        </div>


{/* 
        <p className='bebas-neue-regular mb-2 lg:mb-8 text-gray-300 text-6xl'>About</p>
        
        <div className='flex flex-col lg:flex-row z-10 h-[85%] lg:h-[65%] w-[90%] lg:w-3/4 gap-4'>

          <div className='h-2/4 lg:h-full w-full lg:w-2/4 bg-gray-50 rounded-lg shadow-sm shadow-black/30'>
              <div className='open-sans-regular flex flex-col h-full w-full p-6 lg:p-12 text-sm lg:text-xl gap-8 justify-center overflow-y-scroll'>
                  <p className=' mt-24 lg:mt-0'>Hi, I'm Caio 👋</p>
                  <p className='text-justify '>I'm a Software Engineer with a Bachelor's degree in Information Systems. <span className='text-sky-700'>Over the past six years</span>, I've been deepening my knowledge in all aspects of <span className='text-sky-900'>software engineering.</span></p>
                  <p className='text-justify'>I've worked with <span className='text-sky-700'>companies around the world</span>, starting as a developer and later taking on roles as a TSE, where I honed my problem-solving and communication skills.</p>
                  <p className='text-justify'>Currently, I'm focused on studying and applying concepts related to <span className='text-sky-900'>cloud engineering and software architecture</span>, aiming to build scalable and efficient systems.</p>
              </div>
          </div>

          <div className='flex flex-col h-2/4 lg:h-full w-full lg:w-2/4 items-center justify-center bg-gray-50 rounded-lg shadow-sm shadow-black/30'>


            <div className='relative w-[50%] aspect-square '>
              
              <div className="absolute z-10 h-full w-full rounded-full">
              <ResponsiveContainer width="100%" height="100%" z-index="20">
                <PieChart>
                  <Pie 
                    data={data} 
                    innerRadius="90%" 
                    outerRadius="100%" 
                    dataKey="value" 
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              </div>

              <div className='flex z-0 h-full w-full bg-gray-50 rounded-full justify-center items-center'>
                <img className='flex h-[90%] z-0 object-cover  border-white border-10  rounded-full' src="/BG-Transparente.gif" alt="About" />
              </div>
              
            </div>

            <div className='flex flex-col z-0 h-[30%] w-full p-4 items-center justify-start text-center open-sans-regular text-sm lg:text-lg'>
              <p>Python · JavaScript · Go</p>
              <p>AWS · Kubernetes · Terraform</p>
              <p>Relational Databases (SQL) . MongoDB</p>
            </div>
            
          </div>

        </div> */}

         <div className='absolute rotate-x-30 rotate-z-20  -bottom-65 -left-40 w-[40%] h-[55%] rounded-2xl border border-stone-500  p-12'>

          <div className='relative h-full w-full flex flex-col justify-center items-center bg-gray-50 rounded-2xl shadow-xl shadow-black/50'>
              <img className='h-2/5 -rotate-z-20 object-scale-down' src="/gopng.png" alt="" />
          </div>
        </div>
      
        
    </section>
  )
}

export default AboutSection