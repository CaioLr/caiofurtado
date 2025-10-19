import React, { useState } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Sector, Tooltip } from "recharts";


const AboutSection = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(null);
  };

  const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, name } = props;
    const expandedOuterRadius = outerRadius + 5;
    
    return (
      <g>
        {/* Fatia ampliada */}
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={expandedOuterRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
          alt="Expanded sector"
         
        />
      </g>
    );
  };


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



  return (
    <section id="about" className=' w-full h-screen flex flex-col items-center justify-center snap-center'>

        <p className='bebas-neue-regular mb-8 text-gray-300 text-6xl'>About</p>
        
        <div className='flex flex-row h-[65%] w-3/4 gap-4'>

          <div className='h-full w-2/4 bg-gray-50 rounded-lg shadow-md shadow-black/30'>
              <div className='open-sans-regular flex flex-col h-full w-full p-12 text-xl gap-8 justify-center'>
                  <p>Hi, I'm Caio 👋</p>
                  <p>I'm a Software Engineer with a Bachelor's degree in Information Systems. <span className='text-indigo-700'>Over the past six years</span>, I've been deepening my knowledge in all aspects of <span className='text-sky-700'>software engineering.</span></p>
                  <p>I've worked with <span className='text-indigo-700'>companies around the world</span>, starting as a developer and later taking on roles as a TSE, where I honed my problem-solving and communication skills.</p>
                  <p>Currently, I'm focused on studying and applying concepts related to <span className='text-sky-700'>cloud engineering and software architecture</span>, aiming to build scalable and efficient systems.</p>
              </div>
          </div>

          <div className='flex flex-col h-full w-2/4 items-center justify-center bg-gray-50 rounded-lg shadow-md shadow-black/30'>


            <div className='relative w-[50%] aspect-square '>
              
              <div className="absolute z-10 h-full w-full rounded-full">
              <ResponsiveContainer width="100%" height="100%" z-index="20">
                <PieChart>
                  <Pie 
                    data={data} 
                    innerRadius="90%" 
                    outerRadius="100%" 
                    dataKey="value" 
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
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

            <div className='flex flex-col z-0 h-[30%] w-full p-4 items-center justify-start text-center open-sans-regular text-lg'>
              <p>Python · JavaScript · Go</p>
              <p>AWS · Kubernetes · Terraform</p>
              <p>Relational Databases (SQL) . MongoDB</p>
            </div>
            
          </div>

        </div>
      
        
    </section>
  )
}

export default AboutSection