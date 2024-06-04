import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
 
  
} from "react-router-dom";



import './App.css'
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import Signup from "./Pages/Signup.jsx"
import Layout from './components/Layout/Layout.jsx';
import ForgotPwd from './Pages/ForgotPwd.jsx';


function App() {

  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/'  element={<Layout/>} >
             <Route path='login'  element={<Login/>} />
             <Route path='home'  element={<Home/>} />
             <Route path='signup'  element={<Signup />} />
             <Route path='forgot-password'  element={<ForgotPwd />} />
      </Route>
    )
  
  )



  return (
    <>



   
      <RouterProvider router={router} />
    
  

    
    
     
    </>
  )
}

export default App
