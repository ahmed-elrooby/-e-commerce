
"use client"
import React from 'react'
import { motion } from 'framer-motion';

const Shope = () => {
  return <>
  <div 
  
 
  
  className='bg-[#000000] py-3 w-full m-auto'>
  <motion.p
             initial={{ scale: 0.5 }}
             transition={{
                 duration: 0.5,
                 type: "tween",
             }}
             whileInView={{
                 scale: 1,
             }}
  className=' text-gray-300 flex items-center text-[14px] justify-center'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</motion.p>
  </div>
  
  </>
}

export default Shope