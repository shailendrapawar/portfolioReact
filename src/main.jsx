import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,Route,createRoutesFromElements, RouterProvider} from "react-router-dom";
import './index.css'
import Layout from './Layout.jsx'

import ContactPage from './components/contact/ContactPage.jsx';
import Home from './components/home/Home.jsx';
import Projects from './components/projects/Projects.jsx';

const myRouter=createBrowserRouter(
  createRoutesFromElements(
    
      <Route path='/' element={<Layout/>}>

         <Route path='' element={<Home/>} ></Route>
         <Route path='/projects' element={<Projects/>} ></Route>
         <Route path='/contact' element={<ContactPage/>}></Route>

      </Route>
   
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={myRouter}></RouterProvider>
  </React.StrictMode>,
)
