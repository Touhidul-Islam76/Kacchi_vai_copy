import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Menu from './Components/Menu/Menu.jsx';
import Offer from './Components/Offer/Offer.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Branches from './Components/Branches/Branches.jsx';
import About from './Components/About/About.jsx';
import Detail from './Components/Detail/Detail.jsx';






const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element:<Home/>
      },
      {
        path:"/menu",
        element:<Menu/>
      },
      {
        path:"/offers",
        element:<Offer/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/branches",
        element:<Branches/>
      },
      {
        path: "/branches/:BranchesId",
        element: <Detail />,
      },
      {
        path:"/about",
        element:<About/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
