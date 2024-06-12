
import React from 'react'
import Sidebar from './Sidebar.jsx'
import CreateCategories from '../../Pages/CreateCategories.jsx'

const DashboardCreate = () => {
  return (
    <div className='grid grid-cols-3  '>
        <Sidebar/>
        <CreateCategories/>
      
    </div>
  )
}

export default DashboardCreate
