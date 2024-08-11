"use client";
import { Eye, Heart, MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { fetchApi } from "../productApi/Product";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import SkeltonSlide from "../SkeletonSlide/SkeltonSlide";
import { useDispatch, useSelector } from "react-redux";
import { addtoWhish } from "@/app/Redux/WhishSlice/WhishSlice";
import { motion } from 'framer-motion';

const OurProducts = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetchApi.get("api/products?populate=*");
      setData(response.data.data);
    } catch {
      console.error("There is an error in your data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const dispatch = useDispatch()

  return (

    <div className="mt-11 mb-11 w-[95%] m-auto relative">
      <div className="flex flex-col items-start gap-3 mb-3 ">
        <div className="flex items-center gap-3">
          <Image
            src={require("../images/Rectangle 17.png")}
            width={15}
            height={30}
            alt="Decoration"
          />
          <h6 className="text-sm font-bold text-red-700">Our Products</h6>
        </div>
        <h1 className="mt-2 font-bold mb-8 text-[25px] tracking-wider">
          Explore Our Products
        </h1>
      </div>

      {
      loading?(<SkeltonSlide className="animate-pulse" />):(      
      <div className="w-[95%] m-auto">
        <Swiper
          spaceBetween={4}
          slidesPerView={4} 
          speed={1000}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className=" mySwiper"
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {data.map((e, idx) => (
            <SwiperSlide        key={idx} >
              <motion.div
                initial={{opacity: 0, scale: 0.3 }}
                transition={{
                    duration: 0.7,
                    type: "tween",
                }}
                whileInView={{
                    scale: 1,
                    opacity: 1
                }}
              
              className=" border-2 border-[#f5f5f5] p-2">
              <div className="relative p-3 max-w-full rounded-lg bg-[#F5F5F5]">
                <Image
                  className="  m-auto   w-[200px] h-[150px] object-cover transition-all hover:scale-[1.2]"
                  src={e.attributes?.image.data?.attributes?.url}
                  width={200}
                  height={200}
                  alt={e.attributes?.title}
                />
                <div className="absolute top-2 right-1">
                  <div className="flex items-center justify-center mb-2 hover:scale-[1.3] text-red-500 transition-all border border-red-500 rounded-full cursor-pointer w-9 h-9 hover:bg-red-700 hover:text-white">
                    <Heart onClick={()=> dispatch(addtoWhish({
                      id:e.id,
                      title:e.attributes?.title,
                      price:e.attributes?.price,
                      image:e.attributes?.image.data?.attributes?.url
                    }))}/>
                  </div>
                  <Link
                    href={`/ProductDetails/${e.id}`}
                    className="flex items-center hover:scale-[1.3] justify-center text-red-500 border border-red-500 rounded-full cursor-pointer transition-all hover:bg-red-700 hover:text-white w-9 h-9"
                  >
                    <Eye />
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-3 mt-7">
                <h1>{e.attributes?.title}</h1>
                <span className="font-bold text-red-500">{e.attributes?.price} $</span>
              </div>
              </motion.div>

            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute flex items-center gap-2 right-10 top-10">
          <div onClick={() =>
                document.querySelector(".mySwiper").swiper.slideNext()
              } className="flex items-center justify-center text-red-500 transition-all border border-red-500 rounded-full cursor-pointer hover:bg-red-700 hover:text-white h-14 w-14">
            <MoveLeft
              className="text-4xl font-bold"
              
            />
          </div>
          <div onClick={() =>
                document.querySelector(".mySwiper").swiper.slidePrev()
              } className="flex items-center justify-center text-red-500 transition-all border border-red-500 rounded-full cursor-pointer hover:bg-red-700 hover:text-white h-14 w-14">

<MoveRight/>
              </div>

        </div>
      </div>)
    }


    </div>
  );
};

export default OurProducts;
