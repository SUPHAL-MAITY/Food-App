import React, { useState } from 'react'

import useAuth from '../context/Auth'

const UserDetails = () => {

  const {auth}= useAuth()


 

   







  return (
    <div>
        <h1>Username:{auth.user}</h1>
      
    </div>
  )
}

export default UserDetails
