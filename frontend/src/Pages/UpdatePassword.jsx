import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const UpdatePassword = () => {
       const [oldPassword,setOldPassword]=useState("")
       const [newPassword,setNewPassword]=useState("")
       const navigate=useNavigate()




       const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
    
            const res= await axios.put(`${import.meta.env.VITE_API}/api/userdetails/passwordupdate`,{oldPassword,newPassword})
            if(res){
              alert("Password updated successfully")
            }
            navigate("/details")
            
            
          } catch (error) {
            console.log(error)
            
            
            
          }

       }


  return (
   
   <div className='flex min-h-full flex-col justify-center px-6 py-12 lg:px-8'>
    <h2 className="font-serif mt-10 mb-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Update Password</h2>
   
   <div>
      

<form onSubmit={handleSubmit} className="max-w-sm mx-auto">
  
  <div className="mb-5">
    <label htmlFor="oldPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Old password</label>
    <input type="password" id="oldPassword" name="oldPassword" value={oldPassword} onChange={(e)=>setOldPassword(e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>

  <div className="mb-5">
    <label htmlFor="newPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New password</label>
    <input type="password" id="newPassword" name="newPassword" value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>
 
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>


    </div>
    </div>
  )
}

export default UpdatePassword
