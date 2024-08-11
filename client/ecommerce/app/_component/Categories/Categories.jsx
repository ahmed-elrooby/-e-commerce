"use client";
import React, { useEffect, useState } from "react";
import { fetchApi } from "../productApi/Product";
import Image from "next/image";
import Rectangle17 from "../images/Rectangle 17.png"; // Static import for better handling

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCategories = async () => {
    try {
      const res = await fetchApi.get("api/categories?populate=*");
      setCategories(res.data.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="mt-0 mb-[50px] w-[95%] m-auto  ">

      <div className="flex flex-col items-start gap-3 ml-4">
        <div className="flex items-center gap-3">
        <Image src={Rectangle17} width={15} height={30} alt="Decoration" />
        <h6 className="text-sm font-bold text-red-700">Categories</h6>
        </div>
        <h1 className="mt-2 font-bold text-[25px] tracking-wider">
        Browse By Category
      </h1>
      </div>

      {loading ? (
        <div className="grid grid-cols-5 gap-4 p-4 rounded-lg max-sm:grid-cols-2 max-md:grid-cols-4 animate-pulse">
          {Array.from({ length: 5 }).map((_, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center h-40 gap-1 border rounded-lg shadow-sm"
            >
              <div className="bg-gray-300 w-[80%] h-[40%] p-3 rounded-lg"></div>
              <div className="bg-gray-300 w-[50%] h-[30px] p-3 rounded-lg"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-5 gap-2 p-4 rounded-lg max-sm:grid-cols-2 max-md:grid-cols-4 mt-11">
          {categories.map((el, idx) => (
            <div
              key={idx}
              className="hover:bg-red-700 cursor-pointer hover:text-white transition-all flex flex-col items-center justify-center gap-3 border border-gray-300 shadow-lg h-[170px] rounded-lg w-145"
            >
              <Image
                src={el.attributes.icon.data?.attributes?.url}
                width={50}
                height={50}
                alt={el?.attributes?.title || "Category"}
              />
              <div className="">
                <h1 className="font-bold">{el?.attributes?.title}</h1>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;
