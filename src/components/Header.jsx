import React from 'react'
import Resume from "../assets/Resume.png"

function Header() {
   return (
      <div className=" header py-10 min-h-screen sm:min-h-[695px] flex justify-center items-center bg-color bg-blackpure text-white text-center">
         <div className="px-4 max-w-2xl">
            <h1 className="text-3xl sm:text-4xl font-bold">
               <strong className='text-4xl sm:text-6xl font-bold'>
                  Hi, my name is <em className='not-italic text-purple'>Muhammadali</em>
               </strong>
               <br />a frontend developer
            </h1>
            <div className="mb-10 text-lg  ">
               <p className='mt-2'>with passion for learning and creating.</p>
            </div>
            <a href={Resume} download="Resume" className="inline-block px-7 py-3 rounded-md bg-purple text-white text-base font-medium trasnition duration-200 hover:opacity-80 active:relative active:top-px">
               Download CV
            </a>
         </div>
      </div>
   )
}

export default Header