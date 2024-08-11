"use client";
import React, { useEffect, useState } from "react";
import Broad from "../_component/BroadCampPage/Broad";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { Trash2 } from "lucide-react";
import { removeFromCart } from "../Redux/reducerSlice/ReducerSlice";
import {motion} from "framer-motion"
const page = () => {
  const { products } = useSelector((state) => state.cart);
  const [Quantity, setQuantity] = useState(products.map(() => 0));
  const [total, setTotal] = useState(0);
  const handleTotal = () => {
    setTotal(
      products.reduce(
        (acc, curr, index) =>
          acc + calculateSubtotal(curr.price, Quantity[index]),
        0
      )
    );
  };
  useEffect(() => {
    handleTotal();
  }, [Quantity, products]);

  const handleQuantitiy = (index, value) => {
    const newQuantities = [...Quantity];
    newQuantities[index] = value;
    setQuantity(newQuantities);
  };
  const calculateSubtotal = (price, quantity) => price * quantity;

  const dispatch = useDispatch()
  return (
    <>
      <div className="w-[95%] m-auto mt-7">
        <motion.div  initial={{scale:0.2}}
        transition={{
          duration:0.5,
          type:"tween"
        }}
        whileInView={{
          scale:1
        }} >
        <Broad />
        <div class="flex w-full mt-5">
          <table class="table border shadow-lg">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, idx) => (
                <tr className="cursor-pointer hover:shadow-lg" key={idx}>
                  <th className="flex items-center gap-2">
                    <Image
                    className="transition-all hover:scale-[1.4]"
                      alt={product.title}
                      width={50}
                      height={50}
                      src={product.image}
                    />
                    {product.title}
                  </th>
                  <td>{product.price} $</td>
                  <td>
                    <input
                      value={Quantity[idx]}
                      onChange={(e) =>
                        handleQuantitiy(idx, parseInt(e.target.value))
                      }
                      placeholder="your Quantity"
                      className="px-1 py-2 border border-gray-500 rounded-lg"
                      type="number"
                      name=""
                      id=""
                    />
                  </td>
                  <td>{calculateSubtotal(product.price, Quantity[idx])} $</td>
                  <td><Trash2  onClick={()=> dispatch(removeFromCart({
                    id:product.id
                  }))} className="text-red-500 transition-all hover:scale-[1.5]"  /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h1 className="font-bold flex justify-center  text-[20px] text-red-500 mt-5">
          Total Price = {total} $
        </h1>
        </motion.div>

      </div>
    </>
  );
};

export default page;
