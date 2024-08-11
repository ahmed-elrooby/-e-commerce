import React from 'react'

const SkeltonSlide = () => {
  return <>
  <div className='grid grid-cols-5 gap-1'>
  {   Array.from({ length: 5 }).map((_, idx) => (
            <div key={idx} className="p-4 border rounded-lg shadow-sm animate-pulse">
              <div className="bg-gray-300 rounded-lg h-60"></div>
              <div className="h-6 mt-4 w-[50px] bg-gray-300 rounded-lg"></div>
              <div className="h-4 mt-2 bg-gray-300 w-[50px] rounded-lg"></div>
              <div className="h-4 mt-2 bg-gray-300 rounded-lg"></div>
            </div>
          ))}
  </div>

  
  </>
}

export default SkeltonSlide