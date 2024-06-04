import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import Home from '../../Pages/Home';


function Layout() {
  const location = useLocation()
 console.log(location)


  return (
    <>
    <Navbar/>

    { location.pathname=="/" ?<Home/>:  <Outlet/>}
    
    <Footer/>
      
    </>
  )
}

export default Layout


