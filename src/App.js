
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './component/Home';
import About from './component/About';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Resume from './component/Resume';

function App() {

  // Router 
  const routes = [
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/about",
      element: <About/>,
    },
    {
      path: "/projects",
      element: <Projects/>,
    },
    {
      path: "/contact",
      element: <Contact/>,
    },
    {
      path: "/resume",
      element: <Resume/>,
    }
  ]
  const router = createBrowserRouter(routes)
  return (
    <>
    {/* <Navbar /> */}
    <RouterProvider router={router}/>
    {/* <Home /> */}
    {/* <About /> */}
    {/* <Projects/> */}
    {/* <Contact /> */}
    </>
  );
}

export default App;
