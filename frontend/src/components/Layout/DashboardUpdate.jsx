import React from 'react'
import Sidebar from './Sidebar.jsx'
import UpdateCategories from '../../Pages/UpdateCategories.jsx'

const DashboardUpdate = () => {
  return (
    <div className='grid grid-cols-3  '>
           <Sidebar/>
           <UpdateCategories/>
      
    </div>
  )
}

export default DashboardUpdate
