import React from 'react'
import { useState } from 'react' 
import axios from "axios"
import { useNavigate } from 'react-router-dom'

import { Link } from 'react-router-dom'


const ForgotPwd = () => {

    
    const [email,setEmail]=useState("")
    const [newPassword,setNewPassword]=useState("")
    const [answer,setAnswer]=useState("")
  
    const navigate = useNavigate()
  
  
   const handleSubmit=async(e)=>{
    e.preventDefault()
    
    
    
    try {
      console.log(email)
      const res= await axios.put(`${import.meta.env.VITE_API}/api/userdetails/forgotpassword`,{email,answer,newPassword})
      if(res){
        alert("New password set  successfully")
      }
      navigate("/login")
      
      
    } catch (error) {
      console.log(error)
      
      
      
    }
   }
  
  



  return (
    <div>
  <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">RESET YOUR PASSWORD</h2>

<div>

<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
 
  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form  onSubmit={handleSubmit}  className="space-y-6" >
     
        
        

        <div className="mt-2 ">
          <input id="email" name="email" onChange={(e)=>setEmail(e.target.value)}  type="email" value={email}  autoComplete="email" placeholder='Email address' required className="text-center  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>

        <div className="mt-2 ">
          <input id="answer" name="answer" onChange={(e)=>setAnswer(e.target.value)}  value={answer} type="text"  placeholder='Who is your favourite cricketer?' required className="text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
        

        <div className="mt-2 ">
        
          <input id="newPassword" name="newPassword" value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} type="password" autoComplete="current-password" placeholder='Set New Password' required className="   text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
       


      
  
      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Change Password</button>
      </div>
    </form>
     

    

    
  </div>
</div>

      
    </div>
 








    </div>
    
  </div>
</div>
  )
}

export default ForgotPwd
