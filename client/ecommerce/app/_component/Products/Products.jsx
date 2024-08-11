"use client";
import Image from "next/image";
import Link from "next/link";
import { fetchApi } from "../productApi/Product";
import { useEffect, useState } from "react";
import { Eye, Heart, ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";
import { addtoWhish } from "@/app/Redux/WhishSlice/WhishSlice";
import { addToCart } from "@/app/Redux/reducerSlice/ReducerSlice";
import { motion } from 'framer-motion';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const fetchingData = async () => {
    try {
      const res = await fetchApi.get(`api/products?populate=*`);
      setProducts(res.data.data);
    } catch (error) {
      console.error("There is an error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <div
      id="products"
      className="w-[95%] m-auto my-[50px] border-b-2 border-gray-300"
    >
      <motion.h1
      initial={{ scale: 0.5 }}
      transition={{
          duration: 0.3,
          type: "tween",
      }}
      whileInView={{
          scale: 1,
      }}
      
      className="font-bold text-center text-[25px] text-red-500 capitalize">
        Our Products
      </motion.h1>

      <div className="grid grid-cols-4 gap-5 mt-6 p-7 max-sm:grid-cols-1 max-md:grid-cols-2">
        {loading
          ? Array.from({ length: 8 }).map((_, idx) => (
              <div
                key={idx}
                className="p-4 border rounded-lg shadow-sm animate-pulse"
              >
                <div className="w-full bg-gray-300 rounded-lg h-60"></div>
                <div className="h-6 mt-4 bg-gray-300 rounded-lg"></div>
                <div className="h-4 mt-2 bg-gray-300 rounded-lg"></div>
                <div className="h-4 mt-2 bg-gray-300 rounded-lg"></div>
              </div>
            ))
          : products.map((product, idx) => (
              <motion.div
              initial={{ opacity: 0}}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
              key={idx} className=" border-2 border-[#f5f5f5] p-2 transition-all ml-9 hover:shadow-lg hover:translate-y-1">
                <div className="relative p-3 max-w-full rounded-lg bg-[#F5F5F5]">
                  <Image
                    className="  m-auto   w-[200px] h-[150px] object-cover transition-all duration-[0.5s] hover:rotate-[360deg]"
                    src={product.attributes?.image.data?.attributes?.url}
                    width={200}
                    height={200}
                    alt={product.attributes?.title}
                  />
                  <span className="absolute p-2 font-bold text-white -skew-x-12 -skew-y-6 bg-red-500 top-2 left-2">
                    {product.attributes?.price} $
                  </span>
                  <div className="absolute top-2 right-1">
                    <div className="flex items-center justify-center mb-2 text-red-500 transition-all border border-red-500 rounded-full hover:scale-[1.2] cursor-pointer w-9 h-9 hover:bg-red-700 hover:text-white">
                      <Heart
                        onClick={() =>
                          dispatch(
                            addtoWhish({
                              id: product.id,
                              title: product.attributes?.title,
                              price: product.attributes?.price,
                              image:
                                product.attributes?.image.data?.attributes?.url,
                            })
                          )
                        }
                      />
                    </div>
                    <Link
                      href={`/ProductDetails/${product.id}`}
                      className="flex items-center justify-center text-red-500 border border-red-500 rounded-full cursor-pointer hover:bg-red-700 hover:scale-[1.2] hover:text-white w-9 h-9"
                    >
                      <Eye />
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col gap-3 mt-7">
                  <h1 className="text-red-500 font-bold text-[19px]">{product.attributes?.title}</h1>
                </div>
                <button
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: product.id,
                        title: product?.attributes?.title,
                        price: product?.attributes?.price,
                        image: product?.attributes?.image.data.attributes.url,
                      })
                    )
                  }
                  className="flex mt-2 uppercase hover:scale-[1.1] duration-[0.3s] items-center w-full justify-center gap-3 p-2 text-white bg-black rounded-lg text-[18px] font-semibold hover:bg-red-600"
                >
                  <ShoppingCart /> shope now
                </button>
              </motion.div>
            ))}
      </div>
    </div>
  );
};

export default Products;
