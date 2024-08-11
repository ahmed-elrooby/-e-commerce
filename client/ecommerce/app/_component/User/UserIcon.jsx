"use client";
import { LogOut, User, WalletCards } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const UserIcon = () => {
  const [jwt, setJwt] = useState(null);
  const [usericon, setUsericon] = useState(false);

  const router = useRouter();
  const showUser = () => {
    usericon ? setUsericon(false) : setUsericon(true);
  };
  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setJwt(null);
    router.push("/Signin");
  };
  return (
    <div className="relative">
      <User onClick={showUser} className="cursor-pointer  transition-all hover:scale-[1.4]" />

      {usericon && (
        <ul className="bg-gradient-to-r z-[100] text-white from-[#956E99] to-[#a267adc8] cursor-pointer flex flex-col select-none absolute gap-2 custom-after rounded-lg  top-[33px] right-0 p-3 w-max">
          <li className="flex items-center gap-2 p-2 font-bold border-b ">
            <User />
            <h5>Manage My Account </h5>
          </li>
          <li className="flex hover:bg-[#956E99] transition p-2 hover:rounded-lg items-center rounded-lg gap-2">
            <WalletCards />
            
             <Link href="/MyCart"
             ><h5>My Order </h5></Link>
          </li>
          <li className="flex hover:bg-[#956E99] transition p-2 hover:rounded-lg items-center rounded-lg gap-2"onClick={handleLogout} >
          <LogOut />
            <h5>Logout</h5>
          </li>
        </ul>
      )}
    </div>
  );
};

export default UserIcon;
