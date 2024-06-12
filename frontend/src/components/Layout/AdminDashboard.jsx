import React from 'react'
import Sidebar from './Sidebar.jsx'

const AdminDashboard = () => {
  return (
    <div className='grid grid-cols-3  '>
        <Sidebar/>
        <div className='mt-10 text-red-500 text-4xl font-serif italic hover:not-italic'>
        <h1>Please click on the Menu</h1>

        </div>
       
        
      
    </div>
  )
}

export default AdminDashboard
