"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AddCard from "../AddCard/AddCard";
import UserIcon from "../User/UserIcon";
import AddWhish from "../AddWhish/AddWhish";
import { motion } from "framer-motion";

const Header = () => {
  const [jwt, setJwt] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dark, setDark] = useState(() => localStorage.getItem("dark") === "true");

  useEffect(() => {
    const darkMode = localStorage.getItem("dark") === "true";
    setDark(darkMode);


    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    const token = localStorage.getItem("jwt");
    setJwt(token);
  }, []);

  useEffect(() => {
    localStorage.setItem("dark", dark);


    if (dark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="shadow-lg">
      <div className="flex items-center h-20 gap-8 w-[95%] px-4 mx-auto sm:px-6 lg:px-8">
        <motion.div
                  initial={{ scale: 0.5 }}
                  transition={{
                      duration: 0.5,
                      type: "tween",
                  }}
                  whileInView={{
                      scale: 1,
                  }}
        
        
        className="flex items-center gap-6">
          <h1 className="font-bold text-red-500 text-[25px]">Exclusive</h1>
          <nav

          
          aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link
                  className="font-bold text-red-700 transition text-[16px] hover:text-red-500 focus:text-red-500"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="font-bold text-red-700 transition text-[16px] hover:text-red-500 focus:text-red-500"
                  href="/Contact"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className="font-bold text-red-700 transition text-[16px] hover:text-red-500 focus:text-red-500"
                  href="/About"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </motion.div>

        <div className="flex items-center gap-4 ml-auto">
          <motion.nav
          initial={{ scale: 0.5 }}
          transition={{
              duration: 0.5,
              type: "tween",
          }}
          whileInView={{
              scale: 1,
          }}
          aria-label="Global" className="hidden gap-4 md:flex">
            <AddWhish />
            <AddCard />
            <UserIcon />
            <div onClick={() => setDark(!dark)} className="cursor-pointer transition-all hover:scale-[1.4]">
              {dark ? <Sun className="w-6 h-6 text-yellow-500" /> : <Moon className="w-6 h-6" />}
            </div>
          </motion.nav>
          <motion.div
                    initial={{ scale: 0.5 }}
                    transition={{
                        duration: 0.5,
                        type: "tween",
                    }}
                    whileInView={{
                        scale: 1,
                    }}
          className="flex items-center gap-4 md:hidden">
            <AddWhish />
            <AddCard />
            <UserIcon />
            <div onClick={() => setDark(!dark)} className="cursor-pointer transition-all hover:scale-[1.4]">
              {dark ? <Sun className="w-6 h-6 text-yellow-500" /> : <Moon className="w-6 h-6" />}
            </div>
            <button
              onClick={toggleMenu}
              className="rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75"
            >
              <span className="sr-only">Toggle menu</span>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </motion.div>
        </div>
      </div>

      {isMenuOpen && (
        <nav aria-label="Global" className="p-4 mt-2 bg-white rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center gap-4 text-sm">
            <li>
              <Link
                className="font-bold text-red-700 transition text-[16px] hover:text-red-500 focus:text-red-500"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="font-bold text-red-700 transition text-[16px] hover:text-red-500 focus:text-red-500"
                href="/Contact"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className="font-bold text-red-700 transition text-[16px] hover:text-red-500 focus:text-red-500"
                href="/About"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
