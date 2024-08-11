"use client"
import { ShoppingCart,Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/reducerSlice/ReducerSlice";
import { removeFromWhishList } from "../Redux/WhishSlice/WhishSlice";
import { motion } from 'framer-motion';
const page = () => {
  const {allProducts} = useSelector(state => state.whish)
  const dispatch = useDispatch()
  
  return (
    <div className="w-[95%] m-auto">
      <motion.h1 
          initial={{scale:0.2}}
        transition={{
          duration:0.5,
          type:"tween"
        }}
        whileInView={{
          scale:1
        }} className="mt-4 mb-7 w-fit pb-4 font-bold text-red-500 text-[24px] border-b border-red-500">Wishlist ({allProducts.length})</motion.h1>
      <div className="grid grid-cols-5 gap-3 max-sm:grid-cols-2 max-md:grid-cols-3">
      {
        allProducts.map((prod,idx)=><motion.div 
        initial={{scale:0.2}}
        transition={{
          duration:0.5,
          type:"tween"
        }}
        whileInView={{
          scale:1
        }} 
        
        key={idx} className="relative w-full border rounded-lg">
        <div className="bg-[#F5F5F5] flex items-center justify-center p-4">
          <Image
            src={prod.image}
            className="items-center w-[200px] h-[200px] object-cover transition-all hover:scale-[1.2] "
            width={100}
            height={100}
          />
        </div>
        <div onClick={()=> dispatch(removeFromWhishList({
id:prod.id

        }))} className="absolute flex items-center justify-center w-10 h-10 border-red-500 border text-red-500 transition-all hover:scale-[1.3] rounded-full cursor-pointer hover:bg-red-500 hover:text-white top-1 right-1">
        <Trash2 />
        </div>
        <div className="flex flex-col items-start gap-2 p-4 mt-3">
          <button onClick={()=>dispatch(addToCart({
            id:prod.id,
            title:prod.title,
            price:prod.price,
            image:prod.image
          }))} className="flex justify-center w-full gap-2 p-2 text-white bg-black rounded-lg transition-all hover:bg-red-600 hover:scale-[0.8]">
            {" "}
            <ShoppingCart />
            <Link href="#products">Add To Cart </Link>
          </button>{" "}
          <h1 className="text-[19px] font-bold ">{prod.title}</h1>
          <span className="font-bold text-red-500">{prod.price} $</span>
        </div>
      </motion.div> )
      }
      

 
      </div>
    </div>
  );
};

export default page;
