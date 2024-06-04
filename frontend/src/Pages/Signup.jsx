import React from 'react'
import { useState } from 'react' 
import axios from "axios"
import { useNavigate } from 'react-router-dom'




const Signup = () => {


  

 

  const [userName,setUserName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [phone,setPhone]=useState("")
  const [address,setAddress]=useState("")
  const [answer,setAnswer]=useState("")
  const [usertype,setUsertype]=useState("")
  const [profile,setProfile]=useState("")


  const navigate = useNavigate()


 const handleSubmit=async(e)=>{
  e.preventDefault()
  
  console.log(import.meta.env.VITE_API)
  try {
    
    const res= await axios.post(`${import.meta.env.VITE_API}/api/user/register`,{userName,email,password,address,phone,usertype,answer,profile})
    if(res){
      alert("User registered successfully")
    }
    navigate("/login")
    
    
  } catch (error) {
    console.log(error)
    
    
    
  }
 }



  return (
    <div>


<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
 
  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form   onSubmit={handleSubmit} className="space-y-6" >
     
        
        <div className="mt-2 font-serif   ">
          <input id="username" name="username" value={userName}  onChange={(e)=>setUserName(e.target.value)}  type="text"  placeholder='Username' required className="text-center  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>

        <div className="mt-2 ">
          <input id="email" name="email" onChange={(e)=>setEmail(e.target.value)}  type="email" value={email}  autoComplete="email" placeholder='Email address' required className="text-center  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
        <div className="mt-2 ">
          <input id="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} type="password" autoComplete="current-password" placeholder='Password' required className="   text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
        <div className="mt-2 ">
          <input id="address" name="address" value={address} onChange={(e)=>setAddress(e.target.value)}  type="text" placeholder='Address' required className="   text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
        <div className="mt-2">
          <input id="phone" name="phone" value={phone} onChange={(e)=>setPhone(e.target.value)}  type="number"  placeholder='Phone Number' required className="   text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
        <div className="mt-2 ">
          <select id="usertype" name="usertype" onChange={(e)=>setUsertype(e.target.value)}  value={usertype}  type="text"  placeholder='User Type' required className=" text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" > 
                    <option  hidden defaultValue> -- select an option -- </option>
                    <option  value="client">Client</option>
                    <option  value="admin">Admin</option>
                    <option  value="vendor"> Vendor</option>
                    <option  value="driver">Driver</option>
          </select>
        </div>
        <div className="mt-2 ">
          <input id="profile" name="profile" onChange={(e)=>setProfile(e.target.value)}  value={profile}  type="text"  placeholder='Profile Image Link'  className="   text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
        <div className="mt-2 ">
          <input id="answer" name="answer" onChange={(e)=>setAnswer(e.target.value)}  value={answer} type="text"  placeholder='Who is your favourite cricketer?' required className="text-center block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
        


      
  
      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
      </div>
    </form>
    <p className="mt-10 text-center text-sm text-gray-500">
      Not a member?
      <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
    </p>
  </div>
</div>

      
    </div>
  )
}

export default Signup;
