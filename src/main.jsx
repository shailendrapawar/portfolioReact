import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,Routes,Route,createRoutesFromElements, RouterProvider} from "react-router-dom";
import './index.css'
import Layout from './Layout.jsx'
import App from './App.jsx'
import Navbar from './components/navbar/Navbar.jsx';

const myRouter=createBrowserRouter(
  createRoutesFromElements(
    
      <Route path='/' element={<Layout/>}>
      
      </Route>
   
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={myRouter}></RouterProvider>
  </React.StrictMode>,
)
