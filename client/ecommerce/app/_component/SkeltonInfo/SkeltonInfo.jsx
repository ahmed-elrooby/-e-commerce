import React from "react";

const SkeltonInfo = () => {
  return (
    <>
      <div className="flex flex-col gap-[29px] p-2 animate-pulse">
        <h1 className="w-[220px] max-sm:w-[100px] bg-slate-200 h-[30px] rounded-lg"></h1>
        <p className="mt-2 leading-[2] bg-slate-200 w-[500px]  max-sm:w-[200px] lg:w-[400px] h-[100px] rounded-lg"></p>
        <h3 className="bg-slate-200 w-[200px] rounded-lg h-[30px]"></h3>
        <span className="bg-slate-200 w-[50px] h-[20px] rounded-lg"></span>
        <button className="w-[120px] bg-slate-200 h-[50px] rounded-2xl"></button>
      </div>
    </>
  );
};

export default SkeltonInfo;
