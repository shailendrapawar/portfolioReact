import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,Routes,Route,createRoutesFromElements, RouterProvider} from "react-router-dom";
import './index.css'
import Layout from './Layout.jsx'

import Landing from './components/landing page/Landing.jsx';
import ContactPage from './components/contact/ContactPage.jsx';

const myRouter=createBrowserRouter(
  createRoutesFromElements(
    
      <Route path='/' element={<Layout/>}>
         <Route path='' element={<Landing/>}> </Route>
         <Route path='/contact' element={<ContactPage/>}> </Route>
      </Route>
   
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={myRouter}></RouterProvider>
  </React.StrictMode>,
)
