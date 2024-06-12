import React from 'react'
import AllCategories from './AllCategories'
import Sidebar from './Sidebar.jsx'

const DashboardCategories = () => {
  return (
    <div className='grid grid-cols-3  '>
        <Sidebar />
        <AllCategories/>
      
    </div>
  )
}

export default DashboardCategories
