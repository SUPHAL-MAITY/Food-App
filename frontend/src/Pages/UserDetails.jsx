import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import useAuth from '../context/Auth'

const UserDetails = () => {

  const {auth}= useAuth()


  const [name,setName]=useState("")

    useEffect(()=>{
    getUserDetails()
    })

const getUserDetails=async()=>{

    try {
        
        axios.defaults.headers.common["Authorization"]="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjVlZmU1ZmIzNWI3NTMzOTQ1NjQ0NWEiLCJ1c2VyTmFtZSI6IkFuaXQiLCJlbWFpbCI6ImFuaXRAZ21haWwuY29tIiwiaWF0IjoxNzE3NjEyOTExLCJleHAiOjE3MTc2OTkzMTF9.LV47q1DxuQH3SWdZcH5lCdY2BoJQzppQAx0rcLhN_Lk"

       const {data} = await axios.get(`${import.meta.env.VITE_API}/api/userdetails/getuser`)
       
     
        
    } catch (error) {
        console.log(error)
    }


}






  return (
    <div>
        <h1>Username:{auth.user}</h1>
      
    </div>
  )
}

export default UserDetails
