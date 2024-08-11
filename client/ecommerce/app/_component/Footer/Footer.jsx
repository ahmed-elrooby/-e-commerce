"use client"

import { Facebook, Instagram, Linkedin, SendHorizontal, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <>
      <footer className="bg-[#000000]  items-start text-white mt-20">
        <motion.div
        initial={{ scale: 0.5 }}
        transition={{
            duration: 0.5,
            type: "tween",
        }}
        whileInView={{
            scale: 1,
        }}
        
        className="max-w-screen-xl w-[95%] px-4 py-8 mx-auto ">
          <div className="grid grid-cols-1 mt-16 gap-11 max-sm:items-start sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center max-sm:text-start sm:text-left">
              <h1 className="text-[22px] text-red-500 font-bold ">Exclusive</h1>

              <ul className="mt-8 space-y-10 text-sm">
                <li>
                  <p
                    className="text-white transition hover:text-gray-200"
                    href="#"
                  >
                    Subscribe
                  </p>
                </li>

                <li>
                  <p className="transition hover:text-gray-200">
                    {" "}
                    Get 10% off your first order{" "}
                  </p>
                </li>

                <li>
                  <form action="">
                    <div className="flex items-center justify-center gap-0 px-1 py-2 border-2 border-white rounded-lg w-fit">
                      <input
                        type="email"
                        name="email"
                        id=""
                        className="p-0 bg-transparent border-none outline-none"
                        placeholder="Enter your email"
                      />
                      <SendHorizontal />
                    </div>
                  </form>
                </li>
              </ul>
            </div>

            <div className="space-y-10 text-center max-sm:text-start sm:text-left">
              <p className="text-[22px] font-bold ">Support</p>

              <ul className="mt-8 space-y-8 text-sm">
                <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>

                <li>
                  <a className="transition hover:text-gray-700/75" href="">
                    {" "}
                    exclusive@gmail.com{" "}
                  </a>
                </li>

                <li>
                  <a className="transition hover:text-gray-700/75" href="#">
                    {" "}
                    +88015-88888-9999{" "}
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center max-sm:text-start space-y-9 sm:text-left">
              <p className="text-lg font-bold">Account</p>

              <ul className="mt-8 text-sm space-y-9">
                <li>
                  <Link className=" hover:text-gray-200" href="">
                    {" "}
                    My Account
                  </Link>
                </li>

                <li>
                  <div>
                    {" "}
                    <Link
                      className="transition hover:text-gray-200"
                      href="/Signin"
                    >
                      Login
                    </Link>
                    /{" "}
                    <Link className="transition hover:text-gray-200" href="/Signup">
                      Register
                    </Link>
                  </div>
                </li>




                <li>
                  <Link
                    className="text-white transition hover:text-gray-200"
                    href="/MyCart"
                  >
                    Cart{" "}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="text-center max-sm:text-start sm:text-left">
              <p className="text-lg font-bold ">Download App</p>

              <ul className="mt-8 space-y-6 text-sm">
                <li>
                  <span className="text-gray-300">Save $3 with App New User Only</span>
                </li>
<div className="flex items-center gap-3">
  <Image alt="img" src={require("../images/Qrcode 1.png")} width={100} height={100}/>
  <div className="flex flex-col gap-4">
    <Link href="#"><Image alt="img" height={40} src={require("../images/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png")}/></Link>
    <Link href="#"><Image alt="img" height={40} src={require("../images/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png")}/></Link>

  </div>
</div>
<ul className="flex items-start gap-5">
  <li className="h-8 w-8 hover:bg-red-500 hover:text-white transition-all rounded-full bg-[#F5F5F5] text-black flex items-center justify-center cursor-pointer">
    <Link href="#">
    <Facebook />
    </Link>
  </li>
  <li className="h-8 w-8 hover:bg-red-500 hover:text-white transition-all rounded-full bg-[#F5F5F5] text-black flex items-center justify-center cursor-pointer">
    <Link href="#">
    <Twitter />
    </Link>
  </li>
  <li className="h-8 w-8 hover:bg-red-500 hover:text-white transition-all rounded-full bg-[#F5F5F5] text-black flex items-center justify-center cursor-pointer">
    <Link href="#">
    <Instagram />
    </Link>
  </li>
  <li className="h-8 w-8 hover:bg-red-500 hover:text-white transition-all rounded-full bg-[#F5F5F5] text-black flex items-center justify-center cursor-pointer">
    <Link href="#">
    <Linkedin/>
    </Link>
  </li>
  
  
  
  
  
  </ul>
              </ul>
            </div>
          </div>
        <div className="flex items-center max-sm:text-start justify-center mt-[40px] py-5 mb-2 border-t-2 border-[#3D3D3D]">
        <p className="text-[#3D3D3D]">© Copyright Rimel 2022. All right reserved</p>

        </div>
        </motion.div>

      </footer>
    </>
  );
};

export default Footer;
