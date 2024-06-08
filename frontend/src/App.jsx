import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { useEffect } from "react"

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

import UserDetails from './Pages/UserDetails.jsx';
import AddRestro from './components/Layout/AddRestro.jsx';
import PageNotFound from './components/Layout/PageNotFound.jsx';
import { AuthProvider } from './context/Auth.jsx';
import Logout from './Pages/Logout.jsx';



function App() {

  const [auth,setAuth]=useState({user:null,token:""})

 

  const AuthSet =(user, token) => {
    setAuth({
      ...auth,
      user: user,
      token: token,
    });
  };

  






  const router=createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='/'  element={<Layout/>} >
             <Route path='login'  element={<Login/>} />
             <Route path='logout'  element={<Logout />} />
             <Route path='home'  element={<Home/>} />
             <Route path='signup'  element={<Signup />} />
             <Route path='forgot-password'  element={<ForgotPwd />} />
             <Route path='details'  element={<UserDetails />} />
             <Route path='add-restaurant'  element={<AddRestro />} />
             <Route path='*' element={<PageNotFound/>}/>


      </Route>


      

   </>

    )
  
  )



  return (
    <>


<AuthProvider value={{auth,AuthSet}} >
   
<RouterProvider router={router} >   
        
    
      

</RouterProvider>  
    
  </AuthProvider>

  
    
     
    </>
  )
}

export default App
