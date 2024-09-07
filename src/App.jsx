import { RouterProvider, createBrowserRouter } from "react-router-dom"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
// import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
// import Navbar from "./components/Navbar/Navbar"
import Portfolio from "./components/Portfolio/Portfolio"
import Layout from "./components/Layout/Layout"
import NotFound from "./components/NotFound"


export default function App() {

  let router = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'portfolio', element: <Portfolio /> },
        { path: 'contact', element: <Contact /> },
        { path: '*', element: <NotFound /> },
      ]
    }
  ])

  return <>
    <RouterProvider router={router}></RouterProvider>
    {/* <h2>App Component</h2> */}
    {/* <Home /> */}
    {/* <About /> */}
    {/* <Portfolio /> */}
    {/* <Contact /> */}
  </>
}