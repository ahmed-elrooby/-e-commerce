import { ArrowUpFromDot } from "lucide-react";
import React, { useState } from "react";

const Up = () => {
  const [show, setShow] = useState(false);
  window.addEventListener("scroll", () => {
    window.scrollY > 400 ? setShow(true) : setShow(false);
  });
  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {show ? (
        <div
          onClick={handleTop}
          className="flex  fixed bottom-[100px] right-[20px] items-center justify-center w-12 h-12 font-bold text-red-500 transition-all border-2 border-red-500 rounded-full cursor-pointer hover:bg-red-500 hover:text-white"
        >
          <ArrowUpFromDot />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Up;
