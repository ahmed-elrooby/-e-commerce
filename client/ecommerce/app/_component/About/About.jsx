"use client";

import React from "react";
import Broad from "../BroadCampPage/Broad";
import Image from "next/image";
import {
  BadgeDollarSign,
  DollarSign,
  Linkedin,
  Luggage,
  Store,
  TwitterIcon,
} from "lucide-react";
import { Twitter } from "lucide-react";
import { Instagram } from "lucide-react";
import Icons from "../Icons/Icons";
import {motion} from "framer-motion"
const About = () => {
  return (
    <>
      <div className=" w-[95%] m-auto mt-9">
      <motion.div
         initial={{ scale: 0}}
         transition={{
             duration: 0.5,
             type: "tween",
         }}
         whileInView={{
             scale: 1,
         }}
         className='w-fit'
        >
        <Broad />

        </motion.div>
        <div className="grid items-center grid-cols-2 gap-5 m-auto max-sm:grid-cols-1 max-md:grid-cols-1">
          <motion.div
                    initial={{ scale: 0.5 }}
                    transition={{
                        duration: 0.5,
                        type: "tween",
                    }}
                    whileInView={{
                        scale: 1,
                    }}
          className="flex flex-col items-start gap-5">
            <h1 className="font-bold text-[40px] mb-5">Our Story</h1>
            <p>
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.{" "}
            </p>

            <p className="">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </motion.div>
          <motion.div
                    initial={{ scale: 0.5 }}
                    transition={{
                        duration: 0.5,
                        type: "tween",
                    }}
                    whileInView={{
                        scale: 1,
                    }}
          >

            <Image
              className="w-full h-full rounded-lg"
              src={require("../images/portrait-two-african-females-holding-shopping-bags-while-reacting-something-their-smartphone 1.png")}
            />
          </motion.div>
        </div>

        <motion.div
                  initial={{ scale: 0.5 }}
                  transition={{
                      duration: 0.5,
                      type: "tween",
                  }}
                  whileInView={{
                      scale: 1,
                  }}
        className="mt-[70px] grid grid-cols-4 max-sm:grid-cols-2 max-md:grid-cols-3 gap-8">
          <div className="border-[1px] border-[#D2D2D2] p-4 flex transition-all items-center gap-5 flex-col rounded-lg hover:bg-red-700 hover:text-white group">
            <div className="flex group-hover:border-[#E67C7C] group-hover:bg-white group-hover:text-black transition-all items-center justify-center w-12 h-12 font-bold text-white bg-black border-[7px] border-[#C1C0C1] rounded-full">
              <Store />
            </div>
            <div className="flex flex-col items-center gap-1">
              <h1 className="font-bold text-[22px]">10.5k </h1>
              <span>Sallers active our site</span>
            </div>
          </div>
          <div className="border-[1px] border-[#D2D2D2] p-4 flex transition-all items-center gap-5 flex-col rounded-lg hover:bg-red-700 hover:text-white group">
            <div className="flex group-hover:border-[#E67C7C] group-hover:bg-white group-hover:text-black transition-all items-center justify-center w-12 h-12 font-bold text-white bg-black border-[7px] border-[#C1C0C1] rounded-full">
              <BadgeDollarSign />
            </div>
            <div className="flex flex-col items-center gap-1">
              <h1 className="font-bold text-[22px]">33k </h1>
              <span>Mopnthly Produduct Sale</span>
            </div>
          </div>
          <div className="border-[1px] border-[#D2D2D2] p-4 flex transition-all items-center gap-5 flex-col rounded-lg hover:bg-red-700 hover:text-white group">
            <div className="flex group-hover:border-[#E67C7C] group-hover:bg-white group-hover:text-black transition-all items-center justify-center w-12 h-12 font-bold text-white bg-black border-[7px] border-[#C1C0C1] rounded-full">
              <Luggage />{" "}
            </div>
            <div className="flex flex-col items-center gap-1">
              <h1 className="font-bold text-[22px]">45.5k </h1>
              <span>Customer active in our site</span>
            </div>
          </div>
          <div className="border-[1px] border-[#D2D2D2] p-4 flex transition-all items-center gap-5 flex-col rounded-lg hover:bg-red-700 hover:text-white group">
            <div className="flex group-hover:border-[#E67C7C] group-hover:bg-white group-hover:text-black transition-all items-center justify-center w-12 h-12 font-bold text-white bg-black border-[7px] border-[#C1C0C1] rounded-full">
              <DollarSign />
            </div>
            <div className="flex flex-col items-center gap-1">
              <h1 className="font-bold text-[22px]">25k </h1>
              <span>Anual gross sale in our site</span>
            </div>
          </div>
        </motion.div>

        <div className="mt-[80px] grid grid-cols-3 max-sm:grid-cols-1 mb-[50px] gap-3 max-md:grid-cols-2">
        <motion.div
                  initial={{ scale: 0.5 }}
                  transition={{
                      duration: 0.5,
                      type: "tween",
                  }}
                  whileInView={{
                      scale: 1,
                  }}
        className="flex flex-col items-start w-full gap-3 mx-auto">
        <div className="bg-[#F5F5F5] w-full rounded-lg">
              <Image
                className="object-cover p-9 "
                src={require("../images/image 46.png")}
                width={300} 
                height={150}               
              />
            </div>
            <h1 className="font-bold text-[23px]">Tom Cruise</h1>
            <p className="text-[17px]">Founder & Chairman</p>
            <div className="flex gap-5">
              <TwitterIcon />
              <Instagram />
              <Linkedin />
            </div>
          </motion.div>
          <motion.div 
                    initial={{ scale: 0.5 }}
                    transition={{
                        duration: 0.5,
                        type: "tween",
                    }}
                    whileInView={{
                        scale: 1,
                    }}
          className="flex flex-col items-start w-full gap-3 mx-auto">
          <div className="bg-[#F5F5F5] w-full h-full rounded-lg">
          <Image
                className="object-cover p-9 "
                src={require("../images/image 51.png")}
                width={300}    
                height={150}            
              />
            </div>
            <h1 className="font-bold text-[23px]">Emma Watson</h1>
            <p className="text-[17px]">Managing Director</p>
            <div className="flex gap-5">
              <TwitterIcon />
              <Instagram />
              <Linkedin />
            </div>
          </motion.div>


          <motion.div 
                    initial={{ scale: 0.5 }}
                    transition={{
                        duration: 0.5,
                        type: "tween",
                    }}
                    whileInView={{
                        scale: 1,
                    }}
          className="flex flex-col items-start w-full gap-3 mx-auto">
          <div className="bg-[#F5F5F5] w-full h-full rounded-lg">
          <Image
                className="object-cover p-9 "
                src={require("../images/image 47.png")}
                width={300}    
                height={150}            
              />
            </div>
    <h1 className="font-bold text-[23px]">Will Smith</h1>
            <p className="text-[17px]">Product Designer</p>
            <div className="flex gap-5">
              <TwitterIcon />
              <Instagram />
              <Linkedin />
            </div>
          </motion.div>
        </div>


        <Icons />
      </div>
    </>
  );
};

export default About;