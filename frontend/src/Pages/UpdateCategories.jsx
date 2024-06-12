import React, { useEffect, useState } from 'react'
import { useLocation,useNavigate} from 'react-router-dom'
import axios from 'axios'

const UpdateCategories = () => {

    const [title,setTitle]=useState("")
    const [imageUrl,setImageUrl]=useState("")
    const [id,setId]=useState("")

    const location=useLocation()
    const navigate=useNavigate()


    const data=location.state




    useEffect(()=>{
      console.log(data.title)
      console.log(data.url)
      setTitle(data.title)
      setImageUrl(data.url)
      setId(data.id)
    },[])


     const  handleSubmit=async(e)=>{
      e.preventDefault()
      try {
        const {data}= await axios.put(`${import.meta.env.VITE_API}/api/category/update/${id}`,{title,imageUrl})
        if(data){
          alert("Category has been updated")
        }
        navigate("/admin/dashboard/categories")

        
       
      } catch (error) {
        console.log(error)
        
      }
    


  }



  return (

    
     <div>
  <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      
      <h2 className="font-serif  text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Update categories</h2>

<div>

<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
 
  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form  onSubmit={handleSubmit}  className="space-y-6" >
     
        
        <div className="mt-2 font-serif   ">
          <input id="title" name="title" value={title}  onChange={(e)=>setTitle(e.target.value)}  type="text"  placeholder='title' required className="text-center  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>

        <div className="mt-2 ">
          <input id="imageUrl" name="imageUrl" value={imageUrl} onChange={(e)=>setImageUrl(e.target.value)}  type="text"    placeholder='Image URL' required className="text-center  block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
        

        


      
  
      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Update</button>
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

export default UpdateCategories
