import React from 'react'
import { useState } from 'react' 
import axios from "axios"
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../context/Auth.jsx'

const Login = () => {

  const [userName,setUserName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate=useNavigate()


  const {auth,AuthSet}=useAuth()



  const handleSubmit=async(e)=>{
    e.preventDefault()
  
  try {
    
    const {data}= await axios.post(`${import.meta.env.VITE_API}/api/user/login`,{userName,email,password})
    console.log(data)
    if(data){
      alert("User logged in  successfully")
    }
    console.log("user")
    console.log(data?.data.user.userName)
    console.log(data.data.accessToken)

    AuthSet( data?.data.user.userName,data.data.accessToken)
    console.log(auth)
    navigate("/details")
    
    
  } catch (error) {
    console.log(error)
    
    
    
  }

  }




  return (
   
    
<div>
  <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Login to your account</h2>

<div>

<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
 
  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form  onSubmit={handleSubmit}  className="space-y-6" >
     
        
        <div className="mt-2 font-serif   ">
          <input id="username" name="userName" value={userName}  onChange={(e)=>setUserName(e.target.value)}  type="text"  placeholder='Username' required className="text-center  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>

        <div className="mt-2 ">
          <input id="email" name="email" onChange={(e)=>setEmail(e.target.value)}  type="email" value={email}  autoComplete="email" placeholder='Email address' required className="text-center  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
        

        <div className="mt-2 ">
        
          <input id="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} type="password" autoComplete="current-password" placeholder='Password' required className="   text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
       


      
  
      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>
     

    <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900"></label>
            <div className="text-sm">
              <Link to="/forgot-password" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</Link>
            </div>
          </div>

    
  </div>
</div>

      
    </div>
 








    </div>
    
  </div>
</div>



  )
}

export default Login
