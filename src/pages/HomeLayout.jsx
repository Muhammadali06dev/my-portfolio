import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function HomeLayout() {
   return (
      <>
         <header>
            <Navbar />
         </header>
         <main>
            <Outlet />
         </main>
         <Footer></Footer>
      </>
   )
}

export default HomeLayout