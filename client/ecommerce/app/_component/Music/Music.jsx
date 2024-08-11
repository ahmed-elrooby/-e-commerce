"use client"
import Image from "next/image";
import React from "react";
import { motion } from 'framer-motion';

const Music = () => {
  return (
    <>
      <div className=" p-11 mb-2 bg-gradient-to-r from-black to-[#000000b7] w-[94%] rounded-lg m-auto">
        <div className="flex flex-wrap justify-around gap-6 ">
        <motion.div
        
        initial={{ x: -200, opacity: 0.5 }} 
        whileInView={{ x: 0, opacity: 1 }} 
        transition={{ duration: 0.5, type: "tween" }} 
        className="flex flex-col gap-14 justify-evenly">
            <span className="text-[#00FF66] font-bold ">Categories</span>
            <h1 className="text-[25px] font-bold text-white ">Enhance Your<br/> Music Experience</h1>
            <div className="flex justify-between gap-2">
            <div className="flex flex-col items-center justify-center w-16 h-16 p-1 text-black bg-white rounded-full ">
            <span className="text-sm">23</span>
                <span className="text-[10px]">Hours</span>
              </div>
              <div className="flex flex-col items-center justify-center w-16 h-16 p-1 text-black bg-white rounded-full ">
              <span className="text-sm">05</span>
              <span className="text-[10px]">Days</span>
              </div>
              <div className="flex flex-col items-center justify-center w-16 h-16 p-1 text-black bg-white rounded-full ">
              <span className="text-sm">59</span>
              <span className="text-[10px]">Minutes</span>
              </div>
              <div className="flex flex-col items-center justify-center w-16 h-16 p-1 text-black bg-white rounded-full ">
              <span className="text-sm">35</span>
              <span className="text-[10px]">Seconds</span>
              </div>
            </div>
            <button className="bg-[#00FF66] hover:bg-red-600 transition-all text-white font-bold w-fit rounded-xl py-2 px-4">Buy Now!</button>
          </motion.div>
        <motion.div
        initial={{ x: 200, opacity: 0.5 }}  
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, type: "tween" }}
        >
            <Image alt="img" src={require("../images/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png")} width={400} height={400} 
            className="object-cover filter brightness-75"
            />
        </motion.div>
        </div>

      </div>
    </>
  );
};

export default Music;
