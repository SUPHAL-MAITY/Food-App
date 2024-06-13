import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Restaurant = () => {
    const [restaurants,setRestaurants]=useState([])
    const [count,setCount]=useState("")

   useEffect(()=>{
    getRestaurants()

   },[])

    const getRestaurants=async()=>{
        try {
            const {data}= await axios.get(`${import.meta.env.VITE_API}/api/restaurant/getresbyowner`)
            console.log(data)
            setRestaurants(data.data.restaurants)
            setCount(data.data.count)
            
        } catch (error) {
          console.log(error)
            
        }
    }


  return (
<>
    {count == 0 ? ( 
      <div  className='mt-1 mb-2 p-2 text-center  font-serif text-xl font-extrabold bg-red-600 text-white'>

      <h1>you have not added any Restaurant </h1> </div>

      ):( 
        <div className='grid grid-cols-3 gap-4'>

       
{ restaurants?.map((c)=>(  
  <div className="flex items-center h-screen w-full justify-center">
  <div className="max-w-xs">
    <div className="bg-white shadow-xl rounded-lg py-3">
      <div className="photo-wrapper p-2">
        <img className="w-32 h-32 rounded-full mx-auto" src={c.logoUrl} alt="John Doe" />
      </div>
      <div className="p-2">
        <h3 className="text-center text-xl text-gray-900 font-medium leading-8 font-serif">{c.title}</h3>
        <div className="text-center text-gray-400 text-xs font-semibold">
          <p>{c.location}</p>
        </div>
        <table className="text-xs my-3">
          <tbody>
            <tr>
              <td className="px-2 py-2 text-gray-500 font-serif font-semibold">Pick-Up</td>
              <td className="px-2 py-2">{c.pickup ? ( <span class="flex w-3 h-3 me-3 bg-green-500 rounded-full"></span> ):(<span class="flex w-3 h-3 me-3 bg-red-500 rounded-full"></span>)  }</td>
            </tr>
            <tr>
              <td className="px-2 py-2 text-gray-500 font-serif font-semibold">Delivery</td>
              <td className="px-2 py-2">{c.delivery ? ( <span class="flex w-3 h-3 me-3 bg-green-500 rounded-full"></span> ):(<span class="flex w-3 h-3 me-3 bg-red-500 rounded-full"></span>)  }</td>
            </tr>
            <tr>
              <td className="px-2 py-2 text-gray-500 font-serif font-semibold">Is open ?</td>
              <td className="px-2 py-2">{c.isOpen ? ( <span class="flex w-3 h-3 me-3 bg-green-500 rounded-full"></span> ):(<span class="flex w-3 h-3 me-3 bg-red-500 rounded-full"></span>)  }</td>
            </tr>






            <tr>
              <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
              <td className="px-2 py-2">+977 9955221114</td>
            </tr>
            <tr>
              <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
              <td className="px-2 py-2">john@exmaple.com</td>
            </tr>
          </tbody></table>
        <div className="text-center my-3">
          <a className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">View Profile</a>
        </div>
      </div>
    </div>
  </div>
</div>


  
 ))   }


    </div>
        )}
  
  </>
  )
}

export default Restaurant
