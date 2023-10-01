import vk from ".././assets/vk.svg"
import instagram from ".././assets/instagram.svg"
import twitter from ".././assets/twitter.svg"
import linkedIn from ".././assets/linkedIn.svg"
import gitHub from ".././assets/gitHub.svg"


function Footer() {
   return (
      <footer className="pt-10 pb-7 sm:mt-auto sm:pt-16 sm:pb-12 text-white bg-blackpure ">
         <div className="align-items">
            <div className="flex flex-col gap-y-5 sm:gap-y-7 items-center">
               <ul className="flex  items-center gap-x-5 sm:gap-y-7">
                  <li className="w-7">
                     <a href="#!">
                        <img src={vk} alt="Link" />
                     </a>
                  </li>
                  <li className="w-7">
                     <a href="#!">
                        <img src={instagram} alt="Link" />
                     </a>
                  </li>
                  <li className="w-7">
                     <a href="#!">
                        <img src={twitter} alt="Link" />
                     </a>
                  </li>
                  <li className="w-7">
                     <a href="https://github.com/Muhammadali06dev/">
                        <img src={gitHub} alt="Link" />
                     </a>
                  </li>
                  <li className="w-7">
                     <a href="#!">
                        <img src={linkedIn} alt="Link" />
                     </a>
                  </li>
               </ul>
               <div className="font-base">
                  <p className="mt-2">© 2022 frontend-dev.com</p>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default Footer