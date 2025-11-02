import { useEffect } from "react";

const ProjectsSection = () => {

        

  return (
    <section id="projects" className='relative flex flex-col items-center justify-center w-full h-screen border-b gap-8'>

      {/* Project Title */}
      <div className="flex">
        <h2 className="bebas-neue-regular text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl text-gray-700 ">Project title</h2>
      </div>

        {/* Projects display */}
        <div className="relative flex flex-col items-center justify-center w-[18rem] h-[36rem]  sm:w-[30rem] sm:h-[40rem] md:w-[42rem] md:h-[31.2rem] lg:w-[54rem] lg:h-[37.44rem] xl:w-[56rem] xl:h-[41.6rem] border-2 rounded-2xl ">

            {/* Header */}
            <div className="absolute flex flex-row items-center justify-start top-0 w-full h-[7%] border-b-2 gap-1 pl-2">
                <div className="flex h-2/4 aspect-square items-center border-2 rounded-full"></div>
                <div className="flex h-2/4 aspect-square items-center border-2 rounded-full"></div>
                <div className="flex h-2/4 aspect-square items-center border-2 rounded-full"></div>
            </div>

            <div className="h-[40%] w-3/4  md:h-2/4 md:w-3/4 bg-gray-500 mb-4 sm:mb-6 md:mb-8 rounded-lg border border-gray-600">

            </div>

            <div>
              <p className="comic-neue-regular px-4 lg:px-10 text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>

        </div>

        {/* Project page selection */}
        <div className="flex">
          <h2 className="bebas-neue-regular text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl text-gray-700 ">Project title</h2>
        </div>

    </section>
  )
}

export default ProjectsSection