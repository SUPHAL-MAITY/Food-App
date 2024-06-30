import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import useCart from "../context/CartContext";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";

const SearchResult = () => {
  const [searchPrams] = useSearchParams();
  const query = searchPrams.get("q");

  const [results, setResults] = useState([]);
  const [length,setLength]=useState("")
  const { cart, updateCart } = useCart();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    if (query) {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API}/api/food/search?q=${query}`
        );
        setResults(data?.data?.foods);
        setLength(data?.data?.length)
        
      } catch (error) {
        console.log(error);
      }
    }
  };

  const addToCart = (id, title, description, price, imageUrl) => {
    console.log("Added to cart");
    // console.log(id)
    // console.log(title)
    // console.log(description)
    // console.log(price)
    // console.log(imageUrl)
    const newItem = {
      id,
      title,
      description,
      price,
      imageUrl,
      quantity: 1,
      total: price,
    };

    updateCart(newItem);
  };

  return (
    <div>
      

    { length >0 ? <>
    
    
    <div className=" ">
        <div className="grid grid-cols-4 gap-3">
          {results?.map((c, i) => (
            <div
              key={i}
              className="w-full border-8 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <Link to="#">
                <img
                  className="p-8 w-64 and h-64 rounded-t-lg"
                  src={c.imageUrl}
                  alt="product image"
                />
              </Link>
              <div className="px-5 pb-5">
                <Link to="#">
                  <h5 className="text-xl  font-serif font-semibold tracking-tight text-gray-900 dark:text-white">
                    {c.title}
                  </h5>
                </Link>
                <span className="text-sm font-serif text-gray-500 dark:text-gray-400">
                  {c.description}
                </span>
                <div className="flex items-center mt-2.5 mb-5">
                  <div className="flex items-center space-x-1 rtl:space-x-reverse">
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-yellow-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                      className="w-4 h-4 text-gray-200 dark:text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                    {c.rating}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl font-bold text-gray-900 dark:text-white">
                    ₹ {c.price}
                  </span>
                  <Button
                    onClick={() =>
                      addToCart(
                        c._id,
                        c.title,
                        c.description,
                        c.price,
                        c.imageUrl
                      )
                    }
                    className="text-white font-serif bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add to cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    
    </>  : 



<div>

<section className="bg-white dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
    <div className="mx-auto max-w-screen-sm text-center">
      <h1 className="mb-4 text-7xl text-red tracking-tight font-extrabold lg:text-6xl text-primary-600 dark:text-primary-500">NO RESULT FOUND</h1>
      
      <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that food. please explore other options. </p>
      <a href="#" className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">Back to Homepage</a>
    </div>   
  </div>
</section>

      
    </div>
    
    
    }

   
    </div>
  );
};

export default SearchResult;
