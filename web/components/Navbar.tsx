import React, { useEffect, useState } from "react";
import { Category } from "../interface";
import { getCategories } from "../utils/global";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([])
  useEffect(() => {
    (async () => {
      const res = await getCategories()
      setCategories(res)
    })()
  }, [])
  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        <a className="inline-flex items-center" href="/">
          <span className="ml-2 text-xl font-bold tracking-wide uppercase">
            BlogGeming
          </span>
        </a>
        <ul className="items-center hidden space-x-8 lg:flex">
          <li className="">
            <a
              className="font-medium tracking-wide transition-colors duration-200 hover:text-primary-700"
              href="#"
            >
              Product
            </a>
          </li>
          <li className="">
            <a
              className="font-medium tracking-wide transition-colors duration-200 hover:text-primary-700"
              href="#"
            >
              Features
            </a>
          </li>
          <li className="relative">
            <a
              className="font-medium tracking-wide transition-colors duration-200 hover:text-primary-700"
              href="/category"
            >
              Category
            </a>
            <div className="w-32 transparent menu-category text-transparent absolute h-32 z-30 hover:flex flex-col hover:block -mt-10 hover:mt-0 hover:text-red-500">
              {categories && categories.map((el: any) => (
                <a key={el?._id} href={`/category/${el?._id}`} className="z-40 relative hover:bg-cyan-500 cursor-pointer px-5 capitalize">{el?.title}</a>
              ))}
            </div>
          </li>
          <li className="">
            <a
              className="font-medium tracking-wide transition-colors duration-200 hover:text-primary-700"
              href="#"
            >
              About us
            </a>
          </li>
        </ul>
        <ul className="items-center hidden space-x-8 lg:flex">
          <li className="">
            <a
              className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-red-500 transition duration-200 shadow-md hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none bg-primary rounded-global"
              href="#"
            >
              {" "}
              Sign up{" "}
            </a>
          </li>
        </ul>
        <div className="lg:hidden">
          <button
            id="Dgveqz"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
          >
            <span className="w-5 text-gray-600">
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                ></path>
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                ></path>
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};


export default Navbar;


