import { House } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

function Broadcamp() {
    const path = usePathname();
    return <>
    <nav aria-label="Breadcrumb" className="flex mb-5 ml-[25px]">
    <ol className="flex overflow-hidden text-gray-600 border border-gray-200 rounded-lg">
      <li className="flex items-center ">
        <Link
          href="/"
          className="flex h-10 items-center gap-1.5 bg-gray-100 px-2 sm-px-4 transition hover:text-gray-900 "
        >
  <House className='text-[20px]'/>
  
          <span className=" ms-1 sm:ms-1.5 text-xs sm:text-[18px] font-medium"> Home </span>
        </Link>
      </li>
  
      <li className="relative flex items-center">
        <span
          className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"
        >
        </span>
  
        <span
          className="flex items-center h-10 text-xs sm:text-[18px] font-medium transition bg-white pe-2 sm:pe-4 ps-8 hover:text-gray-900"
        >
  {path.split("/")[1]}
        </span>
      </li>
      

      
    </ol>
  </nav>
    
    </>
}

export default Broadcamp