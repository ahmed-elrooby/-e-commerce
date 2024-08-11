"use client"
import React from 'react'
import Link from 'next/link'
import BroadError from './_component/BroadError/BroadError'

const NotFound = () => {
  return<>
  <div className='w-[95%] m-auto'>
<BroadError />    
    <div className="flex flex-col items-center gap-11">
        <h1 className='font-bold text-[30px]'>404 Not Found</h1>
        <p>Your visited page not found. You may go home page.</p>
        <Link href="/" className='py-4 font-bold text-white bg-red-500 rounded-lg px-11'>
        Back to home page
        </Link>
    </div>

  </div>

  </>
}

export default NotFound