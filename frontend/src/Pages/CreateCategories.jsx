import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateCategories = () => {


    const [title,setTitle]=useState("")
    const [imageUrl,setImageUrl]=useState("")
    const navigate=useNavigate()


  const  handleSubmit=async(e)=>{
    e.preventDefault()
  
  
  try {
    
    const res= await axios.post(`${import.meta.env.VITE_API}/api/category/create`,{title,imageUrl})
    if(res){
      alert(" Category created successfully")
    }
    navigate("/home")
    
    
    
  } catch (error) {
    console.log(error)
    
    
    
  }

  }



  return (
    <div>
  <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      
      <h2 className="font-serif  text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">create categories</h2>

<div>

<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
 
  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form  onSubmit={handleSubmit}  className="space-y-6" >
     
        
        <div className="mt-2 font-serif   ">
          <input id="title" name="title" value={title}  onChange={(e)=>setTitle(e.target.value)}  type="text"  placeholder='title' required className="text-center  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>

        <div className="mt-2 ">
          <input id="imageUrl" name="imageUrl" onChange={(e)=>setImageUrl(e.target.value)}  type="text" value={imageUrl}   placeholder='Image URL' required className="text-center  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
        

        


      
  
      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create </button>
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

export default CreateCategories
