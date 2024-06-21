import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ id, title, imageUrl }) => {
  return (
    <div className="p-3">
      <div className="w-64 max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link href="#">
          <img
            className="size-64 hover:size-full rounded-t-lg   transition duration-500 cursor-pointer "
            src={imageUrl}
          />
        </Link>
        <div className="p-5">
          <Link href="#">
            <h5 className=" font-serif mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </Link>
          
          <Link
            to={`/foods/${id}`}
            className="ml-10 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Show Foods
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
