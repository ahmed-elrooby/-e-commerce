
"use client"
import { removeFromCart } from '@/app/Redux/reducerSlice/ReducerSlice'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const AddCard = () => {
  const dispatch = useDispatch()

const {products} = useSelector(state => state.cart)

    const [cart, setCart] = useState(false)

    const showCart =()=>{
        cart? setCart(false):setCart(true)
    }
  return (
    <div className='relative bottom-0 w-[95%] m-auto '
   
    >
      <div className='transition-all hover:scale-[1.4]' onClick={showCart} >
      <ShoppingCart   strokeWidth={2.25}  className='cursor-pointer'/>
      <span className='absolute flex select-none items-center cursor-pointer justify-center top-[-3px] left-[14px] w-[17px] h-[17px] text-[14px] rounded-full bg-red-500 text-white'>{products.length}</span>
      </div>
      


  {
    products.length > 0 &&  cart?
    <ul className='bg-gradient-to-r z-[100] max-h-[300px] overflow-scroll text-white from-[#956E99] to-[#a267adc8] cursor-pointer flex flex-col select-none absolute gap-3 max-sm:gap-1  rounded-lg  top-[33px] max-sm:right-[-129px] right-0 p-3  max-sm:w-[363px]   lg:w-max xl:w-max'>
  
    {
      products.map((product,idx)=>  <Link href={`/ProductDetails/${product?.id}`} key={idx}  className="flex relative items-center gap-4 rounded-lg p-3 hover:bg-[#956E99] transition  hover:rounded-lg">
      <Image
      alt={product.title}
      width={100}
      height={100}
      src={product.image}
        className="object-cover transition-all rounded size-16 hover:scale-[1.1]"
      />
    
    
        <h3 className="text-[17px]">{product.title}</h3>
        <span className='px-2 py-1 font-bold transition-all border border-red-500 rounded-lg hover:text-white hover:bg-red-500'>{product.price} $</span>
    
    
    <span onClick={()=> dispatch(removeFromCart({
      id:product.id
    }))} className='absolute flex items-center justify-center w-5 h-5 font-bold text-white bg-red-600 rounded-full top-1 right-1'>X</span>
    
    </Link>
     )
    }
  
  
  <Link href="/MyCart" className='flex items-center hover:scale-[0.9] justify-center p-2 text-white transition-all bg-red-500 rounded-lg hover:bg-red-700'>view cart</Link>

  
     </ul>:""

  }



    </div>
  )
}

export default AddCard