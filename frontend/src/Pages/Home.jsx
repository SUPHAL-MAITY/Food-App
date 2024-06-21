import React, { useEffect } from 'react'
import Layout from '../components/Layout/Layout'
import SearchInput from '../components/Layout/SearchInput.jsx'
import CategoryCard from '../components/Layout/CategoryCard.jsx'
import axios from 'axios'
import { useState } from 'react'
import useAuth from '../context/Auth.jsx'


function Home() {

  const [categories,setCategories]=useState([])
 


 useEffect(()=>{
  getCategories()

 },[])






const getCategories=async()=>{
  try {
    const {data}= await axios.get(`${import.meta.env.VITE_API}/api/category/getall`)
    setCategories(data.data)
   
  } catch (error) {
    console.log(error)
    
  }

}


  return (
   
<>

  <div className="bg-center opacity-90 h-dvh bg-no-repeat bg-[url('https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png')] " >
    
   
   <div className='text-center pt-48'>


   <h1 className='font-serif text-7xl font-semibold text-white pb-8'>Foodie bar</h1>
      
   <h2 className='font-serif text-3xl font-semibold text-white pb-8'>Discover the best food & drinks in Kolkata</h2>
   <SearchInput />
    
   </div> 
   

  </div>

  <div className="grid grid-cols-4 gap-3">
    {
      categories.map((c)=>(
        <div key={c._id}><CategoryCard  id={c._id} title={c.title} imageUrl={c.imageUrl}   /></div>

      ))

    }
  
  
  
</div>

  
  
  </> 
  
      
   
  )
}

export default Home
