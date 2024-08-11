"use client";
import axios from "axios";
import Joi from "joi";
import { Eye, EyeOff, Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import {motion} from "framer-motion"
function SignIn() {
  const successMessage = () => toast.success("Welcome to my site!");
  const errorMessage = () => toast.error("Check your data, please");
  const creatingError = () => toast.error("Invalid email or password");
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({
    identifier: "",
    password: "",
  });

  // to get data from user
  const getDataFromUser = (e) => {
    const inputName = e.target.id;
    const inputValue = e.target.value;
    let newUser = { ...user };
    newUser[inputName] = inputValue;
    setUser(newUser);
  };

  //make regular
  const regularFunction = (e) => {
    e.preventDefault();

    const schema = Joi.object({
      identifier: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required(),
      password: Joi.string()
        .pattern(/^[A-Za-z0-9]{6,8}$/)
        .required(),
    });
    const response = schema.validate(user, { abortEarly: false });
    console.log(response);
    if (response.error == undefined) {
      setLoading(true);
      sendData();
    } else {
      creatingError();
    }
  };

  // call api
  const sendData = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        "http://localhost:1337/api/auth/local",
        user
      );

      successMessage();
      setLoading(false);

      router.push("/");
      localStorage.setItem("jwt", data.jwt);
    } catch (error) {
      setLoading(false);

      errorMessage();
    }
  };

  const handleShowPass = () => {
    setShowPassword((ele) => !ele);
  };

  return (
    <>
      <section className="w-[95%] mx-auto mt-[20px]">
        <div className="grid items-center justify-around grid-cols-2 gap-2 max-md:grid-cols-1 max-sm:grid-cols-1">
         <motion.div
           
        initial={{ scale:0.5, opacity: 0.5 }} 
        whileInView={{ scale:1, opacity: 1 }} 
        transition={{ duration: 0.5, type: "tween" }} 
         >
         <Image
            alt="img"
            src={require("../images/login.svg")}
            className="object-cover w-full h-full rounded-lg"
          />

         </motion.div>
          
          <motion.main
           initial={{ scale:0.5, opacity: 0.5 }} 
           whileInView={{ scale:1, opacity: 1 }} 
           transition={{ duration: 0.5, type: "tween" }} 
          
          
          className="flex items-center h-full w-full justify-center px-4 py-12 sm:px-12]">
            <div>
              <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to Exclusive
              </h1>
              <p className="mt-6 font-bold text-black">Enter your details below</p>
              <form
                action="#"
                className="grid w-full grid-cols-2 gap-6 mt-8"
                onSubmit={regularFunction}
              >
                <div className="col-span-5">
                  <input
                    required
                    placeholder="Email"
                    onChange={getDataFromUser}
                    type="email"
                    id="identifier"
                    name="email"
                    className="w-full p-2 mt-1 text-sm text-[#999999] border-b border-[#808080] focus:outline-none"
                  />
                </div>

                <div className="relative col-span-5">
                  <input
                    required
                    placeholder="Password"
                    onChange={getDataFromUser}
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    className="w-full p-2 mt-1 text-sm text-black border-b border-[#808080] focus:outline-none"
                  />
                  <span
                    onClick={handleShowPass}
                    className="absolute cursor-pointer right-2 top-3"
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </span>
                </div>

                <div className="col-span-5">
                  <button className="inline-block w-full px-12 py-3 text-sm font-medium text-white transition bg-red-500 border border-red-600 rounded-md shrink-0 hover:bg-transparent hover:text-red-600 focus:outline-none active:text-red-500">
                    {loading ? <Loader className="m-auto animate-spin" /> : "Log In"}
                  </button>
                </div>
                <div className="col-span-5 font-bold">
                  Don't have an account?
                  <Link href="/Signup" className="text-red-500">
                    Click here to create a new account
                  </Link>
                </div>
              </form>
            </div>
          </motion.main>
        </div>
      </section>
    </>
  );
}
export default SignIn;
