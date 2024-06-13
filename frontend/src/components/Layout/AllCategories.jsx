
import React from 'react'
import { useEffect ,useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AllCategories = () => {
    const [categories,setCategories]=useState([])
    const navigate=useNavigate()

   

    useEffect(()=>{
        getCategories()
      
       },[])
      
      
      
      
      
      
      const getCategories=async()=>{
        try {
          const {data}= await axios.get(`${import.meta.env.VITE_API}/api/category/getall`)
          setCategories(data.data)
          console.log("get categories obtained")
          
         
        } catch (error) {
          console.log(error)
          
        }
      
      }


      


      const handleEdit=(id,title,url)=>{
        console.log(id)
        console.log(title)
        console.log(url)
        navigate("/admin/dashboard/update-categories",{state:{id,title,url}})


      }


      const handleDelete=(id)=>{

        const {data}=  axios.delete(`${import.meta.env.VITE_API}/api/category/delete/${id}`)
        if(data){
            alert("Category has been deleted successfully")
        }
        navigate("/home")
        

      }
      




  return (
   


 <div>
    <div className="relative ">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 font-serif">
              Category 
            </th>
            <th scope="col" className="px-6 py-3 font-serif">
              Edit
            </th>
            <th scope="col" className="px-6 py-3 font-serif">
            Delete 
            </th>
          
          </tr>
        </thead>

        {categories?.map((c,i)=>(
            <tbody key={i}>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white font-serif">
                {c.title}
              </th>
              <td className="px-4 py-4">
                  <button onClick={()=>handleEdit(c._id,c.title,c.imageUrl)} className="flex p-2.5 bg-yellow-500 rounded-xl hover:rounded-3xl hover:bg-yellow-600 transition-all duration-300 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                    </button>

              </td>
              <td className="px-6 py-4">

              <button  onClick={()=>handleDelete(c._id)}  className="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-r-lg font-medium px-4 py-2 inline-flex space-x-1 items-center">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                    </span>
                  
              </button>

              </td>
              
            </tr>
          
      </tbody>

    ))}
    
  </table>
</div>

    </div>







    
   
  )
}

export default AllCategories
