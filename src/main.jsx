import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout';
import Home from './Pages/HomePage/Home/Home';
import AboutHome from './Pages/AboutPage/AboutHome/AboutHome';
import MenuHome from './Pages/MenuPage/MenuHome/MenuHome';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element : <Home></Home>
      },
      {
        path: "/about",
        element : <AboutHome></AboutHome>
      },
      {
        path: "/menu",
        element : <MenuHome></MenuHome>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='container max-w-full bg-[#090C0F]'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
