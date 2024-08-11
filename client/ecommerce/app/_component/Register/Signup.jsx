"use client";

import axios from "axios";
import Joi, { date } from "joi";
import { Loader,EyeOff,Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

function SignUp() {
  const successMessage = () => toast.success("Account Created Successfully");
  const errorMessage = () => toast.error("Email or Username Are Already Taken");
  const cratingError = () => toast.error("Error while Creating  Account");
const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    last_name: "",
    email: "",
    password: "",
    phone: "",
    age: 0,
  });


  const handleShowPassword =()=>{
    setShowPassword((prev) => !prev);

  }
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
      username: Joi.string().alphanum().min(3).max(7).required(),
      last_name: Joi.string().alphanum().min(3).max(7).required(),
      email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required(),
      password: Joi.string()
        .pattern(/^[A-Za-z0-9]{6,8}$/)
        .required(),
      phone: Joi.string()
        .pattern(/^(010|011|012|015)\d{8}$/)
        .required(),
      age: Joi.number().min(18).max(60).required(),
    });
    const response = schema.validate(user, { abortEarly: false });
    if (response.error == undefined) {
      sendData();
      setLoading(true);
    } else {
      cratingError();
    }
  };

  // call api
  const sendData = async () => {
      setLoading(false);
    try {
      const { data } = await axios.post(
        "http://localhost:1337/api/auth/local/register",
        user
      );

      successMessage();
      setLoading(false)
      router.push("/Signin");
    } catch (error) {
      setLoading(false);
      errorMessage();
    }
  };

  return (
    <>
      <section className=" w-[95%] mx-auto  mt-[20px]">
        <div className="grid items-center justify-around grid-cols-2 gap-2 max-md:grid-cols-1 max-sm:grid-cols-1">
        <motion.div
  
  initial={{ x: -200, opacity: 0.5 }} 
  whileInView={{ x: 0, opacity: 1 }} 
  transition={{ duration: 0.5, type: "tween" }} 
        >
        <Image
          alt="img"
            src={require("../images/login.svg")}
            className="object-cover w-full h-full rounded-lg"
          />
        </motion.div>

          <motion.main
            
        initial={{ x: 200, opacity: 0.5 }} 
        whileInView={{ x: 0, opacity: 1 }} 
        transition={{ duration: 0.5, type: "tween" }} 
          
          className="flex items-center justify-center w-full h-full px-4 py-12 sm:px-12 ">
            <div>
              <h1 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to Exclusive
              </h1>

              <form
                action="#"
                className="grid w-full grid-cols-5 gap-4 mt-8"
                onSubmit={regularFunction}
              >
                <div className="col-span-4 ">
                  <input
                    required
                    placeholder="First Name"
                    onChange={getDataFromUser}
                    type="text"
                    id="username"
                    name="username"
                    className="w-full p-2 mt-1 text-sm  text-black border-b border-[#808080] focus:outline-none "
                  />
                </div>

                <div className="col-span-4 ">
                  <input
                    required
                    onChange={getDataFromUser}
                    placeholder="Last Name"
                    type="text"
                    id="last_name"
                    name="last_name"
                    className="w-full p-2 mt-1 text-sm  text-black border-b border-[#808080] focus:outline-none "
                  />
                </div>

                <div className="col-span-4 ">
                  <input
                    required
                    onChange={getDataFromUser}
                    placeholder="Email"
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-2 mt-1 text-sm  text-black border-b border-[#808080] focus:outline-none "
                  />
                </div>

                <div className="relative col-span-4">
                  <input
                    placeholder="Password"
                    required
                    onChange={getDataFromUser}
                    type={showPassword?"text":"password"}
                    id="password"
                    name="password"
                    className="w-full p-2 mt-1 text-sm  text-black border-b border-[#808080] focus:outline-none "
                  />
                  <span onClick={handleShowPassword} className="absolute right-2 top-3">
{showPassword?<EyeOff /> :<Eye />}
                  </span>
                </div>

                <div className="col-span-4 ">
                  <input
                    placeholder="Phone Number"
                    required
                    onChange={getDataFromUser}
                    type="text"
                    id="phone"
                    name="phone"
                    className="w-full p-2 mt-1 text-sm  text-black border-b border-[#808080] focus:outline-none "
                  />
                </div>
                <div className="col-span-4 ">
                  <input
                    placeholder="your age must be greater than 18 years"
                    required
                    onChange={getDataFromUser}
                    type="number"
                    id="age"
                    name="age"
                    className="w-full p-2 mt-1 text-sm  text-[#999999] border-b border-[#808080] focus:outline-none "
                  />
                </div>

                <div className="col-span-4 ">
                  <button className="inline-block w-full px-12 py-3 text-sm font-medium text-white transition bg-red-500 border border-red-600 rounded-md shrink-0 hover:bg-transparent hover:text-red-600 focus:outline-none active:text-red-500">
                  {loading?<Loader className="m-auto animate-spin" />:" Create Account"}
                  </button>
                </div>
                <div className="col-span-4 ">
                  <p className="gap-2 mt-4 text-sm text-gray-500 sm:mt-0">
                    Already have an account?
                    <Link
                      href="/Signin"
                      className="pb-1 ml-2 font-bold text-red-500 border-b border-gray-500"
                    >
                      Log In 
                    </Link>
                    
                  </p>
                </div>
              </form>
            </div>
          </motion.main>
        </div>
      </section>
    </>
  );
}
export default SignUp;
