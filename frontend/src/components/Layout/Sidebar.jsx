import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
   
 
<div>
  <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
    <div className="mb-2 p-4">
      <h5 className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-gray-900">Dashboard</h5>
    </div>
    <nav className="flex flex-col gap-1 min-w-[240px] p-2 font-sans text-base font-normal text-gray-700">
     
      
      <div role="button" tabIndex={0} className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
     <Link  to="/admin/dashboard/create-categories" >Create categories</Link> <div className="grid place-items-center ml-auto justify-self-end">
          
        </div>
      </div>

      <div role="button" tabIndex={0} className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
     <Link  to="/admin/dashboard/categories" >All Categories</Link> <div className="grid place-items-center ml-auto justify-self-end">
          
        </div>
      </div>

     
      
      
     
    </nav>
  </div>
  
</div>

    
    </>
   
 
  )
}

export default Sidebar
