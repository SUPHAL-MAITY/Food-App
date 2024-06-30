import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const CreateFoods = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [foodTags, setFoodTags] = useState("");
  const [category, setCategory] = useState("");
  const [code, setCode] = useState("");
  const [isAvailable, setIsAvailable] = useState("");
  const [restaurant, setRestaurant] = useState(location.state.id);

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API}/api/category/getall`
      );
      console.log(data);
      setCategories(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(category);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API}/api/food/create`,
        {
          title,
          description,
          price,
          imageUrl,
          foodTags,
          category,
          code,
          isAvailable,
          restaurant,
        }
      );
      if (res) {
        alert("Foods  registered successfully");
      }
      setTitle("");
      setDescription("");
      setPrice("");
      setImageUrl("");
      setFoodTags("");
      setCategory("");
      setCode("");
      setIsAvailable("");
      setRestaurant("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <h2 className="font-serif mt-10 mb-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Decide Food For Your Restaurant
        </h2>

        <div>
          <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
            <div className="mb-5 font-serif">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Title
              </label>
              <input
                type="title"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-5 font-serif">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <input
                type="title"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-5 font-serif">
              <label
                htmlFor="price"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Price
              </label>
              <input
                type="text"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-5 font-serif">
              <label
                htmlFor="imageUrl"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                ImageUrl
              </label>
              <input
                type="text"
                id="description"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-5 font-serif">
              <label
                htmlFor="foodTags"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                FoodTags
              </label>
              <input
                type="title"
                id="description"
                value={foodTags}
                onChange={(e) => setFoodTags(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            {/* category menu */}

            <div className="relative z-0 w-full mb-5 font-serif group ">
              <select
                id="category"
                name="category"
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                {categories.map((c, i) => (
                  <option
                    key={i}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={c._id}
                  >
                    {c.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-5 font-serif">
              <label
                htmlFor="code"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Code
              </label>
              <input
                type="title"
                id="code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-5 font-serif">
              <label
                htmlFor="isAvailable"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Is Available ?
              </label>
              <input
                type="title"
                id="isAvailable"
                value={isAvailable}
                onChange={(e) => setIsAvailable(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-5 font-serif">
              <label
                htmlFor="restaurant"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Restaurant{" "}
              </label>
              <input
                type="title"
                id="restaurant"
                value={restaurant}
                onChange={(e) => setRestaurant(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateFoods;
