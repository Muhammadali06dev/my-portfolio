import { Outlet } from "react-router-dom"

function HomeLayout() {
   return (
      <>
         <header></header>
         <main>
            <Outlet />
         </main>
         <footer></footer>
      </>
   )
}

export default HomeLayout