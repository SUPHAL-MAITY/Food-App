import React from 'react'
import { useState,useEffect } from 'react' 
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const UpdateUser = () => {
    const [userName,setUserName]=useState("")
    const [phone,setPhone]=useState("")
    const [address,setAddress]=useState("")
    const [usertype,setUsertype]=useState("")
    const navigate=useNavigate()


   
    useEffect(()=>{

        getUserDetails()    
       
        },[])  



    const getUserDetails=async()=>{
        try {
          
          const {data}= await axios.get(`${import.meta.env.VITE_API}/api/userdetails/getuser`)
          setUserName(data.data.userName)
          setAddress(data.data.address[0])
          setPhone(data.data.phone)
          setUsertype(data.data.usertype)
          
          
         
          
          
        } catch (error) {
          console.log(error)
          
          
          
        }
      
       }
      
    


    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
    
            const res= await axios.put(`${import.meta.env.VITE_API}/api/userdetails/update`,{userName,address,phone,usertype})
            if(res){
              alert("User updated successfully")
            }
            navigate("/details")
            
            
          } catch (error) {
            console.log(error)
            
            
            
          }


    }
    





  return (

  <div  className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <h2 className="font-serif mt-10 mb-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Update your profile</h2>

    <div>
  
  <form  onSubmit={handleSubmit}  className="max-w-sm mx-auto">
    <div className="mb-5 font-serif">
      <label htmlFor="userName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Name</label>
      <input type="text" id="userName"  value={userName}  onChange={(e)=>setUserName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Arush" required />
    </div>
    <div className="mb-5 font-serif">
      <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
      <input type="text" id="address"  value={address} onChange={(e)=>setAddress(e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Delhi" required />
    </div>
    <div className="mt-2 font-serif">
    <label htmlFor="usertype" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Type</label>
          <select  id="usertype" name="usertype" onChange={(e)=>setUsertype(e.target.value)}  value={usertype}  type="text"  placeholder='User Type' required className=" text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" > 
                    <option  hidden defaultValue> -- select an option -- </option>
                    <option  value="client">Client</option>
                    <option  value="admin">Admin</option>
                    <option  value="vendor"> Vendor</option>
                    <option  value="driver">Driver</option>
          </select>
        </div>
    <div className="mb-5 font-serif">
      <label htmlFor="userName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone </label>
      <input id="phone" name="phone" value={phone} onChange={(e)=>setPhone(e.target.value)}  type="number"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="90******" required />
    </div>


    
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
  </form>
</div>
</div>
  )
}

export default UpdateUser
