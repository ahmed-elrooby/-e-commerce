import { House } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const Broad = () => {
    const path = usePathname();

  return <>
      <nav aria-label="Breadcrumb" className="flex mb-5 ">
    <ol className="flex overflow-hidden ">
      <li className="flex items-center ">
        <Link
          href="/"
          className="flex h-10 items-center gap-1.5 px-2 sm-px-4 transition hover:text-gray-500 "
        >
  <House className='text-[20px]'/>
  
          <span className=" text-xs sm:text-[18px] font-medium"> Home </span>
        </Link>
      </li>
  
      <li className="relative flex items-center">
        <span
          className=""
        >
          /
        </span>
  
        <span
          className="flex items-center h-10 text-xs sm:text-[18px] font-medium transition  pe-2 sm:pe-4 ps-8"
        >
  {path.split("/")[1]}
        </span>
      </li>
      

      
    </ol>
  </nav>
  
  </>
}

export default Broad