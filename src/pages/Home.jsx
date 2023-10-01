import React from 'react'
import Header from '../components/Header'

function Home() {
   return (
      <div>
         <Header />
         <div className="align-items py-16">
            <ul className="mx-auto max-w-xl flex flex-col items-center gap-y-5  sm:gap-y-10 text-center">
               <li className="text-base sm:text-lg">
                  <h2 className="mb-2.5 text-3xl sm:mb-5 sm:text-4xl font-medium  ">Frontend</h2>
                  <p>
                     JavaScript, ReactJS, Redux,
                     HTML, CSS, NPM, TailwindCSS
                  </p>
               </li>
            </ul>
         </div>

      </div>
   )
}

export default Home