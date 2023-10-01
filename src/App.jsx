import { createBrowserRouter, RouterProvider } from "react-router-dom"
// pages 
import Home from "./pages/Home"
import HomeLayout from "./pages/HomeLayout"
import Contacts from "./pages/Contacts"
import Projects from "./pages/Projects"
import Project from "./pages/Project"

function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <HomeLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "contacts",
          element: <Contacts />,
        },
        {
          path: "projects",
          element: <Projects/>,
        },
        {
          path: "projects/:id",
          element: <Project/>
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider  router={routes}/>
    </>
  )
}

export default App
