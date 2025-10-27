import { useEffect } from "react";

const ProjectsSection = () => {

    useEffect(() => {
    const cards = document.querySelectorAll(".card-projects"); // observa todos os cards

    const observer = new IntersectionObserver(
        (entries) => {
        entries.forEach((entry) => {
            const card = entry.target;

            if (entry.isIntersecting) {
            card.classList.remove("translate-y-2.5", "-translate-x-1", "shadow-none");
            card.classList.add("translate-y-0", "translate-x-0", "shadow-xl");
            } else {
            card.classList.remove("translate-y-0", "translate-x-0", "shadow-xl");
            card.classList.add("translate-y-2.5", "-translate-x-1", "shadow-none");
            }
        });
        },
        { threshold: 0.3 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
    }, []);
        

  return (
    <section id="projects" className='relative w-full h-screen flex flex-col gap-8 justify-start md:justify-center snap-center'>

        <div className='relative hidden md:flex flex-col  z-10 w-[31.7rem] h-[31.7rem] xl:w-[30.35rem] xl:h-[37.35rem] 2xl:w-[41.5rem] 2xl:h-[41.5rem] left-0 justify-start md:justify-center'>
            <p className='Oswald text-2xl xl:text-3xl 2xl:text-4xl px-10 py-4 mb-0 lg:mb-8'>Take a look at my projects and explore the details of it in my projects page.</p>
            <p className='hidden md:flex open-sans-regular text-lg px-10 pb-4'>Visit my projects page to learn more about the challenges and technologies I’ve worked with. There you’ll find more details about the concepts, planning stages, and development processes of the projects I’ve been involved in.</p>
            <button className='bg-transparent hover:bg-sky-600 font-semibold text-sky-600 hover:text-white  w-2/4 mx-10 my-4 p-2 border border-sky-600 hover:border-transparent rounded' onClick={() => window.location.href='/projects'}>Click here to visit the projects page.</button>
        </div>

        <div className='absolute hidden md:flex rotate-x-30 rotate-z-20 -right-180 lg:-right-100 xl:-right-100 2xl:-right-60 -bottom-35 w-[68.85rem] h-[53.55rem] xl:w-[81rem] xl:h-[63rem] 2xl:w-[90rem] 2xl:h-[70rem] rounded-2xl border border-stone-500  p-12 '>
        <div className='card-projects transition-all duration-800 ease-out relative h-full w-full flex flex-col justify-center items-center bg-stone-100 rounded-2xl shadow-black/50'>
            
            <div className='flex w-full h-[10%] justify-center items-center'>
                    <p className='pt-10  bebas-neue-regular mb-8 text-gray-300 text-6xl'>PROJECTS</p>
            </div>
            

            <div className='flex flex-col  h-[90%] w-full p-10'>

                <div className='flex flex-row h-2/4 w-full gap-8 p-10'>

                        <div className='card-projects transition-all delay-800 duration-700 ease-out relative h-full w-2/4 bg-sky-800 rounded-lg shadow-black/50'>
                                    
                            <div className='absolute w-full h-full flex justify-center items-center rounded-lg hover:bg-black/60 opacity-0 hover:opacity-100 transition-opacity'>
                                <span className='open-sans-regular text-lg text-white text-center p-6'></span></div>

                        </div>

                        <div className='card-projects transition-all delay-800 duration-700 ease-out relative h-full w-2/4 bg-sky-800 rounded-lg shadow-black/50'>
                            
                                <img className='absolute w-full h-full object-cover rounded-lg' src="/projects/oversees.png" alt="" />

                                <div className='absolute w-full h-full flex justify-center items-center rounded-lg hover:bg-black/60 opacity-0 hover:opacity-100 transition-opacity'>
                                <span className='open-sans-regular text-lg text-white text-center p-6'>Desktop application for advanced hardware and system processes monitoring.</span></div>
            
                        </div>

                </div>

                <div className='flex flex-row h-2/4 w-full gap-8 p-10'>

                            <div className='card-projects transition-all delay-800 duration-700 ease-out relative h-full w-2/4 bg-sky-800 rounded-lg shadow-black/30'>

                                <img className='absolute w-full h-full object-cover rounded-lg' src="/projects/usedlanguages.png" alt="" />

                                <div className='absolute w-full h-full flex justify-center items-center rounded-lg hover:bg-black/60 opacity-0 hover:opacity-100 transition-opacity'>
                                <span className='open-sans-regular text-lg text-white text-center p-6'>Customized GitHub Used Languages dynamic image to use in your README profile.</span></div>

                            </div>

                            <div className='card-projects transition-all delay-800 duration-700 ease-out relative h-full w-2/4 bg-sky-800 rounded-lg shadow-black/30'>

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