import { useState } from "react";
import { Icon } from "@iconify/react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [pass, setPass] = useState("");
  const [showPass, setShowPass] = useState(false);

  return (
    <>
      <div className="relative">
        <div className="absolute top-0 -z-2 bg-rose-600 w-12 h-12 p-12 rounded-full "></div>
        <div className="absolute top-0 right-0 -z-2 bg-green-700 w-8 h-8 p-12 rounded-full "></div>
        <div className="absolute bottom-0 right-40 -z-2 bg-violet-700 w-8 h-8 p-24 rounded-full "></div>

        <div className="relative z-10 flex flex-col p-6  aspect-video  rounded-xl backdrop-blur-xl bg-white/30 shadow-2xl ring-1 ring-black/5 outline outline-white/40">
          <div className="flex mx-auto font-heading font-bold text-xl">
            Sign Up
          </div>
          <div className="flex flex-col mt-3">
            <label htmlFor="name" className="font-heading text-lg">
              Name:
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              className="bg-transparent p-1 border-b-2 border-b-rose-700"
            />
          </div>
          <div className="flex flex-col mt-3">
            <label htmlFor="email" className="font-heading text-lg">
              Email:
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              name="email"
              className="bg-transparent p-1 border-b-2 border-b-rose-700"
            />
          </div>
          <div className="flex flex-col mt-3">
            <label htmlFor="pass" className="font-heading text-lg">
              Password:
            </label>
            <div className="flex justify-between border-b-2 border-b-rose-700">
              <input
                onChange={(e) => setPass(e.target.value)}
                name="pass"
                type={showPass ? "text" : "password"}
                className="bg-transparent p-1 "
              />
              {showPass ? (
                <Icon
                  icon={"mdi:eye-outline"}
                  className="w-10 h-10 text-gray-600"
                  onClick={() => setShowPass((state) => !state)}
                />
              ) : (
                <Icon
                  icon={"ant-design:eye-invisible-outlined"}
                  className="w-10 h-10 text-gray-600"
                  onClick={() => setShowPass((state) => !state)}
                />
              )}
            </div>
            <div className="flex items-center mt-3 gap-6">
              <label htmlFor="gender" className="font-heading text-lg">
                Gender:
              </label>
              <div className="flex gap-2">
                <input
                  onChange={(e) => setGender(e.target.value)}
                  type="radio"
                  name="gender"
                  value="Male"
                  className="accent-rose-500"
                />
                Male
                <input
                  onChange={(e) => setGender(e.target.value)}
                  type="radio"
                  name="gender"
                  value="Female"
                  className="accent-rose-500"
                />
                Female
              </div>

             
            </div>
         
          </div>
          <div className="mt-12 rounded-lg font-Body font-bold text-lg text-center px-3 py-4 w-full shadow-2xl text-white bg-accent-500">
            Sign Up
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
