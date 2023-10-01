

function Contacts() {
   return (
      <main className="py-16">
         <div className="align-items">
            <h1 className="mb-8 text-4xl sm:mb-16 sm:text-6xl font-bold text-white text-center">Contacts</h1>

            <ul className="mx-auto max-w-xl flex flex-col items-center gap-y-5 sm:gap-y-10 text-center">
               <li className="text-base sm:text-lg  ">
                  <h2 className="mb-2.5 text-3xl font-bold">Location</h2>
                  <p>Uzbekistan, Fergana</p>
               </li>
               <li className="text-base sm:text-lg  ">
                  <h2 className="mb-2.5 text-3xl font-bold">Telegram / WhatsApp</h2>
                  <p>
                     <a className='text-purple' href="tel:+998996644079">+998 996644079</a>
                  </p>
               </li>
               <li className="text-base sm:text-lg  ">
                  <h2 className="mb-2.5 text-3xl font-bold">Email</h2>
                  <p>
                     <a className='text-purple' href="mailto:muhammadalideveloper2006@gmail.com">
                        muhammadalideveloper2006@gmail.com
                     </a>
                  </p>
               </li>
            </ul>
         </div>
      </main>
   )
}

export default Contacts