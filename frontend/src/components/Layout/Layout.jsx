import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import Home from '../../Pages/Home';
import { useEffect } from 'react';
import useAuth from '../../context/Auth';



function Layout() {
  const location = useLocation()
  const {auth,AuthSet}=useAuth()


  useEffect(()=>{
    const data=localStorage.getItem("auth")
    if(data){
      const parsedData=JSON.parse(data)
      console.log(parsedData)
      AuthSet(parsedData.user, parsedData.token)
    }
  },[])
  
  // useEffect(() => {
  //   console.log("Auth taken from localstorage:", auth);
  // }, [auth]);



  return (
    <>
    <Navbar/>

    { location.pathname=="/" ?<Home/>:  <Outlet/>}
    
    <Footer/>
      
    </>
  )
}

export default Layout


