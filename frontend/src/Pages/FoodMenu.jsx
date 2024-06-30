import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const FoodMenu = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState([]);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    getFoodsByRestaurant();
  }, []);

  const getFoodsByRestaurant = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API}/api/food/getbyres/${id}`
      );
      console.log("Foods of a restaurant  obtained ");
      console.log(data);
      setFoods(data.data.foods);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Food Tag
              </th>

              <th scope="col" className="px-6 py-3">
                Price
              </th>
            </tr>
          </thead>
          {foods.map((c, i) => (
            <tbody key={i}>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {c.title}
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {c.foodTags}
                </th>

                <td className="px-6 py-4">{c.price}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default FoodMenu;
