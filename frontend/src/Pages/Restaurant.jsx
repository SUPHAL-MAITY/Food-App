import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Restaurant = () => {
     const [showModal, setShowModal] = useState(false);
     const [restaurants,setRestaurants]=useState([])
     const [count,setCount]=useState("")

     const [title,setTitle]=useState("")
     const [imageUrl,setImageUrl]=useState("")
     const [foods,setFoods]=useState([])
     const [foodInput,setFoodInput]=useState("")
     const [pickup,setPickup]=useState("")
     const [delivery,setDelivery]=useState("")
     const [isOpen,setIsOpen]=useState("")
     const [logoUrl,setLogoUrl]=useState("")
     const [location,setLocation]=useState("")
     const [id,setId]=useState("")

   useEffect(()=>{
    getRestaurants()

   },[restaurants])

    const getRestaurants=async()=>{
        try {
            const {data}= await axios.get(`${import.meta.env.VITE_API}/api/restaurant/getresbyowner`)
            console.log("get restaurant data")
            console.log(data)
            setRestaurants(data?.data?.restaurants)
            setCount(data.data.count)
            
            
        } catch (error) {
          console.log(error)
            
        }
    }


  const handleClick =async(id)=>{
       setShowModal(true)

    try {

      const {data}= await axios.get(`${import.meta.env.VITE_API}/api/restaurant/getsingle/${id}`)
      console.log(data)
      setTitle(data.data.title)
      setImageUrl(data.data.imageUrl)
      setFoodInput(data.data.foods.join(","))
      setLogoUrl(data.data.logoUrl)
      setLocation(data.data.location)
      setPickup(data.data.pickup)
      setDelivery(data.data.delivery)
      setIsOpen(data.data.isOpen)
      setId(id)
      
    } catch (error) {
      console.log(error)
      
    }

  }


  const handleSubmit=async(e)=>{
    console.log("submission started")
    e.preventDefault()
    
    const foodItem=foodInput.split(",").map((item)=>item.trim()).filter(item=>item)
    
    setFoods(foodItem)

    try {
      

        const res= await axios.put(`${import.meta.env.VITE_API}/api/restaurant/update/${id}`,{title,imageUrl,foods,pickup,delivery,isOpen,logoUrl,location})
        if(res){
            alert("Restaurant  updated successfully")
          }
          // setTitle("")
          // setImageUrl("")
          // setFoodInput("")
          // setPickup("")
          // setDelivery("")
          // setIsOpen("")
          // setLogoUrl("")
          // setLocation("")

          setShowModal(false)




          
    } catch (error) {
        console.log(error)
        
    }

    

}

const handleDelete=async(id)=>{
  
  try {
    const {data}=await axios.delete(`${import.meta.env.VITE_API}/api/restaurant/delete/${id}`)
    if(data){
      alert("Restaurant deleted successfully")
    }
    
  } catch (error) {
    console.log(error)
  }
  
  
}


  return (
<>
    { count == 0 ? ( 
      <div  className='mt-1 mb-2 p-2 text-center  font-serif text-xl font-extrabold bg-red-600 text-white'>

      <h1>you have not added any Restaurant </h1> </div>

      ):( 
        <div className='grid grid-cols-3 gap-4'>

       
{ restaurants?.map((c,i)=>(  
  <div key={i} className="flex items-center h-screen w-full justify-center">
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
              <td className="px-2 py-2">{c.pickup ? ( <span className="flex w-3 h-3 me-3 bg-green-500 rounded-full"></span> ):(<span className="flex w-3 h-3 me-3 bg-red-500 rounded-full"></span>)  }</td>
            </tr>
            <tr>
              <td className="px-2 py-2 text-gray-500 font-serif font-semibold">Delivery</td>
              <td className="px-2 py-2">{c.delivery ? ( <span className="flex w-3 h-3 me-3 bg-green-500 rounded-full"></span> ):(<span className="flex w-3 h-3 me-3 bg-red-500 rounded-full"></span>)  }</td>
            </tr>
            <tr>
              <td className="px-2 py-2 text-gray-500 font-serif font-semibold">Is open ?</td>
              <td className="px-2 py-2">{c.isOpen ? ( <span className="flex w-3 h-3 me-3 bg-green-500 rounded-full"></span> ):(<span className="flex w-3 h-3 me-3 bg-red-500 rounded-full"></span>)  }</td>
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
        
          <button
              className="bg-cyan-400 font-serif text-black active:bg-blue-500 font-bold px-2 py-1  rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
              type="button"
              onClick={() => handleClick(c._id)}
         >
           Update  
      </button>
          <button
              className="bg-red-500 font-serif text-black active:bg-blue-500 font-bold px-2 py-1  rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
              type="button"
              onClick={() => handleDelete(c._id)}
         >
           Delete
      </button>



        </div>
      </div>
    </div>
  </div>
</div>


  
 ))   }


    </div>
        )}



 {/* modal portion */}

      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold"></h3>
                 
                </div>
                <div className="relative p-6 flex-auto">


                  {/* form */}

                  <form onSubmit={handleSubmit}  className="max-w-md mx-auto">
                 
                          <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="title"  id="title" value={title} onChange={(e)=>setTitle(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="title" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
                          </div>

                          <div className="relative z-0 w-full mb-5 group">
                            <input type="text"  name="imageUrl" id="imageUrl" value={imageUrl} onChange={(e)=>setImageUrl(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="imageUrl" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image Url</label>
                          </div>

                          <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="foodInput" id="foodInput" value={foodInput} onChange={(e)=>setFoodInput(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="foodInput" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Foods  </label>
                          </div>

                        

                          <div className="relative z-0 w-full mb-5 group ">
                                  <select id="pickup" name="pickup"  type="text" value={pickup}  onChange={(e)=>setPickup(e.target.value)} required className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 " > 
                                            <option  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"  hidden defaultValue> Pick Up available?</option>
                                            <option className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6' value="yes">Yes</option>
                                            <option  className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6' value="no">No</option>
                                            
                                  </select>
                        </div>


                        <div className="relative z-0 w-full mb-5 group ">
                                  <select id="delivery" name="delivery"  type="text"  value={delivery} onChange={(e)=>setDelivery(e.target.value)} required className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 " > 
                                            <option  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"  hidden defaultValue> Delivery available?</option>
                                            <option className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6' value="yes">Yes</option>
                                            <option  className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6' value="no">No</option>
                                            
                                  </select>
                        </div>


                        <div className="relative z-0 w-full mb-5 group ">
                                  <select id="isOpen" name="isOpen"  type="text"  value={isOpen} onChange={(e)=>setIsOpen(e.target.value)} required className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 " > 
                                            <option  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"  hidden defaultValue> Is it open ?</option>
                                            <option className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6' value="yes">Yes</option>
                                            <option  className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6' value="no">No</option>
                                            
                                  </select>
                        </div>



                        

                          <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="logUrl" id="logoUrl" value={logoUrl}  onChange={(e)=>setLogoUrl(e.target.value)}  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="logoUrll" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Logo URL </label>
                          </div>

                          <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="location" id="location" value={location}  onChange={(e)=>setLocation(e.target.value)} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="location" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Location</label>
                          </div>

                          <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                          
                          <button    type="submit"  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                          <button
                              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                              type="button"
                              onClick={() => setShowModal(false)}
                            >
                            Close
                          </button>
                          </div>
                
                </form>


                </div>
                
              </div>
            </div>
          </div>
        </>
      ) : null}






  </>
  )
}

export default Restaurant
