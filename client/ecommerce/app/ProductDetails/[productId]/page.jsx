"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BadgeAlert, BadgeCheck, ShoppingCart } from "lucide-react";
import { fetchApi } from "../../_component/productApi/Product";
import Broadcamp from "@/app/_component/Broadcamp/Broadcamp";
import SkeltonImage from "@/app/_component/SkeltonImage/SkeltonImage";
import SkeltonInfo from "@/app/_component/SkeltonInfo/SkeltonInfo";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/Redux/reducerSlice/ReducerSlice";
import { motion } from 'framer-motion';


const ProductsDetails = ({ params }) => {
  const dispatch = useDispatch()



  const [productDetailsItem, setProductDetailsItem] = useState({});
  const tkn = localStorage.getItem("tkn");
  const fetchProductDetailsApi = async () => {
    try {
      const res = await fetchApi.get(
        `api/products/${params.productId}?populate=*`
      );

      setProductDetailsItem(res.data.data);
    } catch {
      console.error(Error("there was an error"));
    }
  };
  useEffect(() => {
    fetchProductDetailsApi();
  }, [params.ProductId]);








  return (
    <>
      <div className=" mt-[50px]  ">
        <motion.div
        className="w-fit"
        initial={{scale:0.5}}
        transition={{
          duration:0.5,
          type:"tween"
        }}
        whileInView={{
          scale:1
        }}
        >
        <Broadcamp className="mb-8" />

        </motion.div>
        <div
          className="grid items-center justify-between grid-cols-2 gap-2 mx-6 mt-8 max-md:grid-cols-1 max-md:gap-1 max-sm:grid-cols-1"
        >
          {productDetailsItem?.attributes?.image.data?.attributes?.url? (<motion.div
          initial={{x:-200,opacity:0}}
          transition={{duration:0.5,type:"tween"}}
          whileInView={{x:0,opacity:1}}
          
          >            <Image
              src={productDetailsItem?.attributes?.image.data.attributes.url}
              alt="image"
              width={500}
              height={200}
              className="object-cover rounded-lg h-[400px]"
            /></motion.div>

          ) : (
            <SkeltonImage />
          )}

          {productDetailsItem?.attributes ? (<motion.div
          initial={{x:200,opacity:0}}
          transition={{duration:0.7,type:"tween"}}
          
          whileInView={{x:0,opacity:1}}
          >       
               <div className="flex flex-col gap-4">
              <h1 className="font-bold text-[25px]">
                {productDetailsItem?.attributes?.title}
              </h1>
              <p className="mt-2 text-gray-500 leading-extra-loose text-sm/relaxed">
                {productDetailsItem?.attributes?.description &&
                  productDetailsItem?.attributes?.description.map(
                    (desc, id) => (
                      <p key={id}>
                        {desc.children &&
                          desc.children.map((child, childId) => (
                            <span key={childId}>{child.text}</span>
                          ))}
                      </p>
                    )
                  )}
              </p>
              <h4 className="flex items-center gap-2 text-gray-500 capitalize">
                {productDetailsItem?.attributes?.isExisted ? (
                  <BadgeCheck className="text-green-400" />
                ) : (
                  <BadgeAlert className="text-red-500" />
                )}{" "}
                eligible for instant delivery
              </h4>
              <span className="text-red-800 text-[18px] font-bold ">
                {productDetailsItem?.attributes?.price} $
              </span>

              <button onClick={()=>dispatch(addToCart({
                id:productDetailsItem.id,
                title:productDetailsItem?.attributes?.title,
                price:productDetailsItem?.attributes?.price,
                image:productDetailsItem?.attributes?.image.data.attributes.url,
                

              }))}  className="flex uppercase items-center w-fit gap-3 p-2 text-white bg-red-500 rounded-lg text-[18px] font-semibold hover:bg-red-600">
                <ShoppingCart /> shope now
              </button>
            </div>
            </motion.div>

          ) : (
            <SkeltonInfo />
          )}
        </div>
      </div>
    </>
  );
};

export default ProductsDetails;
