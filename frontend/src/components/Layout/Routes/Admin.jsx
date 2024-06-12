import React, { useEffect, useState } from 'react'
import useAuth from '../../../context/Auth'
import axios from 'axios'
import { Outlet, useNavigate } from 'react-router-dom'
import NoAccess from '../NoAccess.jsx'



const Admin = () => {

    const {auth,AuthSet}=useAuth()
    const navigate=useNavigate()
    const [data,setData]=useState()

    useEffect(()=>{

        

        const AuthCheck=async()=>{
            
                const {data}= await axios.get(`${import.meta.env.VITE_API}/api/user/admin-auth`)
                setData(data.data)
                console.log("dashboard")
                console.log(data)
                
            }

            console.log(auth)
            if(auth?.token )AuthCheck()
        },[])

  


  return (
     

    <>
    {data?.ok? (
        <Outlet/>
    ):  (
        <NoAccess/>
        
    )}
    
    </>


    
  )
}

export default Admin
