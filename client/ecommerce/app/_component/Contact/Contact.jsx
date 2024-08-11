"use client";

import React from "react";
import Broad from "../BroadCampPage/Broad";
import { Mail, Phone } from "lucide-react";
import { motion } from 'framer-motion';
const Contact = () => {
  return (
    <>
      <div className="m-auto w-[95%] mt-9">
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

        <div className="flex items-start justify-between w-full gap-5 m-auto max-md:flex-wrap max-sm:flex-wrap">
          <motion.div
                  initial={{ x: -200, opacity: 0.5 }} 
                  whileInView={{ x: 0, opacity: 1 }} 
                  transition={{ duration: 0.5, type: "tween" }} 
          className="flex flex-col justify-between w-full px-5 rounded-lg shadow-sm py-7">
            <div className="flex flex-col items-start gap-8 border-b-[#808080] border-b-2 pb-8 ">
              <h1 className="flex items-center gap-4 font-bold text-[18px]">
                <div className="flex items-center justify-center w-10 h-10 text-white bg-red-700 border rounded-full ">
                  {" "}
                  <Phone />
                </div>
                Call To Us
              </h1>

              <span>We are available 24/7, 7 days a week.</span>
              <span>Phone: +8801611112222</span>
            </div>

            <div className="flex flex-col items-start gap-6 pt-3 mt-6">
              <h1 className="flex items-center gap-4 font-bold text-[18px]">
                <div className="flex items-center justify-center w-10 h-10 text-white bg-red-700 border rounded-full ">
                  {" "}
                  <Mail />
                </div>
                Write To US{" "}
              </h1>
              <span className="leading-[2]">
                Fill out our form and we will contact <br />
                you within 24 hours..
              </span>
              <span>Emails: customer@exclusive.com</span>
              <span>Emails: support@exclusive.com</span>
            </div>
          </motion.div>

          {/* start form  */}

          <motion.div
          initial={{ x: 200, opacity: 0.5 }}  
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, type: "tween" }}
          
          className="w-full p-3 rounded-lg shadow-sm">
            <form className="flex flex-col items-start gap-8 " action="">
              <div className="grid items-start w-full grid-cols-3 gap-2 max-sm:grid-cols-1 max-md:grid-cols-2">
                <input
                  className="bg-[#F5F5F5] p-4 rounded-lg focus:outline-none w-full "
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name *"
                />
                <input
                  className="bg-[#F5F5F5] focus:outline-none p-4 rounded-lg w-full "
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email *"
                />
                <input
                  className="bg-[#F5F5F5] focus:outline-none p-4 rounded-lg w-full "
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Your Phone *"
                />
              </div>
              <textarea
                className="w-full h-[310px] p-3 text-sm bg-[#F5F5F5]  focus:outline-none  rounded-lg"
                placeholder="Your Message"
                rows="8"
                
                id="message"
              ></textarea>

              <div className="flex items-end justify-end ">
                <button
                  type="submit"
                  className="w-full py-3 text-white bg-red-700 transition-all rounded-lg px-11 hover:scale-[0.8] "
                >
                  Send Massage
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contact;
