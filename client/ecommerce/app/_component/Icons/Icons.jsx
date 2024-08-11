
"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';

function Icons() {
  return <>
  <div className='w-[95%] m-auto grid justify-between grid-cols-3 max-md:grid-cols-2 max-sm:gap-8 max-sm:grid-cols-1 mt-[100px]'>
  <div className='flex flex-col items-center justify-center gap-1'>
        <div className='border-[8px] mb-4 bg-[#000000] border-[#C1C0C1] flex justify-center items-center w-20 h-20 rounded-full '>
        <Image alt="img" src={require("../images/icon-delivery.png")} width={50} height={50}
        />

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
        className='flex flex-col items-center justify-center gap-2 text-center '>
            <h2 className='font-bold text-[20px]'>FREE AND FAST DELIVERY</h2>
            <span className='text-slate-500'>Free delivery for all orders over $140</span>
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
    className='flex flex-col items-center justify-center gap-1'>
        <div className='border-[8px] mb-4 bg-[#000000] border-[#C1C0C1] flex justify-center items-center w-20 h-20 rounded-full '>
        <Image alt="img" src={require("../images/Icon-Customer service.png")} width={50} height={50}
        />

        </div>
        <div className='flex flex-col items-center justify-center gap-2 text-center '>
            <h2 className='font-bold text-[20px] '>24/7 CUSTOMER SERVICE</h2>
            <span className='text-slate-500'>24/7 CUSTOMER SERVICE</span>
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
    className='flex flex-col items-center justify-center gap-1'>
        <div className='border-[8px] mb-4 bg-[#000000] border-[#C1C0C1] flex justify-center items-center w-20 h-20 rounded-full '>
        <Image alt="img" src={require("../images/Icon-secure.png")} width={50} height={50}
        />

        </div>
        <div className='flex flex-col items-center justify-center gap-2 text-center '>
            <h2 className='font-bold text-[20px]'>MONEY BACK GUARANTEE</h2>
            <span className='text-slate-500'>We reurn money within 30 days</span>
        </div>
    </motion.div>
  </div>
  </>
}

export default Icons