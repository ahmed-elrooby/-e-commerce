
"use client"
import Image from "next/image";
import React from "react";
import Rectangle17 from "../images/Rectangle 17.png"; // Static import for better handling
import { motion } from 'framer-motion';

const Arrival = () => {
  return (
    <>
      <div className="w-[97%]  mt-1 mb-4 flex flex-col m-auto ">
        <div className="flex flex-col items-start gap-3 mb-3 ml-9">
       <div className="flex items-center gap-3 ">
       <Image src={Rectangle17} width={15} height={30} alt="Decoration" />
       <h6 className="text-sm font-bold text-red-700">Featured</h6>
       </div>
          <h1 className="mt-2 font-bold mb-8 text-[25px] tracking-wider">
          New Arrival{" "}
        </h1>
        </div>

        <div className="grid items-start justify-center grid-cols-2 gap-5 m-auto max-sm:grid-cols-1 max-md:grid-cols-1">
          <motion.div
          initial={{scale:0, opacity: 0.5 }} 
          whileInView={{ scale: 1, opacity: 1 }} 
          transition={{ duration: 0.5, type: "tween" }} 
          className="relative rounded-lg bg-[#000000] py-5  ">
            <Image
              src={require("../images/ps5-slim-goedkope-playstation_large 1.png")}
              className="object-cover"
              width={400}
              height={400}
            />
            <div className="absolute flex flex-col items-start gap-3 text-white bottom-14 left-5 max-sm:bottom-4 max-sm:gap-1 max-sm:left-1">
              <h4 className="font-bold text-[25px] tracking-wider">
                PlayStation 5
              </h4>
              <p className="w-[270px]">
                Black and White version of the PS5 coming out on sale
              </p>
              <button className="transition-all border-b border-b-slate-300 hover:scale-[0.9]">
                {" "}
                Shop Now
              </button>
            </div>
          </motion.div>
          <div
         
          className="grid items-start grid-cols-1 gap-5 text-white">
            <motion.div
             initial={{ scale: 0.5,opacity:0 }}
             transition={{
                 duration: 0.5,
                 type: "tween",
             }}
             whileInView={{
                 scale: 1,opacity:1
             }}
            
            className="grid grid-cols-2 max-sm:grid-cols-1 items-start gap-6 max-sm:gap-3 rounded-lg  bg-[#0D0D0D]">
              <div className="flex flex-col items-start gap-5 px-4 py-2">
                <h1 className="font-bold text-[25px] ">Women’s Collections</h1>
                <p className="w-[270px] leading-[2]">
                  Featured woman collections that give you another vibe.
                </p>
                <button className="transition-all border-b w-fit border-b-slate-300 hover:scale-[0.9]">
                  {" "}
                  Shop Now
                </button>
              </div>
              <div>
                <Image
                  src={require("../images/attractive-woman-wearing-hat-posing-black-background 1.png")}
                  width={300}
                  height={300}
                  className="rounded-lg boject-cover"
                />
              </div>
            </motion.div>
            <motion.div
             initial={{ scale: 0.5,opacity:0 }}
             transition={{
                 duration: 0.5,
                 type: "tween",
             }}
             whileInView={{
                 scale: 1,opacity:1
             }}
            
            className="grid items-start grid-cols-2 gap-3 max-sm:grid-cols-1">
              <div className="relative px-8  bg-[#222222] rounded-lg">
                <Image
                  src={require("../images/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png")}
                  width={200}
                  height={50}
                />
                <div className="absolute flex flex-col items-start gap-2 bottom-9 max-sm:gap-1 max-sm:bottom-5 left-7 max-sm:left-4">
                  <h1 className="font-bold text-[22px] tracking-wider">
                    Speakers
                  </h1>
                  <p className="leading-[2]">Amazon wireless speakers</p>
                  <button className="transition-all border-b border-b-slate-300 hover:scale-[0.9]">
                    {" "}
                    Shop Now
                  </button>
                </div>
              </div>
              <div className="relative px-8 py-3 bg-[#222222] rounded-lg">
                <Image
                  src={require("../images/652e82cd70aa6522dd785109a455904c.png")}
                  width={200}
                  height={50}
                />
                <div className="absolute flex flex-col items-start gap-2 max-sm:gap-1 bottom-9 left-7">
                  <h1 className="font-bold text-[22px] tracking-wider">
                    Perfume
                  </h1>
                  <p className="leading-[2]">GUCCI INTENSE OUD EDP</p>
                  <button className="transition-all border-b border-b-slate-300 hover:scale-[0.9]">
                    {" "}
                    Shop Now
                  </button>
                </div>
              </div>
              <div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Arrival;
