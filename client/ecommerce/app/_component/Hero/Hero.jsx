"use client"
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion';

const Hero = () => {
  return<>
        <section className=" w-[95%] m-auto  bg-[#000000] text-white mt-[100px]">
      <motion.div 
      initial={{ scale: 0.5 }}
      transition={{
          duration: 0.5,
          type: "tween",
      }}
      whileInView={{
          scale: 1,
      }}
      className='grid grid-cols-2  items-center justify-evenly max-md:grid-cols-1 max-sm:grid-cols-1  p-[22px]'>
      <div className="flex flex-col items-start justify-center gap-4 m-auto">
          <div className="flex items-center gap-6 text-center max-sm:gap-2">
            <Image
              src={require("../images/iphone.png")}
              alt="iphone"
              className="w-[40px] h-[49]"
            />
            <span>iPhone 14 Series</span>
          </div>
          <p className="text-[45px] max-sm:text-[20px] font-bold">
            Up to 10% <br/> off Voucher
          </p>

          <button className='flex gap-2 p-2 text-white bg-red-700 rounded-lg hover:bg-red-600 w-fit'> <ShoppingCart />
          <Link  href="#products">
          shpe now 
          </Link>
          
           </button>

        </div>

       
          <Image
            src={require("../images/hero_endframe.png")}
            alt="hero"
            className="w-[500px] h-[352px] sm:w-[400px]"
          />
      </motion.div>

      </section>
  </>
}

export default Hero